import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const PILLARS = [
  {
    num: '01',
    title: 'Trust',
    body: 'Standards, grading, and provenance that hold across handoffs, so the source of truth stays with the maison.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'Governance, incentives, and operating cadence aligned so the brand sets the terms of value, not the market.',
  },
  {
    num: '03',
    title: 'Durable systems',
    body: 'Infrastructure built for scale and circularity, so assets move, recirculate, and compound value over time.',
  },
]

export default function Pillars() {
  return (
    <section className="section" id="practice" style={{ paddingTop: 0 }}>
      <div className="approach-band">
        <div className="container">
          <SectionHeader
            num="02. Practice"
            eyebrow="Three vectors"
            title="The brand,"
            italic="not the market, sets the terms."
            oneLine
          />
        </div>
      </div>

      <div className="container">
        <Reveal>
          <p className="practice-intro">
            Trust used to be set at first sale. Now it is renegotiated every
            time an object, a business, or a leadership team changes hands.
            Most brands are still optimizing for the first moment, leaving the
            market to define everything that comes after.
          </p>
        </Reveal>

        <Reveal stagger className="pillars">
          {PILLARS.map(p => (
            <article className="pillar" key={p.num}>
              <span className="pillar-num">{p.num}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
