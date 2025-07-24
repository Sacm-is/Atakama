
import React from 'react';
import { COLORS } from '../constants';

interface HeaderProps {
    onNavigate: (sectionId: string) => void;
    isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, isVisible }) => {
    const navLinks = [
        { id: 'sobre', label: 'SOBRE' },
        { id: 'engenharia-civil', label: 'CIVIL' },
        { id: 'engenharia-ambiental', label: 'AMBIENTAL' },
        { id: 'certificacoes', label: 'CERTIFICAÇÕES' },
        { id: 'trabalhe-conosco', label: 'TRABALHE CONOSCO' },
        { id: 'contato', label: 'CONTATO' },
    ];

    return (
        <header 
            className={`fixed top-0 w-full z-40 backdrop-blur-lg shadow-md transition-all duration-500 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
            style={{backgroundColor: '#667690'}}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div 
                        className="flex-shrink-0 cursor-pointer"
                        onClick={() => onNavigate('inicio')}
                    >
                        <h1 className="text-2xl font-bold uppercase">
                            <span style={{color: COLORS.primary}}>ATAKAMA</span>
                            <span className="text-white"> ENGENHARIA</span>
                        </h1>
                    </div>
                    <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => onNavigate(link.id)}
                                className="text-white uppercase font-semibold tracking-wider relative group text-xs lg:text-sm whitespace-nowrap hover:text-slate-200 transition-colors"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" style={{backgroundColor: COLORS.primary}}></span>
                            </button>
                        ))}
                    </nav>
                     {/* Mobile menu button can be added here */}
                </div>
            </div>
        </header>
    );
};

export default Header;