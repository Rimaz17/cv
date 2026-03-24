import { motion as Motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="Engineering with range, depth, and product urgency"
          subtitle="I focus on backend reliability first, while still shipping frontend experiences that feel intentional and fast."
        />

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid gap-4 md:grid-cols-3"
        >
          <article className="glass-card md:col-span-2">
            <h3 className="mb-4 text-2xl font-semibold text-white">Backend-first builder, full-stack execution</h3>
            <p className="text-slate-300">
              I am a Computer Science undergraduate who designs systems for scale, observability, and maintainability.
              My strongest work lives in Node.js and Python ecosystems where I architect APIs, data flows, and caching
              strategies that survive real usage.
            </p>
          </article>
          <article className="glass-card">
            <h3 className="mb-3 text-lg font-semibold text-white">Quick Snapshot</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Startup engineering leadership at QuickBrix</li>
              <li>500+ validated bug discoveries in QA, including Facebook, Instagram, and Canva</li>
              <li>Diamond-tier ranking performance</li>
              <li>Strong backend stack with cloud deployment focus</li>
            </ul>
          </article>
        </Motion.div>
      </div>
    </section>
  )
}
