'use client'

import { motion } from 'framer-motion'

const journeyItems = [
  {
    value: '100+',
    label: 'LeetCode Problems Solved'
  },
  {
    value: '5 Star',
    label: 'Python HackerRank Badge'
  },
  {
    value: '3 Star',
    label: 'Problem Solving HackerRank Badge'
  }
]

export default function Journey() {
  return (
    <section id="journey" className="bg-slate-50/80 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Coding Journey</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Developer metrics that tell your growth story.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-sm"
            >
              <p className="text-4xl font-semibold text-slate-950">{item.value}</p>
              <p className="mt-3 text-sm text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
