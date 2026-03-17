import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Scale, Search, FileText, ShieldCheck } from 'lucide-react';

const governancePoints = [
    { text: "Professional trustee oversight", icon: <Scale />, detail: "Independent trustee ensuring fund operations follow regulatory mandates" },
    { text: "Institutional-grade audited custody", icon: <Lock />, detail: "Bitcoin holdings secured and verified by audited custodians" },
    { text: "Clear regulatory safeguards", icon: <ShieldCheck />, detail: "All operations governed within IFSCA-approved frameworks" },
    { text: "Independent risk & compliance processes", icon: <Search />, detail: "Ongoing monitoring by independent risk and compliance teams" },
    { text: "Transparent fee structures", icon: <FileText />, detail: "All costs are disclosed, documented, and investor-accessible" },
];

export const AboutGovernanceSection = () => {
    return (
        <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header row: heading left, description right */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-merkle-purple/40 mb-5">
                            Institutional Structure
                        </p>
                        <h2 className="text-5xl lg:text-6xl font-sans font-bold text-slate-900 leading-[1.05] tracking-tight">
                            Governance and{' '}
                            <span className="font-serif italic font-normal text-merkle-purple">Oversight</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-serif text-lg text-slate-500 leading-relaxed lg:max-w-sm lg:text-right"
                    >
                        Bitcoin's global opportunity becomes more investible when it is guided by clear governance.
                    </motion.p>
                </div>

                {/* Full-width pull quote */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="flex items-center gap-6 bg-merkle-purple-dark rounded-2xl px-10 py-7 mb-14"
                >
                    <div className="w-1 h-12 bg-yellow-400 rounded-full flex-shrink-0" />
                    <p className="font-sans font-bold text-lg text-white leading-snug">
                        Merkle Value supports Bitcoin investing with institutional discipline and dependable safeguards.
                    </p>
                </motion.div>

                {/* Infographic grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {governancePoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.08 }}
                            className="group flex flex-col gap-6 border border-slate-200 rounded-2xl p-7 bg-white hover:border-merkle-purple/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Ghost number */}
                            <span className="absolute -top-3 -right-1 font-sans font-black text-7xl text-slate-100 select-none leading-none group-hover:text-merkle-purple/10 transition-colors">
                                {String(idx + 1).padStart(2, '0')}
                            </span>

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl border border-merkle-purple/15 bg-merkle-purple/5 flex items-center justify-center text-merkle-purple group-hover:bg-merkle-purple group-hover:text-white group-hover:border-merkle-purple transition-all duration-300 z-10">
                                {React.cloneElement(point.icon, { className: "w-5 h-5", strokeWidth: 1.5 })}
                            </div>

                            {/* Text */}
                            <div className="z-10">
                                <h4 className="font-sans font-bold text-slate-900 text-[14px] leading-snug mb-3">
                                    {point.text}
                                </h4>
                                <p className="font-serif text-slate-500 text-[13px] leading-relaxed">
                                    {point.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
