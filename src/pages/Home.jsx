import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/layout/CustomCursor';
import PageLoader from '../components/ui/PageLoader';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Research from '../components/research/Research';
import Education from '../components/education/Education';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';

export const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050816] text-white selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Page Loader Screen */}
      {loading && <PageLoader onComplete={() => setLoading(false)} />}

      {/* Interactive Neon Custom Cursor */}
      <CustomCursor />

      {/* Navbar Header */}
      <Navbar />

      {/* Main Portfolio Content Container */}
      <main className="relative z-10 space-y-12">
        {/* 1. Full-Screen 3D Cyber Village Hero Section */}
        <Hero />

        {/* 2. About Section with Animated Counter Metrics */}
        <About />

        {/* 3. Technical Skills & Circular Indicators */}
        <Skills />

        {/* 4. Netflix-Style Showcase Projects */}
        <Projects />

        {/* 5. AI Research & Publications */}
        <Research />

        {/* 6. Career & Research Experience Timeline */}
        <Experience />

        {/* 7. Education & Certifications */}
        <Education />

        {/* 8. Recommendations & GitHub Activity */}
        <Testimonials />

        {/* 9. Contact Form & EmailJS Integration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
