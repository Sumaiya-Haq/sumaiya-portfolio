import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col items-center justify-center p-4 selection:bg-none pointer-events-auto"
        >
          {/* Ambient Glowing Orbs */}
          <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

          {/* Logo Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center mb-8"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-light to-accent">
              SUMAIYA<span className="text-accent">VERSE</span>
            </h1>
            <p className="text-xs sm:text-sm font-numbers tracking-widest text-text-muted mt-2 uppercase">
              Initializing 3D World & AI Neural Pipeline
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="relative z-10 w-64 sm:w-80 h-1.5 bg-card/80 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Counter Display */}
          <div className="relative z-10 mt-4 flex items-center justify-between w-64 sm:w-80 text-xs font-numbers text-text-muted">
            <span>LOADING ASSETS</span>
            <span className="text-accent font-semibold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
