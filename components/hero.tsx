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
        <span className="eyebrow">No. 001 / Operator-led advisory</span>
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

        <div className="hero-right">
          <p className="hero-problem">
            Luxury built value through craft, scarcity, and meaning.
          </p>
          <p className="hero-problem">
            Today, that value is shaped by platforms the brands do not control.
          </p>
          <p className="hero-problem hero-problem--punchline">
            <span className="serif italic">
              The question is no longer whether these markets exist.
              It is who sets the terms.
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
