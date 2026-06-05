import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#00305b', borderTop: '1px solid rgba(55,125,189,0.35)' }} className="pt-14 pb-7">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Blue divider rule */}
        <div style={{ height: '3px', background: '#377dbd', marginBottom: '3rem', width: '3rem' }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/ilwu-logo.avif" alt="ILWU" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-display text-white tracking-widest" style={{ fontSize: '1.1rem' }}>ILWU LOCAL 23</div>
                <div className="text-white/40 font-body mt-0.5" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>PORT OF TACOMA, WASHINGTON</div>
              </div>
            </div>
            <p className="text-white/55 font-body text-sm leading-relaxed mb-4">
              International Longshore and Warehouse Union<br />
              Local 23 - Port of Tacoma, Washington
            </p>
            <p style={{ color: '#fff216' }} className="font-body font-semibold text-sm italic">
              "An Injury to One Is an Injury to All."
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-white tracking-widest text-sm uppercase mb-5" style={{ letterSpacing: '0.15em' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/member-hub',  label: 'Member Hub',          internal: true },
                { to: '/news',        label: 'News & Announcements', internal: true },
                { to: '/your-rights', label: 'Your Rights',          internal: true },
                { to: '/leadership',  label: 'Leadership',           internal: true },
                { to: '/history',     label: 'Our History',          internal: true },
                { to: '/contact',     label: 'Contact',              internal: true },
              ].map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-white/50 transition-colors hover:text-[#fff216]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & affiliates */}
          <div>
            <h4 className="font-display text-white tracking-widest text-sm uppercase mb-5" style={{ letterSpacing: '0.15em' }}>
              Contact
            </h4>
            <address className="not-italic font-body text-sm text-white/55 leading-relaxed mb-5 space-y-1">
              <p>3600 Port of Tacoma Rd</p>
              <p>Tacoma, WA 98424</p>
              <a href="tel:+12535720220" className="block font-mono mt-2 text-white/70 hover:text-white transition-colors">
                (253) 572-0220
              </a>
              <p className="text-white/35 text-xs">Mon-Fri 8am-4pm</p>
            </address>

            <h4 className="font-display text-white tracking-widest text-sm uppercase mb-3" style={{ letterSpacing: '0.15em' }}>
              Affiliates
            </h4>
            <ul className="space-y-2">
              {[
                { href: 'https://www.ilwu.org',           label: 'ILWU International'            },
                { href: 'https://www.pmanet.org/',        label: 'Pacific Maritime Association'  },
                { href: 'https://www.wslc.org',           label: 'WA State Labor Council'        },
                { href: 'http://www.benefitplans.org',    label: 'Medical Benefits (ILWU-PMA)'  },
              ].map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/50 transition-colors hover:text-[#fff216] flex items-center gap-1.5"
                  >
                    {l.label}
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(55,125,189,0.2)', paddingTop: '1.5rem' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 font-body text-xs">
            © 2026 ILWU Local 23. Port of Tacoma, Washington. All rights reserved.
          </p>
          <p className="text-white/20 font-body text-xs">International Longshore and Warehouse Union</p>
        </div>
      </div>
    </footer>
  )
}
