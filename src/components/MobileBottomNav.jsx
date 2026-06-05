import { Link, useLocation } from 'react-router-dom'

const base = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  height: '100%',
  textDecoration: 'none',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  transition: 'background 0.1s',
}

function BtnLabel({ children }) {
  return (
    <span
      style={{
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 600,
        color: '#ffffff',
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  )
}

export default function MobileBottomNav() {
  const { pathname } = useLocation()
  const hubActive = pathname === '/member-hub'

  return (
    <nav
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#00305b',
        borderTop: '2px solid #377dbd',
        /* Total height = 64px content + safe area for home indicator */
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        display: 'flex',
        height: 'auto',
        minHeight: '64px',
      }}
    >
      {/* DISPATCH */}
      <a
        href="https://23.pepdekker.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...base, minHeight: '64px' }}
        onTouchStart={e => { e.currentTarget.style.background = '#377dbd' }}
        onTouchEnd={e => { e.currentTarget.style.background = 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#377dbd' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
      >
        <span style={{ fontSize: '20px', lineHeight: 1 }}>⚓</span>
        <BtnLabel>Dispatch</BtnLabel>
      </a>

      {/* Divider */}
      <div style={{ width: '1px', background: 'rgba(55,125,189,0.4)', margin: '12px 0' }} />

      {/* WORK BOARD */}
      <a
        href="http://ilwu23.com/?screen=2"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...base, minHeight: '64px' }}
        onTouchStart={e => { e.currentTarget.style.background = '#377dbd' }}
        onTouchEnd={e => { e.currentTarget.style.background = 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#377dbd' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
      >
        <span style={{ fontSize: '20px', lineHeight: 1 }}>📋</span>
        <BtnLabel>Work Board</BtnLabel>
      </a>

      {/* Divider */}
      <div style={{ width: '1px', background: 'rgba(55,125,189,0.4)', margin: '12px 0' }} />

      {/* MEMBER HUB */}
      <Link
        to="/member-hub"
        style={{
          ...base,
          minHeight: '64px',
          background: hubActive ? '#377dbd' : 'transparent',
        }}
        onTouchStart={e => { e.currentTarget.style.background = '#377dbd' }}
        onTouchEnd={e => { e.currentTarget.style.background = hubActive ? '#377dbd' : 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#377dbd' }}
        onMouseLeave={e => { e.currentTarget.style.background = hubActive ? '#377dbd' : 'transparent' }}
      >
        <span style={{ fontSize: '20px', lineHeight: 1 }}>☰</span>
        <BtnLabel>Member Hub</BtnLabel>
      </Link>
    </nav>
  )
}
