'use client'

import { useEffect, useState } from 'react'
import AuthorshipSpectrum from './AuthorshipSpectrum'

type TabId = 'market' | 'tiers' | 'cannib' | 'cases'

const TABS: { id: TabId; label: string }[] = [
  { id: 'market', label: 'Market context' },
  { id: 'tiers', label: 'Market study' },
  { id: 'cannib', label: 'Cannibalization' },
  { id: 'cases', label: 'Three vectors' },
]

function TabBar({ active, onChange }: { active: TabId; onChange: (id: TabId) => void }) {
  return (
    <nav className="fwg-tabs" role="tablist" aria-label="Research sections">
      <ol className="fwg-tabs-list">
        {TABS.map((t, i) => (
          <li key={t.id} className="fwg-tabs-item">
            <button
              role="tab"
              aria-selected={active === t.id}
              data-active={active === t.id}
              className="fwg-tab"
              onClick={() => onChange(t.id)}
            >
              <span className="fwg-tab-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="fwg-tab-label">{t.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function MarketContextTab() {
  return (
    <div className="fwg-tab-pane">
      <div className="fw-body">
        Primary luxury is losing velocity. The governance of long-term value is gaining urgency. These are independent trends creating the same pressure point for every Maison: who defines what a luxury object is worth after it leaves the boutique?
      </div>
      <div className="fw-body">
        Primary luxury lost an estimated 20 million buyers in 2025. Most reduced purchase frequency, traded down, or redirected spending elsewhere. The primary market is contracting.
      </div>
      <div className="fw-body">
        In parallel, the market for pre-owned luxury is growing for its own reasons. New buyers entering through pre-owned. A generation of consumers for whom pre-owned is the natural entry point. These are not defectors from primary. They are a distinct and growing segment.
      </div>
      <div className="fw-body">
        The gap between primary and secondary growth rates is widening. The question is who governs the value inside it.
      </div>

      <div className="fw-pull">Value is not getting lost. It is getting reassigned.</div>

      <figure className="fw-chart-block fw-mc-chart">
        <span className="fw-chart-label">Fig. M-1 — Primary vs secondary luxury market growth · Indexed to 2022 · Source: Bain &amp; Company</span>
        <svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
          <line x1="70" y1="20" x2="760" y2="20" stroke="#D9B9A8" strokeWidth="0.5" />
          <line x1="70" y1="80" x2="760" y2="80" stroke="#D9B9A8" strokeWidth="0.5" />
          <line x1="70" y1="140" x2="760" y2="140" stroke="#D9B9A8" strokeWidth="0.5" />
          <line x1="70" y1="200" x2="760" y2="200" stroke="#4A1812" strokeWidth="0.7" />

          <text x="62" y="24" fontSize="9" fill="#8A5A50" textAnchor="end" fontFamily="'JetBrains Mono', monospace" letterSpacing="1.5">150</text>
          <text x="62" y="84" fontSize="9" fill="#8A5A50" textAnchor="end" fontFamily="'JetBrains Mono', monospace" letterSpacing="1.5">100</text>
          <text x="62" y="144" fontSize="9" fill="#8A5A50" textAnchor="end" fontFamily="'JetBrains Mono', monospace" letterSpacing="1.5">50</text>
          <text x="62" y="204" fontSize="9" fill="#8A5A50" textAnchor="end" fontFamily="'JetBrains Mono', monospace" letterSpacing="1.5">0</text>
          <text x="20" y="125" fontSize="9" fill="#8A5A50" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" letterSpacing="2" transform="rotate(-90 20 125)">Index · 2022 = 100</text>

          {[
            { x: 130, y: 2020 }, { x: 256, y: 2021 }, { x: 382, y: 2022 },
            { x: 508, y: 2023 }, { x: 634, y: 2024 }, { x: 760, y: 2025 },
          ].map((d) => (
            <text key={d.y} x={d.x} y="220" fontSize="9" fill="#8A5A50" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" letterSpacing="2">{d.y}</text>
          ))}

          <path d="M 382 80 L 508 56 L 634 38 L 760 20 L 760 80 L 634 80 L 508 80 L 382 80 Z" fill="#C4706A" fillOpacity="0.10" />

          <line x1="382" y1="20" x2="382" y2="232" stroke="#D9B9A8" strokeWidth="0.7" strokeDasharray="3 3" />
          <text x="382" y="244" fontSize="9" fill="#8A5A50" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" letterSpacing="2">Peak / baseline</text>

          <polyline points="130,124 256,90 382,80 508,82 634,78 760,82" fill="none" stroke="#4A1812" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          {[{x:130,y:124},{x:256,y:90},{x:382,y:80},{x:508,y:82},{x:634,y:78},{x:760,y:82}].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3.4" fill="#F5E8E1" stroke="#4A1812" strokeWidth="1.4" />
          ))}

          <polyline points="130,122 256,96 382,80 508,56 634,38 760,20" fill="none" stroke="#C4706A" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          {[{x:130,y:122},{x:256,y:96},{x:382,y:80},{x:508,y:56},{x:634,y:38},{x:760,y:20}].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3.4" fill="#F5E8E1" stroke="#C4706A" strokeWidth="1.4" />
          ))}

          <text x="772" y="86" fontSize="10" fill="#4A1812" fontFamily="'JetBrains Mono', monospace" letterSpacing="2">PRIMARY</text>
          <text x="772" y="100" fontSize="18" fill="#4A1812" fontStyle="italic" fontFamily="'Fraunces', Georgia, serif">~flat</text>
          <text x="772" y="14" fontSize="10" fill="#C4706A" fontFamily="'JetBrains Mono', monospace" letterSpacing="2">SECONDARY</text>
          <text x="772" y="32" fontSize="22" fill="#C4706A" fontStyle="italic" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">+50%</text>
        </svg>
      </figure>

      <span className="fw-sec-label">The numbers — verified sources</span>
      <div className="fw-stat-row">
        <div className="fw-stat">
          <div className="fw-stat-num">~€50B</div>
          <div className="fw-stat-label">Global pre-owned luxury market in 2025, growing faster than primary in the same period</div>
          <div className="fw-stat-src">Bain &amp; Company / Altagamma, December 2025</div>
        </div>
        <div className="fw-stat fw-stat--deficit">
          <div className="fw-stat-num">−20M</div>
          <div className="fw-stat-label">Luxury consumers lost from primary in 2025, reducing frequency, trading down, or redirecting to experiences</div>
          <div className="fw-stat-src">Bain &amp; Company / Altagamma, December 2025</div>
        </div>
        <div className="fw-stat">
          <div className="fw-stat-num">€25B</div>
          <div className="fw-stat-label">Pre-owned luxury watch market in 2024, up 10% while primary watch sales fell 5–7%</div>
          <div className="fw-stat-src">Cognitive Market Research, 2024 · converted at $/€ 0.93</div>
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

      <figure className="fw-chart-block fw-mc-void-fig">
        <span className="fw-chart-label">Fig. M-2 — The Maison&rsquo;s share of every secondary transaction</span>
        <div className="fw-mc-void-grid">
          <div className="fw-mc-void">
            <span className="fw-mc-void-num">€0</span>
            <p className="fw-mc-void-cap">to the Maison.</p>
            <p className="fw-mc-void-sub">On every secondary sale of one of its own objects.</p>
          </div>
          <div className="fw-mc-rentier">
            <p className="fw-mc-rentier-label">Meanwhile, every transaction redistributes</p>
            <ol className="fw-mc-rentier-rows">
              <li className="fw-mc-rentier-row fw-mc-rentier-row--hero">
                <span className="fw-mc-rentier-share">25–45%</span>
                <span className="fw-mc-rentier-body">
                  <span className="fw-mc-rentier-name">Platform commission</span>
                  <span className="fw-mc-rentier-note">The cut the platform takes for hosting the resale of the brand&rsquo;s object.</span>
                </span>
              </li>
              <li className="fw-mc-rentier-row">
                <span className="fw-mc-rentier-share">5–12%</span>
                <span className="fw-mc-rentier-body">
                  <span className="fw-mc-rentier-name">Logistics &amp; fees</span>
                  <span className="fw-mc-rentier-note">Authentication, photography, shipping.</span>
                </span>
              </li>
              <li className="fw-mc-rentier-row">
                <span className="fw-mc-rentier-share">45–65%</span>
                <span className="fw-mc-rentier-body">
                  <span className="fw-mc-rentier-name">Seller, net</span>
                  <span className="fw-mc-rentier-note">What&rsquo;s left after deductions.</span>
                </span>
              </li>
            </ol>
            <p className="fw-mc-rentier-source">
              Vestiaire Collective direct-shipping commission · The RealReal published consignor tiers · 2024–25.
            </p>
          </div>
        </div>
      </figure>
    </div>
  )
}

