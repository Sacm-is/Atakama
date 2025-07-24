import React, { useState, useMemo } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS, COLORS } from '../constants';
import ProjectModal from './ProjectModal';

const projectCategories = ["Todos", "Residencial", "Industrial", "Ambiental", "Obras Públicas"];

type Project = typeof PROJECTS[0];

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = useMemo(() => {
        if (activeCategory === "Todos") {
            return PROJECTS;
        }
        return PROJECTS.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <Section id="projetos" className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Nossos Projetos</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: COLORS.primary }}></div>
            </div>

            <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12">
                {projectCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                            activeCategory === category
                                ? 'text-white shadow-lg'
                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                        style={activeCategory === category ? {backgroundColor: COLORS.primary} : {}}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.name + index}
                        {...project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
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

export default Projects;
