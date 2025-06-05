import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { SectionNavigator } from './components/SectionNavigator';
import { ContentRenderer } from './components/ContentRenderer';
import { reportSections } from './data/reportData';
import type { ReportSection, LocalizedString } from './types';
import { ArrowUpIcon } from './components/Icons';
import { useLanguage } from './contexts/LanguageContext';
import { t } from './utils/localization';

const App: React.FC = () => {
  const { language } = useLanguage();
  const [activeSectionId, setActiveSectionId] = useState<string>(reportSections[0]?.id || '');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const pageTitle: LocalizedString = { he: "מבחן זני פלפל חריף בבית צמיחה בבקעת הירדן, 2023/4", en: "Hot Pepper Variety Trial in Jordan Valley Greenhouse, 2023/4" };
  const scrollTopLabel: LocalizedString = { he: "גלול לראש הדף", en: "Scroll to top" };

  const handleNavClick = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileNavOpen(false); // Close mobile nav on item click
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const mainContentArea = contentRef.current;
    const handleScroll = () => {
      if (mainContentArea) {
        if (mainContentArea.scrollTop > 300) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    if (mainContentArea) {
      mainContentArea.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainContentArea) {
        mainContentArea.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    document.title = t(pageTitle, language);
  }, [language, pageTitle]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on component unmount
    };
  }, [isMobileNavOpen]);


  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <Header title={pageTitle} onMenuClick={toggleMobileNav} isMobileNavOpen={isMobileNavOpen} />
      <div className="flex flex-1 overflow-hidden">
        <SectionNavigator
          sections={reportSections}
          activeSectionId={activeSectionId}
          onNavClick={handleNavClick}
          isMobileNavOpen={isMobileNavOpen}
          closeMobileNav={() => setIsMobileNavOpen(false)}
        />
        {isMobileNavOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
            onClick={() => setIsMobileNavOpen(false)}
            aria-hidden="true"
          ></div>
        )}
        <main ref={contentRef} className="flex-1 p-6 md:p-10 overflow-y-auto bg-white shadow-lg scroll-smooth">
          {reportSections.map((section: ReportSection) => (
            <div key={section.id} id={section.id} className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 border-b-2 border-green-600 pb-2 mb-6">
                {t(section.title, language)}
              </h2>
              <ContentRenderer contentBlocks={section.content} />
            </div>
          ))}
        </main>
      </div>
       {showScrollTop && !isMobileNavOpen && ( // Hide scroll to top if mobile nav is open
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 ${language === 'he' ? 'left-6' : 'right-6'} bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-20`}
          aria-label={t(scrollTopLabel, language)}
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;