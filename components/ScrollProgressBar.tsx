import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';

const ScrollProgressBar: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        const totalScrollableDistance = documentHeight - windowHeight;
        if (totalScrollableDistance <= 0) {
            setScrollPercentage(100);
            return;
        }
        
        const currentPercentage = (scrollTop / totalScrollableDistance) * 100;
        setScrollPercentage(currentPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
            <div 
                className="h-full"
                style={{ 
                    width: `${scrollPercentage}%`, 
                    backgroundColor: COLORS.primary,
                    boxShadow: `0 2px 10px ${COLORS.primary}`
                }}
            />
        </div>
    );
};

export default ScrollProgressBar;
