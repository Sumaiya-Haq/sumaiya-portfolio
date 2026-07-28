import { useStore } from '../store/useStore'

export function HUD() {
  const target = useStore((state) => state.interactionTarget)

  return (
    <div style={{
      position: 'fixed',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      fontFamily: 'sans-serif',
      background: 'rgba(0,0,0,0.6)',
      padding: '10px 24px',
      borderRadius: '30px',
      pointerEvents: 'none',
      fontSize: '1.1rem',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255,255,255,0.15)',
      transition: 'all 0.3s',
      opacity: target ? 1 : 0.4,
      zIndex: 10,
    }}>
      {target ? `🔍 Press E to interact with ${target}` : 'Explore SumaiyaVerse'}
    </div>
  )
}