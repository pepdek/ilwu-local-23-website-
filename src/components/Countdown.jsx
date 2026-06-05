import { useState, useEffect } from 'react'

function getTimeLeft(target) {
  const now = new Date()
  const diff = target - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    past: false,
  }
}

function Pad({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[70px]">
      <span className="font-display text-white text-5xl sm:text-6xl leading-none tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-white/50 font-body text-xs uppercase tracking-widest mt-1">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const target = new Date('2026-07-05T10:00:00-07:00')
  const [time, setTime] = useState(getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.past) {
    return (
      <div className="text-white/60 font-body text-sm uppercase tracking-widest">
        Bloody Thursday Commemoration — Today
      </div>
    )
  }

  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <Pad value={time.days} label="Days" />
      <span className="font-display text-white/40 text-5xl sm:text-6xl leading-none mt-0">:</span>
      <Pad value={time.hours} label="Hours" />
      <span className="font-display text-white/40 text-5xl sm:text-6xl leading-none mt-0">:</span>
      <Pad value={time.minutes} label="Min" />
      <span className="font-display text-white/40 text-5xl sm:text-6xl leading-none mt-0">:</span>
      <Pad value={time.seconds} label="Sec" />
    </div>
  )
}
