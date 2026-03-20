import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const team = [
    {
        name: "Bipin Chhaganbhai Patel",
        role: "Chief Executive Officer",
        image: "images/team/bipin-patel.jpg",
        bio: "A seasoned risk and market infrastructure professional with over three decades of experience across global financial markets. He holds a Master's degree in Theoretical Physics from the University of Pennsylvania, and has built his career at the core of the global financial system, holding senior leadership and risk roles across exchanges, central clearing houses, and global investment banks, including Hong Kong Exchanges and Clearing (HKEX).",
        fullBio: [
            "Bipin Patel is the Chief Executive Officer of Merkle Value and a seasoned risk and market infrastructure professional with over three decades of experience across global financial markets. He holds a Master's degree in Theoretical Physics from the University of Pennsylvania, and has built his career at the core of the global financial system, holding senior leadership and risk roles across exchanges, central clearing houses, and global investment banks, including Hong Kong Exchanges and Clearing (HKEX). His work has consistently focused on market integrity, risk management, and the design of resilient financial infrastructure.",
            "More than a decade ago, Bipin began closely studying digital assets, initially through a lens shaped by skepticism and risk awareness. Across multiple market cycles, regulatory shifts, and technological evolution, that skepticism matured into conviction, driven not by price movements, but by Bitcoin's structural scarcity, decentralised architecture, and its emergence as a new form of monetary infrastructure. His experience in the digital asset space spans cryptocurrency asset management, quantitative trading strategies, and institutional-grade digital asset operations, giving him a rare, end-to-end perspective on the asset class.",
            "Merkle Value was founded at the intersection of these two worlds: traditional market discipline and digital asset innovation. Under Bipin's leadership, the fund is built to offer Indian investors a compliant, transparent, and long-term gateway to Bitcoin — designed not for speculation, but for stewardship. He is currently authoring a book that reflects his personal journey through digital assets and why they are shaping one of the most consequential financial transitions of this era."
        ],
        delay: 0.1
    },
    {
        name: "Amy Shuai",
        role: "Group Chief Financial Officer",
        image: "images/team/amy-shuai.png",
        bio: "A Chartered Accountant with over twenty-five years' experience across global financial markets, digital assets, and high-growth ventures. She holds a First Class MPhys from the University of Oxford, is a Fellow of the ICAEW and earned the Wilmott Certificate in Quantitative Finance with distinction. Her expertise spans valuation and model governance at leading investment banks.",
        fullBio: [
            "Amy Shuai is Group Chief Financial Officer of Merkle Value and a Chartered Accountant with over twenty-five years' experience across global financial markets, digital assets, and high-growth ventures. She holds a First Class MPhys (Master of Physics) from the University of Oxford, is a Fellow of the Institute of Chartered Accountants in England and Wales (ICAEW) and earned the Wilmott Certificate in Quantitative Finance with distinction.",
            "Amy has built her career at the intersection of finance, risk, and operational control, holding senior roles at leading investment banks including UBS, Deutsche Bank, Daiwa Capital Markets, and Royal Bank of Scotland. Her expertise spans valuation and model governance, derivatives control frameworks, reserving methodologies, and financial control. In the digital asset sector, Amy has served as CFO across Bitcoin mining, data-centre infrastructure, and quantitative crypto asset management businesses. Her responsibilities have included group consolidations, business restructurings, treasury operations, cash-flow and governance frameworks, audit oversight, and the design of scalable financial infrastructure across multi-jurisdictional groups.",
            "Amy brings together institutional financial discipline with entrepreneurial execution and deep digital asset experience, ensuring Merkle Value's financial architecture is robust, transparent, and built for long-term scale."
        ],
        delay: 0.2
    },
    {
        name: "Ramandeep Singh",
        role: "Independent Investment Advisor",
        image: "images/team/ramandeep-singh.jpg",
        bio: "Over twenty years of experience across global derivatives markets, quantitative trading, and automated options strategies. He holds an MBA in Finance from McGill University and has completed Level II of the CFA Program. He began his career in Tokyo as a proprietary trader specialising in index options market making and volatility trading.",
        fullBio: [
            "Ramandeep Singh is an Independent Investment Advisor with over twenty years of experience across global derivatives markets, quantitative trading, and automated options strategies. He holds a Master of Business Administration in Finance from McGill University, Canada, and has completed Level II of the CFA Program. He also holds a Diploma in Electrical Engineering, reflecting a strong technical and analytical foundation that underpins his quantitative market approach.",
            "Ramandeep began his career in financial markets in Tokyo as a proprietary trader specialising in index options market making and volatility trading. His experience spans Nikkei, Kospi, Hang Seng, Taiwan Index, and JGB futures options markets, where he developed deep expertise in derivatives pricing, volatility dynamics, and structured trading strategies.",
            "As Founder of Babeka Group Ltd and Options Edge Pvt Ltd, Ramandeep has specialised in proprietary trading software and automated high-frequency options strategies across Asian index and Bitcoin options markets. He combines quantitative rigour, technology-driven execution, and cross-market derivatives expertise to support disciplined strategy design and risk management across traditional and digital asset markets."
        ],
        delay: 0.3
    }
];

