import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function ILWULogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-label="ILWU Logo" role="img">
      {/* Gold circle */}
      <circle cx="20" cy="20" r="20" fill="#F5C400" />
      {/* Simplified North America silhouette */}
      <path
        d="M8,17 L9,11 L13,7 L18,6 L23,6 L28,9 L32,13 L33,18 L31,22 L33,26 L29,31 L24,34 L20,35 L16,33 L13,28 L10,22 Z"
        fill="#1B3A6B"
      />
      {/* Alaska peninsula bump */}
      <path d="M8,17 L5,15 L6,11 L9,12 Z" fill="#1B3A6B" />
      {/* Florida/SE bump */}
      <path d="M33,22 L35,24 L34,27 L31,25 Z" fill="#1B3A6B" />
      {/* ILWU text */}
      <text
        x="20" y="24"
        textAnchor="middle"
        fill="white"
        fontWeight="800"
        fontSize="7.5"
        fontFamily="'DM Sans', Arial Black, Arial, sans-serif"
        letterSpacing="0.8"
      >
        ILWU
      </text>
    </svg>
  )
}

const aboutLinks = [
  { to: '/leadership', label: 'Leadership' },
  { to: '/history',    label: 'History'    },
  { to: '/contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false); setAboutOpen(false) }, [location])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-body font-semibold uppercase tracking-widest transition-colors duration-150 ${
      isActive ? 'text-ilwu-gold' : 'text-white hover:text-ilwu-gold'
    }`

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-ilwu-navy shadow-xl' : 'bg-ilwu-navy/97'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <ILWULogo size={40} />
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-xl tracking-widest">ILWU</span>
              <span className="font-body text-ilwu-gold font-semibold text-[10px] uppercase tracking-[0.2em]">Local 23</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/"           className={linkClass}>Home</NavLink>
            <NavLink to="/member-hub" className={linkClass}>Member Hub</NavLink>
            <NavLink to="/news"       className={linkClass}>News</NavLink>
            <NavLink to="/your-rights" className={linkClass}>Your Rights</NavLink>

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="text-sm font-body font-semibold uppercase tracking-widest text-white hover:text-ilwu-gold transition-colors flex items-center gap-1"
              >
                About
                <svg className={`w-3 h-3 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-ilwu-navy border border-white/10 shadow-2xl">
                  {aboutLinks.map(l => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm font-body font-semibold uppercase tracking-widest border-b border-white/5 last:border-0 transition-colors ${
                          isActive ? 'text-ilwu-gold bg-white/5' : 'text-white hover:text-ilwu-gold hover:bg-white/5'
                        }`
                      }
                    >
                      {l.label}
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
            {menuOpen
              ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ilwu-navy border-t border-white/10">
          <div className="px-4 py-2 flex flex-col">
            {[
              { to: '/',            label: 'Home'        },
              { to: '/member-hub',  label: 'Member Hub'  },
              { to: '/news',        label: 'News'        },
              { to: '/your-rights', label: 'Your Rights' },
              { to: '/leadership',  label: 'Leadership'  },
              { to: '/history',     label: 'History'     },
              { to: '/contact',     label: 'Contact'     },
            ].map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `py-3 border-b border-white/10 text-sm font-body font-semibold uppercase tracking-widest transition-colors ${
                    isActive ? 'text-ilwu-gold' : 'text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
