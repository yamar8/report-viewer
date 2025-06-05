import React from 'react';
import type { ReportSection, LocalizedString } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/localization';
import { XIcon } from './Icons';

interface SectionNavigatorProps {
  sections: ReportSection[];
  activeSectionId: string;
  onNavClick: (id: string) => void;
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
}

const navigatorTitle: LocalizedString = { he: 'תוכן עניינים', en: 'Table of Contents' };
const closeMenuLabel: LocalizedString = { he: 'סגור תפריט', en: 'Close menu' };

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({ sections, activeSectionId, onNavClick, isMobileNavOpen, closeMobileNav }) => {
  const { language } = useLanguage();
  
  const buttonBaseStyle = "w-full px-3 py-2 rounded-md transition-colors duration-150 ease-in-out";
  const activeStyle = "bg-green-600 text-white font-semibold shadow-sm";
  const inactiveStyle = "text-gray-700 hover:bg-green-100 hover:text-green-700";
  const buttonTextStyle = language === 'en' ? 'text-left' : 'text-right';

  const drawerClasses = language === 'he' 
    ? `right-0 ${isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'}` 
    : `left-0 ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`;

  const desktopClasses = language === 'en' 
    ? 'md:order-first md:border-r md:border-gray-200' 
    : 'md:border-l md:border-gray-200';

  return (
    <aside 
      className={`fixed inset-y-0 z-40 w-72 sm:w-80 bg-gray-100 p-6 overflow-y-auto shadow-xl transform transition-transform duration-300 ease-in-out 
                 md:static md:w-64 md:h-auto md:shadow-md md:translate-x-0 md:z-auto md:block
                 ${drawerClasses} ${desktopClasses} ${isMobileNavOpen ? 'block' : 'hidden'}`}
      aria-hidden={!isMobileNavOpen && typeof window !== 'undefined' && window.innerWidth < 768} // Hide from screen readers when closed on mobile
      id="section-navigator"
    >
      <div className="flex justify-between items-center mb-4 md:block">
        <h2 className={`text-xl font-semibold text-green-800 border-b border-green-300 pb-2 ${language === 'en' ? 'text-left' : 'text-right'} md:mb-4`}>
          {t(navigatorTitle, language)}
        </h2>
        <button 
          onClick={closeMobileNav} 
          className="md:hidden p-1 text-green-700 hover:bg-green-100 rounded-md"
          aria-label={t(closeMenuLabel, language)}
          aria-controls="section-navigator"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => {
                  onNavClick(section.id);
                  // closeMobileNav(); // onNavClick in App.tsx already handles this
                }}
                className={`${buttonBaseStyle} ${buttonTextStyle} ${activeSectionId === section.id ? activeStyle : inactiveStyle}`}
                aria-current={activeSectionId === section.id ? "page" : undefined}
              >
                {t(section.title, language)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};