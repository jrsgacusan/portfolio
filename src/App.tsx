import { useState, useEffect } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Timeline from './sections/Timeline'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Reveal from './components/Reveal'
import ChatWidget from './components/ChatWidget'
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
      <div
        className="fixed top-0 left-0 right-0 z-60 h-[2px]  backdrop-blur-sm pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-linear-to-r from-cyan-400 via-primary-500 to-indigo-500 shadow-[0_0_12px_rgba(14,165,233,0.9)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Header isScrolled={isScrolled} />
      <main id="main">
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
      <ChatWidget
        src="https://jrsgacusan-portfolio-chat.hf.space"
        width={850}
        height={850}
        buttonLabel="Open chat"
        panelLabel="Chat"
      />
    </div>
  )
}

export default App
