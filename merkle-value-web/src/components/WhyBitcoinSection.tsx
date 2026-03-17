import React from 'react';
import { motion } from 'framer-motion';

const traits = [
    {
        title: "Scarcity",
        desc: "Capped at 21 million algorithmically enforced coins. Outpaces Gold and Real Estate which can vary in stock based on natural or market factors.",
        delay: 0.1
    },
    {
        title: "Diversification",
        desc: "Historically uncorrelated with traditional equities and bonds, offering a true alternative for modern portfolio construction.",
        delay: 0.2
    },
    {
        title: "Decentralisation",
        desc: "Secured by thousands of network nodes worldwide, ensuring no central point of failure or centralized control over monetary policy.",
        delay: 0.3
    },
    {
        title: "Long-Term Performance",
        desc: "Designed to preserve and grow purchasing power over multi-year horizons, distinguishing it from fiat currencies subject to inflation.",
        delay: 0.4
    }
];

export const WhyBitcoinSection = () => {
    return (
        <section id="why" className="py-24 lg:py-40 bg-white relative border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-merkle-purple uppercase mb-6">
                        The Fundamental Case
                    </h2>
                    <h3 className="text-4xl lg:text-5xl font-sans font-bold text-slate-800 mb-8 leading-[1.2] tracking-tight">
                        Why Bitcoin Belongs in a <span className="font-serif italic font-normal text-merkle-purple">Modern Portfolio.</span>
                    </h3>
                    <p className="font-serif text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Bitcoin earns its place through fundamentals, not narratives. For Indian investors, the challenge is no longer belief. The real challenge is proper, structured access.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative max-w-5xl mx-auto">
                    {traits.map((trait, idx) => (
                        <motion.div 
                            key={trait.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: trait.delay }}
                            className="bg-off-white border border-slate-100 p-10 md:p-12 hover:shadow-lg transition-all rounded-sm flex flex-col justify-between group"
                        >
                            <div>
                                <div className="text-slate-200 font-sans font-bold text-4xl mb-6 group-hover:text-merkle-purple/20 transition-colors">
                                    0{idx + 1}
                                </div>
                                <h4 className="text-2xl font-bold font-sans text-slate-800 mb-4">{trait.title}</h4>
                            </div>
                            <p className="font-serif text-slate-600 text-[15px] leading-relaxed">
                                {trait.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
