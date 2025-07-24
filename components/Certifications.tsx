
import React from 'react';
import Section from './Section';
import { TEXTS, COLORS, PARTNERS_LOGOS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LogoCard: React.FC<{ logo: typeof PARTNERS_LOGOS[0]}> = ({ logo }) => {
    const cardRef = useScrollAnimation<HTMLDivElement>();
    return (
        <div 
            ref={cardRef} 
            className="group relative flex items-center justify-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl h-32 fade-in-up transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
            <span className="text-slate-700 font-bold text-lg md:text-xl text-center transition-opacity duration-300">{logo.name}</span>
        </div>
    );
}

const Certifications: React.FC = () => {
    return (
        <Section id="certificacoes" className="bg-slate-50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{TEXTS.certifications.title}</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: COLORS.primary }}></div>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{TEXTS.certifications.description}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {PARTNERS_LOGOS.map((logo, index) => (
                    <LogoCard key={index} logo={logo} />
                ))}
            </div>
        </Section>
    );
};

export default Certifications;