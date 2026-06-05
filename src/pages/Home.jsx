import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown'

const upcomingDates = [
  { day: '12', month: 'JUN', year: '2026', label: 'Pull Date', desc: 'Dispatch pull date — check your status', tag: 'Alert' },
  { day: '16', month: 'JUN', year: '2026', label: 'E-Board Meeting', desc: 'Executive Board meeting, dispatch hall', tag: 'Meeting' },
  { day: '18', month: 'JUN', year: '2026', label: 'Stop Work Meeting', desc: 'All-hands stop-work meeting — attendance required', tag: 'Meeting' },
  { day: '05', month: 'JUL', year: '2026', label: 'Bloody Thursday', desc: 'Annual commemoration, Spanaway Lake Park', tag: 'Event' },
]

const tagColors = {
  Alert: 'bg-ilwu-red text-white',
  Meeting: 'bg-white/10 text-white',
  Event: 'bg-yellow-500/20 text-yellow-300',
}

const quickLinks = [
  { label: 'Member Hub', to: '/member-hub', icon: '⚓' },
  { label: 'Your Rights', to: '/your-rights', icon: '✊' },
  { label: 'News & Alerts', to: '/news', icon: '📣' },
  { label: 'Leadership', to: '/leadership', icon: '👷' },
]

export default function Home() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-ilwu-black overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.55) 0%, rgba(196,18,48,0.18) 60%, rgba(15,15,15,0.92) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="max-w-4xl">
            <p className="font-display text-ilwu-red tracking-[0.25em] text-sm sm:text-base mb-6 uppercase">
              ILWU Local 23 — Port of Tacoma
            </p>
            <h1 className="font-display text-white text-6xl sm:text-8xl lg:text-9xl leading-none mb-8 uppercase tracking-wide">
              An Injury to One<br />
              <span className="text-ilwu-red">Is an Injury</span><br />
              to All.
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-body font-light max-w-2xl mb-10 leading-relaxed">
              We are the men and women who move the cargo that keeps America running.
              For generations, ILWU Local 23 has fought for fair wages, safe conditions,
              and dignity on the docks at the Port of Tacoma.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/member-hub"
                className="bg-ilwu-red hover:bg-ilwu-red-dark text-white font-body font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-200"
              >
                Member Hub
              </Link>
              <a
                href="#petition"
                className="border-2 border-white hover:bg-white hover:text-ilwu-black text-white font-body font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-200"
              >
                Sign the Petition
              </a>
            </div>
          </div>
        </div>

        {/* Countdown strip */}
        <div className="bg-ilwu-black/80 backdrop-blur border-t border-white/10 w-full py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
              <div>
                <p className="font-display text-ilwu-red tracking-widest text-xs uppercase mb-1">Countdown To</p>
                <p className="font-display text-white text-lg tracking-wide uppercase">Bloody Thursday</p>
                <p className="text-white/50 text-xs font-body mt-0.5">July 5 · Spanaway Lake Park</p>
              </div>
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* Automation Petition Campaign */}
      <section id="petition" className="bg-ilwu-red py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-display tracking-[0.2em] text-white/70 text-sm uppercase mb-4">Action Alert</p>
              <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-none uppercase mb-6">
                Stop Automation<br />at Husky Terminal
              </h2>
              <p className="text-white/80 text-lg font-body leading-relaxed mb-6">
                SSA Marine is moving to fully automate Husky Terminal at the Port of Tacoma.
                Automated cranes and driverless yard vehicles don't just replace jobs — they
                eliminate careers, gut communities, and hollow out the middle class one terminal at a time.
              </p>
              <p className="text-white/80 text-lg font-body leading-relaxed mb-8">
                This isn't inevitable. It's a choice. And we're fighting it.
                Every signature on this petition tells the Port of Tacoma, the City of Tacoma,
                and our elected officials: <strong className="text-white">longshore jobs are worth protecting.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ilwu.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-ilwu-red hover:bg-white/90 font-body font-bold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-200"
                >
                  Sign the Petition →
                </a>
                <Link
                  to="/your-rights"
                  className="border-2 border-white text-white hover:bg-white/10 font-body font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-200"
                >
                  Know Your Rights
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { num: '~800', label: 'Local 23 jobs directly threatened', desc: 'Full automation of Husky Terminal would eliminate hundreds of A and B register positions.' },
                { num: '$65K+', label: 'Average annual longshore wage', desc: 'Middle-class jobs with benefits that support Tacoma families and the regional economy.' },
                { num: '3rd', label: 'Largest US port on the West Coast', desc: 'The Port of Tacoma handles billions in cargo — it can afford to keep humans at work.' },
              ].map(stat => (
                <div key={stat.num} className="border border-white/30 p-5 bg-white/5">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-display text-white text-4xl leading-none">{stat.num}</span>
                    <span className="text-white/80 font-body font-semibold text-sm uppercase tracking-wide">{stat.label}</span>
                  </div>
                  <p className="text-white/60 text-sm font-body">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section className="bg-ilwu-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-2">Calendar</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase tracking-wide">Upcoming Dates</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingDates.map((d, i) => (
              <div
                key={i}
                className="border border-white/10 hover:border-ilwu-red/50 bg-white/3 hover:bg-white/5 transition-all p-6 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-display text-white text-6xl leading-none">{d.day}</span>
                    <div className="font-display text-white/40 text-lg tracking-widest uppercase leading-tight">
                      {d.month} {d.year}
                    </div>
                  </div>
                  <span className={`text-xs font-body font-semibold uppercase tracking-wider px-2 py-1 ${tagColors[d.tag]}`}>
                    {d.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-base mb-1">{d.label}</h3>
                  <p className="text-white/55 text-sm font-body">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Memoriam */}
      <section className="bg-[#0a0a0a] py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-2">In Memoriam</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase tracking-wide">We Remember Our Brothers</h2>
            <p className="text-white/50 font-body mt-3 max-w-xl mx-auto text-sm">
              We honor those who walked these docks, fought for what was right, and gave everything to the work and the union.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'David Bartholomew',
                local: 'ILWU Local 23',
                text: 'David was a dedicated member of Local 23 who showed up every day with pride in the work and loyalty to his brothers and sisters on the docks. His presence at the hall and on the waterfront is deeply missed. The union he loved is stronger because he was part of it.',
              },
              {
                name: 'Marco Hernando',
                local: 'ILWU Local 23',
                text: 'Marco brought the same toughness and heart to his union work that he did to every shift. He believed in what this local stands for. His family, his fellow longshore workers, and everyone who knew him carry his memory forward. He is not forgotten.',
              },
            ].map(m => (
              <div key={m.name} className="border border-white/10 p-8 bg-white/3 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-ilwu-red/20 border border-ilwu-red/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-ilwu-red/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-white text-xl">{m.name}</h3>
                    <p className="text-ilwu-red text-sm font-body font-semibold uppercase tracking-wider">{m.local}</p>
                  </div>
                </div>
                <p className="text-white/65 font-body text-sm leading-relaxed border-l-2 border-ilwu-red/30 pl-4">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links to Member Hub */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,15,15,0.97) 0%, rgba(15,15,15,0.80) 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-2">For Members</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl uppercase tracking-wide">Member Resources</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="border border-white/10 hover:border-ilwu-red/60 bg-white/5 hover:bg-ilwu-red/10 p-6 flex flex-col items-center gap-3 text-center transition-all group"
              >
                <span className="text-3xl">{link.icon}</span>
                <span className="font-body font-bold text-white group-hover:text-ilwu-red text-sm uppercase tracking-wider transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
