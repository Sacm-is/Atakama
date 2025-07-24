
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
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    return (
        <div className="bg-white text-slate-700 min-h-screen">
            <ScrollProgressBar />
            <Header onNavigate={scrollToSection} isVisible={isHeaderVisible} />

            <main>
                <div id="inicio">
                    <Landing onNavigate={scrollToSection} />
                </div>
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
            </main>
            
            <FloatingChat />
        </div>
    );
};

export default App;