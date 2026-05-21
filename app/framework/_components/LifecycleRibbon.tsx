'use client'

const AFTER = [
  { num: '02', label: 'Interpretation' },
  { num: '03', label: 'Authorship' },
  { num: '04', label: 'Incentives' },
  { num: '05', label: 'Compounding' },
] as const

export default function LifecycleRibbon() {
  const handleClick = (num: string) => (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()
    const target = document.getElementById(`dim-${num}`)
    if (!target) return
    const ribbonH = document.querySelector('.fw-ribbon')?.getBoundingClientRect().height ?? 0
    const y = target.getBoundingClientRect().top + window.scrollY - ribbonH - 24
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const onKey = (num: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') handleClick(num)(e)
  }

  return (
    <div className="fw-chart-block fw-ribbon">
      <div className="fw-ribbon-split">
        <div className="fw-ribbon-side fw-ribbon-side--before">
          <p className="fw-ribbon-side-eyebrow">Value created</p>
          <div
            className="fw-ribbon-station"
            role="button"
            tabIndex={0}
            onClick={handleClick('01')}
            onKeyDown={onKey('01')}
          >
            <span className="fw-ribbon-num">01</span>
            <span className="fw-ribbon-name">Origin</span>
          </div>
        </div>

        <div className="fw-ribbon-divider" aria-hidden="true">
          <span className="fw-ribbon-divider-rule" />
          <span className="fw-ribbon-divider-label">first sale</span>
          <span className="fw-ribbon-divider-rule" />
        </div>

        <div className="fw-ribbon-side fw-ribbon-side--after">
          <p className="fw-ribbon-side-eyebrow fw-ribbon-side-eyebrow--accent">
            Value governed
          </p>
          <ol className="fw-ribbon-after-list">
            {AFTER.map((t) => (
              <li
                key={t.num}
                className="fw-ribbon-station"
                role="button"
                tabIndex={0}
                onClick={handleClick(t.num)}
                onKeyDown={onKey(t.num)}
              >
                <span className="fw-ribbon-num">{t.num}</span>
                <span className="fw-ribbon-name">{t.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
