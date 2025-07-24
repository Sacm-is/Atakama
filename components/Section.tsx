
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    const sectionRef = useScrollAnimation<HTMLDivElement>();

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 fade-in-up relative scroll-mt-20 ${className}`}
        >
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;