function GovernanceTiersTab() {
  return (
    <div className="fwg-tab-pane">
      <div className="fw-body">
        <strong>The Sovereignty Spectrum.</strong> Every brand engaging with lifecycle governance sits somewhere on the spectrum from facilitated participation to sovereign authorship.
      </div>

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
        <div className="fw-tier" id="tier-1">
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

        <div className="fw-tier" id="tier-2">
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

            <div className="fw-tier-intel">
              <p className="fw-tier-intel-eye">Program intel · Pioneer · Since 2009 · US</p>
              <p className="fw-tier-intel-title">Eileen Fisher Renew</p>
              <p className="fw-tier-intel-lesson">
                A brand can govern the full lifecycle of its objects at scale over 16 years without cannibalising primary sales. The infrastructure is operationally proven. The cultural logic — eco-conscious, accessible price points — is specific to Eileen Fisher&rsquo;s market and does not transfer directly to luxury.
              </p>
              <p className="fw-tier-intel-data"><strong>Data:</strong> 2.3M+ garments · €5 credit per item · Mended collections sell out in hours · Revenue not disclosed publicly</p>
            </div>

            <div className="fw-tier-intel">
              <p className="fw-tier-intel-eye">Program intel · Commercial proof · Since 2017 · Global</p>
              <p className="fw-tier-intel-title">Patagonia Worn Wear</p>
              <p className="fw-tier-intel-lesson">
                Commercial viability is achievable at scale. The 1% revenue share reflects outdoor gear economics at accessible price points. At luxury price points, a single reacquired object represents structurally different per-unit margin. The 1% figure is instructive on operational scale. It should not be read as the ceiling for luxury.
              </p>
              <p className="fw-tier-intel-data"><strong>Data:</strong> €12M Worn Wear FY25 · €1.37B total · ~1% of business · 40% loyalty premium vs industry</p>
            </div>
          </div>
        </div>

        <div className="fw-tier" id="tier-3">
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

        <div className="fw-tier" id="tier-3-5">
          <div className="fw-tier-num">3.5</div>
          <div>
            <p className="fw-tier-label">Sovereign standard, distributed operations</p>
            <p className="fw-tier-name">Brand authors the canon. Retailer network executes.</p>
            <p className="fw-tier-brands">Rolex CPO</p>
          </div>
          <div className="fw-tier-body">
            The brand authenticates, grades, prices, and warranties through a <strong>published standard the market refers to</strong>. Operations are executed by the authorised retailer network — load-bearing infrastructure, but not directly owned by the Maison.
            <br /><br />
            <strong>Rolex CPO</strong> generated approximately €550M in 2025, representing roughly 11% of the €5.2B Rolex secondary market <span className="fw-cite">(EveryWatch 2025 Secondary Market Report)</span>. From a standing start in Q4 2022, growing 204% year-on-year. Watches sold through the program carry a typical 25–30% premium over the non-certified secondary market <span className="fw-cite">(WatchCharts, Q2 2025)</span>. Direct margin flows to the authorised retailer network, not to the manufacture. Rolex&rsquo;s benefit is strategic: standards enforced, data owned, customer experience governed, primary allocation linked to secondary supply through client trade-ins.
            <div className="fw-tier-case">
              The canon is sovereign. The execution is leased. The model only works because the retailer network is already structurally dependent on Rolex — a condition few luxury houses have.
            </div>
            <div>
              <span className="fw-tier-tag fw-tier-tag--on">Standard published</span>
              <span className="fw-tier-tag fw-tier-tag--w">Operations distributed</span>
              <span className="fw-tier-tag fw-tier-tag--on">Authorship: full</span>
            </div>

            <div className="fw-tier-intel">
              <p className="fw-tier-intel-eye">Program intel · Proof from adjacents · Hard luxury</p>
              <p className="fw-tier-intel-title">Rolex CPO</p>
              <p className="fw-tier-intel-lesson">
                When the brand governs the second transaction, it commands a premium, captures the customer relationship, and generates real-time signal on what the market believes about the brand. The mechanism is proven at scale. The model operates through pre-existing authorised dealer networks — the architecture that luxury fashion boutique networks carry the same structural potential to replicate.
              </p>
              <p className="fw-tier-intel-data"><strong>Data:</strong> ~€560M FY2025 · 11% of all Rolex secondary market sales · 7–28% premium over grey market · From a standing start in 2022</p>
            </div>
          </div>
        </div>

        <div className="fw-tier" id="tier-4">
          <div className="fw-tier-num">4</div>
          <div>
            <p className="fw-tier-label">Lifecycle sovereignty</p>
            <p className="fw-tier-name">Brand owns operations end-to-end</p>
            <p className="fw-tier-brands">Coach (Re)Loved · Mercedes-Benz CPO</p>
          </div>
          <div className="fw-tier-body">
            Intake, authentication, refurbishment, channel, and resale all happen <strong>inside the brand</strong>. Operational sovereignty is the deeper variable — harder to build, harder to fake, and the only configuration that puts the Maison in possession of the data and the customer relationship at every step.
            <br /><br />
            <strong>Coach (Re)Loved</strong>, launched April 2021, runs the full lifecycle in-house. Trade-in at retail, in-house authentication, a dedicated workshop in New Jersey, and four lifecycle programs: Upcrafted, Remade, Restored, Vintage. (Re)Loved Exchange is hosted directly on Coach.com — resale lives on the brand&rsquo;s own channel. More than <strong>45,000 products</strong> given a second life through (Re)Loved since 2021 <span className="fw-cite">(Tapestry, 2024)</span>. Tapestry FY2025 delivered record revenue of €6.5B with Coach growing 10% and acquiring 6.8M new customers, roughly 60% Gen Z and Millennial <span className="fw-cite">(Tapestry FY2025 Form 8-K, SEC)</span>.
            <br /><br />
            <strong>Mercedes-Benz CPO</strong>: roughly 67% of used Mercedes sales by value through brand-controlled channels <span className="fw-cite">(Morgan Stanley / WatchCharts industry benchmark)</span>, with a measurable premium over non-certified equivalents. Operations run through Mercedes-owned outlets and authorised facilities.
            <div className="fw-tier-case">
              Coach owns the lifecycle. The classification it uses — &ldquo;Preloved&rdquo; — is not yet articulated as a graded canon the broader market is forced to reference. Operational sovereignty is in place; the published standard is the remaining layer to define. Mercedes runs the same operational depth with a CPO grade already published. The architecture is shared. The articulation differs.
            </div>
            <div>
              <span className="fw-tier-tag fw-tier-tag--on">Brand owns operations</span>
              <span className="fw-tier-tag fw-tier-tag--on">Brand owns the channel</span>
              <span className="fw-tier-tag fw-tier-tag--on">Authorship: full operational</span>
            </div>

            <div className="fw-tier-intel">
              <p className="fw-tier-intel-eye">Program intel · Strategic lifecycle governance · Since 2021 · Global</p>
              <p className="fw-tier-intel-title">Coach (Re)Loved + Coachtopia</p>
              <p className="fw-tier-intel-lesson">
                Closest to the sovereign governance model at the mid-market tier. The digital ID layer is architecturally significant — the beginning of provenance continuity infrastructure. Coachtopia (2023): every product made from waste with embedded digital passports and full take-back. Causation between lifecycle programs and revenue growth is directionally supported, not isolated in public filings.
              </p>
              <p className="fw-tier-intel-data"><strong>Data:</strong> €6.5B Tapestry FY2025 · Coach double-digit growth · 6.8M new customers · 1M+ refurbished · (Re)Loved revenue not broken out</p>
            </div>

            <div className="fw-tier-intel">
              <p className="fw-tier-intel-eye">Program intel · Proof from adjacents · Hard luxury</p>
              <p className="fw-tier-intel-title">Mercedes-Benz CPO</p>
              <p className="fw-tier-intel-lesson">
                The brand governs the second transaction through a published grade and brand-controlled channels. The CPO programme commands a measurable premium over non-certified equivalents. Operations run through Mercedes-owned outlets and authorised facilities — the same dealer architecture Rolex relies on, executed in-house.
              </p>
              <p className="fw-tier-intel-data"><strong>Data:</strong> 67% of used sales by value through manufacturer-controlled channels · ~€2,000 average CPO premium</p>
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
  )
}

