
import React from 'react';
import Section from './Section';
import { TEXTS, COLORS } from '../constants';
import AnimatedKeyword from './AnimatedKeyword';

const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-slate-50">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 uppercase mb-6">
            SOBRE A <span style={{color: COLORS.primary}}>ATAKAMA</span> ENGENHARIA
          </h2>
          <div className="w-20 h-1 mb-6" style={{backgroundColor: COLORS.primary}}></div>

          <p className="text-2xl text-slate-700 font-light mb-8">
            {TEXTS.about.animatedPhrase} <AnimatedKeyword /> {TEXTS.about.animatedPhraseSuffix}
          </p>

          <p className="text-slate-600 mb-8 text-lg">{TEXTS.about.paragraph1}</p>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2" style={{color: COLORS.primary}}>{TEXTS.about.mission.title}</h3>
              <p className="text-slate-600">{TEXTS.about.mission.text}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2" style={{color: COLORS.primary}}>{TEXTS.about.vision.title}</h3>
              <p className="text-slate-600">{TEXTS.about.vision.text}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2" style={{color: COLORS.primary}}>{TEXTS.about.values.title}</h3>
              <p className="text-slate-600">{TEXTS.about.values.text}</p>
            </div>
          </div>
        </div>
        <div className="relative h-96 md:h-full min-h-[400px]">
           <img 
              src="https://picsum.photos/seed/atakama-team/800/600" 
              alt="Equipe Atakama Engenharia" 
              className="w-full h-full object-cover rounded-xl shadow-lg border-2"
              style={{ borderColor: COLORS.primary }}
           />
        </div>
      </div>
    </Section>
  );
};

export default About;