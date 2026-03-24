import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { person } from '../data/portfolioData'
import MagneticButton from './MagneticButton'

const rotatingWords = ['distributed backends', 'cloud-ready APIs', 'startup-grade products']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-center">
        <Motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200/90"
        >
          Full-Stack Developer / Backend Depth
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I build scalable systems and
          <span className="ml-2 inline-block bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
            high-impact software.
          </span>
        </Motion.h1>

        <div className="mt-6 h-12 text-lg font-medium text-slate-300 sm:text-2xl">
          <span className="mr-2 text-slate-400">Focused on</span>
          <AnimatePresence mode="wait">
            <Motion.span
              key={rotatingWords[wordIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="inline-block bg-gradient-to-r from-cyan-200 to-indigo-200 bg-clip-text text-transparent"
            >
              {rotatingWords[wordIndex]}
            </Motion.span>
          </AnimatePresence>
          <span className="typing-caret" />
        </div>

        <Motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-slate-300/90 sm:text-lg"
        >
          {person.subHeadline}
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects">
            <MagneticButton className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-cyan-100">
              View Projects <FiArrowRight />
            </MagneticButton>
          </a>
          <a href={person.cvPath} download="Rimaz_Saththar_CV.pdf">
            <MagneticButton className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white hover:bg-white/15">
              Download CV <FiDownload />
            </MagneticButton>
          </a>
        </Motion.div>
      </div>
    </section>
  )
}
