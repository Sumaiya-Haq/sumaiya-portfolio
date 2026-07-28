import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract number from string like "3+", "15+", "100%"
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const originalSuffix = value.replace(/[0-9]/g, '') || suffix;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = Math.max(1, Math.ceil(numericValue / (duration / 30)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-card/60 border border-white/10 backdrop-blur-xl shadow-glass hover:border-accent/40 transition-all duration-300 group">
      <div className="text-4xl sm:text-5xl font-extrabold font-numbers text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary group-hover:scale-110 transition-transform duration-300">
        {count}{originalSuffix}
      </div>
      <p className="text-xs sm:text-sm font-heading font-medium text-text-muted mt-2 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;
