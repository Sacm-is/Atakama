import React from 'react';
import Section from './Section';
import { TEXTS, COLORS, WhatsappIcon } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contato" className="bg-slate-50 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2070&auto=format&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-slate-50/50"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{TEXTS.contact.title}</h2>
          <div className="w-20 h-1 mx-auto mt-4" style={{backgroundColor: COLORS.primary}}></div>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{TEXTS.contact.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <form className="space-y-6">
            <input type="text" placeholder="Nome" className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700 transition-all duration-300" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
            <input type="email" placeholder="E-mail" className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700 transition-all duration-300" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
            <input type="tel" placeholder="Telefone" className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700 transition-all duration-300" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}/>
            <textarea placeholder="Mensagem" rows={5} className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 text-slate-700 transition-all duration-300" style={{'--focus-ring-color': COLORS.primary} as React.CSSProperties} onFocus={(e) => e.target.style.borderColor = 'var(--focus-ring-color)'} onBlur={(e) => e.target.style.borderColor = ''}></textarea>
            <button type="submit" className="w-full px-8 py-4 text-lg font-bold text-white uppercase tracking-wider rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg" style={{backgroundColor: COLORS.primary, '--shadow-color': `${COLORS.primary}50`} as React.CSSProperties} onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 4px 14px 0 var(--shadow-color)`} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
              Enviar Mensagem
            </button>
             <button type="button" className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold text-white uppercase tracking-wider bg-green-500 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-green-500/30">
              <WhatsappIcon className="h-6 w-6 mr-3" />
              Conversar pelo WhatsApp
            </button>
          </form>
          
          <div className="space-y-8 flex flex-col">
              <div className="bg-white/50 border border-slate-200 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4" style={{color: COLORS.primary}}>Informações de Contato</h3>
                <p className="text-slate-700 mb-2"><strong>Telefone/WhatsApp:</strong> (XX) XXXX-XXXX</p>
                <p className="text-slate-700 mb-2"><strong>E-mail:</strong> contato@atakama.com.br</p>
                <p className="text-slate-700"><strong>Endereço:</strong> Rua da Engenharia, 123 - Cidade, Estado</p>
              </div>
              <div className="flex-grow h-80 w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.145881453261!2d-46.656534584406!3d-23.563099367546654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x206c45ba36a7b3b!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886568285!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;