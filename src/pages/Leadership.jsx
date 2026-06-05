const officers = [
  { name: 'Jared Faker',  title: 'President',          phone: '(253) 572-0220', email: 'president@ilwu23.com',     bio: 'Leads Local 23 contract enforcement, member representation, and the fight against terminal automation at the Port of Tacoma.' },
  { name: 'Brock Graber', title: 'Vice President',      phone: '(253) 572-0220', email: 'vicepresident@ilwu23.com', bio: 'Supports the president, leads key committees, and coordinates member outreach and operational matters with PMA.' },
  { name: 'Conrad Spell', title: 'Secretary-Treasurer', phone: '(253) 572-0220', email: 'secretary@ilwu23.com',     bio: 'Manages Local 23 finances, meeting minutes, membership records, and official correspondence with the International.' },
  { name: 'Wyatt Ellis',  title: 'Sergeant-at-Arms',   phone: '(253) 572-0220', email: 'soa@ilwu23.com',           bio: 'Maintains order at union meetings, oversees hall access, and assists in member safety and security matters.' },
]

const lrc    = [{ name: 'TBA', role: 'LRC Representative' }, { name: 'TBA', role: 'LRC Representative' }, { name: 'TBA', role: 'LRC Alternate' }, { name: 'TBA', role: 'LRC Alternate' }]
const safety = [{ name: 'TBA', role: 'Safety Committee Chair' }, { name: 'TBA', role: 'Safety Committee Member' }, { name: 'TBA', role: 'Safety Committee Member' }]

export default function Leadership() {
  return (
    <div className="font-body">

      {/* Header */}
      <section className="texture-dots" style={{ background: '#00305b', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow mb-3">Executive Officers</span>
          <h1 className="font-display text-white uppercase leading-none mb-4" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            Leadership
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl">
            Your elected officers work for you. Every shift, every grievance, every negotiation.
          </p>
        </div>
      </section>

      {/* Officer cards */}
      <section style={{ background: '#F7F6F2', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {officers.map(o => (
              <div
                key={o.name}
                className="flex flex-col transition-shadow hover:shadow-lg"
                style={{
                  background: '#00305b',
                  borderTop: '3px solid #377dbd',
                  padding: '1.75rem',
                }}
              >
                {/* Avatar placeholder */}
                <div
                  className="flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    width: '4rem', height: '4rem', borderRadius: '50%',
                    background: 'rgba(55,125,189,0.15)',
                    border: '2px solid rgba(55,125,189,0.35)',
                  }}
                >
                  <svg className="w-8 h-8" style={{ color: 'rgba(55,125,189,0.5)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <h3 className="font-body font-bold text-white text-lg leading-tight mb-1">{o.name}</h3>
                <p className="font-display uppercase tracking-widest mb-4" style={{ color: '#377dbd', fontSize: '0.7rem' }}>{o.title}</p>
                <p className="text-white/50 font-body text-sm leading-relaxed flex-1 mb-5">{o.bio}</p>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  <a href={`tel:${o.phone.replace(/[^0-9]/g,'')}`}
                    className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-[#fff216]"
                    style={{ color: '#F7F6F2', opacity: 0.7, fontSize: '0.8125rem' }}>
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#377dbd' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {o.phone}
                  </a>
                  <a href={`mailto:${o.email}`}
                    className="flex items-center gap-2 font-mono transition-colors hover:text-[#fff216] break-all"
                    style={{ color: '#F7F6F2', opacity: 0.7, fontSize: '0.7rem' }}>
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#377dbd' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* LRC & Safety - cream */}
      <section style={{ background: '#F7F6F2', padding: '4rem 0', borderTop: '1px solid #E8E5DC' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <span className="yellow-rule" style={{ background: '#00305b' }} />
              <p className="font-display uppercase tracking-widest text-sm mb-3" style={{ color: '#377dbd' }}>Dispatch &amp; Labor Relations</p>
              <h2 className="font-display uppercase leading-none mb-5" style={{ color: '#00305b', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>LRC Representatives</h2>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: '#0F0F0F', opacity: 0.65 }}>
                The Joint Labor Relations Committee resolves dispatch disputes, work assignment issues, and day-to-day contract administration between Local 23 and PMA.
              </p>
              <div className="space-y-2">
                {lrc.map((m, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3.5" style={{ background: '#ffffff', border: '1px solid #E8E5DC' }}>
                    <span className="font-body font-semibold" style={{ color: '#00305b' }}>{m.name}</span>
                    <span className="font-body text-xs uppercase tracking-wider" style={{ color: '#0F0F0F', opacity: 0.4 }}>{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="yellow-rule" style={{ background: '#00305b' }} />
              <p className="font-display uppercase tracking-widest text-sm mb-3" style={{ color: '#377dbd' }}>Member Safety</p>
              <h2 className="font-display uppercase leading-none mb-5" style={{ color: '#00305b', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Safety Committee</h2>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: '#0F0F0F', opacity: 0.65 }}>
                The Safety Committee investigates accidents, conducts inspections, and advocates for hazard elimination on the docks. Report unsafe conditions immediately.
              </p>
              <div className="space-y-2 mb-5">
                {safety.map((m, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3.5" style={{ background: '#ffffff', border: '1px solid #E8E5DC' }}>
                    <span className="font-body font-semibold" style={{ color: '#00305b' }}>{m.name}</span>
                    <span className="font-body text-xs uppercase tracking-wider" style={{ color: '#0F0F0F', opacity: 0.4 }}>{m.role}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(0,48,91,0.06)', border: '1px solid rgba(0,48,91,0.15)', padding: '1.25rem' }}>
                <p className="font-body font-bold text-sm mb-1" style={{ color: '#00305b' }}>Report a Safety Concern</p>
                <p className="font-body text-sm" style={{ color: '#0F0F0F', opacity: 0.65 }}>
                  Contact any officer at <a href="tel:+12535720220" className="font-mono font-semibold transition-colors" style={{ color: '#00305b' }}>(253) 572-0220</a>. Do not work unsafe conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
