import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiEdit3, FiGithub } from 'react-icons/fi';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import { getPersonalInfo } from '../../utils/constants';

const TYPING_TITLES = [
  'AI Engineer',
  'Full Stack Developer',
  'LLM & RAG Architect',
  'Computer Science Scholar'
];

export const HeroUI = ({ onOpenInfoEditor }) => {
  const [personalInfo, setPersonalInfo] = useState(getPersonalInfo());
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      setPersonalInfo(getPersonalInfo());
    };
    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

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
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-28 pb-16 min-h-screen flex flex-col justify-between pointer-events-none">
      {/* Top Banner Tag & Edit Info Trigger */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto self-start flex flex-wrap items-center gap-3"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 border border-accent/40 backdrop-blur-xl shadow-glass">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
          <span className="text-xs sm:text-sm font-heading font-semibold tracking-wider text-accent uppercase">
            3D GAMING VILLAGE PORTFOLIO
          </span>
        </div>

        {/* Live Info Editor Button */}
        <button
          onClick={onOpenInfoEditor}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-xs sm:text-sm font-bold backdrop-blur-xl transition-all shadow-lg hover:scale-105"
        >
          <FiEdit3 className="text-cyan-400" />
          <span>Edit Profile Info</span>
        </button>
      </motion.div>

      {/* Main Headline & Typing Content */}
      <div className="my-auto max-w-3xl space-y-6 pointer-events-auto pt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-lg sm:text-2xl font-numbers font-medium text-text-muted">
            Hello World, I'm <span className="text-white font-bold">{personalInfo.name}</span>
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
          {personalInfo.bio}
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
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" icon={FiGithub}>
                GitHub Profile
              </Button>
            </a>
          )}
        </motion.div>
      </div>

      {/* Bottom Highlights & Scroll Down Indicator */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pointer-events-auto pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full sm:w-auto">
          {personalInfo.stats?.slice(0, 3).map((stat, idx) => (
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
          <span>EXPLORE VILLAGE SECTIONS</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default HeroUI;
