import { ReportSection, ContentType, TableHeader, TableRow, ChartDataItem, SeriesDefinition, ImageData, LocalizedString } from '../types';

const PALETTE = {
  GREEN_DARK: '#15803d',
  GREEN_MEDIUM: '#16a34a',
  GREEN_LIGHT: '#22c55e',
  BLUE_DARK: '#1e3a8a',
  BLUE_MEDIUM: '#2563eb',
  RED_MEDIUM: '#dc2626',
  ORANGE_MEDIUM: '#f97316',
  PURPLE_MEDIUM: '#9333ea',
  TEAL_MEDIUM: '#0d9488',
  YELLOW_MEDIUM: '#eab308',
};

const table1Headers: TableHeader[] = [
  { key: 'company', label: { he: 'שם החברה', en: 'Company Name' } },
  { key: 'variety', label: { he: 'שם הזן', en: 'Variety Name' } },
  { key: 'resistance', label: { he: 'עמידות או סבילות לוירוסים', en: 'Virus Resistance/Tolerance' } },
];

const table1Rows: TableRow[] = [
  { company: { he: 'אגרודיל', en: 'Agrodil' }, variety: { he: 'וולקאן', en: 'Vulcan' }, resistance: 'TSWV, TMV2' },
  { company: { he: 'ירוק 2000', en: 'Yarok 2000' }, variety: { he: 'אסקאלה RZ', en: 'Escala RZ' }, resistance: { he: 'קימחונית, TSWV, TMV2', en: 'Powdery Mildew, TSWV, TMV2' } },
  { company: { he: 'אפעל', en: 'Efal' }, variety: { he: 'שקירה', en: 'Shakira' }, resistance: 'TMV2' },
  { company: { he: 'הזרע', en: 'Hazera' }, variety: '521100', resistance: { he: 'אין עמידות או סבילות', en: 'No resistance or tolerance' } },
  { company: { he: 'רימי', en: 'Rimi' }, variety: '27113', resistance: 'TMV2' },
  { company: { he: 'ירוק 2000 ברק', en: 'Yarok 2000 Barak' }, variety: { he: 'פורנס', en: 'Furnace' }, resistance: 'TMV0' },
  { company: { he: 'א.ב. זרעים', en: 'A.B. Zeraim' }, variety: { he: 'לפיד', en: 'Lapid' }, resistance: '-' },
];

const table2Headers: TableHeader[] = [
  { key: 'variety', label: { he: 'זן', en: 'Variety' } },
  { key: 'totalYield', label: { he: 'משקל יבול כללי (ק"ג/צמח)', en: 'Total Yield (kg/plant)' }, isNumeric: true },
  { key: 'typeAYield', label: { he: 'משקל סוג א\' (ק"ג/צמח)', en: 'Grade A Weight (kg/plant)' }, isNumeric: true },
  { key: 'typeBPercent', label: { he: '% פרי עקום (סוג ב\')', en: '% Crooked Fruit (Grade B)' }, isNumeric: true },
  { key: 'avgFruitWeight', label: { he: 'משקל פרי ממוצע (גרם)', en: 'Average Fruit Weight (g)' }, isNumeric: true },
];
const table2Rows: TableRow[] = [
  { variety: { he: 'אסקאלה', en: 'Escala' }, totalYield: '5.6 A', typeAYield: '3.8 A', typeBPercent: '32 C', avgFruitWeight: '58 B' },
  { variety: { he: 'וולקאן', en: 'Vulcan' }, totalYield: '5.6 A', typeAYield: '3.4 AB', typeBPercent: '42 A', avgFruitWeight: '61 A' },
  { variety: { he: 'שקירה', en: 'Shakira' }, totalYield: '4.0 B', typeAYield: '2.9 B', typeBPercent: '27 D', avgFruitWeight: '46 DE' },
  { variety: '521100', totalYield: '4.3 B', typeAYield: '3.1 AB', typeBPercent: '26 D', avgFruitWeight: '48 CD' },
  { variety: '27113', totalYield: '4.1 B', typeAYield: '2.9 B', typeBPercent: '29 CD', avgFruitWeight: '45 E' },
  { variety: { he: 'פורנס', en: 'Furnace' }, totalYield: '4.4 B', typeAYield: '2.7 B', typeBPercent: '42 A', avgFruitWeight: '59 AB' },
  { variety: { he: 'לפיד', en: 'Lapid' }, totalYield: '4.3 B', typeAYield: '2.7 B', typeBPercent: '36 B', avgFruitWeight: '51 C' },
];

