export type LocalizedString = string | { he: string; en: string };

export enum ContentType {
  Paragraph = 'paragraph',
  Table = 'table',
  LineChart = 'lineChart',
  GroupedBarChart = 'groupedBarChart',
  ImageGallery = 'imageGallery',
  Heading = 'heading', // For subheadings within a section
  ListItem = 'listItem', // For bullet points or numbered lists
}

export interface TableHeader {
  key: string;
  label: LocalizedString; // Updated
  isNumeric?: boolean;
}

export interface TableRow {
  [key: string]: string | number | LocalizedString; // Allow LocalizedString for variety names etc.
}

export interface TableData {
  headers: TableHeader[];
  rows: TableRow[];
  caption?: LocalizedString; // Updated
}

export interface ChartDataItem {
  name: LocalizedString | string; // For x-axis label (often a date or category, might not need translation if consistent)
  [key: string]: string | number | LocalizedString | undefined; // For y-axis values, and to be compatible with 'name'
}

export interface SeriesDefinition {
  key: string; // dataKey in Recharts
  color: string;
  name?: LocalizedString; // Updated: Legend name
  unit?: LocalizedString; // Updated: Unit for tooltip
}

export interface ChartData {
  data: ChartDataItem[];
  series: SeriesDefinition[];
  xAxisKey: string;
  yAxisLabel?: LocalizedString; // Updated
  caption?: LocalizedString; // Updated
  barCategoryGap?: string | number;
  barGap?: string | number;
}

export interface ImageData {
  src: string;
  alt: LocalizedString; // Updated
  caption?: LocalizedString; // Updated
}

export interface ImageGalleryData {
  images: ImageData[];
  caption?: LocalizedString; // Updated
}

export interface ContentBlock {
  type: ContentType;
  data: LocalizedString | TableData | ChartData | ImageGalleryData | LocalizedString[]; // Updated for paragraph/heading/list items
  id?: string;
}

export interface ReportSection {
  id: string;
  title: LocalizedString; // Updated
  content: ContentBlock[];
}

export interface ChartComponentProps {
  data: ChartData;
}