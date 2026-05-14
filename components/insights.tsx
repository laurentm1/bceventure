import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const ITEMS = [
  {
    date: '04.26.26',
    title: 'Assets that survive first use become investable',
    kicker: 'Reuse turned rockets into infrastructure. Longevity turned the Birkin into an asset. The mechanism is the same. From Summit at Sea, 2026.',
    tag: 'Frameworks',
    href: 'https://www.linkedin.com/posts/alamrami_the-unexpected-connection-between-rockets-activity-7454643633351450625-SdEI',
  },
  {
    date: '04.20.26',
    title: 'Sovereignty over value formation',
    kicker: 'Primary luxury is flat. Secondary is growing 3× faster. The maisons that define the standard will own the next decade.',
    tag: 'Markets',
    href: 'https://www.linkedin.com/posts/alamrami_primary-luxury-markets-are-slowing-2025-activity-7443052315906895873-2mcM',
  },
  {
    date: '04.06.26',
    title: 'Provenance is the asset',
    kicker: 'The debate was never about chemistry. It was about whether value holds once the object changes hands.',
    tag: 'Diamonds',
    href: 'https://www.linkedin.com/posts/alamrami_after-my-last-post-on-luxury-markets-slowing-activity-7452022945260105729-GKFS',
  },
  {
    date: '03.18.26',
    title: 'The greatest liability is the greatest asset',
    kicker: "When Hubert Joly took over Best Buy, he flipped the premise. The store wasn't the problem the footprint was the underused asset. A lesson in leadership that travels.",
    tag: 'Leadership',
    href: 'https://www.linkedin.com/posts/alamrami_the-lesson-saks-fifth-avenue-missed-from-activity-7427040296040939520-ng1d',
  },
]

export default function Insights() {
  return (
    <section className="section" id="insights">
      <div className="container">
        <SectionHeader
          num="04. Insights"
          eyebrow="Musings"
          title="Field notes from"
          italic="the practice."
        />

        <Reveal stagger className="insights-list">
          {ITEMS.map((it, i) => (
            <a className="insight" key={i} href={it.href} target="_blank" rel="noopener noreferrer">
              <span className="insight-date">{it.date}</span>
              <div className="insight-body">
                <h3 className="insight-title">{it.title}</h3>
                <p className="insight-kicker">{it.kicker}</p>
              </div>
              <span className="insight-tag">— {it.tag}</span>
              <span className="insight-arrow">→</span>
            </a>
          ))}
        </Reveal>

        <div className="insights-foot">
          <a
            href="https://www.linkedin.com/in/alamrami/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ color: 'var(--ink)' }}
          >
            More writing on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  )
}
