import React from 'react';
import Section from './Section';
import { TEXTS, COLORS, GOOGLE_REVIEWS, GoogleIcon, StarIcon } from '../constants';

const StarRating = ({ rating, className = '' }: { rating: number, className?: string }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating} className={className} />
        ))}
    </div>
);

const GoogleReviews: React.FC = () => {
    return (
        <Section id="google-reviews" className="bg-black">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">{TEXTS.googleReviews.title}</h2>
                <div className="w-20 h-1 mx-auto mt-4" style={{backgroundColor: COLORS.primary}}></div>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{TEXTS.googleReviews.description}</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-700 pb-6 mb-6">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <GoogleIcon />
                        <div className="ml-4">
                            <h3 className="text-xl font-bold text-white">Atakama Engenharia</h3>
                            <p className="text-gray-400">Avaliações do Google</p>
                        </div>
                    </div>
                    <div className="text-center sm:text-right">
                        <div className="flex items-center justify-center sm:justify-end">
                            <span className="text-3xl font-bold text-white mr-2">{GOOGLE_REVIEWS.averageRating}</span>
                            <StarRating rating={GOOGLE_REVIEWS.averageRating} className="h-6 w-6" />
                        </div>
                        <p className="text-gray-400">{GOOGLE_REVIEWS.totalReviews} avaliações</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {GOOGLE_REVIEWS.reviews.map((review, index) => (
                        <div key={index} className="p-4 rounded-xl bg-gray-800">
                            <div className="flex items-start">
                                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover"/>
                                <div className="ml-4 flex-1">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-bold text-white">{review.name}</p>
                                            <p className="text-xs text-gray-500">{review.time}</p>
                                        </div>
                                        <StarRating rating={review.rating} />
                                    </div>
                                    <p className="text-gray-300 mt-2">"{review.text}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-8">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 text-base font-bold text-black uppercase tracking-wider bg-yellow-400 rounded-xl hover:bg-yellow-500 transition-colors duration-300">
                        Ver todas as avaliações
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default GoogleReviews;