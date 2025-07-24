import React from 'react';
import Section from './Section';
import { TEXTS, COLORS, TIMELINE_DATA } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TimelineItem: React.FC<{ item: typeof TIMELINE_DATA[0]; index: number }> = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  const contentRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-14 h-14 rounded-full">
        <div className="h-full w-full text-yellow-400 flex items-center justify-center">
            {item.icon}
        </div>
      </div>
      <div ref={contentRef} className={`order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4 fade-in-up ${isLeft ? 'text-right' : 'text-left'}`}>
        <h3 className="mb-2 font-bold text-yellow-400 text-xl">{item.year}</h3>
        <p className="font-semibold text-white leading-snug tracking-wide mb-2">{item.title}</p>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>
    </div>
  );
};


const Timeline: React.FC = () => {
    return (
        <Section id="timeline" className="bg-black">
             <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">{TEXTS.timeline.title}</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: COLORS.primary }}></div>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{TEXTS.timeline.description}</p>
            </div>
            <div className="relative container mx-auto px-6 flex flex-col">
                <div className="absolute z-0 w-1 h-full bg-gray-800 shadow-md inset-0 top-0 left-1/2 transform -translate-x-1/2"></div>
                {TIMELINE_DATA.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>
        </Section>
    );
}

export default Timeline;