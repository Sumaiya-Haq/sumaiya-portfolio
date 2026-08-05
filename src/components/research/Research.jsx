import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiExternalLink, FiAward } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { getResearchData } from '../../utils/constants';

export const Research = () => {
  const [researchData, setResearchData] = useState(getResearchData());

  useEffect(() => {
    const handleUpdate = () => setResearchData(getResearchData());
    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  return (
    <section id="research" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-heading font-semibold uppercase tracking-widest"
        >
          <FiBookOpen className="text-accent" /> ACADEMIC PUBLICATIONS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          AI Research & <span className="gradient-text-accent">Papers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg font-body"
        >
          Investigating context compression techniques in transformer architectures and real-time WebGL rendering optimization.
        </motion.p>
      </div>

      {/* Research Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchData.map((paper, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xs font-numbers text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                    <FiAward />
                    <span>{paper.year}</span>
                  </div>
                  <span className="text-xs font-heading font-medium text-text-muted">
                    {paper.publisher}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white leading-snug">
                  {paper.title}
                </h3>

                <p className="text-sm font-body text-text-muted leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  size="sm"
                  icon={FiExternalLink}
                  onClick={() => window.open(paper.link, '_blank')}
                >
                  Read Paper / Preprint
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;
