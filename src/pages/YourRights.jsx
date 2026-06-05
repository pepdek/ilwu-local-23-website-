const grievanceSteps = [
  { n: '01', title: 'Document It',           body: 'Write down dates, times, supervisors, witnesses, and exactly what happened - immediately. Memory fades. Details win grievances.' },
  { n: '02', title: 'Talk to Your BA',        body: 'Call the hall. Your Business Agent is your first call. They\'ll tell you if you have a grievable issue and walk you through next steps. Don\'t delay.' },
  { n: '03', title: 'File Within the Window', body: 'Most grievances must be filed within 10 days. Missing the deadline waives your right. When in doubt, file first and ask questions after.' },
  { n: '04', title: 'Step 1 - Local Level',   body: 'Your BA meets with the employer. Many grievances are resolved here. If not, the union advances the case.' },
  { n: '05', title: 'Step 2 - Area Panel',    body: 'Unresolved grievances go to a joint labor-management panel. An impartial arbitrator may hear the case at this level.' },
  { n: '06', title: 'What Happens Next',       body: 'Major contract disputes can reach Coast arbitration - binding, precedent-setting decisions that protect all West Coast longshore workers.' },
]

const progression = [
  {
    stage: 'Casual',
    border: 'border-white/20',
    accent: 'text-white/40',
    desc: 'Entry level. Work is on-call through the dispatch hall. Casuals work to demonstrate skill and reliability. No guaranteed hours. Focus on getting called - and showing up every time.',
  },
  {
    stage: 'B Man',
    border: 'border-ilwu-gold/60',
    accent: 'text-ilwu-gold',
    desc: 'B Register membership means more consistent work, union benefits, and seniority within the B list. You accumulate hours toward A promotion. Full union protections apply.',
  },
  {
    stage: 'A Man',
    border: 'border-white',
    accent: 'text-white',
    desc: 'Full A Register. Maximum seniority, top-priority dispatch, and access to all work opportunities. This is what you\'re working toward. The hall takes care of its own.',
  },
]

