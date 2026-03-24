import { motion as Motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="Execution track record across startup delivery and elite QA"
          subtitle="Built in fast-moving environments where engineering quality and product speed both matter."
        />

        <div className="relative ml-2 border-l border-white/15 pl-8">
          {experience.map((item, index) => (
            <Motion.article
              key={item.role}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="timeline-node relative mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.period}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="text-sm text-indigo-200">{item.company}</p>
              <p className="mt-3 text-slate-300">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {item.points.map((point) => (
                  <li key={point} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
