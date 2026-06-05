const officers = [
  { name: 'Jared Faker', title: 'President', phone: '(253) 572-0220', email: 'president@ilwu23.com' },
  { name: 'Brock Graber', title: 'Vice President', phone: '(253) 572-0220', email: 'vicepresident@ilwu23.com' },
  { name: 'Conrad Spell', title: 'Secretary-Treasurer', phone: '(253) 572-0220', email: 'secretary@ilwu23.com' },
  { name: 'Wyatt Ellis', title: 'Sergeant-at-Arms', phone: '(253) 572-0220', email: 'soa@ilwu23.com' },
]

export default function Contact() {
  return (
    <div className="font-body min-h-screen bg-ilwu-black">
      {/* Header */}
      <section className="pt-28 pb-16 border-b border-white/10 bg-ilwu-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-ilwu-red tracking-[0.2em] text-sm uppercase mb-3">Get in Touch</p>
          <h1 className="font-display text-white text-5xl sm:text-7xl uppercase leading-none mb-4">Contact</h1>
          <p className="text-white/60 font-body text-lg max-w-xl">
            Have a question, a grievance, or a safety concern? The hall is here for you. Don't wait — call.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Hall Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <p className="font-display text-ilwu-red tracking-[0.2em] text-xs uppercase mb-4">Dispatch Hall</p>
                <div className="border border-white/10 p-6 bg-white/3 space-y-5">
                  <div>
                    <h3 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-2">Address</h3>
                    <address className="not-italic text-white/65 font-body text-sm leading-relaxed">
                      3600 Port of Tacoma Rd<br />
                      Tacoma, WA 98424
                    </address>
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-2">Phone</h3>
                    <a href="tel:+12535720220" className="font-display text-ilwu-red text-2xl tracking-wide hover:text-ilwu-red-light transition-colors">
                      (253) 572-0220
                    </a>
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-2">Office Hours</h3>
                    <div className="text-white/65 font-body text-sm space-y-1">
                      <p>Monday – Friday: 7:00 AM – 4:00 PM</p>
                      <p>Saturday: 7:00 AM – 12:00 PM</p>
                      <p className="text-white/40">Closed Sundays & Holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <p className="font-display text-ilwu-red tracking-[0.2em] text-xs uppercase mb-4">Location</p>
                <div
                  className="w-full h-52 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3"
                  style={{
                    backgroundImage: `linear-gradient(rgba(15,15,15,0.7),rgba(15,15,15,0.7)), url('https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=600&q=80&auto=format&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <svg className="w-8 h-8 text-ilwu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-white/60 font-body text-xs text-center px-4">
                    3600 Port of Tacoma Rd<br />Tacoma, WA 98424
                  </p>
                  <a
                    href="https://maps.google.com/?q=3600+Port+of+Tacoma+Rd+Tacoma+WA+98424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ilwu-red hover:text-ilwu-red-light text-xs font-body font-semibold uppercase tracking-wider transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Officers Contact */}
            <div className="lg:col-span-2">
              <p className="font-display text-ilwu-red tracking-[0.2em] text-xs uppercase mb-4">Officers</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {officers.map(o => (
                  <div key={o.name} className="border border-white/10 p-5 bg-white/3 hover:border-white/20 transition-colors">
                    <h3 className="font-body font-bold text-white text-base">{o.name}</h3>
                    <p className="font-display text-ilwu-red text-xs uppercase tracking-widest mt-0.5 mb-4">{o.title}</p>
                    <div className="space-y-2">
                      <a href={`tel:${o.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-white/55 hover:text-white text-sm font-body transition-colors">
                        <svg className="w-4 h-4 text-ilwu-red/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {o.phone}
                      </a>
                      <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-white/55 hover:text-white text-sm font-body transition-colors">
                        <svg className="w-4 h-4 text-ilwu-red/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {o.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency / Urgent */}
              <div className="border border-ilwu-red/40 bg-ilwu-red/5 p-6">
                <h3 className="font-body font-bold text-white text-base mb-2">Urgent: Grievance or Safety Issue?</h3>
                <p className="text-white/65 font-body text-sm leading-relaxed mb-4">
                  If you are facing discipline, termination, or an unsafe work condition — call the hall immediately. Do not respond to management without union representation present. Time limits on grievances are strict. Your rights depend on acting quickly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+12535720220"
                    className="bg-ilwu-red hover:bg-ilwu-red-dark text-white font-body font-semibold px-6 py-3 uppercase tracking-widest text-sm transition-colors"
                  >
                    Call the Hall
                  </a>
                  <a
                    href="/your-rights"
                    className="border border-white/30 text-white hover:bg-white/10 font-body font-semibold px-6 py-3 uppercase tracking-widest text-sm transition-colors"
                  >
                    Know Your Rights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
