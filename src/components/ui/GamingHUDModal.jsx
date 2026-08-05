import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiLinkedin, FiTwitter, FiExternalLink, FiMail, FiMapPin, FiAward, FiBookOpen, FiBriefcase, FiCpu, FiCode, FiSend } from 'react-icons/fi';
import {
  getPersonalInfo,
  getSkillCategories,
  getExperienceData,
  getProjectsData,
  getResearchData,
  getEducationData
} from '../../utils/constants';

export const GamingHUDModal = ({ activeCategory, onClose }) => {
  const [msgSent, setMsgSent] = useState(false);

  if (!activeCategory) return null;

  const personalInfo = getPersonalInfo();
  const skillCategories = getSkillCategories();
  const experienceData = getExperienceData();
  const projectsData = getProjectsData();
  const researchData = getResearchData();
  const educationData = getEducationData();

  const getCategoryMeta = () => {
    switch (activeCategory) {
      case 'main-house':
        return {
          title: '🏠 About Me',
          badge: 'Profile Hub',
          icon: <FiCpu className="text-cyan-400" />,
          color: 'from-cyan-500 to-blue-600'
        };
      case 'tea-stall':
        return {
          title: '☕ Tech Skills & Tool Stack',
          badge: 'Technical Capabilities',
          icon: <FiCode className="text-amber-400" />,
          color: 'from-amber-500 to-orange-600'
        };
      case 'academy':
        return {
          title: '🎓 Education & Research',
          badge: 'Academic Spire',
          icon: <FiBookOpen className="text-indigo-400" />,
          color: 'from-indigo-500 to-purple-600'
        };
      case 'workshop':
        return {
          title: '🚀 Featured Projects',
          badge: 'Project Showcase',
          icon: <FiAward className="text-emerald-400" />,
          color: 'from-emerald-500 to-teal-600'
        };
      case 'guild':
        return {
          title: '⚔️ Work & Career Experience',
          badge: 'Experience Guild',
          icon: <FiBriefcase className="text-rose-400" />,
          color: 'from-rose-500 to-pink-600'
        };
      case 'post-box':
        return {
          title: '📮 Contact & Connect',
          badge: 'Contact Terminal',
          icon: <FiMail className="text-purple-400" />,
          color: 'from-purple-500 to-cyan-600'
        };
      default:
        return {
          title: 'Portfolio Information',
          badge: 'Structure Node',
          icon: <FiCpu />,
          color: 'from-cyan-500 to-blue-600'
        };
    }
  };

  const meta = getCategoryMeta();

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
    }, 3000);
  };

  const renderContent = () => {
    switch (activeCategory) {
      case 'main-house':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-slate-900/60 p-6 rounded-2xl border border-white/10">
              <img
                src={personalInfo.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"}
                alt={personalInfo.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover ring-2 ring-cyan-400 shadow-xl"
              />
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl font-bold font-heading text-white">{personalInfo.name}</h3>
                <p className="text-cyan-400 font-semibold text-sm">{personalInfo.title}</p>
                <p className="text-slate-300 text-xs flex items-center justify-center sm:justify-start gap-1">
                  <FiMapPin className="text-cyan-400" /> {personalInfo.location}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed pt-2">{personalInfo.bio}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats?.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-cyan-500/20 text-center">
                  <p className="text-2xl font-bold text-cyan-400 font-numbers">{stat.value}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tea-stall':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-white/10 space-y-3">
                <h4 className="font-bold text-sm text-cyan-300 flex items-center gap-2 border-b border-white/10 pb-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                  {cat.category}
                </h4>
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-300 font-medium">
                        <span>{skill.name}</span>
                        <span className="text-cyan-400 font-numbers">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: cat.color || '#38BDF8'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'academy':
        return (
          <div className="space-y-6">
            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">🎓 Academic Degree</h4>
              {educationData.map((edu, idx) => (
                <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-indigo-500/30 space-y-2">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h5 className="font-bold text-white text-base">{edu.degree}</h5>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-numbers">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-sm">{edu.institution} • <span className="text-emerald-400 font-bold">{edu.grade}</span></p>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-2">
                    {edu.highlights?.map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Research Papers */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">📚 Research & Publications</h4>
              {researchData.map((paper, idx) => (
                <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-white/10 space-y-2">
                  <h5 className="font-bold text-white text-sm">{paper.title}</h5>
                  <p className="text-xs text-cyan-400">{paper.publisher} ({paper.year})</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{paper.abstract}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'workshop':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projectsData.map((proj) => (
              <div key={proj.id} className="bg-slate-900/80 rounded-2xl overflow-hidden border border-white/15 flex flex-col justify-between">
                <img src={proj.image} alt={proj.title} className="w-full h-36 object-cover" />
                <div className="p-4 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10">
                    {proj.category}
                  </span>
                  <h5 className="font-bold text-white text-base leading-snug">{proj.title}</h5>
                  <p className="text-xs text-slate-300 line-clamp-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags?.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 pt-0 flex gap-2">
                  {proj.liveDemo && (
                    <a
                      href={proj.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-1.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                    >
                      Live Demo <FiExternalLink />
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs flex items-center justify-center gap-1 transition-colors"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case 'guild':
        return (
          <div className="space-y-4">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-rose-500/30 space-y-2">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h5 className="font-bold text-white text-base">{exp.role}</h5>
                    <p className="text-rose-400 text-xs font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-numbers">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies?.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'post-box':
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="font-bold text-white text-lg">Get In Touch</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Feel free to send a direct message or connect via social media channels for project inquiries and collaborations.
              </p>
              <div className="space-y-3 text-xs">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-cyan-400 hover:underline">
                  <FiMail className="w-4 h-4" /> {personalInfo.email}
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <FiMapPin className="w-4 h-4 text-cyan-400" /> {personalInfo.location}
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-black transition-colors">
                    <FiGithub className="w-5 h-5" />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-black transition-colors">
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                )}
                {personalInfo.twitter && (
                  <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-black transition-colors">
                    <FiTwitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Direct Quick Message Box */}
            <form onSubmit={handleSendMessage} className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h4 className="font-bold text-white text-sm">Send Quick Message</h4>
              {msgSent && (
                <div className="p-2 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <input type="text" required placeholder="Your Name" className="w-full bg-slate-950 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400" />
              <input type="email" required placeholder="Your Email Address" className="w-full bg-slate-950 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400" />
              <textarea rows="3" required placeholder="Your Message..." className="w-full bg-slate-950 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400" />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-xs hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-1.5"
              >
                <FiSend className="w-3.5 h-3.5" /> Send Message
              </button>
            </form>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#070D1D] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-white selection:bg-cyan-500 selection:text-black"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${meta.color} text-white text-xl shadow-lg`}>
                {meta.icon}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                  {meta.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">{meta.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Dynamic Category Body Content */}
          {renderContent()}

          {/* Bottom Footer Actions */}
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
            >
              Close HUD Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GamingHUDModal;
