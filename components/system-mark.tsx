'use client'

import { useState, useEffect } from 'react'

export default function SystemMark() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const d = new Date()
      const hh = d.getHours().toString().padStart(2, '0')
      const mm = d.getMinutes().toString().padStart(2, '0')
      setTime(`${hh}:${mm} NYC`)
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <div className="system-mark">
      <span className="pulse" />
      {time}
    </div>
  )
}
