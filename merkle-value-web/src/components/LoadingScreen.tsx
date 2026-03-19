import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const Candle3D = ({ delay, isUp, hParams, yParams }: any) => {
  // Ultra-premium colors
  const front = isUp ? 'bg-gradient-to-br from-merkle-purple to-merkle-purple-dark' : 'bg-gradient-to-br from-white to-slate-200';
  const side = isUp ? 'bg-merkle-purple-dark' : 'bg-slate-300';
  const top = isUp ? 'bg-purple-400' : 'bg-white';
  const wickF = isUp ? 'bg-merkle-purple' : 'bg-slate-300';
  const wickS = isUp ? 'bg-merkle-purple-dark' : 'bg-slate-400';

  return (
    <motion.div
      style={{ transformStyle: 'preserve-3d' }}
      className="flex flex-col items-center justify-center relative w-8 h-40 origin-center"
      animate={{ y: yParams }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {/* The Wick */}
      <div className="absolute top-2 bottom-2 w-1.5" style={{ transformStyle: 'preserve-3d' }}>
        <div className={`absolute inset-0 ${wickF}`} style={{ transform: 'translateZ(3px)' }} />
        <div className={`absolute top-0 w-1.5 h-full ${wickS}`} style={{ transform: 'translateX(3px) rotateY(90deg)' }} />
        <div className={`absolute top-0 w-1.5 h-full ${wickS}`} style={{ transform: 'translateX(-3px) rotateY(-90deg)' }} />
        <div className={`absolute inset-0 ${wickS}`} style={{ transform: 'translateZ(-3px) rotateY(180deg)' }} />
      </div>

      {/* The Body */}
      <motion.div
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-8 z-10 shadow-[0_20px_40px_rgba(60,1,102,0.4)]"
        animate={{ height: hParams }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {/* Front */}
        <div className={`absolute inset-0 ${front} border-[0.5px] border-merkle-purple/20`} style={{ transform: 'translateZ(16px)' }} />
        {/* Back */}
        <div className={`absolute inset-0 ${side} border-[0.5px] border-merkle-purple/20`} style={{ transform: 'translateZ(-16px) rotateY(180deg)' }} />
        {/* Right */}
        <div className={`absolute top-0 w-8 h-full ${side} border-[0.5px] border-merkle-purple/20`} style={{ transform: 'translateX(16px) rotateY(90deg)' }} />
        {/* Left */}
        <div className={`absolute top-0 w-8 h-full ${side} border-[0.5px] border-merkle-purple/20`} style={{ transform: 'translateX(-16px) rotateY(-90deg)' }} />
        {/* Top */}
        <div className={`absolute -top-4 w-8 h-8 ${top} border-[0.5px] border-white/50`} style={{ transform: 'rotateX(90deg)' }} />
        {/* Bottom */}
        <div className={`absolute -bottom-4 w-8 h-8 ${side} border-[0.5px] border-black/10`} style={{ transform: 'rotateX(-90deg)' }} />
      </motion.div>
    </motion.div>
  );
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.max(1, Math.floor((100 - current) / 6));
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 800);
        }, 1000);
      }
      setPercent(current);
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-off-white text-slate-800"
        >
          {/* Main Container */}
          <div className="flex flex-col items-center justify-center space-y-12">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <img src="images/assets/logo_purple.svg" alt="Merkle Value" className="h-10" />
            </motion.div>

            {/* Mind-blowing 3D Candlestick Graphic */}
            <div style={{ perspective: '1200px' }} className="relative w-full h-80 flex items-center justify-center my-4 overflow-visible">
              <motion.div
                animate={{ rotateY: [-25, 25, -25], rotateX: [-15, -5, -15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                className="flex gap-8 lg:gap-12 items-center justify-center"
              >
                <Candle3D delay={0} isUp={true} hParams={[40, 90, 40]} yParams={[20, -10, 20]} />
                <Candle3D delay={0.4} isUp={false} hParams={[70, 30, 70]} yParams={[-15, 30, -15]} />
                <Candle3D delay={0.8} isUp={true} hParams={[100, 50, 100]} yParams={[15, -25, 15]} />
                <Candle3D delay={0.2} isUp={false} hParams={[50, 110, 50]} yParams={[-20, 10, -20]} />
                <Candle3D delay={0.6} isUp={true} hParams={[35, 85, 35]} yParams={[25, -5, 25]} />
              </motion.div>
            </div>

            {/* Progress Bar & Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col items-center space-y-4 w-72 mt-8"
            >
              <div className="flex justify-between w-full text-[10px] font-bold text-merkle-purple tracking-[0.2em] uppercase">
                <span>Loading</span>
                <span>{percent}%</span>
              </div>
              <div className="w-full h-1 bg-merkle-purple/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-merkle-purple"
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ ease: "linear", duration: 0.2 }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

