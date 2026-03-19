import React from 'react';
import { motion } from 'framer-motion';

export const AboutHeroSection = () => {
  return (
    <section className="relative bg-slate-950 overflow-hidden">

      {/* Top gold rule */}
      <div className="w-full h-px bg-yellow-400/40" />

      <div className="container mx-auto px-6 lg:px-12">

        {/* Category row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-white/10 py-4"
        >
          <span className="font-sans text-[10px] font-bold tracking-[0.35em] uppercase text-yellow-400">
            About Merkle Value
          </span>
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-white/20">
            Merkle Value · 2026
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">

          {/* Left column — heading + descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 py-12 lg:py-24 lg:pr-16 lg:border-r border-white/10 flex flex-col justify-between gap-10 text-center lg:text-left items-center lg:items-start"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-sans font-bold text-white leading-[1.0] tracking-tighter">
              Institutional<br />discipline.{' '}
              <span className="font-serif italic font-normal text-yellow-400">
                <br />Digital Innovation.
              </span>
            </h1>

            <div className="space-y-4">
              <p className="font-serif text-white/40 text-base italic leading-relaxed max-w-sm">
                "Built for the long-term. Governed for the disciplined investor."
              </p>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-8 h-px bg-yellow-400/50" />
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/30">
                  Build Long-Term
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column — PNG image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-6 items-end justify-end relative"
          >
            <img
              src="images/assets/about_bulb_crystal.png"
              alt="Digital Asset Infrastructure"
              className="w-full max-w-[480px] h-auto object-contain object-bottom"
              style={{ filter: 'drop-shadow(0 -20px 60px rgba(139, 92, 246, 0.15))' }}
            />
          </motion.div>

        </div>

      </div>

      {/* Bottom rule */}
      <div className="w-full h-px bg-white/10" />
      <div className="h-10 bg-gradient-to-b from-slate-950 to-off-white" />

    </section>
  );
};
