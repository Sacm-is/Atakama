import React from 'react';
import { COLORS, FacebookIcon, InstagramIcon, LinkedinIcon } from '../constants';

interface FooterProps {
    onNavigate: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: COLORS.darkBg}}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    {/* Column 1: Logo & Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <div 
                            className="mb-4 cursor-pointer inline-block"
                            onClick={() => onNavigate('inicio')}
                        >
                            <h2 className="text-3xl font-bold uppercase">
                                <span className="text-white">Atakama</span>
                                <span style={{color: COLORS.primary}}>/Eng</span>
                            </h2>
                        </div>
                        <p className="text-sm" style={{color: COLORS.lightBg}}>Soluções completas em engenharia para transformar o futuro.</p>
                        <p className="mt-4 text-sm" style={{color: COLORS.lightBg}}>contato@atakama.com.br</p>
                        <p className="text-sm" style={{color: COLORS.lightBg}}>(XX) XXXX-XXXX</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Links Rápidos</h3>
                        <div className="grid grid-cols-2 gap-2" style={{color: COLORS.lightBg}}>
                             <button onClick={() => onNavigate('sobre')} className="transition-colors block" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Sobre</button>
                            <button onClick={() => onNavigate('projetos')} className="transition-colors block" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Projetos</button>
                            <button onClick={() => onNavigate('engenharia-civil')} className="transition-colors block" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Civil</button>
                            <button onClick={() => onNavigate('engenharia-ambiental')} className="transition-colors block" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Ambiental</button>
                            <button onClick={() => onNavigate('trabalhe-conosco')} className="transition-colors block" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Carreiras</button>
                            <button onClick={() => onNavigate('contato')} className="transition-colors block" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Contato</button>
                        </div>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Siga-nos</h3>
                        <div className="flex justify-center md:justify-start space-x-6" style={{color: COLORS.lightBg}}>
                            <a href="#" className="transition-colors" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}><FacebookIcon className="h-6 w-6" /></a>
                            <a href="#" className="transition-colors" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}><InstagramIcon className="h-6 w-6" /></a>
                            <a href="#" className="transition-colors" style={{'--hover-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = ''}><LinkedinIcon className="h-6 w-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-600 text-center text-sm" style={{color: '#bac2cd90'}}>
                    <p>
                        © {new Date().getFullYear()} Atakama Engenharia. Todos os direitos reservados.
                    </p>
                    <p className="text-xs mt-2">
                        <a href="#" className="hover:text-white">Termos de Serviço</a> | <a href="#" className="hover:text-white">Política de Privacidade</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;