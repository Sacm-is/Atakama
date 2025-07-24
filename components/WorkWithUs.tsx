
import React, { useState } from 'react';
import Section from './Section';
import { TEXTS, COLORS, EMPLOYEE_TESTIMONIALS, UploadIcon, QuoteIcon } from '../constants';

const WorkWithUs: React.FC = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Currículo enviado com sucesso! (Esta é uma simulação)');
        // Here you would typically handle the form submission, e.g., via an API call.
    };


    return (
        <Section id="trabalhe-conosco" className="bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{TEXTS.workWithUs.title}</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{backgroundColor: COLORS.primary}}></div>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{TEXTS.workWithUs.description}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
                {/* Form Section */}
                <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200">
                    <h3 className="text-3xl font-bold text-slate-800 mb-6">{TEXTS.workWithUs.formTitle}</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="text" placeholder="Nome Completo" required className="w-full p-4 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
                        <input type="email" placeholder="E-mail" required className="w-full p-4 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
                        <input type="text" placeholder="Área de Interesse (Ex: Civil, Ambiental)" required className="w-full p-4 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
                        
                        <div>
                            <label htmlFor="resume-upload" className="w-full flex items-center justify-center p-4 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-200 transition-colors" style={{'--hover-border-color': COLORS.primary} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--hover-border-color)'} onMouseOut={(e) => e.currentTarget.style.borderColor = ''}>
                                <UploadIcon />
                                <span className="text-slate-500">{fileName || 'Anexar Currículo (.pdf, .docx)'}</span>
                            </label>
                            <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                        </div>

                        <textarea placeholder="Mensagem (Opcional)" rows={4} className="w-full p-4 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}></textarea>
                        
                        <button type="submit" className="w-full px-8 py-4 text-lg font-bold text-white uppercase tracking-wider rounded-xl hover:brightness-110 transition-all duration-300" style={{backgroundColor: COLORS.primary}}>
                            Enviar Candidatura
                        </button>
                    </form>
                </div>

                {/* Employee Testimonials Section */}
                <div className="space-y-8">
                     <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center lg:text-left">{TEXTS.workWithUs.teamTitle}</h3>
                    {EMPLOYEE_TESTIMONIALS.map((testimonial, index) => (
                         <div key={index} className="bg-white/50 p-6 rounded-xl shadow-lg flex items-start space-x-4 relative overflow-hidden border border-slate-200">
                            <div className="absolute -top-2 -right-2 text-slate-100/80 z-0">
                                <QuoteIcon />
                            </div>
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 flex-shrink-0 z-10" style={{borderColor: COLORS.primary}}/>
                            <div className="flex-1 z-10">
                                <p className="text-slate-600 italic">"{testimonial.text}"</p>
                                <p className="font-bold text-slate-700 text-right mt-3">- {testimonial.name}</p>
                                <p className="text-sm text-right" style={{color: COLORS.primary}}>{testimonial.role}</p>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default WorkWithUs;