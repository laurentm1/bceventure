import { Fragment } from 'react'
import SplitHeadline from '@/components/split-headline'

const HEADLINES = [
  { key: 'sovereignty', lines: ['Sovereignty', 'is the', 'objective.'], italic: 1 },
] as const

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-meta">
        <span className="eyebrow">No. 001 / Operator-led advisory</span>
        <span className="eyebrow hero-meta-right">Selectively engaged</span>
      </div>

      <div className="hero-grid">
        {HEADLINES.map(({ key, lines, italic }) => (
          <h1
            key={key}
            className={`hero-headline display-xl hero-headline--${key}`}
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
            Brands built trust with their customers.
          </p>
          <p className="hero-problem">
            That trust is now being outsourced to the market.
          </p>
          <p className="hero-problem">
            <span className="serif italic">
              Long-term value is the asset.
            </span>
          </p>
        </div>
      </div>
    </header>
  )
}
