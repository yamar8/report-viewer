
import React from 'react';
import type { TableHeader, TableRow } from '../types';

interface TableDisplayProps {
  headers: TableHeader[];
  rows: TableRow[];
}

export const TableDisplay: React.FC<TableDisplayProps> = ({ headers, rows }) => {
  if (!headers || !rows) {
    return <p>Table data is missing.</p>;
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
                className={`px-6 py-3 text-xs font-medium text-white uppercase tracking-wider ${header.isNumeric ? 'text-left' : 'text-right'}`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} className="hover:bg-gray-50 transition-colors">
              {headers.map((header) => (
                <td
                  key={`${header.key}-${rowIndex}`}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 ${header.isNumeric ? 'text-left' : 'text-right'}`}
                >
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
