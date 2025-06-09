import React from 'react';
import { ContentBlock, ContentType, TableData, ChartData, ImageGalleryData, LocalizedString } from '../types';
import { TableDisplay } from './TableDisplay';
import { LineChartDisplay } from './LineChartDisplay';
import { GroupedBarChartDisplay } from './GroupedBarChartDisplay';
import { ImageGallery } from './ImageGallery';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/localization';

interface ContentRendererProps {
  contentBlocks: ContentBlock[];
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ contentBlocks }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      {contentBlocks.map((block, index) => {
        const blockId = block.id || `block-${index}`;
        switch (block.type) {
          case ContentType.Heading:
            return <h3 key={blockId} className="text-2xl font-semibold text-green-600 mt-6 mb-3">{t(block.data as LocalizedString, language)}</h3>;
          case ContentType.Paragraph:
            return <p key={blockId} className="text-lg leading-relaxed text-gray-700">{t(block.data as LocalizedString, language)}</p>;
          case ContentType.ListItem:
            const items = block.data as LocalizedString[];
            return (
              <ul key={blockId} className="list-disc list-inside space-y-1 text-lg text-gray-700 pl-4">
                {items.map((item, itemIndex) => <li key={`${blockId}-item-${itemIndex}`}>{t(item, language)}</li>)}
              </ul>
            );
          case ContentType.Table:
            const tableData = block.data as TableData;
            return (
              <div key={blockId} className="my-6 overflow-x-auto">
                {tableData.caption && <p className="text-center text-sm text-gray-600 mb-2 italic">{t(tableData.caption, language)}</p>}
                <TableDisplay headers={tableData.headers} rows={tableData.rows} />
              </div>
            );
          case ContentType.LineChart:
            const lineChartData = block.data as ChartData;
            return (
              <div key={blockId} className="my-8 p-4 bg-gray-50 rounded-lg shadow">
                {lineChartData.caption && <p className="text-center text-lg font-medium text-gray-700 mb-4">{t(lineChartData.caption, language)}</p>}
                <LineChartDisplay data={lineChartData} />
              </div>
            );
          case ContentType.GroupedBarChart:
            const barChartData = block.data as ChartData;
             return (
              <div key={blockId} className="my-8 p-4 bg-gray-50 rounded-lg shadow">
                {barChartData.caption && <p className="text-center text-lg font-medium text-gray-700 mb-4">{t(barChartData.caption, language)}</p>}
                <GroupedBarChartDisplay data={barChartData} />
              </div>
            );
          case ContentType.ImageGallery:
            const galleryData = block.data as ImageGalleryData;
            return (
              <div key={blockId} className="my-8">
                 {galleryData.caption && <p className="text-center text-lg font-medium text-gray-700 mb-4">{t(galleryData.caption, language)}</p>}
                <ImageGallery images={galleryData.images} />
              </div>
            );
          default:
            return <p key={blockId} className="text-red-500">Unsupported content type</p>;
        }
      })}
    </div>
  );
};