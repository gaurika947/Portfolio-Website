'use client'

import { motion } from 'framer-motion'

const achievements = [
  {
    category: 'LeetCode',
    items: ['Completed 100+ problems', 'Maintained consistent problem-solving practice', 'Regular coding progress']
  },
  {
    category: 'HackerRank',
    items: ['5 Star Golden Badge in Python', '3 Star Silver Badge in Problem Solving']
  },
  {
    category: 'Academic',
    items: ['B.Tech CSE AI specialization', 'Strong foundation in programming and development', 'Runner-up — College Hackathon']
  }
  ,
  {
    category: 'Certificates',
    items: ['CS50P – Introduction to Programming with Python (Harvard University)']
  }
  ,
  {
    category: 'Hackathon',
    items: ['Runner-up — College-level Hackathon: Protech']
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-slate-200/80 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Achievements</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Milestones from coding, AI and academic progress.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">{achievement.category}</p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                {achievement.items.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
