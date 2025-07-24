import React, { useState } from 'react';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { TEXTS, CIVIL_SERVICES, COLORS } from '../constants';

const CivilEngineering: React.FC = () => {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);

    return (
        <Section id="engenharia-civil" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{TEXTS.civil.title}</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{backgroundColor: COLORS.primary}}></div>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{TEXTS.civil.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {CIVIL_SERVICES.map((service, index) => (
                    <ServiceCard 
                        key={index} 
                        icon={service.icon} 
                        title={service.title} 
                        description={service.description}
                        isActive={index === activeCardIndex}
                        onClick={() => setActiveCardIndex(index)}
                    />
                ))}
            </div>
        </Section>
    );
};

export default CivilEngineering;