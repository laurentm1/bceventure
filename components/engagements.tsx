import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const CAPABILITIES = [
  {
    num: 'Capability 01',
    title: 'Secondary-Market & Brand Sovereignty',
    lede: 'For maisons and emerging-category platforms turning the secondary market into a strategic lever, not an afterthought.',
    body: 'Authenticity, grading, valuation, and trade-in architecture engineered so the brand sets the terms as products circulate across heritage maisons, device ecosystems, and emerging categories where secondary-market design is a brand-protection imperative from day one.',
    ideal: 'Luxury maisons & hard-luxury · Wearables, VR, and emerging device categories · Connected-luxury & smart-home · Fortune 100 retailers · Tech platforms with circular ambitions',
  },
  {
    num: 'Capability 02',
    title: 'Leadership & Transformation',
    lede: 'For founders, CEOs, and boards at moments of inflection when the next move has to be both operationally sound and strategically right.',
    body: 'Executive structure, governance, and operating cadence paired with one-on-one coaching for founders and senior leaders. Strategy and execution calibrated to reinforce one another.',
    ideal: 'Founder-led businesses at scale · Boards in transition · Senior operators stepping up · Leadership teams post-investment',
  },
]

export default function Engagements() {
  return (
    <section className="section capabilities" id="engagements" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHeader
          num="03 — Practice"
          eyebrow="Two practices, one operating system"
          title="How we"
          italic="work together."
        />

        <Reveal>
          <p className="capabilities-synthesis">
            Turn structural shifts into commercial advantage.
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
                <div className="capability-meta capability-meta--solo">
                  <div>
                    <span className="eyebrow">Suited for</span>
                    <p className="capability-ideal">{cap.ideal}</p>
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
