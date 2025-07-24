
import React from 'react';
import { COLORS } from '../constants';

interface ProjectCardProps {
    category: string;
    name: string;
    location: string;
    year: string;
    description: string;
    image: string;
    purpose: string;
    partners: string[];
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ category, name, location, year, image, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-slate-100 transform hover:-translate-y-1 flex flex-col"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
            aria-label={`Ver detalhes do projeto ${name}`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={`Projeto ${name}`}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                     <span style={{backgroundColor: COLORS.primary}} className="inline-block text-white px-3 py-1 text-xs font-bold uppercase rounded-full shadow-md">{category}</span>
                </div>
            </div>
            <div className="p-6 text-left flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 leading-tight flex-grow">{name}</h3>
                <p className="text-md text-slate-500 mt-2">{location} &bull; {year}</p>
            </div>
        </div>
    );
};

export default ProjectCard;