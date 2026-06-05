const officers = [
  { name: 'Jared Faker',  title: 'President',          phone: '(253) 572-0220', email: 'president@ilwu23.com',     bio: 'Leads Local 23 contract enforcement, member representation, and the fight against terminal automation at the Port of Tacoma.' },
  { name: 'Brock Graber', title: 'Vice President',      phone: '(253) 572-0220', email: 'vicepresident@ilwu23.com', bio: 'Supports the president, leads key committees, and coordinates member outreach and operational matters with PMA.' },
  { name: 'Conrad Spell', title: 'Secretary-Treasurer', phone: '(253) 572-0220', email: 'secretary@ilwu23.com',     bio: 'Manages Local 23 finances, meeting minutes, membership records, and official correspondence with the International.' },
  { name: 'Wyatt Ellis',  title: 'Sergeant-at-Arms',   phone: '(253) 572-0220', email: 'soa@ilwu23.com',           bio: 'Maintains order at union meetings, oversees hall access, and assists in member safety and security matters.' },
]

const lrc = [
  { name: 'TBA', role: 'LRC Representative' },
  { name: 'TBA', role: 'LRC Representative' },
  { name: 'TBA', role: 'LRC Alternate'      },
  { name: 'TBA', role: 'LRC Alternate'      },
]

const safety = [
  { name: 'TBA', role: 'Safety Committee Chair'  },
  { name: 'TBA', role: 'Safety Committee Member' },
  { name: 'TBA', role: 'Safety Committee Member' },
]

export default function Leadership() {
  return (
    <div className="font-body min-h-screen bg-ilwu-bg">

      {/* Header - 60% navy */}
      <section className="pt-28 pb-16 bg-ilwu-navy pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Executive Officers</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">Leadership</h1>
          <p className="text-white/60 font-body text-lg max-w-xl">
            Your elected officers work for you. Every shift, every grievance, every negotiation.
          </p>
        </div>
      </section>

      {/* Officer cards - 10% light bg */}
      <section className="py-16 bg-white border-b border-ilwu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {officers.map(o => (
              <div key={o.name} className="bg-ilwu-navy border-t-4 border-ilwu-gold flex flex-col p-6 gap-4 shadow-sm hover:shadow-md transition-shadow">
                {/* Placeholder circle */}
                <div className="w-16 h-16 rounded-full bg-ilwu-gold/12 border-2 border-ilwu-gold/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-ilwu-gold/45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-lg leading-tight">{o.name}</h3>
                  <p className="font-display text-ilwu-gold tracking-widest text-xs uppercase mt-1">{o.title}</p>
                </div>
                <p className="text-white/50 text-sm font-body leading-relaxed flex-1">{o.bio}</p>
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <a href={`tel:${o.phone.replace(/[^0-9]/g,'')}`}
                    className="flex items-center gap-2 text-white/50 hover:text-ilwu-gold text-sm font-mono transition-colors">
                    <svg className="w-3.5 h-3.5 text-ilwu-gold/45 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {o.phone}
                  </a>
                  <a href={`mailto:${o.email}`}
                    className="flex items-center gap-2 text-white/50 hover:text-ilwu-gold text-xs font-mono transition-colors break-all">
                    <svg className="w-3.5 h-3.5 text-ilwu-gold/45 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {o.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LRC & Safety - light bg */}
      <section className="py-16 bg-ilwu-bg border-b border-ilwu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="w-10 h-1 bg-ilwu-navy mb-4" />
              <p className="font-display text-ilwu-navy tracking-[0.2em] text-xs uppercase mb-3">Dispatch &amp; Labor Relations</p>
              <h2 className="font-display text-ilwu-navy text-3xl sm:text-4xl uppercase leading-none mb-5">LRC Representatives</h2>
              <p className="text-ilwu-dark/60 font-body text-sm leading-relaxed mb-6">
                The Joint Labor Relations Committee resolves dispatch disputes, work assignment issues, and day-to-day contract administration between Local 23 and PMA.
              </p>
              <div className="space-y-2">
                {lrc.map((m, i) => (
                  <div key={i} className="border border-ilwu-border bg-white px-5 py-3.5 flex items-center justify-between hover:border-ilwu-blue/40 transition-colors">
                    <span className="font-body font-semibold text-ilwu-navy">{m.name}</span>
                    <span className="text-ilwu-dark/40 text-xs font-body uppercase tracking-wider">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="w-10 h-1 bg-ilwu-navy mb-4" />
              <p className="font-display text-ilwu-navy tracking-[0.2em] text-xs uppercase mb-3">Member Safety</p>
              <h2 className="font-display text-ilwu-navy text-3xl sm:text-4xl uppercase leading-none mb-5">Safety Committee</h2>
              <p className="text-ilwu-dark/60 font-body text-sm leading-relaxed mb-6">
                The Safety Committee investigates accidents, conducts inspections, and advocates for hazard elimination on the docks. Report unsafe conditions immediately.
              </p>
              <div className="space-y-2 mb-5">
                {safety.map((m, i) => (
                  <div key={i} className="border border-ilwu-border bg-white px-5 py-3.5 flex items-center justify-between hover:border-ilwu-blue/40 transition-colors">
                    <span className="font-body font-semibold text-ilwu-navy">{m.name}</span>
                    <span className="text-ilwu-dark/40 text-xs font-body uppercase tracking-wider">{m.role}</span>
                  </div>
                ))}
              </div>
              <div className="border border-ilwu-navy/20 bg-ilwu-navy/5 p-4">
                <p className="font-body font-bold text-ilwu-navy text-sm mb-1">Report a Safety Concern</p>
                <p className="text-ilwu-dark/60 text-sm font-body">
                  Contact any officer at <a href="tel:+12535720220" className="font-mono text-ilwu-navy font-semibold hover:text-ilwu-blue transition-colors">(253) 572-0220</a>. Do not work unsafe conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
