'use client'

import Footer from '@/components/footer'
import LifecycleRibbon from './LifecycleRibbon'
import ScrollTopRail from './ScrollTopRail'
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


        <footer className="fw-protect">
          <p className="fw-protect-mark">BCE.Ventures™ · The Sovereignty Framework™</p>
          <p className="fw-protect-rights">
            BS&quot;D · © 2026 BCE.Ventures. All rights reserved. The Sovereignty Framework™ and its diagnostic methodology are proprietary intellectual property of BCE.Ventures.
          </p>
        </footer>
      </div>
      <Footer />
      <ScrollTopRail />
    </main>
  )
}
