const PETITION_URL = 'https://actionnetwork.org/petitions/husky-ai?source=direct_link&'

const items = [
  {
    day: '19', month: 'JUL', year: '2026', cat: 'Memorial', catColor: '#374151',
    title: "Pat Casey's Celebration of Life",
    body: "Join us to celebrate the life of Pat Casey. Family, friends, and fellow union members are welcome. Owen Beach Pavilion, Point Defiance Park · 5605 Owen Beach Rd, Tacoma, WA 98407 · 1:00 PM – 3:00 PM.",
    link: { label: 'Add to Google Calendar', href: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pat+Casey%27s+Celebration+of+Life&dates=20260719T130000/20260719T150000&location=Owen+Beach+Pavilion,+5605+Owen+Beach+Rd,+Tacoma,+WA+98407' },
  },
  {
    day: '05', month: 'JUL', year: '2026', cat: 'Event', catColor: '#377dbd',
    title: 'Bloody Thursday Commemoration - Spanaway Lake Park',
    body: 'ILWU Local 23 invites all members, families, and supporters to the annual Bloody Thursday commemoration at Spanaway Lake Park. We gather to honor the six workers who gave their lives in 1934. Speakers, food, and fellowship. Bring the family.',
    link: null,
  },
  {
    day: '18', month: 'JUN', year: '2026', cat: 'Meeting', catColor: '#00305b',
    title: 'Stop Work Meeting - All Members Required',
    body: 'A Stop Work Meeting has been called for June 18. All Local 23 members are required to attend. Work at the Port of Tacoma will stop for the duration of the meeting. Location and time posted at the hall.',
    link: null,
  },
  {
    day: '16', month: 'JUN', year: '2026', cat: 'Meeting', catColor: '#00305b',
    title: 'Executive Board Meeting - June 16',
    body: 'The Local 23 Executive Board meets June 16 at the dispatch hall. Members are encouraged to attend. Agenda: automation petition update, upcoming contract issues, and financial report.',
    link: null,
  },
  {
    day: '12', month: 'JUN', year: '2026', cat: 'Alert', catColor: '#dc2626',
    title: 'Pull Date - June 12',
    body: 'June 12 is the pull date for the current period. Members must check their dispatch status and ensure registration is current. Contact the hall if you have questions.',
    link: null,
  },
  {
    day: '04', month: 'JUN', year: '2026', cat: 'Action', catColor: '#377dbd',
    title: 'Automation Petition - 1,200 Signatures and Counting',
    body: 'The petition to block full automation at Husky Terminal has reached 1,200 signatures. We are delivering the petition to the Port of Tacoma Commission at their next public meeting. Keep sharing - every name matters.',
    link: { label: 'Sign the Petition', href: PETITION_URL },
  },
  {
    day: '28', month: 'MAY', year: '2026', cat: 'Memorial', catColor: '#374151',
    title: 'In Memoriam: David Bartholomew',
    body: 'It is with great sorrow that Local 23 announces the passing of our brother David Bartholomew. A dedicated member who served this local with pride and commitment. He is deeply missed.',
    link: null,
  },
  {
    day: '14', month: 'MAY', year: '2026', cat: 'Memorial', catColor: '#374151',
    title: 'In Memoriam: Marco Hernando',
    body: 'Local 23 mourns the loss of our brother Marco Hernando. A proud union man who embodied what it means to look out for your fellow worker.',
    link: null,
  },
]

export default function News() {
  return (
    <div className="font-body" style={{ background: '#F7F6F2', minHeight: '100vh' }}>

      {/* Header */}
      <section className="texture-dots" style={{ background: '#00305b', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow mb-3">Latest</span>
          <h1 className="font-display text-white uppercase leading-none mb-4" style={{ fontSize: 'clamp(3rem,7vw,5rem)' }}>
            News &amp; Announcements
          </h1>
          <p className="text-white/55 font-body text-lg max-w-xl">
            Meetings, alerts, actions, and memorials. Stay informed. Stay involved.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <article
                key={i}
                className="flex flex-col gap-4 transition-shadow hover:shadow-md"
                style={{ background: '#ffffff', border: '1px solid #e5e3da', padding: '1.75rem' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display leading-none" style={{ color: '#00305b', fontSize: '3.5rem' }}>{item.day}</span>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-widest leading-tight" style={{ color: '#00305b', opacity: 0.5 }}>{item.month}</span>
                      <span className="font-mono text-xs leading-tight" style={{ color: '#00305b', opacity: 0.3 }}>{item.year}</span>
                    </div>
                  </div>
                  <span
                    className="font-body font-bold text-[10px] uppercase tracking-wider px-3 py-1 flex-shrink-0 text-white"
                    style={{ background: item.catColor }}
                  >
                    {item.cat}
                  </span>
                </div>
                {item.cat === 'Memorial' && <span className="yellow-rule" style={{ marginBottom: 0, background: '#00305b' }} />}
                <div className="flex-1">
                  <h2 className="font-body font-bold leading-snug mb-2" style={{ color: '#00305b', fontSize: '1rem' }}>
                    {item.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#0F0F0F', opacity: 0.6 }}>
                    {item.body}
                  </p>
                </div>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body font-semibold text-sm transition-colors"
                    style={{ color: '#377dbd' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#00305b' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#377dbd' }}
                  >
                    {item.link.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
