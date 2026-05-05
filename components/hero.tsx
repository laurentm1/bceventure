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
          For maisons protecting craft, and emerging categories building it.
          <span className="serif italic"> the secondary market, designed as a sovereignty system.</span>
        </p>

        <div className="hero-right">
          <p className="hero-tagline">
            Trust, design, durable systems.
            an operator-led venture practice for
            founders, CEOs, and maisons.
          </p>
          <p className="body-l" style={{ color: 'var(--ink-2)' }}>
            Advising leadership teams on how value is structured
            and protected. The brand, not the market, <em>should</em> set the terms of value
            as products circulate and scale.
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
