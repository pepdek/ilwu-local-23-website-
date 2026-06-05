import { useState, useEffect } from 'react'

function getTimeLeft(target) {
  const diff = target - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    past:    false,
  }
}

export default function Countdown() {
  const target = new Date('2026-07-05T09:00:00-07:00')
  const [time, setTime] = useState(getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days,    label: 'Days'    },
    { value: time.hours,   label: 'Hours'   },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ]

  if (time.past) {
    return (
      <p style={{ color: '#fff216' }} className="font-display text-2xl tracking-widest uppercase">
        Today - Bloody Thursday Commemoration
      </p>
    )
  }

  return (
    <div className="mb-8">
      {/* Label */}
      <p
        className="font-body uppercase mb-4"
        style={{ color: '#fff216', fontSize: '13px', letterSpacing: '2px' }}
      >
        Bloody Thursday · July 5 · Spanaway Lake Park
      </p>

      {/* Tiles — 2×2 on mobile, row on 480px+ */}
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: 'repeat(4,minmax(0,1fr))', maxWidth: '320px' }}
      >
        <style>{`
          @media (max-width: 479px) {
            .countdown-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; max-width: 200px !important; }
          }
        `}</style>
        {units.map(u => (
          <div
            key={u.label}
            className="countdown-grid flex flex-col items-center justify-center aspect-square border border-white/15"
            style={{
              background: 'rgba(0,48,91,0.78)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              minWidth: 0,
            }}
          >
            <span
              className="font-display tabular-nums leading-none"
              style={{ color: '#fff216', fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
            >
              {String(u.value).padStart(2, '0')}
            </span>
            <span
              className="font-mono text-white uppercase mt-1"
              style={{ fontSize: '9px', letterSpacing: '0.12em' }}
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
