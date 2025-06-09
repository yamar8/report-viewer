import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/localization';
import type { LocalizedString } from '../types';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MenuIcon, XIcon } from './Icons'; // Import XIcon if used for toggling

interface HeaderProps {
  title: LocalizedString;
  onMenuClick: () => void;
  isMobileNavOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, onMenuClick, isMobileNavOpen }) => {
  const { language } = useLanguage();
  return (
    <header className="bg-white text-green-700 py-3 px-4 sm:px-6 sticky top-0 z-50 flex items-center justify-between border-b border-gray-200">
      <div className="md:hidden"> {/* Hamburger menu button */}
        <button 
          onClick={onMenuClick} 
          className="p-2 rounded-md text-green-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          aria-label={isMobileNavOpen ? t({he: "סגור תפריט ניווט", en: "Close navigation menu"}, language) : t({he: "פתח תפריט ניווט", en: "Open navigation menu"}, language)}
          aria-expanded={isMobileNavOpen}
        >
          {isMobileNavOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      <div className="flex-1 min-w-0 text-center md:text-center px-1 sm:px-2">
         <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-700 truncate">{t(title, language)}</h1>
      </div>
      <div className="flex-shrink-0 pl-1 sm:pl-2">
         <LanguageSwitcher />
      </div>
    </header>
  );
};