const table3Headers: TableHeader[] = [
  { key: 'variety', label: { he: 'זן', en: 'Variety' } },
  { key: 'novDec', label: { he: 'נובמבר-דצמבר (ק"ג/צמח)', en: 'November-December (kg/plant)' }, isNumeric: true },
  { key: 'janMar', label: { he: 'ינואר-מרץ (ק"ג/צמח)', en: 'January-March (kg/plant)' }, isNumeric: true },
  { key: 'aprMay', label: { he: 'אפריל-מאי (ק"ג/צמח)', en: 'April-May (kg/plant)' }, isNumeric: true },
];
const table3Rows: TableRow[] = [
  { variety: { he: 'אסקאלה', en: 'Escala' }, novDec: '1.9 A', janMar: '1.7 AB', aprMay: '1.8 AB' },
  { variety: { he: 'וולקאן', en: 'Vulcan' }, novDec: '1.3 BC', janMar: '2.0 A', aprMay: '2.1 A' },
  { variety: { he: 'שקירה', en: 'Shakira' }, novDec: '1.3 BC', janMar: '1.3 CD', aprMay: '1.3 C' },
  { variety: '521100', novDec: '1.2 BC', janMar: '1.3 BCD', aprMay: '1.6 ABC' },
  { variety: '27113', novDec: '1.5 B', janMar: '1.1 D', aprMay: '1.3 C' },
  { variety: { he: 'פורנס', en: 'Furnace' }, novDec: '1.1 C', janMar: '1.7 ABC', aprMay: '1.4 BC' },
  { variety: { he: 'לפיד', en: 'Lapid' }, novDec: '1.2 C', janMar: '1.6 BC', aprMay: '1.3 BC' },
];

const kgPerPlantUnit: LocalizedString = { he: 'ק״ג/צמח', en: 'kg/plant' };
const percentageUnit: LocalizedString = { he: '%', en: '%' };
const microgramPerGramFWUnit: LocalizedString = { he: 'µg/g FW', en: 'µg/g FW' };

const fig1Data: ChartDataItem[] = [
  { name: '07/11/23', וולקאן: 0.3, אסקאלה: 0.5, שקירה: 0.2, '521100': 0.2, '27113': 0.4, פורנס: 0.1, לפיד: 0.2 },
  { name: '07/12/23', וולקאן: 1.3, אסקאלה: 1.9, שקירה: 1.3, '521100': 1.2, '27113': 1.5, פורנס: 1.1, לפיד: 1.2 },
  { name: '07/01/24', וולקאן: 2.0, אסקאלה: 2.5, שקירה: 1.8, '521100': 1.7, '27113': 1.9, פורנס: 1.8, לפיד: 1.9 },
  { name: '07/02/24', וולקאן: 2.8, אסקאלה: 3.0, שקירה: 2.1, '521100': 2.1, '27113': 2.2, פורנס: 2.4, לפיד: 2.5 },
  { name: '07/03/24', וולקאן: 3.3, אסקאלה: 3.6, שקירה: 2.6, '521100': 2.5, '27113': 2.6, פורנס: 2.8, לפיד: 3.0 },
  { name: '07/04/24', וולקאן: 4.5, אסקאלה: 4.5, שקירה: 3.3, '521100': 3.3, '27113': 3.2, פורנס: 3.6, לפיד: 3.6 },
  { name: '07/05/24', וולקאן: 5.6, אסקאלה: 5.4, שקירה: 4.0, '521100': 4.1, '27113': 3.9, פורנס: 4.4, לפיד: 4.3 },
];
const fig1Series: SeriesDefinition[] = [
  { key: 'וולקאן', name: { he: 'וולקאן', en: 'Vulcan' }, color: PALETTE.GREEN_DARK, unit: kgPerPlantUnit },
  { key: 'אסקאלה', name: { he: 'אסקאלה', en: 'Escala' }, color: PALETTE.BLUE_MEDIUM, unit: kgPerPlantUnit },
  { key: 'שקירה', name: { he: 'שקירה', en: 'Shakira' }, color: PALETTE.RED_MEDIUM, unit: kgPerPlantUnit },
  { key: '521100', name: '521100', color: PALETTE.ORANGE_MEDIUM, unit: kgPerPlantUnit },
  { key: '27113', name: '27113', color: PALETTE.PURPLE_MEDIUM, unit: kgPerPlantUnit },
  { key: 'פורנס', name: { he: 'פורנס', en: 'Furnace' }, color: PALETTE.TEAL_MEDIUM, unit: kgPerPlantUnit },
  { key: 'לפיד', name: { he: 'לפיד', en: 'Lapid' }, color: PALETTE.YELLOW_MEDIUM, unit: kgPerPlantUnit },
];

const fig2Data: ChartDataItem[] = [
  { name: '07/11/23', וולקאן: 20, אסקאלה: 15, שקירה: 10, '521100': 12, '27113': 18, פורנס: 22, לפיד: 16 },
  { name: '07/12/23', וולקאן: 30, אסקאלה: 25, שקירה: 15, '521100': 18, '27113': 25, פורנס: 35, לפיד: 28 },
  { name: '07/01/24', וולקאן: 45, אסקאלה: 30, שקירה: 20, '521100': 22, '27113': 30, פורנס: 40, לפיד: 33 },
  { name: '07/02/24', וולקאן: 50, אסקאלה: 35, שקירה: 28, '521100': 25, '27113': 35, פורנס: 48, לפיד: 40 },
  { name: '07/03/24', וולקאן: 40, אסקאלה: 33, שקירה: 30, '521100': 28, '27113': 32, פורנס: 45, לפיד: 38 },
  { name: '07/04/24', וולקאן: 42, אסקאלה: 32, שקירה: 27, '521100': 26, '27113': 29, פורנס: 42, לפיד: 36 },
  { name: '07/05/24', וולקאן: 38, אסקאלה: 30, שקירה: 25, '521100': 24, '27113': 27, פורנס: 39, לפיד: 34 },
];

