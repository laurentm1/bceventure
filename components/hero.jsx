// === BCE Ventures Hero + Manifesto ===

function Hero({ headlineConfig }) {
  const cfg = headlineConfig || { lines: ['Sovereignty', 'is the', 'objective.'], italic: 1 };
  return (
    <header className="hero" id="top">
      <div className="hero-meta">
        <span className="eyebrow">BCE.VENTURES · EST. 2026 · NEW YORK</span>
        <span className="eyebrow">No. 001 / Operator-led advisory</span>
      </div>

      <div className="hero-mark-large">
        BCE<span className="dot">.</span>VENTURES
      </div>

      <div className="hero-grid">
        <h1 className="hero-headline display-xl">
          {cfg.lines.map((line, i) => (
            <React.Fragment key={i}>
              {i === cfg.italic ? (
                <span className="serif italic">
                  <SplitHeadline text={line} delayBase={i * 0.2} />
                </span>
              ) : (
                <SplitHeadline text={line} delayBase={i * 0.2} />
              )}
              {i < cfg.lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

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
          <span className="line"></span>
          <span>Scroll to enter</span>
        </div>
        <div className="eyebrow" style={{ textAlign: 'right' }}>
          Selectively engaged ·<br />
          Strategy + Governance + Standards
        </div>
      </div>
    </header>
  );
}

function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-inner">
        <Reveal>
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
            00 Premise
          </p>
        </Reveal>
        <Reveal>
          <p className="manifesto-text">
            Value is not getting lost.<br />
            <span className="accent">It is getting reassigned.</span><br />
            We help brands set the terms.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Manifesto });
