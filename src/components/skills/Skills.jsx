import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import SkillCard from './SkillCard';
import { getSkillCategories } from '../../utils/constants';

export const Skills = () => {
  const [skillCategories, setSkillCategories] = useState(getSkillCategories());
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const handleUpdate = () => setSkillCategories(getSkillCategories());
    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-heading font-semibold uppercase tracking-widest"
        >
          <FiCode className="text-accent" /> TECHNICAL MASTERY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          Skills & <span className="gradient-text-accent">Technology Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg font-body"
        >
          Expertise spanning artificial intelligence models, full-stack frameworks, cloud deployment, and interactive WebGL 3D graphics.
        </motion.p>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-6"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-heading font-medium rounded-full transition-all duration-300 backdrop-blur-md border ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-accent shadow-neon-purple'
                  : 'bg-card/60 text-text-muted border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Skill Cards Display Grid */}
      <div className="space-y-12">
        {filteredCategories.map((catGroup, idx) => (
          <motion.div
            key={catGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: catGroup.color }}
              />
              <h3 className="text-xl font-bold font-heading text-white">{catGroup.category}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catGroup.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={catGroup.color}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
