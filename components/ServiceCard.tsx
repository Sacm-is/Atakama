
import React, { useRef } from 'react';
import { COLORS } from '../constants';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    isActive?: boolean;
    onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, isActive, onClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };
    
    return (
        <div 
            ref={cardRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            className={`group p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer card-spotlight
                ${isActive ? 'border-2' : 'border-2 border-transparent'}
            `}
            style={{
                backgroundColor: COLORS.darkBg,
                borderColor: isActive ? '#A4C8FF' : 'transparent',
            }}
        >
            <div className="mb-4 transition-colors duration-300" style={{color: COLORS.primary}}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-300">{description}</p>
        </div>
    );
};

export default ServiceCard;