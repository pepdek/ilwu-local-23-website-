const timeline = [
  {
    year: '1934',
    title: 'The West Coast Strike',
    body: `In May 1934, 35,000 West Coast longshoremen walked off the docks in a strike for union recognition, hiring hall control, and a six-hour day. The shipping companies, backed by police and local governments, were determined to break them. Workers held the line for 83 days through intimidation, violence, and starvation — because they had no other choice.`,
    photo: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop',
  },
  {
    year: 'Jul 5, 1934',
    title: 'Bloody Thursday',
    body: `On July 5, 1934, San Francisco police and National Guardsmen attacked striking longshoremen on the Embarcadero. Howard Sperry and Nick Bordoise were killed. Dozens were wounded. The response was not retreat — it was a city-wide General Strike that shut down San Francisco for four days. The blood spilled that day paid for every contract we have ever signed.`,
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
  },
  {
    year: '1934–1937',
    title: 'Harry Bridges and the ILWU',
    body: `Harry Bridges led the 1934 strike as West Coast director of the International Longshoremen's Association. When the ILA failed to honor gains made in the strike, Bridges and West Coast workers broke away to form the International Longshore and Warehouse Union in 1937. Bridges was surveilled, harassed, and faced multiple deportation attempts by the federal government — all of which he defeated. He led the ILWU until 1977.`,
    photo: 'https://images.unsplash.com/photo-1590946083328-b2e38800e2b3?w=800&q=80&auto=format&fit=crop',
  },
  {
    year: '1937',
    title: 'Local 23 Established — Port of Tacoma',
    body: `ILWU Local 23 was chartered to represent longshore workers at the Port of Tacoma, Washington. From the beginning, Local 23 members carried the same values that built the ILWU: solidarity, mutual aid, and the belief that every worker deserves dignity and a fair share of what they produce. Tacoma's port has grown into one of the largest on the West Coast — Local 23 workers built that.`,
    photo: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&q=80&auto=format&fit=crop',
  },
  {
    year: '1971',
    title: 'The 134-Day Strike',
    body: `The 1971-72 coast lockout lasted 134 days — one of the longest labor stoppages in West Coast maritime history. Workers held out against shipping companies trying to claw back mechanization protections. The resulting agreement secured unprecedented job security provisions and established the Mechanization and Modernization Fund, which provided income guarantees as the industry modernized. Solidarity wins.`,
    photo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop',
  },
  {
    year: '2002',
    title: 'Port Lockout',
    body: `In 2002, PMA locked out ILWU workers at ports across the West Coast for 11 days, costing the national economy an estimated $1 billion per day. President George W. Bush invoked the Taft-Hartley Act to force workers back. The incident highlighted just how much the entire country depends on the men and women who work these docks — and how far employers will go to break that leverage.`,
    photo: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop',
  },
  {
    year: 'Today',
    title: 'The Automation Fight',
    body: `The latest threat is not a lockout or a police baton — it is a software algorithm and a self-driving straddle carrier. SSA Marine's push to fully automate Husky Terminal at the Port of Tacoma is the 21st century version of the same fight: corporations using technology to eliminate the workers who built their profits. Local 23 is fighting it the same way we've fought everything else — together, loud, and without apology.`,
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
  },
]

export default function History() {
  return (
    <div className="font-body min-h-screen bg-ilwu-black">
      {/* Hero */}
      <section
        className="pt-28 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.65) 0%, rgba(15,15,15,0.95) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Where We Come From</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl lg:text-8xl uppercase leading-none mb-6 max-w-4xl">
            Built on Blood<br />and Solidarity
          </h1>
          <p className="text-white/65 font-body text-lg max-w-2xl leading-relaxed">
            The rights you have today — the wage, the benefits, the safety rules, the grievance procedure — were not given to you. They were taken, at great cost, by the workers who came before you. This is their story. And it's yours.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 sm:left-[120px] top-0 bottom-0 w-px bg-ilwu-red/20 hidden sm:block" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex flex-col sm:flex-row gap-0 sm:gap-12 pb-12">
                  {/* Year label */}
                  <div className="sm:w-[120px] flex-shrink-0 sm:text-right relative">
                    <span className="font-display text-ilwu-red text-lg sm:text-xl tracking-wide uppercase">
                      {item.year}
                    </span>
                    {/* Dot */}
                    <div className="hidden sm:block absolute right-[-21px] top-1 w-3 h-3 rounded-full bg-ilwu-red border-2 border-ilwu-black" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-0">
                    <h3 className="font-display text-white text-3xl sm:text-4xl uppercase leading-none mb-4 mt-1">
                      {item.title}
                    </h3>
                    <div
                      className="h-40 sm:h-48 w-full mb-4 bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.photo}')` }}
                      role="img"
                      aria-label={item.title}
                    />
                    <p className="text-white/65 font-body text-base leading-relaxed">{item.body}</p>
                    {i < timeline.length - 1 && (
                      <div className="mt-10 border-t border-white/8" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-ilwu-red py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-white text-5xl sm:text-6xl uppercase leading-none mb-6">
            The Fight Continues
          </h2>
          <p className="text-white/80 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Every generation of longshore workers has faced a version of the same fight: employers using power and technology to take back what workers have won. Every generation has held the line. Ours will too.
          </p>
          <p className="font-display text-white/60 text-2xl tracking-widest uppercase">
            An Injury to One Is an Injury to All.
          </p>
        </div>
      </section>
    </div>
  )
}
