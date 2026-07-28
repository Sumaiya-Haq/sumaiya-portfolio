import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FiVolume2, FiVolumeX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useAudio } from '../../context/AudioContext';
import { PERSONAL_INFO } from '../../utils/constants';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMuted, toggleAudio } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 shadow-glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent p-0.5 shadow-neon-purple group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-heading font-bold text-lg text-accent">
              SH
            </div>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">
            Sumaiya<span className="text-accent">Verse</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-glass">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-text-muted hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5 relative"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Audio Toggle, Social & Mobile Menu) */}
        <div className="flex items-center gap-3">
          {/* Mute/Audio Button */}
          <button
            onClick={toggleAudio}
            aria-label="Toggle Audio"
            className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
          >
            {isMuted ? <FiVolumeX className="text-lg" /> : <FiVolume2 className="text-lg text-accent animate-pulse" />}
          </button>

          {/* Social GitHub Quick Link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-white/10 items-center justify-center text-text-muted hover:text-white hover:border-accent/40 transition-all duration-300"
          >
            <FiGithub className="text-lg" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? <HiOutlineX className="text-xl text-accent" /> : <HiOutlineMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050816]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-heading text-text-muted hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-white"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-white"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
