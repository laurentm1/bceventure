'use client'

import { useEffect, useState } from 'react'

/**
 * Floating rail at bottom-right with two buttons: jump to top + jump to
 * bottom. Whole rail fades in after the user has scrolled at all. Each
 * button hides when its target would be a no-op (already at top / already
 * at bottom).
 */
export default function ScrollTopRail() {
  const [visible, setVisible] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    let raf = 0
    const compute = () => {
      raf = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setVisible(y > 200)
      setAtTop(y <= 4)
      setAtBottom(max - y <= 4)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const toBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })

  return (
    <div className="fwg-scroll-rail" data-visible={visible}>
      <button
        type="button"
        className="fwg-scroll-btn"
        data-hidden={atTop}
        aria-label="Back to top"
        onClick={toTop}
      >
        <span className="fwg-scroll-btn-arrow" aria-hidden="true">↑</span>
        <span className="fwg-scroll-btn-label">Top</span>
      </button>
      <button
        type="button"
        className="fwg-scroll-btn"
        data-hidden={atBottom}
        aria-label="Jump to bottom"
        onClick={toBottom}
      >
        <span className="fwg-scroll-btn-arrow" aria-hidden="true">↓</span>
        <span className="fwg-scroll-btn-label">Bottom</span>
      </button>
    </div>
  )
}
