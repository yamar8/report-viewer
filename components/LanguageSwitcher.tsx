import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const buttonStyle = (lang: 'he' | 'en') => 
    `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
      language === lang 
        ? 'bg-green-600 text-white' 
        : 'text-green-700 bg-transparent hover:bg-green-50'
    }`;

  return (
    <div className="flex space-x-2" dir="ltr"> {/* Keep switcher LTR for consistent button order */}
      <button
        onClick={() => setLanguage('he')}
        className={buttonStyle('he')}
        aria-pressed={language === 'he'}
      >
        עברית
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={buttonStyle('en')}
        aria-pressed={language === 'en'}
      >
        English
      </button>
    </div>
  );
};