function CannibalizationTab() {
  return (
    <div className="fwg-tab-pane">
      <div className="fw-body">
        The cannibalization fear is the primary reason luxury Maisons have stayed on the sidelines of lifecycle governance. It is consistently unsupported by independent evidence. The question is not whether sovereign lifecycle programs compete with primary sales. The data says they do not. The question is whether the Maison is the author of the buyer&rsquo;s first encounter with the brand.
      </div>

      <div className="fw-pull">Two different populations. Two different findings. <span className="serif italic">Both pointing the same direction.</span></div>

      <div className="fw-stat-row-2">
        <div className="fw-stat">
          <div className="fw-stat-num">75–80%</div>
          <div className="fw-stat-label">of <em>existing</em> luxury consumers are strictly new-product buyers — a structurally separate segment from pre-owned buyers. They are not being cannibalised.</div>
          <div className="fw-stat-src">McKinsey, independent consumer research · NA, EU, Asia · 2021</div>
        </div>
        <div className="fw-stat">
          <div className="fw-stat-num">40–65%</div>
          <div className="fw-stat-label">of <em>first-time</em> luxury buyers make their first brand purchase in the pre-owned market. They are the pipeline into the primary market.</div>
          <div className="fw-stat-src">eBay Global Head of Fashion · 2025 · consistent with McKinsey</div>
        </div>
      </div>

      <figure className="fw-flow-wrap">
        <p className="fw-flow-label">The pre-owned market is an entry point, not a competitor</p>
        <ol className="fw-flow-grid">
          <li className="fw-flow-stage">
            <span className="fw-flow-stage-num">i.</span>
            <span className="fw-flow-stage-kicker">Entry</span>
            <span className="fw-flow-stage-name">Pre-owned <span className="serif italic">purchase</span></span>
            <p className="fw-flow-stage-sub">40–65% of first-time luxury buyers start here.</p>
          </li>
          <li className="fw-flow-stage">
            <span className="fw-flow-stage-num">ii.</span>
            <span className="fw-flow-stage-kicker">Build</span>
            <span className="fw-flow-stage-name">Brand <span className="serif italic">familiarity</span></span>
            <p className="fw-flow-stage-sub">Trust, authenticity, and desirability accrue.</p>
          </li>
          <li className="fw-flow-stage fw-flow-stage--apex">
            <span className="fw-flow-stage-num">iii.</span>
            <span className="fw-flow-stage-kicker">Acquire</span>
            <span className="fw-flow-stage-name">Primary <span className="serif italic">buyer</span></span>
            <p className="fw-flow-stage-sub">The 75–80% who eventually buy new product only.</p>
          </li>
        </ol>
        <figcaption className="fw-flow-caption">
          Discovery happens in pre-owned. Acquisition happens in primary.
          <span className="serif italic"> Both moments matter. Only one is governed.</span>
        </figcaption>
      </figure>

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
            Record €6.5B revenue. Coach led double-digit growth. <strong>6.8M new customers added</strong>, approximately 60 percent Gen Z and Millennials. Lifecycle programs cited as a contributing factor to new customer acquisition alongside broader brand elevation. Correlation confirmed. Causation not isolated in public filings.
            <div className="fw-tag-row">
              <span className="fw-tag fw-tag--v">Verified · Public earnings</span>
              <span className="fw-tag">Correlation confirmed · Causation not isolated</span>
            </div>
          </div>
        </div>
        <div className="fw-evidence">
          <div className="fw-ev-source">The RealReal<span>Q3 2025 earnings · Public filing</span></div>
          <div className="fw-ev-body">
            <strong>€485M GMV Q3 2025</strong>, up 20% year-on-year. Active buyers exceeded 1M. <strong>First-time watch buyers up 46%.</strong> Pre-owned is increasingly the discovery channel for first-time luxury purchases — the acquisition channel Maisons are currently absent from.
            <div className="fw-tag-row">
              <span className="fw-tag fw-tag--v">Verified · Public earnings</span>
            </div>
          </div>
        </div>
      </div>

      <figure className="fw-gov-wrap">
        <p className="fw-gov-label">Who governs value after the first sale</p>
        <div className="fw-gov-ledger">
          <div className="fw-gov-ledger-head">
            <span className="fw-gov-ledger-name">Lever</span>
            <span className="fw-gov-ledger-col">Platform</span>
            <span className="fw-gov-ledger-col">Maison</span>
          </div>
          {([
            { lever: 'Authentication', owner: 'platform' as const },
            { lever: 'Pricing', owner: 'platform' as const },
            { lever: 'Condition grading', owner: 'platform' as const },
            { lever: 'Buyer data', owner: 'platform' as const },
            { lever: 'Margin', owner: 'platform' as const },
            { lever: 'The object', owner: 'maison' as const },
          ]).map((row) => (
            <div className="fw-gov-ledger-row" key={row.lever}>
              <span className="fw-gov-ledger-name">{row.lever}</span>
              <span className="fw-gov-ledger-col">
                {row.owner === 'platform' && <span className="fw-gov-dot" aria-label="platform owns" />}
              </span>
              <span className="fw-gov-ledger-col">
                {row.owner === 'maison' && <span className="fw-gov-dot fw-gov-dot--muted" aria-label="maison owns" />}
              </span>
            </div>
          ))}
          <div className="fw-gov-ledger-foot">
            <span className="fw-gov-ledger-name"><em>Authorship of the lifecycle</em></span>
            <span className="fw-gov-ledger-tally">5 of 6</span>
            <span className="fw-gov-ledger-tally fw-gov-ledger-tally--muted">1 of 6</span>
          </div>
        </div>
        <figcaption className="fw-gov-caption">
          The cannibalization is already happening. <span className="serif italic">The question is whether it is happening in the brand&rsquo;s favor.</span>
        </figcaption>
      </figure>

      <div className="fw-card fw-card--hi">
        <p className="fw-card-eye">The reframe for the finance director</p>
        <p className="fw-card-title">The cannibalization question is pointed at the wrong risk.</p>
        <div className="fw-card-body">
          <p>The risk is not that sovereign lifecycle programs compete with primary sales. The risk is that the absence of lifecycle governance cedes the brand&rsquo;s most cost-effective customer acquisition channel to whoever built the infrastructure to capture it.</p>
          <p>The value transfer is already happening. The question is whether it is happening in the brand&rsquo;s favor.</p>
        </div>
      </div>
    </div>
  )
}

