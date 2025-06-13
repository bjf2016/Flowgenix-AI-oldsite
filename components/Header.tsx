import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    if (href.startsWith('/#')) {
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerHeight = 140
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    } border-b border-charcoal-700`} style={{ backgroundColor: '#212629' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="logo">
            <Link href="/">
              <Image
                src="/flowgenix-ai-logo-sm.png?v=2.0.0"
                alt="Flowgenix AI"
                width={300}
                height={120}
                className="w-[300px] h-auto"
                style={{ width: '300px', height: 'auto' }}
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-primary-600 hover:text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-primary-600"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-primary-600 hover:text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-primary-600"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden flex flex-col w-6 h-6 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 my-1 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <nav className="bg-charcoal-800 rounded-lg shadow-lg border border-charcoal-600 p-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left text-primary-600 hover:text-white font-medium px-4 py-3 rounded-lg transition-colors duration-300 hover:bg-primary-600"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-primary-600 hover:text-white font-medium px-4 py-3 rounded-lg transition-colors duration-300 hover:bg-primary-600"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header