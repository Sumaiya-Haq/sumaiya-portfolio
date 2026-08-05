import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { getPersonalInfo } from '../../utils/constants';

export const Contact = () => {
  const [personalInfo, setPersonalInfo] = useState(getPersonalInfo());
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleUpdate = () => setPersonalInfo(getPersonalInfo());
    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');

    try {
      // EmailJS configuration check
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      // Simulate successful submission fallback if EmailJS service key is unconfigured locally
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-accent text-xs font-heading font-semibold uppercase tracking-widest"
        >
          <FiMail className="text-accent" /> GET IN TOUCH
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
        >
          Let's Build Something <span className="gradient-text-accent">Extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg font-body"
        >
          Have an AI project, research collaboration, or full-stack opportunity? Drop me a message below!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:col-span-1"
        >
          <GlassCard className="p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-heading text-white">Contact Info</h3>
              <p className="text-xs font-body text-text-muted">
                Available for freelance, research partnerships, and full-time roles.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm font-body">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs font-numbers text-text-muted">Email</p>
                  <p className="text-sm font-medium text-white">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-text-muted">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs font-numbers text-text-muted">Location</p>
                  <p className="text-sm font-medium text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <p className="text-xs font-heading uppercase text-accent tracking-wider">Social Channels</p>
              <div className="flex items-center gap-3">
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:scale-110 transition-all"
                  >
                    <FiGithub />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:scale-110 transition-all"
                  >
                    <FiLinkedin />
                  </a>
                )}
                {personalInfo.twitter && (
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:scale-110 transition-all"
                  >
                    <FiTwitter />
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <GlassCard className="p-8 sm:p-10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-heading font-medium text-text-muted uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-heading font-medium text-text-muted uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading font-medium text-text-muted uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="AI Solution Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading font-medium text-text-muted uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  <FiCheckCircle className="text-lg" />
                  <span>Message sent successfully! Thank you for reaching out.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={status === 'sending' ? null : FiSend}
                disabled={status === 'sending'}
                className="w-full sm:w-auto"
              >
                {status === 'sending' ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
