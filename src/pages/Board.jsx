import { useState, useEffect, useCallback } from 'react'

// ─── TERMINAL COLOURS ────────────────────────────────────────────────────────
function terminalColor(t) {
  const map = {
    PCT: '#1D4ED8', SSAT: '#059669', WUT: '#D97706', CG: '#7C3AED',
    P3: '#0891B2', P4: '#0891B2', RR: '#9CA3AF', TOTE: '#374151',
  }
  return map[t?.toUpperCase()] || '#00305b'
}

// ─── PARSING ─────────────────────────────────────────────────────────────────
// Mirror the dispatch app's proven regex approach so &nbsp; is handled
// correctly (DOMParser turns &nbsp; into   which is truthy, not "").
// clean: strip "update" noise and non-breaking spaces
function clean(s) {
  return (s || '').replace(/update/gi, '').replace(/ /g, ' ').trim()
}

function parseBoard(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')

  // Date + shift from h1 headings
  const h1s  = [...doc.querySelectorAll('h1')].map(h => h.textContent.trim())
  const date  = h1s[0] || ''
  const shift = h1s.find(h => /NIGHT|DAY/i.test(h)) || h1s[1] || ''

  // Find the HOUSE WORK divider — check headings, bold, table cells, paragraphs
  let houseMarker = null
  for (const el of doc.querySelectorAll('h1,h2,h3,h4,b,strong,td,th,p')) {
    if (/house\s*work/i.test(el.textContent) && el.textContent.trim().length < 50) {
      houseMarker = el
      break
    }
  }

  const vessels   = []
  const houseRows = []

  for (const table of doc.querySelectorAll('table')) {
    // Any table that appears after the house-work marker in DOM order is house work
    const isHouse = houseMarker != null &&
      !!(houseMarker.compareDocumentPosition(table) & Node.DOCUMENT_POSITION_FOLLOWING)

    for (const row of table.querySelectorAll('tr')) {
      const cells = [...row.querySelectorAll('td')].map(td => clean(td.textContent))
      const name  = cells[0]
      if (!name || /^vessel$/i.test(name) || /^terminal$/i.test(name) ||
          /house\s*work/i.test(name)) continue

      if (isHouse) {
        houseRows.push({
          name,
          details:   cells.slice(1, 11).filter(c => isValid(c)),
          startTime: clean(cells[11] || cells[cells.length - 1] || ''),
        })
      } else {
        vessels.push({
          vessel:    name,
          terminal:  cells[1]  || '',
          units:     cells[2]  || '',
          cranes:    cells[3]  || '',
          xmen:      cells[4]  || '',
          skxmen:    cells[5]  || '',
          pd:        cells[6]  || '',
          lasher:    cells[7]  || '',
          bus:       cells[8]  || '',
          startTime: cells[11] || '',
        })
      }
    }
  }

  return { date, shift, vessels, houseRows }
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function isValid(v) {
  return !!v && v !== '0' && v !== 'update'
}

function timeSince(date) {
  if (!date) return null
  const secs = Math.floor((Date.now() - date.getTime()) / 1000)
  if (secs < 10)   return 'just now'
  if (secs < 60)   return `${secs}s ago`
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`
  return `${Math.floor(secs / 3600)}h ago`
}

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth)
  useEffect(() => {
    const h = () => setW(window.innerWidth)
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
  }, [])
  return w
}

// ─── THEME ───────────────────────────────────────────────────────────────────
function getTheme(dark) {
  return dark ? {
    pageBg:       '#0a1929',
    card:         '#0d2240',
    border:       'rgba(55,125,189,0.2)',
    text:         '#ffffff',
    muted:        'rgba(255,255,255,0.45)',
    rule:         'rgba(255,255,255,0.12)',
    tabInactive:  '#0a1929',
    tabColor:     'rgba(255,255,255,0.35)',
    tsBar:        '#0d2240',
    tsBorder:     'rgba(55,125,189,0.15)',
    startChip:    '#1a3a5c',
    startColor:   '#a0c4e8',
    houseChip:    '#1a3a5c',
    houseChipTxt: 'rgba(255,255,255,0.75)',
    annotation:   'rgba(255,255,255,0.28)',
    sectionLabel: 'rgba(255,255,255,0.45)',
    statBg:       '#0d2240',
  } : {
    pageBg:       '#F7F6F2',
    card:         '#ffffff',
    border:       '#E8E5DC',
    text:         '#00305b',
    muted:        '#6B7280',
    rule:         '#E8E5DC',
    tabInactive:  '#F7F6F2',
    tabColor:     '#9CA3AF',
    tsBar:        '#ffffff',
    tsBorder:     '#F0EDE8',
    startChip:    '#EFF6FF',
    startColor:   '#00305b',
    houseChip:    '#F3F4F6',
    houseChipTxt: '#374151',
    annotation:   '#9CA3AF',
    sectionLabel: '#00305b',
    statBg:       '#00305b',
  }
}

// ─── BADGE ───────────────────────────────────────────────────────────────────
function Badge({ label, value, color, bg }) {
  return (
    <div style={{ background: bg, borderRadius: 6, padding: '8px 12px',
      display: 'flex', gap: label ? 4 : 0, alignItems: 'center', flexShrink: 0 }}>
      {label && (
        <span style={{ fontSize: 9, fontWeight: 700, color, textTransform: 'uppercase',
          letterSpacing: '0.5px' }}>{label}</span>
      )}
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color, lineHeight: 1 }}>
        {value}
      </span>
    </div>
  )
}

// ─── VESSEL CARD ─────────────────────────────────────────────────────────────
const ANNOTATION_DAYS = /^(SUNDAY|MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY)$/i
function isAnnotation(v) {
  return ANNOTATION_DAYS.test(v.terminal?.trim()) || v.vessel?.trim().startsWith('NO ')
}

function VesselCard({ v, T }) {
  const color = terminalColor(v.terminal)

  if (isAnnotation(v)) {
    return (
      <div style={{ fontSize: 12, color: T.annotation, fontStyle: 'italic',
        padding: '8px 16px', borderTop: `1px solid ${T.border}` }}>
        {v.vessel}{v.terminal ? ` — ${v.terminal}` : ''}
      </div>
    )
  }

  return (
    <div style={{ background: T.card, borderRadius: 12, border: `1.5px solid ${T.border}`,
      borderLeft: `4px solid ${color}`, padding: '14px 16px', marginBottom: 10 }}>

      {/* Name + tracker */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: T.text }}>{v.vessel}</div>
        <a href={`https://www.marinetraffic.com/en/ais/home/shipname/${encodeURIComponent(v.vessel)}`}
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 16, textDecoration: 'none', padding: '2px 4px', flexShrink: 0, marginLeft: 8 }}
          title="Track on MarineTraffic" aria-label={`Track ${v.vessel} on MarineTraffic`}>
          ⚓
        </a>
      </div>

      {/* Start time (left) + terminal */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 5, marginBottom: 10, flexWrap: 'wrap' }}>
        {v.startTime && (
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 700,
            color: T.startColor, background: T.startChip, borderRadius: 6, padding: '2px 8px',
            whiteSpace: 'nowrap' }}>
            {v.startTime}
          </span>
        )}
        {v.terminal && (
          <span style={{ fontSize: 12, color: T.muted }}>{v.terminal}</span>
        )}
      </div>

      {/* Badges: UNITS lead → CR → X → SK → PD → LASH → BUS */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {isValid(v.units)  && <Badge label=""     value={v.units}  color="#fff"    bg="#374151" />}
        {isValid(v.cranes) && <Badge label="CR"   value={v.cranes} color="#1D4ED8" bg="#EFF6FF" />}
        {isValid(v.xmen)   && <Badge label="X"    value={v.xmen}   color="#059669" bg="#ECFDF5" />}
        {isValid(v.skxmen) && <Badge label="SK"   value={v.skxmen} color="#059669" bg="#ECFDF5" />}
        {isValid(v.pd)     && <Badge label="PD"   value={v.pd}     color="#D97706" bg="#FFFBEB" />}
        {isValid(v.lasher) && <Badge label="LASH" value={v.lasher} color="#7C3AED" bg="#F5F3FF" />}
        {isValid(v.bus)    && <Badge label="BUS"  value={v.bus}    color="#fff"    bg="#0891B2" />}
      </div>
    </div>
  )
}

