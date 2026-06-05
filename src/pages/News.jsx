const newsItems = [
  {
    day: '05',
    month: 'JUL',
    year: '2026',
    title: 'Bloody Thursday Commemoration — Spanaway Lake Park',
    category: 'Event',
    desc: 'ILWU Local 23 invites all members, families, and friends to the annual Bloody Thursday commemoration at Spanaway Lake Park. We gather to honor the workers who gave their lives in the 1934 West Coast Strike — the sacrifice that built everything we have today. There will be speakers, food, and fellowship. Bring the family.',
    full: 'The date is July 5 — the anniversary of the day in 1934 when San Francisco police opened fire on striking longshoremen, killing Howard Sperry and Nick Bordoise and wounding dozens more. West Coast workers responded with a General Strike that changed American labor history. We remember that sacrifice every year, and this year we gather at Spanaway Lake Park. All are welcome.',
  },
  {
    day: '18',
    month: 'JUN',
    year: '2026',
    title: 'Stop Work Meeting — All Members Required',
    category: 'Meeting',
    desc: 'A Stop Work Meeting has been called for June 18. All Local 23 members are required to attend. Work at the Port of Tacoma will stop for the duration of the meeting. Location and time will be posted at the hall. Check the dispatch board for updates.',
    full: 'Stop Work Meetings are a protected right under the Pacific Coast Longshore Agreement. Attendance is not optional — this is a contractual obligation. If you have questions about your obligation to attend, contact your Business Agent before the meeting date.',
  },
  {
    day: '16',
    month: 'JUN',
    year: '2026',
    title: 'Executive Board Meeting — June 16',
    category: 'Meeting',
    desc: 'The Local 23 Executive Board will meet on June 16 at the dispatch hall. Members are encouraged to attend. Agenda items include the automation petition update, upcoming contract issues, and financial report.',
    full: 'E-Board meetings are open to all members in good standing. Bring your questions and your voice. The board works for you — show up and make sure they know what matters to the membership.',
  },
  {
    day: '12',
    month: 'JUN',
    year: '2026',
    title: 'Pull Date — June 12',
    category: 'Alert',
    desc: 'June 12 is the pull date for the current period. Members must check their dispatch status and ensure their registration is current. Contact the hall if you have questions about your standing.',
    full: 'Failure to respond to pull dates can affect your registration status. If you are having difficulty getting to the hall or have a legitimate reason for missing the pull, contact your Business Agent immediately.',
  },
  {
    day: '04',
    month: 'JUN',
    year: '2026',
    title: 'Automation Petition — 1,200 Signatures and Counting',
    category: 'Action',
    desc: 'The petition to block full automation at Husky Terminal has reached 1,200 signatures. Thank you to every member, family, and community supporter who signed. We are delivering the petition to the Port of Tacoma Commission at their next public meeting. Keep sharing.',
    full: 'Automation is not just a labor issue — it is a community issue. The jobs at risk are the jobs that pay mortgages, put kids through school, and keep Tacoma\'s economy running. Share the petition link with your neighbors, your family, and anyone who cares about working-class communities in the South Sound.',
  },
  {
    day: '28',
    month: 'MAY',
    year: '2026',
    title: 'In Memoriam: David Bartholomew',
    category: 'Memorial',
    desc: 'It is with great sorrow that Local 23 announces the passing of our brother David Bartholomew. David was a dedicated member who served this local with pride and commitment. He is deeply missed by his family, his crew, and everyone who had the privilege of working alongside him.',
    full: 'David gave years of his life to this union and this waterfront. He showed up for his brothers and sisters without question. The strength of ILWU Local 23 is built on members like David. We carry his memory with us on every shift.',
  },
  {
    day: '14',
    month: 'MAY',
    year: '2026',
    title: 'In Memoriam: Marco Hernando',
    category: 'Memorial',
    desc: 'Local 23 mourns the loss of our brother Marco Hernando. Marco was a proud union man who embodied what it means to look out for your fellow worker. His family, his gang, and this local are diminished by his absence.',
    full: 'Marco believed in the union not as an abstract idea but as a living commitment to the people working next to him. That belief shaped how he carried himself on the docks and in the hall. He is not forgotten. An injury to one is an injury to all.',
  },
]

const categoryColors = {
  Event: 'bg-yellow-500/20 text-yellow-300',
  Meeting: 'bg-white/10 text-white/80',
  Alert: 'bg-ilwu-red text-white',
  Action: 'bg-blue-500/20 text-blue-300',
  Memorial: 'bg-white/5 text-white/60',
}

export default function News() {
  return (
    <div className="font-body min-h-screen bg-ilwu-black">
      {/* Header */}
      <section className="pt-28 pb-16 bg-ilwu-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Latest</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">News &amp; Announcements</h1>
          <p className="text-white/60 font-body text-lg max-w-2xl">
            Meetings, alerts, actions, and memorials. Stay informed. Stay involved.
          </p>
        </div>
      </section>

      {/* News Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {newsItems.map((item, i) => (
              <article
                key={i}
                className={`border ${item.category === 'Memorial' ? 'border-white/8 bg-white/2' : 'border-white/10 bg-white/3'} hover:border-ilwu-red/30 transition-colors p-6 flex flex-col gap-4`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-white text-5xl leading-none">{item.day}</span>
                    <div className="flex flex-col">
                      <span className="font-display text-white/50 text-lg leading-tight uppercase tracking-widest">{item.month}</span>
                      <span className="font-display text-white/30 text-sm leading-tight">{item.year}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-body font-semibold uppercase tracking-wider px-3 py-1 flex-shrink-0 ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                <div>
                  <h2 className="font-body font-bold text-white text-lg leading-snug mb-2">{item.title}</h2>
                  <p className="text-white/60 text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
                {item.category === 'Memorial' && (
                  <blockquote className="border-l-2 border-ilwu-red/40 pl-4 text-white/45 text-xs font-body italic leading-relaxed">
                    {item.full}
                  </blockquote>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
