import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import { TESTIMONIALS_DATA, PERSONAL_INFO } from '../../utils/constants';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-heading font-semibold uppercase tracking-widest"
        >
          <FiMessageSquare className="text-accent" /> RECOMMENDATIONS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          Endorsements & <span className="gradient-text-accent">GitHub Activity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg font-body"
        >
          What researchers, lead architects, and engineering managers say about working with Sumaiya Haq.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {TESTIMONIALS_DATA.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-accent text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-base font-body text-text-muted italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="text-base font-bold font-heading text-white">{t.name}</h4>
                  <p className="text-xs font-body text-text-muted">{t.role} • {t.company}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* GitHub Activity Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GlassCard className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-accent/30 bg-card/80">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-accent p-0.5 shadow-neon-purple flex-shrink-0">
              <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center text-accent text-2xl">
                <FiGithub />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Explore Sumaiya's GitHub Ecosystem</h3>
              <p className="text-sm font-body text-text-muted">
                Open-source RAG agents, 3D WebGL experiments, and PyTorch fine-tuning repositories.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-heading font-medium text-sm shadow-neon-purple hover:scale-105 transition-all flex-shrink-0"
          >
            <FiGithub /> View Repositories <FiGitBranch />
          </a>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Testimonials;
