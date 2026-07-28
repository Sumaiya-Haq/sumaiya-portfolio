import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const SkillCard = ({ name, level, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  // SVG Circular Progress Constants
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-white/10 backdrop-blur-md hover:border-accent/40 shadow-glass transition-all duration-300 group"
    >
      {/* Circular Progress Ring */}
      <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            className="text-white/10"
            fill="transparent"
          />
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            stroke={color || '#22D3EE'}
            strokeWidth="4"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute text-xs font-numbers font-bold text-white">
          {level}%
        </span>
      </div>

      {/* Skill Meta Info */}
      <div className="space-y-1 overflow-hidden">
        <h4 className="text-sm font-bold font-heading text-white truncate group-hover:text-accent transition-colors">
          {name}
        </h4>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color || '#22D3EE' }}
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${level}%` : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
