import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Network, CheckCircle2, Lock } from 'lucide-react';

export const IntroducingMerkleValueSection = () => {
    return (
        <section className="py-24 lg:py-40 bg-off-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Content */}
                    <div className="flex flex-col justify-center">
                        <motion.h2 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-sm font-bold tracking-[0.25em] text-merkle-purple/50 uppercase mb-6"
                        >
                            Where We Come In
                        </motion.h2>
                        <motion.h3 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-800 mb-8 leading-[1.1] tracking-tight"
                        >
                            Introducing <span className="text-merkle-purple font-serif italic">Merkle Value</span>
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 font-serif text-lg text-slate-600 leading-relaxed"
                        >
                            <p>
                                Merkle Value Trust exists to simplify Bitcoin investing for Indian investors. While many people struggle to access Bitcoin properly, we build a secure and compliant pathway that removes the usual operational fears.
                            </p>
                            <p>
                                We create a governed investment vehicle that focuses on transparency, disciplined oversight, and audited custody safeguards, all within a long-term, passive strategy.
                            </p>
                            <p>
                                You no longer struggle with complexity, you no longer navigate confusing regulations alone, and you no longer worry about custody or operational risk. Merkle Value actively builds the structure you can rely on, so you can access Bitcoin confidently and invest the right way.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-12 flex gap-4"
                        >
                            <Link to="/how-it-works" className="px-8 py-4 bg-merkle-purple text-white font-sans text-sm font-bold uppercase tracking-widest hover:bg-merkle-purple-dark transition-all shadow-md rounded-sm">
                                See How It Works
                            </Link>
                            <Link to="/about" className="px-8 py-4 bg-transparent border border-merkle-purple/30 text-merkle-purple font-sans text-sm font-bold uppercase tracking-widest hover:bg-merkle-purple/5 transition-colors rounded-sm">
                                About Us
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Visual Features */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="w-16 h-16 rounded-full bg-merkle-purple/5 flex items-center justify-center text-merkle-purple">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h4 className="font-sans font-bold text-slate-800">Compliant Pathway</h4>
                            <p className="font-serif text-sm text-slate-500">Regulated structure protecting Indian investors.</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform mt-0 sm:mt-12">
                            <div className="w-16 h-16 rounded-full bg-merkle-purple/5 flex items-center justify-center text-merkle-purple">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h4 className="font-sans font-bold text-slate-800">Audited Custody</h4>
                            <p className="font-serif text-sm text-slate-500">Institutional grade security safeguards.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="w-16 h-16 rounded-full bg-merkle-purple/5 flex items-center justify-center text-merkle-purple">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h4 className="font-sans font-bold text-slate-800">Disciplined Oversight</h4>
                            <p className="font-serif text-sm text-slate-500">Long-term, passive strategic approach.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform mt-0 sm:mt-12">
                            <div className="w-16 h-16 rounded-full bg-merkle-purple/5 flex items-center justify-center text-merkle-purple">
                                <Network className="w-8 h-8" />
                            </div>
                            <h4 className="font-sans font-bold text-slate-800">Simplified Access</h4>
                            <p className="font-serif text-sm text-slate-500">Removing operational complexities and fears.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
