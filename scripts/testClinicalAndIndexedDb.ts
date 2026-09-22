import { resolveInteractionPair, evaluateTherapeuticDuplications } from '../src/utils/ddinterEngine';
import { INITIAL_DRUGS, INITIAL_INTERACTIONS } from '../src/data/ddinterData';
import { EXTENDED_INTERACTIONS_DATABASE } from '../src/data/ddinterInteractions';
import { createCanonicalPairKey } from '../src/utils/ddinterIndexedDb';
import { Drug } from '../src/types';

console.log('=== TEST 1: METFORMIN + ACARBOSE CLINICAL EVALUATION ===');
const metformin: Drug = INITIAL_DRUGS.find(d => d.name.toLowerCase() === 'metformin') || {
  id: 'drug-metformin',
  name: 'Metformin',
  genericName: 'Metformin HCl',
  brandNames: ['Glucophage'],
  atcCode: 'A10BA02',
  category: 'Endokrin & Diabetes',
  indication: '',
  contraindications: '',
  sideEffects: '',
  dosage: '',
  pharmacology: '',
  foodInteraction: '',
  pregnancyCategory: 'B',
  ddinterId: 'DDInter-D00010'
};

const acarbose: Drug = INITIAL_DRUGS.find(d => d.name.toLowerCase() === 'acarbose') || {
  id: 'drug-acarbose',
  name: 'Acarbose',
  genericName: 'Acarbose',
  brandNames: ['Glucobay'],
  atcCode: 'A10BF01',
  category: 'Endokrin & Diabetes',
  indication: '',
  contraindications: '',
  sideEffects: '',
  dosage: '',
  pharmacology: '',
  foodInteraction: '',
  pregnancyCategory: 'B',
  ddinterId: 'DDInter-D00011'
};

const interMetAcar = resolveInteractionPair(metformin, acarbose, EXTENDED_INTERACTIONS_DATABASE);
console.log('Severity:', interMetAcar?.severity);
console.log('Mechanism Category:', interMetAcar?.mechanismCategory);
console.log('Original DDInter Text:', interMetAcar?.ddinterOriginalText?.slice(0, 80) + '...');
console.log('Management Text:', interMetAcar?.management?.slice(0, 80) + '...');

if (interMetAcar?.severity !== 'Minor') {
  console.error('FAIL: Expected severity Minor, got:', interMetAcar?.severity);
  process.exit(1);
}
if (interMetAcar?.mechanismCategory !== 'Absorption') {
  console.error('FAIL: Expected mechanismCategory Absorption, got:', interMetAcar?.mechanismCategory);
  process.exit(1);
}

console.log('\n=== TEST 2: THERAPEUTIC DUPLICATION GUARDRAIL ===');
const dups = evaluateTherapeuticDuplications([metformin, acarbose], []);
console.log('Duplications count for Metformin + Acarbose:', dups.length);
if (dups.length !== 0) {
  console.error('FAIL: Metformin + Acarbose should NOT be a duplication!');
  process.exit(1);
}

console.log('\n=== TEST 3: AMPRENAVIR + ABACAVIR VERBATIM TEXT, 2-COLUMN ALTS & REFERENCES ===');
const amprenavir: Drug = {
  id: 'drug-amprenavir',
  name: 'Amprenavir',
  genericName: 'Amprenavir',
  brandNames: ['Agenerase'],
  atcCode: 'J05AE05',
  category: 'Antiinfeksi & Antivirus',
  indication: '',
  contraindications: '',
  sideEffects: '',
  dosage: '',
  pharmacology: '',
  foodInteraction: '',
  pregnancyCategory: 'C',
  ddinterId: 'DDInter90'
};

const abacavir: Drug = {
  id: 'drug-abacavir',
  name: 'Abacavir',
  genericName: 'Abacavir',
  brandNames: ['Ziagen'],
  atcCode: 'J05AF06',
  category: 'Antiinfeksi & Antivirus',
  indication: '',
  contraindications: '',
  sideEffects: '',
  dosage: '',
  pharmacology: '',
  foodInteraction: '',
  pregnancyCategory: 'C',
  ddinterId: 'DDInter1'
};

const interAmpAba = resolveInteractionPair(amprenavir, abacavir, EXTENDED_INTERACTIONS_DATABASE);
console.log('Amprenavir + Abacavir Severity:', interAmpAba?.severity);
console.log('Authentic Verbatim Text:', interAmpAba?.ddinterOriginalText);
console.log('Mekanisme Indo:', interAmpAba?.mechanism);
console.log('Dampak Indo:', interAmpAba?.clinicalOutcome);
console.log('Solusi Indo:', interAmpAba?.management);
console.log('Alternative Options A (Amprenavir):', interAmpAba?.alternativeOptionsA);
console.log('Alternative Options B (Abacavir):', interAmpAba?.alternativeOptionsB);
console.log('References count:', interAmpAba?.references?.length);
console.log('References:', interAmpAba?.references);
console.log('CYP Profiles present:', Boolean(interAmpAba?.cypProfiles));

if (!interAmpAba?.ddinterOriginalText?.includes('Average amprenavir levels increased 29%')) {
  console.error('FAIL: Authentic DDInter verbatim text missing or overwritten!');
  process.exit(1);
}

if (!interAmpAba?.alternativeOptionsA || interAmpAba.alternativeOptionsA.length === 0) {
  console.error('FAIL: alternativeOptionsA missing!');
  process.exit(1);
}

if (!interAmpAba?.alternativeOptionsB || interAmpAba.alternativeOptionsB.length === 0) {
  console.error('FAIL: alternativeOptionsB missing!');
  process.exit(1);
}

if (!interAmpAba?.references || interAmpAba.references.length !== 3) {
  console.error('FAIL: References missing or incorrect count!');
  process.exit(1);
}

console.log('\n=== TEST 4: INDEXEDDB CANONICAL KEY CREATION ===');
const key1 = createCanonicalPairKey('Amprenavir', 'Abacavir');
const key2 = createCanonicalPairKey('Abacavir', 'Amprenavir');
console.log('Canonical key 1:', key1);
console.log('Canonical key 2:', key2);
if (key1 !== key2 || key1 !== 'abacavir__amprenavir') {
  console.error('FAIL: Canonical keys do not match!');
  process.exit(1);
}

console.log('\n>>> ALL CLINICAL, VERBATIM TEXT, 2-COLUMN ALTS & REFERENCES CHECKS PASSED 100%! <<<');
