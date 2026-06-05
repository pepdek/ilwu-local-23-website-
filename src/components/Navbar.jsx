import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const aboutLinks = [
  { to: '/leadership', label: 'Leadership' },
  { to: '/history', label: 'History' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setAboutOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `text-sm font-body font-semibold uppercase tracking-widest transition-colors duration-150 ${
      isActive ? 'text-ilwu-red' : 'text-white hover:text-ilwu-red'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ilwu-black shadow-lg' : 'bg-ilwu-black/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 bg-ilwu-red flex items-center justify-center">
              <span className="font-display text-white text-xs leading-none">23</span>
            </div>
            <span className="font-display text-white text-xl tracking-widest leading-none">
              ILWU LOCAL 23
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/member-hub" className={navLinkClass}>Member Hub</NavLink>
            <NavLink to="/news" className={navLinkClass}>News</NavLink>
            <NavLink to="/your-rights" className={navLinkClass}>Your Rights</NavLink>

            {/* About Dropdown */}
            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button
                className="text-sm font-body font-semibold uppercase tracking-widest text-white hover:text-ilwu-red transition-colors duration-150 flex items-center gap-1"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About
                <svg className={`w-3 h-3 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-ilwu-black border border-white/10 shadow-xl">
                  {aboutLinks.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm font-body font-semibold uppercase tracking-widest border-b border-white/5 last:border-0 transition-colors ${
                          isActive ? 'text-ilwu-red bg-white/5' : 'text-white hover:text-ilwu-red hover:bg-white/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ilwu-black border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-0">
            {[
              { to: '/', label: 'Home' },
              { to: '/member-hub', label: 'Member Hub' },
              { to: '/news', label: 'News' },
              { to: '/your-rights', label: 'Your Rights' },
              { to: '/leadership', label: 'Leadership' },
              { to: '/history', label: 'History' },
              { to: '/contact', label: 'Contact' },
            ].map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-3 border-b border-white/10 text-sm font-body font-semibold uppercase tracking-widest transition-colors ${
                    isActive ? 'text-ilwu-red' : 'text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
