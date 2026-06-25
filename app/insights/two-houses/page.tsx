import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/footer'
import ScrollTopRail from '../../framework/_components/ScrollTopRail'
import '../../framework/styles/framework.css'
import '../../framework/styles/framework-gated.css'

export const metadata: Metadata = {
  title: 'Two houses, the same secondary market, opposite outcomes — BCE Ventures',
  description:
    'Gucci and Rolex faced the same secondary market and got opposite results. The difference was authorship: who governs what an object is worth after the first sale.',
  alternates: { canonical: 'https://bce.ventures/insights/two-houses' },
  openGraph: {
    type: 'article',
    siteName: 'BCE Ventures',
    title: 'Two houses, the same secondary market, opposite outcomes',
    description:
      'Gucci and Rolex faced the same secondary market and got opposite results. The difference was authorship.',
    url: 'https://bce.ventures/insights/two-houses',
  },
}

const GOV_LEDGER = [
  { lever: 'Authentication', owner: 'platform' as const },
  { lever: 'Pricing', owner: 'platform' as const },
  { lever: 'Condition grading', owner: 'platform' as const },
  { lever: 'Buyer data', owner: 'platform' as const },
  { lever: 'Margin', owner: 'platform' as const },
  { lever: 'The object', owner: 'maison' as const },
]

