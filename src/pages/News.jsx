const items = [
  {
    day: '05', month: 'JUL', year: '2026', cat: 'Event',
    title: 'Bloody Thursday Commemoration - Spanaway Lake Park',
    body: 'ILWU Local 23 invites all members, families, and supporters to the annual Bloody Thursday commemoration at Spanaway Lake Park. We gather to honor the six workers who gave their lives in 1934. Speakers, food, and fellowship. Bring the family.',
  },
  {
    day: '18', month: 'JUN', year: '2026', cat: 'Meeting',
    title: 'Stop Work Meeting - All Members Required',
    body: 'A Stop Work Meeting has been called for June 18. All Local 23 members are required to attend. Work at the Port of Tacoma will stop for the duration of the meeting. Location and time posted at the hall.',
  },
  {
    day: '16', month: 'JUN', year: '2026', cat: 'Meeting',
    title: 'Executive Board Meeting - June 16',
    body: 'The Local 23 Executive Board meets June 16 at the dispatch hall. Members are encouraged to attend. Agenda: automation petition update, upcoming contract issues, and financial report.',
  },
  {
    day: '12', month: 'JUN', year: '2026', cat: 'Alert',
    title: 'Pull Date - June 12',
    body: 'June 12 is the pull date for the current period. Members must check their dispatch status and ensure registration is current. Contact the hall if you have questions about your standing.',
  },
  {
    day: '04', month: 'JUN', year: '2026', cat: 'Action',
    title: 'Automation Petition - 1,200 Signatures and Counting',
    body: 'The petition to block full automation at Husky Terminal has reached 1,200 signatures. We are delivering the petition to the Port of Tacoma Commission at their next public meeting. Keep sharing.',
  },
  {
    day: '28', month: 'MAY', year: '2026', cat: 'Memorial',
    title: 'In Memoriam: David Bartholomew',
    body: 'It is with great sorrow that Local 23 announces the passing of our brother David Bartholomew. A dedicated member who served this local with pride and commitment. He is deeply missed.',
  },
  {
    day: '14', month: 'MAY', year: '2026', cat: 'Memorial',
    title: 'In Memoriam: Marco Hernando',
    body: 'Local 23 mourns the loss of our brother Marco Hernando. A proud union man who embodied what it means to look out for your fellow worker. His family and this local are diminished by his absence.',
  },
]

const catStyle = {
  Event:    'bg-ilwu-gold text-ilwu-navy font-bold',
  Meeting:  'bg-ilwu-blue text-white',
  Alert:    'bg-red-600 text-white',
  Action:   'bg-ilwu-navy text-white border border-ilwu-blue/40',
  Memorial: 'bg-white/60 text-ilwu-navy',
}

export default function News() {
  return (
    <div className="font-body min-h-screen bg-ilwu-bg">

      {/* Header */}
      <section className="pt-28 pb-16 bg-ilwu-navy pattern-dots border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Latest</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">
            News &amp; Announcements
          </h1>
          <p className="text-white/55 font-body text-lg max-w-xl">
            Meetings, alerts, actions, and memorials. Stay informed. Stay involved.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {items.map((item, i) => (
              <article
                key={i}
                className="bg-white border border-ilwu-border hover:border-ilwu-blue/35 transition-colors p-6 flex flex-col gap-4 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-ilwu-navy text-5xl leading-none">{item.day}</span>
                    <div className="flex flex-col">
                      <span className="font-mono text-ilwu-navy/45 text-sm leading-tight uppercase tracking-widest">{item.month}</span>
                      <span className="font-mono text-ilwu-navy/25 text-xs leading-tight">{item.year}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-body uppercase tracking-wider px-3 py-1 flex-shrink-0 ${catStyle[item.cat]}`}>
                    {item.cat}
                  </span>
                </div>
                {item.cat === 'Memorial' && <div className="w-10 h-0.5 bg-ilwu-gold" />}
                <div>
                  <h2 className="font-body font-bold text-ilwu-navy text-base leading-snug mb-2">{item.title}</h2>
                  <p className="text-ilwu-dark/60 text-sm font-body leading-relaxed">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
