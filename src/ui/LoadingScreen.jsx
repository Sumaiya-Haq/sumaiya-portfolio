import { useProgress } from '@react-three/drei'

export function LoadingScreen({ progress }) {
  const { loaded, total } = useProgress()
  const pct = Math.round((loaded / total) * 100) || 0

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#1a2a3a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'sans-serif',
      zIndex: 1000,
      transition: 'opacity 1s',
      opacity: progress >= 100 ? 0 : 1,
      pointerEvents: progress >= 100 ? 'none' : 'auto'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SumaiyaVerse</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Loading your village...</p>
      <div style={{ width: '300px', height: '6px', background: '#333', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: '#4a9eff', transition: 'width 0.3s' }} />
      </div>
      <span style={{ marginTop: '1rem' }}>{pct}%</span>
    </div>
  )
}