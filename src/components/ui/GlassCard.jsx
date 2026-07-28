import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.3 } } : {}}
      className={`relative p-6 sm:p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-white/10 shadow-glass overflow-hidden transition-all duration-300 ${
        hoverEffect ? 'hover:border-accent/40 hover:shadow-neon-purple' : ''
      } ${className}`}
    >
      {/* Dynamic ambient lighting gradient inside card */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
