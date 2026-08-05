import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiRefreshCw, FiUser, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiCode, FiUpload, FiImage, FiTrash2 } from 'react-icons/fi';
import { getPersonalInfo, saveCustomData, resetCustomData } from '../../utils/constants';

export const InfoEditorModal = ({ isOpen, onClose }) => {
  const currentInfo = getPersonalInfo();

  const [formData, setFormData] = useState({
    name: currentInfo.name || '',
    title: currentInfo.title || '',
    bio: currentInfo.bio || '',
    email: currentInfo.email || '',
    location: currentInfo.location || '',
    github: currentInfo.github || '',
    linkedin: currentInfo.linkedin || '',
    twitter: currentInfo.twitter || '',
    avatar: currentInfo.avatar || ''
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle local image file upload & conversion to Data URL
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image file size should be less than 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setFormData((prev) => ({
      ...prev,
      avatar: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCustomData({
      personalInfo: {
        ...currentInfo,
        ...formData
      }
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your profile to default settings?")) {
      resetCustomData();
      const updated = getPersonalInfo();
      setFormData({
        name: updated.name || '',
        title: updated.title || '',
        bio: updated.bio || '',
        email: updated.email || '',
        location: updated.location || '',
        github: updated.github || '',
        linkedin: updated.linkedin || '',
        twitter: updated.twitter || '',
        avatar: updated.avatar || ''
      });
      alert("Profile information has been reset to defaults!");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0B132B] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-white selection:bg-cyan-500 selection:text-black"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center gap-2">
                <span>⚙️</span> Edit Profile Information
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Customize your details and upload your profile picture below. Updates reflect instantly across the portfolio!
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Alert Success message */}
          {savedSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-sm flex items-center gap-2"
            >
              <FiCheck className="w-5 h-5 text-emerald-400" />
              <span>Your profile information has been saved successfully!</span>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 text-sm">
            {/* Profile Picture Upload Section */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-cyan-500/20 space-y-3">
              <label className="block text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <FiImage className="text-cyan-400" /> Profile Picture / Avatar
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Image Preview */}
                <div className="relative group w-20 h-20 rounded-2xl overflow-hidden bg-slate-950 border border-white/20 flex-shrink-0">
                  {formData.avatar ? (
                    <img
                      src={formData.avatar}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs text-center p-1">
                      No Image
                    </div>
                  )}
                </div>

                <div className="space-y-2 w-full">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Upload File Button */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 transition-all flex items-center gap-2"
                    >
                      <FiUpload className="w-4 h-4" /> Upload Photo from Computer
                    </button>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />

                    {formData.avatar && (
                      <button
                        type="button"
                        onClick={handleRemoveAvatar}
                        className="px-3 py-2 text-xs rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 transition-all flex items-center gap-1"
                      >
                        <FiTrash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    )}
                  </div>

                  {/* Image URL Input */}
                  <input
                    type="text"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                    placeholder="Or paste image URL (e.g. https://domain.com/photo.jpg)"
                    className="w-full bg-slate-950 border border-white/15 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FiUser className="text-cyan-400" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sumaiya Haq"
                  required
                  className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Title / Role */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FiCode className="text-cyan-400" /> Title / Profession
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. AI Engineer | Full Stack Developer"
                  required
                  className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Bio / About */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Bio / Personal Overview
              </label>
              <textarea
                name="bio"
                rows="3"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write a brief overview about yourself and your passions..."
                className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FiMail className="text-cyan-400" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FiMapPin className="text-cyan-400" /> Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Bangladesh / Remote"
                  className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* GitHub */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FiGithub className="text-cyan-400" /> GitHub URL
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/your-username"
                  className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FiLinkedin className="text-cyan-400" /> LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/your-profile"
                  className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Twitter / Social */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FiTwitter className="text-cyan-400" /> Twitter / Social URL
                </label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/your-username"
                  className="w-full bg-slate-900/80 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center justify-between border-t border-white/10 gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs rounded-xl border border-red-500/40 text-red-300 hover:bg-red-500/20 transition-colors flex items-center gap-1.5"
              >
                <FiRefreshCw className="w-3.5 h-3.5" /> Reset Defaults
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs rounded-xl border border-white/20 text-slate-300 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all flex items-center gap-1.5"
                >
                  <FiCheck className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InfoEditorModal;
