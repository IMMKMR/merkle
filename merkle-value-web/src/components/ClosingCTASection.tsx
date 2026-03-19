import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bitcoin, Cpu, LineChart, Users } from 'lucide-react';

const signals = [
    { text: "A fixed and transparent monetary design", icon: <Bitcoin />, number: "01" },
    { text: "Predictable scarcity instead of unlimited supply", icon: <LineChart />, number: "02" },
    { text: "Adoption-driven value through growing global participation", icon: <Users />, number: "03" },
    { text: "A maturing digital ecosystem around the asset", icon: <Cpu />, number: "04" },
];

const principles = [
    { foundation: "Patience",        yields: "Opportunity" },
    { foundation: "Governance",       yields: "Innovation" },
    { foundation: "Real Discipline",  yields: "Digital Scarcity" },
];

export const ClosingCTASection = () => {
    return (
        <section className="bg-merkle-purple-dark text-white relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-merkle-purple/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-yellow-400/5 rounded-full blur-[100px]" />
            </div>

            {/* Top: Big editorial heading */}
            <div className="container mx-auto px-6 lg:px-12 relative pt-28 lg:pt-36 pb-20 border-b border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl"
                >
                    <p className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-white/30 mb-8">
                        A Clear Way Into
                    </p>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.0] tracking-tight mb-8 text-white">
                        The Next{' '}
                        <span className="font-serif italic font-normal text-yellow-400">
                            Store of Value
                        </span>
                    </h2>
                    <p className="font-serif text-xl text-white/50 max-w-2xl italic leading-relaxed">
                        "The future of wealth is moving from stories you hear to systems you can verify."
                    </p>
                </motion.div>
            </div>

            {/* Signals Infographic */}
            <div className="container mx-auto px-6 lg:px-12 relative py-20 border-b border-white/10">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-sans text-xs tracking-[0.3em] uppercase text-white/30 mb-16"
                >
                    Why Bitcoin
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                    {signals.map((signal, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/[0.03] hover:bg-white/[0.07] transition-colors p-10 flex flex-col gap-8 group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                                    {React.cloneElement(signal.icon, { className: "w-5 h-5 text-yellow-400", strokeWidth: 1.5 })}
                                </div>
                                <span className="font-sans font-black text-5xl text-white/[0.06] leading-none select-none">
                                    {signal.number}
                                </span>
                            </div>
                            <p className="font-sans font-semibold text-[15px] text-white/80 leading-snug">
                                {signal.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA with principles */}
            <div className="container mx-auto px-6 lg:px-12 relative py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Big statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl lg:text-5xl font-sans font-bold text-white leading-[1.1] tracking-tight mb-6">
                            The debate era is ending.{' '}
                            <span className="font-serif italic font-normal text-yellow-400">
                                <br />The ownership era is beginning.
                            </span>
                        </h3>
                        <p className="font-serif text-lg text-white/50 leading-relaxed italic mb-12">
                            Now is the time to approach Bitcoin with clarity and discipline.
                        </p>
                        <Link
                            to="/about#how-it-works"
                            className="inline-flex items-center gap-4 px-8 py-4 bg-yellow-400 text-slate-900 font-sans text-sm font-bold uppercase tracking-[0.15em] hover:bg-yellow-300 transition-all rounded-full group"
                        >
                            See How It Works
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Right: Principles infographic */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="flex flex-col gap-4"
                    >
                        <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-white/25 mb-6">Our Investment Philosophy</p>
                        {principles.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                className="flex items-center gap-0 group"
                            >
                                {/* Foundation */}
                                <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-4 flex flex-col gap-1 min-w-0">
                                    <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-white/25">Foundation</span>
                                    <span className="font-sans font-bold text-base text-white truncate">{p.foundation}</span>
                                </div>

                                {/* Arrow bridge */}
                                <div className="flex items-center flex-shrink-0 px-3">
                                    <div className="w-8 h-px bg-gradient-to-r from-white/10 to-yellow-400/60" />
                                    <ArrowRight className="w-3.5 h-3.5 text-yellow-400 opacity-70 -ml-0.5" />
                                </div>

                                {/* Outcome */}
                                <div className="flex-1 border border-yellow-400/20 bg-yellow-400/[0.05] rounded-xl px-6 py-4 flex flex-col gap-1 min-w-0">
                                    <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-yellow-400/50">Outcome</span>
                                    <span className="font-sans font-bold text-base text-yellow-400 truncate">{p.yields}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
