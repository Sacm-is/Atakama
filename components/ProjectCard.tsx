import React from 'react';
import { COLORS } from '../constants';

interface ProjectCardProps {
    category: string;
    name: string;
    location: string;
    year: string;
    description: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ category, name, location, year, image, description }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg h-96 block fade-in-up border border-slate-100">
            <img
                src={image}
                alt={`Projeto ${name}`}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <span style={{backgroundColor: COLORS.primary}} className="inline-block text-white px-3 py-1 text-xs font-bold uppercase rounded-full mb-2 self-start">{category}</span>
                    <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-md">{name}</h3>
                    <p className="text-sm text-slate-200">{location} - {year}</p>
                </div>
                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out">
                    <p className="text-slate-100 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;