const PROOFS = [
  {
    roman: 'I',
    pillar: 'Trust',
    dims: 'Origin · Interpretation',
    claim: 'Value reassigns when no one is certifying it.',
    pillarLine: 'Standards, grading, and provenance frameworks that hold across handoffs — so authenticity, not arbitrage, is the source of price.',
    recap: 'Market context showed −20M luxury consumers lost from primary in 2025 (Bain/Altagamma). The cannibalization case showed 40–65% of first-time luxury buyers now meet the brand in the secondary market. The market study placed Tier 3 (Participation without authorship) at the most common position in luxury fashion today.',
    anchor: 'Gucci × Vestiaire Collective',
    anchorBody: 'In Q4 2024, Gucci led every brand on Vestiaire Collective in pre-loved sales — the same quarter Kering reported a 24% collapse in Gucci primary revenue. Gucci touched the object at intake. Vestiaire authored everything that followed: the standard, the price, the buyer relationship, the data, the margin. The lifecycle value of Gucci objects was large and accelerating. The governance of that value flowed almost entirely to the platform.',
    implication: 'When the brand does not certify, someone else does. Counterfeit is the cover story. The real fight is over who certifies.',
    sources: 'Kering FY2024 · Vestiaire Collective Resale Buying Guide 2025',
  },
  {
    roman: 'II',
    pillar: 'Design',
    dims: 'Authorship · Incentives',
    claim: 'When the brand sets the terms, the architecture earns the premium.',
    pillarLine: 'Governance, incentives, and execution cadence aligned so the brand sets the terms of value, not the market.',
    recap: 'The market study mapped Tier 3.5 (Sovereign standard, distributed operations) and Tier 4 (Lifecycle sovereignty). Each tier card carried the program intel: scale, premium, what the architecture costs and returns. Authorship — the third dimension of the framework — is the precondition.',
    anchor: 'Rolex CPO',
    anchorBody: 'From a standing start in Q4 2022 to roughly €550M and 11% of all Rolex secondary market sales by 2025. Watches sold through the program carry a typical 25–30% premium over the non-certified secondary market. Direct margin flows to the authorised retailer network. Rolex’s benefit is strategic: standards enforced, data owned, customer experience governed, primary allocation linked to secondary supply through client trade-ins.',
    implication: 'The mechanism is no longer hypothetical. The architecture exists. When the brand authors the canon, the premium follows.',
    sources: 'EveryWatch 2025 Secondary Market Report · WatchCharts Q2 2025',
  },
  {
    roman: 'III',
    pillar: 'Durable systems',
    dims: 'Compounding',
    claim: 'Lifecycle programs compound trust into acquisition.',
    pillarLine: 'Infrastructure built for scale and circulation — designed for assets to move, recirculate, and compound value over time.',
    recap: 'The cannibalization case showed 75–80% of existing luxury consumers are strictly new-product buyers, structurally separate from pre-owned. The Tier 4 program intel surfaced Tapestry’s FY2025 results citing lifecycle programs as a contributor to a 6.8M new-customer cohort, roughly 60% Gen Z and Millennial. Compounding — the fifth dimension of the framework — is the objective.',
    anchor: 'Coach (Re)Loved + Coachtopia',
    anchorBody: 'Trade-in at retail, in-house authentication, a dedicated New Jersey workshop, branded resale with digital IDs on the brand’s own channel. Over 1M products refurbished. Coachtopia, launched 2023, makes every product from waste with embedded digital passports and full take-back. Tapestry FY2025: record €6.5B revenue, Coach double-digit growth, 6.8M new customers. Causation is not isolated in public filings — correlation between lifecycle architecture and new-customer acquisition is directionally consistent and operationally proven.',
    implication: 'The cannibalization question is pointed at the wrong risk. Lifecycle programs are the channel into the customer the primary market needs.',
    sources: 'Tapestry FY2025 Form 8-K · The RealReal Q3 2025 earnings',
  },
] as const