// ─── HOUSE CARD ──────────────────────────────────────────────────────────────
function HouseCard({ h, T }) {
  return (
    <div style={{ background: T.card, borderRadius: 12, border: `1.5px solid ${T.border}`,
      padding: '14px 16px', marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: T.text }}>{h.name}</div>
        {h.startTime && (
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 700,
            color: T.startColor, background: T.startChip, borderRadius: 6, padding: '2px 8px',
            whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 8 }}>
            {h.startTime}
          </span>
        )}
      </div>
      {h.details.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {h.details.map((d, i) => (
            <span key={i} style={{ background: T.houseChip, borderRadius: 6, padding: '5px 9px',
              fontSize: 11, fontWeight: 600, color: T.houseChipTxt,
              fontFamily: "'DM Mono', monospace" }}>
              {d}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── SECTION HEADERS ─────────────────────────────────────────────────────────
function VesselHeader({ count, T }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: 2,
        color: T.sectionLabel, whiteSpace: 'nowrap' }}>
        VESSEL WORK
      </span>
      {count > 0 && (
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.muted }}>
          {count} ships
        </span>
      )}
      <div style={{ flex: 1, height: 1, background: T.rule }} />
    </div>
  )
}

function HouseHeader({ T }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '28px 0 12px' }}>
      <div style={{ flex: 1, height: 1, background: T.rule }} />
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: 2,
        color: T.muted, whiteSpace: 'nowrap' }}>
        HOUSE WORK
      </span>
      <div style={{ flex: 1, height: 1, background: T.rule }} />
    </div>
  )
}

