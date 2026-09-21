import { resolveDrugFromDDInter, resolveInteractionPair, evaluateTherapeuticDuplications, evaluateFoodInteractions } from '../src/utils/ddinterEngine';
import { INITIAL_DRUGS, INITIAL_INTERACTIONS, SAMPLE_THERAPEUTIC_DUPLICATIONS, SAMPLE_FOOD_INTERACTIONS } from '../src/data/ddinterData';

function runTests() {
  console.log('====================================================');
  console.log('🧪 RUNNING DDINTER PHARMACOLOGY ENGINE TEST SUITE');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string) {
    if (condition) {
      console.log(`  ✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${testName}`);
      failed++;
    }
  }

  // TEST 1: Exact Drug Match in Catalogue
  console.log('Test Suite 1: resolveDrugFromDDInter()');
  const warfarin = resolveDrugFromDDInter('Warfarin', INITIAL_DRUGS);
  assert(warfarin.id === 'drug-warfarin' && warfarin.name === 'Warfarin', 'Exact match for Warfarin');

  // TEST 2: Brand Name Match
  const aspiletMatch = resolveDrugFromDDInter('Aspilet', INITIAL_DRUGS);
  assert(aspiletMatch.id === 'drug-aspirin', 'Brand name "Aspilet" resolves to Aspirin');

  // TEST 3: Dynamic Fallback for Unlisted Drug
  const dynamicMatch = resolveDrugFromDDInter('Sildenafil', INITIAL_DRUGS);
  assert(dynamicMatch.name === 'Sildenafil' && dynamicMatch.ddinterId.startsWith('DDInter-'), 'Dynamic DDInter lookup for unlisted drug Sildenafil');

  // TEST 4: Direct DDI Pair Matching
  console.log('\nTest Suite 2: resolveInteractionPair()');
  const aspirin = resolveDrugFromDDInter('Aspirin', INITIAL_DRUGS);
  const interaction = resolveInteractionPair(warfarin, aspirin, INITIAL_INTERACTIONS);
  assert(interaction !== null && interaction.severity === 'Major', 'Direct DDI match Warfarin + Aspirin (Major)');

  // TEST 5: Rule-Based DDI Inference (CYP3A4 + Statin)
  const ketoconazole = resolveDrugFromDDInter('Ketoconazole', INITIAL_DRUGS);
  const atorvastatin = resolveDrugFromDDInter('Atorvastatin', INITIAL_DRUGS);
  const inferredDdi = resolveInteractionPair(ketoconazole, atorvastatin, INITIAL_INTERACTIONS);
  assert(inferredDdi !== null && inferredDdi.severity === 'Major', 'Rule-based DDI inference: Ketoconazole + Atorvastatin (Major)');

  // TEST 6: Therapeutic Duplication Detection
  console.log('\nTest Suite 3: evaluateTherapeuticDuplications()');
  const ibuprofen = resolveDrugFromDDInter('Ibuprofen', INITIAL_DRUGS);
  const mefenamic = resolveDrugFromDDInter('Mefenamic Acid', INITIAL_DRUGS);
  const duplications = evaluateTherapeuticDuplications([ibuprofen, mefenamic], SAMPLE_THERAPEUTIC_DUPLICATIONS);
  assert(duplications.length > 0, 'Detect NSAID therapeutic duplication (Ibuprofen + Mefenamic Acid)');

  // TEST 7: Drug-Food Interaction Detection
  console.log('\nTest Suite 4: evaluateFoodInteractions()');
  const simvastatin = resolveDrugFromDDInter('Simvastatin', INITIAL_DRUGS);
  const foodInteractions = evaluateFoodInteractions([simvastatin, warfarin], SAMPLE_FOOD_INTERACTIONS);
  assert(foodInteractions.length >= 2, 'Detect Drug-Food interactions for Simvastatin & Warfarin');

  // TEST 8: Allopurinol + Captopril (DDInter 2.0 Major)
  console.log('\nTest Suite 5: DDInter 2.0 Monograph Precision');
  const allopurinol = resolveDrugFromDDInter('Allopurinol', INITIAL_DRUGS);
  const captopril = resolveDrugFromDDInter('Captopril', INITIAL_DRUGS);
  const alloCaptoDdi = resolveInteractionPair(allopurinol, captopril, INITIAL_INTERACTIONS);
  assert(
    alloCaptoDdi !== null &&
    alloCaptoDdi.severity === 'Major' &&
    alloCaptoDdi.ddinterOriginalText?.includes('hypersensitivity reactions, neutropenia, agranulocytosis'),
    'Detect DDInter 2.0 Major Interaction: Allopurinol + Captopril'
  );

  // TEST 9: Allopurinol + Ramipril (Class Inference Major)
  const ramipril = resolveDrugFromDDInter('Ramipril', INITIAL_DRUGS);
  const alloRamiDdi = resolveInteractionPair(allopurinol, ramipril, INITIAL_INTERACTIONS);
  assert(
    alloRamiDdi !== null &&
    alloRamiDdi.severity === 'Major',
    'Class Inference DDInter 2.0: Allopurinol + Ramipril (Major)'
  );

  // TEST 10: Spironolactone + Captopril (DDInter 2.0 Official Major)
  const spironolactone = resolveDrugFromDDInter('Spironolactone', INITIAL_DRUGS);
  const spiroCaptoDdi = resolveInteractionPair(spironolactone, captopril, INITIAL_INTERACTIONS);
  assert(
    spiroCaptoDdi !== null &&
    spiroCaptoDdi.severity === 'Major' &&
    spiroCaptoDdi.ddinterOriginalText?.includes('potassium-sparing diuretics may increase the risk of hyperkalemia'),
    'DDInter 2.0 Official Major: Spironolactone + Captopril (Major with Verbatim Monograph)'
  );

  // TEST 11: Spironolactone + Ramipril (DDInter 2.0 Major)
  const spiroRamiDdi = resolveInteractionPair(spironolactone, ramipril, INITIAL_INTERACTIONS);
  assert(
    spiroRamiDdi !== null &&
    spiroRamiDdi.severity === 'Major',
    'DDInter 2.0 Major: Spironolactone + Ramipril (Major)'
  );

  // TEST 12: Spironolactone + Losartan (DDInter 2.0 Major)
  const losartan = resolveDrugFromDDInter('Losartan', INITIAL_DRUGS);
  const spiroLosartanDdi = resolveInteractionPair(spironolactone, losartan, INITIAL_INTERACTIONS);
  assert(
    spiroLosartanDdi !== null &&
    spiroLosartanDdi.severity === 'Major',
    'DDInter 2.0 Major: Spironolactone + Losartan (Major)'
  );

  // TEST 13: 4-Drug Combo Suite (Dexamethasone, Meloxicam, Lisinopril, Candesartan)
  console.log('\nTest Suite 6: DDInter 2.0 Verbatim Monograph & Zero-Boilerplate Assurance');
  const dexa = resolveDrugFromDDInter('Dexamethasone', INITIAL_DRUGS);
  const melox = resolveDrugFromDDInter('Meloxicam', INITIAL_DRUGS);
  const lisin = resolveDrugFromDDInter('Lisinopril', INITIAL_DRUGS);
  const cande = resolveDrugFromDDInter('Candesartan', INITIAL_DRUGS);

  const lisinCandeDdi = resolveInteractionPair(lisin, cande, INITIAL_INTERACTIONS);
  assert(
    lisinCandeDdi !== null &&
    lisinCandeDdi.severity === 'Major' &&
    lisinCandeDdi.ddinterOriginalText?.includes('Dual blockade of the renin-angiotensin system'),
    'Lisinopril + Candesartan (Major with DDInter 2.0 Dual RAAS Monograph)'
  );

  const meloxLisinDdi = resolveInteractionPair(melox, lisin, INITIAL_INTERACTIONS);
  assert(
    meloxLisinDdi !== null &&
    meloxLisinDdi.severity === 'Moderate' &&
    meloxLisinDdi.ddinterOriginalText?.includes('NSAIDs may diminish the antihypertensive effect of ACE inhibitors'),
    'Meloxicam + Lisinopril (Moderate with DDInter 2.0 NSAID+ACEi Monograph)'
  );

  const meloxCandeDdi = resolveInteractionPair(melox, cande, INITIAL_INTERACTIONS);
  assert(
    meloxCandeDdi !== null &&
    meloxCandeDdi.severity === 'Moderate' &&
    meloxCandeDdi.ddinterOriginalText?.includes('NSAIDs may diminish the antihypertensive effect of angiotensin II receptor antagonists'),
    'Meloxicam + Candesartan (Moderate with DDInter 2.0 NSAID+ARB Monograph)'
  );

  const dexaMeloxDdi = resolveInteractionPair(dexa, melox, INITIAL_INTERACTIONS);
  assert(
    dexaMeloxDdi !== null &&
    dexaMeloxDdi.severity === 'Moderate' &&
    !dexaMeloxDdi.ddinterOriginalText?.includes('Pharmacodynamic synergy between') &&
    dexaMeloxDdi.ddinterOriginalText?.includes('gastrointestinal ulceration and bleeding'),
    'Dexamethasone + Meloxicam (Moderate with DDInter 2.0 GI Bleed Monograph)'
  );

  const dexaLisinDdi = resolveInteractionPair(dexa, lisin, INITIAL_INTERACTIONS);
  assert(
    dexaLisinDdi !== null &&
    dexaLisinDdi.severity === 'Moderate' &&
    !dexaLisinDdi.ddinterOriginalText?.includes('alters renal tubular secretion') &&
    (dexaLisinDdi.ddinterOriginalText?.includes('counteracting the therapeutic') || dexaLisinDdi.ddinterOriginalText?.includes('antagonize the antihypertensive')),
    'Dexamethasone + Lisinopril (Moderate with DDInter 2.0 Antihypertensive Antagonism Monograph)'
  );

  const dexaCandeDdi = resolveInteractionPair(dexa, cande, INITIAL_INTERACTIONS);
  assert(
    dexaCandeDdi !== null &&
    dexaCandeDdi.severity === 'Moderate' &&
    !dexaCandeDdi.ddinterOriginalText?.includes('alters renal tubular secretion') &&
    dexaCandeDdi.ddinterOriginalText?.includes('antagonize the hypotensive effects'),
    'Dexamethasone + Candesartan (Moderate with DDInter 2.0 ARB Antagonism Monograph)'
  );


  console.log('\n====================================================');
  console.log(`📊 TEST RESULTS SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
