const grievanceSteps = [
  { step: '01', title: 'Document Everything', body: 'Write down dates, times, supervisors involved, witnesses, and exactly what happened. Do this immediately — memory fades and details matter in arbitration.' },
  { step: '02', title: 'Contact Your Business Agent', body: 'Call the hall. Your BA is your first point of contact. They will advise whether you have a grievable issue and walk you through next steps. Do not delay — time limits are strict.' },
  { step: '03', title: 'Step 1 — Local Discussion', body: 'The Business Agent meets with the employer at the local level. Many grievances are resolved here. If not, the union advances to the next step.' },
  { step: '04', title: 'Step 2 — Area Arbitration', body: 'If unresolved, the grievance goes to a joint labor-management panel at the area level. An impartial arbitrator may hear the case.' },
  { step: '05', title: 'Step 3 — Coast Arbitration', body: 'Major contract interpretation disputes can go to a Coast arbitration panel. Decisions at this level are binding and set precedent for all West Coast locals.' },
  { step: '06', title: 'Know Your Weingarten Rights', body: 'You have the right to union representation at any investigatory interview you reasonably believe could lead to discipline. Say: "I request union representation before this interview proceeds."' },
]

const progression = [
  { stage: 'Casual', color: 'border-white/20', desc: 'Entry-level status. Work is casual/on-call through the dispatch hall. Casuals work to demonstrate skill and reliability to earn B book consideration. No guaranteed work hours.' },
  { stage: 'B Register', color: 'border-yellow-500/50', desc: 'B Register membership provides more consistent work opportunity and seniority within the B list. Full union benefits apply. Members on the B list work toward A promotion through accumulated hours and tenure.' },
  { stage: 'A Register', color: 'border-ilwu-red', desc: 'Full A Register status is the top tier. A members have maximum seniority, top-priority dispatch, and full access to all benefits, vacation, and longshore work opportunities.' },
]

export default function YourRights() {
  return (
    <div className="font-body min-h-screen bg-ilwu-black">
      {/* Header */}
      <section
        className="pt-28 pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.80) 0%, rgba(15,15,15,1) 100%), url('https://images.unsplash.com/photo-1590946083328-b2e38800e2b3?w=1400&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Know Your Contract</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">Your Rights</h1>
          <p className="text-white/60 font-body text-lg max-w-2xl">
            The Pacific Coast Longshore Contract covers you from the moment you hit the dock.
            Here's what you need to know in plain language.
          </p>
        </div>
      </section>

      {/* CBA Summary */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Contract Summary</p>
              <h2 className="font-display text-white text-4xl sm:text-5xl uppercase leading-none mb-6">What the CBA Covers</h2>
              <div className="space-y-5 text-white/70 font-body text-base leading-relaxed">
                <p>The Pacific Coast Longshore and Clerks' Agreement is negotiated between the ILWU and the Pacific Maritime Association (PMA). It covers wages, hours, working conditions, safety, dispatch, and grievance procedures for longshore workers across the West Coast, including Local 23 at Tacoma.</p>
                <p>The contract guarantees base pay rates, premium pay for hazardous work, overtime, shift differentials, and jurisdiction protections. No employer can unilaterally change your working conditions without bargaining through the union.</p>
                <p>Key provisions include: guaranteed gang pay, established dispatch procedures through the JPLRC, safety committee rights, and the right to refuse unsafe work without discipline.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Dispatch', desc: 'All work is dispatched through the hall. Employers cannot selectively hire outside the dispatch process.' },
                { label: 'Safety', desc: 'You have the right to refuse demonstrably unsafe work. Contact your foreman and BA immediately.' },
                { label: 'Overtime', desc: 'Time-and-a-half after 8 hours. Double-time applies in specific conditions per the contract.' },
                { label: 'Jurisdiction', desc: 'All longshore work on covered docks belongs to ILWU. Management cannot perform bargaining unit work.' },
                { label: 'Gang Integrity', desc: 'Gangs have the right to work together. Arbitrary splitting of gangs is a contract violation.' },
                { label: 'Arbitration', desc: 'Grievances unresolved at the local level proceed to binding arbitration — not courts, not management.' },
              ].map(item => (
                <div key={item.label} className="border border-white/10 p-5 bg-white/3">
                  <h3 className="font-body font-bold text-white mb-2 text-sm uppercase tracking-wide">{item.label}</h3>
                  <p className="text-white/55 text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grievance Process */}
      <section className="py-16 bg-white/2 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Step by Step</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase leading-none">How to File a Grievance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {grievanceSteps.map(s => (
              <div key={s.step} className="border border-white/10 p-6 bg-ilwu-black hover:border-ilwu-red/30 transition-colors">
                <div className="font-display text-ilwu-red text-5xl leading-none mb-4">{s.step}</div>
                <h3 className="font-body font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm font-body leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-ilwu-red/30 bg-ilwu-red/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-ilwu-red flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-body font-bold text-white mb-1">Time Limits Are Strict</h4>
                <p className="text-white/65 text-sm font-body leading-relaxed">
                  Most grievances must be filed within 10 days of the event or when you reasonably became aware of it. Missing the deadline waives your right to grieve. If you're unsure whether something is grievable — call the hall first, ask questions later.
                </p>
                <p className="text-white/80 font-body font-semibold text-sm mt-2">
                  Business Agent: <a href="tel:+12535720220" className="text-ilwu-red hover:underline">(253) 572-0220</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">ILWU-PMA Plans</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase leading-none">Medical &amp; Retirement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Medical Benefits',
                icon: '🏥',
                items: ['Full medical coverage for you and eligible dependents', 'Prescription drug coverage', 'Dental and vision plans', 'Mental health and substance abuse coverage', 'ILWU-PMA Welfare Plan administered through the joint trust'],
              },
              {
                title: 'Pension',
                icon: '🏦',
                items: ['ILWU-PMA Pension Plan — defined benefit', 'Vesting schedule based on years of covered service', 'Early retirement options available', 'Supplemental Defined Contribution plan', 'Survivor benefit provisions'],
              },
              {
                title: 'Vacation & Other',
                icon: '🌊',
                items: ['Vacation eligibility based on register and hours worked', 'Vacation lists posted at the hall and online', 'Supplemental holiday pay', 'Death benefit through the Welfare Plan', 'Sick leave provisions per the contract'],
              },
            ].map(b => (
              <div key={b.title} className="border border-white/10 p-6 bg-white/3">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-body font-bold text-white text-lg mb-4">{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60 font-body">
                      <span className="text-ilwu-red mt-1 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progression */}
      <section className="py-16 bg-white/2 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Career Path</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase leading-none">Casual → B → A Register</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {progression.map((p, i) => (
              <div key={p.stage} className={`border-2 ${p.color} p-6 bg-white/3 relative`}>
                <div className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center bg-white/10 font-display text-white/50 text-sm">
                  {i + 1}
                </div>
                <h3 className="font-display text-white text-3xl uppercase tracking-wide mb-3">{p.stage}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs font-body mt-6 max-w-2xl">
            Promotion from casual to B and B to A is governed by the Seniority and Registration rules in the Pacific Coast Longshore Agreement. Your BA can explain current promotion timelines and requirements.
          </p>
        </div>
      </section>
    </div>
  )
}
