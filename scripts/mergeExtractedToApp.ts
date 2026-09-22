import fs from 'fs';
import path from 'path';
import { DrugInteraction } from '../src/types';

interface ScrapedRaw {
  serverInteractId: number;
  drugAName: string;
  drugBName: string;
  drugAId: string;
  drugBId: string;
  severity: 'Major' | 'Moderate' | 'Minor' | 'Unknown';
  mechanismCategory: 'Absorption' | 'Distribution' | 'Metabolism' | 'Excretion' | 'Synergy' | 'Antagonism' | 'Others';
  ddinterOriginalText: string;
  ddinterOriginalManagement: string;
  references: string[];
  alternativeOptions: string[];
  alternativeOptionsA?: string[];
  alternativeOptionsB?: string[];
  cypProfiles?: Record<string, Record<string, number>>;
  mechanism: string;
  clinicalOutcome: string;
  management: string;
  evidenceLevel: string;
}

export function convertExtractedToAppDataset(
  inputJsonPath = path.join(process.cwd(), 'data', 'ddinter2_extracted_batch.json'),
  outputTsPath = path.join(process.cwd(), 'src', 'data', 'ddinter2ScrapedInteractions.ts')
) {
  if (!fs.existsSync(inputJsonPath)) {
    console.error(`Input file not found: ${inputJsonPath}`);
    return;
  }

  const rawList: ScrapedRaw[] = JSON.parse(fs.readFileSync(inputJsonPath, 'utf-8'));
  console.log(`Loaded ${rawList.length} scraped records from ${inputJsonPath}`);

  const interactions: DrugInteraction[] = rawList.map((item) => {
    const slugA = item.drugAName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const slugB = item.drugBName.toLowerCase().replace(/[^a-z0-9]/g, '-');

    return {
      id: `ddinter-server-${item.serverInteractId}`,
      drugAId: `drug-${slugA}`,
      drugBId: `drug-${slugB}`,
      drugAName: item.drugAName,
      drugBName: item.drugBName,
      severity: item.severity,
      mechanism: item.mechanism,
      clinicalOutcome: item.clinicalOutcome,
      management: item.management,
      evidenceLevel: item.evidenceLevel || 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)',
      ddinterPairId: `DDInter-PAIR-${item.serverInteractId}`,
      mechanismCategory: item.mechanismCategory,
      alternativeOptions: item.alternativeOptions && item.alternativeOptions.length > 0 ? item.alternativeOptions : undefined,
      alternativeOptionsA: item.alternativeOptionsA && item.alternativeOptionsA.length > 0 ? item.alternativeOptionsA : undefined,
      alternativeOptionsB: item.alternativeOptionsB && item.alternativeOptionsB.length > 0 ? item.alternativeOptionsB : undefined,
      references: item.references && item.references.length > 0 ? item.references : undefined,
      cypProfiles: item.cypProfiles,
      ddinterOriginalText: item.ddinterOriginalText || undefined,
      ddinterOriginalManagement: item.ddinterOriginalManagement !== '-' ? item.ddinterOriginalManagement : undefined
    };
  });

  const tsContent = `import { DrugInteraction } from '../types';

/**
 * DDINTER 2.0 INGESTED BATCH INTERACTIONS DATABASE
 * Automatically extracted and synchronized from official DDInter 2.0 server (https://ddinter2.scbdd.com/server/interact/)
 * Grounded in Nature Protocols (2022) & Hospital Clinical Decision Support standards.
 * Total Ingested Pairs: ${interactions.length}
 */
export const DDINTER2_SCRAPED_INTERACTIONS: DrugInteraction[] = ${JSON.stringify(interactions, null, 2)};
`;

  fs.writeFileSync(outputTsPath, tsContent, 'utf-8');
  console.log(`Successfully generated ${interactions.length} app-ready interactions at: ${outputTsPath}`);
}

// CLI check
const isDirect = process.argv[1] && process.argv[1].endsWith('mergeExtractedToApp.ts');
if (isDirect) {
  convertExtractedToAppDataset();
}