export default function YourRights() {
  return (
    <div className="font-body min-h-screen bg-ilwu-bg">

      {/* Header */}
      <section
        className="pt-28 pb-16 bg-ilwu-navy"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27,58,107,0.80) 0%, rgba(27,58,107,0.98) 100%), url('https://images.unsplash.com/photo-1590946083328-b2e38800e2b3?w=1400&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Know Your Contract</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">Your Rights</h1>
          <p className="text-white/65 font-body text-lg max-w-xl">
            You have rights on the job. Know them.
          </p>
        </div>
      </section>

      {/* Your Contract */}
      <section className="py-16 bg-white border-b border-ilwu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="gold-rule" style={{ background: '#1B3A6B' }} />
              <p className="font-display text-ilwu-navy tracking-[0.2em] text-sm uppercase mb-3">Your Contract</p>
              <h2 className="font-display text-ilwu-navy text-4xl sm:text-5xl uppercase leading-none mb-6">Plain Language CBA Summary</h2>
              <div className="space-y-4 text-ilwu-dark/70 font-body text-base leading-relaxed">
                <p>The Pacific Coast Longshore and Clerks' Agreement is negotiated between the ILWU and the Pacific Maritime Association (PMA). It covers wages, hours, working conditions, safety, dispatch, and grievance procedures for all West Coast longshore workers - including Local 23 at Tacoma.</p>
                <p>The contract guarantees base pay rates, premium pay for hazardous work, overtime, and shift differentials. No employer can unilaterally change your working conditions without bargaining through the union.</p>
                <p>Key protections: guaranteed gang pay, established dispatch procedures, safety committee rights, and the right to refuse unsafe work without discipline or retaliation.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { k: 'Dispatch',    v: 'All work dispatched through the hall. No selective hiring outside the process.' },
                { k: 'Safety',      v: 'Right to refuse demonstrably unsafe work. Contact your BA immediately.' },
                { k: 'Overtime',    v: 'Time-and-a-half after 8 hours. Double-time in specific conditions per the contract.' },
                { k: 'Jurisdiction',v: 'All longshore work on covered docks belongs to ILWU. Management cannot perform bargaining unit work.' },
                { k: 'Gang Integrity', v: 'Gangs have the right to work together. Arbitrary splitting is a contract violation.' },
                { k: 'Arbitration', v: 'Unresolved grievances go to binding arbitration - not courts, not management.' },
              ].map(item => (
                <div key={item.k} className="border border-ilwu-border p-5 bg-ilwu-bg">
                  <h3 className="font-body font-bold text-ilwu-navy mb-2 text-sm uppercase tracking-wide">{item.k}</h3>
                  <p className="text-ilwu-dark/60 text-sm font-body leading-relaxed">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filing a Grievance */}
      <section className="py-16 bg-ilwu-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-3">Filing a Grievance</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase leading-none">Step by Step</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {grievanceSteps.map(s => (
              <div key={s.n} className="border border-white/10 hover:border-ilwu-gold/30 bg-white/5 p-6 transition-colors">
                <div className="font-display text-ilwu-gold text-5xl leading-none mb-4">{s.n}</div>
                <h3 className="font-body font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm font-body leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="border border-ilwu-gold/30 bg-ilwu-gold/5 p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-ilwu-gold flex items-center justify-center">
              <svg className="w-5 h-5 text-ilwu-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-body font-bold text-white mb-1">Call the hall before time runs out.</h4>
              <p className="text-white/65 text-sm font-body leading-relaxed mb-2">
                If you're unsure whether something is grievable - call first, ask questions, then decide. Missing a deadline waives your right to grieve. The cost of a call is zero.
              </p>
              <p className="font-mono text-ilwu-gold font-medium text-sm">
                Business Agent: <a href="tel:+12535720220" className="hover:text-yellow-300 transition-colors">(253) 572-0220</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hall Progression */}
      <section className="py-16 bg-ilwu-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-3">The Hall Progression</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase leading-none">Casual → B Man → A Man</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {progression.map((p, i) => (
              <div key={p.stage} className={`border-2 ${p.border} p-7 bg-white/3 relative`}>
                <div className="absolute top-4 right-5 font-mono text-white/20 text-xs">{i + 1}/3</div>
                <div className="gold-rule" style={{ background: '#F5C400', opacity: i === 1 ? 1 : 0.3 }} />
                <h3 className={`font-display text-4xl uppercase tracking-wide mb-3 ${p.accent}`}>{p.stage}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/35 text-xs font-body mt-6 max-w-2xl">
            Promotion timelines are governed by the Seniority and Registration rules in the Pacific Coast Agreement. Ask your BA for current schedules and requirements.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-t border-ilwu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="gold-rule" style={{ background: '#1B3A6B' }} />
            <p className="font-display text-ilwu-navy tracking-[0.2em] text-sm uppercase mb-3">ILWU-PMA Plans</p>
            <h2 className="font-display text-ilwu-navy text-4xl sm:text-5xl uppercase leading-none">Medical &amp; Retirement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Medical',   icon: '🏥', items: ['Full medical for you and eligible dependents', 'Prescription, dental, and vision', 'Mental health coverage', 'ILWU-PMA Welfare Plan - joint trust'] },
              { title: 'Pension',   icon: '🏦', items: ['ILWU-PMA defined benefit pension', 'Vesting based on covered service years', 'Early retirement options', 'Supplemental Defined Contribution plan'] },
              { title: 'Vacation',  icon: '🌊', items: ['Vacation eligibility by register and hours', 'Lists posted at hall and online', 'Supplemental holiday pay', 'Death benefit through the Welfare Plan'] },
            ].map(b => (
              <div key={b.title} className="border border-ilwu-border p-6 bg-ilwu-bg">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-body font-bold text-ilwu-navy text-lg mb-4">{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ilwu-dark/60 font-body">
                      <span className="text-ilwu-gold mt-1 flex-shrink-0 font-bold">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
