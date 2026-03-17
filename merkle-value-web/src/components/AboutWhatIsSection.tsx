import React from 'react';
import { motion } from 'framer-motion';

export const AboutWhatIsSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">What Is</h2>
                    <h3 className="text-5xl lg:text-7xl font-sans font-bold text-slate-800 leading-[1.1] tracking-tight mb-8">
                        <span className="font-serif italic text-merkle-purple font-normal">Merkle Value?</span>
                    </h3>
                    
                    <h4 className="font-sans text-2xl md:text-3xl font-bold text-slate-700 leading-tight mb-10 max-w-3xl mx-auto">
                        Merkle Value Trust gives Indian investors a passive and secure pathway to Bitcoin investing.
                    </h4>
                    
                    <p className="font-serif text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
                        The Merkle Value Fund is designed as a passive Bitcoin investment vehicle that provides disciplined exposure to Bitcoin for Indian investors. We build it for those who value structure over speculation and long-term confidence over short-term trading.
                    </p>
                    
                    <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl max-w-3xl mx-auto shadow-sm">
                        <p className="font-sans font-medium text-slate-700 leading-relaxed">
                            Our approach focuses on <span className="text-merkle-purple font-bold">transparency, compliance, and audited safeguards</span> so investors access Bitcoin efficiently and responsibly.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
