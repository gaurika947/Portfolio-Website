import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Journey from '../components/Journey'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="bg-white text-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-emerald-radial" />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
