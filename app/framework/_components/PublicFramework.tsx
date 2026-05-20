'use client'

import LifecycleRibbon from './LifecycleRibbon'
import AuthorshipSpectrum from './AuthorshipSpectrum'
import {
  OriginPillars,
  InterpretationAsymmetry,
  AuthorshipCircles,
  IncentivesFan,
  CompoundingLedger,
} from './diagrams'

type Dim = {
  num: string
  label: string
  name: string
  fig: string
  note: string
  body: string | string[]
  pull?: string
  Diagram: () => React.JSX.Element
}

const DIMENSIONS: Dim[] = [
  {
    num: '01',
    label: 'Where it begins',
    name: 'Origin',
    fig: '5',
    note: 'classical levers — all triggered at the moment of first sale.',
    body: 'Luxury brands have mastered the creation of value. Craftsmanship. Scarcity. Narrative authority. Distribution discipline. Pricing integrity. This is where desirability begins. But it is no longer where value is fully governed.',
    Diagram: () => <OriginPillars />,
  },
  {
    num: '02',
    label: 'Where value is tested',
    name: 'Interpretation',
    fig: '40–65%',
    note: 'of first-time luxury buyers make their first brand purchase in the pre-owned market. eBay / McKinsey 2025.',
    body: 'Secondary markets do not simply reflect value. They shape it. Pricing, condition grading, liquidity, and market incentives increasingly influence how objects are perceived over time.',
    pull: 'Primary market sets the story. Secondary market tests whether it holds.',
    Diagram: () => <InterpretationAsymmetry />,
  },
  {
    num: '03',
    label: 'The gap',
    name: 'Authorship',
    fig: '0',
    note: 'Maison-defined standards held across the broader market today.',
    body: [
      'The market mastered circulation. No one has fully solved authorship.',
      'Authentication. Condition standards. Provenance. Certification. Repair history. In the absence of brand-defined standards, the market appoints its own authority and prices accordingly. Whoever defines those standards increasingly defines the market itself.',
    ],
    Diagram: () => <AuthorshipCircles />,
  },
  {
    num: '04',
    label: 'The stakes',
    name: 'Incentives',
    fig: '6.8M',
    note: 'new customers added by Coach in FY2025 — lifecycle programs cited as a contributing factor. Tapestry FY2025.',
    body: [
      'How value is governed beyond first sale shapes upgrade behavior, ownership cycles, and pricing confidence at the primary level. It determines who captures the customer relationship, who builds the trust infrastructure, and who benefits from the loyalty that follows.',
      'The question is who defines the standards through which long-term value is interpreted.',
    ],
    Diagram: () => <IncentivesFan />,
  },
  {
    num: '05',
    label: 'The objective',
    name: 'Compounding',
    fig: '11%',
    note: "Rolex CPO's share of all Rolex secondary-market sales today, from zero in 2022. Lifecycle sovereignty compounds.",
    body: [
      'The most enduring luxury objects were always designed to outlive the transaction itself.',
      'Lifecycle sovereignty compounds value for both the Maison and the client. The brand strengthens pricing authority, trust, and long-term governance. The client gains greater confidence in authenticity, provenance, condition, and enduring value.',
      'Luxury has always sold permanence. The Sovereignty Framework creates the infrastructure that helps permanence hold.',
    ],
    Diagram: () => <CompoundingLedger />,
  },
]

