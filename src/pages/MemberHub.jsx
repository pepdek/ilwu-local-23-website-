const cards = [
  { icon: '📅', label: 'PMA Calendar',          desc: 'Dispatch schedules, holidays, and PMA work calendar.',        href: 'https://www.pmaw.org',                ext: true  },
  { icon: '💳', label: 'Payroll Self Service',   desc: 'Pay stubs, earnings history, and W-2 forms.',                 href: 'https://www.pmaw.org',                ext: true  },
  { icon: '📋', label: 'Vacation List - A Class', desc: 'Current A Register vacation list and selections.',            href: 'https://www.ilwu23.com',              ext: true  },
  { icon: '📋', label: 'Vacation List - B Class', desc: 'Current B Register vacation list and selections.',            href: 'https://www.ilwu23.com',              ext: true  },
  { icon: '🏥', label: 'Medical Benefits',        desc: 'ILWU-PMA Welfare Plan - coverage, claims, providers.',        href: 'https://www.ilwu-pmabenefits.org',    ext: true  },
  { icon: '☀️', label: 'Day Work Board',          desc: 'Current day shift dispatch board.',                           href: 'https://www.ilwu23.com/?screen=2',    ext: true  },
  { icon: '🌙', label: 'Night Work Board',        desc: 'Current night shift dispatch board.',                         href: 'https://www.ilwu23.com/?screen=1',    ext: true  },
  { icon: '📱', label: 'Dispatch App',            desc: 'Mobile dispatch - register, check status, get notifications.', href: '#',                                  ext: false },
  { icon: '📄', label: 'ILWU Coast Agreement',    desc: 'Full text of the Pacific Coast Longshore Contract.',          href: 'https://www.ilwu.org',                ext: true  },
]

export default function MemberHub() {
  return (
    <div className="font-body" style={{ background: '#F7F6F2', minHeight: '100vh' }}>

      {/* Header */}
      <section
        className="texture-dots"
        style={{ background: '#00305b', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-5">
            <img src="/ilwu-logo.avif" alt="ILWU" className="w-10 h-10 object-contain opacity-90" />
            <span className="eyebrow">Members Only</span>
          </div>
          <h1
            className="font-display text-white uppercase leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
          >
            Member Hub
          </h1>
          <p className="text-white/60 font-body text-lg max-w-lg">
            Everything you need, in one place. No hunting through dropdowns.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.ext ? '_blank' : undefined}
                rel={c.ext ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-4 transition-all duration-200"
                style={{
                  background: '#00305b',
                  border: '1px solid rgba(55,125,189,0.4)',
                  padding: '1.5rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#377dbd'
                  e.currentTarget.style.borderColor = '#377dbd'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#00305b'
                  e.currentTarget.style.borderColor = 'rgba(55,125,189,0.4)'
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span style={{ color: '#fff216', fontSize: '1.75rem', lineHeight: 1 }}>{c.icon}</span>
                  {c.ext && (
                    <svg className="w-3.5 h-3.5 text-white/25 group-hover:text-white/70 mt-1 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-body font-bold text-white text-base leading-snug mb-1.5">{c.label}</h3>
                  <p className="text-white/55 text-sm font-body leading-relaxed">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call strip */}
      <section
        className="texture-dots-dark"
        style={{ background: '#377dbd', padding: '3.5rem 10%' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 font-body text-sm mb-2">Need help? Contact the dispatch hall.</p>
          <a href="tel:+12535720220" className="font-mono text-white hover:text-[#fff216] transition-colors" style={{ fontSize: '2rem', letterSpacing: '0.05em' }}>
            (253) 572-0220
          </a>
          <p className="text-white/35 font-body text-xs mt-2 uppercase tracking-wider">3600 Port of Tacoma Rd · Tacoma WA 98424 · Mon-Fri 8am-4pm</p>
        </div>
      </section>
    </div>
  )
}