const fig2Series: SeriesDefinition[] = [
    { key: 'וולקאן', name: { he: 'וולקאן', en: 'Vulcan' }, color: PALETTE.GREEN_DARK, unit: percentageUnit },
    { key: 'אסקאלה', name: { he: 'אסקאלה', en: 'Escala' }, color: PALETTE.BLUE_MEDIUM, unit: percentageUnit },
    { key: 'שקירה', name: { he: 'שקירה', en: 'Shakira' }, color: PALETTE.RED_MEDIUM, unit: percentageUnit },
    { key: '521100', name: '521100', color: PALETTE.ORANGE_MEDIUM, unit: percentageUnit },
    { key: '27113', name: '27113', color: PALETTE.PURPLE_MEDIUM, unit: percentageUnit },
    { key: 'פורנס', name: { he: 'פורנס', en: 'Furnace' }, color: PALETTE.TEAL_MEDIUM, unit: percentageUnit },
    { key: 'לפיד', name: { he: 'לפיד', en: 'Lapid' }, color: PALETTE.YELLOW_MEDIUM, unit: percentageUnit },
];

const fig3Data: ChartDataItem[] = [
  { name: { he: 'וולקאן', en: 'Vulcan' }, capsaicin_h1: 20, capsaicin_h2: 18, dihydro_h1: 10, dihydro_h2: 12, sum_h1: 30, sum_h2: 30 },
  { name: { he: 'אסקאלה', en: 'Escala' }, capsaicin_h1: 25, capsaicin_h2: 15, dihydro_h1: 12, dihydro_h2: 8, sum_h1: 37, sum_h2: 23 },
  { name: { he: 'שקירה', en: 'Shakira' }, capsaicin_h1: 15, capsaicin_h2: 5, dihydro_h1: 8, dihydro_h2: 3, sum_h1: 23, sum_h2: 8 },
  { name: '521100', capsaicin_h1: 22, capsaicin_h2: 20, dihydro_h1: 11, dihydro_h2: 10, sum_h1: 33, sum_h2: 30 },
  { name: '27113', capsaicin_h1: 18, capsaicin_h2: 10, dihydro_h1: 9, dihydro_h2: 7, sum_h1: 27, sum_h2: 17 },
  { name: { he: 'פורנס', en: 'Furnace' }, capsaicin_h1: 28, capsaicin_h2: 12, dihydro_h1: 14, dihydro_h2: 6, sum_h1: 42, sum_h2: 18 },
  { name: { he: 'לפיד', en: 'Lapid' }, capsaicin_h1: 19, capsaicin_h2: 17, dihydro_h1: 9, dihydro_h2: 9, sum_h1: 28, sum_h2: 26 },
];

const fig3Series: SeriesDefinition[] = [
  { key: 'capsaicin_h1', name: { he: 'קפסיצין (קטיף 1)', en: 'Capsaicin (Harvest 1)' }, color: PALETTE.BLUE_MEDIUM, unit: microgramPerGramFWUnit },
  { key: 'capsaicin_h2', name: { he: 'קפסיצין (קטיף 2)', en: 'Capsaicin (Harvest 2)' }, color: PALETTE.BLUE_DARK, unit: microgramPerGramFWUnit },
  { key: 'dihydro_h1', name: { he: 'דיהידרוקפסיצין (קטיף 1)', en: 'Dihydrocapsaicin (Harvest 1)' }, color: PALETTE.RED_MEDIUM, unit: microgramPerGramFWUnit },
  { key: 'dihydro_h2', name: { he: 'דיהידרוקפסיצין (קטיף 2)', en: 'Dihydrocapsaicin (Harvest 2)' }, color: PALETTE.ORANGE_MEDIUM, unit: microgramPerGramFWUnit },
  { key: 'sum_h1', name: { he: 'סה"כ (קטיף 1)', en: 'Total (Harvest 1)' }, color: PALETTE.GREEN_MEDIUM, unit: microgramPerGramFWUnit },
  { key: 'sum_h2', name: { he: 'סה"כ (קטיף 2)', en: 'Total (Harvest 2)' }, color: PALETTE.GREEN_DARK, unit: microgramPerGramFWUnit },
];


