const grievanceSteps = [
  { n: '01', title: 'Document It',           body: 'Write down dates, times, supervisors, witnesses, and exactly what happened - immediately. Memory fades. Details win grievances.' },
  { n: '02', title: 'Talk to Your BA',        body: "Call the hall. Your Business Agent is your first call. They'll tell you if you have a grievable issue and walk you through next steps." },
  { n: '03', title: 'File Within the Window', body: 'Most grievances must be filed within 10 days. Missing the deadline waives your right. When in doubt, file first and ask questions after.' },
  { n: '04', title: 'Step 1 - Local Level',   body: 'Your BA meets with the employer. Many grievances are resolved here. If not, the union advances the case.' },
  { n: '05', title: 'Step 2 - Area Panel',    body: 'Unresolved grievances go to a joint labor-management panel. An impartial arbitrator may hear the case at this level.' },
  { n: '06', title: 'What Happens Next',       body: 'Major contract disputes can reach Coast arbitration - binding, precedent-setting decisions that protect all West Coast longshore workers.' },
]

const progression = [
  { stage: 'Casual', note: 'Entry level. On-call through the dispatch hall. No guaranteed hours. Focus on getting called - and showing up every time.' },
  { stage: 'B Man',  note: 'B Register membership. More consistent work, union benefits, seniority within the B list. You accumulate hours toward A promotion.' },
  { stage: 'A Man',  note: 'Full A Register. Maximum seniority, top-priority dispatch, access to all work opportunities. The hall takes care of its own.' },
]

