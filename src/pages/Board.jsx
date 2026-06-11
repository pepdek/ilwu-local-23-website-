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
    <div style={{ background: bg, borderRadius: 6, padding: '4px 10px',
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
        {v.startTime && (
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: '#00305b',
            fontWeight: 700, background: '#F7F6F2', borderRadius: 6, padding: '3px 8px',
            whiteSpace: 'nowrap', marginLeft: 8 }}>
            {v.startTime}
          </div>
        )}
      </div>

      <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 3, marginBottom: 10 }}>
        {v.terminal}{v.units ? ` · ${v.units}` : ''}
      </div>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {isValid(v.cranes) && <Badge label="CR"   value={v.cranes} color="#1D4ED8" bg="#EFF6FF" />}
        {isValid(v.xmen)   && <Badge label="X"    value={v.xmen}   color="#059669" bg="#ECFDF5" />}
        {isValid(v.skxmen) && <Badge label="SK-X" value={v.skxmen} color="#059669" bg="#ECFDF5" />}
        {isValid(v.pd)     && <Badge label="PD"   value={v.pd}     color="#D97706" bg="#FFFBEB" />}
        {isValid(v.lasher) && <Badge label="LASH" value={v.lasher} color="#7C3AED" bg="#F5F3FF" />}
      </div>

      <div style={{ marginTop: 10 }}>
        <a
          href={`https://www.marinetraffic.com/en/ais/home/shipname/${encodeURIComponent(v.vessel)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 11, color: '#377dbd', fontFamily: "'DM Mono', monospace", fontWeight: 600 }}
        >
          ⚓ TRACK ON MARINETRAFFIC →
        </a>
      </div>
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

export default function Board() {
  const params = new URLSearchParams(window.location.search)
  const [shift, setShift]           = useState(params.get('shift') || 'night')
  const [boardData, setBoardData]   = useState(null)
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [tick, setTick]             = useState(0)

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

  // tick every 15s so "Updated X ago" refreshes
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 15000)
    return () => clearInterval(id)
  }, [])

  const updatedLabel = timeSince(lastUpdated)

  return (
    <div style={{ background: '#F7F6F2', minHeight: '100vh', paddingBottom: 80 }}>

      {/* Sticky sub-bar: shift toggle + date line */}
      <div style={{
        position: 'sticky',
        top: 64,
        zIndex: 39,
        background: '#00305b',
        borderBottom: '1px solid rgba(55,125,189,0.3)',
        padding: '10px 16px',
      }}>
        {/* Shift pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => setShift('night')}
            style={{
              padding: '6px 18px',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: shift === 'night' ? '#00305b' : '#F7F6F2',
              color: shift === 'night' ? '#fff' : '#9CA3AF',
              borderBottom: shift === 'night' ? '2px solid #fff216' : '2px solid transparent',
              outline: shift === 'night' ? '1.5px solid rgba(255,255,255,0.3)' : '1.5px solid #E8E5DC',
              transition: 'all 0.15s',
            }}
          >
            🌙 Night
          </button>
          <button
            onClick={() => setShift('day')}
            style={{
              padding: '6px 18px',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: shift === 'day' ? '#00305b' : '#F7F6F2',
              color: shift === 'day' ? '#fff' : '#9CA3AF',
              borderBottom: shift === 'day' ? '2px solid #fff216' : '2px solid transparent',
              outline: shift === 'day' ? '1.5px solid rgba(255,255,255,0.3)' : '1.5px solid #E8E5DC',
              transition: 'all 0.15s',
            }}
          >
            ☀️ Day
          </button>

          <button
            onClick={() => fetchBoard(shift)}
            disabled={loading}
            style={{
              marginLeft: 'auto',
              padding: '5px 12px',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.6)',
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              cursor: loading ? 'default' : 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            {loading ? '…' : '↻ REFRESH'}
          </button>
        </div>

        {/* Date + updated */}
        <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {boardData?.date && (
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
              {boardData.date}
            </span>
          )}
          {boardData?.shift && (
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
              · {boardData.shift}
            </span>
          )}
          {updatedLabel && !loading && (
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#22c55e', marginLeft: 'auto' }}>
              ● Updated {updatedLabel}
            </span>
          )}
          {loading && (
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.35)', marginLeft: 'auto' }}>
              Loading…
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 16px 0', maxWidth: 640, margin: '0 auto' }}>

        {error && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 10,
            padding: '14px 16px', marginBottom: 16, color: '#991B1B', fontSize: 13 }}>
            Could not load board: {error}
          </div>
        )}

        {/* Vessel cards */}
        {!loading && boardData && boardData.vessels.length > 0 && (
          <section style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: '#00305b',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
              Vessels — {boardData.vessels.length}
            </div>
            {boardData.vessels.map((v, i) => <VesselCard key={i} v={v} />)}
          </section>
        )}

        {!loading && boardData && boardData.vessels.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#9CA3AF', fontSize: 14 }}>
            No vessel assignments found for this shift.
          </div>
        )}

        {/* House work */}
        {!loading && boardData && boardData.houseItems.length > 0 && (
          <section style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: '#00305b',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
              House Work
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1.5px solid #E8E5DC', overflow: 'hidden' }}>
              {boardData.houseItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '11px 14px',
                    borderBottom: i < boardData.houseItems.length - 1 ? '1px solid #F0EDE4' : 'none',
                    fontSize: 13,
                    color: '#374151',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '24px 16px', borderTop: '1px solid #E8E5DC', marginTop: 8 }}>
          <a
            href="http://ilwu23.com/?screen=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, color: '#377dbd', fontWeight: 600, textDecoration: 'none' }}
          >
            View official board at ilwu23.com ↗
          </a>
          <div style={{ marginTop: 12 }}>
            <a
              href="https://checkmyspins.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: '#00305b', fontWeight: 700, textDecoration: 'none' }}
            >
              ⚓ Check your spin number at CheckMySpins →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
