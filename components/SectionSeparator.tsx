import React from 'react';
import { COLORS } from '../constants';

interface SectionSeparatorProps {
    reverse?: boolean;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ reverse = false }) => {
    const bgColor = reverse ? 'bg-slate-50' : 'bg-white';
    const clipPath = reverse 
        ? 'polygon(0 0, 100% 100px, 100% 100%, 0% 100%)' 
        : 'polygon(0 100px, 100% 0, 100% 100%, 0% 100%)';

    return (
        <div className={`h-20 md:h-32 relative ${bgColor}`} style={{ clipPath: clipPath }}>
             <div className="absolute bottom-0 w-full h-px opacity-50" style={{
                background: `linear-gradient(to right, transparent, ${COLORS.primary}, transparent)`
             }}></div>
        </div>
    );
};

export default SectionSeparator;
