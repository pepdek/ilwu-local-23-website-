import { useState, useEffect, useCallback } from 'react'

function terminalColor(t) {
  const map = {
    PCT: '#1D4ED8', SSAT: '#059669', WUT: '#D97706', CG: '#7C3AED',
    P3: '#0891B2', P4: '#0891B2', RR: '#9CA3AF', TOTE: '#374151',
  }
  return map[t?.toUpperCase()] || '#00305b'
}

function parseBoard(html) {
  const parser = new DOMParser()
  const doc    = parser.parseFromString(html, 'text/html')
  const rows   = [...doc.querySelectorAll('table tr')].slice(1)
  const vessels = rows.map(row => {
    const cells = [...row.querySelectorAll('td')].map(td => td.textContent.trim())
    return {
      vessel:    cells[0]  || '',
      terminal:  cells[1]  || '',
      units:     cells[2]  || '',
      cranes:    cells[3]  || '',
      xmen:      cells[4]  || '',
      skxmen:    cells[5]  || '',
      pd:        cells[6]  || '',
      lasher:    cells[7]  || '',
      startTime: cells[11] || '',
    }
  }).filter(v => v.vessel && v.vessel !== 'VESSEL' && v.vessel !== 'update')

  const houseItems = [...doc.querySelectorAll('ul li')].map(li =>
    li.textContent.replace(/update/gi, '').trim().replace(/\s+/g, ' ')
  ).filter(Boolean)

  const headings = [...doc.querySelectorAll('h1')].map(h => h.textContent.trim())
  const date  = headings[0] || ''
  const shift = headings[1] || ''

  return { date, shift, vessels, houseItems }
}

function Badge({ label, value, color, bg }) {
  return (
    <div style={{ background: bg, borderRadius: 6, padding: '8px 12px',
      display: 'flex', gap: 4, alignItems: 'center' }}>
      <span style={{ fontSize: 9, fontWeight: 700, color, textTransform: 'uppercase',
        letterSpacing: '0.5px' }}>{label}</span>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color,
        lineHeight: 1 }}>{value}</span>
    </div>
  )
}

function isValid(v) {
  return v && v !== 'update' && v !== '0'
}

function VesselCard({ v }) {
  const color = terminalColor(v.terminal)
  return (
    <div style={{ background: '#fff', borderRadius: 12, border: '1.5px solid #E8E5DC',
      borderLeft: `4px solid ${color}`, padding: '14px 16px', marginBottom: 10 }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: '#00305b' }}>{v.vessel}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, marginLeft: 8 }}>
          {v.startTime && (
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: '#00305b',
              fontWeight: 700, background: '#F7F6F2', borderRadius: 6, padding: '3px 8px',
              whiteSpace: 'nowrap' }}>
              {v.startTime}
            </div>
          )}
          <a href={`https://www.marinetraffic.com/en/ais/home/shipname/${encodeURIComponent(v.vessel)}`}
            target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 16, textDecoration: 'none', padding: '2px 4px' }}
            title="Track on MarineTraffic"
            aria-label={`Track ${v.vessel} on MarineTraffic`}>
            ⚓
          </a>
        </div>
      </div>

      <div style={{ fontSize: 12, color: '#6B7280', marginTop: 3, marginBottom: 10 }}>
        {v.terminal ? `Terminal: ${v.terminal}` : ''}
        {v.units && v.units !== '0' && v.units !== 'update' ? ` · ${v.units} units` : ''}
      </div>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {isValid(v.cranes) && <Badge label="CR"   value={v.cranes} color="#1D4ED8" bg="#EFF6FF" />}
        {isValid(v.xmen)   && <Badge label="X"    value={v.xmen}   color="#059669" bg="#ECFDF5" />}
        {isValid(v.skxmen) && <Badge label="SK-X" value={v.skxmen} color="#059669" bg="#ECFDF5" />}
        {isValid(v.pd)     && <Badge label="PD"   value={v.pd}     color="#D97706" bg="#FFFBEB" />}
        {isValid(v.lasher) && <Badge label="LASH" value={v.lasher} color="#7C3AED" bg="#F5F3FF" />}
      </div>
    </div>
  )
}

function VesselHeader({ count }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: 2, color: '#00305b', whiteSpace: 'nowrap' }}>
        VESSEL WORK
      </span>
      {count > 0 && (
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#9CA3AF' }}>
          {count} ships
        </span>
      )}
      <div style={{ flex: 1, height: 1, background: '#E8E5DC' }} />
    </div>
  )
}

function HouseHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '28px 0 12px' }}>
      <div style={{ flex: 1, height: 1, background: '#E8E5DC' }} />
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: 2, color: '#6B7280', whiteSpace: 'nowrap' }}>
        HOUSE WORK
      </span>
      <div style={{ flex: 1, height: 1, background: '#E8E5DC' }} />
    </div>
  )
}

function HouseList({ items }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, border: '1.5px solid #E8E5DC', overflow: 'hidden' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          padding: '12px 14px',
          borderBottom: i < items.length - 1 ? '1px solid #F0EDE4' : 'none',
          fontSize: 13,
          color: '#374151',
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.5,
        }}>
          {item}
        </div>
      ))}
    </div>
  )
}

function timeSince(date) {
  if (!date) return null
  const secs = Math.floor((Date.now() - date.getTime()) / 1000)
  if (secs < 10)  return 'just now'
  if (secs < 60)  return `${secs}s ago`
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`
  return `${Math.floor(secs / 3600)}h ago`
}

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth)
  useEffect(() => {
    const handler = () => setW(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return w
}

export default function Board() {
  const params = new URLSearchParams(window.location.search)
  const [shift, setShift]             = useState(params.get('shift') || 'night')
  const [boardData, setBoardData]     = useState(null)
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [tick, setTick]               = useState(0)
  const w         = useWindowWidth()
  const isDesktop = w >= 768

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

  const vessels      = boardData?.vessels    ?? []
  const houseItems   = boardData?.houseItems ?? []
  const updatedLabel = timeSince(lastUpdated)

  return (
    <div className="pt-16 md:pt-20" style={{ background: '#F7F6F2', minHeight: '100vh', paddingBottom: 80 }}>

      {/* ── TABS ── */}
      <div style={{
        display: 'flex', borderBottom: '1px solid #E8E5DC',
        background: '#fff', position: 'sticky', top: 64, zIndex: 9,
      }}>
        {['night', 'day'].map(s => (
          <button key={s} onClick={() => setShift(s)}
            aria-pressed={shift === s}
            style={{
              flex: 1, padding: '14px 0', border: 'none', cursor: 'pointer',
              background: shift === s ? '#00305b' : '#F7F6F2',
              color:      shift === s ? '#fff'    : '#9CA3AF',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 15, letterSpacing: 2,
              borderBottom: shift === s ? '4px solid #fff216' : '4px solid transparent',
              transition: 'all 0.15s',
            }}>
            {s === 'night'
              ? `NIGHT WORK · ${boardData?.date || ''}`
              : `DAY WORK · ${boardData?.date || ''}`}
          </button>
        ))}
      </div>

      {/* ── TIMESTAMP ── */}
      {lastUpdated && !loading && (
        <div style={{ padding: '6px 16px', background: '#fff', borderBottom: '1px solid #F0EDE8' }}>
          <span style={{ fontSize: 11, color: '#059669', fontFamily: "'DM Mono', monospace" }}>
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
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#6B7280', fontSize: 14 }}>
              Loading board…
            </div>
          )}

          {!loading && vessels.length > 0 && (
            <>
              <VesselHeader count={vessels.length} />
              {vessels.map((v, i) => <VesselCard key={i} v={v} />)}
            </>
          )}

          {!loading && vessels.length === 0 && !error && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#6B7280', fontSize: 14 }}>
              No vessel assignments for this shift.
            </div>
          )}

          {/* Mobile: house work below vessels */}
          {!isDesktop && !loading && houseItems.length > 0 && (
            <>
              <HouseHeader />
              <HouseList items={houseItems} />
            </>
          )}

          {/* Footer */}
          {!loading && (
            <div style={{ textAlign: 'center', padding: '24px 16px', borderTop: '1px solid #E8E5DC', marginTop: 16 }}>
              <a
                href={`http://ilwu23.com/?screen=${shift === 'night' ? '1' : '2'}`}
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#377dbd', fontWeight: 600, textDecoration: 'none' }}>
                View official board at ilwu23.com ↗
              </a>
              <div style={{ marginTop: 12 }}>
                <a href="https://checkmyspins.com" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: '#00305b', fontWeight: 700, textDecoration: 'none' }}>
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
                  <div key={label} style={{ background: '#00305b', borderRadius: 10, padding: '16px 20px' }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: '#fff216', lineHeight: 1 }}>
                      {num}
                    </div>
                    <div style={{ fontSize: 10, color: '#fff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && houseItems.length > 0 && (
              <>
                <HouseHeader />
                <HouseList items={houseItems} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
