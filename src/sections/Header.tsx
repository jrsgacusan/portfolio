import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import Button from '../components/Button'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={e => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
          >
            Portfolio
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="list">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={e => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="md:hidden mt-4 pb-4" role="navigation" aria-label="Mobile menu">
            <ul className="flex flex-col space-y-4" role="list">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={e => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium block py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Header
