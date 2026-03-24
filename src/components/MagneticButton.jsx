import { motion as Motion } from 'framer-motion'
import { useRef } from 'react'

export default function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * 0.16}px, ${y * 0.22}px)`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <Motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
      className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </Motion.button>
  )
}
