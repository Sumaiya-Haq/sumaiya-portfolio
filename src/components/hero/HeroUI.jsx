import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import { PERSONAL_INFO } from '../../utils/constants';

const TYPING_TITLES = [
  'AI Engineer',
  'Full Stack Developer',
  'LLM & RAG Architect',
  'Computer Science Scholar'
];

export const HeroUI = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = TYPING_TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === targetTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
      } else {
        setCurrentText(
          isDeleting
            ? targetTitle.substring(0, currentText.length - 1)
            : targetTitle.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 min-h-screen flex flex-col justify-between pointer-events-none">
      {/* Top Banner Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto self-start"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/70 border border-accent/30 backdrop-blur-xl shadow-glass">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
          <span className="text-xs sm:text-sm font-heading font-semibold tracking-wider text-accent uppercase">
            SUMAIYAVERSE • INTERACTIVE 3D EXPERIENCE
          </span>
        </div>
      </motion.div>

      {/* Main Headline & Typing Content */}
      <div className="my-auto max-w-3xl space-y-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-lg sm:text-2xl font-numbers font-medium text-text-muted">
            Hello World, I'm <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white leading-[1.1]">
            <span className="gradient-text-primary">Architecting AI</span>
            <br />
            & <span className="gradient-text-accent">{currentText}</span>
            <span className="animate-pulse text-accent">|</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl font-body text-text-muted leading-relaxed max-w-2xl"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <a href="#projects">
            <Button variant="primary" size="lg" icon={FiArrowRight}>
              Explore Projects
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg" icon={FiMail}>
              Get In Touch
            </Button>
          </a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" icon={FiDownload}>
              Resume / GitHub
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Bottom Highlights & Scroll Down Indicator */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pointer-events-auto pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full sm:w-auto">
          {PERSONAL_INFO.stats.slice(0, 3).map((stat, idx) => (
            <GlassCard key={idx} hoverEffect={false} className="py-3 px-4 sm:py-4 sm:px-6">
              <p className="text-xl sm:text-2xl font-bold font-numbers text-accent">{stat.value}</p>
              <p className="text-xs font-body text-text-muted uppercase tracking-wider">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-xs font-numbers tracking-widest text-text-muted hover:text-accent uppercase transition-colors"
        >
          <span>SCROLL DOWN</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default HeroUI;
