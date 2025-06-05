import { ReportSection, ContentType, TableHeader, TableRow, ChartDataItem, SeriesDefinition, ImageData } from '../types';

const PALETTE = {
  GREEN_DARK: '#15803d', // green-700
  GREEN_MEDIUM: '#16a34a', // green-600
  GREEN_LIGHT: '#22c55e', // green-500
  BLUE_DARK: '#1e3a8a', // blue-800
  BLUE_MEDIUM: '#2563eb', // blue-600
  RED_MEDIUM: '#dc2626', // red-600
  ORANGE_MEDIUM: '#f97316', // orange-500
  PURPLE_MEDIUM: '#9333ea', // purple-600
  TEAL_MEDIUM: '#0d9488', // teal-600
  YELLOW_MEDIUM: '#eab308', // yellow-500
};


const table1Headers: TableHeader[] = [
  { key: 'company', label: 'שם החברה' },
  { key: 'variety', label: 'שם הזן' },
  { key: 'resistance', label: 'עמידות או סבילות לוירוסים' },
];
const table1Rows: TableRow[] = [
  { company: 'אגרודיל', variety: 'וולקאן', resistance: 'TSWV, TMV2' },
  { company: 'ירוק 2000', variety: 'אסקאלה RZ', resistance: 'קימחונית, TSWV, TMV2' },
  { company: 'אפעל', variety: 'שקירה', resistance: 'TMV2' },
  { company: 'הזרע', variety: '521100', resistance: 'אין עמידות או סבילות' },
  { company: 'רימי', variety: '27113', resistance: 'TMV2' },
  { company: 'ירוק 2000 ברק', variety: 'פורנס', resistance: 'TMV0' },
  { company: 'א.ב. זרעים', variety: 'לפיד', resistance: '-' },
];

const table2Headers: TableHeader[] = [
  { key: 'variety', label: 'זן' },
  { key: 'totalYield', label: 'משקל יבול כללי (ק"ג/צמח)', isNumeric: true },
  { key: 'typeAYield', label: 'משקל סוג א\' (ק"ג/צמח)', isNumeric: true },
  { key: 'typeBPercent', label: '% פרי עקום (סוג ב\')', isNumeric: true },
  { key: 'avgFruitWeight', label: 'משקל פרי ממוצע (גרם)', isNumeric: true },
];
const table2Rows: TableRow[] = [
  { variety: 'אסקאלה', totalYield: '5.6 A', typeAYield: '3.8 A', typeBPercent: '32 C', avgFruitWeight: '58 B' },
  { variety: 'וולקאן', totalYield: '5.6 A', typeAYield: '3.4 AB', typeBPercent: '42 A', avgFruitWeight: '61 A' },
  { variety: 'שקירה', totalYield: '4.0 B', typeAYield: '2.9 B', typeBPercent: '27 D', avgFruitWeight: '46 DE' },
  { variety: '521100', totalYield: '4.3 B', typeAYield: '3.1 AB', typeBPercent: '26 D', avgFruitWeight: '48 CD' },
  { variety: '27113', totalYield: '4.1 B', typeAYield: '2.9 B', typeBPercent: '29 CD', avgFruitWeight: '45 E' },
  { variety: 'פורנס', totalYield: '4.4 B', typeAYield: '2.7 B', typeBPercent: '42 A', avgFruitWeight: '59 AB' },
  { variety: 'לפיד', totalYield: '4.3 B', typeAYield: '2.7 B', typeBPercent: '36 B', avgFruitWeight: '51 C' },
];

