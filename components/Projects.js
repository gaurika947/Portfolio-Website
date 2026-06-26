'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Career Compass',
    description: 'An AI-powered career assistant that analyzes resumes, improves ATS compatibility and suggests suitable internships according to user skills and profile.',
    features: ['Resume ATS optimization', 'Resume analysis', 'Internship recommendation', 'Career guidance'],
    technologies: ['React', 'AI', 'APIs', 'Resume Processing'],
    url: 'https://carrer-compass-ruddy.vercel.app/'
  },
  {
    name: 'Personal Portfolio Website',
    description: 'A modern interactive portfolio website showcasing my skills, projects, achievements and developer journey.',
    features: ['Interactive portfolio', 'Modern UI', 'Project showcase', 'Smooth animations'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    url: '/' 
  }
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Premium product-focused web projects.</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className="group relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600" />
              <div className="relative space-y-6 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-700">Featured Project</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">{project.name}</h3>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-50 text-2xl shadow-sm">★</span>
                </div>
                <p className="text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 shadow-sm">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <div className="mt-6">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-700">View Project</a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
