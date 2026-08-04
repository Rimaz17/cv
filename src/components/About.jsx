import { motion as Motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="Engineering with range, depth, and product urgency"
          subtitle="I focus on building reliable systems while delivering experiences that feel fast, intentional, and polished"
        />

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid gap-4 md:grid-cols-3"
        >
          <article className="glass-card md:col-span-2">
            <h3 className="mb-4 text-2xl font-semibold text-white">full-stack execution</h3>
            <p className="text-slate-300">
              I am a Computer Science undergraduate who co-founded a venture-backed startup while building production
              systems across Spring Boot, Node.js, Python and more. I architect multi-portal platforms, real-time APIs, and
              cloud-native infrastructure — then ship them end-to-end with the discipline of a QA engineer.
            </p>
          </article>
          <article className="glass-card">
            <h3 className="mb-3 text-lg font-semibold text-white">Quick Snapshot</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Co-Founder & Tech Lead at QuickBrix — 3-portal marketplace, team of 4, pre-seed fundraising</li>
              <li>500+ verified bugs across Facebook, Instagram, Canva and more</li>
              <li>Diamond-tier QA tester, top 3 in ~90% of active projects including Facebook, Instagram, and Canva</li>
              <li>Multi-stack engineer: Spring Boot · Node.js · Python · Flutter · React</li>
            </ul>
          </article>
        </Motion.div>
      </div>
    </section>
  )
}