type TeamMember = typeof team[0];

const TeamModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

                {/* Modal Card */}
                <motion.div
                    initial={{ opacity: 0, y: 32, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 32, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Image Panel */}
                    <div className="relative w-full md:w-[280px] flex-shrink-0 h-64 md:h-auto overflow-hidden bg-slate-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 md:bg-gradient-to-r md:from-slate-900/20 md:via-transparent md:to-transparent" />
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Name overlay on mobile */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20 md:hidden">
                            <p className="font-sans font-bold text-white text-xl leading-tight">{member.name}</p>
                            <p className="font-sans text-merkle-purple-light uppercase tracking-[0.15em] text-xs font-bold mt-1">{member.role}</p>
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="flex items-start justify-between p-6 md:p-8 pb-4 border-b border-slate-100">
                            <div className="hidden md:block">
                                <h3 className="font-sans font-bold text-slate-800 text-2xl leading-tight">{member.name}</h3>
                                <p className="font-sans text-merkle-purple uppercase tracking-[0.15em] text-xs font-bold mt-1">{member.role}</p>
                            </div>
                            <div className="md:ml-auto ml-auto">
                                <button
                                    onClick={onClose}
                                    aria-label="Close"
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Accent bar */}
                        <div className="mx-6 md:mx-8 mt-5">
                            <div className="w-10 h-0.5 bg-gradient-to-r from-merkle-purple to-merkle-purple-light rounded-full" />
                        </div>

                        {/* Bio paragraphs — scrollable */}
                        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-5 space-y-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                            {member.fullBio.map((para, i) => (
                                <p key={i} className="font-serif text-sm md:text-base text-slate-600 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export const TeamSection = () => {
    const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

    return (
        <>
            <section id="team" className="py-24 lg:py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold tracking-[0.25em] text-merkle-purple/50 uppercase mb-6">
                            The Team Behind Merkle Value
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-sans font-bold text-slate-800 mb-6 leading-[1.1] tracking-tight">
                            Institutional experience guiding digital innovation.
                        </h3>
                        <p className="font-serif text-lg text-slate-600 leading-relaxed">
                            The Merkle Value team brings together decades of expertise across traditional finance, risk management, and digital assets. This blend of governance, research, and operations creates a reliable gateway to Bitcoin investing for India.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16">
                        {team.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: member.delay }}
                                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full lg:w-1/3">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-slate-100 shadow-xl group">
                                        <div className="absolute inset-0 bg-merkle-purple/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3 flex flex-col justify-center">
                                    <h4 className="text-3xl md:text-4xl font-sans font-bold text-slate-800 mb-2">
                                        {member.name}
                                    </h4>
                                    <h5 className="font-sans text-merkle-purple uppercase tracking-[0.15em] text-sm font-bold mb-8">
                                        {member.role}
                                    </h5>
                                    <div className="w-12 h-1 bg-gradient-to-r from-merkle-purple to-merkle-purple-light mb-8 rounded-full" />
                                    <p className="font-serif text-lg text-slate-600 leading-relaxed max-w-2xl">
                                        {member.bio}
                                    </p>
                                    {/* Read More Button */}
                                    <button
                                        onClick={() => setActiveMember(member)}
                                        className="mt-8 self-start group flex items-center gap-2 text-merkle-purple font-sans font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-300"
                                    >
                                        <span className="border-b border-merkle-purple/30 pb-0.5 group-hover:border-merkle-purple transition-colors">
                                            Read More
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="translate-y-px group-hover:translate-x-1 transition-transform duration-300"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Portal */}
            {activeMember && (
                <TeamModal member={activeMember} onClose={() => setActiveMember(null)} />
            )}
        </>
    );
};
