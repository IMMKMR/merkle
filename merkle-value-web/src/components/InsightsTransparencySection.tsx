import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileSearch, Building2, LineChart } from 'lucide-react';

const commitments = [
    { title: "Full disclosure of market risks", icon: <LineChart />, description: "Investors receive complete, factual disclosure of applicable market risks." },
    { title: "Transparent fee structures", icon: <FileSearch />, description: "All fund costs and fee arrangements are publicly documented and disclosed." },
    { title: "Independent audits and safeguards", icon: <ShieldCheck />, description: "Fund operations and holdings are independently audited and verified." },
    { title: "Strong institutional governance", icon: <Building2 />, description: "Operations governed by institutional-grade frameworks and regulatory standards." },
];

export const InsightsTransparencySection = () => {
    return (
        <section className="py-24 bg-slate-50 relative border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-merkle-purple/50 mb-5">
                            Our Commitment
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-sans font-bold text-slate-900 leading-[1.1]">
                            Transparency and{' '}
                            <span className="font-serif italic font-normal text-merkle-purple">Reporting</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-sans text-lg font-medium text-slate-500 lg:text-right lg:max-w-xs"
                    >
                        Clear commitments to every investor.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {commitments.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.1 }}
                            className="group bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-6 hover:border-merkle-purple/20 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-merkle-purple/5 border border-merkle-purple/10 flex items-center justify-center text-merkle-purple group-hover:bg-merkle-purple group-hover:text-white transition-all duration-300">
                                {React.cloneElement(item.icon, { className: 'w-5 h-5', strokeWidth: 1.5 })}
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-slate-900 text-[15px] leading-snug mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-serif text-slate-500 text-[13px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