const pepperImages: ImageData[] = [
  { src: 'https://picsum.photos/seed/eskala/400/300', alt: { he: 'פלפל אסקאלה RZ', en: 'Escala RZ Pepper' }, caption: { he: 'אסקאלה RZ', en: 'Escala RZ' } },
  { src: 'https://picsum.photos/seed/521100/400/300', alt: { he: 'פלפל 521100', en: '521100 Pepper' }, caption: { he: '521100 (הזרע)', en: '521100 (Hazera)' } },
  { src: 'https://picsum.photos/seed/27113/400/300', alt: { he: 'פלפל 27113', en: '27113 Pepper' }, caption: { he: '27113 (רימי)', en: '27113 (Rimi)' } },
  { src: 'https://picsum.photos/seed/volcano/400/300', alt: { he: 'פלפל וולקאן', en: 'Vulcan Pepper' }, caption: { he: 'וולקאן (אגרודיל)', en: 'Vulcan (Agrodil)' } },
  { src: 'https://picsum.photos/seed/lapid/400/300', alt: { he: 'פלפל לפיד', en: 'Lapid Pepper' }, caption: { he: 'לפיד (א.ב. זרעים)', en: 'Lapid (A.B. Zeraim)' } },
  { src: 'https://picsum.photos/seed/furnace/400/300', alt: { he: 'פלפל פורנס', en: 'Furnace Pepper' }, caption: { he: 'פורנס (ירוק 2000 ברק)', en: 'Furnace (Yarok 2000 Barak)' } },
  { src: 'https://picsum.photos/seed/shkira/400/300', alt: { he: 'פלפל שקירה', en: 'Shakira Pepper' }, caption: { he: 'שקירה (אפעל)', en: 'Shakira (Efal)' } },
];


