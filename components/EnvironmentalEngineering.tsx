
import React, { useState } from 'react';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { TEXTS, ENVIRONMENTAL_SERVICES, COLORS, PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

type Project = typeof PROJECTS[0];

const EnvironmentalEngineering: React.FC = () => {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    const environmentalProjects = PROJECTS.filter(p => p.category === "Ambiental").slice(0, 3);

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
                <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Projetos de Destaque</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {environmentalProjects.map((project, index) => (
                       <ProjectCard
                            key={project.name + index}
                            {...project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </Section>
    );
};

export default EnvironmentalEngineering;