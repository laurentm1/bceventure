'use client'

import { useEffect, useState } from 'react'

export default function ScrollTopRail() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let raf = 0
    const compute = () => {
      raf = 0
      setVisible(window.scrollY > 600)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <button
      type="button"
      className="fwg-toprail"
      data-visible={visible}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="fwg-toprail-arrow" aria-hidden="true">↑</span>
      <span className="fwg-toprail-label">Top</span>
    </button>
  )
}
