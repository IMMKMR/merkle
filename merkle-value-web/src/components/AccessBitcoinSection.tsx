import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const AccessBitcoinSection = () => {
    return (
        <section className="py-24 bg-off-white relative">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <img src="images/assets/bitcoin_confidence_crystal.png" alt="Bitcoin Confidence" className="w-full max-w-md object-contain drop-shadow-2xl mix-blend-multiply opacity-90" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-xl font-sans tracking-widest text-slate-500 uppercase mb-2">You want to access</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-800 leading-tight mb-8 tracking-tight">
                        Bitcoin with <span className="font-serif italic font-bold text-merkle-purple">confidence.</span>
                    </h3>
                    <p className="font-serif text-lg text-slate-600 mb-8 leading-relaxed">
                        Merkle Value gives Indian investors a disciplined, regulated, long-term pathway to do exactly that. While the world debates Bitcoin, serious investors quietly prepare for the next era of global wealth. Merkle Value helps you understand the opportunity and invest the right way, with structure, transparency, and compliance built into every step.
                    </p>
                    <Link to="/about#how-it-works" className="inline-block px-8 py-4 bg-merkle-purple text-white font-sans text-sm font-bold uppercase tracking-widest hover:bg-merkle-purple-dark transition-all shadow-xl hover:-translate-y-1 rounded-sm">
                        See How It Works
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
