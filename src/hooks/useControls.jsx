import { useEffect, useRef } from 'react'

export function useControls() {
  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    run: false,
    jump: false,
    interact: false
  })

  useEffect(() => {
    const down = (e) => {
      switch (e.code) {
        case 'KeyW': keys.current.forward = true; break
        case 'KeyS': keys.current.backward = true; break
        case 'KeyA': keys.current.left = true; break
        case 'KeyD': keys.current.right = true; break
        case 'ShiftLeft': keys.current.run = true; break
        case 'Space': e.preventDefault(); keys.current.jump = true; break
        case 'KeyE': keys.current.interact = true; break
        default: break
      }
    }
    const up = (e) => {
      switch (e.code) {
        case 'KeyW': keys.current.forward = false; break
        case 'KeyS': keys.current.backward = false; break
        case 'KeyA': keys.current.left = false; break
        case 'KeyD': keys.current.right = false; break
        case 'ShiftLeft': keys.current.run = false; break
        case 'Space': keys.current.jump = false; break
        case 'KeyE': keys.current.interact = false; break
        default: break
      }
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  return keys.current
}