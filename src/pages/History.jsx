const timeline = [
  {
    year: '1934',
    title: 'West Coast Waterfront Strike',
    body: 'In May 1934, 35,000 West Coast longshoremen walked off the docks. They were striking for union recognition, hiring hall control, and a six-hour workday. The shipping companies were backed by police and local governments. Workers held the line for 83 days through intimidation, violence, and starvation wages — because they had no other choice.',
    photo: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&auto=format&fit=crop',
  },
  {
    year: 'Jul 5, 1934',
    title: 'Bloody Thursday',
    body: 'San Francisco police and National Guardsmen attacked striking longshoremen on the Embarcadero. Six workers were killed. Dozens were wounded. The response was not retreat — it was a city-wide General Strike that shut down San Francisco for four days. The blood spilled on that day paid for every contract we have ever signed. We mark this date every year because it must not be forgotten.',
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop',
  },
  {
    year: '1937',
    title: 'ILWU Chartered',
    body: 'Harry Bridges led the 1934 strike as West Coast director of the ILA. When the ILA failed to honor the gains workers had won, Bridges and West Coast workers broke away to form the International Longshore and Warehouse Union. The ILWU was built on the principle that workers — not employers, not courts, not politicians — determine their own destiny. ILWU Local 23 was chartered to represent longshore workers at the Port of Tacoma.',
    photo: 'https://images.unsplash.com/photo-1590946083328-b2e38800e2b3?w=900&q=80&auto=format&fit=crop',
  },
  {
    year: '1950s',
    title: 'Automation Fight Begins',
    body: 'Containerization and early mechanization began transforming the waterfront in the 1950s. The ILWU negotiated the Mechanization and Modernization Agreement — a landmark deal that traded some acceptance of new technology for income guarantees, early retirement options, and job security provisions. It proved that automation doesn\'t have to mean abandonment. Workers can negotiate the terms.',
    photo: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=900&q=80&auto=format&fit=crop',
  },
  {
    year: '1971',
    title: 'Coastwide Strike',
    body: 'The 1971–72 coastwide work stoppage lasted 134 days — one of the longest labor actions in West Coast maritime history. Workers held out against shipping companies trying to claw back mechanization protections. The resulting agreement secured unprecedented job security provisions. Every time the ILWU has held the line, it has won. Solidarity works.',
    photo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80&auto=format&fit=crop',
  },
  {
    year: '2002',
    title: 'Port Lockout',
    body: 'PMA locked out ILWU workers at ports across the West Coast for 11 days. President Bush invoked the Taft-Hartley Act. The lockout cost the national economy an estimated $1 billion per day — making clear just how much the country depends on the workers who move its cargo. The ILWU went back and eventually negotiated a strong contract. Power is knowing what you\'re worth.',
    photo: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&auto=format&fit=crop',
  },
  {
    year: '2014–2015',
    title: 'Contract Negotiations',
    body: 'A nine-month negotiation between ILWU and PMA tested the patience of workers and the economy alike. West Coast ports slowed. The federal government again intervened. The eventual contract reflected the ILWU\'s leverage and commitment — but also underscored the constant pressure employers place on waterfront workers. Vigilance never ends.',
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop',
  },
  {
    year: '2026',
    title: 'Husky Terminal Automation Fight',
    body: 'SSA Marine is moving to fully automate Husky Terminal at the Port of Tacoma. Automated cranes and driverless yard vehicles would eliminate hundreds of Local 23 jobs. This is the same fight the ILWU has been fighting since the 1950s — technology being used not to improve work but to eliminate workers. Local 23 is fighting it the same way it\'s fought everything else: together, loud, and without apology.',
    photo: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=900&q=80&auto=format&fit=crop',
  },
]

export default function History() {
  return (
    <div className="font-body min-h-screen bg-ilwu-bg">

      {/* Hero */}
      <section
        className="pt-28 pb-20 bg-ilwu-navy relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27,58,107,0.60) 0%, rgba(27,58,107,0.95) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Where We Come From</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl lg:text-8xl uppercase leading-none mb-6 max-w-4xl">
            We Didn't Ask<br />For Rights.<br />
            <span className="text-ilwu-gold">We Fought For Them.</span>
          </h1>
          <p className="text-white/65 font-body text-lg max-w-2xl leading-relaxed">
            The wage, the benefits, the safety rules, the grievance procedure — none of it was given.
            Every right you have was taken, at great cost, by the workers who came before you.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white border-b border-ilwu-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical rule */}
            <div className="absolute left-0 sm:left-[130px] top-0 bottom-0 w-px bg-ilwu-gold/20 hidden sm:block" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex flex-col sm:flex-row gap-0 sm:gap-12 pb-14">
                  {/* Year */}
                  <div className="sm:w-[130px] flex-shrink-0 sm:text-right relative">
                    <span className="font-display text-ilwu-gold text-lg sm:text-xl tracking-wide uppercase leading-tight">
                      {item.year}
                    </span>
                    {/* Timeline dot */}
                    <div className="hidden sm:block absolute right-[-22px] top-1.5 w-3 h-3 rounded-full bg-ilwu-gold border-2 border-white shadow" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-ilwu-navy text-3xl sm:text-4xl uppercase leading-none mb-4 mt-0.5">
                      {item.title}
                    </h3>
                    <div
                      className="h-44 sm:h-52 w-full mb-4 bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.photo}')` }}
                      role="img"
                      aria-label={item.title}
                    />
                    <p className="text-ilwu-dark/65 font-body text-base leading-relaxed">{item.body}</p>
                    {i < timeline.length - 1 && <div className="mt-12 border-t border-ilwu-border" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-ilwu-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-1 bg-ilwu-gold mx-auto mb-8" />
          <h2 className="font-display text-white text-5xl sm:text-6xl uppercase leading-none mb-6">
            The Fight Isn't Over.<br /><span className="text-ilwu-gold">It Never Was.</span>
          </h2>
          <p className="text-white/70 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Every generation of longshore workers has faced the same fight in different clothes.
            Every generation has held the line. Ours will too.
          </p>
          <p className="font-display text-white/50 text-2xl tracking-widest uppercase">
            An Injury to One Is an Injury to All.
          </p>
        </div>
      </section>
    </div>
  )
}
