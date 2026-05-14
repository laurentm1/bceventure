import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const CAPABILITIES = [
  {
    num: 'Capability 01',
    title: 'Secondary-Market & Brand Sovereignty',
    lede: 'For maisons and emerging-category platforms turning the secondary market into a strategic lever, not an afterthought.',
    body: 'Authenticity, grading, valuation, and trade-in architecture engineered so the brand sets the terms as products circulate. Spans heritage maisons protecting craft and provenance, established device ecosystems (mobile, computing), and emerging categories entering the market: wearables, VR & spatial computing, smart-home, and connected luxury, where secondary-market design is a brand-protection imperative from day one.',
    ideal: 'Luxury maisons & hard-luxury · Wearables, VR, and emerging device categories · Connected-luxury & smart-home · Fortune 100 retailers · Tech platforms with circular ambitions',
    outcomes: [
      'Built and scaled global trade-in and resale partnerships across retail and tech: Amazon Renewed, Google (EMEA & APAC), Target, Walmart, Best Buy',
      'Operated at the supplier-to-maison interface in rare natural color diamonds with Graff, Harry Winston, Van Cleef & Arpels, and Tiffany & Co.',
      'Helped establish the standards now used across the device lifecycle, extensible to wearables, VR, and the next generation of connected products',
      'Led $100M+ in inventory deployment across global markets, shaping purchasing and pricing decisions',
    ],
  },
  {
    num: 'Capability 02',
    title: 'Leadership & Transformation',
    lede: 'For founders, CEOs, and boards at moments of inflection, when the next move has to be both operationally sound and strategically right.',
    body: 'Executive structure, governance, and operating cadence, paired with one-on-one coaching for founders and senior leaders navigating their next chapter. Strategy and execution, calibrated to reinforce one another, so the move you make is both the right one and the one your organization can actually execute.',
    ideal: 'Founder-led businesses at scale · Boards in transition · Senior operators stepping up · Leadership teams post-investment',
    outcomes: [
      'Multiple successful inflections, founder-led to institutional, scale-up, and structured wind-down',
      'Operator-led, board-trusted',
      'Coaching at the founder, CEO & executive level',
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
