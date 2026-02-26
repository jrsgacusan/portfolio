import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import { timelineData } from './data/timelineData'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight <= 0) {
        setScrollProgress(0)
        return
      }

      const progress = Math.min((scrollTop / scrollHeight) * 100, 100)
      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-60 h-[2px]  backdrop-blur-sm pointer-events-none">
        <div
          className="h-full bg-linear-to-r from-cyan-400 via-primary-500 to-indigo-500 shadow-[0_0_12px_rgba(14,165,233,0.9)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal delayMs={70}>
          <Timeline data={timelineData} />
        </Reveal>
        <Reveal delayMs={120}>
          <Projects />
        </Reveal>
        <Reveal delayMs={170}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
