
import React, { useState } from 'react';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { TEXTS, ENVIRONMENTAL_SERVICES, COLORS } from '../constants';

const EnvironmentalEngineering: React.FC = () => {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);

    const projectImages = [
        'https://picsum.photos/seed/env1/600/400',
        'https://picsum.photos/seed/env2/600/400',
        'https://picsum.photos/seed/env3/600/400',
    ];

    return (
        <Section id="engenharia-ambiental" className="bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{TEXTS.environmental.title}</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{backgroundColor: COLORS.primary}}></div>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{TEXTS.environmental.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {ENVIRONMENTAL_SERVICES.map((service, index) => (
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

            <div>
                <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">Projetos de Destaque</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {projectImages.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-xl shadow-lg group">
                            <img src={src} alt={`Projeto Ambiental ${index + 1}`} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"/>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default EnvironmentalEngineering;