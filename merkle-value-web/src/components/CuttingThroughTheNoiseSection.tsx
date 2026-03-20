import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const CuttingThroughTheNoiseSection = () => {
    return (
        <section className="bg-off-white relative border-t border-slate-200">
            {/* Top Text Section */}
            <div className="py-24 lg:py-32 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xs font-bold tracking-[0.2em] text-merkle-purple uppercase mb-6">Cutting Through</h2>
                    <h3 className="text-5xl lg:text-6xl font-sans font-bold text-slate-800 leading-tight mb-8">
                        <span className="font-serif italic text-merkle-purple">The Noise</span>
                    </h3>

                    <p className="font-sans text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-tight">
                        Everyone talks about Bitcoin.<br className="hidden md:block" /> Few invest in it right.
                    </p>

                    <p className="font-serif text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Headlines create confusion. Hype creates hesitation. Regulatory uncertainty keeps disciplined Indian investors on the sidelines. Merkle Value cuts through that clutter. We simplify the process and provide a clear, regulated structure that protects Indian investors and aligns with<br /> global best practices.
                    </p>
                </motion.div>
            </div>

            {/* What holds Indian investors back - Corporate Minimalist Light Section */}
            <div className="bg-slate-50 py-24 lg:py-32 px-6 lg:px-12 relative border-t border-slate-200">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-6xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">What holds Indian investors back</h4>
                        <h3 className="text-3xl lg:text-4xl font-sans font-bold text-slate-800 mb-2">
                            — and <span className="font-serif italic text-merkle-purple">What We Clarify:</span>
                        </h3>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-6">
                        {[
                            { myth: "Bitcoin is only speculation", reality: "Bitcoin is verifiable digital scarcity." },
                            { myth: "Bitcoin isn't legal", reality: "Regulated fund access makes it legitimate." },
                            { myth: "Bitcoin has no real value", reality: "Scarcity drives value — just like gold." },
                            { myth: "Bitcoin is too complex", reality: "Exposure can be simple and structured." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {/* Myth Side */}
                                <div className="flex-1 p-8 md:p-10 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 relative flex items-center">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <X className="w-24 h-24 text-slate-400" />
                                    </div>
                                    <div className="relative z-10 w-full">
                                        <span className="font-sans font-bold tracking-widest text-[10px] uppercase text-slate-400 mb-4 inline-block">The Myth</span>
                                        <p className="font-serif text-lg leading-relaxed text-slate-500 italic">"{item.myth}"</p>
                                    </div>
                                </div>
                                {/* Reality Side */}
                                <div className="flex-1 p-8 md:p-10 bg-white relative flex items-center">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Check className="w-24 h-24 text-merkle-purple" />
                                    </div>
                                    <div className="relative z-10 w-full">
                                        <span className="font-sans font-bold tracking-widest text-[10px] uppercase text-merkle-purple mb-4 inline-block">The Reality</span>
                                        <p className="font-sans text-xl font-bold text-slate-800 leading-relaxed">{item.reality}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="font-serif text-2xl text-slate-600">
                            Noise Creates Hesitation. <span className="font-bold text-slate-800 text-3xl block mt-2">Clarity Unlocks Action.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
