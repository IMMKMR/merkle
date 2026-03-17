import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const AboutWhoIsThisForSection = () => {
    return (
        <section className="bg-merkle-purple-dark py-24 lg:py-32 relative text-white">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="text-4xl lg:text-5xl font-sans font-bold mb-10 leading-[1.1] tracking-tight text-white">
                        <span className="font-serif italic font-normal">Who This Is For?</span>
                    </h2>
                    
                    <p className="font-serif text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10">
                        The Merkle Value Fund is designed as a passive Bitcoin investment vehicle that provides disciplined exposure to Bitcoin for Indian investors. We build it for those who value structure over speculation and long-term confidence over short-term trading. Our approach focuses on transparency, compliance, and audited safeguards so investors access Bitcoin efficiently and responsibly.
                    </p>

                    <div className="mt-12">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-merkle-purple-dark hover:bg-slate-100 font-sans text-sm font-bold uppercase tracking-[0.2em] transition-colors rounded-full shadow-lg"
                        >
                            Speak to Our Team
                        </Link>
                        <p className="mt-6 font-sans text-sm text-white/60">
                            Visit the Contact page or reach out to our team to take the next step with confidence.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
