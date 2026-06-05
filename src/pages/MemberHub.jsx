const memberCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'PMA Work Calendar',
    desc: 'View dispatch schedules, holidays, and PMA calendar events.',
    href: 'https://www.pmaw.org',
    ext: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    label: 'Payroll Self Service',
    desc: 'Access your pay stubs, earnings history, and W-2 forms.',
    href: 'https://www.pmaw.org',
    ext: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Vacation List — A Register',
    desc: 'View current A Register vacation list and selections.',
    href: 'https://www.ilwu23.com',
    ext: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Vacation List — B Register',
    desc: 'View current B Register vacation list and selections.',
    href: 'https://www.ilwu23.com',
    ext: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: 'Medical Benefits',
    desc: 'ILWU-PMA Welfare Plan — coverage, claims, and provider info.',
    href: 'https://www.ilwu-pmabenefits.org',
    ext: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
    label: 'Day Work Board',
    desc: 'View the current day shift dispatch board.',
    href: 'https://www.ilwu23.com/?screen=2',
    ext: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    label: 'Night Work Board',
    desc: 'View the current night shift dispatch board.',
    href: 'https://www.ilwu23.com/?screen=1',
    ext: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Dispatch App',
    desc: 'Mobile dispatch app — register, check status, get notifications.',
    href: '#',
    ext: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'Coast Longshore Agreement',
    desc: 'Full text of the ILWU-PMA Pacific Coast Longshore Contract.',
    href: 'https://www.ilwu.org',
    ext: true,
  },
]

export default function MemberHub() {
  return (
    <div className="font-body min-h-screen bg-ilwu-black">
      {/* Header */}
      <section
        className="pt-28 pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.85) 0%, rgba(15,15,15,1) 100%), url('https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1400&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Members Only</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">Member Hub</h1>
          <p className="text-white/60 font-body text-lg max-w-2xl">
            Direct access to work boards, payroll, benefits, dispatch tools, and your contract. Everything you need, one place.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {memberCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.ext ? '_blank' : undefined}
                rel={card.ext ? 'noopener noreferrer' : undefined}
                className="group border border-white/10 hover:border-ilwu-red/50 bg-white/3 hover:bg-white/6 p-6 flex flex-col gap-4 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-ilwu-red/10 group-hover:bg-ilwu-red/20 flex items-center justify-center text-ilwu-red transition-colors">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-body font-bold text-white text-base group-hover:text-ilwu-red transition-colors leading-snug">
                      {card.label}
                    </h3>
                    {card.ext && (
                      <svg className="w-4 h-4 text-white/30 group-hover:text-ilwu-red/60 flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                  <p className="text-white/50 text-sm font-body mt-1.5 leading-relaxed">{card.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-t border-white/10 py-12 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 font-body text-sm mb-2">Need help? Contact the dispatch hall.</p>
          <a href="tel:+12535720220" className="font-display text-white text-3xl tracking-wide hover:text-ilwu-red transition-colors">
            (253) 572-0220
          </a>
          <p className="text-white/40 font-body text-xs mt-2 uppercase tracking-wider">3600 Port of Tacoma Rd, Tacoma WA 98424</p>
        </div>
      </section>
    </div>
  )
}
