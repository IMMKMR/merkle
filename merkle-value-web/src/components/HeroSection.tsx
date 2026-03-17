import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-off-white pt-32 pb-20">
      
      {/* Generated Premium Image Background */}
      <div className="absolute inset-0 w-full h-full">
         <img 
            src="/images/assets/hero_bg_abstract.png" 
            alt="Abstract Background" 
            className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
         />
         {/* Gradient overlay to ensure text readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-off-white via-white/80 to-transparent" />
         <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-off-white to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Massive Typography Left */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border border-merkle-purple/20 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-merkle-purple animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-merkle-purple">Institutional Digital Asset Fund</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-sans font-bold leading-[0.9] text-merkle-purple mb-8 tracking-tighter">
              Clarity in a <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-merkle-purple to-merkle-purple-light">Noisy</span> <br className="hidden lg:block" />
              Bitcoin World.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="font-serif text-xl lg:text-2xl text-slate-600 leading-relaxed lg:max-w-xl mx-auto lg:mx-0 mb-12"
          >
            Merkle Value merges deep protocol expertise with rigorous governance. We architect secure, compliant exposure to the absolute scarcity of Bitcoin.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1 }}
             className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
             <a href="#why" className="px-8 py-4 bg-merkle-purple text-white font-sans text-sm font-bold uppercase tracking-widest hover:bg-merkle-purple-dark transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center border border-transparent">
                Understand the Opportunity
             </a>
             <a href="#shift" className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-merkle-purple/30 text-merkle-purple font-sans text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors w-full sm:w-auto text-center shadow-lg hover:-translate-y-1">
                See How It Works
             </a>
          </motion.div>
        </div>

        {/* Hero Visual Right (Isolated Generated Render) */}
        <motion.div 
            style={{ opacity }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
            className="w-full lg:w-2/5 mt-20 lg:mt-0 relative flex justify-center lg:justify-end"
        >
            <div className="relative w-full max-w-[500px]">
                {/* Custom Generated Transparent PNG */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                >
                    <img 
                        src="/images/assets/isometric_node.png" 
                        alt="Digital Scarcity" 
                        className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply"
                    />
                </motion.div>
                
                {/* Floating stat card */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 right-0 lg:-right-10 bg-white/80 backdrop-blur-md p-6 border border-merkle-purple/10 shadow-xl rounded-xl"
                >
                     <p className="font-sans font-bold text-sm tracking-widest text-merkle-purple uppercase mb-1">Asset Class</p>
                     <p className="font-serif text-slate-500 text-sm italic mb-4">Verifiable Digital Scarcity</p>
                     <div className="text-right">
                         <p className="font-sans font-bold text-3xl text-merkle-purple tracking-tighter">21,000,000</p>
                         <p className="font-sans text-[10px] uppercase tracking-widest text-slate-400">Fixed Supply</p>
                     </div>
                </motion.div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};
