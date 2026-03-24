import { motion as Motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackdrop() {
  const { scrollY } = useScroll()
  const driftA = useTransform(scrollY, [0, 1800], [0, -220])
  const driftB = useTransform(scrollY, [0, 1800], [0, 180])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Motion.div
        style={{ y: driftA }}
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"
      />
      <Motion.div
        style={{ y: driftB }}
        className="absolute right-[-6rem] top-[22rem] h-96 w-96 rounded-full bg-indigo-300/10 blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.10),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.4)_1px,transparent_1px)] [background-size:42px_42px]" />
    </div>
  )
}
