import { useStore } from '../store/useStore'
import { useEffect, useState } from 'react'

const contentMap = {
  About: { title: 'About Me', text: 'Hi, I am Sumaiya. A passionate developer...' },
  Skills: { title: 'Skills', text: 'HTML, CSS, JS, React, C#, Python, PHP, MySQL, Git, GitHub' },
  Hospital: { title: 'Hospital Management System', text: 'A full-stack web application for managing hospital records.' },
  'School Project': { title: 'Quiz System', text: 'An interactive quiz platform for students.' },
  'Research Lab': { title: 'AI Research Lab', text: 'Exploring machine learning models for healthcare.' },
  Education: { title: 'Education', text: 'B.Sc. in Computer Science, CGPA: 3.8' },
  Experience: { title: 'Experience', text: 'Internship at XYZ, Freelancing, Open Source contributions.' },
  Contact: { title: 'Contact', text: 'GitHub | LinkedIn | Email | Phone' },
  Cave: { title: 'Developer Room', text: 'Welcome to my secret cave! You found the easter egg 🥚' },
}

export function PortfolioPanel() {
  const interactionTarget = useStore((state) => state.interactionTarget)
  const [isOpen, setIsOpen] = useState(false)
  const [currentContent, setCurrentContent] = useState(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'KeyE' && interactionTarget) {
        const content = contentMap[interactionTarget]
        if (content) {
          setCurrentContent(content)
          setIsOpen(true)
        }
      }
      if (e.code === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [interactionTarget])

  if (!isOpen || !currentContent) return null

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(20, 30, 40, 0.9)',
      color: 'white',
      padding: '2rem 3rem',
      borderRadius: '12px',
      maxWidth: '500px',
      width: '90%',
      boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      fontFamily: 'sans-serif',
      zIndex: 100,
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{currentContent.title}</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        {currentContent.text}
      </p>
      <button
        onClick={() => setIsOpen(false)}
        style={{
          padding: '0.5rem 1.5rem',
          background: '#4a9eff',
          border: 'none',
          borderRadius: '6px',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Close (Esc)
      </button>
    </div>
  )
}