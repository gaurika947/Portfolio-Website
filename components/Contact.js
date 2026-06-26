'use client'

import { motion } from 'framer-motion'

const contacts = [
  {
    label: 'Email',
    value: 'gaurikapandey6457@gmail.com',
    href: 'mailto:gaurikapandey6457@gmail.com'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gaurika-pandey-524170380',
    href: 'https://www.linkedin.com/in/gaurika-pandey-524170380'
  },
  {
    label: 'GitHub',
    value: 'github.com/gaurika947',
    href: 'https://github.com/gaurika947'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-slate-200/80 bg-white p-10 shadow-glow">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Let&apos;s build the next intelligent product together.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Reach out for internships, collaborative AI projects or frontend development opportunities.
            </p>
          </div>
          <div className="space-y-4">
            {contacts.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.value}</p>
                </div>
                <span className="text-emerald-700">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
