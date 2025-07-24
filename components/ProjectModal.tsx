
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { COLORS, XIcon, PROJECTS } from '../constants';

type Project = typeof PROJECTS[0];

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);

        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalBodyOverflow = document.body.style.overflow;

        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.documentElement.style.overflow = originalHtmlOverflow;
            document.body.style.overflow = originalBodyOverflow;
        };
    }, [onClose]);

    const modalContent = (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            style={{animation: 'fade-in 0.3s ease-out forwards'}}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
        >
            <div 
                className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row text-white overflow-hidden relative"
                style={{animation: 'fade-in-bounce 0.5s ease-out forwards'}}
                onClick={e => e.stopPropagation()}
            >
                 <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-700/50 hover:bg-slate-700/80 text-white transition-colors"
                    aria-label="Fechar modal"
                >
                    <XIcon />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover"/>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                    <div className="flex-grow">
                        <span style={{color: COLORS.primary}} className="font-bold uppercase text-sm">{project.category}</span>
                        <h2 id="project-modal-title" className="text-3xl lg:text-4xl font-bold my-2">{project.name}</h2>
                        <p className="text-slate-400 mb-6">{project.location} &bull; {project.year}</p>

                        <div className="space-y-5 text-slate-300">
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1" style={{color: COLORS.primary}}>Propósito</h4>
                                <p>{project.purpose}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1" style={{color: COLORS.primary}}>Descrição</h4>
                                <p>{project.description}</p>
                            </div>
                            {project.partners && project.partners.length > 0 && (
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1" style={{color: COLORS.primary}}>Parceiros</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {project.partners.map(partner => <li key={partner}>{partner}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return createPortal(modalContent, modalRoot);
};

export default ProjectModal;
