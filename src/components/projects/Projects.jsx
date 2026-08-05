import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFolder } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { getProjectsData } from '../../utils/constants';

export const Projects = () => {
  const [projectsData, setProjectsData] = useState(getProjectsData());
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleUpdate = () => setProjectsData(getProjectsData());
    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  const categories = ['All', 'AI', '3D & Web', 'Full Stack'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-accent text-xs font-heading font-semibold uppercase tracking-widest"
        >
          <FiFolder className="text-accent" /> FEATURED SHOWCASE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          Netflix-Style <span className="gradient-text-primary">Project Showcase</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg font-body"
        >
          Explore interactive WebGL applications, RAG enterprise agents, and real-time computer vision systems.
        </motion.p>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-heading font-medium rounded-full transition-all duration-300 border backdrop-blur-md ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-accent shadow-neon-purple'
                  : 'bg-card/60 text-text-muted border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <ProjectCard project={project} onSelect={setSelectedProject} />
          </motion.div>
        ))}
      </div>

      {/* Modal View Popup */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