// ─── BOARD ───────────────────────────────────────────────────────────────────
export default function Board() {
  const params = new URLSearchParams(window.location.search)
  const [shift, setShift]             = useState(params.get('shift') || 'night')
  const [boardData, setBoardData]     = useState(null)
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [tick, setTick]               = useState(0)
  const [dark, setDark]               = useState(false)
  const w         = useWindowWidth()
  const isDesktop = w >= 768
  const T         = getTheme(dark)

  const fetchBoard = useCallback(async (s) => {
    setLoading(true)
    setError(null)
    try {
      const screen = s === 'night' ? '1' : '2'
      const res  = await fetch(`/.netlify/functions/board?screen=${screen}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const html = await res.text()
      setBoardData(parseBoard(html))
      setLastUpdated(new Date())
    } catch(e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchBoard(shift) }, [shift, fetchBoard])

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 15000)
    return () => clearInterval(id)
  }, [])

  const vessels    = boardData?.vessels   ?? []
  const houseRows  = boardData?.houseRows ?? []
  const updatedLabel = timeSince(lastUpdated)

  return (
    <div className="pt-16 md:pt-20"
      style={{ background: T.pageBg, minHeight: '100vh', paddingBottom: 80,
        transition: 'background 0.2s' }}>

      {/* ── TABS + DARK TOGGLE ── */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${T.border}`,
        background: T.tsBar, position: 'sticky', top: 64, zIndex: 9 }}>
        {['night', 'day'].map(s => (
          <button key={s} onClick={() => setShift(s)}
            aria-pressed={shift === s}
            style={{
              flex: 1, padding: '14px 0', border: 'none', cursor: 'pointer',
              background: shift === s ? '#00305b' : T.tabInactive,
              color:      shift === s ? '#ffffff'  : T.tabColor,
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 14, letterSpacing: 2,
              borderBottom: shift === s ? '3px solid #fff216' : '3px solid transparent',
              transition: 'all 0.15s',
            }}>
            {s === 'night'
              ? `🌙 NIGHT · ${boardData?.date || ''}`
              : `☀️ DAY · ${boardData?.date || ''}`}
          </button>
        ))}
        <button onClick={() => setDark(d => !d)}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            padding: '14px 16px', border: 'none', cursor: 'pointer',
            borderLeft: `1px solid ${T.border}`,
            background: dark ? '#0a1929' : '#F7F6F2',
            color: dark ? '#fff216' : '#9CA3AF',
            fontSize: 15, borderBottom: '3px solid transparent',
          }}>
          {dark ? '☀' : '◑'}
        </button>
      </div>

      {/* ── TIMESTAMP ── */}
      {lastUpdated && !loading && (
        <div style={{ padding: '6px 16px', background: T.tsBar,
          borderBottom: `1px solid ${T.tsBorder}` }}>
          <span style={{ fontSize: 11, color: '#22c55e', fontFamily: "'DM Mono', monospace" }}>
            ● Updated {updatedLabel} · {boardData?.date}
          </span>
        </div>
      )}

      {/* ── ERROR ── */}
      {error && (
        <div style={{ padding: '16px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 10,
            padding: '14px 16px', color: '#991B1B', fontSize: 13 }}>
            Could not load board: {error}
          </div>
        </div>
      )}

      {/* ── GRID ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isDesktop ? '65fr 35fr' : '1fr',
        gap: 24,
        padding: isDesktop ? '16px 24px' : '16px 14px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>

        {/* LEFT — Vessel work */}
        <div>
          {loading && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: T.muted, fontSize: 14 }}>
              Loading board…
            </div>
          )}

          {!loading && vessels.length > 0 && (
            <>
              <VesselHeader count={vessels.length} T={T} />
              {vessels.map((v, i) => <VesselCard key={i} v={v} T={T} />)}
            </>
          )}

          {!loading && vessels.length === 0 && !error && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: T.muted, fontSize: 14 }}>
              No vessel assignments for this shift.
            </div>
          )}

          {/* Mobile: house work below vessels */}
          {!isDesktop && !loading && houseRows.length > 0 && (
            <>
              <HouseHeader T={T} />
              {houseRows.map((h, i) => <HouseCard key={i} h={h} T={T} />)}
            </>
          )}

          {/* Footer */}
          {!loading && (
            <div style={{ textAlign: 'center', padding: '24px 16px',
              borderTop: `1px solid ${T.border}`, marginTop: 16 }}>
              <a href={`http://ilwu23.com/?screen=${shift === 'night' ? '1' : '2'}`}
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#377dbd', fontWeight: 600, textDecoration: 'none' }}>
                View official board at ilwu23.com ↗
              </a>
              <div style={{ marginTop: 12 }}>
                <a href="https://checkmyspins.com" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: dark ? '#a0c4e8' : '#00305b', fontWeight: 700, textDecoration: 'none' }}>
                  ⚓ Check your spin number at CheckMySpins →
                </a>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — Stats + House work (desktop only) */}
        {isDesktop && (
          <div style={{ position: 'sticky', top: 120, alignSelf: 'start' }}>
            {!loading && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                {[
                  { num: vessels.length,               label: 'Vessels Working' },
                  { num: vessels[0]?.startTime || '—', label: 'First Start'     },
                  { num: shift.toUpperCase(),           label: 'Current Board'  },
                ].map(({ num, label }) => (
                  <div key={label} style={{ background: T.statBg, borderRadius: 10, padding: '16px 20px' }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40,
                      color: '#fff216', lineHeight: 1 }}>
                      {num}
                    </div>
                    <div style={{ fontSize: 10, color: '#fff', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && houseRows.length > 0 && (
              <>
                <HouseHeader T={T} />
                {houseRows.map((h, i) => <HouseCard key={i} h={h} T={T} />)}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
