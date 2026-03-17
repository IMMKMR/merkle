import React from 'react';
import { motion } from 'framer-motion';

export const InsightsMinimumInvestmentSection = () => {
    return (
        <section className="bg-off-white py-24 lg:py-32 relative border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl lg:text-5xl font-sans font-bold text-slate-800 mb-8">
                            <span className="font-serif italic text-merkle-purple font-normal">Minimum Investment</span>
                        </h2>
                        
                        <div className="font-serif text-lg text-slate-600 space-y-6 leading-relaxed">
                            <p>
                                The minimum initial commitment per investor is <span className="font-bold text-slate-800">USD 150,000 (or such other amount as may be prescribed under applicable IFSCA regulations from time to time)</span>, subject to regulatory exemptions where applicable.
                            </p>
                            <p>
                                All investors are subject to the Fund Manager's KYC, AML, onboarding, and suitability assessment procedures.
                            </p>
                            <p className="font-sans font-bold text-xs tracking-widest uppercase text-merkle-purple p-4 bg-merkle-purple/5 border border-merkle-purple/10 inline-block rounded-md mt-4">
                                The fund is not available for retail investors.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Area */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white"
                    >
                        <div className="absolute inset-0 bg-merkle-purple/10 mix-blend-overlay z-10" />
                        <img 
                            src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                            alt="Bitcoin concept" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
