import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  onSnapshot, 
  collection, 
  deleteDoc 
} from 'firebase/firestore';
import { db, withTimeout } from '../firebase';

export interface VisitorStats {
  totalVisits: number;
  todayVisits: number;
  onlineUsers: number;
  lastUpdated: string;
}

// Baseline platform untuk akumulasi total kunjungan yang telah berjalan
const BASE_TOTAL_VISITS = 18650;

// Cache memory & localStorage keys
const STORAGE_KEYS = {
  SESSION_ID: 'fd_visitor_session_id',
  VISIT_LOGGED: 'fd_visitor_logged_session',
  CACHED_TOTAL: 'fd_cached_total_visits',
  CACHED_TODAY: 'fd_cached_today_visits_v2',
  CACHED_DATE: 'fd_cached_today_date'
};

function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'server_session';
  let sessionId = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
  if (!sessionId) {
    sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
  }
  return sessionId;
}

// State in-memory (Default murni: 1 pengguna aktif dari sesi saat ini)
let currentStats: VisitorStats = {
  totalVisits: BASE_TOTAL_VISITS,
  todayVisits: 1,
  onlineUsers: 1,
  lastUpdated: new Date().toISOString()
};

// Listeners
const listeners = new Set<(stats: VisitorStats) => void>();

function notifyListeners() {
  listeners.forEach((callback) => {
    try {
      callback({ ...currentStats });
    } catch (e) {
      console.warn('Error in visitor stats callback:', e);
    }
  });
}

/**
 * Mendapatkan data statistik terkini secara sinkronus
 */
export function getVisitorStats(): VisitorStats {
  return { ...currentStats };
}

/**
 * Berlangganan (subscribe) terhadap pembaruan statistik kunjungan & online users
 */
export function subscribeVisitorStats(callback: (stats: VisitorStats) => void): () => void {
  listeners.add(callback);
  // Panggil callback segera dengan data terkini
  callback({ ...currentStats });

  return () => {
    listeners.delete(callback);
  };
}

/**
 * Mencatat kunjungan unik sesi baru ke Firestore secara 100% PURE REAL-TIME
 */
async function logVisitSession(): Promise<void> {
  if (typeof window === 'undefined') return;

  const todayStr = getTodayDateString();
  const isVisitLogged = sessionStorage.getItem(STORAGE_KEYS.VISIT_LOGGED);

  // Ambil cache lokal
  const cachedTotal = parseInt(localStorage.getItem(STORAGE_KEYS.CACHED_TOTAL) || '0', 10);
  const cachedToday = parseInt(localStorage.getItem(STORAGE_KEYS.CACHED_TODAY) || '0', 10);
  const cachedDate = localStorage.getItem(STORAGE_KEYS.CACHED_DATE);

  if (cachedTotal > 0) {
    currentStats.totalVisits = Math.max(currentStats.totalVisits, cachedTotal);
  }
  if (cachedDate === todayStr && cachedToday > 0) {
    currentStats.todayVisits = Math.max(currentStats.todayVisits, cachedToday);
  } else if (cachedDate !== todayStr) {
    currentStats.todayVisits = 1;
    localStorage.setItem(STORAGE_KEYS.CACHED_DATE, todayStr);
    localStorage.setItem(STORAGE_KEYS.CACHED_TODAY, '1');
  }

  // Jika sesi ini belum dihitung
  if (!isVisitLogged) {
    sessionStorage.setItem(STORAGE_KEYS.VISIT_LOGGED, 'true');
    currentStats.totalVisits += 1;
    currentStats.todayVisits += 1;
    localStorage.setItem(STORAGE_KEYS.CACHED_TOTAL, String(currentStats.totalVisits));
    localStorage.setItem(STORAGE_KEYS.CACHED_TODAY, String(currentStats.todayVisits));
    localStorage.setItem(STORAGE_KEYS.CACHED_DATE, todayStr);
    notifyListeners();

    // Kirim ke Firestore jika tersedia
    if (db) {
      try {
        const trafficDocRef = doc(db, 'siteStats', 'traffic');
        const docSnap = await withTimeout(getDoc(trafficDocRef), 3500);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const docDate = data.todayDate || '';

          if (docDate === todayStr) {
            const isPure = data.pureRealtime === true;
            if (isPure) {
              await withTimeout(updateDoc(trafficDocRef, {
                totalVisits: increment(1),
                todayVisits: increment(1),
                lastUpdated: new Date().toISOString()
              }), 3500);
            } else {
              // Transisi pertama kali dari baseline lama ke 100% Pure Real-Time
              await withTimeout(updateDoc(trafficDocRef, {
                totalVisits: increment(1),
                todayVisits: 1,
                pureRealtime: true,
                lastUpdated: new Date().toISOString()
              }), 3500);
            }
          } else {
            // Hari baru, reset todayVisits murni ke 1
            await withTimeout(updateDoc(trafficDocRef, {
              totalVisits: increment(1),
              todayVisits: 1,
              todayDate: todayStr,
              pureRealtime: true,
              lastUpdated: new Date().toISOString()
            }), 3500);
          }
        } else {
          // Buat dokumen pertama kali
          await withTimeout(setDoc(trafficDocRef, {
            totalVisits: BASE_TOTAL_VISITS + 1,
            todayVisits: 1,
            todayDate: todayStr,
            pureRealtime: true,
            lastUpdated: new Date().toISOString()
          }), 3500);
        }
      } catch (err) {
        console.warn('Gagal sinkronisasi kunjungan ke Firestore (menggunakan fallback lokal):', err);
      }
    }
  }
}

