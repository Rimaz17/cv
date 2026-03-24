import { motion as Motion } from 'framer-motion'
import { achievements } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Achievements"
          title="Recognitions that reinforce engineering credibility"
          subtitle="A blend of ranking performance, precision QA output, and startup leadership ownership."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((item, index) => (
            <Motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur-lg"
            >
              <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-100">
                Spotlight
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
