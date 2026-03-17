import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Building2, Landmark, ShieldCheck } from 'lucide-react';

const eligibilityList = [
    { text: "Accredited investors as defined under applicable IFSCA regulations", icon: <UserCheck /> },
    { text: "Corporate bodies, LLPs, trusts, family offices, and other eligible legal entities", icon: <Building2 /> },
    { text: "Institutional investors such as banks, insurance companies, pension funds, sovereign wealth funds, multilateral agencies, and regulated financial institutions", icon: <Landmark /> },
    { text: "High Net Worth Individuals and other sophisticated investors meeting the prescribed eligibility requirements", icon: <ShieldCheck /> }
];

export const InsightsEligibilitySection = () => {
    return (
        <section className="py-24 lg:py-32 bg-merkle-purple-dark text-white relative">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
                
                {/* Left Side: Title */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 lg:max-w-md"
                >
                    <div className="inline-block px-4 py-1.5 bg-yellow-400 text-slate-900 font-sans font-bold text-xs tracking-widest uppercase rounded-full mb-8">
                        Who May Participate
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-sans font-bold leading-[1.1] tracking-tight text-white mb-6">
                        <span className="font-serif italic font-normal">Investor</span><br />
                        Eligibility Criteria
                    </h2>
                    <div className="space-y-5 mt-6">
                        <p className="font-serif text-base text-white/60 leading-relaxed">
                            The Fund is notified as a <span className="font-bold text-white/90">Category III Alternative Investment Fund (Non-Retail Scheme)</span> under the International Financial Services Centres Authority (Fund Management) Regulations, 2022, as amended from time to time.
                        </p>
                        <p className="font-serif text-base text-white/60 leading-relaxed">
                            Units of the Fund are offered strictly on a <span className="font-bold text-white/90">private placement</span> basis and are available only to <span className="font-bold text-white/90">Non-Retail Investors</span>, including:
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Cards */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
                >
                    {eligibilityList.map((item, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                                    {React.cloneElement(item.icon, { className: "w-5 h-5 text-yellow-300", strokeWidth: 1.5 })}
                                </div>
                                <span className="font-sans font-black text-5xl text-white/8 leading-none select-none">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <p className="font-sans font-medium text-[15px] leading-relaxed text-white/90">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