export default function YourRights() {
  return (
    <div className="font-body">

      {/* Header */}
      <section className="texture-dots" style={{ background: '#00305b', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow mb-3">Know Your Contract</span>
          <h1 className="font-display text-white uppercase leading-none mb-4" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            Your Rights
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl">You have rights on the job. Know them.</p>
        </div>
      </section>

      {/* CBA Summary - cream */}
      <section style={{ background: '#F7F6F2', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <span className="yellow-rule" style={{ background: '#00305b' }} />
              <p className="font-display uppercase tracking-widest text-sm mb-3" style={{ color: '#377dbd' }}>Your Contract</p>
              <h2 className="font-display uppercase leading-none mb-6" style={{ color: '#00305b', fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>
                Plain Language CBA Summary
              </h2>
              <div className="space-y-4 font-body leading-relaxed" style={{ color: '#0F0F0F', opacity: 0.75, fontSize: '1rem' }}>
                <p>The Pacific Coast Longshore and Clerks' Agreement is negotiated between the ILWU and the Pacific Maritime Association (PMA). It covers wages, hours, working conditions, safety, dispatch, and grievance procedures for all West Coast longshore workers.</p>
                <p>The contract guarantees base pay rates, premium pay for hazardous work, overtime, and shift differentials. No employer can unilaterally change your working conditions without bargaining through the union.</p>
                <p>Key protections: guaranteed gang pay, established dispatch procedures, safety committee rights, and the right to refuse unsafe work without discipline.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { k: 'Dispatch',        v: 'All work dispatched through the hall. No selective hiring outside the process.' },
                { k: 'Safety',          v: 'Right to refuse demonstrably unsafe work. Contact your BA immediately.' },
                { k: 'Overtime',        v: "Time-and-a-half after 8 hours. Double-time in specific conditions per the contract." },
                { k: 'Jurisdiction',    v: 'All longshore work on covered docks belongs to ILWU. Management cannot perform bargaining unit work.' },
                { k: 'Gang Integrity',  v: 'Gangs have the right to work together. Arbitrary splitting is a contract violation.' },
                { k: 'Arbitration',     v: 'Unresolved grievances go to binding arbitration - not courts, not management.' },
              ].map(item => (
                <div
                  key={item.k}
                  className="transition-colors hover:border-[#377dbd]"
                  style={{ border: '1px solid #E8E5DC', background: '#ffffff', padding: '1.25rem' }}
                >
                  <h3 className="font-body font-bold text-sm uppercase tracking-wide mb-2" style={{ color: '#00305b' }}>{item.k}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#0F0F0F', opacity: 0.6 }}>{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grievance - navy */}
      <section className="texture-dots" style={{ background: '#00305b', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow mb-3">Filing a Grievance</span>
          <h2 className="font-display text-white uppercase leading-none mb-10" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>
            Step by Step
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {grievanceSteps.map(s => (
              <div
                key={s.n}
                style={{ border: '1px solid rgba(55,125,189,0.3)', background: 'rgba(55,125,189,0.07)', padding: '1.5rem' }}
              >
                {/* Yellow circle badge */}
                <div
                  className="flex items-center justify-center mb-5 font-display"
                  style={{
                    width: '2.75rem', height: '2.75rem',
                    background: '#00305b',
                    border: '2px solid #fff216',
                    color: '#fff216',
                    fontSize: '1.25rem',
                    borderRadius: '50%',
                    lineHeight: 1,
                  }}
                >
                  {parseInt(s.n)}
                </div>
                <h3 className="font-body font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-white/55 font-body text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div
            className="flex items-start gap-5"
            style={{ background: 'rgba(255,242,22,0.07)', border: '1px solid rgba(255,242,22,0.25)', padding: '1.5rem' }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: '2.5rem', height: '2.5rem', background: '#fff216' }}
            >
              <svg className="w-5 h-5" style={{ color: '#00305b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-body font-bold text-white mb-1">Call the hall before time runs out.</h4>
              <p className="text-white/60 font-body text-sm leading-relaxed mb-2">
                Missing a deadline waives your right to grieve. The cost of a call is zero.
              </p>
              <a href="tel:+12535720220" className="font-mono font-medium text-sm" style={{ color: '#fff216' }}>
                Business Agent: (253) 572-0220
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hall Progression - blue (30%) */}
      <section className="texture-dots-dark" style={{ background: '#377dbd', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow mb-3">The Hall Progression</span>
          <h2 className="font-display text-white uppercase leading-none mb-10" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>
            Casual - B Man - A Man
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {progression.map((p, i) => (
              <div
                key={p.stage}
                style={{
                  background: '#00305b',
                  border: `2px solid ${i === 1 ? '#fff216' : 'rgba(255,255,255,0.15)'}`,
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                <div className="absolute top-4 right-5 font-mono text-white/15 text-xs">{i + 1}/3</div>
                <span className="yellow-rule" style={{ opacity: i === 1 ? 1 : 0.3 }} />
                <h3 className="font-display text-white uppercase tracking-wide mb-3" style={{ fontSize: '2.5rem' }}>{p.stage}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - cream (10%) */}
      <section style={{ background: '#F7F6F2', padding: '5rem 0', borderTop: '1px solid #E8E5DC' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="yellow-rule" style={{ background: '#00305b' }} />
          <p className="font-display uppercase tracking-widest text-sm mb-3" style={{ color: '#377dbd' }}>ILWU-PMA Plans</p>
          <h2 className="font-display uppercase leading-none mb-10" style={{ color: '#00305b', fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>
            Medical &amp; Retirement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Medical',  icon: '🏥', items: ['Full medical for you and eligible dependents', 'Prescription, dental, and vision', 'Mental health coverage', 'ILWU-PMA Welfare Plan - joint trust'] },
              { title: 'Pension',  icon: '🏦', items: ['ILWU-PMA defined benefit pension', 'Vesting based on covered service years', 'Early retirement options', 'Supplemental Defined Contribution plan'] },
              { title: 'Vacation', icon: '🌊', items: ['Eligibility by register and hours worked', 'Lists posted at hall and online', 'Supplemental holiday pay', 'Death benefit through the Welfare Plan'] },
            ].map(b => (
              <div key={b.title} style={{ background: '#ffffff', border: '1px solid #E8E5DC', padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{b.icon}</div>
                <h3 className="font-body font-bold text-lg mb-4" style={{ color: '#00305b' }}>{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm font-body" style={{ color: '#0F0F0F', opacity: 0.65 }}>
                      <span style={{ color: '#fff216', background: '#00305b', width: '1rem', height: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', flexShrink: 0, marginTop: '2px' }}>▸</span>
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
