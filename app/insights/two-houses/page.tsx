import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/footer'
import ScrollTopRail from '../../framework/_components/ScrollTopRail'
import '../../framework/styles/framework.css'
import '../../framework/styles/framework-gated.css'

export const metadata: Metadata = {
  title: 'Two houses, the same resale market, opposite outcomes — BCE Ventures',
  description:
    'Gucci and Rolex faced the same resale market and reached opposite outcomes. The difference was authorship: who governs what an object is worth after the first sale.',
  alternates: { canonical: 'https://bce.ventures/insights/two-houses' },
  openGraph: {
    type: 'article',
    siteName: 'BCE Ventures',
    title: 'Two houses, the same resale market, opposite outcomes',
    description:
      'Gucci and Rolex faced the same resale market and reached opposite outcomes. The difference was authorship.',
    url: 'https://bce.ventures/insights/two-houses',
  },
}

const GOV_LEDGER: { lever: string; owner: 'platform' | 'maison' }[] = [
  { lever: 'Authentication', owner: 'platform' },
  { lever: 'Pricing', owner: 'platform' },
  { lever: 'Condition grading', owner: 'platform' },
  { lever: 'Buyer data', owner: 'platform' },
  { lever: 'Margin', owner: 'platform' },
  { lever: 'The object', owner: 'platform' },
]

const ROLEX_LEDGER: { lever: string; owner: 'maison' | 'shared' }[] = [
  { lever: 'Authentication', owner: 'maison' },
  { lever: 'Pricing', owner: 'maison' },
  { lever: 'Condition grading', owner: 'maison' },
  { lever: 'Buyer data', owner: 'shared' },
  { lever: 'Margin', owner: 'maison' },
  { lever: 'The object', owner: 'maison' },
]

