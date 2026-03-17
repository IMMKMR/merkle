import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const insights = [
    {
        title: "Bitcoin Isn't Replacing Gold — It's Evolving It",
        readTime: "4 MIN READ",
        category: "ANALYSIS"
    },
    {
        title: "Why Regulation Matters More Than Price",
        readTime: "3 MIN READ",
        category: "REGULATION"
    },
    {
        title: "Bitcoin, Explained in 60 Seconds",
        readTime: "1 MIN READ",
        category: "EDUCATION"
    },
    {
        title: "What GIFT City Changes for Indian Investors",
        readTime: "5 MIN READ",
        category: "MARKETS"
    }
];

export const FromOurDeskSection = () => {
    return (
        <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Header Col */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-sm font-bold tracking-[0.25em] text-merkle-purple/50 uppercase mb-6">
                            From the Merkle Value Desk
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-5xl font-sans font-bold text-slate-800 mb-8 leading-[1.1] tracking-tight">
                            Understand Bitcoin the <span className="font-serif italic font-bold text-merkle-purple">Merkle Way.</span>
                        </h3>
                        <p className="font-serif text-lg text-slate-600 mb-6 leading-relaxed">
                            Stay informed without the hype.
                        </p>
                        <p className="font-serif text-[15px] text-slate-600 mb-10 leading-relaxed border-l-2 border-merkle-purple/30 pl-4">
                            We actively curate insights on Bitcoin, regulation, and portfolio strategy across LinkedIn and Instagram. Our team breaks complex global developments into simple perspectives that help you think clearly and act confidently.
                        </p>
                        
                        <Link to="/insights" className="inline-flex items-center gap-2 group text-merkle-purple font-sans font-bold uppercase tracking-widest text-sm hover:text-merkle-purple-light transition-colors">
                            <span>Explore Insights</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Insights List */}
                    <div className="lg:w-2/3 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-full mb-4">
                                <h4 className="font-sans font-bold text-slate-400 uppercase tracking-widest text-xs">Featured Insights</h4>
                            </div>
                            
                            {insights.map((insight, idx) => (
                                <motion.a
                                    href="#insights" // Route to insights
                                    key={insight.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group block bg-off-white hover:bg-white border border-slate-100 hover:border-merkle-purple/20 p-8 rounded-xl transition-all shadow-sm hover:shadow-md h-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-merkle-purple/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 group-hover:bg-merkle-purple/10" />
                                    
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-merkle-purple px-2 py-1 bg-merkle-purple/10 rounded-sm">
                                            {insight.category}
                                        </span>
                                        <BookOpen className="w-5 h-5 text-slate-300 group-hover:text-merkle-purple transition-colors" />
                                    </div>
                                    
                                    <h4 className="font-sans font-bold text-xl text-slate-800 mb-6 group-hover:text-merkle-purple transition-colors leading-tight">
                                        {insight.title}
                                    </h4>
                                    
                                    <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-widest text-slate-400 uppercase mt-auto">
                                        <Clock className="w-3 h-3" />
                                        <span>{insight.readTime}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
