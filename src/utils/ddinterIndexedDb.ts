import { DrugInteraction } from '../types';
import { getDDInterCanonicalNames } from '../data/ddinterSynonyms';

const DB_NAME = 'farmasi_druggist_ddinter_db';
const DB_VERSION = 1;
const STORE_NAME = 'interactions';

export interface IndexedDbStats {
  totalCount: number;
  isInitialized: boolean;
  dbName: string;
}

let dbInstance: IDBDatabase | null = null;
let dbInitPromise: Promise<IDBDatabase | null> | null = null;

/**
 * Normalizes two drug names into a single canonical lookup key (e.g., "aspirin__warfarin")
 */
export function createCanonicalPairKey(nameA: string, nameB: string): string {
  const cleanA = (nameA || '').toLowerCase().trim();
  const cleanB = (nameB || '').toLowerCase().trim();
  return [cleanA, cleanB].sort().join('__');
}

/**
 * Initializes or retrieves the singleton IndexedDB connection
 */
export async function initDDInterDatabase(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !('indexedDB' in window)) {
    return null;
  }

  if (dbInstance) {
    return dbInstance;
  }

  if (dbInitPromise) {
    return dbInitPromise;
  }

  dbInitPromise = new Promise((resolve) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        // Indexes for lightning-fast lookups
        store.createIndex('pairKey', 'pairKey', { unique: false });
        store.createIndex('drugAName', 'drugAName', { unique: false });
        store.createIndex('drugBName', 'drugBName', { unique: false });
        store.createIndex('severity', 'severity', { unique: false });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = (event.target as IDBOpenDBRequest).result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      console.warn('Failed to open DDInter IndexedDB:', (event.target as IDBOpenDBRequest).error);
      resolve(null);
    };
  });

  return dbInitPromise;
}

/**
 * Saves a batch of DrugInteractions to IndexedDB using chunked transactions
 * to prevent freezing the UI thread.
 */
export async function saveInteractionsToIndexedDb(
  items: DrugInteraction[],
  chunkSize = 1000
): Promise<number> {
  const db = await initDDInterDatabase();
  if (!db || items.length === 0) return 0;

  let totalSaved = 0;

  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      chunk.forEach((item) => {
        const pairKey = createCanonicalPairKey(item.drugAName, item.drugBName);
        const record = {
          ...item,
          pairKey
        };
        store.put(record);
      });

      transaction.oncomplete = () => {
        totalSaved += chunk.length;
        resolve();
      };

      transaction.onerror = () => {
        console.warn('Error saving batch to IndexedDB:', transaction.error);
        reject(transaction.error);
      };
    });
  }

  return totalSaved;
}

/**
 * Fast lookup for an interaction between two drugs in IndexedDB (Tier 2)
 * Enhanced with DDInter 2.0 synonym resolution (e.g. Parasetamol <-> Acetaminophen)
 */
export async function findInteractionInIndexedDb(
  drugA: string,
  drugB: string
): Promise<DrugInteraction | null> {
  const db = await initDDInterDatabase();
  if (!db) return null;

  const namesA = getDDInterCanonicalNames(drugA);
  const namesB = getDDInterCanonicalNames(drugB);

  const candidateKeys = new Set<string>();
  candidateKeys.add(createCanonicalPairKey(drugA, drugB));

  for (const nA of namesA) {
    for (const nB of namesB) {
      candidateKeys.add(createCanonicalPairKey(nA, nB));
    }
  }

  return new Promise((resolve) => {
    try {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('pairKey');

      const allMatches: DrugInteraction[] = [];
      let pendingRequests = candidateKeys.size;

      if (pendingRequests === 0) {
        resolve(null);
        return;
      }

      candidateKeys.forEach((key) => {
        const request = index.getAll(key);
        request.onsuccess = () => {
          if (request.result && request.result.length > 0) {
            allMatches.push(...request.result);
          }
          pendingRequests--;
          if (pendingRequests === 0) {
            if (allMatches.length === 0) {
              resolve(null);
              return;
            }
            const SEV_ORDER: Record<string, number> = { Major: 3, Moderate: 2, Minor: 1, Unknown: 0 };
            const sorted = [...allMatches].sort((a, b) => (SEV_ORDER[b.severity] || 0) - (SEV_ORDER[a.severity] || 0));
            resolve(sorted[0]);
          }
        };
        request.onerror = () => {
          pendingRequests--;
          if (pendingRequests === 0) {
            if (allMatches.length === 0) {
              resolve(null);
            } else {
              const SEV_ORDER: Record<string, number> = { Major: 3, Moderate: 2, Minor: 1, Unknown: 0 };
              const sorted = [...allMatches].sort((a, b) => (SEV_ORDER[b.severity] || 0) - (SEV_ORDER[a.severity] || 0));
              resolve(sorted[0]);
            }
          }
        };
      });
    } catch (e) {
      resolve(null);
    }
  });
}

