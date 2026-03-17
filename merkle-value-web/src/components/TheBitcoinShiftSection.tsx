import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const TheBitcoinShiftSection = () => {
    return (
        <section id="shift" className="py-24 lg:py-40 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col mb-20 text-center items-center">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-merkle-purple uppercase mb-6">The Bitcoin Shift</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-800 leading-[1.1] tracking-tight max-w-4xl">
                        Bitcoin has moved beyond hype.<br />
                        <span className="font-serif italic text-merkle-purple">From experiment to global asset class.</span>
                    </h3>
                </div>

                {/* Infographic Container */}
                <div className="max-w-5xl mx-auto relative mt-20">
                    
                    {/* Center Line for Desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 -translate-x-1/2 z-0" />

                    <div className="space-y-12 md:space-y-0 relative z-10">
                        {/* Step 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center justify-between"
                        >
                            <div className="w-full md:w-5/12 text-center md:text-right md:pr-12 mb-6 md:mb-0">
                                <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl relative">
                                    <span className="absolute -top-3 right-6 bg-slate-200 text-slate-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Then</span>
                                    <h4 className="font-serif text-2xl text-slate-500 italic">Fringe narrative</h4>
                                </div>
                            </div>
                            <div className="flex justify-center w-auto md:w-2/12 my-4 md:my-0">
                                <div className="w-12 h-12 bg-white border-2 border-merkle-purple/20 rounded-full flex items-center justify-center shadow-md z-10 text-merkle-purple">
                                    <ArrowDown className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="w-full md:w-5/12 md:pl-12">
                                <div className="bg-merkle-purple/5 border border-merkle-purple/20 p-8 rounded-xl shrink-0 custom-shadow hover:shadow-lg transition-all relative">
                                    <span className="absolute -top-3 left-6 bg-merkle-purple text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">Now</span>
                                    <h4 className="font-sans font-bold text-2xl text-merkle-purple">Institutional allocation</h4>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col md:flex-row items-center justify-between md:mt-8"
                        >
                            <div className="w-full md:w-5/12 text-center md:text-right md:pr-12 mb-6 md:mb-0">
                                <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl relative">
                                    <span className="absolute -top-3 right-6 bg-slate-200 text-slate-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Then</span>
                                    <h4 className="font-serif text-2xl text-slate-500 italic">Speculation</h4>
                                </div>
                            </div>
                            <div className="flex justify-center w-auto md:w-2/12 my-4 md:my-0">
                                <div className="w-12 h-12 bg-white border-2 border-merkle-purple/20 rounded-full flex items-center justify-center shadow-md z-10 text-merkle-purple">
                                    <ArrowDown className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="w-full md:w-5/12 md:pl-12">
                                <div className="bg-merkle-purple/5 border border-merkle-purple/20 p-8 rounded-xl shrink-0 custom-shadow hover:shadow-lg transition-all relative">
                                    <span className="absolute -top-3 left-6 bg-merkle-purple text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">Now</span>
                                    <h4 className="font-sans font-bold text-2xl text-merkle-purple">Regulated investment vehicle</h4>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col md:flex-row items-center justify-between md:mt-8"
                        >
                            <div className="w-full md:w-5/12 text-center md:text-right md:pr-12 mb-6 md:mb-0">
                                <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl relative">
                                    <span className="absolute -top-3 right-6 bg-slate-200 text-slate-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Then</span>
                                    <h4 className="font-serif text-2xl text-slate-500 italic">Individual holding</h4>
                                </div>
                            </div>
                            <div className="flex justify-center w-auto md:w-2/12 my-4 md:my-0">
                                <div className="w-12 h-12 bg-white border-2 border-merkle-purple/20 rounded-full flex items-center justify-center shadow-md z-10 text-merkle-purple">
                                    <ArrowDown className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="w-full md:w-5/12 md:pl-12">
                                <div className="bg-merkle-purple/5 border border-merkle-purple/20 p-8 rounded-xl shrink-0 custom-shadow hover:shadow-lg transition-all relative">
                                    <span className="absolute -top-3 left-6 bg-merkle-purple text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">Now</span>
                                    <h4 className="font-sans font-bold text-2xl text-merkle-purple">ETF-led adoption globally</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                <div className="mt-24 text-center">
                    <p className="font-serif text-slate-600 text-2xl leading-relaxed italic max-w-3xl mx-auto">
                        "Every era has its store of value. Gold defined the past. <span className="font-sans font-bold text-slate-800 not-italic">Bitcoin defines what comes next.</span>"
                    </p>
                </div>

            </div>
        </section>
    );
};
