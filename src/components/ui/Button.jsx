import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 backdrop-blur-md cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent/50";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-neon-purple hover:shadow-neon-cyan hover:scale-[1.03] active:scale-[0.98]",
    secondary: "bg-card/80 text-white border border-primary/30 hover:border-accent hover:bg-card/90 shadow-glass hover:scale-[1.03] active:scale-[0.98]",
    outline: "bg-transparent text-white border border-white/20 hover:border-accent hover:text-accent hover:shadow-neon-cyan hover:scale-[1.03] active:scale-[0.98]",
    ghost: "bg-transparent text-text-muted hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3 text-sm gap-2.5",
    lg: "px-8 py-4 text-base gap-3",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {/* Dynamic Shine Overlay */}
      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {Icon && <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />}
      <span className="relative z-10 font-heading tracking-wide">{children}</span>
    </motion.button>
  );
};

export default Button;