export const reportSections: ReportSection[] = [
  {
    id: 'introduction',
    title: { he: 'מבוא', en: 'Introduction' },
    content: [
      { type: ContentType.Paragraph, data: { he: 'גידול פלפל חריף נחשב לגידול חשוב בענף הירקות למרות שהיקף הגידול הוא קטן ביחס להיקף גידול של פלפל מתוק. מגדלים בשטח הפתוח וגם בבתי צמיחה שונים, חממות ומנהרות עבירות בגדלים שונים. היקף הגידול השנתי מוערך לכ-900 עד 1000 דונם עם שיווק של כ-6000 טון לשנה (נתונים ממועצת הצמחים).', en: 'Growing hot peppers is considered an important crop in the vegetable sector, although its cultivation scale is small compared to sweet peppers. They are grown in open fields and various protected environments like greenhouses and walk-in tunnels of different sizes. The annual cultivation area is estimated at 900-1000 dunams, with about 6000 tons marketed annually (data from the Plants Production & Marketing Board).' } },
      { type: ContentType.Paragraph, data: { he: 'הגידול בבתי צמיחה בחורף נפוץ באזור בקעת הירדן וים המלח ובאזור המרכז, כאשר הגידול בבתי צמיחה מאפשר את הייצור ואספקתו במהלך החורף והאביב ולפעמים גם מעבר לכך. בנוסף, מתבצעות שתילות סתווית בשטח פתוח באזור בקעת הירדן ובמיוחד בצפון הבקעה, הודות להתאמתו למזג האוויר של הבקעה.', en: 'Winter cultivation in protected environments is common in the Jordan Valley, Dead Sea area, and central Israel. This method allows for production and supply during winter and spring, sometimes extending beyond. Additionally, autumn planting in open fields occurs in the Jordan Valley, especially in the northern part, due to its suitable climate.' } },
      { type: ContentType.Paragraph, data: { he: 'מבחן הזנים הזה נועד לבחון את זני הפלפל החריף הנפוצים והחדשים בשתילת סתיו בבתי צמיחה בבקעת הירדן, ובו נבדקה התאמתם של הזנים החדשים ביחס לזנים המסחריים פורנס ולפיד, לפי פרמטרים חשובים כמו: יבול סוג א\' וסוג ב\' (פרי מעוות ושחור פיטם), מאפייני צימוח ואיכות הפרי.', en: 'This variety trial aims to evaluate common and new hot pepper varieties for autumn planting in protected environments in the Jordan Valley. It assesses the suitability of new varieties compared to commercial ones like Furnace and Lapid, based on crucial parameters such as Grade A and Grade B yield (deformed fruit, blossom-end rot), growth characteristics, and fruit quality.' } },
    ],
  },
  {
    id: 'objective',
    title: { he: 'מטרת הניסוי', en: 'Trial Objective' },
    content: [
      { type: ContentType.Paragraph, data: { he: 'לאתר זני פלפל חריף עתירי יבול ואיכות, בעלי חריפות, בצבע ירוק כהה, ארוכים ובעלי צורה ישירה לשיווק בסתיו, בחורף ובאביב. זני הניסוי שיתבלטו יומלצו לגדול בהיקפים חצי מסחריים. זנים שיצטיינו יבחנו בעתיד בצורה מסודרת גם בעונות שונות ובאזורים אחרים.', en: 'To identify high-yield, high-quality hot pepper varieties with good pungency, dark green color, long and straight shape for marketing in autumn, winter, and spring. Promising trial varieties will be recommended for semi-commercial cultivation. Outstanding varieties will be further tested systematically in different seasons and regions in the future.' } },
    ],
  },
  {
    id: 'methodology',
    title: { he: 'מהלך המחקר ושיטות עבודה', en: 'Methodology and Procedures' },
    content: [
      { type: ContentType.Heading, data: { he: 'מקום הניסוי', en: 'Trial Location' } },
      { type: ContentType.Paragraph, data: { he: 'תחנת צבי מו"פ בקעת הירדן.', en: 'Zvi R&D Station, Jordan Valley.' } },
      { type: ContentType.Heading, data: { he: 'הכנת השטח ובית גידול', en: 'Field Preparation and Growing Conditions' } },
      { type: ContentType.Paragraph, data: { he: 'משתת בערוגות הקיימות, פיזור 3 מ"ק/ד\' קומפוסט בוצה מטופלת, שטיפה של 100 מ"ק/ד\' בהמטרה, תיחוח, פריסת פלסטיק שקוף על כל השטח לצורך חיטוי סולרי והזרמת אדיגן 40 לי/ד\' בערוגות (באמצעות שלוחות הטפטוף). בית גידול היה מנהרה עבירה 2" ברוחב 10 מטר. בתחילת הגידול נפרסה רשת 17 מש, ב-22.11.23 הרשת הוחלפה בפלסטיק. בצדדים רשתות נגד חרקים 50 מש. בתאריך 27.02.2024 המנהרה כוסתה ברשת שחורה 40% צל, ב- 24.03.2024 נחתכו חורי אוורור בפלסטיק.', en: 'Utilized existing beds. Applied 3 m³/dunam treated sludge compost, irrigated with 100 m³/dunam by sprinklers, tilled, covered the entire area with transparent plastic for solar sterilization, and applied Edigan 40 L/dunam in beds (via drip lines). Growing structure was a 2" walk-in tunnel, 10 meters wide. Initially, a 17-mesh net was used, replaced with plastic on 22/11/23. Sides had 50-mesh insect nets. On 27/02/2024, the tunnel was covered with a 40% black shade net; on 24/03/2024, ventilation holes were cut in the plastic.' } },
      { type: ContentType.Paragraph, data: { he: 'השתילה הייתה ב- 19/9/23. בניסוי נבחנו 7 זנים (טבלה 1) ב-4 חזרות, בכל חזרה 20 שתילים, 5 שתילים למטר רץ בצמד. הצמחים גודלו ונתמכו בשיטת ההדליה הספרדית.', en: 'Planting was on 19/09/23. Seven varieties (Table 1) were tested in 4 replications, each with 20 plants, 5 plants per linear meter in pairs. Plants were grown and supported using the Spanish trellising method.' } },
      { type: ContentType.Heading, data: { he: 'איסוף הנתונים', en: 'Data Collection' } },
      { type: ContentType.Paragraph, data: { he: 'במהלך העונה בוצעו 12 קטיפים בהם היבול נשקל ומוין לסוג א\' וסוג ב\' (פרות מעוותים או עקומים). קטיף הראשון בוצע ב 07.11.2023 וקטיף אחרון ב- 14.05.2024. בכל קטיף נלקח מדגם של 20 פרות מסוג א\' על מנת לשקול את המשקל הממוצע לפרי. פעמיים בעונה, בחודשים דצמבר ואפריל, נמדד אורך פרי של 20 פרות מכל חזרה. נלקחו פרות למעבדה לבדיקת חריפות והתוצאות יופיעו בדוח בנפרד.', en: 'During the season, 12 harvests were conducted where yield was weighed and sorted into Grade A and Grade B (deformed or crooked fruits). The first harvest was on 07/11/2023, and the last on 14/05/2024. In each harvest, a sample of 20 Grade A fruits was taken to determine average fruit weight. Twice during the season (December and April), fruit length of 20 fruits per replication was measured. Fruits were sent to a lab for pungency testing; results will be reported separately.' } },
      { type: ContentType.Heading, data: { he: 'סטטיסטיקה', en: 'Statistics' } },
      { type: ContentType.Paragraph, data: { he: 'הניסוי הוצב במתכונת בלוקים באקראי. תוצאות הניסוי חושבו ק"ג/צמח ונותחו סטטיסטית בתוכנת JMP לפי מודל ה-Student LSD, ברמת מובהקות P<0.05.', en: 'The experiment was set up in a randomized block design. Results were calculated as kg/plant and statistically analyzed using JMP software with the Student LSD model at a significance level of P<0.05.' } },
    ],
  },
  {
    id: 'results',
    title: { he: 'תוצאות', en: 'Results' },
    content: [
      { type: ContentType.Table, data: { headers: table1Headers, rows: table1Rows, caption: { he: "טבלה 1: שמות הזנים, חברות הזרעים, עמידות וסבילות הזנים לוירוסים במבחן זנים בבקעת הירדן 2023-4.", en: "Table 1: Variety names, seed companies, and virus resistance/tolerance in the Jordan Valley variety trial 2023-4." } } },
      { type: ContentType.Paragraph, data: { he: 'מבין הזנים שהשתתפו במבחן הזנים, הזנים אסקאלה ו- וולקאן השיגו את היבולים הגבוהים ביותר בהשוואה ליתר הזנים (טבלה 2). הזן אסקאלה השיג את היבול סוג א\' הגבוה ביותר אך לא נבדל במובהק מהזנים וולקאן ו-521100. הזנים 521100 ושקירה הצטיינו באחוז פרי סוג ב\' הנמוך ביותר אך לא נבדל מהזן 27113. הזנים וולקאן ופורנס היו עם אחוז הגבוה ביותר של פרי סוג ב\'. הזן וולקאן היה עם הפרי הכבד ביותר אך לא נבדל מהזן פורנס. הזן המסחרי הותיק, לפיד, השיג תוצאות בינוניות, יבול סוג א\' וב\', בהשוואה ליתר הזנים.', en: 'Among the varieties in the trial, Escala and Vulcan achieved the highest yields (Table 2). Escala had the highest Grade A yield but was not significantly different from Vulcan and 521100. Varieties 521100 and Shakira excelled with the lowest percentage of Grade B fruit, not significantly different from 27113. Vulcan and Furnace had the highest percentage of Grade B fruit. Vulcan had the heaviest fruit, not significantly different from Furnace. The established commercial variety, Lapid, showed moderate results for Grade A and B yield compared to other varieties.' } },
      { type: ContentType.Table, data: { headers: table2Headers, rows: table2Rows, caption: { he: "טבלה 2: משקל יבול כללי וסוג א' (ק\"ג/צמח), אחוז פרי סוג ב' מסה\"כ יבול הכללי ומשקל פרי ממוצע (גרם), מבחן זני פלפל חריף 2023/4. *פרי עקום הינה הסיבה העיקרית להגדרת הפרי סוג ב'. אותיות שונות באותו טור מצביעות על הבדל מובהק ברמה של 5% במבחן student.", en: "Table 2: Total yield and Grade A weight (kg/plant), percentage of Grade B fruit from total yield, and average fruit weight (g), hot pepper variety trial 2023/4. *Crooked fruit is the main reason for Grade B classification. Different letters in the same column indicate a significant difference at the 5% level (Student's t-test)." } } },
      { type: ContentType.Paragraph, data: { he: 'בחודשים נובמבר-דצמבר (סתיו), הניב הזן אסקאלה את היבול הגבוה ביותר, והראה בכירות מובהקת על פני שאר הזנים (טבלה 3 ואיור 1). באותה תקופה הזנים המסחריים, פורנס ולפיד, הניבו את היבול הנמוך ביותר. בתקופת החורף (ינואר-מרץ), הניב הזן וולקאן את היבול הגבוה ביותר אך לא נבדל מהזנים אסקאלה ופורנס. הזן 27113 השיג את היבול הנמוך ביותר לאותה תקופה. בחודשים אפריל-מאי (אביב), הניב הזן וולקאן את היבול הגבוה ביותר אך לא נבדל מהזנים אסקאלה ו- 521100.', en: 'In November-December (autumn), Escala yielded the highest, showing significant earliness over other varieties (Table 3 and Figure 1). During this period, commercial varieties Furnace and Lapid had the lowest yields. In winter (January-March), Vulcan yielded the highest but was not significantly different from Escala and Furnace. Variety 27113 had the lowest yield during this period. In April-May (spring), Vulcan yielded the highest but was not significantly different from Escala and 521100.' } },
      { type: ContentType.Table, data: { headers: table3Headers, rows: table3Rows, caption: { he: "טבלה 3: מבחן זני פלפל חריף - התפלגות משקל יכול כללי (ק\"ג/צמח) לפי תקופות (סתיו, חורף, אביב).", en: "Table 3: Hot pepper variety trial - Distribution of total yield weight (kg/plant) by periods (autumn, winter, spring)." } } },
      { type: ContentType.LineChart, data: { data: fig1Data, series: fig1Series, xAxisKey: 'name', yAxisLabel: kgPerPlantUnit, caption: { he: "איור 1: עקומת צבירת משקל יבול כללי (ק\"ג/צמח) במבחן זני פלפל חריף 2023/4.", en: "Figure 1: Cumulative total yield weight (kg/plant) curve in the hot pepper variety trial 2023/4." } } },
      { type: ContentType.Paragraph, data: { he: "הגדרת פלפל חריף כסוג ב' מאופיין בכמה שהפרי מעוות/עקום או ישר. עקב חשיבות פרמטר זה כתכונה משמעותית בשיווק, מיינו את פרי בצורה מאוד קפדני, הרבה מעבר למקובל אצל המגדלים. לכן, סביר להניח, שחלק לא קטן מהפרי שמוין כעקום היה עובר אצל המגדלים לסוג א' ובכל זאת, זן עם אחוז פרי מעוות גבוה נבדל מזנים אחרים עם פרי ישר.", en: "Defining hot pepper as Grade B is characterized by how deformed/crooked or straight the fruit is. Due to the importance of this parameter as a significant marketing trait, we sorted the fruit very strictly, far beyond common practice among growers. Therefore, it's likely that a considerable portion of the fruit sorted as crooked would have passed as Grade A by growers. Nevertheless, a variety with a high percentage of deformed fruit differs from other varieties with straight fruit." } },
      { type: ContentType.Paragraph, data: { he: "הזנים 521100 ושקירה הצטיינו בפרי ישר בהשוואה ליתר הזנים, המתבטא באחוז נמוך של סוג ב' (טבלה 2). באיור 2 ניתן לראות את השתנות אחוז הפרי סוג ב' בתקופות השונות. הזן וולקאן, שהצטיין ביבול מאוד גבוה, סבל מאחוז גבוה של פרי סוג ב', במיוחד בתקופה האחרונה (אביב). הזן לפיד, הידוע כזן עם פרי מעוות בחורף, סבל מרמה גבוהה של פרי סוג ב' לאורך כל עונות הגידול.", en: "Varieties 521100 and Shakira excelled in straight fruit compared to other varieties, reflected in a low percentage of Grade B (Table 2). Figure 2 shows the variation in the percentage of Grade B fruit across different periods. Vulcan, which excelled in very high yield, suffered from a high percentage of Grade B fruit, especially in the late season (spring). Lapid, known for deformed fruit in winter, had a high level of Grade B fruit throughout all growing seasons." } },
      { type: ContentType.LineChart, data: { data: fig2Data, series: fig2Series, xAxisKey: 'name', yAxisLabel: { he: 'אחוז פרי סוג ב\' (%)', en: 'Percentage of Grade B Fruit (%)' }, caption: { he: "איור 2: השתנות אחוז פרי סוג ב' (עקומים) מסה\"כ היבול הכללי, בתקופות השונות, במבחן זני פלפל חריף 2023/4.", en: "Figure 2: Variation in the percentage of Grade B fruit (crooked) from total yield, across different periods, in the hot pepper variety trial 2023/4." } } },
      { type: ContentType.Heading, data: { he: 'בדיקת חריפות', en: 'Pungency Test' } },
      { type: ContentType.Paragraph, data: { he: 'סכום הקפסינואידים, שנלקח כמדד לחריפות הפרי, נמצא גבוה יותר בקטיף הראשון בהשוואה לקטיף השני ברוב הזנים שנבדקו, למעט הזן \'וולקן.\' עם זאת בהשוואה בין הקטיפים, סכום הקפסינואידים נותר דומה יחסית ברוב הזנים, פרט לזנים \'שקירה\' ו\'פורנס\', אשר איבדו את חריפותם בקטיף השני. מנגד הזנים \'וולקן\' ו-\'521100\' התאפיינו ברמת חריפות גבוהה בשני הקטיפים. הזן \'אסקאלה\' נמצא כבעל רמת החריפות הנמוכה ביותר בשני הקטיפים. ניתוח הרכיבים העלה כי ריכוז הדהידרוקפסיצין נותר יציב יחסית בין שני הקטיפים ואף הראה עלייה קלה בזנים מסוימים. לעומת זאת, ריכוז הקפסיצין הציג שונות גבוהה וירידה משמעותית ברוב הזנים בקטיף השני, מה שהיווה את הגורם המרכזי לירידה במדד החריפות הכללי בקטיף זה.', en: 'The sum of capsaicinoids, used as a measure of fruit pungency, was found to be higher in the first harvest compared to the second in most tested varieties, except for Vulcan. However, comparing between harvests, the sum of capsaicinoids remained relatively similar in most varieties, except for Shakira and Furnace, which lost their pungency in the second harvest. In contrast, Vulcan and 521100 were characterized by high pungency levels in both harvests. Escala was found to have the lowest pungency level in both harvests. Component analysis revealed that dihydrocapsaicin concentration remained relatively stable between the two harvests and even showed a slight increase in some varieties. Conversely, capsaicin concentration showed high variability and a significant decrease in most varieties in the second harvest, which was the main factor for the decrease in the overall pungency index in this harvest.' } },
      { type: ContentType.GroupedBarChart, data: { data: fig3Data, series: fig3Series, xAxisKey: 'name', yAxisLabel: microgramPerGramFWUnit, caption: { he: 'איור 3: רמות הקפסיצין והדהידרוקפסיצין וסכומם בזני פלפל שונים בשני מועדי קטיף.', en: 'Figure 3: Capsaicin and dihydrocapsaicin levels and their sum in different pepper varieties at two harvest times.' } } },
    ],
  },
  {
    id: 'discussion',
    title: { he: 'דיון ומסקנות', en: 'Discussion and Conclusions' },
    content: [
      { type: ContentType.Paragraph, data: { he: 'בניסוי זה בחנו זני פלפל חריף ותיקים וחדשים בשתילת סתיו במנהרה עבירה במו"פ בקעת הירדן. הזנים אסקאלה וולקאן, השיגו את היבול העונתי הגבוה ביותר בהשוואה לזנים הוותיקים, לפיד ופרנס, שהשיגו יבול עונתי בינוני ויבול סוג א\' משווק נמוך יחסי. אסקאלה הוא זן עם צימוח חזק ובכיר שהצטיין ביבול הכללי בכל עונת הגידול ובאחוז סוג א\' גבוה אך עם אורך פרי ומשקל פרי בינוני. הזן וולקאן הצטיין ביבול כללי ובאחוז סוג א\' גבוהים והוא הצטיין ביבול גבוה בקטיפי החורף והאביב, עם אורך פרי ממוצע ומשקל פרי ממוצע הגבוה ביותר, ואף הצטיין באורך פרי בסוף העונה.', en: 'In this trial, we examined established and new hot pepper varieties for autumn planting in a walk-in tunnel at Jordan Valley R&D. Escala and Vulcan achieved the highest seasonal yield compared to older varieties Lapid and Furnace, which had moderate seasonal yield and relatively low marketable Grade A yield. Escala is a vigorous and early variety that excelled in total yield throughout the growing season and had a high percentage of Grade A fruit, but with medium fruit length and weight. Vulcan excelled in total yield and high Grade A percentage, and it excelled in high yield during winter and spring harvests, with the highest average fruit length and weight, and also excelled in fruit length at the end of the season.' } },
      { type: ContentType.Paragraph, data: { he: 'שקירה הוא זן עם יבול, אורך ומשקל הפרי בינוני אך הצטיין באחוז סוג ב\' נמוך. 521100 הוא זן עם יבול כללי בינוני אך הצטיין באחוז סוג א\' גבוה ובאחוז סוג ב\' נמוך, ובנוסף הוא צמח חזק ובעל צבע פרי כהה ויפה. הזן 27113 הוא זן ממוצע ביבול אך בלט בצבע פרי כהה ויפה. הזן הוותיק פורנס הוא זן עם יבול ממוצע אך שהצטיין במשקל פרי ממוצע גבוה ואורך פרי לכל עונת הגידול, ובנוסף היה לו כיסוי עלוותי יפה מאוד. לפיד הוא הזן הוותיק, עם יבול בינוני אך שהצטיין באורך פרי בסוף עונת הגידול.', en: 'Shakira is a variety with medium yield, fruit length, and weight, but it excelled with a low percentage of Grade B. 521100 is a variety with medium total yield but excelled with a high percentage of Grade A and a low percentage of Grade B; additionally, it is a strong plant with beautiful dark fruit color. Variety 27113 has average yield but stood out with its beautiful dark fruit color. The established variety Furnace has average yield but excelled in high average fruit weight and fruit length throughout the growing season, and also had very good foliage cover. Lapid is the older variety, with medium yield but excelled in fruit length at the end of the growing season.' } },
      { type: ContentType.Paragraph, data: { he: 'יש לציין שחורף זה התאפיין בטמפרטורה גבוהה בהרבה מהרב שנתית, דבר שהשפיע על התפתחות הצמחים והפרי. חשוב לבדוק את הזנים בעונה נוספת (עונה עם טמפרטורה "רגילה") לפני שיוצאים עם המלצות למגדלים.', en: 'It should be noted that this winter was characterized by much higher temperatures than the multi-year average, which affected plant and fruit development. It is important to test these varieties in an additional season (a season with "normal" temperatures) before making recommendations to growers.' } },
      { type: ContentType.Paragraph, data: { he: 'באופן כללי, חשוב לזכור שבמבחן זנים לא ניתן להעניק טיפול מיוחד לכל זן וזן בהתאם לדרישותיו הספציפיות, כך שייתכן שבתנאים אחרים יגיבו הזנים אחרת.', en: 'In general, it is important to remember that in a variety trial, specific treatment tailored to each variety\'s unique requirements cannot be provided, so varieties might respond differently under other conditions.' } }
    ],
  },
  {
    id: 'gallery',
    title: { he: 'גלריית זני פלפלים', en: 'Pepper Variety Gallery' },
    content: [
      { type: ContentType.ImageGallery, data: { images: pepperImages, caption: { he: "תמונות מזני הפלפלים שנבחנו (תמונות להמחשה).", en: "Images of the tested pepper varieties (illustrative photos)." } } },
    ],
  },
  {
    id: 'acknowledgements',
    title: { he: 'תודות והבהרות', en: 'Acknowledgements and Clarifications' },
    content: [
      { type: ContentType.Paragraph, data: { he: 'תודה לקק"ל ולשולחן פלפל במועצת הצמחים על השתתפותם במימון הניסוי.', en: 'Thanks to KKL-JNF and the Pepper Board at the Plants Production & Marketing Board for their participation in funding the trial.' } },
      { type: ContentType.Paragraph, data: { he: 'האמור לעיל הינו בגדר עצה מקצועית בלבד ואינו מהווה חוות דעת מומחה לצורך הצגה כראיה בהליך משפטי. על מקבל העצה לנהוג מנהג זהירות, ושימוש או הסתמכות על המידע המופיע לעיל הינו באחריות מקבל העצה בלבד. אין להעתיק, להפיץ או להשתמש במסמך זה או בחלקים ממנו לצורך הליך משפטי כלשהו, ללא אישור מראש ובכתב של החתומים.', en: 'The above is professional advice only and does not constitute an expert opinion for presentation as evidence in legal proceedings. The recipient of this advice should exercise caution, and use or reliance on the information provided above is solely the responsibility of the recipient. This document or parts thereof may not be copied, distributed, or used for any legal proceedings without prior written approval from the signatories.' } },
    ],
  },
];