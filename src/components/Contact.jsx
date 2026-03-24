import { motion as Motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { person } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let us build something that survives scale"
          subtitle="Available for internships, backend-heavy product roles, and startup engineering collaborations."
        />

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-3"
        >
          <a href={`mailto:${person.email}`} className="contact-tile">
            <FiMail className="text-xl text-cyan-200" />
            <span>{person.email}</span>
          </a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="contact-tile">
            <FiLinkedin className="text-xl text-cyan-200" />
            <span>LinkedIn</span>
          </a>
          <a href={person.github} target="_blank" rel="noreferrer" className="contact-tile">
            <FiGithub className="text-xl text-cyan-200" />
            <span>GitHub</span>
          </a>
        </Motion.div>
      </div>
    </section>
  )
}
