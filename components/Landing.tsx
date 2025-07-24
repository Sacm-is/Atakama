import React, { useState, useEffect } from 'react';
import { COLORS, TEXTS, HelmetIcon, LeafSimpleIcon, LANDING_CAROUSEL_IMAGES } from '../constants';

interface LandingProps {
    onNavigate: (sectionId: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % LANDING_CAROUSEL_IMAGES.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-800 relative p-4 overflow-hidden">
            {/* Background Image Carousel */}
            {LANDING_CAROUSEL_IMAGES.map((src, index) => (
                <div
                    key={src}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                        backgroundImage: `url(${src})`,
                        animation: `${index === currentIndex ? 'ken-burns 15s ease-in-out infinite alternate' : 'none'}`
                    }}
                ></div>
            ))}
            
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-60 z-0"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="overflow-hidden">
                     <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-widest opacity-0 animate-[slide-in-down_1s_ease-out_forwards]" style={{ textShadow: `2px 2px 4px rgba(0,0,0,0.5)` }}>
                        Atakama
                    </h1>
                </div>
                 <div className="overflow-hidden">
                    <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wider mt-2 opacity-0 animate-[slide-in-up-slogan_1s_ease-out_0.5s_forwards]" style={{ color: COLORS.primary }}>
                        Engenharia
                    </h2>
                </div>
                
                <div className="relative my-8 max-w-2xl opacity-0 animate-[slide-in-up-slogan_1s_ease-out_1.5s_forwards]">
                    <p className="text-white text-lg md:text-xl inline-block">
                        {TEXTS.landing.impactPhrase}
                    </p>
                    <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-1/3 h-0.5 origin-center scale-x-0 animate-[scale-x-100_1s_ease-out_2s_forwards]" style={{backgroundColor: COLORS.primary}}></div>
                </div>


                <div className="flex flex-col md:flex-row gap-6 mt-4 opacity-0 animate-[fade-in-bounce_1s_ease-out_2s_forwards]">
                    <button 
                        onClick={() => onNavigate('engenharia-civil')}
                        className="group flex items-center justify-center px-8 py-3 text-lg font-bold text-white uppercase tracking-wider bg-transparent border-2 border-white rounded-xl transition-all duration-300 ease-in-out hover:text-white hover:border-transparent"
                        style={{'--hover-bg': COLORS.primary} as React.CSSProperties}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg')}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <HelmetIcon className="h-6 w-6 mr-3 transition-all duration-300 group-hover:rotate-12" />
                        <span>Engenharia Civil</span>
                    </button>
                    <button 
                        onClick={() => onNavigate('engenharia-ambiental')}
                        className="group flex items-center justify-center px-8 py-3 text-lg font-bold text-white uppercase tracking-wider bg-transparent border-2 border-white rounded-xl transition-all duration-300 ease-in-out hover:text-white hover:border-transparent"
                        style={{'--hover-bg': COLORS.primary} as React.CSSProperties}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg')}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <LeafSimpleIcon className="h-6 w-6 mr-3 transition-all duration-300 group-hover:rotate-12" />
                        <span>Engenharia Ambiental</span>
                    </button>
                </div>
            </div>

            <div 
                onClick={() => onNavigate('sobre')}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group opacity-0 animate-[fade-in_1s_ease-out_2.5s_forwards]"
            >
                <span className="text-white uppercase text-sm tracking-wider mb-2 transition-colors" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-color')} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Conheça a Atakama</span>
                <svg className="w-6 h-6 text-white animate-bounce transition-colors" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-color')} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
};

export default Landing;