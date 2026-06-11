import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'

const base = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  minHeight: '64px',
  textDecoration: 'none',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  transition: 'background 0.12s',
}

function BtnLabel({ children }) {
  return (
    <span style={{
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
      color: '#ffffff',
      fontSize: '9px',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      lineHeight: 1,
    }}>
      {children}
    </span>
  )
}

const divider = (
  <div style={{ width: '1px', background: 'rgba(55,125,189,0.4)', margin: '12px 0', flexShrink: 0 }} />
)

function MobileBottomNavInner() {
  const { pathname, search } = useLocation()
  const shift = new URLSearchParams(search).get('shift')
  const onBoard = pathname === '/board'

  const externalBtn = (href, icon, label) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={base}
      onTouchStart={e => { e.currentTarget.style.background = '#377dbd' }}
      onTouchEnd={e => { e.currentTarget.style.background = 'transparent' }}
      onMouseEnter={e => { e.currentTarget.style.background = '#377dbd' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
    >
      <span style={{ fontSize: '18px', lineHeight: 1 }}>{icon}</span>
      <BtnLabel>{label}</BtnLabel>
    </a>
  )

  const internalBtn = (to, icon, label, active) => (
    <Link
      to={to}
      style={{ ...base, background: active ? '#377dbd' : 'transparent' }}
      onTouchStart={e => { e.currentTarget.style.background = '#377dbd' }}
      onTouchEnd={e => { e.currentTarget.style.background = active ? '#377dbd' : 'transparent' }}
      onMouseEnter={e => { e.currentTarget.style.background = '#377dbd' }}
      onMouseLeave={e => { e.currentTarget.style.background = active ? '#377dbd' : 'transparent' }}
    >
      <span style={{ fontSize: '18px', lineHeight: 1 }}>{icon}</span>
      <BtnLabel>{label}</BtnLabel>
    </Link>
  )

  return (
    <nav
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#00305b',
        borderTop: '2px solid #377dbd',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        display: 'flex',
        alignItems: 'stretch',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      {externalBtn('https://checkmyspins.com', '⚓', 'Dispatch App')}
      {divider}
      {internalBtn('/board?shift=day',   '☀️', 'Day Work',   onBoard && shift === 'day')}
      {divider}
      {internalBtn('/board?shift=night', '🌙', 'Night Work', onBoard && (shift === 'night' || !shift))}
      {divider}
      {internalBtn('/member-hub', '☰', 'Member Hub', pathname === '/member-hub')}
    </nav>
  )
}

export default function MobileBottomNav() {
  return createPortal(<MobileBottomNavInner />, document.body)
}
