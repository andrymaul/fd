import { 
  HIGH_YIELD_TOPICS,
  EXAM_QUESTION_BANK,
  FORMULA_GUIDES,
  OSCE_STATIONS,
  FLASHCARD_DECK
} from '../src/data/competencyExamData';

console.log('=== COMPETENCY EXAM AUDIT ===');

function checkDups(name: string, items: { id?: string }[]) {
  const map = new Map<string, number>();
  for (const item of items) {
    if (!item.id) {
      console.log(`[${name}] Item with missing ID:`, item);
      continue;
    }
    map.set(item.id, (map.get(item.id) || 0) + 1);
  }
  const dups = Array.from(map.entries()).filter(([_, c]) => c > 1);
  if (dups.length > 0) {
    console.log(`[${name}] DUPLICATE IDs FOUND (${dups.length}):`, dups);
  } else {
    console.log(`[${name}] OK - ${items.length} items unique.`);
  }
}

if (HIGH_YIELD_TOPICS) checkDups('HIGH_YIELD_TOPICS', HIGH_YIELD_TOPICS);
if (EXAM_QUESTION_BANK) checkDups('EXAM_QUESTION_BANK', EXAM_QUESTION_BANK);
if (FORMULA_GUIDES) checkDups('FORMULA_GUIDES', FORMULA_GUIDES);
if (OSCE_STATIONS) checkDups('OSCE_STATIONS', OSCE_STATIONS);
if (FLASHCARD_DECK) checkDups('FLASHCARD_DECK', FLASHCARD_DECK);

console.log('Competency audit completed.');
