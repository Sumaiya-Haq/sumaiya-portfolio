import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import { EXPERIENCE_DATA } from '../../utils/constants';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary-light text-xs font-heading font-semibold uppercase tracking-widest"
        >
          <FiBriefcase className="text-secondary" /> CAREER PATHWAY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          Work & Research <span className="gradient-text-accent">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg font-body"
        >
          Building intelligent AI agents, fine-tuning large language models, and developing high-performance full-stack applications.
        </motion.p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Center Glowing Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 transform -translate-x-1/2 hidden sm:block" />

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#050816] border-2 border-accent flex items-center justify-center z-20 shadow-neon-cyan hidden sm:flex">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                </div>

                {/* Experience Card Container */}
                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-10' : 'sm:pr-10'}`}>
                  <GlassCard className="p-8 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                      <div>
                        <h3 className="text-xl font-bold font-heading text-white">{exp.role}</h3>
                        <p className="text-sm font-heading font-medium text-accent">{exp.company}</p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-numbers text-text-muted px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <FiCalendar className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-sm font-body text-text-muted leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 text-xs font-numbers font-medium rounded-full bg-primary/10 border border-primary/25 text-primary-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
