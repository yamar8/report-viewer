import React from 'react';
import type { TableHeader, TableRow, LocalizedString } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/localization';

interface TableDisplayProps {
  headers: TableHeader[];
  rows: TableRow[];
}

export const TableDisplay: React.FC<TableDisplayProps> = ({ headers, rows }) => {
  const { language } = useLanguage();

  if (!headers || !rows) {
    return <p>{t({ he: "נתוני הטבלה חסרים.", en: "Table data is missing." }, language)}</p>;
  }

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-green-600">
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                scope="col"
                className={`px-6 py-3 text-xs font-medium text-white uppercase tracking-wider ${
                  header.isNumeric ? (language === 'he' ? 'text-right' : 'text-left') : (language === 'he' ? 'text-right' : 'text-left')
                }`}
              >
                {t(header.label, language)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} className="hover:bg-gray-50 transition-colors">
              {headers.map((header) => {
                const cellData = row[header.key];
                let cellContent: React.ReactNode;

                if (typeof cellData === 'object' && cellData !== null && 'he' in cellData && 'en' in cellData) {
                  // Explicitly a LocalizedString object
                  cellContent = t(cellData as LocalizedString, language);
                } else if (typeof cellData === 'string' || typeof cellData === 'number') {
                  // Primitive string or number
                  cellContent = cellData;
                } else {
                  // Fallback for other unexpected types, or if cellData is null and not LocalizedString.
                  // Given TableRow type, this path should ideally not be common.
                  cellContent = cellData ? String(cellData) : '';
                }
                
                return (
                  <td
                    key={`${header.key}-${rowIndex}`}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 ${
                      header.isNumeric ? (language === 'he' ? 'text-right' : 'text-left') : (language === 'he' ? 'text-right' : 'text-left')
                    }`}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};