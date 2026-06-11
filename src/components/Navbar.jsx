import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/',            label: 'Home'        },
  { to: '/news',        label: 'News'        },
  { to: '/board',       label: 'Work Board'  },
  { to: '/your-rights', label: 'Your Rights' },
  { to: '/leadership',  label: 'Leadership'  },
  { to: '/history',     label: 'History'     },
  { to: '/contact',     label: 'Contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen]  = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const solid = scrolled || !isHome

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: solid ? '#00305b' : 'transparent',
          boxShadow: solid ? '0 2px 20px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <img src="/ilwu-logo.avif" alt="ILWU" className="w-9 h-9 object-contain" />
              <div className="flex flex-col leading-none">
                <span
                  className="font-display tracking-widest text-white"
                  style={{ fontSize: '1.125rem', letterSpacing: '0.2em' }}
                >
                  ILWU
                </span>
                <span
                  className="font-body font-semibold uppercase text-white/60 group-hover:text-white transition-colors"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.18em' }}
                >
                  Local 23
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-body font-semibold uppercase text-xs tracking-widest transition-colors duration-150 ${
                      isActive
                        ? 'text-[#fff216]'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/member-hub" className="btn-yellow ml-2" style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}>
                Member Hub
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 text-white"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className="absolute top-0 right-0 h-full w-full"
          style={{
            backgroundColor: '#00305b',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '100vw',
          }}
        >
          <div className="flex flex-col h-full pt-20 px-8 pb-10">
            <div className="flex flex-col gap-1">
              {navLinks.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-body font-semibold uppercase tracking-widest py-4 border-b border-white/10 text-base transition-colors ${
                      isActive ? 'text-[#fff216]' : 'text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/member-hub"
                className="btn-yellow mt-8"
                style={{ justifyContent: 'center' }}
              >
                Member Hub
              </Link>
            </div>
            <div className="mt-auto flex items-center gap-3">
              <img src="/ilwu-logo.avif" alt="ILWU" className="w-10 h-10 object-contain" />
              <div>
                <div className="font-display text-white text-base tracking-widest">ILWU LOCAL 23</div>
                <div className="text-white/40 text-xs font-body">Port of Tacoma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