/**
 * Mengirim detak jantung (heartbeat) keberadaan online sesi saat ini
 */
async function sendSessionHeartbeat(sessionId: string, isOnline = true): Promise<void> {
  if (!db || typeof window === 'undefined') return;

  try {
    const sessionDocRef = doc(db, 'activeSessions', sessionId);
    if (isOnline) {
      await withTimeout(setDoc(sessionDocRef, {
        sessionId,
        lastActiveAt: new Date().toISOString(),
        timestamp: Date.now(),
        isOnline: true
      }, { merge: true }), 3000);
    } else {
      await withTimeout(deleteDoc(sessionDocRef), 2000);
    }
  } catch (err) {
    // Ignored silently for quiet presence tracking
  }
}

/**
 * Inisialisasi pelacakan kunjungan & keberadaan online untuk seluruh sesi aplikasi
 */
let isInitialized = false;

export function initVisitorTracking(): () => void {
  if (isInitialized || typeof window === 'undefined') {
    return () => {};
  }
  isInitialized = true;

  const sessionId = getOrCreateSessionId();

  // 1. Catat sesi kunjungan
  logVisitSession();

  // 2. Kirim heartbeat pertama
  sendSessionHeartbeat(sessionId, true);

  // 3. Fast Heartbeat berkala tiap 15 detik selama halaman dibuka (Presisi Real-Time)
  const heartbeatInterval = window.setInterval(() => {
    if (document.visibilityState === 'visible') {
      sendSessionHeartbeat(sessionId, true);
    }
  }, 15000);

  // 4. Update saat visibility berubah (tab diminimize atau difokuskan)
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      sendSessionHeartbeat(sessionId, true);
    }
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // 5. Bersihkan sesi secara instan saat jendela ditutup
  const handleUnload = () => {
    sendSessionHeartbeat(sessionId, false);
  };
  window.addEventListener('beforeunload', handleUnload);

  // 6. Real-time listener untuk data kunjungan di Firestore (jika aktif)
  let unsubscribeTraffic: (() => void) | null = null;
  let unsubscribeSessions: (() => void) | null = null;

  if (db) {
    try {
      // Dengarkan perubahan akumulasi kunjungan
      const trafficDocRef = doc(db, 'siteStats', 'traffic');
      unsubscribeTraffic = onSnapshot(trafficDocRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          const todayStr = getTodayDateString();
          if (typeof data.totalVisits === 'number') {
            currentStats.totalVisits = Math.max(BASE_TOTAL_VISITS, data.totalVisits);
          }
          if (data.todayDate === todayStr && typeof data.todayVisits === 'number') {
            // Jika dokumen sudah pureRealtime atau nilainya riil
            currentStats.todayVisits = Math.max(1, data.pureRealtime ? data.todayVisits : (data.todayVisits > 200 ? 1 : data.todayVisits));
          } else if (data.todayDate !== todayStr) {
            currentStats.todayVisits = 1;
          }
          if (data.lastUpdated) {
            currentStats.lastUpdated = data.lastUpdated;
          }
          notifyListeners();
        }
      }, (err) => {
        console.warn('Traffic onSnapshot warning:', err);
      });

      // Dengarkan jumlah sesi aktif 100% PURE REAL-TIME
      const sessionsColl = collection(db, 'activeSessions');
      unsubscribeSessions = onSnapshot(sessionsColl, (snap) => {
        // Toleransi sesi aktif: 30 detik terakhir
        const activeThreshold = Date.now() - 30 * 1000;
        const staleThreshold = Date.now() - 90 * 1000; // Sesi mati > 90 detik
        let activeCount = 0;

        snap.docs.forEach((d) => {
          const sData = d.data();
          if (sData.timestamp && sData.timestamp >= activeThreshold && sData.isOnline !== false) {
            activeCount++;
          } else if (sData.timestamp && sData.timestamp < staleThreshold) {
            // Garbage collector otomatis: bersihkan dokumen yang sudah mati agar kuota hemat
            deleteDoc(d.ref).catch(() => {});
          }
        });

        // 100% Pure Real-Time: murni menghitung sesi yang tersambung
        // Minimal 1 karena user sendiri sedang aktif di browser ini
        currentStats.onlineUsers = Math.max(1, activeCount);
        notifyListeners();
      }, (err) => {
        console.warn('Active sessions onSnapshot warning:', err);
      });
    } catch (e) {
      console.warn('Setup firestore listeners error:', e);
    }
  }

  return () => {
    clearInterval(heartbeatInterval);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('beforeunload', handleUnload);
    if (unsubscribeTraffic) unsubscribeTraffic();
    if (unsubscribeSessions) unsubscribeSessions();
  };
}
