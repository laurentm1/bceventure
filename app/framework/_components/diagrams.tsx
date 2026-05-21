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

export function IncentivesFan() {
  const items = ['Upgrade behavior', 'Ownership cycles', 'Pricing confidence', 'Customer relationship']
  return (
    <div className="fw-chart-block">
      <span className="fw-chart-label">Fig. 04 — Lifecycle governance · effects on the primary business</span>
      <div className="fw-cascade-row-head">
        <span className="fw-cascade-source"><em>Lifecycle governance</em></span>
        <span className="fw-cascade-arrow">→</span>
        <span className="fw-cascade-foot">shapes the primary market at every point</span>
      </div>
      <div className="fw-incentives-grid">
        {items.map((it, i) => (
          <div className="fw-incentives-cell" key={it}>
            <div className="fw-incentives-meta-top">{String(i + 1).padStart(2, '0')}</div>
            <div className="fw-incentives-label">{it}</div>
            <div className="fw-incentives-rule"></div>
            <div className="fw-incentives-meta">primary-market effect</div>
          </div>
        ))}
      </div>
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
        <div className="fw-ledger-head">
          <div><span className="fw-ledger-rom">I.</span><span>The Maison gains</span></div>
          <div><span className="fw-ledger-rom">II.</span><span>The client gains</span></div>
        </div>
        {rows.map((r, i) => (
          <div className="fw-ledger-row" key={i}>
            <div className="fw-ledger-cell">
              <span className="fw-ledger-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="fw-ledger-item">{r[0]}</span>
            </div>
            <div className="fw-ledger-cell">
              <span className="fw-ledger-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="fw-ledger-item">{r[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
