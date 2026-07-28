import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { PERSONAL_INFO } from '../../utils/constants';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050F] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading">
              Sumaiya<span className="text-accent">Verse</span>
            </h2>
            <p className="text-sm text-text-muted max-w-sm">
              Building next-generation AI solutions, scalable full-stack applications, and immersive 3D digital experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-accent">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-text-muted">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#research" className="hover:text-white transition-colors">Research</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Connections */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-accent">
              Connect With Me
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-card/80 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:scale-110 transition-all"
              >
                <FiGithub className="text-lg" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-card/80 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:scale-110 transition-all"
              >
                <FiLinkedin className="text-lg" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-card/80 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:scale-110 transition-all"
              >
                <FiTwitter className="text-lg" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-card/80 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:scale-110 transition-all"
              >
                <FiMail className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Sumaiya Haq. All rights reserved. Designed & Built for SumaiyaVerse.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <FiArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
