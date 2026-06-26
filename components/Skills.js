'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'C++', 'C', 'JavaScript']
  },
  {
    title: 'Frontend Development',
    items: ['HTML', 'CSS', 'React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Blender']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">A curated skill set for web, AI and design.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Modern technologies, data-driven AI systems and polished frontend frameworks for product-ready web solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
            >
              <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
              <div className="mt-5 space-y-3">
                {group.items.map((skill) => (
                  <div key={skill} className="rounded-3xl bg-slate-50 p-4 text-sm font-medium text-slate-700 shadow-sm transition group-hover:bg-emerald-50">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
