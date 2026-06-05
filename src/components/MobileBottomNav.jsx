import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'

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

function MobileBottomNavInner() {
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
        zIndex: 9999,
        background: '#00305b',
        borderTop: '2px solid #377dbd',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        display: 'flex',
        alignItems: 'stretch',
        /* Force GPU compositing — fixes iOS Safari scroll jank */
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      {/* DISPATCH APP */}
      <a
        href="https://23.pepdekker.com"
        target="_blank"
        rel="noopener noreferrer"
        style={base}
        onTouchStart={e => { e.currentTarget.style.background = '#377dbd' }}
        onTouchEnd={e => { e.currentTarget.style.background = 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#377dbd' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
      >
        <span style={{ fontSize: '20px', lineHeight: 1 }}>⚓</span>
        <BtnLabel>Dispatch App</BtnLabel>
      </a>

      <div style={{ width: '1px', background: 'rgba(55,125,189,0.4)', margin: '12px 0', flexShrink: 0 }} />

      {/* WORK BOARD */}
      <a
        href="http://ilwu23.com/?screen=2"
        target="_blank"
        rel="noopener noreferrer"
        style={base}
        onTouchStart={e => { e.currentTarget.style.background = '#377dbd' }}
        onTouchEnd={e => { e.currentTarget.style.background = 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#377dbd' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
      >
        <span style={{ fontSize: '20px', lineHeight: 1 }}>📋</span>
        <BtnLabel>Work Board</BtnLabel>
      </a>

      <div style={{ width: '1px', background: 'rgba(55,125,189,0.4)', margin: '12px 0', flexShrink: 0 }} />

      {/* MEMBER HUB */}
      <Link
        to="/member-hub"
        style={{
          ...base,
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

// Portal renders directly into <body>, bypassing any flex/transform ancestor
// that can break position:fixed on iOS Safari
export default function MobileBottomNav() {
  return createPortal(<MobileBottomNavInner />, document.body)
}
