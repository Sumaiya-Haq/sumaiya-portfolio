import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from './AnimatedCounter';
import { getPersonalInfo } from '../../utils/constants';

const HIGHLIGHT_CARDS = [
  {
    icon: FiCpu,
    title: 'AI & Machine Learning',
    description: 'Specializing in RAG architecture, LLM fine-tuning, prompt engineering, multi-agent frameworks (LangChain/LlamaIndex), and vector databases.',
    color: '#7C3AED'
  },
  {
    icon: FiCode,
    title: 'Full Stack Architecture',
    description: 'Building ultra-responsive React, Next.js, Node.js, and FastAPI web applications with elegant UI design systems and REST/GraphQL APIs.',
    color: '#3B82F6'
  },
  {
    icon: FiLayers,
    title: '3D WebGL Experiences',
    description: 'Crafting immersive interactive WebGL applications using Three.js, React Three Fiber, GLSL custom shaders, and GSAP animation scroll triggers.',
    color: '#22D3EE'
  }
];

export const About = () => {
  const [personalInfo, setPersonalInfo] = useState(getPersonalInfo());

  useEffect(() => {
    const handleUpdate = () => setPersonalInfo(getPersonalInfo());
    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-accent text-xs font-heading font-semibold uppercase tracking-widest"
        >
          <FiCpu className="text-accent" /> ABOUT ME
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          Pioneering <span className="gradient-text-primary">Intelligent Systems</span> & <span className="gradient-text-accent">Web Artistry</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-body"
        >
          {personalInfo.bio}
        </motion.p>
      </div>

      {/* 3 Pillars Highlight Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {HIGHLIGHT_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-8">
                <div className="space-y-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shadow-glass"
                    style={{ backgroundColor: `${card.color}25`, border: `1px solid ${card.color}50` }}
                  >
                    <Icon style={{ color: card.color }} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{card.title}</h3>
                  <p className="text-sm font-body text-text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-numbers text-accent">
                  <FiCheckCircle />
                  <span>Production Ready</span>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Animated Counter Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {personalInfo.stats?.map((stat, idx) => (
          <AnimatedCounter key={idx} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default About;