const table3Headers: TableHeader[] = [
  { key: 'variety', label: 'זן'},
  { key: 'novDec', label: 'נובמבר-דצמבר (ק"ג/צמח)', isNumeric: true },
  { key: 'janMar', label: 'ינואר-מרץ (ק"ג/צמח)', isNumeric: true },
  { key: 'aprMay', label: 'אפריל-מאי (ק"ג/צמח)', isNumeric: true },
];
const table3Rows: TableRow[] = [
  { variety: 'אסקאלה', novDec: '1.9 A', janMar: '1.7 AB', aprMay: '1.8 AB' },
  { variety: 'וולקאן', novDec: '1.3 BC', janMar: '2.0 A', aprMay: '2.1 A' },
  { variety: 'שקירה', novDec: '1.3 BC', janMar: '1.3 CD', aprMay: '1.3 C' },
  { variety: '521100', novDec: '1.2 BC', janMar: '1.3 BCD', aprMay: '1.6 ABC' },
  { variety: '27113', novDec: '1.5 B', janMar: '1.1 D', aprMay: '1.3 C' },
  { variety: 'פורנס', novDec: '1.1 C', janMar: '1.7 ABC', aprMay: '1.4 BC' },
  { variety: 'לפיד', novDec: '1.2 C', janMar: '1.6 BC', aprMay: '1.3 BC' },
];

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
  { key: 'וולקאן', name: 'וולקאן', color: PALETTE.GREEN_DARK, unit: 'ק״ג/צמח' },
  { key: 'אסקאלה', name: 'אסקאלה', color: PALETTE.BLUE_MEDIUM, unit: 'ק״ג/צמח' },
  { key: 'שקירה', name: 'שקירה', color: PALETTE.RED_MEDIUM, unit: 'ק״ג/צמח' },
  { key: '521100', name: '521100', color: PALETTE.ORANGE_MEDIUM, unit: 'ק״ג/צמח' },
  { key: '27113', name: '27113', color: PALETTE.PURPLE_MEDIUM, unit: 'ק״ג/צמח' },
  { key: 'פורנס', name: 'פורנס', color: PALETTE.TEAL_MEDIUM, unit: 'ק״ג/צמח' },
  { key: 'לפיד', name: 'לפיד', color: PALETTE.YELLOW_MEDIUM, unit: 'ק״ג/צמח' },
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
    { key: 'וולקאן', name: 'וולקאן', color: PALETTE.GREEN_DARK, unit: '%' },
    { key: 'אסקאלה', name: 'אסקאלה', color: PALETTE.BLUE_MEDIUM, unit: '%' },
    { key: 'שקירה', name: 'שקירה', color: PALETTE.RED_MEDIUM, unit: '%' },
    { key: '521100', name: '521100', color: PALETTE.ORANGE_MEDIUM, unit: '%' },
    { key: '27113', name: '27113', color: PALETTE.PURPLE_MEDIUM, unit: '%' },
    { key: 'פורנס', name: 'פורנס', color: PALETTE.TEAL_MEDIUM, unit: '%' },
    { key: 'לפיד', name: 'לפיד', color: PALETTE.YELLOW_MEDIUM, unit: '%' },
];

const fig3Data: ChartDataItem[] = [
  { name: 'וולקאן', capsaicin_h1: 20, capsaicin_h2: 18, dihydro_h1: 10, dihydro_h2: 12, sum_h1: 30, sum_h2: 30 },
  { name: 'אסקאלה', capsaicin_h1: 25, capsaicin_h2: 15, dihydro_h1: 12, dihydro_h2: 8, sum_h1: 37, sum_h2: 23 },
  { name: 'שקירה', capsaicin_h1: 15, capsaicin_h2: 5, dihydro_h1: 8, dihydro_h2: 3, sum_h1: 23, sum_h2: 8 },
  { name: '521100', capsaicin_h1: 22, capsaicin_h2: 20, dihydro_h1: 11, dihydro_h2: 10, sum_h1: 33, sum_h2: 30 },
  { name: '27113', capsaicin_h1: 18, capsaicin_h2: 10, dihydro_h1: 9, dihydro_h2: 7, sum_h1: 27, sum_h2: 17 },
  { name: 'פורנס', capsaicin_h1: 28, capsaicin_h2: 12, dihydro_h1: 14, dihydro_h2: 6, sum_h1: 42, sum_h2: 18 },
  { name: 'לפיד', capsaicin_h1: 19, capsaicin_h2: 17, dihydro_h1: 9, dihydro_h2: 9, sum_h1: 28, sum_h2: 26 },
];
const fig3Series: SeriesDefinition[] = [
  { key: 'capsaicin_h1', name: 'קפסיצין (קטיף 1)', color: PALETTE.BLUE_MEDIUM, unit: 'µg/g FW' },
  { key: 'capsaicin_h2', name: 'קפסיצין (קטיף 2)', color: PALETTE.BLUE_DARK, unit: 'µg/g FW' },
  { key: 'dihydro_h1', name: 'דיהידרוקפסיצין (קטיף 1)', color: PALETTE.RED_MEDIUM, unit: 'µg/g FW' },
  { key: 'dihydro_h2', name: 'דיהידרוקפסיצין (קטיף 2)', color: PALETTE.ORANGE_MEDIUM, unit: 'µg/g FW' },
  { key: 'sum_h1', name: 'סה"כ (קטיף 1)', color: PALETTE.GREEN_MEDIUM, unit: 'µg/g FW' },
  { key: 'sum_h2', name: 'סה"כ (קטיף 2)', color: PALETTE.GREEN_DARK, unit: 'µg/g FW' },
];

