import React, { useState, useCallback } from 'react';
import Section from './Section';
import { TEXTS, TESTIMONIALS, COLORS, QuoteIcon, StarIcon } from '../constants';

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
        ))}
    </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => {
    return (
        <div className="flex-shrink-0 w-full bg-gray-900 p-8 rounded-xl shadow-xl relative h-full flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-gray-800">
                <QuoteIcon />
            </div>
            <div>
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-300 mt-4 text-lg italic">"{testimonial.text}"</p>
            </div>
            <div className="flex items-center mt-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400" />
                <div className="ml-4">
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.company}, {testimonial.city}</p>
                </div>
            </div>
        </div>
    );
};


const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : TESTIMONIALS.length - 1));
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex < TESTIMONIALS.length - 1 ? prevIndex + 1 : 0));
    }, []);

    return (
        <Section id="depoimentos" className="bg-black">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">{TEXTS.testimonials.title}</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: COLORS.primary }}></div>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{TEXTS.testimonials.description}</p>
            </div>

            <div className="relative">
                <div className="overflow-hidden w-full max-w-4xl mx-auto">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-2">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handlePrev} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleNext} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </Section>
    );
};

export default Testimonials;