export default function TwoHousesPost() {
  return (
    <main className="fw-page fwg-page">
      <div className="fw-shell">
        <div className="fw-topbar">
          <a href="/#insights" className="fw-back">← Insights</a>
          <span className="fw-confidential">
            <span className="fw-confidential-full">Field note · Markets · June 2026</span>
            <span className="fw-confidential-short" aria-hidden="true">Field note</span>
          </span>
        </div>

        <header className="fwg-hero">
          <p className="eyebrow">Field note · Authorship of value</p>
          <h1 className="fwg-hero-title">
            Two houses, the same secondary market,<br />
            <span className="serif italic">opposite outcomes.</span>
          </h1>
          <p className="fwg-hero-sub">
            Both Gucci and Rolex watched their objects trade briskly on the secondary market. One ceded the governance of that value to a platform. The other built the standard the market now refers to. <span className="serif italic">The difference is authorship.</span>
          </p>
        </header>

        {/* THE SITUATION */}
        <section className="fwg-tab-pane">
          <span className="fw-sec-label">The situation</span>
          <div className="fw-body">
            Primary luxury is losing velocity while the market for pre-owned luxury grows for its own reasons. These are independent trends creating the same pressure point for every house: who defines what a luxury object is worth after it leaves the boutique?
          </div>

          <div className="fw-stat-row">
            <div className="fw-stat fw-stat--deficit">
              <div className="fw-stat-num">−20M</div>
              <div className="fw-stat-label">Luxury consumers lost in 2025 versus 2024, as buyers cut frequency, traded down, or shifted to experiences</div>
              <div className="fw-stat-src">Bain &amp; Company / Altagamma, November 2025<sup className="fw-fn">1</sup></div>
            </div>
            <div className="fw-stat">
              <div className="fw-stat-num">~€50B</div>
              <div className="fw-stat-label">Global pre-owned luxury market in 2025, growing faster than primary in the same period</div>
              <div className="fw-stat-src">Bain &amp; Company / Altagamma, November 2025<sup className="fw-fn">1</sup></div>
            </div>
            <div className="fw-stat">
              <div className="fw-stat-num">66%</div>
              <div className="fw-stat-label">of resale buyers say it let them discover or buy a brand for the first time, up from 59% in 2022</div>
              <div className="fw-stat-src">BCG / Vestiaire Collective, 2025<sup className="fw-fn">2</sup></div>
            </div>
          </div>

          <div className="fw-pull">Value is not getting lost. <span className="serif italic">It is getting reassigned.</span></div>
        </section>

        {/* CASE I — GUCCI */}
        <section className="fwg-tab-pane">
          <div className="fw-proofs">
            <article className="fw-proof">
              <span className="fw-proof-index">I</span>
              <div className="fw-proof-body">
                <p className="fw-proof-kicker">
                  <span className="fw-proof-pillar">Gucci × Vestiaire Collective</span>
                  <span className="fw-proof-dims">Participation without authorship</span>
                </p>
                <h3 className="fw-proof-claim">The brand touched the object at intake. The platform authored everything after.</h3>
                <p className="fw-proof-recap">
                  Gucci Preloved launched in March 2023 through Kering&rsquo;s 5% equity stake in Vestiaire Collective. Customers bring select bags to Gucci boutiques and receive Gucci store credit, redeemable on a future purchase. The bags are then listed and sold on Vestiaire, authenticated by Vestiaire, priced by Vestiaire, on Vestiaire&rsquo;s platform, alongside every other brand they carry.
                </p>

                <div className="fw-proof-anchor">
                  <p className="fw-proof-anchor-eye">The pivotal stretch</p>
                  <p className="fw-proof-anchor-name">2024 to 2025</p>
                  <p className="fw-proof-anchor-body">
                    Gucci was the best-selling brand on Vestiaire in Q1 2025, even as Kering reported Gucci revenue <strong>down 24% in Q4 2024 and 23% for the full year</strong>. The lifecycle value of Gucci objects was large and accelerating. The governance of that value flowed almost entirely to the platform.
                  </p>
                </div>

                <p className="fw-proof-implication">
                  <span className="fw-proof-implication-label">Implication&nbsp;·&nbsp;</span>
                  When the brand does not certify, someone else does. The fight is not over counterfeit. It is over who certifies, prices, and owns the customer once the object changes hands.
                </p>
                <p className="fw-proof-sources">Kering FY2024 Annual Results<sup className="fw-fn">4</sup> · Vestiaire Collective, 2025<sup className="fw-fn">3</sup></p>
              </div>
            </article>
          </div>

          <figure className="fw-gov-wrap">
            <p className="fw-gov-label">Who governed the value after the first sale</p>
            <div className="fw-gov-ledger">
              <div className="fw-gov-ledger-head">
                <span className="fw-gov-ledger-name">Lever</span>
                <span className="fw-gov-ledger-col">Platform</span>
                <span className="fw-gov-ledger-col">Maison</span>
              </div>
              {GOV_LEDGER.map((row) => (
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
              Gucci kept the object. <span className="serif italic">Vestiaire kept the authorship.</span>
            </figcaption>
          </figure>
        </section>

        {/* CASE II — ROLEX */}
        <section className="fwg-tab-pane">
          <div className="fw-proofs">
            <article className="fw-proof">
              <span className="fw-proof-index">II</span>
              <div className="fw-proof-body">
                <p className="fw-proof-kicker">
                  <span className="fw-proof-pillar">Rolex Certified Pre-Owned</span>
                  <span className="fw-proof-dims">Sovereign standard, distributed operations</span>
                </p>
                <h3 className="fw-proof-claim">The brand published the standard the market is now forced to reference.</h3>
                <p className="fw-proof-recap">
                  Rolex authenticates, certifies, and warranties pre-owned watches through a published standard. Operations run through the authorised retailer network, but the canon is the Maison&rsquo;s. From a standing start in Q4 2022, the program reached roughly <strong>$594M</strong> and <strong>about 11% of all Rolex secondary-market sales</strong> by 2025, growing 204% year-on-year.
                </p>

                <div className="fw-proof-anchor">
                  <p className="fw-proof-anchor-eye">What the standard bought</p>
                  <p className="fw-proof-anchor-name">A premium of up to ~28%</p>
                  <p className="fw-proof-anchor-body">
                    Watches sold through the program carry a premium over the non-certified secondary market that runs as high as roughly 28%, depending on the retailer. Standards enforced, data owned, customer experience governed, and primary allocation linked to secondary supply through client trade-ins. The brand governs the second transaction, and is paid for doing so.
                  </p>
                </div>

                <p className="fw-proof-implication">
                  <span className="fw-proof-implication-label">Implication&nbsp;·&nbsp;</span>
                  The mechanism is no longer hypothetical. When the brand authors the canon, the premium follows, and so does the customer relationship.
                </p>
                <p className="fw-proof-sources">EveryWatch 2025 Secondary Market Report<sup className="fw-fn">5</sup> · WatchCharts, 2025<sup className="fw-fn">6</sup></p>
              </div>
            </article>
          </div>

          <div className="fw-stat-row">
            <div className="fw-stat">
              <div className="fw-stat-num">~$594M</div>
              <div className="fw-stat-label">Rolex CPO sales in 2025, from a standing start in Q4 2022</div>
              <div className="fw-stat-src">EveryWatch 2025 Secondary Market Report<sup className="fw-fn">5</sup></div>
            </div>
            <div className="fw-stat">
              <div className="fw-stat-num">~11%</div>
              <div className="fw-stat-label">of Rolex&rsquo;s ~$5.8B secondary market, governed by the Maison&rsquo;s own standard</div>
              <div className="fw-stat-src">EveryWatch 2025 Secondary Market Report<sup className="fw-fn">5</sup></div>
            </div>
            <div className="fw-stat">
              <div className="fw-stat-num">up to +28%</div>
              <div className="fw-stat-label">premium for certified watches over the broader secondary market, depending on retailer</div>
              <div className="fw-stat-src">WatchCharts, 2025<sup className="fw-fn">6</sup></div>
            </div>
          </div>
        </section>

        {/* THE READ */}
        <section className="fwg-tab-pane">
          <div className="fw-card fw-card--hi">
            <p className="fw-card-eye">The read</p>
            <p className="fw-card-title">Same market. Same demand. The variable was authorship.</p>
            <div className="fw-card-body">
              <p>Both houses had desirable objects circulating in a growing secondary market. Gucci participated and let the platform author the standard, the price, the buyer relationship, and the margin. Rolex published the standard that the market now follows.</p>
              <p>Whoever defines the standards through which value is interpreted increasingly defines the market itself. That is the question every house now faces, and it is the through-line of how we work: <em>the brand, not the market, sets the terms.</em></p>
            </div>
          </div>

          <div className="fw-pull">The secondary market is not the threat. <span className="serif italic">Loss of authorship is.</span></div>
        </section>

        {/* SOURCES */}
        <section className="fw-sources">
          <p className="fw-sources-label">Sources</p>
          <ol className="fw-sources-list">
            <li>Bain &amp; Company / Altagamma, <em>Luxury Goods Worldwide Market Study</em>, November 2025. <a href="https://www.bain.com/insights/finding-a-new-longevity-for-luxury/" target="_blank" rel="noopener noreferrer">bain.com</a></li>
            <li>BCG &amp; Vestiaire Collective, resale market report, 2025 (survey of 7,800 users). <a href="https://www.bcg.com/press/9october2025-new-report-from-bcg-and-vestiaire-collective-reveals-global-trends-reshaping-the-resale-market" target="_blank" rel="noopener noreferrer">bcg.com</a></li>
            <li>Gucci Preloved with Vestiaire Collective, program launch, process, and resale performance. <a href="https://www.theindustry.fashion/gucci-makes-the-move-into-pre-loved-with-vestiaire-collective/" target="_blank" rel="noopener noreferrer">theindustry.fashion</a> · <a href="https://fashionunited.uk/news/business/the-gucci-paradox-while-new-sales-collapse-second-hand-sales-explode/2025041481064" target="_blank" rel="noopener noreferrer">fashionunited.uk</a></li>
            <li>Kering, FY2024 Annual Results (Gucci revenue down 24% in Q4, 23% full year). <a href="https://www.thefashionlaw.com/kering-revenue-fell-in-2024-thanks-to-declines-at-gucci-ysl/" target="_blank" rel="noopener noreferrer">thefashionlaw.com</a></li>
            <li>EveryWatch, 2025 Secondary Market Report (Rolex Certified Pre-Owned). <a href="https://everywatch.com/magazine/market/the-rolex-cpo-shock-204-growth-and-what-it-means-for-the-secondary-market-in-2025" target="_blank" rel="noopener noreferrer">everywatch.com</a></li>
            <li>WatchCharts, Rolex Certified Pre-Owned pricing analysis, 2025. <a href="https://watchcharts.com/rolexcpo" target="_blank" rel="noopener noreferrer">watchcharts.com</a></li>
          </ol>
        </section>

        {/* CONTINUE */}
        <aside className="fwg-contact">
          <div className="fwg-contact-row">
            <div>
              <p className="fwg-contact-eye">Continue the conversation</p>
              <p className="fwg-contact-line">
                BCE Ventures helps maisons govern the value of their objects after the first sale.
              </p>
            </div>
            <Link href="/#contact" className="fwg-contact-cta">
              <span>Request a consult</span>
              <span className="fwg-contact-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      </div>
      <Footer />
      <ScrollTopRail />
    </main>
  )
}
