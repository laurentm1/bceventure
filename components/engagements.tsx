import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const CAPABILITIES = [
  {
    num: 'Capability 01',
    title: 'Secondary-Market and Brand Sovereignty',
    lede: 'For maisons and emerging categories turning the secondary market into a strategic lever, not an afterthought.',
    body: 'We rebuild the trust infrastructure, authentication, grading, provenance, so the brand stays the source of truth as products move through the world.',
    ideal: 'Luxury maisons and hard luxury, wearables, VR, and emerging device categories, connected luxury and smart home, Fortune 100 retailers, and tech platforms with circular ambitions.',
    outcomes: [
      'Built and scaled global trade-in and circularity partnerships across retail and tech: Amazon Renewed, Google (EMEA and APAC), Target, Walmart, Best Buy',
      'Operated at the supplier-to-maison interface in rare natural color diamonds with Graff, Harry Winston, Van Cleef & Arpels, and Tiffany & Co.',
      'Helped establish the standards now used across the device lifecycle, extensible to wearables, VR, and the next generation of connected products',
      'Led $100M+ in inventory deployment across global markets, shaping purchasing and pricing decisions',
    ],
  },
  {
    num: 'Capability 02',
    title: 'Leadership and Transformation',
    lede: 'For founders, CEOs, and boards at moments of inflection.',
    body: 'We install the governance, operating cadence, and executive structure that turn a strategic decision into a result the organization can execute.',
    ideal: 'Founder-led businesses at scale, boards in transition, senior operators stepping up, and leadership teams post-investment.',
    outcomes: [
      'Multiple successful inflections, founder-led to institutional, scale-up, and structured wind-down',
      'Operator-led, board-trusted',
      'Coaching at the founder, CEO, and executive level',
    ],
  },
]

export default function Engagements() {
  return (
    <section className="section capabilities" id="engagements" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHeader
          num="03. Capabilities"
          eyebrow="Two practices, one operating system"
          title="How we"
          italic="work together."
        />

        <Reveal>
          <p className="capabilities-synthesis">
            One operator. Two practices. The same instinct:
            <span className="serif italic"> turn structural shifts into commercial advantage.</span>
          </p>
        </Reveal>

        <Reveal stagger className="capability-stack">
          {CAPABILITIES.map((cap, i) => (
            <article className="capability" key={i}>
              <header className="capability-head">
                <span className="eyebrow capability-num">{cap.num}</span>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-lede">{cap.lede}</p>
              </header>
              <div className="capability-body">
                <p>{cap.body}</p>
                <div className="capability-meta">
                  <div>
                    <span className="eyebrow">Suited for</span>
                    <p className="capability-ideal">{cap.ideal}</p>
                  </div>
                  <div>
                    <span className="eyebrow">Track record</span>
                    <ul className="capability-outcomes">
                      {cap.outcomes.map((o, j) => (
                        <li key={j}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
