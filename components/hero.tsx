import { Fragment } from 'react'
import SplitHeadline from '@/components/split-headline'

const HEADLINES = [
  { key: 'sovereignty', lines: ['Sovereignty', 'is the', 'objective.'], italic: 1 },
  { key: 'standards',   lines: ['Standards',   'before',  'scale.'],     italic: 1 },
  { key: 'durable',     lines: ['Durable',     'value',   'compounds.'], italic: 1 },
] as const

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-meta">
        <span className="eyebrow hero-eyebrow-accent">BCE.VENTURES · EST. 2026 · NEW YORK</span>
      </div>

      <div className="hero-grid">
        {/* Row 1: headline */}
        <div className="hero-left-head">
          {HEADLINES.map(({ key, lines, italic }) => (
            <h1
              key={key}
              className={`hero-headline display-xl hero-headline--${key}`}
              aria-hidden={key !== 'sovereignty' ? 'true' : undefined}
            >
              {lines.map((line, i) => (
                <Fragment key={i}>
                  {i === italic ? (
                    <span className="serif italic">
                      <SplitHeadline text={line} delayBase={i * 0.2} />
                    </span>
                  ) : (
                    <SplitHeadline text={line} delayBase={i * 0.2} />
                  )}
                  {i < lines.length - 1 && <br />}
                </Fragment>
              ))}
            </h1>
          ))}
        </div>

        {/* Row 2: full-width hairline spanning both columns */}
        <div className="hero-divider" />

        {/* Row 3 left: problem statement + objective */}
        <div className="hero-left-sub">
          <p className="hero-problem">
            Luxury brands spend decades building value. Increasingly, that value is interpreted in secondary markets they do not control.
          </p>
        </div>

        {/* Row 3 right: body — level with problem statement */}
        <div className="hero-right">
          <div className="hero-body-stack">
            <p>
              BCE Ventures works with luxury houses and premium technology brands to design
              the standards, infrastructure, and governance that determine how products are
              authenticated, graded, priced, and trusted over time.
            </p>
            <p>
              This work builds on operating experience behind global trade-in and secondary
              market programs with Amazon, Google, and PCS Wireless.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="scroll-hint">
          <span className="line" />
          <span>Scroll to enter</span>
        </div>
        <div className="eyebrow" style={{ textAlign: 'right' }}>
          Selectively engaged ·<br />
          Strategy + Governance + Standards
        </div>
      </div>
    </header>
  )
}
