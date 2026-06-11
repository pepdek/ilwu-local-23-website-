import { Link } from 'react-router-dom'

// Badge + URL helpers
function getBadge(href) {
  if (href.includes('.pdf')) return 'PDF'
  if (href.includes('docs.google.com/spreadsheets') || href.includes('sharepoint.com')) return 'Sheet'
  if (href.includes('drive.google.com')) return 'Drive'
  return null
}
function displayUrl(href) {
  const b = getBadge(href)
  if (b === 'PDF')   return 'PDF Document'
  if (b === 'Sheet') return href.includes('sharepoint') ? 'SharePoint · Excel' : 'Google Sheets'
  if (b === 'Drive') return 'Google Drive'
  try { return new URL(href).hostname.replace(/^www\./, '') } catch { return href.slice(0, 50) }
}
const BADGE_COLORS = { PDF: '#377dbd', Sheet: '#1a7f44', Drive: '#1967d2' }

function Card({ label, href, internal = false, isNew = false, subtitle = null }) {
  const isRoute = href.startsWith('/')
  const badge   = isRoute ? null : getBadge(href)
  const urlTxt  = isRoute ? href : displayUrl(href)

  function handleClick() {
    if (href.includes('checkmyspins.com')) {
      window.posthog?.capture('dispatch_app_opened')
    }
    window.posthog?.capture('member_hub_link_clicked', { label })
  }

  const inner = (
    <>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-body font-semibold text-white text-sm leading-tight">{label}</span>
          {badge && (
            <span
              className="font-mono text-white text-[9px] uppercase tracking-wider px-1.5 py-0.5 flex-shrink-0"
              style={{ background: BADGE_COLORS[badge], letterSpacing: '0.06em' }}
            >
              {badge}
            </span>
          )}
          {isNew && (
            <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 flex-shrink-0"
              style={{ background: '#059669', color: '#fff', letterSpacing: '0.06em' }}>
              NEW
            </span>
          )}
          {internal && !isNew && (
            <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 flex-shrink-0"
              style={{ background: 'rgba(255,242,22,0.15)', color: '#fff216', border: '1px solid rgba(255,242,22,0.3)' }}>
              Internal
            </span>
          )}
        </div>
        {subtitle && (
          <p className="font-body text-white/50 mt-0.5" style={{ fontSize: '11px' }}>{subtitle}</p>
        )}
        <p className="font-mono text-white/35 mt-1 truncate" style={{ fontSize: '10px' }}>{urlTxt}</p>
      </div>
      <svg
        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors"
        style={{ color: '#fff216', opacity: 0.5 }}
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </>
  )

  const sharedStyle = {
    background: '#00305b',
    borderLeft: '3px solid #377dbd',
    padding: '0.875rem 1rem',
    textDecoration: 'none',
  }
  const hoverHandlers = {
    onMouseEnter: e => { e.currentTarget.style.borderLeftColor = '#fff216' },
    onMouseLeave: e => { e.currentTarget.style.borderLeftColor = '#377dbd' },
  }

  if (isRoute) {
    return (
      <Link
        to={href}
        onClick={handleClick}
        className="group flex items-start justify-between gap-3 transition-all duration-150"
        style={sharedStyle}
        {...hoverHandlers}
      >
        {inner}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group flex items-start justify-between gap-3 transition-all duration-150"
      style={sharedStyle}
      {...hoverHandlers}
    >
      {inner}
    </a>
  )
}

function Group({ label, cards }) {
  return (
    <div>
      <p
        className="font-display uppercase mb-3"
        style={{ color: '#00305b', fontSize: '1.1rem', letterSpacing: '0.12em' }}
      >
        {label}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {cards.map((c, i) => <Card key={i} {...c} />)}
      </div>
    </div>
  )
}

const groups = [
  {
    label: 'Work Boards',
    cards: [
      { label: 'Work Board', href: '/board', isNew: true, subtitle: 'Night + Day dispatch — mobile view' },
      { label: 'Dispatch App', href: 'https://checkmyspins.com' },
    ],
  },
  {
    label: 'Schedules & Rotations',
    cards: [
      { label: 'Shipping Schedule',    href: 'https://www.nwseaportalliance.com/cargo-operations/vessel-schedules-and-calendar' },
      { label: 'PMA Calendar',         href: 'https://www.ilwulocal23.org/_files/ugd/c965b9_2f504db1694846a6bab6150164b8c93c.pdf' },
      { label: 'Daily List Rotations', href: 'https://docs.google.com/spreadsheets/d/1mCUmQR_rJ27A4RECg61y8eGmIk0Pxw-PS8XL1cdaUqc/edit#gid=1759942718' },
      { label: 'Weekly List Rotations',href: 'https://docs.google.com/spreadsheets/d/1R0xFp89o9W1EW78mqwJYFbRbewNPVk2AglFbz1p1Q7A/edit?usp=sharing' },
    ],
  },
  {
    label: 'Spins',
    cards: [
      { label: 'Spins 5-30-2026', href: 'https://docs.google.com/spreadsheets/d/1hnw6TCvT7z71hxFv8Fn2L2G08yAaBdegwRLiUttyug8/edit?usp=sharing' },
      { label: 'Spins 6-6-2026',  href: 'https://docs.google.com/spreadsheets/d/1UVrSQ4Yz9s7Fy3R4riSce824vv0a3pYyMwC7M7EPvW4/edit?usp=sharing' },
    ],
  },
  {
    label: 'Clerk Earnings',
    cards: [
      { label: 'Clerk Earnings 5-30-2026', href: 'https://docs.google.com/spreadsheets/d/1HdtJcUnz1-ycuw6J1fgYvmvqYg7YfbMdJo5V-taM4lg/edit?usp=sharing' },
      { label: 'Clerk Earnings 6-6-2026',  href: 'https://docs.google.com/spreadsheets/d/1WtFVrHCuDoV44pn7yjDunz4Yg9ENsvaZi1L8t8oEcK4/edit?usp=sharing' },
    ],
  },
  {
    label: 'Lift Lists',
    cards: [
      { label: '2nd Quarter Day Lift',   href: 'https://drive.google.com/file/d/1nPatj28BD4M75ZjQ9zvgTWPOArmr_qTE/view?usp=sharing' },
      { label: '2nd Quarter Night Lift', href: 'https://drive.google.com/file/d/19KUpxK6yoGGJiuQ_tvgTWPOArmr_qTE/view?usp=sharing' },
    ],
  },
  {
    label: 'Pay & Benefits',
    cards: [
      { label: 'Payroll Self Service', href: 'https://selfservice.pmanet.org/' },
      { label: 'Medical Benefits',     href: 'http://www.benefitplans.org' },
      { label: 'Fidelity 401k',        href: 'https://nb.fidelity.com/public/nb/401k/home' },
      { label: 'ILWU Credit Union',    href: 'http://tlcu23.com' },
      { label: 'PMA Homepage',         href: 'https://www.pmanet.org/' },
    ],
  },
  {
    label: 'Vacation Lists',
    cards: [
      { label: 'B Vacation List',      href: 'https://ilwulocal23-my.sharepoint.com/:x:/g/personal/alex_ilwulocal23_org/IQA0jxgKzxvBSKWIIKkeRBknASGPf8rjnl1LrT66jkWw6_s?e=3YafmO' },
      { label: 'Casual Vacation List', href: 'https://ilwulocal23-my.sharepoint.com/:x:/g/personal/alex_ilwulocal23_org/IQDol52ERLuTS4kAtQTc6_BQAS9hsj7qcEFGnzSoH_DhPxk?e=EuUCDg' },
    ],
  },
  {
    label: 'Forms & Documents',
    cards: [
      { label: 'B Physician Statement',           href: 'https://www.ilwulocal23.org/_files/ugd/c965b9_4f5b830d4c534c33bf98ce3f7641e7d0.pdf' },
      { label: 'ID Casual Physician Statement',   href: 'https://www.ilwulocal23.org/_files/ugd/c965b9_5943ba5882e54e3999ab2af35c2dc1bb.pdf' },
      { label: 'Drug/Alcohol Recovery Resources', href: 'https://drive.google.com/file/d/1c4l3RFW1ZvzYCmW4CrAqvVr9yk2cH6qy/view?usp=sharing' },
    ],
  },
  {
    label: 'ILWU',
    cards: [
      { label: 'Coast Contact Info',   href: 'https://www.ilwu.org/contact/' },
      { label: 'ILWU International',   href: 'https://www.ilwu.org' },
      { label: 'Automation Petition',  href: 'https://actionnetwork.org/petitions/husky-ai?source=direct_link&' },
    ],
  },
]

export default function MemberHub() {
  return (
    <div className="font-body" style={{ background: '#F7F6F2', minHeight: '100vh' }}>

      {/* Header */}
      <section className="texture-dots" style={{ background: '#00305b', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-5">
            <img src="/ilwu-logo.avif" alt="ILWU" className="w-10 h-10 object-contain opacity-90" />
            <span className="eyebrow">Members Only</span>
          </div>
          <h1 className="font-display text-white uppercase leading-none mb-4" style={{ fontSize: 'clamp(3rem,7vw,5rem)' }}>
            Member Hub
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl">
            Everything you need, in one place. All real links - no placeholders.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section style={{ padding: '3.5rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-10">
            {groups.map((g, i) => <Group key={i} {...g} />)}
          </div>
        </div>
      </section>

      {/* Help strip */}
      <section className="texture-dots-dark" style={{ background: '#377dbd', padding: '3.5rem 10%' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 font-body text-sm mb-2">Need help? Contact the dispatch hall.</p>
          <a href="tel:+12535720220" className="font-mono text-white hover:text-[#fff216] transition-colors" style={{ fontSize: '2rem', letterSpacing: '0.05em' }}>
            (253) 572-0220
          </a>
          <p className="text-white/35 font-body text-xs mt-2 uppercase tracking-wider">
            3600 Port of Tacoma Rd · Tacoma WA 98424 · Mon-Fri 8am-4pm
          </p>
        </div>
      </section>
    </div>
  )
}
