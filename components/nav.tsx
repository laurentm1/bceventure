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
          <img src="/bce-logo.svg" alt="BCE Ventures" className="nav-logo" />
        </a>
        <div className="nav-links">
          <button className="nav-link" onClick={scrollTo('about')}>About</button>
          <div className="nav-dropdown">
            <button className="nav-link" onClick={scrollTo('practice')} aria-haspopup="true">Practice</button>
            <div className="nav-dropdown-menu">
              <div className="nav-dd-item nav-dd-item--group">
                <button className="nav-dd-trigger" onClick={scrollTo('engagement-01')}>
                  <span className="nav-dd-label">Engagement 01</span>
                  <span className="nav-dd-title">Value retention</span>
                </button>
                <a href="/framework" className="nav-dd-sub">
                  <span>Sovereignty Framework™</span>
                  <span className="nav-dd-sub-arrow" aria-hidden="true">&#8594;</span>
                </a>
              </div>
              <button className="nav-dd-item" onClick={scrollTo('engagement-02')}>
                <span className="nav-dd-label">Engagement 02</span>
                <span className="nav-dd-title">Leadership &amp; transformation</span>
              </button>
            </div>
          </div>
          <button className="nav-link" onClick={scrollTo('insights')}>Field notes</button>
          <a href="/clients" className="nav-link">Clients</a>
          <button className="nav-link" onClick={scrollTo('contact')}>Contact</button>
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
        <div className="nav-sheet">
          <button className="nav-sheet-item" onClick={() => navClick('about')}>About</button>

          <div className="nav-sheet-group">
            <button className="nav-sheet-head" onClick={() => navClick('practice')}>
              <span>Practice</span>
              <span className="nav-sheet-tag">The through-line &#8627;</span>
            </button>
            <button className="nav-sheet-sub" onClick={() => navClick('engagement-01')}>
              <span className="nss-title">Value retention</span>
              <span className="nss-label">Engagement 01</span>
            </button>
            <a href="/framework" className="nav-sheet-sub nav-sheet-sub--nested" onClick={() => setMenuOpen(false)}>
              <span className="nss-title">Sovereignty Framework™</span>
              <span className="nss-label">The through-line &#8594;</span>
            </a>
            <button className="nav-sheet-sub" onClick={() => navClick('engagement-02')}>
              <span className="nss-title">Leadership &amp; transformation</span>
              <span className="nss-label">Engagement 02</span>
            </button>
          </div>

          <button className="nav-sheet-item" onClick={() => navClick('insights')}>Field notes</button>
          <a href="/clients" className="nav-sheet-item" onClick={() => setMenuOpen(false)}>Clients</a>
          <button className="nav-sheet-item" onClick={() => navClick('contact')}>Contact</button>

          <button className="nav-sheet-cta" onClick={() => navClick('contact')}>
            Request a consult
          </button>
        </div>
      )}
    </>
  )
}
