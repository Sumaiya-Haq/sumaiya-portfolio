import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCheckCircle } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import { EDUCATION_DATA, CERTIFICATES_DATA } from '../../utils/constants';

export const Education = () => {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
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
          <FiBook className="text-accent" /> ACADEMIC BACKGROUND
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          Education & <span className="gradient-text-primary">Certifications</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg font-body"
        >
          Foundational computer science principles, high academic standing, and specialized certifications in AI & Machine Learning.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Degree Main Card */}
        <div className="lg:col-span-1">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col justify-between p-8 space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-accent text-2xl">
                    <FiBook />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">{edu.degree}</h3>
                  <p className="text-base font-heading font-medium text-accent">{edu.institution}</p>
                  <p className="text-xs font-numbers text-text-muted">{edu.year}</p>
                  <div className="inline-block px-3 py-1 text-xs font-numbers font-semibold rounded-full bg-accent/10 border border-accent/30 text-accent">
                    {edu.grade}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-heading uppercase text-text-muted tracking-wider">Highlights</h4>
                  <ul className="space-y-2 text-xs font-body text-text-muted">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <FiCheckCircle className="text-accent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications Cards */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
            <FiAward className="text-accent" /> Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATES_DATA.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-numbers text-accent px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {cert.date}
                    </span>
                    <FiAward className="text-primary-light" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-white">{cert.title}</h4>
                  <p className="text-xs font-body text-text-muted">{cert.issuer}</p>
                  <p className="text-[11px] font-numbers text-white/40 border-t border-white/5 pt-2">
                    ID: {cert.credentialId}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
