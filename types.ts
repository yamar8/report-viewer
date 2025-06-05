
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
  label: string;
  isNumeric?: boolean;
}

export interface TableRow {
  [key: string]: string | number;
}

export interface TableData {
  headers: TableHeader[];
  rows: TableRow[];
  caption?: string;
}

export interface ChartDataItem {
  name: string; // For x-axis label
  [key: string]: string | number | undefined; // For y-axis values
}

// For LineChart and GroupedBarChart
export interface SeriesDefinition {
  key: string; // dataKey in Recharts
  color: string;
  name?: string; // Legend name
  unit?: string; // Unit for tooltip
}

export interface ChartData {
  data: ChartDataItem[];
  series: SeriesDefinition[]; 
  xAxisKey: string;
  yAxisLabel?: string;
  caption?: string;
  // Specific for GroupedBarChart, to control bar layout if needed
  barCategoryGap?: string | number; 
  barGap?: string | number;
}

export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
}

export interface ImageGalleryData {
  images: ImageData[];
  caption?: string;
}

export interface ContentBlock {
  type: ContentType;
  // Using 'any' for data is not ideal, but allows flexibility for different content types.
  // A more type-safe approach would use a discriminated union based on 'type'.
  data: string | TableData | ChartData | ImageGalleryData | string[]; // string for paragraph/heading, string[] for list items
  id?: string; // Optional unique ID for direct linking if needed
}

export interface ReportSection {
  id: string;
  title: string; // For sidebar navigation and section header
  content: ContentBlock[];
}

// Props for chart components
export interface ChartComponentProps {
  data: ChartData;
}
