'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = items.map((item) => document.querySelector(item.href))
      const current = sections.reduce((closest, section, index) => {
        if (!section) return closest
        const offset = Math.abs(section.getBoundingClientRect().top)
        return offset < closest.offset ? { href: items[index].href, offset } : closest
      }, { href: active, offset: Infinity })
      setActive(current.href)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`sticky top-0 z-50 mx-auto w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-glow' : ''}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-xl font-semibold text-slate-950">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-200/50">G</span>
          <span className="hidden sm:inline">Gaurika Pandey</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${active === item.href ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-700'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
          Connect
        </a>
      </div>
    </motion.header>
  )
}
