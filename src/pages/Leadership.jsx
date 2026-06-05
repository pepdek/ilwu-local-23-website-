const officers = [
  {
    name: 'Jared Faker',
    title: 'President',
    phone: '(253) 572-0220',
    email: 'president@ilwu23.com',
    bio: 'As president of Local 23, Jared leads contract enforcement, member representation, and the fight against terminal automation at the Port of Tacoma.',
  },
  {
    name: 'Brock Graber',
    title: 'Vice President',
    phone: '(253) 572-0220',
    email: 'vicepresident@ilwu23.com',
    bio: 'Brock supports the president and leads key committees, member outreach, and coordinates with PMA on operational matters.',
  },
  {
    name: 'Conrad Spell',
    title: 'Secretary-Treasurer',
    phone: '(253) 572-0220',
    email: 'secretary@ilwu23.com',
    bio: 'Conrad manages Local 23 finances, meeting minutes, membership records, and official correspondence with the International.',
  },
  {
    name: 'Wyatt Ellis',
    title: 'Sergeant-at-Arms',
    phone: '(253) 572-0220',
    email: 'soa@ilwu23.com',
    bio: 'Wyatt maintains order at union meetings, oversees hall access, and assists in member safety and security matters.',
  },
]

const lrcMembers = [
  { name: 'TBA', role: 'LRC Representative' },
  { name: 'TBA', role: 'LRC Representative' },
  { name: 'TBA', role: 'LRC Alternate' },
  { name: 'TBA', role: 'LRC Alternate' },
]

const safetyCommittee = [
  { name: 'TBA', role: 'Safety Committee Chair' },
  { name: 'TBA', role: 'Safety Committee Member' },
  { name: 'TBA', role: 'Safety Committee Member' },
]

export default function Leadership() {
  return (
    <div className="font-body min-h-screen bg-ilwu-black">
      {/* Header */}
      <section
        className="pt-28 pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.80) 0%, rgba(15,15,15,1) 100%), url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Executive Officers</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">Leadership</h1>
          <p className="text-white/60 font-body text-lg max-w-2xl">
            Your elected officers serve at your direction. They work for the members — every shift, every grievance, every negotiation.
          </p>
        </div>
      </section>

      {/* Officer Cards */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.map(officer => (
              <div key={officer.name} className="border border-white/10 hover:border-ilwu-red/40 bg-white/3 transition-colors p-6 flex flex-col gap-4">
                {/* Photo placeholder */}
                <div className="w-20 h-20 rounded-full bg-ilwu-red/10 border-2 border-ilwu-red/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-ilwu-red/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-xl leading-tight">{officer.name}</h3>
                  <p className="font-display text-ilwu-red tracking-widest text-xs uppercase mt-1">{officer.title}</p>
                </div>
                <p className="text-white/55 text-sm font-body leading-relaxed flex-1">{officer.bio}</p>
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <a
                    href={`tel:${officer.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-body transition-colors"
                  >
                    <svg className="w-4 h-4 text-ilwu-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {officer.phone}
                  </a>
                  <a
                    href={`mailto:${officer.email}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-body transition-colors break-all"
                  >
                    <svg className="w-4 h-4 text-ilwu-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {officer.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LRC & Safety Committee */}
      <section className="py-16 bg-white/2 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LRC */}
            <div>
              <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Dispatch & Labor Relations</p>
              <h2 className="font-display text-white text-3xl sm:text-4xl uppercase leading-none mb-6">LRC Representatives</h2>
              <p className="text-white/55 font-body text-sm leading-relaxed mb-6">
                The Joint Labor Relations Committee (LRC) resolves dispatch disputes, work assignment issues, and day-to-day contract administration between Local 23 and PMA. LRC reps are your first line on the waterfront.
              </p>
              <div className="space-y-3">
                {lrcMembers.map((m, i) => (
                  <div key={i} className="border border-white/10 px-5 py-4 bg-ilwu-black flex items-center justify-between">
                    <span className="font-body font-semibold text-white">{m.name}</span>
                    <span className="text-white/45 text-xs font-body uppercase tracking-wider">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Committee */}
            <div>
              <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Member Safety</p>
              <h2 className="font-display text-white text-3xl sm:text-4xl uppercase leading-none mb-6">Safety Committee</h2>
              <p className="text-white/55 font-body text-sm leading-relaxed mb-6">
                The Safety Committee investigates accidents, conducts safety inspections, and advocates for hazard elimination on the docks. If you see an unsafe condition, report it to the Safety Committee immediately.
              </p>
              <div className="space-y-3 mb-6">
                {safetyCommittee.map((m, i) => (
                  <div key={i} className="border border-white/10 px-5 py-4 bg-ilwu-black flex items-center justify-between">
                    <span className="font-body font-semibold text-white">{m.name}</span>
                    <span className="text-white/45 text-xs font-body uppercase tracking-wider">{m.role}</span>
                  </div>
                ))}
              </div>
              <div className="border border-ilwu-red/30 bg-ilwu-red/5 p-4">
                <p className="text-white/80 text-sm font-body font-semibold mb-1">Report a Safety Concern</p>
                <p className="text-white/55 text-sm font-body">Contact the Safety Committee or any officer at <a href="tel:+12535720220" className="text-ilwu-red hover:underline">(253) 572-0220</a>. Do not work unsafe conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
