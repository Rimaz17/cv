import { motion as Motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24 })

  return (
    <Motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"
    />
  )
}
