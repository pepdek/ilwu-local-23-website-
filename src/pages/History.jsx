const timeline = [
  { year: '1934',      title: 'West Coast Waterfront Strike',      body: 'In May 1934, 35,000 West Coast longshoremen walked off the docks. They were striking for union recognition, hiring hall control, and a six-hour workday. Workers held the line for 83 days through intimidation, violence, and starvation wages - because they had no other choice.' },
  { year: 'Jul 5 1934', title: 'Bloody Thursday',                   body: 'San Francisco police and National Guardsmen attacked striking longshoremen on the Embarcadero. Six workers were killed. Dozens were wounded. The response was not retreat - it was a city-wide General Strike that shut down San Francisco for four days.' },
  { year: '1937',      title: 'ILWU Chartered',                    body: 'Harry Bridges led the 1934 strike and fought federal deportation attempts for decades. When the ILA failed to honor the gains workers had won, Bridges and West Coast workers broke away to form the ILWU. Local 23 was chartered to represent longshore workers at the Port of Tacoma.' },
  { year: '1950s',     title: 'Automation Fight Begins',           body: "Containerization transformed the waterfront. The ILWU negotiated the Mechanization and Modernization Agreement - a landmark deal that proved automation doesn't have to mean abandonment. Workers can negotiate the terms." },
  { year: '1971',      title: 'Coastwide Strike',                  body: 'The 1971-72 coastwide work stoppage lasted 134 days. Workers held out against shipping companies trying to claw back mechanization protections. The resulting agreement secured unprecedented job security provisions. Every time the ILWU has held the line, it has won.' },
  { year: '2002',      title: 'Port Lockout',                      body: "PMA locked out ILWU workers at ports across the West Coast for 11 days. President Bush invoked the Taft-Hartley Act. The lockout cost the national economy an estimated $1 billion per day. Power is knowing what you're worth." },
  { year: '2014-15',   title: 'Contract Negotiations',             body: "A nine-month negotiation between ILWU and PMA tested the patience of workers and the economy alike. The eventual contract reflected the ILWU's leverage - but underscored the constant pressure employers place on waterfront workers. Vigilance never ends." },
  { year: '2026',      title: 'Husky Terminal Automation Fight',   body: "SSA Marine is moving to fully automate Husky Terminal at the Port of Tacoma. This is the same fight the ILWU has been fighting since the 1950s - technology used not to improve work but to eliminate workers. Local 23 is fighting it the same way it has fought everything else: together, loud, and without apology." },
]

export default function History() {
  return (
    <div className="font-body">

      {/* Hero - navy with ghost logo */}
      <section
        className="texture-dots relative overflow-hidden"
        style={{ background: '#00305b', paddingTop: '8rem', paddingBottom: '5rem' }}
      >
        <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none" style={{ width: '40vw', maxWidth: '400px' }}>
          <img src="/ilwu-logo.avif" alt="" className="w-full object-contain" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow mb-4">Where We Come From</span>
          <h1
            className="font-display text-white uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', maxWidth: '800px' }}
          >
            We Didn't Ask<br />For Rights.<br />
            <span style={{ color: '#fff216' }}>We Fought For Them.</span>
          </h1>
          <p className="text-white/60 font-body leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem' }}>
            The wage, the benefits, the safety rules, the grievance procedure - none of it was given.
            Every right you have was taken, at great cost, by the workers who came before you.
          </p>
        </div>
      </section>

      {/* Timeline — alternating dark/light */}
      {timeline.map((item, i) => {
        const isDark = i % 2 === 0
        return (
          <section
            key={i}
            className={isDark ? 'texture-dots' : ''}
            style={{
              background: isDark ? '#00305b' : '#F7F6F2',
              padding: '5rem 0',
              borderTop: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid #E8E5DC',
            }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
                {/* Year — huge */}
                <div>
                  <div
                    className="font-display uppercase leading-none"
                    style={{
                      fontSize: 'clamp(4rem, 9vw, 6rem)',
                      color: isDark ? '#fff216' : '#00305b',
                      lineHeight: 0.9,
                    }}
                  >
                    {item.year}
                  </div>
                </div>
                {/* Content */}
                <div>
                  <h2
                    className="font-display uppercase leading-tight mb-4"
                    style={{
                      color: isDark ? '#ffffff' : '#00305b',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    }}
                  >
                    {item.title}
                  </h2>

                  {/* Placeholder block instead of photo */}
                  <div
                    className={`w-full mb-5 flex items-center justify-center relative overflow-hidden ${isDark ? 'texture-lines' : 'texture-dots-dark'}`}
                    style={{
                      height: '140px',
                      background: isDark ? 'rgba(55,125,189,0.12)' : '#00305b',
                      border: isDark ? '1px solid rgba(55,125,189,0.25)' : 'none',
                    }}
                  >
                    <span
                      className="font-display uppercase select-none absolute"
                      style={{
                        fontSize: 'clamp(4rem, 12vw, 8rem)',
                        color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(55,125,189,0.2)',
                        lineHeight: 1,
                      }}
                    >
                      {item.year.replace('Jul 5 ', '').split('-')[0]}
                    </span>
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span style={{ display: 'block', width: '2rem', height: '2px', background: '#fff216' }} />
                      <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(55,125,189,0.5)' }}>
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <p
                    className="font-body leading-relaxed"
                    style={{
                      color: isDark ? 'rgba(255,255,255,0.7)' : '#0F0F0F',
                      opacity: isDark ? 1 : 0.75,
                      fontSize: '1rem',
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Closing — blue (30%) */}
      <section className="texture-dots-dark" style={{ background: '#377dbd', padding: '5rem 0' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span className="yellow-rule" style={{ margin: '0 auto 2rem' }} />
          <h2 className="font-display text-white uppercase leading-none mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
            The Fight Isn't Over.<br /><span style={{ color: '#fff216' }}>It Never Was.</span>
          </h2>
          <p className="text-white/70 font-body leading-relaxed mb-8 mx-auto" style={{ fontSize: '1.0625rem', maxWidth: '36rem' }}>
            Every generation of longshore workers has faced the same fight in different clothes.
            Every generation has held the line. Ours will too.
          </p>
          <p className="font-display text-white/40 uppercase tracking-widest" style={{ fontSize: '1.5rem' }}>
            An Injury to One Is an Injury to All.
          </p>
        </div>
      </section>
    </div>
  )
}
