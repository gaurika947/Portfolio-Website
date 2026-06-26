'use client'

import { motion } from 'framer-motion'

const icons = ['💻', '🤖', '⚡', '🌐']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-14 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Open source contributor + Web Developer
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Building Intelligent Solutions with Code, Creativity & AI
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            B.Tech Computer Science student specializing in Artificial Intelligence, passionate about building interactive web applications, AI-powered solutions and solving real-world problems through technology.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700">
              View Projects
            </a>
            <a href="/Gaurika resume.pdf" className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50">
              Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Connect With Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto flex h-[520px] w-full max-w-xl items-center justify-center rounded-[40px] border border-emerald-100 bg-white/80 p-8 shadow-glow backdrop-blur-xl"
        >
          <div className="absolute inset-x-0 top-8 mx-auto h-24 w-24 rounded-full bg-emerald-100/80 blur-2xl" />
          <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-emerald-600/15 blur-3xl" />

          <div className="relative flex h-full w-full items-center justify-center rounded-[32px] border border-slate-200 bg-slate-50/80 p-6 shadow-xl">
            <div className="absolute inset-0 rounded-[32px] border border-emerald-200/40" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4">
              <div className="relative flex h-60 w-60 items-center justify-center rounded-full border-4 border-emerald-300/70 bg-gradient-to-br from-emerald-100 via-white to-slate-100 shadow-[0_0_80px_rgba(16,185,129,0.15)]">
                <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white shadow-2xl overflow-hidden">
                  <img
                    src="/profile.jpeg?v=2"
                    alt="Gaurika Pandey"
                    className="h-full w-full object-cover scale-110"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-slate-950">Gaurika Pandey</h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">AI Enthusiast • Frontend Developer • Problem Solver</p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-8 top-12 hidden flex-col gap-3 sm:flex">
            {icons.map((icon, index) => (
              <motion.div
                key={icon}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/95 text-lg shadow-xl shadow-slate-200"
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
