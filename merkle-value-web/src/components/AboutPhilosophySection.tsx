import { motion } from 'framer-motion';

export const AboutPhilosophySection = () => {
    return (
        <section id="philosophy" className="py-28 lg:py-36 bg-white relative border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Big editorial heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-slate-400 mb-8">
                            Our Philosophy
                        </p>
                        <h2 className="text-5xl lg:text-6xl font-sans font-bold text-slate-900 leading-[1.05] tracking-tight">
                            Understand first.{' '} <br />
                            <span className="font-serif italic font-normal text-merkle-purple">Invest next.</span>
                        </h2>

                        {/* Accent bar */}
                        <div className="w-16 h-1 bg-merkle-purple rounded-full mt-10" />
                    </motion.div>

                    {/* Right: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="font-serif text-xl text-slate-600 leading-relaxed">
                            At Merkle Value, we believe knowledge must lead every Bitcoin decision. We structure and steward investor capital responsibly through institutional thinking and long-term discipline. Our mission is to simplify digital asset access so Indian investors participate confidently in the <br /> future of wealth.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
