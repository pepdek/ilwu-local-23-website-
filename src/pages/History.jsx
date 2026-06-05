const timeline = [
  {
    year: '1934',
    title: 'West Coast Waterfront Strike',
    body: 'In May 1934, 35,000 West Coast longshoremen walked off the docks. They were striking for union recognition, hiring hall control, and a six-hour workday. The shipping companies were backed by police and local governments. Workers held the line for 83 days through intimidation, violence, and starvation wages - because they had no other choice.',
  },
  {
    year: 'Jul 5, 1934',
    title: 'Bloody Thursday',
    body: 'San Francisco police and National Guardsmen attacked striking longshoremen on the Embarcadero. Six workers were killed. Dozens were wounded. The response was not retreat - it was a city-wide General Strike that shut down San Francisco for four days. The blood spilled on that day paid for every contract we have ever signed.',
  },
  {
    year: '1937',
    title: 'ILWU Chartered',
    body: 'Harry Bridges led the 1934 strike and fought federal deportation attempts for decades. When the ILA failed to honor the gains workers had won, Bridges and West Coast workers broke away to form the International Longshore and Warehouse Union. ILWU Local 23 was chartered to represent longshore workers at the Port of Tacoma.',
  },
  {
    year: '1950s',
    title: 'Automation Fight Begins',
    body: "Containerization transformed the waterfront in the 1950s. The ILWU negotiated the Mechanization and Modernization Agreement - a landmark deal that traded some acceptance of new technology for income guarantees and job security provisions. It proved that automation doesn't have to mean abandonment. Workers can negotiate the terms.",
  },
  {
    year: '1971',
    title: 'Coastwide Strike',
    body: 'The 1971-72 coastwide work stoppage lasted 134 days. Workers held out against shipping companies trying to claw back mechanization protections. The resulting agreement secured unprecedented job security provisions. Every time the ILWU has held the line, it has won.',
  },
  {
    year: '2002',
    title: 'Port Lockout',
    body: "PMA locked out ILWU workers at ports across the West Coast for 11 days. President Bush invoked the Taft-Hartley Act. The lockout cost the national economy an estimated $1 billion per day - making clear just how much the country depends on the workers who move its cargo. Power is knowing what you're worth.",
  },
  {
    year: '2014-2015',
    title: 'Contract Negotiations',
    body: "A nine-month negotiation between ILWU and PMA tested the patience of workers and the economy alike. West Coast ports slowed. The federal government again intervened. The eventual contract reflected the ILWU's leverage and commitment - but also underscored the constant pressure employers place on waterfront workers.",
  },
  {
    year: '2026',
    title: 'Husky Terminal Automation Fight',
    body: "SSA Marine is moving to fully automate Husky Terminal at the Port of Tacoma. This is the same fight the ILWU has been fighting since the 1950s - technology being used not to improve work but to eliminate workers. Local 23 is fighting it the same way it's fought everything else: together, loud, and without apology.",
  },
]

export default function History() {
  return (
    <div className="font-body min-h-screen bg-ilwu-bg">

      {/* Hero - 60% navy, no photo */}
      <section className="pt-28 pb-20 bg-ilwu-navy pattern-dots relative overflow-hidden">
        {/* Ghost logo */}
        <div className="absolute right-0 bottom-0 opacity-[0.04] w-96 pointer-events-none">
          <img src="/ilwu-logo.avif" alt="" className="w-full object-contain" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Where We Come From</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl lg:text-8xl uppercase leading-none mb-6 max-w-4xl">
            We Didn't Ask<br />For Rights.<br />
            <span className="text-ilwu-gold">We Fought For Them.</span>
          </h1>
          <p className="text-white/60 font-body text-lg max-w-2xl leading-relaxed">
            The wage, the benefits, the safety rules, the grievance procedure - none of it was given.
            Every right you have was taken, at great cost, by the workers who came before you.
          </p>
        </div>
      </section>

      {/* Timeline - light bg */}
      <section className="py-16 bg-white border-b border-ilwu-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical rule */}
            <div className="absolute left-0 sm:left-[130px] top-0 bottom-0 w-px bg-ilwu-blue/20 hidden sm:block" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex flex-col sm:flex-row gap-0 sm:gap-12 pb-14">
                  {/* Year */}
                  <div className="sm:w-[130px] flex-shrink-0 sm:text-right relative">
                    <span className="font-display text-ilwu-blue text-lg sm:text-xl tracking-wide uppercase leading-tight">
                      {item.year}
                    </span>
                    <div className="hidden sm:block absolute right-[-22px] top-1.5 w-3 h-3 rounded-full bg-ilwu-blue border-2 border-white shadow" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-ilwu-navy text-3xl sm:text-4xl uppercase leading-none mb-4 mt-0.5">
                      {item.title}
                    </h3>

                    {/* Placeholder instead of photo */}
                    <div
                      className="h-36 sm:h-44 w-full mb-4 bg-ilwu-navy pattern-lines flex items-center justify-center relative overflow-hidden border border-ilwu-border"
                    >
                      <span className="font-display text-white/6 text-[5rem] sm:text-[7rem] leading-none select-none absolute">
                        {item.year.replace('Jul 5, ', '').split('-')[0]}
                      </span>
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-ilwu-gold" />
                        <span className="text-white/35 text-[10px] font-mono uppercase tracking-widest">
                          {item.title}
                        </span>
                      </div>
                    </div>

                    <p className="text-ilwu-dark/65 font-body text-base leading-relaxed">{item.body}</p>
                    {i < timeline.length - 1 && <div className="mt-12 border-t border-ilwu-border" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing - 30% blue */}
      <section className="bg-ilwu-blue py-20 pattern-blue-dots">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-0.5 bg-ilwu-gold mx-auto mb-8" />
          <h2 className="font-display text-white text-5xl sm:text-6xl uppercase leading-none mb-6">
            The Fight Isn't Over.<br /><span className="text-ilwu-gold">It Never Was.</span>
          </h2>
          <p className="text-white/70 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Every generation of longshore workers has faced the same fight in different clothes.
            Every generation has held the line. Ours will too.
          </p>
          <p className="font-display text-white/45 text-2xl tracking-widest uppercase">
            An Injury to One Is an Injury to All.
          </p>
        </div>
      </section>
    </div>
  )
}
