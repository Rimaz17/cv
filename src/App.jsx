import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ParallaxBackdrop from './components/ParallaxBackdrop'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'

function App() {
  const [auroraMode, setAuroraMode] = useState(false)

  useEffect(() => {
    const target = 'rimaz'
    let buffer = ''

    const onKeyDown = (event) => {
      buffer = (buffer + event.key.toLowerCase()).slice(-target.length)
      if (buffer === target) {
        setAuroraMode((prev) => !prev)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className={auroraMode ? 'aurora-on' : ''}>
      <ScrollProgress />
      <CursorGlow />
      <ParallaxBackdrop />
      <Navbar />

      <Motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </Motion.main>
    </div>
  )
}

export default App
