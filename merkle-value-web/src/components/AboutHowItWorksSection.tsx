import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: "01", text: "Subscribe to Merkle Value Trust" },
    { num: "02", text: "Capital converts into governed Bitcoin exposure" },
    { num: "03", text: "Bitcoin stays secured with audited custodians" },
    { num: "04", text: "Investments operate within a passive long-term strategy" }
];

export const AboutHowItWorksSection = () => {
    return (
        <section id="how-it-works" className="bg-white py-24 lg:py-32 relative border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-sans font-bold text-slate-800 mb-6 leading-tight">
                        <span className="font-serif italic text-merkle-purple font-normal">How It Works</span>
                    </h2>
                    <p className="font-sans text-xl text-slate-600 font-medium">
                        We make the investment journey simple and transparent.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 lg:gap-8 max-w-6xl mx-auto mb-16">
                    {steps.map((step, idx) => (
                        <React.Fragment key={idx}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="flex flex-col items-center max-w-[200px] text-center"
                            >
                                <span className="font-sans font-bold text-5xl md:text-6xl text-merkle-purple mb-6 select-none opacity-80">{step.num}</span>
                                <p className="font-sans text-sm font-bold text-slate-800 leading-relaxed uppercase tracking-wider">{step.text}</p>
                            </motion.div>

                            {/* Arrow for large screens */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:flex items-center justify-center h-[120px] text-slate-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            )}

                            {/* Arrow for small screens */}
                            {idx < steps.length - 1 && (
                                <div className="flex lg:hidden items-center justify-center w-full py-4 text-slate-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto border-t border-slate-200 pt-10">
                    <p className="font-sans font-bold text-slate-800 text-lg uppercase tracking-wider">
                        Every step keeps the process clear, compliant,<br /> and investor-friendly.
                    </p>
                </div>
            </div>
        </section>
    );
};
