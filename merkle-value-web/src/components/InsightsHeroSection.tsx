import { motion, useScroll, useTransform } from 'framer-motion';

export const InsightsHeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0A0410] pt-20">
            <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
                 <img 
                    src="/images/assets/insights_bg.png" 
                    alt="Merkle Value Insights" 
                    className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
                 />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-sm font-bold tracking-[0.3em] text-white/50 uppercase mb-6 drop-shadow-lg">Insights & Research</h1>
                    <h2 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
                        Institutional Views on<br className="hidden md:block" />
                        <span className="font-serif italic text-merkle-purple-light">Digital Scarcity.</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};
