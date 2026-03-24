import { motion as Motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { navLinks, person } from '../data/portfolioData'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  return (
    <Motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
          <span className="text-sm font-semibold tracking-[0.14em] text-white/90">RIMAZ</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="story-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={person.cvPath} download="Rimaz_Saththar_CV.pdf" aria-label="Download CV">
          <MagneticButton className="inline-flex items-center gap-2 border border-cyan-300/40 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20">
            <FiDownload className="text-base" />
            Download CV
          </MagneticButton>
        </a>
      </div>
    </Motion.header>
  )
}
