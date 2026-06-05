import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ilwu-black border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-ilwu-red flex items-center justify-center">
                <span className="font-display text-white text-xs">23</span>
              </div>
              <span className="font-display text-white text-xl tracking-widest">ILWU LOCAL 23</span>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed">
              International Longshore and Warehouse Union<br />
              Local 23 — Port of Tacoma
            </p>
            <p className="text-white/60 text-sm font-body mt-3">
              <span className="text-ilwu-red font-semibold">An Injury to One Is an Injury to All.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white tracking-widest text-sm uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/member-hub', label: 'Member Hub' },
                { to: '/news', label: 'News & Announcements' },
                { to: '/your-rights', label: 'Your Rights' },
                { to: '/leadership', label: 'Leadership' },
                { to: '/history', label: 'Our History' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-white text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & External */}
          <div>
            <h4 className="font-display text-white tracking-widest text-sm uppercase mb-4">Contact</h4>
            <address className="not-italic text-white/60 text-sm font-body space-y-1 leading-relaxed mb-4">
              <p>3600 Port of Tacoma Rd</p>
              <p>Tacoma, WA 98424</p>
              <p className="mt-2">
                <a href="tel:+12535720220" className="hover:text-white transition-colors">(253) 572-0220</a>
              </p>
            </address>
            <h4 className="font-display text-white tracking-widest text-sm uppercase mb-3 mt-5">Affiliates</h4>
            <ul className="space-y-2">
              {[
                { href: 'https://www.ilwu.org', label: 'ILWU International' },
                { href: 'https://www.pmaw.org', label: 'Pacific Maritime Association' },
                { href: 'https://www.wslc.org', label: 'WA State Labor Council' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm font-body transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body">
            © 2026 ILWU Local 23. Port of Tacoma, Washington. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            International Longshore and Warehouse Union
          </p>
        </div>
      </div>
    </footer>
  )
}
