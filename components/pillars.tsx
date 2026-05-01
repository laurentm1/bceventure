import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const PILLARS = [
  {
    num: '01',
    title: 'Trust',
    body: 'Standards, grading, and provenance frameworks that hold across handoffs. Authenticity, not arbitrage, is the source of price.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'Operating architecture: governance, incentives, and execution cadence aligned so the brand sets the terms of value, not the market.',
  },
  {
    num: '03',
    title: 'Durable systems',
    body: 'Infrastructure built for scale and circulation, designed for assets to move, recirculate, and compound value over time.',
  },
]

export default function Pillars() {
  return (
    <section className="section" id="approach" style={{ paddingTop: 0 }}>
      <div className="approach-band" style={{ background: 'var(--deep)' }}>
        <div className="container" style={{ paddingTop: 'clamp(40px, 5vw, 64px)', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
          <SectionHeader
            num="02 — Approach"
            eyebrow="Three pillars"
            title="The brand,"
            italic="not the market,"
            titleSuffix=" sets the terms."
            oneLine
          />
        </div>
      </div>

      <div className="container">
        <Reveal stagger className="pillars">
          {PILLARS.map(p => (
            <article className="pillar" key={p.num}>
              <span className="pillar-num">— {p.num}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
