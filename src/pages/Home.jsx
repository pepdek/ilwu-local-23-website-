import { useState } from 'react'
import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown'

const dates = [
  { day: '12', month: 'JUN', label: 'Pull Date',         desc: 'Check your dispatch status',           tag: 'Alert'   },
  { day: '16', month: 'JUN', label: 'E-Board Meeting',   desc: 'Executive Board meeting, dispatch hall', tag: 'Meeting' },
  { day: '18', month: 'JUN', label: 'Stop Work Meeting', desc: 'Attendance required — all members',     tag: 'Meeting' },
]

const tagStyle = {
  Alert:   'bg-ilwu-gold text-ilwu-navy',
  Meeting: 'bg-white/15 text-white',
}

function ShareButton() {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(window.location.origin + '/#petition').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/70 hover:text-white text-sm font-body font-semibold uppercase tracking-widest px-5 py-3 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      {copied ? 'Link Copied!' : 'Share with Your Crew'}
    </button>
  )
}

export default function Home() {
  return (
    <div className="font-body">

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-ilwu-navy overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27,58,107,0.60) 0%, rgba(27,58,107,0.85) 60%, rgba(27,58,107,0.97) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
          <div className="max-w-4xl">
            <p className="section-label mb-6">ILWU Local 23 — Port of Tacoma</p>
            <h1 className="font-display text-white text-6xl sm:text-8xl lg:text-[6.5rem] leading-none uppercase mb-6">
              An Injury to One<br />
              <span className="text-ilwu-gold">Is an Injury</span><br />
              to All.
            </h1>
            <p className="text-white/75 text-lg sm:text-xl font-body font-light max-w-2xl mb-10 leading-relaxed">
              ILWU Local 23 — representing longshore workers at the Port of Tacoma since 1934.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/member-hub" className="btn-gold">Member Hub</Link>
              <Link to="/history"    className="underline underline-offset-4 text-white hover:text-ilwu-gold font-body font-semibold text-sm uppercase tracking-widest transition-colors self-center">
                Learn Our History →
              </Link>
            </div>
          </div>
        </div>

        {/* Countdown strip */}
        <div className="bg-ilwu-navy-dark/80 backdrop-blur border-t border-white/10 w-full py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
              <div className="flex-shrink-0">
                <p className="section-label mb-1">Bloody Thursday</p>
                <p className="font-display text-white text-2xl uppercase tracking-wide">July 5, 2026</p>
                <p className="text-white/50 text-xs font-body mt-1">Spanaway Lake Park</p>
              </div>
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOODY THURSDAY CONTEXT ─── */}
      <section className="bg-ilwu-dark py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="gold-rule" />
            <p className="text-white/80 font-body text-lg leading-relaxed">
              Join us as we honor the six workers killed on July 5, 1934 — the day that defined the ILWU
              and the American labor movement. This is our most important day of the year.
              All members, families, and supporters are welcome.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PETITION ─── */}
      <section id="petition" className="bg-ilwu-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">Action Alert</p>
              <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-none uppercase mb-6">
                Protect Our Jobs at<br /><span className="text-ilwu-gold">Husky Terminal</span>
              </h2>
              <p className="text-white/75 text-base font-body leading-relaxed mb-5">
                Automation threatens to eliminate hundreds of longshore jobs at Husky Terminal in Tacoma.
                This isn't a future problem — it's happening now. The ILWU has fought automation since
                the 1960s because we know what it costs: livelihoods, families, and communities.
              </p>
              <p className="text-white/75 text-base font-body leading-relaxed mb-8">
                Sign the petition. Make your voice heard.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ilwu.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Sign the Petition →
                </a>
                <ShareButton />
              </div>
            </div>

            <div className="space-y-4">
              {[
                { n: '~800',  l: 'Jobs directly threatened',     d: 'Full automation of Husky Terminal would eliminate hundreds of A and B register positions at the Port of Tacoma.' },
                { n: '$65K+', l: 'Average annual longshore wage', d: 'Middle-class careers with full benefits — the kind that support families and anchor communities.' },
                { n: '1960s', l: 'When the ILWU first pushed back', d: 'The Mechanization & Modernization Agreement proved that automation doesn\'t have to mean displacement. We\'ve been here before.' },
              ].map(s => (
                <div key={s.n} className="border border-white/15 p-5 bg-white/5 hover:bg-white/8 transition-colors">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-display text-ilwu-gold text-4xl leading-none">{s.n}</span>
                    <span className="text-white/70 font-body font-semibold text-xs uppercase tracking-wider">{s.l}</span>
                  </div>
                  <p className="text-white/50 text-sm font-body leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING DATES ─── */}
      <section className="bg-ilwu-bg py-20 border-t border-ilwu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="gold-rule" style={{ background: '#1B3A6B' }} />
            <p className="font-display text-ilwu-navy tracking-[0.2em] text-sm uppercase mb-2">Calendar</p>
            <h2 className="font-display text-ilwu-navy text-4xl sm:text-5xl uppercase">Upcoming Dates</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {dates.map((d, i) => (
              <div key={i} className="bg-ilwu-navy border border-ilwu-navy-dark p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-display text-ilwu-gold text-6xl leading-none">{d.day}</span>
                    <div className="font-mono text-white/50 text-sm tracking-widest uppercase mt-0.5">{d.month}</div>
                  </div>
                  <span className={`text-[10px] font-body font-bold uppercase tracking-wider px-2 py-1 ${tagStyle[d.tag]}`}>
                    {d.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-base mb-1">{d.label}</h3>
                  <p className="text-white/55 text-sm font-body">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IN MEMORIAM ─── */}
      <section className="bg-ilwu-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">In Memoriam</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase">In Memory of Our Brothers</h2>
            <p className="text-white/50 font-body text-sm mt-3 max-w-lg mx-auto">
              We carry their names. We honor their service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'David Bartholomew',
                body: 'A dedicated member of ILWU Local 23. We honor his service and his family.',
              },
              {
                name: 'Marco Hernando',
                body: 'A proud longshore worker and union brother. His memory lives on in the work we do together.',
              },
            ].map(m => (
              <div key={m.name} className="bg-ilwu-navy border border-white/10 p-8">
                <div className="w-16 h-1 bg-ilwu-gold mb-6" />
                <h3 className="font-display text-white text-3xl uppercase tracking-wide mb-3">{m.name}</h3>
                <p className="font-display text-ilwu-gold text-xs tracking-[0.2em] uppercase mb-4">ILWU Local 23</p>
                <p className="text-white/65 font-body text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBER QUICK LINKS ─── */}
      <section
        className="py-20 bg-ilwu-dark"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,15,15,0.96) 0%, rgba(15,15,15,0.85) 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-2">For Members</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase">Member Resources</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/member-hub',  icon: '⚓', label: 'Member Hub'   },
              { to: '/your-rights', icon: '✊', label: 'Your Rights'  },
              { to: '/news',        icon: '📣', label: 'News & Alerts'},
              { to: '/leadership',  icon: '👷', label: 'Leadership'   },
            ].map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="border border-white/10 hover:border-ilwu-gold/50 bg-white/5 hover:bg-ilwu-gold/10 p-6 flex flex-col items-center gap-3 text-center transition-all group"
              >
                <span className="text-3xl">{l.icon}</span>
                <span className="font-body font-bold text-white group-hover:text-ilwu-gold text-xs uppercase tracking-wider transition-colors">
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
