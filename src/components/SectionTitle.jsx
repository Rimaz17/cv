import { motion as Motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-slate-300/90">{subtitle}</p> : null}
    </Motion.div>
  )
}