function Dimension({ d }: { d: Dim }) {
  const bodyParas = Array.isArray(d.body) ? d.body : [d.body]
  return (
    <section className="fw-dim" id={`dim-${d.num}`} data-dim-num={d.num}>
      <div className="fw-dim-head">
        <div className="fw-dim-num">{d.num}</div>
        <div className="fw-dim-meta">
          <p className="fw-dim-label">{d.label}</p>
          <h2 className="fw-dim-name">{d.name}</h2>
        </div>
        <aside className="fw-dim-margin">
          <div className="fw-dim-margin-fig">{d.fig}</div>
          <p className="fw-dim-margin-note">{d.note}</p>
        </aside>
      </div>
      <div className="fw-dim-body">
        {bodyParas.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {d.pull && <p className="fw-pull fw-pull--inline">{d.pull}</p>}
      </div>
      <div className="fw-dim-figure">
        <d.Diagram />
      </div>
    </section>
  )
}

type Props = {
  gateForm: React.ReactNode
}

export default function PublicFramework({ gateForm }: Props) {
  return (
    <main className="fw-page">
      <div className="fw-shell">
        <div className="fw-topbar">
          <a href="/" className="fw-back">← BCE.VENTURES</a>
          <span className="fw-confidential">© Confidential · For internal review only · Not for redistribution</span>
        </div>

        <div className="fw-masthead">
          <span>BCE Ventures · No. 01</span>
          <span className="fw-masthead-mid">The Sovereignty Framework™</span>
          <span className="fw-masthead-right">Confidential · 2026</span>
        </div>

        <p className="eyebrow">A framework in five dimensions</p>
        <h1 className="fw-hero">Sovereignty <em>is the objective.</em></h1>
        <p className="fw-hero-sub">
          A strategic model for governing value beyond the first sale. For Maisons that built desirability and intend to govern what happens next.
        </p>

        <div className="fw-body">
          Luxury brands historically controlled value at the moment of purchase. Craftsmanship, scarcity, narrative authority, pricing integrity: this is where desirability begins.
        </div>
        <div className="fw-body">
          But value is increasingly interpreted afterward. Through secondary markets, authentication systems, condition grading, and algorithmic price discovery. The moment of first sale is no longer where value is fully governed.
        </div>
        <div className="fw-body">
          The Sovereignty Framework maps five dimensions through which a Maison can take a more active role in how value is authenticated, interpreted, protected, and compounded across the full product lifecycle.
        </div>

        <LifecycleRibbon />

        <div className="fw-dims">
          {DIMENSIONS.map((d) => (
            <Dimension d={d} key={d.num} />
          ))}
        </div>

        <div className="fw-pull">The secondary market is not the threat. Loss of authorship is.</div>
        <div className="fw-body">
          The brands that define the standards governing value beyond the first sale will increasingly shape how luxury itself is trusted, interpreted, and preserved over time.
        </div>

        <div className="fw-preview-cta">
          <p className="eyebrow">Beyond the framework</p>
          <h3 className="fw-gate-title">Market data, precedent analysis, and diagnostic architecture.</h3>
          <p className="fw-gate-body">
            The framework above maps the five dimensions. The research behind it covers the market data, the governance tier structure with precedent cases, the cannibalization evidence, mid-market programs, and the full Diagnostic methodology. Available to Maison leadership and strategy teams.
          </p>
          {gateForm}
        </div>

        <div className="fw-research-preview">
          <p className="fw-research-preview-banner">Behind the gate · Governance Tiers</p>
          <h3 className="fw-research-preview-title">
            The <span className="serif italic">Sovereignty Spectrum.</span>
          </h3>
          <p className="fw-research-preview-lede">
            Every brand engaging with lifecycle governance sits somewhere on the spectrum from facilitated participation to sovereign authorship.
          </p>

          <div className="fw-research-twovars">
            <p className="fw-research-twovars-head">There are two variables to sovereignty:</p>
            <dl className="fw-research-twovars-list">
              <div>
                <dt>The Operations</dt>
                <dd>Who authenticates, refurbishes, distributes, warranties.</dd>
              </div>
              <div>
                <dt>The Standard</dt>
                <dd>Whether the brand has published a grade the broader market is forced to reference.</dd>
              </div>
            </dl>
            <p className="fw-research-twovars-foot">
              A brand can own one without the other; <span className="serif italic">the canon is defined only when the brand owns both.</span>
            </p>
          </div>

          <AuthorshipSpectrum />

          <div className="fw-tier-principle">
            <p className="fw-tier-principle-text">
              Operational ownership is the prerequisite for sovereignty. <span className="serif italic">It is not the only thing.</span>
            </p>
          </div>

          <div className="fw-tiers fw-tiers--mt">
            <div className="fw-tier">
              <div className="fw-tier-num">1</div>
              <div>
                <p className="fw-tier-label">Facilitated participation</p>
                <p className="fw-tier-name">Brand logo, platform governance</p>
                <p className="fw-tier-brands">Zara · H&amp;M · Inditex</p>
              </div>
              <div className="fw-tier-body">
                Programs built primarily for regulatory positioning and brand narrative. <strong>Zara Pre-Owned</strong> launched in the UK in November 2022 and the US in October 2024, now active across 16 European markets plus the US. Repair, peer-to-peer resale, donation. The brand facilitates but does not authenticate, price, or govern.
                <br /><br />
                Presence is real. Authorship is not.
                <div>
                  <span className="fw-tier-tag">Brand facilitates</span>
                  <span className="fw-tier-tag">No authentication</span>
                  <span className="fw-tier-tag fw-tier-tag--on">Authorship: none</span>
                </div>
              </div>
            </div>

            <div className="fw-tier">
              <div className="fw-tier-num">2</div>
              <div>
                <p className="fw-tier-label">Operational circularity</p>
                <p className="fw-tier-name">Values-led take-back</p>
                <p className="fw-tier-brands">Eileen Fisher · Patagonia · Levi&rsquo;s</p>
              </div>
              <div className="fw-tier-body">
                Genuine brand-governed take-back built on values. <strong>Eileen Fisher Renew</strong> since 2009, over 2.3M garments resold, donated, or remade. Brand governs quality and resale channel. <strong>Patagonia Worn Wear</strong>, €12M revenue in FY25 on €1.37B total <span className="fw-cite">(Patagonia WIP report, 2025)</span>, roughly 1% of the business. Largest apparel mending facility in the US.
                <br /><br />
                The architectural lessons transfer to luxury. The cultural and customer logic does not.
                <br /><br />
                These brands govern operations. The standard they apply is internal — durability, repairability, values. Not a market-facing grade.
                <div>
                  <span className="fw-tier-tag">Brand governs flow</span>
                  <span className="fw-tier-tag">Standard internal, not market-facing</span>
                  <span className="fw-tier-tag fw-tier-tag--on">Authorship: partial</span>
                </div>
              </div>
            </div>

            <div className="fw-tier">
              <div className="fw-tier-num">3</div>
              <div>
                <p className="fw-tier-label">Participation without authorship</p>
                <p className="fw-tier-name">Brand present at intake, platform governs everything after</p>
                <p className="fw-tier-brands">Gucci via Vestiaire Collective</p>
              </div>
              <div className="fw-tier-body">
                The most common model in luxury fashion, and the most frequently mistaken for progress.
                <br /><br />
                <strong>Gucci Preloved</strong> launched March 2023 through Kering&rsquo;s 5% equity stake in Vestiaire Collective. Customers bring select bags to Gucci boutiques in France, Italy, Germany, Spain, Austria, Monaco, and the Benelux. They receive store credit. The bags are then listed and sold on Vestiaire — authenticated by Vestiaire, priced by Vestiaire, on Vestiaire&rsquo;s platform alongside every other brand they carry.
                <div className="fw-tier-case">
                  Gucci touches the object at intake. Vestiaire authors everything that follows: the standard, the price, the buyer relationship, the data, the margin. Gucci led all brands on Vestiaire in pre-loved sales in Q4 2024 and Q1 2025 <span className="fw-cite">(Vestiaire Collective Resale Buying Guide, 2025)</span> — the same period Kering reported a <strong>24% collapse in Gucci&rsquo;s primary revenue</strong> <span className="fw-cite">(Kering FY2024 results)</span>. The lifecycle value of Gucci objects is large and accelerating. The governance of that value flows almost entirely to the platform. This is participation. It is not authorship.
                </div>
                <div>
                  <span className="fw-tier-tag fw-tier-tag--w">Brand at intake only</span>
                  <span className="fw-tier-tag fw-tier-tag--w">Platform owns operations and standard</span>
                  <span className="fw-tier-tag fw-tier-tag--w">Authorship: zero post-intake</span>
                </div>
              </div>
            </div>

            <div className="fw-tier">
              <div className="fw-tier-num">3.5</div>
              <div>
                <p className="fw-tier-label">The system without the standard</p>
                <p className="fw-tier-name">Brand owns the process. The market still sets the grade.</p>
                <p className="fw-tier-brands">Coach · The North Face · Lululemon</p>
              </div>
              <div className="fw-tier-body">
                The hardest tier to read clearly, because the operations look almost identical to sovereignty.
                <br /><br />
                <strong>Coach (Re)Loved</strong>, launched April 2021, runs the full lifecycle in-house. Trade-in at retail. In-house authentication. A dedicated workshop in New Jersey. Four lifecycle programs: Upcrafted, Remade, Restored, Vintage. A Craftsperson Apprenticeship Program building internal capability. Coach (Re)Loved Exchange operates across all North America retail stores plus select stores in the UK and Japan.
                <br /><br />
                Trade-in is widespread. Restoration output is not. More than <strong>45,000 products</strong> given a second life through (Re)Loved since 2021 <span className="fw-cite">(Tapestry, 2024)</span>, against more than <strong>260,000 bags repaired globally</strong> over the past three years <span className="fw-cite">(Coach Sustainability, 2025)</span>, against a brand selling more than <strong>€5.2B annually</strong>. Tapestry FY2025 delivered record revenue of €6.5B with Coach growing 10% and acquiring 6.8M new customers, roughly 60% Gen Z and Millennial <span className="fw-cite">(Tapestry FY2025 Form 8-K, SEC)</span>.
                <br /><br />
                The operations are real. The volume is real. The customer acquisition is real. What is absent is <strong>the published standard</strong>.
                <p className="fw-tier-body" style={{ marginTop: '0.85rem', padding: 0 }}>
                  Coach (Re)Loved has one classification — preloved — across all eligible objects. No graded certification. No criteria the broader market is forced to reference. The secondary market for Coach happens <em>around</em> (Re)Loved, not <em>through</em> it. Poshmark, eBay, The RealReal, peer-to-peer — all set their own terms. (Re)Loved is one channel among many. A well-built one. Not the canon. <strong>The North Face Renewed</strong> (since 2018) runs trade-in across 105 US/Canada stores under one classification. <strong>Lululemon Like New</strong> (US-only since 2022) runs trade-in across 390 stores with two informal product-page categories. Same structural pattern. Wide intake. No published canon.
                </p>
                <div className="fw-tier-case">
                  Coach owns the operations. Coach has not published the standard. Without a published standard, the secondary market refers to itself, not to the brand. The grade is what converts ownership into authorship. One classification is a category. A published standard is a canon.
                </div>
                <div>
                  <span className="fw-tier-tag fw-tier-tag--w">Brand owns operations</span>
                  <span className="fw-tier-tag fw-tier-tag--w">Standard not published</span>
                  <span className="fw-tier-tag fw-tier-tag--w">Authorship: structurally incomplete</span>
                </div>
              </div>
            </div>

            <div className="fw-tier">
              <div className="fw-tier-num">4</div>
              <div>
                <p className="fw-tier-label">Lifecycle sovereignty</p>
                <p className="fw-tier-name">Brand authors the canon</p>
                <p className="fw-tier-brands">Rolex CPO · Mercedes-Benz CPO</p>
              </div>
              <div className="fw-tier-body">
                The brand authenticates, grades, prices, warranties, and distributes. The standard is published. The market refers to it whether it participates in it or not.
                <br /><br />
                <strong>Rolex CPO</strong> generated approximately €550M in 2025, representing roughly 11% of the €5.2B Rolex secondary market <span className="fw-cite">(EveryWatch 2025 Secondary Market Report)</span>. From a standing start in Q4 2022, growing 204% year-on-year. Watches sold through the program carry a typical 25–30% premium over the non-certified secondary market <span className="fw-cite">(WatchCharts, Q2 2025)</span>. Direct margin flows to the authorised retailer network. Rolex&rsquo;s benefit is strategic: standards enforced, data owned, customer experience governed, primary allocation linked to secondary supply through client trade-ins.
                <br /><br />
                <strong>Mercedes-Benz CPO</strong>: roughly 67% of used Mercedes sales by value through brand-controlled channels <span className="fw-cite">(Morgan Stanley / WatchCharts industry benchmark)</span>, with a measurable premium over non-certified equivalents.
                <br /><br />
                Both programs operated through pre-existing authorised dealer networks — that infrastructure is load-bearing.
                <div>
                  <span className="fw-tier-tag fw-tier-tag--on">Brand sets the standard</span>
                  <span className="fw-tier-tag fw-tier-tag--on">Network economics aligned</span>
                  <span className="fw-tier-tag fw-tier-tag--on">Authorship: full</span>
                </div>
              </div>
            </div>

            <div className="fw-tier">
              <div className="fw-tier-num">—</div>
              <div>
                <p className="fw-tier-label">Sovereign non-participation</p>
                <p className="fw-tier-name">Absence as governance</p>
                <p className="fw-tier-brands">Hermès · select ultra-luxury houses</p>
              </div>
              <div className="fw-tier-body">
                Hermès built its secondary market authority through deliberate refusal. The Birkin holds its value partly because Hermès will not officially price it. That is not passivity. It is an active governance strategy, maintained with as much intentionality as any CPO program.
                <br /><br />
                But sovereign non-participation is a conditional position, not a permanent one. It works when scarcity is absolute and brand authority is unquestioned. Few houses can sustain those conditions indefinitely. When they soften, the absence of infrastructure becomes the exposure. There is no lever to pull. No system to defend the value.
                <br /><br />
                Only the story. And stories reprice.
                <div>
                  <span className="fw-tier-tag fw-tier-tag--on">Deliberate non-participation</span>
                  <span className="fw-tier-tag fw-tier-tag--on">Scarcity as the standard</span>
                  <span className="fw-tier-tag">Conditional, not permanent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fw-pull">Sovereignty is not a static position. <span className="serif italic">It is a system.</span></div>

          <div className="fw-sources">
            <p className="fw-sources-eyebrow">Sources</p>
            <p className="fw-sources-list">
              Kering FY2024 Annual Results · Tapestry Inc. FY2025 Form 8-K (SEC) · Tapestry Coach (Re)Loved Workshop announcement (2024) · Coach Sustainability (Re)Loved page (2025) · Patagonia Work in Progress report (2025) · Eileen Fisher Renew program disclosures · Vestiaire Collective Resale Buying Guide (Spring/Summer 2025) · EveryWatch 2025 Secondary Market Report · WatchCharts / Morgan Stanley Q2 2025 watch market data · WatchPro reporting on Rolex CPO (2025–26) · Retail TouchPoints · FashionUnited · Hypebeast · FashionDive · Green Retail World · Sustainability Magazine · BusinessWire · Archive Resale case studies.
            </p>
          </div>
        </div>

        <footer className="fw-protect">
          <p className="fw-protect-mark">BCE.Ventures™ · The Sovereignty Framework™</p>
          <p className="fw-protect-rights">
            BS&quot;D · © 2026 BCE.Ventures. All rights reserved. The Sovereignty Framework™ and its diagnostic methodology are proprietary intellectual property of BCE.Ventures.
          </p>
        </footer>
      </div>
    </main>
  )
}
