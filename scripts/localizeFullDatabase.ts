import fs from 'fs';
import path from 'path';
import { harmonizeClinicalLocalization, isGenericOrLowQuality } from '../src/utils/ddinterEngine';
import { DrugInteraction } from '../src/types';

export async function runFullDatabaseLocalization() {
  console.log('========================================================================');
  console.log('🇮🇩 HARMONISASI & LOKALISASI KLINIS BAHASA INDONESIA DDINTER 2.0');
  console.log('========================================================================\n');

  const files = [
    'ddinter2LiveInteractionsData.ts',
    'ddinter2Phase1ChronicAdditions.ts',
    'ddinter2Phase2InfectionAdditions.ts',
    'ddinter2Phase3CnsAnalgesicAdditions.ts',
    'ddinter2Phase4MinorAdditions.ts',
    'ddinter2ModerateBatch1Additions.ts',
    'ddinter2ModerateBatch2Additions.ts',
    'ddinter2ModerateBatch3Additions.ts',
    'ddinter2BulkAdditions.ts',
    'ddinterOfficialInteractions.ts'
  ];

  let totalUpgraded = 0;

  for (const file of files) {
    const filePath = path.join(process.cwd(), 'src', 'data', file);
    if (!fs.existsSync(filePath)) continue;

    const module = await import(`../src/data/${file.replace('.ts', '')}`);
    const exportKey = Object.keys(module).find((k) => Array.isArray(module[k]));
    if (!exportKey) {
      console.warn(`Tidak dapat menemukan array export di ${file}`);
      continue;
    }

    const items: DrugInteraction[] = module[exportKey];
    let fileUpgraded = 0;

    for (const item of items) {
      const needsUpgrade = 
        isGenericOrLowQuality(item.management) || 
        isGenericOrLowQuality(item.mechanism) || 
        isGenericOrLowQuality(item.clinicalOutcome);

      if (needsUpgrade) {
        const harmonized = harmonizeClinicalLocalization(item);
        item.mechanism = harmonized.mechanism;
        item.clinicalOutcome = harmonized.clinicalOutcome;
        item.management = harmonized.management;
        fileUpgraded++;
      }
    }

    totalUpgraded += fileUpgraded;
    console.log(`📁 ${file}: ${fileUpgraded} / ${items.length} interaksi berhasil dilokalisasi ke Bahasa Indonesia baku.`);

    const newContent = `import { DrugInteraction } from '../types';\n\nexport const ${exportKey}: DrugInteraction[] = ${JSON.stringify(items, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
  }

  console.log(`\n🎉 SELESAI! Sebanyak ${totalUpgraded} interaksi di seluruh file berhasil diperbarui dengan terjemahan klinis presisi DDInter 2.0!\n`);
}

runFullDatabaseLocalization().catch((err) => {
  console.error('Error during database localization:', err);
  process.exit(1);
});
