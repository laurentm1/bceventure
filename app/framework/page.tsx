'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

type TabId = 'market' | 'tiers' | 'cannibal' | 'programs' | 'cases' | 'diagnostic'

const TABS: { id: TabId; label: string }[] = [
  { id: 'market', label: 'Market context' },
  { id: 'tiers', label: 'Governance tiers' },
  { id: 'cannibal', label: 'The cannibalization case' },
  { id: 'programs', label: 'Brand programs' },
  { id: 'cases', label: 'Case studies' },
  { id: 'diagnostic', label: 'The diagnostic' },
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjwavzr'

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com',
  'yahoo.com', 'yahoo.co.uk', 'yahoo.fr', 'ymail.com',
  'hotmail.com', 'hotmail.co.uk', 'hotmail.fr',
  'outlook.com', 'live.com', 'msn.com',
  'icloud.com', 'me.com', 'mac.com',
  'aol.com',
  'protonmail.com', 'proton.me',
  'gmx.com', 'gmx.net',
  'mail.com',
  'yandex.com', 'yandex.ru',
  'zoho.com',
  'hey.com',
  'fastmail.com',
  'qq.com', '163.com', '126.com',
])

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function FrameworkPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('market')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string; org?: string }>({})
  const [submitting, setSubmitting] = useState(false)
  const researchRef = useRef<HTMLDivElement>(null)

  const validate = () => {
    const e: { name?: string; email?: string; org?: string } = {}
    if (!name.trim()) e.name = 'Required'
    const trimmedEmail = email.trim().toLowerCase()
    if (!trimmedEmail) {
      e.email = 'Required'
    } else if (!EMAIL_RE.test(trimmedEmail)) {
      e.email = 'Check format'
    } else {
      const domain = trimmedEmail.split('@')[1]
      if (domain && FREE_EMAIL_DOMAINS.has(domain)) {
        e.email = 'Please use a work email'
      }
    }
    if (!org.trim()) e.org = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onUnlock = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organisation: org.trim(),
          _subject: `Framework access · ${name.trim()} · ${org.trim()}`,
          source: 'The Sovereignty Framework — bce.ventures/framework',
        }),
      })
    } catch {
      // Lead capture is best-effort; do not block access on transport failure
    } finally {
      setSubmitting(false)
      setUnlocked(true)
      setTimeout(() => {
        researchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <main className="fw-page">
      <div className="fw-shell">
        <Link href="/" className="fw-back">← BCE.VENTURES</Link>

        {/* PUBLIC FRAMEWORK */}
        <p className="eyebrow">BCE Ventures · The Sovereignty Framework™</p>
        <h1 className="fw-hero">
          Sovereignty over long-term value<br />
          <em>is the objective.</em>
        </h1>
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

        <div className="fw-tiers fw-tiers--mt">
          <div className="fw-tier">
            <div className="fw-tier-num">01</div>
            <div>
              <p className="fw-tier-label">Where it begins</p>
              <p className="fw-tier-name">Origin</p>
            </div>
            <div className="fw-tier-body">
              Luxury brands have mastered the creation of value. Craftsmanship. Scarcity. Narrative authority. Distribution discipline. Pricing integrity. This is where desirability begins. But it is no longer where value is fully governed.
            </div>
          </div>

          <div className="fw-tier">
            <div className="fw-tier-num">02</div>
            <div>
              <p className="fw-tier-label">Where value is tested</p>
              <p className="fw-tier-name">Interpretation</p>
            </div>
            <div className="fw-tier-body">
              Secondary markets do not simply reflect value. They shape it. Pricing, condition grading, liquidity, and market incentives increasingly influence how objects are perceived over time.
              <div className="fw-pull fw-pull--inline">Primary market sets the story. Secondary market tests whether it holds.</div>
            </div>
          </div>

          <div className="fw-tier">
            <div className="fw-tier-num">03</div>
            <div>
              <p className="fw-tier-label">The gap</p>
              <p className="fw-tier-name">Authorship</p>
            </div>
            <div className="fw-tier-body">
              The market mastered circulation. No one has fully solved authorship.
              <br /><br />
              Authentication. Condition standards. Provenance. Certification. Repair history. In the absence of brand-defined standards, the market appoints its own authority and prices accordingly. Whoever defines those standards increasingly defines the market itself.
            </div>
          </div>

          <div className="fw-tier">
            <div className="fw-tier-num">04</div>
            <div>
              <p className="fw-tier-label">The stakes</p>
              <p className="fw-tier-name">Incentives</p>
            </div>
            <div className="fw-tier-body">
              How value is governed beyond first sale shapes upgrade behavior, ownership cycles, and pricing confidence at the primary level. It determines who captures the customer relationship, who builds the trust infrastructure, and who benefits from the loyalty that follows.
              <br /><br />
              The question is who defines the standards through which long-term value is interpreted.
            </div>
          </div>

          <div className="fw-tier">
            <div className="fw-tier-num">05</div>
            <div>
              <p className="fw-tier-label">The objective</p>
              <p className="fw-tier-name">Compounding</p>
            </div>
            <div className="fw-tier-body">
              The most enduring luxury objects were always designed to outlive the transaction itself.
              <br /><br />
              Lifecycle sovereignty compounds value for both the Maison and the client. The brand strengthens pricing authority, trust, and long-term governance. The client gains greater confidence in authenticity, provenance, condition, and enduring value.
              <br /><br />
              Luxury has always sold permanence. The Sovereignty Framework creates the infrastructure that helps permanence hold.
            </div>
          </div>
        </div>

        <div className="fw-pull">The secondary market is not the threat. Loss of authorship is.</div>
        <div className="fw-body">
          The brands that define the standards governing value beyond the first sale will increasingly shape how luxury itself is trusted, interpreted, and preserved over time.
        </div>

        {/* GATE */}
        {!unlocked && (
          <div className="fw-gate">
            <p className="eyebrow">Beyond the framework</p>
            <h3 className="fw-gate-title">Market data, precedent analysis, and diagnostic architecture.</h3>
            <p className="fw-gate-body">
              The framework above maps the five dimensions. The research behind it covers the market data, the governance tier structure with precedent cases, the cannibalization evidence, mid-market programs, and the full Diagnostic methodology. Available to Maison leadership and strategy teams.
            </p>
            <div className="fw-gate-form">
              <div className="fw-gate-field">
                <input
                  className={`fw-gate-input${errors.name ? ' is-error' : ''}`}
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="fw-gate-error" role="alert">{errors.name}</span>}
              </div>
              <div className="fw-gate-field">
                <input
                  className={`fw-gate-input${errors.email ? ' is-error' : ''}`}
                  type="email"
                  placeholder="Work email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="fw-gate-error" role="alert">{errors.email}</span>}
              </div>
              <div className="fw-gate-field">
                <input
                  className={`fw-gate-input${errors.org ? ' is-error' : ''}`}
                  type="text"
                  placeholder="House or organisation"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  aria-invalid={!!errors.org}
                />
                {errors.org && <span className="fw-gate-error" role="alert">{errors.org}</span>}
              </div>
              <button
                className="fw-gate-btn"
                onClick={onUnlock}
                type="button"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Access the research'}
              </button>
              <p className="fw-gate-note">This is the beginning of a conversation, not a mailing list. Please use a work email — the research is for Maison leadership and strategy teams.</p>
            </div>
          </div>
        )}

        {/* RESEARCH */}
        {unlocked && (
          <div className="fw-research" ref={researchRef}>
            <div className="fw-research-header">
              <p className="fw-research-ey">The research</p>
              <h3 className="fw-research-title">Market data, governance precedents,<br />and diagnostic architecture.</h3>
              <p className="fw-research-hint">Select a section below to explore ↓</p>
            </div>

            <div className="fw-tabs" role="tablist">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === t.id}
                  className={`fw-tab${activeTab === t.id ? ' is-active' : ''}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* MARKET CONTEXT */}
            {activeTab === 'market' && (
              <div>
                <div className="fw-body">Primary luxury is losing velocity. The governance of long-term value is gaining urgency. These are independent trends creating the same pressure point for every Maison: who defines what a luxury object is worth after it leaves the boutique?</div>
                <div className="fw-body">Primary luxury lost an estimated 20 million buyers in 2025. Most reduced purchase frequency, traded down, or redirected spending elsewhere. The primary market is contracting.</div>
                <div className="fw-body">In parallel, the market for pre-owned luxury is growing for its own reasons. New buyers entering through pre-owned. A generation of consumers for whom pre-owned is the natural entry point. These are not defectors from primary. They are a distinct and growing segment.</div>
                <div className="fw-body">The gap between primary and secondary growth rates is widening. The question is who governs the value inside it.</div>

                <div className="fw-pull">Value is not getting lost. It is getting reassigned.</div>

                {/* CHART: Market Divergence */}
                <div className="fw-chart-block">
                  <span className="fw-chart-label">Primary vs secondary luxury market growth · Indexed to 2022 · Approximate · Source: Bain &amp; Company</span>
                  <svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: "'Tenor Sans',sans-serif" }}>
                    <line x1="60" y1="20" x2="60" y2="185" stroke="#e8e4de" strokeWidth="1" />
                    <line x1="60" y1="185" x2="790" y2="185" stroke="#e8e4de" strokeWidth="1" />
                    <line x1="60" y1="140" x2="790" y2="140" stroke="#e8e4de" strokeWidth=".5" strokeDasharray="4,4" />
                    <line x1="60" y1="95" x2="790" y2="95" stroke="#e8e4de" strokeWidth=".5" strokeDasharray="4,4" />
                    <line x1="60" y1="50" x2="790" y2="50" stroke="#e8e4de" strokeWidth=".5" strokeDasharray="4,4" />
                    <text x="50" y="189" fontSize="9" fill="#8A5A50" textAnchor="end">0</text>
                    <text x="50" y="144" fontSize="9" fill="#8A5A50" textAnchor="end">50</text>
                    <text x="50" y="99" fontSize="9" fill="#8A5A50" textAnchor="end">100</text>
                    <text x="50" y="54" fontSize="9" fill="#8A5A50" textAnchor="end">150</text>
                    <text x="38" y="110" fontSize="8" fill="#8A5A50" textAnchor="middle" transform="rotate(-90 38 110)">Index (2022=100)</text>
                    <text x="120" y="200" fontSize="9" fill="#8A5A50" textAnchor="middle">2020</text>
                    <text x="254" y="200" fontSize="9" fill="#8A5A50" textAnchor="middle">2021</text>
                    <text x="388" y="200" fontSize="9" fill="#8A5A50" textAnchor="middle">2022</text>
                    <text x="522" y="200" fontSize="9" fill="#8A5A50" textAnchor="middle">2023</text>
                    <text x="656" y="200" fontSize="9" fill="#8A5A50" textAnchor="middle">2024</text>
                    <text x="775" y="200" fontSize="9" fill="#8A5A50" textAnchor="middle">2025</text>
                    <polyline points="120,118 254,84 388,75 522,76 656,74 775,76" fill="none" stroke="#4A1812" strokeWidth="2.5" strokeLinejoin="round" />
                    <circle cx="120" cy="118" r="4" fill="#4A1812" />
                    <circle cx="254" cy="84" r="4" fill="#4A1812" />
                    <circle cx="388" cy="75" r="4" fill="#4A1812" />
                    <circle cx="522" cy="76" r="4" fill="#4A1812" />
                    <circle cx="656" cy="74" r="4" fill="#4A1812" />
                    <circle cx="775" cy="76" r="4" fill="#4A1812" />
                    <polyline points="120,116 254,90 388,75 522,54 656,38 775,20" fill="none" stroke="#C4706A" strokeWidth="2.5" strokeLinejoin="round" />
                    <circle cx="120" cy="116" r="4" fill="#C4706A" />
                    <circle cx="254" cy="90" r="4" fill="#C4706A" />
                    <circle cx="388" cy="75" r="4" fill="#C4706A" />
                    <circle cx="522" cy="54" r="4" fill="#C4706A" />
                    <circle cx="656" cy="38" r="4" fill="#C4706A" />
                    <circle cx="775" cy="20" r="4" fill="#C4706A" />
                    <text x="790" y="80" fontSize="9.5" fill="#4A1812" fontWeight="500">Primary</text>
                    <text x="790" y="93" fontSize="8.5" fill="#8A5A50">~flat</text>
                    <text x="790" y="20" fontSize="9.5" fill="#C4706A" fontWeight="500">Secondary</text>
                    <text x="790" y="33" fontSize="8.5" fill="#8A5A50">+50%</text>
                    <line x1="388" y1="75" x2="388" y2="210" stroke="#D9B9A8" strokeWidth="1" strokeDasharray="3,3" />
                    <text x="388" y="218" fontSize="8" fill="#8A5A50" textAnchor="middle">Peak / baseline</text>
                  </svg>
                </div>

                <span className="fw-sec-label">The numbers — verified sources</span>
                <div className="fw-stat-row">
                  <div className="fw-stat">
                    <div className="fw-stat-num">~€50B</div>
                    <div className="fw-stat-label">Global pre-owned luxury market in 2025, growing faster than primary in the same period</div>
                    <div className="fw-stat-src">Bain &amp; Company / Altagamma, December 2025</div>
                  </div>
                  <div className="fw-stat">
                    <div className="fw-stat-num">−20M</div>
                    <div className="fw-stat-label">Luxury consumers lost from primary in 2025, reducing frequency, trading down, or redirecting to experiences</div>
                    <div className="fw-stat-src">Bain &amp; Company / Altagamma, December 2025</div>
                  </div>
                  <div className="fw-stat">
                    <div className="fw-stat-num">$26.8B</div>
                    <div className="fw-stat-label">Pre-owned luxury watch market in 2024, up 10% while primary watch sales fell 5–7%</div>
                    <div className="fw-stat-src">Cognitive Market Research, 2024</div>
                  </div>
                </div>

                <div className="fw-card fw-card--hi">
                  <p className="fw-card-eye">What the numbers mean together</p>
                  <div className="fw-card-body">
                    <p>Two markets moving in opposite directions at the same time. The pre-owned market is not feeding off primary decline. It is growing independently, into the space the primary market is vacating.</p>
                    <p>Between 40 and 65 percent of first-time luxury buyers make their first brand purchase in the pre-owned market. That buyer is statistically your next primary customer. Their identity, their purchase history, whether they came back: all of it belongs to whoever governed that first encounter.</p>
                    <p>The Maison built the desirability. The question is who governs the value that desirability generates beyond first sale.</p>
                  </div>
                  <div className="fw-tag-row">
                    <span className="fw-tag fw-tag--v">Verified · Bain/Altagamma 2025</span>
                    <span className="fw-tag fw-tag--v">eBay / McKinsey 2025</span>
                  </div>
                </div>

                <div className="fw-card">
                  <p className="fw-card-eye">The signal most Maisons are not reading</p>
                  <div className="fw-card-body">
                    <p>Resale prices react faster than earnings reports. When resale holds, the brand holds. When resale weakens, the brand is often already under pressure, before the earnings call, before the analyst note, before the board conversation.</p>
                    <p>The pre-owned market is the truth-telling layer. Most Maisons are reading it secondhand, through data a platform controls and will never fully share.</p>
                    <p><em>Primary market sets the story. Secondary market tests whether it holds.</em></p>
                  </div>
                  <div className="fw-tag-row">
                    <span className="fw-tag">Hard luxury: high signal confidence</span>
                    <span className="fw-tag">Soft luxury: noisier, category-dependent</span>
                  </div>
                </div>

                {/* CHART: Where the value goes */}
                <div className="fw-chart-block--my2">
                  <span className="fw-chart-label">For every €100 of secondary market transaction value involving a Maison&rsquo;s objects</span>
                  <svg viewBox="0 0 820 110" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: "'Tenor Sans',sans-serif" }}>
                    <rect x="0" y="30" width="820" height="36" rx="4" fill="#f2efe9" />
                    <rect x="0" y="30" width="230" height="36" rx="4" fill="#C4706A" />
                    <rect x="230" y="30" width="492" height="36" fill="#d8d4ce" />
                    <rect x="722" y="30" width="98" height="36" rx="4" fill="#4A1812" />
                    <text x="115" y="22" fontSize="10" fill="#8a3a38" textAnchor="middle" fontWeight="500">Platform commission</text>
                    <text x="476" y="22" fontSize="10" fill="#6B2A20" textAnchor="middle">Seller receives</text>
                    <text x="771" y="22" fontSize="10" fill="#4A1812" textAnchor="middle" fontWeight="500">Maison</text>
                    <text x="115" y="53" fontSize="13" fill="#fff" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontStyle="italic">15–40%</text>
                    <text x="476" y="53" fontSize="13" fill="#6B2A20" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontStyle="italic">~60–80%</text>
                    <text x="771" y="53" fontSize="13" fill="#fff" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontStyle="italic">€0</text>
                    <text x="115" y="82" fontSize="8.5" fill="#8A5A50" textAnchor="middle">Goes to platform</text>
                    <text x="476" y="82" fontSize="8.5" fill="#8A5A50" textAnchor="middle">Goes to whoever sold the object</text>
                    <text x="771" y="82" fontSize="8.5" fill="#333" textAnchor="middle" fontWeight="500">Goes to the Maison</text>
                  </svg>
                </div>
              </div>
            )}

            {/* GOVERNANCE TIERS */}
            {activeTab === 'tiers' && (
              <div>
                <div className="fw-body">Every brand engaging with lifecycle governance sits somewhere on a spectrum from facilitated participation to sovereign authorship. The tier structure maps that spectrum — where luxury fashion currently sits, and where the gap lies.</div>

                {/* Sovereignty Spectrum Visual */}
                <div className="fw-chart-block--mid">
                  <span className="fw-chart-label">The authorship spectrum</span>
                  <svg viewBox="0 0 820 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: "'Inter Tight',sans-serif" }}>
                    <defs>
                      <linearGradient id="specGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#F5E8E1" />
                        <stop offset="55%" stopColor="#8A5A50" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#2E0F0A" />
                      </linearGradient>
                    </defs>

                    {/* Tier labels above bar */}
                    <text x="82" y="20" fontSize="11" fill="#8A5A50" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" letterSpacing="0.5">Tier 1</text>
                    <text x="246" y="20" fontSize="11" fill="#8A5A50" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" letterSpacing="0.5">Tier 2</text>
                    <text x="410" y="20" fontSize="11" fill="#6B2A20" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" letterSpacing="0.5">Tier 3</text>
                    <text x="574" y="20" fontSize="11" fill="#6B2A20" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" letterSpacing="0.5">Tier 3.5</text>
                    <text x="738" y="20" fontSize="11" fill="#4A1812" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" letterSpacing="0.5" fontWeight="600">Tier 4</text>

                    {/* Gradient bar */}
                    <rect x="0" y="30" width="820" height="44" rx="3" fill="url(#specGrad)" />

                    {/* Divider lines */}
                    <line x1="164" y1="24" x2="164" y2="80" stroke="#D9B9A8" strokeWidth="1" />
                    <line x1="328" y1="24" x2="328" y2="80" stroke="#D9B9A8" strokeWidth="1" />
                    <line x1="492" y1="24" x2="492" y2="80" stroke="#D9B9A8" strokeWidth="1" />
                    <line x1="656" y1="24" x2="656" y2="80" stroke="#D9B9A8" strokeWidth="1" />

                    {/* Inside bar labels */}
                    <text x="18" y="57" fontSize="11" fill="#8A5A50" fontWeight="300">No authorship</text>
                    <text x="690" y="57" fontSize="11" fill="#F5E8E1" fontWeight="400">Full authorship</text>

                    {/* Sublabels below bar */}
                    <text x="82" y="105" fontSize="11" fill="#8A5A50" textAnchor="middle">Platform logo</text>
                    <text x="246" y="105" fontSize="11" fill="#8A5A50" textAnchor="middle">Values take-back</text>
                    <text x="410" y="105" fontSize="11" fill="#6B2A20" textAnchor="middle">Recommerce</text>
                    <text x="574" y="105" fontSize="11" fill="#4A1812" textAnchor="middle">Participation</text>
                    <text x="738" y="105" fontSize="11" fill="#4A1812" textAnchor="middle" fontWeight="500">Sovereignty</text>

                    {/* Brand names */}
                    <text x="82" y="122" fontSize="9.5" fill="#8A5A50" textAnchor="middle" fontStyle="italic">Zara · H&amp;M</text>
                    <text x="246" y="122" fontSize="9.5" fill="#8A5A50" textAnchor="middle" fontStyle="italic">Patagonia · Eileen Fisher</text>
                    <text x="410" y="122" fontSize="9.5" fill="#6B2A20" textAnchor="middle" fontStyle="italic">Coach</text>
                    <text x="574" y="122" fontSize="9.5" fill="#4A1812" textAnchor="middle" fontStyle="italic">Gucci / Vestiaire</text>
                    <text x="738" y="122" fontSize="9.5" fill="#4A1812" textAnchor="middle" fontStyle="italic">Rolex · Mercedes</text>
                  </svg>
                </div>

                <div className="fw-tiers">
                  <div className="fw-tier">
                    <div className="fw-tier-num">1</div>
                    <div>
                      <p className="fw-tier-label">Facilitated participation</p>
                      <p className="fw-tier-name">Brand logo, platform governance</p>
                      <p className="fw-tier-brands">Zara · H&amp;M · Inditex</p>
                    </div>
                    <div className="fw-tier-body">
                      Programs built primarily for regulatory positioning and brand narrative. <strong>Zara Pre-Owned</strong>, launched UK 2022 and US October 2024, now active in 16+ markets, offers repair, peer-to-peer resale, and donation. The brand facilitates but does not authenticate, price, or govern. Presence is real. Authorship is not.
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
                      Genuine brand-governed take-back built on values. <strong>Eileen Fisher Renew</strong> since 2009 — 2.3M+ garments, brand governs quality and resale channel. <strong>Patagonia Worn Wear</strong> — $13M revenue FY25 on $1.47B total, 40% higher customer loyalty than industry average. <strong>Levi&rsquo;s Secondhand</strong> — objects resold through brand&rsquo;s own channel, not a third-party marketplace. The architectural lessons transfer to luxury. The cultural and customer logic does not.
                      <div>
                        <span className="fw-tier-tag">Brand governs flow</span>
                        <span className="fw-tier-tag">Values-driven</span>
                        <span className="fw-tier-tag">~1% of revenue at scale</span>
                        <span className="fw-tier-tag fw-tier-tag--on">Authorship: partial</span>
                      </div>
                    </div>
                  </div>

                  <div className="fw-tier">
                    <div className="fw-tier-num">3</div>
                    <div>
                      <p className="fw-tier-label">Recommerce as strategy</p>
                      <p className="fw-tier-name">Lifecycle as growth lever</p>
                      <p className="fw-tier-brands">Coach · The North Face · Lululemon</p>
                    </div>
                    <div className="fw-tier-body">
                      Lifecycle governance integrated into brand strategy as a customer acquisition and loyalty mechanism. <strong>Coach (Re)Loved</strong>: trade-in, branded resale with digital IDs for instant verification, 1M+ products refurbished. Tapestry FY2025: record <strong>$7B revenue</strong>, Coach double-digit growth, <strong>6.8M new customers</strong> (~60% Gen Z/Millennials). Lifecycle programs cited as a contributing factor. Causation not isolated in public filings. The digital ID layer is the most sophisticated authorship signal at this tier.
                      <div>
                        <span className="fw-tier-tag">Brand participates actively</span>
                        <span className="fw-tier-tag">Digital IDs emerging</span>
                        <span className="fw-tier-tag fw-tier-tag--on">Authorship: growing</span>
                      </div>
                    </div>
                  </div>

                  <div className="fw-tier">
                    <div className="fw-tier-num">3.5</div>
                    <div>
                      <p className="fw-tier-label">Participation without authorship</p>
                      <p className="fw-tier-name">Brand present, platform governs</p>
                      <p className="fw-tier-brands">Gucci via Vestiaire Collective</p>
                    </div>
                    <div className="fw-tier-body">
                      The most common model in luxury fashion — and the most frequently mistaken for progress. <strong>Gucci Preloved</strong>, launched March 2023 through Kering&rsquo;s equity stake in Vestiaire Collective: customers bring select bags to Gucci boutiques in Europe, receive store credit. The bags are then listed and sold on Vestiaire — authenticated by Vestiaire, priced by Vestiaire, on Vestiaire&rsquo;s platform alongside every other brand they carry.
                      <div className="fw-tier-case">
                        Gucci touches the object at intake. Vestiaire authors everything that follows: the standard, the price, the buyer relationship, the data, the margin. Gucci led all brands on Vestiaire in pre-loved sales volume in Q4 2024, while Kering&rsquo;s primary business was contracting. The lifecycle value of Gucci objects is large and commercially significant. The governance of that value flows almost entirely to the platform. This is participation. It is not authorship.
                      </div>
                      <div>
                        <span className="fw-tier-tag fw-tier-tag--w">Brand at intake only</span>
                        <span className="fw-tier-tag fw-tier-tag--w">Platform authenticates and prices</span>
                        <span className="fw-tier-tag fw-tier-tag--w">Authorship: zero post-intake</span>
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
                      The brand authenticates, grades, prices, warranties, and distributes. The object never leaves the canon. <strong>Rolex CPO</strong>: approximately $600M in certified pre-owned sales through the authorised network in 2025, representing 11% of all Rolex secondary market sales — from a standing start in 2022. 7–28% price premium over grey market. Direct margin flows to the retailer network, not the manufacture. Rolex&rsquo;s benefit is strategic: standards enforced, data owned, customer experience governed. <strong>Mercedes-Benz CPO</strong>: 67% of used sales by value through brand-controlled channels, approximately $2,160 average premium over non-certified equivalents. Both programmes operated through pre-existing authorised dealer networks — that infrastructure is load-bearing.
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
                      But sovereign non-participation is a conditional position, not a permanent one. It works when scarcity is absolute and brand authority is unquestioned. That position depends on conditions that few houses can sustain indefinitely. When those conditions soften, the absence of infrastructure becomes the exposure. There is no lever to pull. No system to defend the value. Only the story. And stories reprice.
                      <br /><br />
                      Sovereignty is not a static position. It is a system. The Diagnostic determines which system serves each house — and ensures they have one at all.
                      <div className="fw-tag-row">
                        <span className="fw-tier-tag fw-tier-tag--on">Deliberate non-participation</span>
                        <span className="fw-tier-tag fw-tier-tag--on">Scarcity as governance</span>
                        <span className="fw-tier-tag">Conditional — not permanent</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fw-pull">The tier structure is a map, not a prescription. Every house needs a position. The Diagnostic determines which one — and ensures the architecture exists to hold it.</div>
              </div>
            )}

            {/* CANNIBALIZATION */}
            {activeTab === 'cannibal' && (
              <div>
                <div className="fw-body">The cannibalization fear is the primary reason luxury Maisons have stayed on the sidelines of lifecycle governance. It is consistently unsupported by independent evidence. The question is not whether sovereign lifecycle programs compete with primary sales. The data says they do not. The question is whether the Maison is the author of the buyer&rsquo;s first encounter with the brand.</div>

                <div className="fw-pull">Two different populations. Two different findings. Both pointing the same direction.</div>

                <div className="fw-stat-row-2">
                  <div className="fw-stat">
                    <div className="fw-stat-num">75–80%</div>
                    <div className="fw-stat-label">of <em>existing</em> luxury consumers are strictly new-product buyers — a structurally separate segment from pre-owned buyers. They are not being cannibalised.</div>
                    <div className="fw-stat-src">McKinsey, independent consumer research, North America, EU, Asia, 2021</div>
                  </div>
                  <div className="fw-stat">
                    <div className="fw-stat-num">40–65%</div>
                    <div className="fw-stat-label">of <em>first-time</em> luxury buyers make their first brand purchase in the pre-owned market. They are the pipeline into the primary market.</div>
                    <div className="fw-stat-src">eBay Global Head of Fashion, 2025, consistent with McKinsey</div>
                  </div>
                </div>

                {/* VISUAL: The flow — pre-owned as entry point */}
                <div className="fw-flow-wrap">
                  <p className="fw-flow-label">The pre-owned market is an entry point, not a competitor</p>
                  <div className="fw-flow-grid">
                    <div className="fw-flow-box">
                      <p className="fw-flow-title">Pre-owned<br />purchase</p>
                      <p className="fw-flow-sub">40–65% of first-time<br />luxury buyers start here</p>
                    </div>
                    <div className="fw-flow-arrow">
                      <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2" y1="10" x2="32" y2="10" stroke="#D9B9A8" strokeWidth="1" />
                        <polygon points="30,6 38,10 30,14" fill="#D9B9A8" />
                      </svg>
                    </div>
                    <div className="fw-flow-box">
                      <p className="fw-flow-title fw-flow-title--muted">Brand<br />familiarity</p>
                      <p className="fw-flow-sub">Trust, authenticity,<br />and desirability build</p>
                    </div>
                    <div className="fw-flow-arrow">
                      <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2" y1="10" x2="32" y2="10" stroke="#D9B9A8" strokeWidth="1" />
                        <polygon points="30,6 38,10 30,14" fill="#D9B9A8" />
                      </svg>
                    </div>
                    <div className="fw-flow-box fw-flow-box--dark">
                      <p className="fw-flow-title fw-flow-title--inverted">Primary<br />buyer</p>
                      <p className="fw-flow-sub fw-flow-sub--inverted">The 75–80% who<br />buy new product only</p>
                    </div>
                  </div>
                  <p className="fw-flow-caption">The same person. A different point in the same journey. The question is who governs the first encounter.</p>
                </div>

                <span className="fw-sec-label">The evidence — source by source</span>
                <div className="fw-evidence-stack">
                  <div className="fw-evidence">
                    <div className="fw-ev-source">McKinsey<span>Luxury resale consumer research · NA, EU, Asia · 2021 · Independent</span></div>
                    <div className="fw-ev-body">
                      <strong>&ldquo;Done prudently, brand entry should not erode margins, and would result in only limited cannibalization.&rdquo;</strong> 75–80% of luxury consumers remain strictly new-product buyers — structurally separate from pre-owned buyers. The most credible independent source on this question.
                      <div className="fw-tag-row">
                        <span className="fw-tag fw-tag--v">Verified · Independent</span>
                      </div>
                    </div>
                  </div>
                  <div className="fw-evidence">
                    <div className="fw-ev-source">McKinsey 2026<span>State of Fashion · UK, US, China · 2025 data</span></div>
                    <div className="fw-ev-body">
                      Concerns that resale cannibalises firsthand purchases <strong>&ldquo;aren&rsquo;t supported by the data.&rdquo;</strong> Consumers use pre-owned markets to explore aspirational brands for future purchases. The secondary market functions as a discovery and trial channel that feeds primary sales.
                      <div className="fw-tag-row">
                        <span className="fw-tag fw-tag--v">Verified · Independent · 2025 data</span>
                      </div>
                    </div>
                  </div>
                  <div className="fw-evidence">
                    <div className="fw-ev-source">eBay Global Fashion<span>Kirsty Keoghan · GM of Fashion · 2025 · Platform-adjacent</span></div>
                    <div className="fw-ev-body">
                      <strong>&ldquo;Between 40–65% of the first time you buy a luxury brand, it&rsquo;s in the secondary market.&rdquo;</strong> Pre-owned is a customer acquisition channel, not a cannibalization threat. Directionally consistent with McKinsey. Note: eBay benefits commercially from pre-owned market growth — a supporting data point, not a primary independent source.
                      <div className="fw-tag-row">
                        <span className="fw-tag fw-tag--v">Directionally consistent</span>
                        <span className="fw-tag">Platform-adjacent source</span>
                      </div>
                    </div>
                  </div>
                  <div className="fw-evidence">
                    <div className="fw-ev-source">Coach / Tapestry<span>FY2025 earnings · August 2025 · Public filing</span></div>
                    <div className="fw-ev-body">
                      Record $7B revenue. Coach led double-digit growth. <strong>6.8M new customers added</strong>, approximately 60 percent Gen Z and Millennials. Lifecycle programs cited as a contributing factor to new customer acquisition alongside broader brand elevation. Correlation confirmed. Causation not isolated in public filings.
                      <div className="fw-tag-row">
                        <span className="fw-tag fw-tag--v">Verified · Public earnings</span>
                        <span className="fw-tag">Correlation confirmed · Causation not isolated</span>
                      </div>
                    </div>
                  </div>
                  <div className="fw-evidence">
                    <div className="fw-ev-source">The RealReal<span>Q3 2025 earnings · Public filing</span></div>
                    <div className="fw-ev-body">
                      <strong>$520M GMV Q3 2025</strong>, up 20% year-on-year. Active buyers exceeded 1M. <strong>First-time watch buyers up 46%.</strong> Pre-owned is increasingly the discovery channel for first-time luxury purchases — the acquisition channel Maisons are currently absent from.
                      <div className="fw-tag-row">
                        <span className="fw-tag fw-tag--v">Verified · Public earnings</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VISUAL: The governance gap */}
                <div className="fw-gov-wrap">
                  <p className="fw-gov-label">Who governs value after the first sale</p>
                  <div className="fw-gov-grid">
                    <div className="fw-gov-row fw-gov-row--dark">
                      <p className="fw-gov-rowlabel fw-gov-rowlabel--inverted">The platform</p>
                      <p className="fw-gov-rowtext fw-gov-rowtext--inverted">Authentication · pricing · condition grading · buyer data · margin</p>
                    </div>
                    <div className="fw-gov-row">
                      <p className="fw-gov-rowlabel">The Maison</p>
                      <p className="fw-gov-rowtext fw-gov-rowtext--muted">The object. Nothing that follows.</p>
                    </div>
                  </div>
                  <p className="fw-gov-caption">The cannibalization is already happening. The question is whether it is happening in the brand&rsquo;s favor.</p>
                </div>

                <div className="fw-card fw-card--hi">
                  <p className="fw-card-eye">The reframe for the finance director</p>
                  <p className="fw-card-title">The cannibalization question is pointed at the wrong risk.</p>
                  <div className="fw-card-body">
                    <p>The risk is not that sovereign lifecycle programs compete with primary sales. The risk is that the absence of lifecycle governance cedes the brand&rsquo;s most cost-effective customer acquisition channel to whoever built the infrastructure to capture it.</p>
                    <p>The value transfer is already happening. The question is whether it is happening in the brand&rsquo;s favor.</p>
                  </div>
                </div>
              </div>
            )}

            {/* BRAND PROGRAMS */}
            {activeTab === 'programs' && (
              <div>
                <div className="fw-body">Mid-market and adjacent brands have been running lifecycle governance programs for over a decade. Their experience provides the most direct operational intelligence for luxury Maisons — what the infrastructure costs to build, what it returns, and what conditions make it viable. A critical note throughout: the cultural logic of eco-conscious take-back is specific to these brands. The architectural lessons transfer. The narrative does not.</div>

                <div className="fw-prog-grid">
                  <div className="fw-prog fw-prog--hi">
                    <p className="fw-prog-eye">Pioneer · Since 2009 · US</p>
                    <h3 className="fw-prog-title">Eileen Fisher Renew</h3>
                    <p className="fw-prog-body">Any garment, any condition, $5 store credit. Sorted, cleaned, then resold, mended into limited collections, or remade into new pieces. 2.3M+ garments processed. Powered by Trove.</p>
                    <p className="fw-prog-lesson">What it proves: A brand can govern the full lifecycle of its objects at scale over 16 years without cannibalising primary sales. The infrastructure is operationally proven. The cultural logic — eco-conscious, accessible price points — is specific to Eileen Fisher&rsquo;s market and does not transfer directly to luxury.</p>
                    <p className="fw-prog-data"><strong>Data:</strong> 2.3M+ garments · $5 credit per item · Mended collections sell out in hours · Revenue not disclosed publicly</p>
                  </div>

                  <div className="fw-prog fw-prog--hi">
                    <p className="fw-prog-eye">Commercial proof · Since 2017 online · Global</p>
                    <h3 className="fw-prog-title">Patagonia Worn Wear</h3>
                    <p className="fw-prog-body">Buy-back, repair, and resale. $13M revenue FY25 on $1.47B total — approximately 1% of the business after 8+ years online. 174,799 products repaired globally FY25. Designed explicitly to prove circular recommerce can be commercially profitable.</p>
                    <p className="fw-prog-lesson">What it proves: Commercial viability is achievable at scale. The 1% revenue share reflects outdoor gear economics at accessible price points. At luxury price points, a single reacquired object represents structurally different per-unit margin. The 1% figure is instructive on operational scale. It should not be read as the ceiling for luxury.</p>
                    <p className="fw-prog-data"><strong>Data:</strong> $13M Worn Wear FY25 · $1.47B total · ~1% of business · 40% loyalty premium vs industry</p>
                  </div>

                  <div className="fw-prog fw-prog--hi">
                    <p className="fw-prog-eye">Strategic lifecycle governance · Since 2021 · Global</p>
                    <h3 className="fw-prog-title">Coach (Re)Loved + Coachtopia</h3>
                    <p className="fw-prog-body">Trade-in, branded resale with digital IDs, 1M+ products refurbished. Coachtopia launched 2023 — every product made from waste with embedded digital passports and full take-back. Tapestry FY2025: record $7B, Coach double-digit growth, 6.8M new customers.</p>
                    <p className="fw-prog-lesson">Closest to the sovereign governance model at the mid-market tier. The digital ID layer is architecturally significant — the beginning of provenance continuity infrastructure. Causation between lifecycle programs and revenue growth is directionally supported, not isolated in public filings.</p>
                    <p className="fw-prog-data"><strong>Data:</strong> $7B Tapestry FY2025 · Coach double-digit growth · 6.8M new customers · 1M+ refurbished · (Re)Loved revenue not broken out</p>
                  </div>

                  <div className="fw-prog">
                    <p className="fw-prog-eye">Proof from adjacents · Hard luxury</p>
                    <h3 className="fw-prog-title">Rolex CPO + Mercedes-Benz CPO</h3>
                    <p className="fw-prog-body">Rolex: ~$600M FY2025, 11% of all Rolex secondary market sales, 7–28% premium over grey market, from a standing start in 2022. Mercedes-Benz: 67% of used sales by value through manufacturer-controlled channels, ~$2,160 average premium over non-certified equivalents.</p>
                    <p className="fw-prog-lesson">What it proves: When the brand governs the second transaction, it commands a premium, captures the customer relationship, and generates real-time signal on what the market believes about the brand. The mechanism is proven at scale in adjacent categories. Both operated through pre-existing authorised dealer networks — the architecture that luxury fashion boutique networks carry the same structural potential to replicate.</p>
                    <p className="fw-prog-data"><strong>Data:</strong> Rolex CPO ~$600M FY2025 · Mercedes 67% used by value brand-controlled · $2,160 average CPO premium</p>
                  </div>
                </div>

                <div className="fw-card fw-card--hi">
                  <p className="fw-card-eye">The technology infrastructure question</p>
                  <p className="fw-card-title">The ecosystem is maturing. The right architecture assembles best-in-class components.</p>
                  <div className="fw-card-body">
                    <p>Most mid-market lifecycle programs run on third-party infrastructure: Trove powers Eileen Fisher, Patagonia, and Levi&rsquo;s. Digital ID platforms — Arianee, EON — underpin Coach and Vestiaire&rsquo;s provenance layer. The RealReal&rsquo;s Athena AI processed over 10% of items in Q1 2025, with a 20% reduction in processing time. Richemont acquired Watchfinder in 2018. Neiman Marcus took a stake in Fashionphile in 2019.</p>
                    <p>The infrastructure ecosystem resembles a venture capital portfolio — best-in-class components across authentication, grading, provenance, and lifecycle platforms that can be assembled differently for each house. BCE Ventures&rsquo; role includes determining the right combination: what existing technology serves luxury at scale, what needs to be purpose-built, and what a sovereign program must own outright versus license.</p>
                  </div>
                </div>
              </div>
            )}

            {/* CASE STUDIES */}
            {activeTab === 'cases' && (
              <div>
                <div className="fw-body">Three cases. Each proving one specific thing. No single case proves all of it — and anyone who presents one as proof of everything should be pressed on the gaps. Together they make the argument that no individual precedent can make alone.</div>

                {/* Case comparison visual */}
                <svg viewBox="0 0 820 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: "'Tenor Sans',sans-serif", margin: '1.5rem 0 2rem' }}>
                  <rect x="0" y="0" width="258" height="110" rx="4" fill="#ECD8CC" stroke="#D9B9A8" strokeWidth="1" />
                  <text x="129" y="22" fontSize="9" fill="#8A5A50" textAnchor="middle" letterSpacing="2">ROLEX CPO</text>
                  <text x="129" y="50" fontSize="28" fill="#4A1812" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontWeight="300">2022</text>
                  <text x="129" y="67" fontSize="8.5" fill="#8A5A50" textAnchor="middle">launched</text>
                  <rect x="20" y="79" width="218" height="1" fill="#e8e4de" />
                  <text x="129" y="97" fontSize="9" fill="#6B2A20" textAnchor="middle" fontStyle="italic">Proves: the motivation</text>
                  <text x="280" y="60" fontSize="16" fill="#D9B9A8" textAnchor="middle">+</text>
                  <rect x="282" y="0" width="258" height="110" rx="4" fill="#ECD8CC" stroke="#D9B9A8" strokeWidth="1" />
                  <text x="411" y="22" fontSize="9" fill="#8A5A50" textAnchor="middle" letterSpacing="2">MERCEDES CPO</text>
                  <text x="411" y="50" fontSize="28" fill="#4A1812" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontWeight="300">67%</text>
                  <text x="411" y="67" fontSize="8.5" fill="#8A5A50" textAnchor="middle">used sales brand-controlled</text>
                  <rect x="302" y="79" width="218" height="1" fill="#e8e4de" />
                  <text x="411" y="97" fontSize="9" fill="#6B2A20" textAnchor="middle" fontStyle="italic">Proves: the architecture</text>
                  <text x="562" y="60" fontSize="16" fill="#D9B9A8" textAnchor="middle">+</text>
                  <rect x="564" y="0" width="256" height="110" rx="4" fill="#ECD8CC" stroke="#D9B9A8" strokeWidth="1" />
                  <text x="692" y="22" fontSize="9" fill="#8A5A50" textAnchor="middle" letterSpacing="2">COACH (RE)LOVED</text>
                  <text x="692" y="50" fontSize="28" fill="#4A1812" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontWeight="300">6.8M</text>
                  <text x="692" y="67" fontSize="8.5" fill="#8A5A50" textAnchor="middle">new customers FY2025</text>
                  <rect x="584" y="79" width="218" height="1" fill="#e8e4de" />
                  <text x="692" y="97" fontSize="9" fill="#6B2A20" textAnchor="middle" fontStyle="italic">Proves: demand in fashion</text>
                </svg>

                <div className="fw-card fw-card--hi fw-card--mb">
                  <p className="fw-card-eye">Case 01 · Rolex Certified Pre-Owned · Launched 2022</p>
                  <p className="fw-card-title">What it proves: the motivation</p>
                  <div className="fw-card-body">
                    <p>Rolex did not launch CPO to extract margin from the secondary market. Direct CPO profit flows 100% to the authorised retailer network — the manufacture takes nothing, confirmed by the managing director of Rolex Germany. The program was built for a different reason: at many authorised retailers, pre-owned Rolex had quietly become the second-best-selling brand in the store, with no quality control, no warranty, and no connection to the brand whose name was on the dial. Rolex had no visibility into how those watches were being sourced, serviced, or presented. CPO was designed to bring that category under the brand&rsquo;s standard.</p>
                    <p>This is the authorship argument in its purest form. The motivation was governance, not revenue. The secondary market was already happening inside the brand&rsquo;s own authorised network — uncontrolled, unbranded, and disconnected from the brand&rsquo;s standards. CPO pulled it back under the canon.</p>
                    <p>Approximately $600M in certified pre-owned sales flowed through the authorised network in 2025, representing 11% of all Rolex secondary market sales. 7 to 28% price premium over grey market equivalents. Rolex also acquired Bucherer in 2023, giving it direct ownership of approximately one fifth of global CPO inventory through Bucherer and Tourneau stores — a vertical integration of the distribution infrastructure, not just the certification standard.</p>
                    <div className="fw-honest">What it does not prove: that the architecture transfers directly to fashion. Watches are mechanical, serialised, and objectively dateable. Authentication is precise. Condition is verifiable. Fashion authentication is interpretive — two people can reasonably disagree on the condition of a leather bag. The governance motivation transfers. The authentication mechanics do not transfer directly.</div>
                  </div>
                  <div className="fw-tag-row">
                    <span className="fw-tag fw-tag--v">Proves: governance motivation</span>
                    <span className="fw-tag">Does not prove: fashion authentication model</span>
                    <span className="fw-tag">Source: Coronet Magazine · Rolex Germany MD · Everest Bands</span>
                  </div>
                </div>

                <div className="fw-card fw-card--hi fw-card--mb">
                  <p className="fw-card-eye">Case 02 · Mercedes-Benz CPO · Decades of operation</p>
                  <p className="fw-card-title">What it proves: the architecture</p>
                  <div className="fw-card-body">
                    <p>Mercedes-Benz operates sovereign secondary market infrastructure across a broad catalog of objects at varying price points, with interpretive condition grading, through a dealer network built primarily for sales rather than specialist service. 67% of used Mercedes sales by value now flow through manufacturer-controlled channels. Average premium of approximately $2,160 over non-certified equivalents. The economics flow to the dealer network. The brand benefits strategically: standards enforced, customer experience governed, data owned.</p>
                    <p>This is the closest architectural analogue to what a luxury fashion Maison would build. Not a single category, single price point, specialist-service network. A broad assortment, a generalist distribution infrastructure, interpretive condition assessment, and manufacturer-governed standards applied across the whole.</p>
                    <p>The transferable lesson is the incentive structure. CPO gives dealers a revenue tool that aligns their economic interest with the brand&rsquo;s governance interest. When the program is designed correctly, the distribution network becomes the enforcement mechanism for brand standards — not because they are required to, but because it is commercially advantageous for them.</p>
                    <div className="fw-honest">What it does not prove: that luxury fashion objects command the same premium dynamics. Automotive condition grading, while interpretive, is anchored in mechanical inspection criteria. Fashion condition grading has fewer objective anchors. The premium in fashion, if achievable, may be smaller and more category-dependent.</div>
                  </div>
                  <div className="fw-tag-row">
                    <span className="fw-tag fw-tag--v">Proves: architecture at scale</span>
                    <span className="fw-tag fw-tag--v">Proves: network incentive alignment</span>
                    <span className="fw-tag">Does not prove: fashion premium dynamics</span>
                  </div>
                </div>

                <div className="fw-card fw-card--hi">
                  <p className="fw-card-eye">Case 03 · Coach (Re)Loved / Tapestry · Since 2021</p>
                  <p className="fw-card-title">What it proves: demand in fashion</p>
                  <div className="fw-card-body">
                    <p>Coach is not a fully sovereign program — authentication standards, pricing, and resale are not governed with the precision of Rolex CPO or Mercedes CPO. But it is the closest existing proof that a fashion brand can integrate lifecycle governance into boutique operations at scale, generate measurable new customer acquisition, and not cannibalise primary sales.</p>
                    <p>Tapestry FY2025: record $7 billion revenue. Coach double-digit growth. 6.8 million new customers added, approximately 60% Gen Z and Millennials. Lifecycle programs cited as a contributing factor to new customer acquisition alongside broader brand elevation. The digital ID infrastructure embedded in Coachtopia products — passports enabling instant resale verification — is the most developed provenance continuity infrastructure in fashion at mid-market scale.</p>
                    <p>The demand-side question is answered. Consumers want to engage with fashion brands across the full lifecycle. The infrastructure to capture that demand in a brand-governed way exists and is commercially viable. The gap between where Coach sits and where Rolex sits is the gap BCE Ventures is built to close — for the houses where closing it serves the primary market position.</p>
                    <div className="fw-honest">What it does not prove: causation. Multiple factors drove Coach&rsquo;s growth including brand elevation, product development, and broader market dynamics. The circularity correlation is real and directionally significant. Causation is not isolated in public filings. This is the honest version of the Coach case — and it is still a strong one.</div>
                  </div>
                  <div className="fw-tag-row">
                    <span className="fw-tag fw-tag--v">Proves: demand in fashion</span>
                    <span className="fw-tag fw-tag--v">Proves: boutique integration is viable</span>
                    <span className="fw-tag">Correlation confirmed · Causation not isolated</span>
                  </div>
                </div>

                <div className="fw-pull">Any single case has vulnerabilities. Three cases each proving one specific thing are collectively more robust than one case trying to prove everything. Rolex proves the motivation. Mercedes proves the architecture. Coach proves the demand. Together they prove every component works somewhere. None proves the full path for a luxury fashion Maison building from zero. That path is what the Diagnostic maps.</div>
              </div>
            )}

            {/* DIAGNOSTIC */}
            {activeTab === 'diagnostic' && (
              <div>
                <div className="fw-body">The Diagnostic is the first engagement BCE Ventures undertakes with any Maison. It is a structured analytical exercise that produces a clear recommendation: whether sovereign lifecycle infrastructure serves this house, what it would require, and what it would be worth. If the answer is that it does not serve this house&rsquo;s primary market position, BCE Ventures says so.</div>

                <div className="fw-card">
                  <p className="fw-card-eye">What the Diagnostic is not</p>
                  <div className="fw-card-body">
                    <p>Not a survey. Not a market research report. Not a technology assessment. A research firm can describe the market. It cannot tell you whether the signal in your specific catalog is clean enough to act on, whether your boutique network is viable infrastructure for sovereign programs, or whether your primary pricing logic is compatible with lifecycle governance. Those are judgment calls that require the intersection of luxury advisory experience, secondary market operational knowledge, and cross-industry perspective. They are not in any database.</p>
                  </div>
                </div>

                <span className="fw-sec-label">Five structured components</span>

                <div className="fw-tiers">
                  <div className="fw-tier">
                    <div className="fw-tier-num fw-tier-num--alpha">A</div>
                    <div>
                      <p className="fw-tier-label">Secondary market intelligence</p>
                      <p className="fw-tier-name">External circulation audit</p>
                    </div>
                    <div className="fw-tier-body">
                      Mapping the lifecycle landscape for this house&rsquo;s specific objects: which platforms carry them, at what price relative to primary, how that price has moved, what authentication disputes exist, what condition grading the market applies. Requires knowing which platforms carry meaningful signal for this specific category and how to weight platform-specific noise.
                      <p className="fw-honest">Output: lifecycle circulation map with signal quality assessment and primary market correlation analysis.</p>
                    </div>
                  </div>

                  <div className="fw-tier">
                    <div className="fw-tier-num fw-tier-num--alpha">B</div>
                    <div>
                      <p className="fw-tier-label">Structured internal engagement</p>
                      <p className="fw-tier-name">Internal readiness assessment</p>
                    </div>
                    <div className="fw-tier-body">
                      A structured conversation with finance, commercial, and where relevant creative leadership — surfacing what the house currently knows about its lifecycle value position, what infrastructure exists, what the board is asking that cannot currently be answered, and what operational capacity exists for a sovereign program.
                      <p className="fw-honest">Output: internal readiness gap assessment and board-question mapping.</p>
                    </div>
                  </div>

                  <div className="fw-tier">
                    <div className="fw-tier-num fw-tier-num--alpha">C</div>
                    <div>
                      <p className="fw-tier-label">Cross-industry comparative judgment</p>
                      <p className="fw-tier-name">Benchmark and precedent analysis</p>
                    </div>
                    <div className="fw-tier-body">
                      Mapping the house&rsquo;s position against the specific analogues that apply to this category, price point, and lifecycle value profile. Rolex CPO is not the right benchmark for a fashion house with thin secondary volume. Determining which combination of precedents actually applies is a judgment call, not a lookup.
                      <p className="fw-honest">Output: relevant precedent map with transferability assessment for this specific house.</p>
                    </div>
                  </div>

                  <div className="fw-tier">
                    <div className="fw-tier-num fw-tier-num--alpha">D</div>
                    <div>
                      <p className="fw-tier-label">Directional financial scenarios</p>
                      <p className="fw-tier-name">Economics modelling</p>
                    </div>
                    <div className="fw-tier-body">
                      A directional model of what sovereign lifecycle infrastructure would cost to build, what it would return, and over what timeframe, for this specific house. Three scenarios — conservative, base, and optimistic — that let finance assess whether the investment thesis holds before committing to architecture.
                      <p className="fw-honest">Output: three-scenario economics model with sensitivity analysis and investment threshold assessment.</p>
                    </div>
                  </div>

                  <div className="fw-tier">
                    <div className="fw-tier-num fw-tier-num--alpha">E</div>
                    <div>
                      <p className="fw-tier-label">The most important component</p>
                      <p className="fw-tier-name">Strategic fit determination</p>
                    </div>
                    <div className="fw-tier-body">
                      The honest answer to whether sovereign lifecycle governance serves or conflicts with this house&rsquo;s primary market positioning. For some houses the answer is proceed to architecture. For others it is sovereign non-participation, managed deliberately. The Diagnostic produces a clear recommendation either way.
                      <p className="fw-honest">Output: strategic fit recommendation — proceed to architecture, hold pending conditions, or sovereign non-participation — with explicit rationale.</p>
                    </div>
                  </div>
                </div>

                <div className="fw-card fw-card--hi fw-card--mt">
                  <p className="fw-card-eye">The analogy that positions BCE Ventures precisely</p>
                  <p className="fw-card-title">The conversation before the program</p>
                  <div className="fw-card-body">
                    <p>The most accurate analogy for BCE Ventures is not Rolex three years into CPO. It is the internal conversation Rolex had before launching it — when the question was whether to enter the secondary market at all, what the right model was, what the risks to primary pricing power were, and whether the economics justified the construction.</p>
                    <p>That conversation does not currently exist as an offering in luxury fashion. That is the whitespace BCE Ventures occupies.</p>
                  </div>
                </div>

                <div className="fw-pull">Define the standard. Or be priced by someone who will.</div>

                <div className="fw-card fw-card--mt-2">
                  <p className="fw-card-eye">About BCE Ventures</p>
                  <div className="fw-card-body">
                    <p>BCE Ventures brings experience across global secondary market systems, luxury advisory, and lifecycle infrastructure design — including work spanning Amazon Renewed, Google, and multi-billion-dollar secondary market operations across retail and technology platforms, alongside direct supplier relationships with Graff, Harry Winston, Van Cleef &amp; Arpels, and Tiffany &amp; Co.</p>
                  </div>
                </div>
              </div>
            )}

            <p className="fw-unlock-note">To discuss what this means for your specific house, the conversation begins at bce.ventures.</p>
          </div>
        )}
      </div>
    </main>
  )
}
