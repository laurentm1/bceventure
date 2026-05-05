'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navClick = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <>
      <nav
        className="nav"
        style={{
          background: scrolled
            ? 'color-mix(in srgb, var(--bone) 88%, transparent)'
            : 'color-mix(in srgb, var(--bone) 70%, transparent)',
          borderBottomColor: scrolled ? 'var(--rule-soft)' : 'transparent',
        }}
      >
        <a href="#top" className="nav-mark" onClick={scrollTo('top')} aria-label="BCE Ventures — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bce-logo.jpg" alt="BCE Ventures" className="nav-logo" />
        </a>
        <div className="nav-links">
          <button className="nav-link" onClick={scrollTo('about')}>About</button>
          <button className="nav-link" onClick={scrollTo('approach')}>Approach</button>
          <button className="nav-link" onClick={scrollTo('engagements')}>Practice</button>
          <button className="nav-link" onClick={scrollTo('insights')}>Insights</button>
          <button className="nav-link" onClick={scrollTo('contact')}>Contact</button>
          <a href="/clients" className="nav-link">Clients</a>
        </div>
        <button className="nav-cta nav-cta--desktop" onClick={scrollTo('contact')}>
          Request a consult
        </button>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? 'ham-open' : ''} />
          <span className={menuOpen ? 'ham-open' : ''} />
          <span className={menuOpen ? 'ham-open' : ''} />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <button onClick={() => navClick('about')}>About</button>
          <button onClick={() => navClick('approach')}>Approach</button>
          <button onClick={() => navClick('engagements')}>Practice</button>
          <button onClick={() => navClick('insights')}>Insights</button>
          <button onClick={() => navClick('contact')}>Contact</button>
          <a href="/clients" className="nav-mobile-item" onClick={() => setMenuOpen(false)}>Clients</a>
          <button className="nav-mobile-cta" onClick={() => navClick('contact')}>
            Request a consult
          </button>
        </div>
      )}
    </>
  )
}
