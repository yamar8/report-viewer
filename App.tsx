import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { SectionNavigator } from './components/SectionNavigator';
import { ContentRenderer } from './components/ContentRenderer';
import { reportSections } from './data/reportData';
import type { ReportSection } from './types'; // Corrected import
import { ArrowUpIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(reportSections[0]?.id || '');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
        
        // Update active section based on scroll position
        let currentSectionId = activeSectionId;
        for (let i = reportSections.length - 1; i >= 0; i--) {
          const section = reportSections[i];
          const element = document.getElementById(section.id);
          if (element && mainContentArea.scrollTop >= element.offsetTop - mainContentArea.offsetTop - 150) { // 150px offset
            currentSectionId = section.id;
            break;
          }
        }
        if (activeSectionId !== currentSectionId) {
           // setActiveSectionId(currentSectionId); // This can cause jumpy behavior on nav click scroll, disable for now
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
  }, [activeSectionId]);


  const activeSection = reportSections.find(s => s.id === activeSectionId) || reportSections[0];

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800" dir="rtl">
      <Header title="מבחן זני פלפל חריף בבית צמיחה בבקעת הירדן, 2023/4" />
      <div className="flex flex-1 overflow-hidden">
        <SectionNavigator
          sections={reportSections}
          activeSectionId={activeSectionId}
          onNavClick={handleNavClick}
        />
        <main ref={contentRef} className="flex-1 p-6 md:p-10 overflow-y-auto bg-white shadow-lg scroll-smooth">
          {reportSections.map((section: ReportSection) => (
            <div key={section.id} id={section.id} className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 border-b-2 border-green-600 pb-2 mb-6">
                {section.title}
              </h2>
              <ContentRenderer contentBlocks={section.content} />
            </div>
          ))}
        </main>
      </div>
       {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;