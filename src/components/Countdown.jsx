import { useState, useEffect } from 'react'

function getTimeLeft(target) {
  const diff = target - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    past: false,
  }
}

function Block({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[64px]">
      <span className="font-display text-ilwu-gold text-5xl sm:text-6xl leading-none tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-white/50 font-body text-[10px] uppercase tracking-[0.2em] mt-1">{label}</span>
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
      <p className="text-ilwu-gold font-display text-2xl tracking-widest uppercase">
        Today - Bloody Thursday Commemoration
      </p>
    )
  }

  const sep = <span className="font-display text-white/25 text-5xl sm:text-6xl leading-none pb-5">:</span>

  return (
    <div className="flex items-end gap-3 sm:gap-5">
      <Block value={time.days}    label="Days"    />
      {sep}
      <Block value={time.hours}   label="Hours"   />
      {sep}
      <Block value={time.minutes} label="Min"     />
      {sep}
      <Block value={time.seconds} label="Sec"     />
    </div>
  )
}
