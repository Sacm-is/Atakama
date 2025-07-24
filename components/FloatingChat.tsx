
import React, { useState } from 'react';
import { ChatBubbleIcon, XIcon, COLORS } from '../constants';

const FloatingChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        sector: 'Civil',
        service: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contato de Especialista: ${formData.sector}`);
        const body = encodeURIComponent(
`Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Setor de Interesse: ${formData.sector}
Tipo de Serviço: ${formData.service}

Mensagem:
${formData.message}`
        );
        window.location.href = `mailto:contato@atakama.com.br?subject=${subject}&body=${body}`;
        setIsOpen(false);
    };
    
    const revolvingText = "ATAKAMA ENGENHARIA • INOVAÇÃO E SUSTENTABILIDADE • ".toUpperCase();

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 group">
                <div 
                    className="absolute inset-[-40px] w-40 h-40 text-xs font-bold uppercase tracking-wider text-slate-400"
                    style={{ animation: 'rotate-text 20s linear infinite' }}
                >
                   <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text>
                            <textPath xlinkHref="#circle">
                                {revolvingText}
                            </textPath>
                        </text>
                    </svg>
                </div>
                 <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{backgroundColor: COLORS.primary}}
                    className="relative text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                    aria-label="Fale com um especialista"
                >
                    {isOpen ? <XIcon /> : <ChatBubbleIcon />}
                </button>
            </div>

            <div
                className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white/90 backdrop-blur-lg border border-slate-200 rounded-xl shadow-2xl z-50 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-800 text-lg">Fale com um Especialista</h3>
                        <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800">
                            <XIcon />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="sector" className="block text-sm font-medium text-slate-600">Qual setor deseja falar?</label>
                            <select id="sector" name="sector" value={formData.sector} onChange={handleInputChange} className="w-full mt-1 p-2 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}>
                                <option>Civil</option>
                                <option>Ambiental</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="service" className="block text-sm font-medium text-slate-600">Qual tipo de serviço?</label>
                            <input type="text" id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full mt-1 p-2 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
                        </div>
                         <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-600">Seu nome</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full mt-1 p-2 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-600">Seu e-mail</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full mt-1 p-2 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-600">Mensagem rápida</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full mt-1 p-2 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}></textarea>
                        </div>

                        <button type="submit" className="w-full px-4 py-2 text-base font-bold text-white uppercase tracking-wider rounded-xl hover:brightness-110 transition-all duration-300" style={{backgroundColor: COLORS.primary}}>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FloatingChat;