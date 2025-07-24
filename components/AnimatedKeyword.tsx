import React, { useState, useEffect } from 'react';
import { COLORS, ANIMATED_KEYWORDS } from '../constants';

const AnimatedKeyword: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % ANIMATED_KEYWORDS.length);
        }, 3000); // Change keyword every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-block relative font-semibold" style={{ color: COLORS.primary }}>
             <span key={index} className="keyword-anim">
                {ANIMATED_KEYWORDS[index]}
            </span>
        </span>
    );
};

export default AnimatedKeyword;
