import { motion as Motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Interactive skill matrix for modern product engineering"
          subtitle="Hover and scan by domain: backend architecture, frontend craft, data systems, and cloud operations."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <Motion.article
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-card"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
