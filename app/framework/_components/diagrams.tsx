/* Framework diagrams — System B (editorial data-paper) ported from design handoff.
   Each dimension diagram is a stat-led data block: FT / Economist register, big
   numeric callouts in rust accent, clinical tables, restrained SVG. */

export function OriginPillars() {
  const items = ['Craftsmanship', 'Scarcity', 'Narrative', 'Distribution', 'Pricing']
  return (
    <div className="fw-chart-block">
      <span className="fw-chart-label">Fig. 01 — Five classical levers · mastered at the moment of first sale</span>
      <div className="fw-stat-table">
        <div className="fw-stat-table-head">
          <span>The lever</span>
          <span>Mastered at primary</span>
        </div>
        {items.map((it, i) => (
          <div className="fw-stat-table-row" key={it}>
            <span className="fw-stat-table-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="fw-stat-table-name">{it}</span>
            <span className="fw-stat-table-dot">●</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function InterpretationAsymmetry() {
  const rows = [
    { fig: '−20M', cap: 'Luxury consumers lost from primary in 2025 — reducing frequency, trading down, or redirecting spend.', src: 'Bain & Company / Altagamma · December 2025' },
    { fig: '€25B', cap: 'Pre-owned luxury watch market in 2024, up 10% while primary watch sales fell 5–7%.', src: 'Cognitive Market Research · 2024' },
    { fig: '40–65%', cap: 'Of first-time luxury buyers make their first brand purchase in the pre-owned market.', src: 'eBay Global Fashion / McKinsey · 2025' },
  ]
  return (
    <div className="fw-chart-block">
      <span className="fw-chart-label">Fig. 02 — Verified market signals · primary contracting, secondary growing</span>
      <div className="fw-evidence">
        {rows.map((r, i) => (
          <div className="fw-evidence-row" key={i}>
            <span className="fw-evidence-fig">{r.fig}</span>
            <span className="fw-evidence-body">
              <span className="fw-evidence-cap">{r.cap}</span>
              <span className="fw-evidence-src">{r.src}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AuthorshipCircles() {
  const rows = ['Authentication', 'Condition grading', 'Provenance', 'Certification', 'Repair history']
  return (
    <div className="fw-chart-block">
      <span className="fw-chart-label">Fig. 03 — Standards that govern post-first-sale value · authorship today</span>
      <div className="fw-ladder">
        <div className="fw-ladder-head">
          <span></span>
          <span className="fw-ladder-col">Maison-defined</span>
          <span className="fw-ladder-col">Market-defined</span>
        </div>
        {rows.map((r, i) => (
          <div className="fw-ladder-row" key={r}>
            <span className="fw-ladder-name">
              <span className="fw-ladder-num">{String(i + 1).padStart(2, '0')}</span>
              {r}
            </span>
            <span className="fw-ladder-cell"><span className="fw-ladder-dot fw-ladder-dot--off"></span></span>
            <span className="fw-ladder-cell"><span className="fw-ladder-dot fw-ladder-dot--on"></span></span>
          </div>
        ))}
        <div className="fw-ladder-foot-key">
          <span><span className="fw-ladder-dot fw-ladder-dot--off"></span> no Maison-defined standard published to the broader market</span>
        </div>
      </div>
    </div>
  )
}

export function LifecycleFlywheel() {
  return (
    <div className="fw-chart-block">
      <span className="fw-chart-label">Fig. 04 — Lifecycle governance · effects on the primary business</span>
      <svg
        className="fw-fly-svg"
        viewBox="0 0 720 620"
        role="img"
        aria-labelledby="fw-fly-title fw-fly-desc"
      >
        <title id="fw-fly-title">Lifecycle Governance Flywheel</title>
        <desc id="fw-fly-desc">
          Lifecycle governance is the engine driving four self-reinforcing primary-market effects.
          Upgrade behavior drives ownership cycles, which compound pricing confidence, which deepens
          customer relationship, which renews upgrade behavior.
        </desc>
        <defs>
          <pattern
            id="fw-fly-hatch"
            patternUnits="userSpaceOnUse"
            width="5"
            height="5"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.14" />
          </pattern>
          <marker
            id="fw-fly-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        <circle cx="360" cy="310" r="105" fill="url(#fw-fly-hatch)" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="360" cy="310" r="93" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.45" />
        <circle cx="360" cy="310" r="2.5" fill="currentColor" opacity="0.7" />
        <text x="360" y="270" className="fw-fly-eyebrow">THE  ENGINE</text>
        <text x="360" y="308" className="fw-fly-hub">Lifecycle</text>
        <text x="360" y="338" className="fw-fly-hub">governance</text>

        <path d="M 428 122 A 200 200 0 0 1 548 242" className="fw-fly-arc" markerEnd="url(#fw-fly-arrow)" />
        <path d="M 548 378 A 200 200 0 0 1 428 498" className="fw-fly-arc" markerEnd="url(#fw-fly-arrow)" />
        <path d="M 292 498 A 200 200 0 0 1 172 378" className="fw-fly-arc" markerEnd="url(#fw-fly-arrow)" />
        <path d="M 172 242 A 200 200 0 0 1 292 122" className="fw-fly-arc" markerEnd="url(#fw-fly-arrow)" />

        <text x="538" y="142" className="fw-fly-verb">drives</text>
        <text x="538" y="492" className="fw-fly-verb">compounds</text>
        <text x="182" y="492" className="fw-fly-verb">deepens</text>
        <text x="182" y="142" className="fw-fly-verb">renews</text>

        <text x="360" y="56" className="fw-fly-num">01</text>
        <text x="360" y="84" className="fw-fly-label">Upgrade behavior</text>

        <text x="617" y="288" className="fw-fly-num">02</text>
        <text x="617" y="312" className="fw-fly-label">Ownership</text>
        <text x="617" y="340" className="fw-fly-label">cycles</text>

        <text x="360" y="540" className="fw-fly-num">03</text>
        <text x="360" y="568" className="fw-fly-label">Pricing confidence</text>

        <text x="103" y="288" className="fw-fly-num">04</text>
        <text x="103" y="312" className="fw-fly-label">Customer</text>
        <text x="103" y="340" className="fw-fly-label">relationship</text>
      </svg>
      <p className="fw-fly-caption">primary-market effects · the wheel spins</p>
    </div>
  )
}

export function CompoundingLedger() {
  const evidence = [
    { fig: '7–28%', cap: 'Rolex CPO price premium over the grey market — brand-governed secondary commands pricing the grey market cannot.', src: 'Coronet Magazine · Everest Bands · 2025' },
    { fig: '67%', cap: 'Of used Mercedes-Benz sales by value flow through manufacturer-controlled channels — sovereignty proven at scale.', src: 'Mercedes-Benz CPO · 2025' },
    { fig: '€6.5B', cap: 'Tapestry FY2025 record revenue, Coach double-digit growth, 6.8M new customers — lifecycle programs cited as a contributing factor.', src: 'Tapestry FY2025 earnings · August 2025' },
  ]
  const rows: [string, string][] = [
    ['Pricing authority', 'Authentication confidence'],
    ['Trust', 'Provenance'],
    ['Long-term governance', 'Condition assurance'],
    ['Standards-setting power', 'Enduring value'],
  ]
  return (
    <div className="fw-chart-block">
      <span className="fw-chart-label">Fig. 05 — Where lifecycle sovereignty compounds · precedent and structure</span>
      <div className="fw-evidence">
        {evidence.map((e, i) => (
          <div className="fw-evidence-row" key={i}>
            <span className="fw-evidence-fig">{e.fig}</span>
            <span className="fw-evidence-body">
              <span className="fw-evidence-cap">{e.cap}</span>
              <span className="fw-evidence-src">{e.src}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="fw-ledger fw-ledger--mt">
        <div className="fw-ledger-col">
          <div className="fw-ledger-col-head">
            <span className="fw-ledger-rom">I.</span>
            <span>The Maison gains</span>
          </div>
          {rows.map((r, i) => (
            <div className="fw-ledger-cell" key={`m-${i}`}>
              <span className="fw-ledger-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="fw-ledger-item">{r[0]}</span>
            </div>
          ))}
        </div>
        <div className="fw-ledger-col">
          <div className="fw-ledger-col-head">
            <span className="fw-ledger-rom">II.</span>
            <span>The client gains</span>
          </div>
          {rows.map((r, i) => (
            <div className="fw-ledger-cell" key={`c-${i}`}>
              <span className="fw-ledger-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="fw-ledger-item">{r[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
