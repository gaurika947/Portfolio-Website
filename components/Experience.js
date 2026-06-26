'use client'

import { motion } from 'framer-motion'

const experience = {
  title: 'Web Development & Blender 3D Modeling Intern',
  company: 'Sutrachit Technologies Private Limited',
  duration: 'July 2026 – Present',
  description: 'Selected as a Web Development & Blender 3D Modeling Intern, working on modern web experiences while exploring creative 3D workflows and interactive digital solutions.',
  responsibilities: [
    'Developing modern responsive web interfaces',
    'Working on frontend development tasks',
    'Improving user experience and interface design',
    'Creating clean and interactive UI components',
    'Exploring Blender 3D modeling workflows',
    'Combining technology and creativity for digital experiences',
    'Collaborating on real-world development projects'
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Blender 3D']
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200/80 bg-slate-50/80 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Professional timeline with a creative tech edge.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-white p-8 shadow-glow"
        >
          <div className="absolute left-9 top-10 h-full w-1 rounded-full bg-emerald-200/70" />
          <div className="absolute left-6 top-10 h-5 w-5 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
          <div className="relative ml-14 grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="space-y-4">
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">{experience.duration}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{experience.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{experience.company}</p>
              </div>
              <p className="text-sm leading-7 text-slate-600">{experience.description}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {experience.responsibilities.map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 shadow-sm">
                    • {item}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="rounded-[20px] border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">GSSoC'26</p>
                  <h4 className="mt-2 text-lg font-semibold text-slate-950">Contributor</h4>
                  <p className="mt-1 text-sm text-slate-600">Contributed to open-source projects as part of Girlscript Summer of Code 2026, collaborating on features, bug fixes, and documentation.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-4">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-2xl shadow-md">🏢</span>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Technologies</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">Frontend + 3D</p>
                </div>
              </div>
              <div className="space-y-3">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        {/* GSSoC'26 timeline card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.06 }}
          className="relative mt-8 overflow-hidden rounded-[36px] border border-slate-200/80 bg-white p-8 shadow-glow"
        >
          <div className="absolute left-9 top-10 h-full w-1 rounded-full bg-emerald-200/70" />
          <div className="absolute left-6 top-10 h-5 w-5 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
          <div className="relative ml-14 grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="space-y-4">
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Summer 2026</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">GSSoC'26 — Contributor</h3>
                <p className="mt-2 text-sm text-slate-600">Contributed to open-source projects as part of Girlscript Summer of Code 2026, collaborating on features, bug fixes, and documentation.</p>
              </div>
              <p className="text-sm leading-7 text-slate-600">Participated in community-driven development, worked with maintainers, and delivered production-ready contributions to improve project stability and features.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Implemented feature enhancements',
                  'Fixed critical bugs and improved tests',
                  'Authored documentation and onboarding guides'
                ].map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 shadow-sm">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-4">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-2xl shadow-md">🌱</span>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Focus</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">Open Source</p>
                </div>
              </div>
              <div className="space-y-3">
                {['Git', 'Open Source', 'Collaboration'].map((tech) => (
                  <span key={tech} className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