function ThreeVectorsTab() {
  return (
    <div className="fwg-tab-pane">
      <div className="fw-pull">
        Three vectors of the practice. <span className="serif italic">Each carried by the five-dimension framework. Each proven by one anchor case.</span>
      </div>

      <div className="fw-proofs">
        {PROOFS.map((c) => (
          <article className="fw-proof" key={c.roman}>
            <span className="fw-proof-index">{c.roman}</span>
            <div className="fw-proof-body">
              <p className="fw-proof-kicker">
                <span className="fw-proof-pillar">{c.pillar}</span>
                <span className="fw-proof-dims">{c.dims}</span>
              </p>
              <h3 className="fw-proof-claim">{c.claim}</h3>
              <p className="fw-proof-pillar-line">{c.pillarLine}</p>
              <p className="fw-proof-recap">{c.recap}</p>

              <div className="fw-proof-anchor">
                <p className="fw-proof-anchor-eye">Anchor case</p>
                <p className="fw-proof-anchor-name">{c.anchor}</p>
                <p className="fw-proof-anchor-body">{c.anchorBody}</p>
              </div>

              <p className="fw-proof-implication">
                <span className="fw-proof-implication-label">Implication&nbsp;·&nbsp;</span>
                {c.implication}
              </p>
              <p className="fw-proof-sources">{c.sources}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="fw-card fw-card--hi">
        <p className="fw-card-eye">The synthesis</p>
        <p className="fw-card-title">Trust before scale. Design before execution. Durable systems before growth.</p>
        <div className="fw-card-body">
          <p>The framework maps the five dimensions. The research behind it shows the three vectors of the practice at work. Sovereignty is the objective.</p>
        </div>
      </div>
    </div>
  )
}

function ScrollTopRail() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    let raf = 0
    const compute = () => {
      raf = 0
      setVisible(window.scrollY > 600)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <button
      type="button"
      className="fwg-toprail"
      data-visible={visible}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="fwg-toprail-arrow" aria-hidden="true">↑</span>
      <span className="fwg-toprail-label">Top</span>
    </button>
  )
}

export default function GatedResearch() {
  const [active, setActive] = useState<TabId>('market')

  useEffect(() => {
    const handler = (e: Event) => {
      const target = (e.target as HTMLElement | null)?.closest('[data-jump-tab]') as HTMLElement | null
      if (!target) return
      const id = target.dataset.jumpTab as TabId | undefined
      if (!id) return
      setActive(id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  let pane: React.ReactNode = null
  switch (active) {
    case 'market': pane = <MarketContextTab />; break
    case 'tiers': pane = <GovernanceTiersTab />; break
    case 'cannib': pane = <CannibalizationTab />; break
    case 'cases': pane = <ThreeVectorsTab />; break
  }

  return (
    <>
      <TabBar active={active} onChange={setActive} />
      <div className="fwg-pane-host">
        {pane}
      </div>
      <ScrollTopRail />
    </>
  )
}