/**
 * Returns stats on current IndexedDB archive
 */
export async function getIndexedDbStats(): Promise<IndexedDbStats> {
  const db = await initDDInterDatabase();
  if (!db) {
    return { totalCount: 0, isInitialized: false, dbName: DB_NAME };
  }

  return new Promise((resolve) => {
    try {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const countRequest = store.count();

      countRequest.onsuccess = () => {
        resolve({
          totalCount: countRequest.result || 0,
          isInitialized: true,
          dbName: DB_NAME
        });
      };

      countRequest.onerror = () => {
        resolve({ totalCount: 0, isInitialized: true, dbName: DB_NAME });
      };
    } catch (e) {
      resolve({ totalCount: 0, isInitialized: false, dbName: DB_NAME });
    }
  });
}

export interface DDInterPartsManifest {
  totalInteractions: number;
  totalParts: number;
  chunkSize: number;
  generatedAt: string;
  parts: {
    part: number;
    fileName: string;
    count: number;
    sizeBytes: number;
    sizeMB: string;
  }[];
}

export type SyncProgressCallback = (loaded: number, total: number, currentPart: number, totalParts: number) => void;

let syncInProgressPromise: Promise<{ seeded: boolean; count: number }> | null = null;

/**
 * Completely clears the IndexedDB interaction store
 */
export async function clearIndexedDb(): Promise<void> {
  const db = await initDDInterDatabase();
  if (!db) return;
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const req = store.clear();
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * Progressively syncs interactions from chunked parts into IndexedDB
 * preventing memory spikes or UI freezing.
 */
export async function syncIndexedDbFromParts(
  onProgress?: SyncProgressCallback,
  force = false
): Promise<{ seeded: boolean; count: number }> {
  if (typeof window === 'undefined') return { seeded: false, count: 0 };
  if (syncInProgressPromise) return syncInProgressPromise;

  syncInProgressPromise = (async () => {
    try {
      const stats = await getIndexedDbStats();
      
      // Fetch manifest to determine target total interactions
      const manifestRes = await fetch('/data/ddinter_parts/manifest.json');
      if (!manifestRes.ok) {
        console.warn('Could not fetch DDInter manifest from /data/ddinter_parts/manifest.json');
        return { seeded: false, count: stats.totalCount };
      }
      const manifest: DDInterPartsManifest = await manifestRes.json();
      const targetTotal = manifest.totalInteractions || 195864;

      // If already fully populated and not forced, return current count
      if (!force && stats.totalCount >= targetTotal) {
        return { seeded: false, count: stats.totalCount };
      }

      // If upgrading from an old incomplete database (e.g. 954 items), clear old records first
      if (stats.totalCount > 0 && stats.totalCount < targetTotal) {
        console.log(`[DDInter IndexedDB] Upgrading existing database (${stats.totalCount} items -> ${targetTotal} items)...`);
        await clearIndexedDb();
      }

      let cumulativeSaved = 0;
      for (let i = 0; i < manifest.parts.length; i++) {
        const partInfo = manifest.parts[i];
        const partUrl = `/data/ddinter_parts/${partInfo.fileName}`;
        
        try {
          const partRes = await fetch(partUrl);
          if (!partRes.ok) {
            console.warn(`[DDInter IndexedDB] Failed to fetch part: ${partUrl}`);
            continue;
          }
          const partItems: DrugInteraction[] = await partRes.json();
          if (Array.isArray(partItems) && partItems.length > 0) {
            await saveInteractionsToIndexedDb(partItems, 1000);
            cumulativeSaved += partItems.length;
            if (onProgress) {
              onProgress(cumulativeSaved, targetTotal, i + 1, manifest.parts.length);
            }
          }
        } catch (err) {
          console.warn(`[DDInter IndexedDB] Error processing part ${partInfo.fileName}:`, err);
        }
      }

      const finalStats = await getIndexedDbStats();
      return { seeded: true, count: finalStats.totalCount };
    } catch (e) {
      console.warn('Error syncing DDInter database from parts:', e);
      return { seeded: false, count: 0 };
    } finally {
      syncInProgressPromise = null;
    }
  })();

  return syncInProgressPromise;
}

/**
 * Automatically seeds IndexedDB from chunked parts if not yet initialized or incomplete (< target total)
 */
export async function autoSeedIndexedDbIfEmpty(
  onProgress?: SyncProgressCallback
): Promise<{ seeded: boolean; count: number }> {
  return syncIndexedDbFromParts(onProgress, false);
}
