const officers = [
  { name: 'Jared Faker',  title: 'President',          phone: '(253) 572-0220', email: 'president@ilwu23.com'      },
  { name: 'Brock Graber', title: 'Vice President',      phone: '(253) 572-0220', email: 'vicepresident@ilwu23.com'  },
  { name: 'Conrad Spell', title: 'Secretary-Treasurer', phone: '(253) 572-0220', email: 'secretary@ilwu23.com'      },
  { name: 'Wyatt Ellis',  title: 'Sergeant-at-Arms',   phone: '(253) 572-0220', email: 'soa@ilwu23.com'            },
]

export default function Contact() {
  return (
    <div className="font-body" style={{ background: '#F7F6F2', minHeight: '100vh' }}>

      {/* Header */}
      <section className="texture-dots" style={{ background: '#00305b', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow mb-3">Get in Touch</span>
          <h1 className="font-display text-white uppercase leading-none mb-4" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            Contact
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl">
            Have a question, a grievance, or a safety concern? The hall is here for you. Don't wait - call.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Hall info */}
            <div className="space-y-8">
              <div>
                <span className="yellow-rule" style={{ background: '#00305b' }} />
                <p className="font-display uppercase tracking-widest text-xs mb-4" style={{ color: '#377dbd' }}>Dispatch Hall</p>
                <div style={{ background: '#ffffff', border: '1px solid #E8E5DC', padding: '1.75rem' }} className="space-y-5 shadow-sm">
                  {[
                    { label: 'Address',      content: <address className="not-italic font-body text-sm leading-relaxed" style={{ color: '#0F0F0F', opacity: 0.65 }}>3600 Port of Tacoma Rd<br />Tacoma, WA 98424</address> },
                    { label: 'Phone',        content: <a href="tel:+12535720220" className="font-mono font-medium transition-colors hover:text-[#377dbd]" style={{ color: '#00305b', fontSize: '1.5rem', letterSpacing: '0.03em' }}>(253) 572-0220</a> },
                    { label: 'Office Hours', content: <div className="font-body text-sm space-y-1" style={{ color: '#0F0F0F', opacity: 0.65 }}><p>Monday - Friday: 8:00 AM - 4:00 PM</p><p style={{ opacity: 0.5 }}>Closed Saturdays, Sundays &amp; Holidays</p></div> },
                  ].map(row => (
                    <div key={row.label}>
                      <h3 className="font-body font-bold text-xs uppercase tracking-wider mb-2" style={{ color: '#00305b' }}>{row.label}</h3>
                      {row.content}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="texture-dots flex flex-col items-center justify-center gap-3"
                style={{ height: '180px', background: '#00305b', border: '1px solid rgba(55,125,189,0.3)' }}
              >
                <svg className="w-7 h-7" style={{ color: '#fff216' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/65 font-body text-xs text-center">3600 Port of Tacoma Rd<br />Tacoma, WA 98424</p>
                <a
                  href="https://maps.google.com/?q=3600+Port+of+Tacoma+Rd+Tacoma+WA+98424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-semibold text-xs uppercase tracking-wider transition-colors hover:text-white"
                  style={{ color: '#fff216' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Officers */}
            <div className="lg:col-span-2">
              <span className="yellow-rule" style={{ background: '#00305b' }} />
              <p className="font-display uppercase tracking-widest text-xs mb-5" style={{ color: '#377dbd' }}>Officers</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {officers.map(o => (
                  <div
                    key={o.name}
                    style={{ background: '#ffffff', border: '1px solid #E8E5DC', padding: '1.25rem' }}
                    className="transition-colors hover:border-[#377dbd]"
                  >
                    <h3 className="font-body font-bold text-base" style={{ color: '#00305b' }}>{o.name}</h3>
                    <p className="font-display uppercase tracking-widest mt-0.5 mb-4" style={{ color: '#377dbd', fontSize: '0.7rem' }}>{o.title}</p>
                    <div className="space-y-2">
                      <a href={`tel:${o.phone.replace(/[^0-9]/g,'')}`}
                        className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-[#00305b]"
                        style={{ color: '#0F0F0F', opacity: 0.55 }}>
                        <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#377dbd' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {o.phone}
                      </a>
                      <a href={`mailto:${o.email}`}
                        className="flex items-center gap-2 font-mono transition-colors hover:text-[#00305b] break-all"
                        style={{ color: '#0F0F0F', opacity: 0.55, fontSize: '0.7rem' }}>
                        <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#377dbd' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {o.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(0,48,91,0.06)', border: '1px solid rgba(0,48,91,0.15)', padding: '1.75rem' }}>
                <h3 className="font-body font-bold text-base mb-2" style={{ color: '#00305b' }}>Urgent: Grievance or Safety Issue?</h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#0F0F0F', opacity: 0.65 }}>
                  If you are facing discipline, termination, or an unsafe work condition - call the hall immediately.
                  Do not respond to management without union representation. Time limits are strict.
                </p>
                <p className="font-body text-xs italic mb-5" style={{ color: '#0F0F0F', opacity: 0.45 }}>
                  For emergencies contact your Business Agent directly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+12535720220" className="btn-yellow" style={{ fontSize: '0.8125rem', padding: '0.7rem 1.5rem' }}>Call the Hall</a>
                  <a href="/your-rights"    className="btn-ghost-navy" style={{ fontSize: '0.8125rem', padding: '0.7rem 1.5rem' }}>Know Your Rights</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
