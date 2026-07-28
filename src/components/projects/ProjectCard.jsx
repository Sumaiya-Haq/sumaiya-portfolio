import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiMaximize2 } from 'react-icons/fi';
import Button from '../ui/Button';

export const ProjectCard = ({ project, onSelect }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="perspective-1000 group relative rounded-2xl bg-card border border-white/10 overflow-hidden shadow-glass hover:border-accent/40 transition-all duration-300 flex flex-col justify-between h-full"
    >
      {/* Netflix-Style Card Banner Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Top Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-numbers font-semibold rounded-full bg-[#050816]/70 border border-white/10 text-accent backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Hover View Gallery Button */}
        <button
          onClick={() => onSelect(project)}
          aria-label="View Project Gallery"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#050816]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:text-accent"
        >
          <FiMaximize2 />
        </button>
      </div>

      {/* Card Body Info */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-bold font-heading text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-numbers text-accent">{project.subtitle}</p>
          <p className="text-sm font-body text-text-muted line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 text-[11px] font-numbers rounded-md bg-white/5 border border-white/10 text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <Button
            variant="primary"
            size="sm"
            icon={FiExternalLink}
            onClick={() => window.open(project.liveDemo, '_blank')}
          >
            Live Demo
          </Button>

          <Button
            variant="outline"
            size="sm"
            icon={FiGithub}
            onClick={() => window.open(project.github, '_blank')}
          >
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
