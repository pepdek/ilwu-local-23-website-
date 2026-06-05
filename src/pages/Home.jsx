import { useState } from 'react'
import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown'

const DISPATCH_APP = 'https://23.pepdekker.com'
const PETITION_URL = 'https://actionnetwork.org/petitions/husky-ai?source=direct_link&'

const dates = [
  { day: '12', month: 'JUN', label: 'Pull Date',                    desc: 'Check your dispatch status'             },
  { day: '18', month: 'JUN', label: 'Stop Work Meeting',            desc: 'All members required to attend'         },
  { day: '05', month: 'JUL', label: 'Bloody Thursday',              desc: 'Annual commemoration · Spanaway Lake Park' },
  { day: '19', month: 'JUL', label: "Pat Casey's Celebration of Life", desc: 'Owen Beach Pavilion · 1:00 – 3:00 pm · Point Defiance' },
]

function ShareButton() {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(window.location.origin + '/#petition').then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      onClick={copy}
      className="btn-ghost-white"
      style={{ fontSize: '0.8125rem' }}
    >
      {copied ? 'Link Copied!' : 'Share with Your Crew'}
    </button>
  )
}

export default function Home() {
  return (
    <div className="font-body">

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{ height: '100vh', minHeight: '600px' }}
      >
        {/* Background photo */}
        <div
          className="hero-bg absolute inset-0"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
          }}
        />
        {/* Gradient — two layers: bottom-to-top for text, subtle left panel for headline zone */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              'linear-gradient(to right, rgba(0,48,91,0.30) 0%, transparent 55%)',
              'linear-gradient(to top, rgba(0,48,91,0.88) 0%, rgba(0,48,91,0.42) 28%, rgba(0,48,91,0.06) 58%, transparent 85%)',
            ].join(', '),
          }}
        />

        {/* Content — bottom-left on desktop, top on mobile */}
        <div
          className="hero-content relative z-10 flex flex-col justify-end h-full"
          style={{ padding: '0 10% 8% 10%' }}
        >
          <Countdown />

          <h1
            className="font-display text-white uppercase leading-none"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5rem)',
              maxWidth: '800px',
              marginBottom: '0.75rem',
            }}
          >
            An Injury to One<br />Is an Injury to All
          </h1>

          <p
            className="font-body"
            style={{ color: '#ffffff', fontSize: '1.0625rem', marginBottom: '2rem', fontWeight: 500 }}
          >
            ILWU Local 23 · Port of Tacoma · Since 1934
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/member-hub" className="btn-yellow">Member Hub</Link>
            <Link to="/history"    className="btn-ghost-white">Our History</Link>
          </div>
        </div>
      </section>

      {/* ─── PETITION ─── */}
      <section id="petition" className="bg-[#00305b] texture-dots" style={{ padding: '6rem 10%' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-5">Action Alert</span>
              <h2
                className="font-display text-white uppercase leading-none"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem' }}
              >
                Protect<br />Our Jobs.
              </h2>
              <p className="text-white/75 font-body leading-relaxed mb-4" style={{ fontSize: '1.0625rem' }}>
                Automation threatens to eliminate hundreds of longshore jobs at Husky Terminal in Tacoma.
                This isn't a future problem - it's happening now.
              </p>
              <p className="text-white/75 font-body leading-relaxed mb-8" style={{ fontSize: '1.0625rem' }}>
                The ILWU has fought automation since the 1960s because we know what it costs: livelihoods,
                families, and communities. Sign the petition. Make your voice heard.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://actionnetwork.org/petitions/husky-ai?source=direct_link&" target="_blank" rel="noopener noreferrer" className="btn-yellow">
                  Sign the Petition
                </a>
                <ShareButton />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { n: '~800',  l: 'Jobs threatened',              d: 'Full automation at Husky Terminal would eliminate hundreds of A and B register positions.' },
                { n: '$65K+', l: 'Average annual longshore wage', d: 'Middle-class careers with full benefits - the kind that support families and communities.' },
                { n: '1960s', l: 'ILWU first pushed back',        d: "The M&M Agreement proved automation doesn't mean abandonment. We've been here before." },
              ].map(s => (
                <div
                  key={s.n}
                  className="border border-[#377dbd]/30 hover:border-[#377dbd]/70 transition-colors"
                  style={{ padding: '1.25rem 1.5rem', background: 'rgba(55,125,189,0.08)' }}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-display leading-none" style={{ color: '#fff216', fontSize: '2.5rem' }}>{s.n}</span>
                    <span className="font-body font-semibold text-white/65 text-xs uppercase tracking-wider">{s.l}</span>
                  </div>
                  <p className="text-white/45 font-body text-sm leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING DATES ─── */}
      <section style={{ background: '#F7F6F2', padding: '5rem 10%' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="eyebrow" style={{ color: '#00305b', marginBottom: '0.5rem' }}>Calendar</span>
            <h2 className="font-display uppercase leading-none" style={{ color: '#00305b', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              Upcoming Dates
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dates.map((d, i) => (
              <div
                key={i}
                className="texture-dots-dark flex flex-col p-6 gap-3"
                style={{ background: '#377dbd' }}
              >
                <div>
                  <span className="font-display text-white leading-none" style={{ fontSize: '4rem' }}>{d.day}</span>
                  <div className="font-mono text-[#fff216] text-xs tracking-widest uppercase mt-0.5">{d.month}</div>
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-base mb-1">{d.label}</h3>
                  <p className="text-white/60 text-sm font-body">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IN MEMORIAM ─── */}
      <section className="bg-[#00305b]" style={{ padding: '5rem 10%' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="eyebrow" style={{ letterSpacing: '0.25em', marginBottom: '0.75rem' }}>In Memoriam</span>
            <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              In Memory of Our Brothers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'David Bartholomew', body: 'A dedicated member of ILWU Local 23. We honor his service and his family.' },
              { name: 'Marco Hernando',    body: 'A proud longshore worker and union brother. His memory lives on in the work we do together.' },
            ].map(m => (
              <div
                key={m.name}
                style={{ background: 'rgba(55,125,189,0.1)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem' }}
              >
                <span className="yellow-rule" />
                <h3 className="font-display text-white uppercase tracking-wide" style={{ fontSize: '2rem', marginBottom: '0.35rem' }}>
                  {m.name}
                </h3>
                <p className="font-display uppercase tracking-widest mb-4" style={{ color: '#fff216', fontSize: '0.7rem' }}>
                  ILWU Local 23
                </p>
                <p className="text-white/60 font-body text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBER RESOURCES ─── */}
      <section
        className="texture-dots"
        style={{ background: '#00305b', padding: '5rem 10%', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="eyebrow mb-2">For Members</span>
            <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              Member Resources
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: '/member-hub',  icon: '⚓', label: 'Member Hub'   },
              { to: '/your-rights', icon: '✊', label: 'Your Rights'  },
              { to: '/news',        icon: '📣', label: 'News & Alerts'},
              { to: '/leadership',  icon: '👷', label: 'Leadership'   },
            ].map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex flex-col items-center gap-3 text-center transition-all duration-200"
                style={{
                  border: '1px solid rgba(55,125,189,0.35)',
                  background: 'rgba(55,125,189,0.08)',
                  padding: '1.5rem 1rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(55,125,189,0.22)'; e.currentTarget.style.borderColor = 'rgba(55,125,189,0.7)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(55,125,189,0.08)'; e.currentTarget.style.borderColor = 'rgba(55,125,189,0.35)' }}
              >
                <span className="text-3xl">{l.icon}</span>
                <span className="font-body font-bold text-white text-xs uppercase tracking-wider">
                  {l.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
