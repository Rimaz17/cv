import { motion as Motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorGlow() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const glowX = useSpring(cursorX, { stiffness: 160, damping: 20, mass: 0.5 })
  const glowY = useSpring(cursorY, { stiffness: 160, damping: 20, mass: 0.5 })

  useEffect(() => {
    const onMove = (event) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [cursorX, cursorY])

  return (
    <>
      <Motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 md:block"
      />
      <Motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl md:block"
      />
    </>
  )
}