export default function TwoHousesPost() {
  return (
    <main className="fw-page fwg-page">
      <div className="fw-shell">
        <div className="fw-topbar">
          <a href="/#insights" className="fw-back">← Field notes</a>
          <span className="fw-confidential">
            <span className="fw-confidential-full">Case study · Markets · June 2026</span>
            <span className="fw-confidential-short" aria-hidden="true">Case study</span>
          </span>
        </div>

        <header className="fwg-hero">
          <p className="eyebrow">Authorship of value</p>
          <h1 className="fwg-hero-title">
            Two houses, the same resale market,<br />
            <span className="serif italic">opposite outcomes.</span>
          </h1>
          <p className="fwg-hero-sub">
            Both Gucci and Rolex watched their objects trade briskly on the resale market. One left that value to be governed elsewhere. The other built the standard the market now refers to. <span className="serif italic">The difference is authorship.</span>
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

          <div className="fw-body">
            A year on, the shift has only deepened: half of all luxury shoppers now check the secondhand market before buying anything new, and searches for vintage bags have more than doubled year over year.<sup className="fw-fn">1</sup>
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
                <h3 className="fw-proof-claim">The brand touched the object at intake. Everything after was authored elsewhere.</h3>
                <p className="fw-proof-recap">
                  Gucci Preloved launched in March 2023 through Kering&rsquo;s 5% equity stake in Vestiaire Collective. Customers bring select bags to Gucci boutiques and receive Gucci store credit, redeemable on a future purchase. The bags are then authenticated, priced, and sold on Vestiaire&rsquo;s platform, alongside every other brand it carries.
                </p>

                <div className="fw-proof-anchor">
                  <p className="fw-proof-anchor-eye">The pivotal stretch</p>
                  <p className="fw-proof-anchor-name">2024 to 2025</p>
                  <p className="fw-proof-anchor-body">
                    Gucci was the best-selling brand on Vestiaire in Q1 2025, even as Kering reported Gucci revenue <strong>down 22% for the full year 2025</strong>. The lifecycle value of Gucci objects was large and accelerating. The standard governing that value sat almost entirely off the brand.
                  </p>
                </div>

                <p className="fw-proof-implication">
                  <span className="fw-proof-implication-label">Implication&nbsp;·&nbsp;</span>
                  When the brand does not certify, someone else does. The fight is not over counterfeit. It is over who certifies, who prices, and who owns the customer once the object changes hands. Gucci participates in all three, and controls none.
                </p>
                <p className="fw-proof-sources">Vestiaire Collective, 2025<sup className="fw-fn">3</sup> · Kering 2025 Annual Results<sup className="fw-fn">4</sup></p>
              </div>
            </article>
          </div>

          <figure className="fw-gov-wrap">
            <p className="fw-gov-label">Who governs the value after the first sale</p>
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
                <span className="fw-gov-ledger-tally">6 of 6</span>
                <span className="fw-gov-ledger-tally fw-gov-ledger-tally--muted">0 of 6</span>
              </div>
            </div>
            <figcaption className="fw-gov-caption">
              Gucci made the object and the first sale. <span className="serif italic">The second sale, the price, the buyer, and the margin belong to the platform.</span>
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
                  <p className="fw-proof-anchor-name">A premium of up to 28%</p>
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

          <figure className="fw-gov-wrap">
            <p className="fw-gov-label">Who governs the value after the first sale</p>
            <div className="fw-gov-ledger">
              <div className="fw-gov-ledger-head">
                <span className="fw-gov-ledger-name">Lever</span>
                <span className="fw-gov-ledger-col">Platform</span>
                <span className="fw-gov-ledger-col">Maison</span>
              </div>
              {ROLEX_LEDGER.map((row) => (
                <div className="fw-gov-ledger-row" key={row.lever}>
                  <span className="fw-gov-ledger-name">{row.lever}</span>
                  <span className="fw-gov-ledger-col">
                    {row.owner === 'shared' && <span className="fw-gov-dot" aria-label="co-governed" />}
                  </span>
                  <span className="fw-gov-ledger-col">
                    {(row.owner === 'maison' || row.owner === 'shared') && <span className="fw-gov-dot" aria-label="maison governs" />}
                  </span>
                </div>
              ))}
              <div className="fw-gov-ledger-foot">
                <span className="fw-gov-ledger-name"><em>Authorship of the lifecycle</em></span>
                <span className="fw-gov-ledger-tally fw-gov-ledger-tally--muted">1 of 6</span>
                <span className="fw-gov-ledger-tally">6 of 6</span>
              </div>
            </div>
            <figcaption className="fw-gov-caption">
              Rolex made the object and the first sale, and authored the standard for everything after. <span className="serif italic">Almost the same grid, inverted.</span>
            </figcaption>
          </figure>

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
              <div className="fw-stat-num"><span className="fw-stat-lead">up to</span>+28%</div>
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
              <p>Participation is the lure. Authorship is the value. Gucci has the first; the second belongs to someone else. It is in the secondary market without control of the standard, the price, or the customer. Rolex published the standard the market now follows, and kept all three.</p>
              <p>Whoever defines the standards through which value is interpreted increasingly defines the market itself. That is the question every house now faces, and it is the through-line of how we work: <em>the brand, not the market, sets the terms.</em> The secondary market is not the threat. <em>Loss of authorship is.</em></p>
            </div>
          </div>

          <div className="fw-close">
            <p className="fw-close-signal">A published standard is how a house signals it still owns what comes next: the market, the price, the customer. Rolex sends that signal. Gucci has not, yet.</p>
            <p className="fw-close-q">Who will author the next standard?</p>
            <p className="fw-close-manifesto">Sovereignty is the objective. <span className="serif italic">Long-term value is the asset.</span></p>
            <Link href="/framework" className="fw-close-link">The Sovereignty Framework&nbsp;→</Link>
          </div>
        </section>

        {/* SOURCES */}
        <section className="fw-sources">
          <p className="fw-sources-label">Sources</p>
          <ol className="fw-sources-list">
            <li>Bain &amp; Company / Altagamma, <em>Luxury Goods Worldwide Market Study</em>, November 2025, and 2026 market update. <a href="https://www.bain.com/insights/finding-a-new-longevity-for-luxury/" target="_blank" rel="noopener noreferrer">bain.com</a> · <a href="https://www.bain.com/about/media-center/press-releases/2026/global-luxury-stabilizes-amid-compounding-disruptions-as-brands-race-to-amplify-meaning-and-rebuild-relevance/" target="_blank" rel="noopener noreferrer">2026 release</a></li>
            <li>BCG &amp; Vestiaire Collective, resale market report, 2025 (survey of 7,800 users). <a href="https://www.bcg.com/press/9october2025-new-report-from-bcg-and-vestiaire-collective-reveals-global-trends-reshaping-the-resale-market" target="_blank" rel="noopener noreferrer">bcg.com</a></li>
            <li>Gucci Preloved with Vestiaire Collective, program launch, process, and resale performance. <a href="https://www.theindustry.fashion/gucci-makes-the-move-into-pre-loved-with-vestiaire-collective/" target="_blank" rel="noopener noreferrer">theindustry.fashion</a> · <a href="https://fashionunited.uk/news/business/the-gucci-paradox-while-new-sales-collapse-second-hand-sales-explode/2025041481064" target="_blank" rel="noopener noreferrer">fashionunited.uk</a></li>
            <li>Kering, 2025 Annual Results, 10 February 2026 (Gucci revenue €6.0B, down 22% as reported for the full year). <a href="https://www.globenewswire.com/news-release/2026/02/10/3235000/0/en/Kering-2025-results-Sequential-improvement-unlocking-the-next-phase-of-sustainable-profitable-growth.html" target="_blank" rel="noopener noreferrer">Kering press release</a></li>
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
