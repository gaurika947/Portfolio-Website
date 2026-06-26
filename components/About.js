'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="border-t border-slate-200/80 bg-slate-50/80 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">About Me</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Crafting modern digital experiences with AI and frontend code.</h2>
          </div>
          <div className="max-w-xl text-sm leading-7 text-slate-600">
            <p>
              I am a Computer Science Engineering student at Pranveer Singh Institute Of Technology, Kanpur, India, specializing in Artificial Intelligence. I enjoy developing modern web applications, exploring AI technologies, solving programming challenges and designing user-friendly digital experiences.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            'AI',
            'Web Development',
            'UI/UX Design',
            'Data Structures & Algorithms',
            'Continuous learning'
          ].map((item) => (
            <div key={item} className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
