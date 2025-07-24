
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import CivilEngineering from './components/CivilEngineering';
import EnvironmentalEngineering from './components/EnvironmentalEngineering';
import Certifications from './components/Certifications';
import WorkWithUs from './components/WorkWithUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import SectionSeparator from './components/SectionSeparator';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
    const [showMainSite, setShowMainSite] = useState<boolean>(false);

    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'inicio') {
             window.scrollTo({ top: 0, behavior: 'smooth' });
             return;
        }
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    const handleNavigateFromLanding = (sectionId: string) => {
        setShowMainSite(true);
        // Delay scroll to allow the main content to render and animations to start
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 100); 
    };

    return (
        <div className="bg-white text-slate-700 min-h-screen">
            {showMainSite && <ScrollProgressBar />}
            <div className={`transition-opacity duration-1000 ${showMainSite ? 'opacity-0 pointer-events-none h-0' : 'opacity-100'}`}>
                <Landing onNavigate={handleNavigateFromLanding} />
            </div>

            <div className={`fixed top-0 left-0 w-full transition-opacity duration-1000 ${showMainSite ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}>
                <Header onNavigate={scrollToSection} />
            </div>

            <main className={`transition-opacity duration-1000 ${showMainSite ? 'opacity-100' : 'opacity-0'}`}>
                {showMainSite && (
                    <>
                        <div id="inicio" className="h-20"></div> {/* Spacer for header */}
                        <About />
                        <SectionSeparator />
                        <CivilEngineering />
                        <SectionSeparator reverse />
                        <EnvironmentalEngineering />
                        <SectionSeparator />
                        <Certifications />
                        <SectionSeparator reverse />
                        <WorkWithUs />
                        <SectionSeparator />
                        <Contact />
                        <Footer onNavigate={scrollToSection}/>
                    </>
                )}
            </main>
            
            {showMainSite && <FloatingChat />}
        </div>
    );
};

export default App;