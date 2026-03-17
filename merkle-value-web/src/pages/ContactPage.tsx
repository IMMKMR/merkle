import React from 'react';
import { motion } from 'framer-motion';

export const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-off-white min-h-[70vh]"
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-sm font-bold tracking-[0.25em] text-merkle-purple/50 uppercase mb-4">Contact Us</h1>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-slate-800 leading-tight mb-6">
                        Start the Conversation
                    </h2>
                    <p className="font-serif text-xl text-slate-600">
                        Reach out to our team to learn more about the Merkle Value Trust.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-merkle-purple/10">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">First Name</label>
                                <input type="text" className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-merkle-purple transition-colors bg-transparent" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Last Name</label>
                                <input type="text" className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-merkle-purple transition-colors bg-transparent" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Email Address</label>
                            <input type="email" className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-merkle-purple transition-colors bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Message</label>
                            <textarea rows={4} className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-merkle-purple transition-colors bg-transparent resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-merkle-purple text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-merkle-purple-dark transition-colors shadow-lg mt-4">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};
