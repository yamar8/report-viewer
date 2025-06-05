import React from 'react';
import type { ReportSection } from '../types'; // Corrected import

interface SectionNavigatorProps {
  sections: ReportSection[];
  activeSectionId: string;
  onNavClick: (id: string) => void;
}

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({ sections, activeSectionId, onNavClick }) => {
  return (
    <aside className="w-64 bg-gray-100 p-6 overflow-y-auto shadow-md hidden md:block">
      <nav>
        <h2 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-300 pb-2">תוכן עניינים</h2>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => onNavClick(section.id)}
                className={`w-full text-right px-3 py-2 rounded-md transition-colors duration-150 ease-in-out
                            ${activeSectionId === section.id
                              ? 'bg-green-600 text-white font-semibold shadow-sm'
                              : 'text-gray-700 hover:bg-green-100 hover:text-green-700'
                            }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};