const pepperImages: ImageData[] = [
  { src: 'https://picsum.photos/seed/eskala/400/300', alt: 'פלפל אסקאלה RZ', caption: 'אסקאלה RZ' },
  { src: 'https://picsum.photos/seed/521100/400/300', alt: 'פלפל 521100', caption: '521100 (הזרע)' },
  { src: 'https://picsum.photos/seed/27113/400/300', alt: 'פלפל 27113', caption: '27113 (רימי)' },
  { src: 'https://picsum.photos/seed/volcano/400/300', alt: 'פלפל וולקאן', caption: 'וולקאן (אגרודיל)' },
  { src: 'https://picsum.photos/seed/lapid/400/300', alt: 'פלפל לפיד', caption: 'לפיד (א.ב. זרעים)' },
  { src: 'https://picsum.photos/seed/furnace/400/300', alt: 'פלפל פורנס', caption: 'פורנס (ירוק 2000 ברק)' },
  { src: 'https://picsum.photos/seed/shkira/400/300', alt: 'פלפל שקירה', caption: 'שקירה (אפעל)' },
];


export const reportSections: ReportSection[] = [
  {
    id: 'introduction',
    title: 'מבוא',
    content: [
      { type: ContentType.Paragraph, data: 'גידול פלפל חריף נחשב לגידול חשוב בענף הירקות למרות שהיקף הגידול הוא קטן ביחס להיקף גידול של פלפל מתוק. מגדלים בשטח הפתוח וגם בבתי צמיחה שונים, חממות ומנהרות עבירות בגדלים שונים. היקף הגידול השנתי מוערך לכ-900 עד 1000 דונם עם שיווק של כ-6000 טון לשנה (נתונים ממועצת הצמחים).' },
      { type: ContentType.Paragraph, data: 'הגידול בבתי צמיחה בחורף נפוץ באזור בקעת הירדן וים המלח ובאזור המרכז, כאשר הגידול בבתי צמיחה מאפשר את הייצור ואספקתו במהלך החורף והאביב ולפעמים גם מעבר לכך. בנוסף, מתבצעות שתילות סתווית בשטח פתוח באזור בקעת הירדן ובמיוחד בצפון הבקעה, הודות להתאמתו למזג האוויר של הבקעה.' },
      { type: ContentType.Paragraph, data: 'מבחן הזנים הזה נועד לבחון את זני הפלפל החריף הנפוצים והחדשים בשתילת סתיו בבתי צמיחה בבקעת הירדן, ובו נבדקה התאמתם של הזנים החדשים ביחס לזנים המסחריים פורנס ולפיד, לפי פרמטרים חשובים כמו: יבול סוג א\' וסוג ב\' (פרי מעוות ושחור פיטם), מאפייני צימוח ואיכות הפרי.'},
    ],
  },
  {
    id: 'objective',
    title: 'מטרת הניסוי',
    content: [
      { type: ContentType.Paragraph, data: 'לאתר זני פלפל חריף עתירי יבול ואיכות, בעלי חריפות, בצבע ירוק כהה, ארוכים ובעלי צורה ישירה לשיווק בסתיו, בחורף ובאביב. זני הניסוי שיתבלטו יומלצו לגדול בהיקפים חצי מסחריים. זנים שיצטיינו יבחנו בעתיד בצורה מסודרת גם בעונות שונות ובאזורים אחרים.' },
    ],
  },
  {
    id: 'methodology',
    title: 'מהלך המחקר ושיטות עבודה',
    content: [
      { type: ContentType.Heading, data: 'מקום הניסוי' },
      { type: ContentType.Paragraph, data: 'תחנת צבי מו"פ בקעת הירדן.' },
      { type: ContentType.Heading, data: 'הכנת השטח ובית גידול' },
      { type: ContentType.Paragraph, data: 'משתת בערוגות הקיימות, פיזור 3 מ"ק/ד\' קומפוסט בוצה מטופלת, שטיפה של 100 מ"ק/ד\' בהמטרה, תיחוח, פריסת פלסטיק שקוף על כל השטח לצורך חיטוי סולרי והזרמת אדיגן 40 לי/ד\' בערוגות (באמצעות שלוחות הטפטוף). בית גידול היה מנהרה עבירה 2" ברוחב 10 מטר. בתחילת הגידול נפרסה רשת 17 מש, ב-22.11.23 הרשת הוחלפה בפלסטיק. בצדדים רשתות נגד חרקים 50 מש. בתאריך 27.02.2024 המנהרה כוסתה ברשת שחורה 40% צל, ב- 24.03.2024 נחתכו חורי אוורור בפלסטיק.' },
      { type: ContentType.Paragraph, data: 'השתילה הייתה ב- 19/9/23. בניסוי נבחנו 7 זנים (טבלה 1) ב-4 חזרות, בכל חזרה 20 שתילים, 5 שתילים למטר רץ בצמד. הצמחים גודלו ונתמכו בשיטת ההדליה הספרדית.'},
      { type: ContentType.Heading, data: 'איסוף הנתונים' },
      { type: ContentType.Paragraph, data: 'במהלך העונה בוצעו 12 קטיפים בהם היבול נשקל ומוין לסוג א\' וסוג ב\' (פרות מעוותים או עקומים). קטיף הראשון בוצע ב 07.11.2023 וקטיף אחרון ב- 14.05.2024. בכל קטיף נלקח מדגם של 20 פרות מסוג א\' על מנת לשקול את המשקל הממוצע לפרי. פעמיים בעונה, בחודשים דצמבר ואפריל, נמדד אורך פרי של 20 פרות מכל חזרה. נלקחו פרות למעבדה לבדיקת חריפות והתוצאות יופיעו בדוח בנפרד.' },
      { type: ContentType.Heading, data: 'סטטיסטיקה' },
      { type: ContentType.Paragraph, data: 'הניסוי הוצב במתכונת בלוקים באקראי. תוצאות הניסוי חושבו ק"ג/צמח ונותחו סטטיסטית בתוכנת JMP לפי מודל ה-Student LSD, ברמת מובהקות P<0.05.' },
    ],
  },
  {
    id: 'results',
    title: 'תוצאות',
    content: [
      { type: ContentType.Table, data: { headers: table1Headers, rows: table1Rows, caption: "טבלה 1: שמות הזנים, חברות הזרעים, עמידות וסבילות הזנים לוירוסים במבחן זנים בבקעת הירדן 2023-4." } },
      { type: ContentType.Paragraph, data: 'מבין הזנים שהשתתפו במבחן הזנים, הזנים אסקאלה ו- וולקאן השיגו את היבולים הגבוהים ביותר בהשוואה ליתר הזנים (טבלה 2). הזן אסקאלה השיג את היבול סוג א\' הגבוה ביותר אך לא נבדל במובהק מהזנים וולקאן ו-521100. הזנים 521100 ושקירה הצטיינו באחוז פרי סוג ב\' הנמוך ביותר אך לא נבדל מהזן 27113. הזנים וולקאן ופורנס היו עם אחוז הגבוה ביותר של פרי סוג ב\'. הזן וולקאן היה עם הפרי הכבד ביותר אך לא נבדל מהזן פורנס. הזן המסחרי הותיק, לפיד, השיג תוצאות בינוניות, יבול סוג א\' וב\', בהשוואה ליתר הזנים.' },
      { type: ContentType.Table, data: { headers: table2Headers, rows: table2Rows, caption: "טבלה 2: משקל יבול כללי וסוג א' (ק\"ג/צמח), אחוז פרי סוג ב' מסה\"כ יבול הכללי ומשקל פרי ממוצע (גרם), מבחן זני פלפל חריף 2023/4. *פרי עקום הינה הסיבה העיקרית להגדרת הפרי סוג ב'. אותיות שונות באותו טור מצביעות על הבדל מובהק ברמה של 5% במבחן student." } },
      { type: ContentType.Paragraph, data: 'בחודשים נובמבר-דצמבר (סתיו), הניב הזן אסקאלה את היבול הגבוה ביותר, והראה בכירות מובהקת על פני שאר הזנים (טבלה 3 ואיור 1). באותה תקופה הזנים המסחריים, פורנס ולפיד, הניבו את היבול הנמוך ביותר. בתקופת החורף (ינואר-מרץ), הניב הזן וולקאן את היבול הגבוה ביותר אך לא נבדל מהזנים אסקאלה ופורנס. הזן 27113 השיג את היבול הנמוך ביותר לאותה תקופה. בחודשים אפריל-מאי (אביב), הניב הזן וולקאן את היבול הגבוה ביותר אך לא נבדל מהזנים אסקאלה ו- 521100.' },
      { type: ContentType.Table, data: { headers: table3Headers, rows: table3Rows, caption: "טבלה 3: מבחן זני פלפל חריף - התפלגות משקל יכול כללי (ק\"ג/צמח) לפי תקופות (סתיו, חורף, אביב)." } },
      { type: ContentType.LineChart, data: { data: fig1Data, series: fig1Series, xAxisKey: 'name', yAxisLabel: 'ק"ג/צמח', caption: "איור 1: עקומת צבירת משקל יבול כללי (ק\"ג/צמח) במבחן זני פלפל חריף 2023/4." } },
      { type: ContentType.Paragraph, data: "הגדרת פלפל חריף כסוג ב' מאופיין בכמה שהפרי מעוות/עקום או ישר. עקב חשיבות פרמטר זה כתכונה משמעותית בשיווק, מיינו את פרי בצורה מאוד קפדני, הרבה מעבר למקובל אצל המגדלים. לכן, סביר להניח, שחלק לא קטן מהפרי שמוין כעקום היה עובר אצל המגדלים לסוג א' ובכל זאת, זן עם אחוז פרי מעוות גבוה נבדל מזנים אחרים עם פרי ישר." },
      { type: ContentType.Paragraph, data: "הזנים 521100 ושקירה הצטיינו בפרי ישר בהשוואה ליתר הזנים, המתבטא באחוז נמוך של סוג ב' (טבלה 2). באיור 2 ניתן לראות את השתנות אחוז הפרי סוג ב' בתקופות השונות. הזן וולקאן, שהצטיין ביבול מאוד גבוה, סבל מאחוז גבוה של פרי סוג ב', במיוחד בתקופה האחרונה (אביב). הזן לפיד, הידוע כזן עם פרי מעוות בחורף, סבל מרמה גבוהה של פרי סוג ב' לאורך כל עונות הגידול." },
      { type: ContentType.LineChart, data: { data: fig2Data, series: fig2Series, xAxisKey: 'name', yAxisLabel: 'אחוז פרי סוג ב\' (%)', caption: "איור 2: השתנות אחוז פרי סוג ב' (עקומים) מסה\"כ היבול הכללי, בתקופות השונות, במבחן זני פלפל חריף 2023/4." } },
      { type: ContentType.Heading, data: 'בדיקת חריפות' },
      { type: ContentType.Paragraph, data: 'סכום הקפסינואידים, שנלקח כמדד לחריפות הפרי, נמצא גבוה יותר בקטיף הראשון בהשוואה לקטיף השני ברוב הזנים שנבדקו, למעט הזן \'וולקן.\' עם זאת בהשוואה בין הקטיפים, סכום הקפסינואידים נותר דומה יחסית ברוב הזנים, פרט לזנים \'שקירה\' ו\'פורנס\', אשר איבדו את חריפותם בקטיף השני. מנגד הזנים \'וולקן\' ו-\'521100\' התאפיינו ברמת חריפות גבוהה בשני הקטיפים. הזן \'אסקאלה\' נמצא כבעל רמת החריפות הנמוכה ביותר בשני הקטיפים. ניתוח הרכיבים העלה כי ריכוז הדהידרוקפסיצין נותר יציב יחסית בין שני הקטיפים ואף הראה עלייה קלה בזנים מסוימים. לעומת זאת, ריכוז הקפסיצין הציג שונות גבוהה וירידה משמעותית ברוב הזנים בקטיף השני, מה שהיווה את הגורם המרכזי לירידה במדד החריפות הכללי בקטיף זה.'},
      { type: ContentType.GroupedBarChart, data: { data: fig3Data, series: fig3Series, xAxisKey: 'name', yAxisLabel: 'ug/g FW', caption: 'איור 3: רמות הקפסיצין והדהידרוקפסיצין וסכומם בזני פלפל שונים בשני מועדי קטיף.' } },
    ],
  },
  {
    id: 'discussion',
    title: 'דיון ומסקנות',
    content: [
      { type: ContentType.Paragraph, data: 'בניסוי זה בחנו זני פלפל חריף ותיקים וחדשים בשתילת סתיו במנהרה עבירה במו"פ בקעת הירדן. הזנים אסקאלה וולקאן, השיגו את היבול העונתי הגבוה ביותר בהשוואה לזנים הוותיקים, לפיד ופרנס, שהשיגו יבול עונתי בינוני ויבול סוג א\' משווק נמוך יחסי. אסקאלה הוא זן עם צימוח חזק ובכיר שהצטיין ביבול הכללי בכל עונת הגידול ובאחוז סוג א\' גבוה אך עם אורך פרי ומשקל פרי בינוני. הזן וולקאן הצטיין ביבול כללי ובאחוז סוג א\' גבוהים והוא הצטיין ביבול גבוה בקטיפי החורף והאביב, עם אורך פרי ממוצע ומשקל פרי ממוצע הגבוה ביותר, ואף הצטיין באורך פרי בסוף העונה.' },
      { type: ContentType.Paragraph, data: 'שקירה הוא זן עם יבול, אורך ומשקל הפרי בינוני אך הצטיין באחוז סוג ב\' נמוך. 521100 הוא זן עם יבול כללי בינוני אך הצטיין באחוז סוג א\' גבוה ובאחוז סוג ב\' נמוך, ובנוסף הוא צמח חזק ובעל צבע פרי כהה ויפה. הזן 27113 הוא זן ממוצע ביבול אך בלט בצבע פרי כהה ויפה. הזן הוותיק פורנס הוא זן עם יבול ממוצע אך שהצטיין במשקל פרי ממוצע גבוה ואורך פרי לכל עונת הגידול, ובנוסף היה לו כיסוי עלוותי יפה מאוד. לפיד הוא הזן הוותיק, עם יבול בינוני אך שהצטיין באורך פרי בסוף עונת הגידול.'},
      { type: ContentType.Paragraph, data: 'יש לציין שחורף זה התאפיין בטמפרטורה גבוהה בהרבה מהרב שנתית, דבר שהשפיע על התפתחות הצמחים והפרי. חשוב לבדוק את הזנים בעונה נוספת (עונה עם טמפרטורה "רגילה") לפני שיוצאים עם המלצות למגדלים.' },
      { type: ContentType.Paragraph, data: 'באופן כללי, חשוב לזכור שבמבחן זנים לא ניתן להעניק טיפול מיוחד לכל זן וזן בהתאם לדרישותיו הספציפיות, כך שייתכן שבתנאים אחרים יגיבו הזנים אחרת.'}
    ],
  },
  {
    id: 'gallery',
    title: 'גלריית זני פלפלים',
    content: [
      { type: ContentType.ImageGallery, data: { images: pepperImages, caption: "תמונות מזני הפלפלים שנבחנו (תמונות להמחשה)." } },
    ],
  },
  {
    id: 'acknowledgements',
    title: 'תודות והבהרות',
    content: [
      { type: ContentType.Paragraph, data: 'תודה לקק"ל ולשולחן פלפל במועצת הצמחים על השתתפותם במימון הניסוי.' },
      { type: ContentType.Paragraph, data: 'האמור לעיל הינו בגדר עצה מקצועית בלבד ואינו מהווה חוות דעת מומחה לצורך הצגה כראיה בהליך משפטי. על מקבל העצה לנהוג מנהג זהירות, ושימוש או הסתמכות על המידע המופיע לעיל הינו באחריות מקבל העצה בלבד. אין להעתיק, להפיץ או להשתמש במסמך זה או בחלקים ממנו לצורך הליך משפטי כלשהו, ללא אישור מראש ובכתב של החתומים.' },
    ],
  },
];