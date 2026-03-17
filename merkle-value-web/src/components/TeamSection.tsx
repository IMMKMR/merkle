import { motion } from 'framer-motion';

const team = [
    {
        name: "Bipin Chhaganbhai Patel",
        role: "Chief Executive Officer",
        image: "/images/team/bipin-patel.jpg",
        bio: "A seasoned risk and market infrastructure professional with over three decades of experience across global financial markets. He holds a Master's degree in Theoretical Physics from the University of Pennsylvania, and has built his career at the core of the global financial system, holding senior leadership and risk roles across exchanges, central clearing houses, and global investment banks, including Hong Kong Exchanges and Clearing (HKEX).",
        delay: 0.1
    },
    {
        name: "Amy Shuai",
        role: "Group Chief Financial Officer",
        image: "/images/team/amy-shuai.png",
        bio: "A Chartered Accountant with over twenty-five years' experience across global financial markets, digital assets, and high-growth ventures. She holds a First Class MPhys from the University of Oxford, is a Fellow of the ICAEW and earned the Wilmott Certificate in Quantitative Finance with distinction. Her expertise spans valuation and model governance at leading investment banks.",
        delay: 0.2
    },
    {
        name: "Ramandeep Singh",
        role: "Independent Investment Advisor",
        image: "/images/team/ramandeep-singh.jpg",
        bio: "Over twenty years of experience across global derivatives markets, quantitative trading, and automated options strategies. He holds an MBA in Finance from McGill University and has completed Level II of the CFA Program. He began his career in Tokyo as a proprietary trader specialising in index options market making and volatility trading.",
        delay: 0.3
    }
];

export const TeamSection = () => {
    return (
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
