import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const ITEMS = [
  {
    date: '06.24.26',
    title: 'Two houses, the same resale market, opposite outcomes',
    kicker: 'Gucci and Rolex faced the same resale market and reached opposite outcomes. The difference was authorship: who governs what an object is worth after the first sale.',
    tag: ['Markets', 'Frameworks'],
    href: '/insights/two-houses',
    internal: true,
  },
  {
    date: '06.08.26',
    title: "Cartier's Strength, the Lab-Grown Divide, and What It Signals About Asset Value",
    kicker: "Cartier's strength, gold near highs, and lab-grown diamonds tell one story: a renewed appetite for value that endures independently of the brand.",
    tag: 'Value',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7465805908627881984',
  },
  {
    date: '06.01.26',
    title: 'Chanel and Apple: A Lesson in Holding Value',
    kicker: 'The market judges value continuously now. Chanel holds the line, Ralph Lauren refuses the markdown, Apple manages value across generations. Continuity is the strategy.',
    tag: ['Markets', 'Frameworks'],
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7469765451321888768',
  },
  {
    date: '05.19.26',
    title: 'Counterfeit is the cover story',
    kicker: 'The real fight is over who certifies, interprets condition, and shapes value once the object changes hands. That is the new infrastructure of luxury.',
    tag: 'Frameworks',
    href: 'https://www.linkedin.com/posts/alamrami_chanel-vs-the-realreal-is-not-really-about-share-7462539237830238212-v5kz',
  },
  {
    date: '04.26.26',
    title: 'Assets that survive first use become investable',
    kicker: 'Reuse turned rockets into infrastructure. Longevity turned the Birkin into an asset. The mechanism is the same. From Summit at Sea, 2026.',
    tag: 'Frameworks',
    href: 'https://www.linkedin.com/posts/alamrami_the-unexpected-connection-between-rockets-activity-7454643633351450625-SdEI',
  },
  {
    date: '04.20.26',
    title: 'Sovereignty of value formation',
    kicker: 'Primary luxury is flat. Secondary is growing 3× faster. The maisons that define the standard will own the next decade.',
    tag: 'Markets',
    href: 'https://www.linkedin.com/posts/alamrami_primary-luxury-markets-are-slowing-2025-activity-7443052315906895873-2mcM',
  },
  {
    date: '04.06.26',
    title: 'Provenance is the asset',
    kicker: 'The debate was never about chemistry. It was about whether value holds once the object changes hands.',
    tag: 'Value',
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
          num="04. Field notes"
          eyebrow="Musings"
          title="Field notes from"
          italic="the practice."
        />

        <Reveal stagger className="insights-list">
          {ITEMS.map((it, i) => (
            <a
              className="insight"
              key={i}
              href={it.href}
              target={'internal' in it && it.internal ? undefined : '_blank'}
              rel={'internal' in it && it.internal ? undefined : 'noopener noreferrer'}
            >
              <span className="insight-date">{it.date}</span>
              <div className="insight-body">
                <h3 className="insight-title">{it.title}</h3>
                <p className="insight-kicker">{it.kicker}</p>
              </div>
              <span className="insight-tag">· {Array.isArray(it.tag) ? it.tag.join(' · ') : it.tag}</span>
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
