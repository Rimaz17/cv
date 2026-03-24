import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Case-study projects with measurable engineering outcomes"
          subtitle="Each build focused on speed, reliability, and practical impact over demo-only aesthetics."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]">
                <div className="mb-4 inline-flex w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">
                  Featured Build
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.impact}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-200 hover:text-cyan-100">
                    <FiGithub /> GitHub
                  </a>
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-200 hover:text-indigo-100">
                      <FiExternalLink /> Live
                    </a>
                  ) : null}
                </div>

                <button
                  type="button"
                  className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  onClick={() => setActiveProject(project)}
                >
                  View Engineering Notes
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <Motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-3xl border border-white/10 bg-slate-900/95 p-7"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Project Spotlight</p>
              <h4 className="mt-2 text-3xl font-semibold text-white">{activeProject.title}</h4>
              <p className="mt-4 text-slate-300">{activeProject.impact}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {activeProject.highlights.map((point) => (
                  <li key={point} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    {point}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-7 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-300/20"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
            </Motion.div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
