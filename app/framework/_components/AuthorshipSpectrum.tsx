'use client'

type Tier = {
  num: string
  id: string
  stance: string
  brands: string
  peak?: boolean
}

const TIERS: Tier[] = [
  { num: '1', id: '1', stance: 'Platform logo', brands: 'Zara · H&M' },
  { num: '2', id: '2', stance: 'Values take-back', brands: 'Patagonia · Eileen Fisher' },
  { num: '3', id: '3', stance: 'Participation', brands: 'Gucci · Vestiaire' },
  { num: '3.5', id: '3-5', stance: 'Standard, distributed', brands: 'Rolex CPO' },
  { num: '4', id: '4', stance: 'Lifecycle sovereignty', brands: 'Coach · Mercedes-Benz', peak: true },
]

export default function AuthorshipSpectrum() {
  const handleJump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.getElementById('tier-' + id)
    if (!target) return
    const tabsH = document.querySelector('.fwg-tabs')?.getBoundingClientRect().height ?? 0
    const y = target.getBoundingClientRect().top + window.scrollY - tabsH - 24
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <figure className="fw-spectrum">
      <p className="fw-spectrum-label">Fig. T-1 — The authorship spectrum</p>

      <div className="fw-spectrum-axis">
        <span className="fw-spectrum-axis-end">No authorship</span>
        <span className="fw-spectrum-axis-end fw-spectrum-axis-end--accent">Full authorship</span>
      </div>

      <div className="fw-spectrum-bar" aria-hidden="true">
        <svg viewBox="0 0 820 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fw-spec-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F5E8E1" />
              <stop offset="30%" stopColor="#D9B9A8" />
              <stop offset="65%" stopColor="#8A3A30" />
              <stop offset="100%" stopColor="#2E0F0A" />
            </linearGradient>
          </defs>
          <rect
            x="0.7"
            y="0.7"
            width="818.6"
            height="26.6"
            rx="2"
            ry="2"
            fill="url(#fw-spec-grad)"
            stroke="#4A1812"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      <div className="fw-spectrum-ticks" aria-hidden="true">
        {TIERS.map((t) => (
          <div className="fw-spectrum-tick" key={t.num}>
            <span className="fw-spectrum-tick-dot" />
            <span className="fw-spectrum-tick-line" />
          </div>
        ))}
      </div>

      <ol className="fw-spectrum-grid">
        {TIERS.map((t) => (
          <li
            key={t.num}
            className={'fw-spectrum-station' + (t.peak ? ' fw-spectrum-station--apex' : '')}
          >
            <button
              type="button"
              className="fw-spectrum-btn"
              onClick={handleJump(t.id)}
              aria-label={`Jump to Tier ${t.num}`}
            >
              <span className="fw-spectrum-num">{t.num}</span>
              <span className="fw-spectrum-kicker">Tier&nbsp;{t.num}</span>
              <span className="fw-spectrum-stance">{t.stance}</span>
              <span className="fw-spectrum-brands">{t.brands}</span>
            </button>
          </li>
        ))}
      </ol>
    </figure>
  )
}
