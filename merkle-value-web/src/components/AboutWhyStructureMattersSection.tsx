import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export const AboutWhyStructureMattersSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-off-white relative border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-5xl font-sans font-bold text-slate-800 mb-6">
                        Why Structure <span className="font-serif italic text-merkle-purple font-normal">Matters</span>
                    </h2>
                    <p className="font-sans text-xl text-slate-600 max-w-2xl mx-auto">
                        Smart access matters more than direct ownership.
                    </p>
                </motion.div>
                
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Direct Ownership (Negative) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-100 border border-slate-200 p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <h3 className="font-sans font-bold text-xl text-slate-800">Direct crypto ownership requires you to:</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Handle complexity",
                                "Manage custody",
                                "Face operational uncertainty"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Structured Pathway (Positive) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-merkle-purple-dark border border-merkle-purple p-8 rounded-2xl shadow-xl transform md:-translate-y-4"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-merkle-purple flex items-center justify-center text-white">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-sans font-bold text-xl text-white">A structured pathway enables you to:</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Access Bitcoin simply",
                                "Rely on audited custody",
                                "Invest with compliance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-merkle-purple-light" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <p className="font-serif text-xl md:text-2xl text-slate-700 italic leading-relaxed">
                        "Merkle Value Trust provides a compliant investment vehicle so Indian investors participate in Bitcoin through a governed, <br />growth-focused strategy."
                    </p>
                </div>
            </div>
        </section>
    );
};
