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
        <span className="eyebrow">BCE.VENTURES · EST. 2025 · NEW YORK</span>
        <span className="eyebrow">No. 001 / Operator-led advisory</span>
      </div>

      <div className="hero-mark-large">
        BCE<span className="dot">.</span>VENTURES
      </div>

      <div className="hero-grid">
        {/* All 3 headline variants rendered; CSS shows only [data-headline="x"] */}
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

        <p className="hero-thesis hero-thesis--under">
          An advisory practice for maisons and emerging categories
          <span className="serif italic"> at the edge of value formation.</span>
        </p>

        <div className="hero-right">
          <p className="hero-problem">
            Luxury houses built enduring value through craftsmanship,
            scarcity, and cultural relevance.
          </p>
          <p className="hero-problem">
            Today, that value is increasingly governed by resale platforms,
            authentication systems, and secondary markets the brands themselves
            do not control.
          </p>
          <p className="hero-problem hero-problem--punchline">
            <span className="serif italic">
              The strategic question is no longer whether these markets exist.
              It is who governs the systems around them.
            </span>
          </p>
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
