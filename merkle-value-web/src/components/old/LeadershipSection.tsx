import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
    {
        name: "Bipin Chhaganbhai Patel",
        role: "Chief Executive Officer",
        image: "/images/team/Bipin Patel.jpg",
        bio: [
            "A lifetime built on market integrity and risk discipline.",
            "Bipin Patel is the Chief Executive Officer of Merkle Value and a seasoned risk and market infrastructure professional with over three decades of experience across global financial markets. He holds a Master’s degree in Theoretical Physics from the University of Pennsylvania, and has built his career at the core of the global financial system, holding senior leadership and risk roles across exchanges, central clearing houses, and global investment banks, including Hong Kong Exchanges and Clearing (HKEX).",
            "Under Bipin’s leadership, the fund is built to offer Indian investors a compliant, transparent, and long-term gateway to Bitcoin — designed not for speculation, but for stewardship."
        ]
    },
    {
        name: "Amy Shuai",
        role: "Group Chief Financial Officer",
        image: "/images/team/Amy Shuai.png",
        bio: [
            "Amy Shuai is Group Chief Financial Officer of Merkle Value and a Chartered Accountant with over twenty-five years’ experience across global financial markets, digital assets, and high-growth ventures. She holds a First Class MPhys (Master of Physics) from the University of Oxford.",
            "Amy has built her career at the intersection of finance, risk, and operational control, holding senior roles at leading investment banks including UBS, Deutsche Bank, Daiwa Capital Markets, and Royal Bank of Scotland.",
            "Amy brings together institutional financial discipline with entrepreneurial execution and deep digital asset experience, ensuring Merkle Value’s financial architecture is robust, transparent, and built for long-term scale."
        ]
    },
    {
        name: "Ramandeep Singh",
        role: "Independent Investment Advisor",
        image: "/images/team/Ramandeep Singh.jpg",
        bio: [
            "Ramandeep Singh is an Independent Investment Advisor with over twenty years of experience across global derivatives markets, quantitative trading, and automated options strategies. He holds a Master of Business Administration in Finance from McGill University, Canada, and has completed Level II of the CFA Program.",
            "Ramandeep began his career in financial markets in Tokyo as a proprietary trader specialising in index options market making and volatility trading.",
            "He combines quantitative rigour, technology-driven execution, and cross-market derivatives expertise to support disciplined strategy design and risk management across traditional and digital asset markets."
        ]
    }
];

export const LeadershipSection = () => {
    return (
        <section id="leadership" className="py-24 md:py-40 bg-off-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                
                <div className="flex flex-col items-center mb-32 text-center">
                    <h2 className="text-sm font-bold tracking-[0.25em] text-merkle-purple/50 uppercase mb-4">The Team Behind Merkle Value</h2>
                    <h3 className="text-5xl md:text-6xl font-sans font-bold text-merkle-purple max-w-4xl leading-[1.1] tracking-tight">
                        Institutional experience guiding digital innovation.
                    </h3>
                </div>

                <div className="space-y-40">
                    {teamMembers.map((member, index) => (
                        <div key={member.name} className="relative">
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Photo Container with sticky behavior */}
                                <div className="w-full lg:w-5/12 static lg:sticky lg:top-32">
                                    <div className="relative w-full aspect-[3/4] overflow-hidden group">
                                        {/* Overlay to give it an architectural framed look */}
                                        <div className="absolute inset-0 bg-merkle-purple/20 mix-blend-overlay z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                                        
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s] group-hover:scale-105"
                                        />

                                        {/* Minimalist corner accents */}
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white z-20 m-6 opacity-50" />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white z-20 m-6 opacity-50" />
                                    </div>
                                </div>
                                
                                {/* Bio Content */}
                                <div className="w-full lg:w-7/12 pt-8">
                                    <h4 className="text-4xl md:text-5xl font-bold font-sans text-slate-800 tracking-tight leading-none mb-4">{member.name}</h4>
                                    <h5 className="text-sm font-bold tracking-[0.2em] text-merkle-purple uppercase mb-12 pb-8 border-b border-merkle-purple/20">{member.role}</h5>
                                    
                                    <div className="space-y-8 pr-0 xl:pr-12">
                                        {member.bio.map((paragraph, i) => (
                                            <p key={i} className={`font-serif text-slate-600 leading-relaxed ${i === 0 ? 'text-2xl text-merkle-purple font-medium italic !leading-snug' : 'text-lg'}`}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
