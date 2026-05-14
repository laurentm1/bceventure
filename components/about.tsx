import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          num="01. About"
          eyebrow="Founder"
          title="Architecture of"
          italic="durable value."
        />

        <Reveal stagger className="about-grid">
          <div
            className="portrait"
            style={{ backgroundImage: 'url(/founder.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }}
          >
            <div className="portrait-label">
              Alexandra Amrami · Founder
              <span className="portrait-credit">CHIEF, Executive panel on transformation, 2025</span>
            </div>
          </div>

          <div className="about-body">
            <p className="lead">
              &ldquo;Trained in architecture, I approach businesses as systems.
              I identify the point of highest leverage and move it with
              precision so strategy and execution reinforce one another.&rdquo;
            </p>
            <p>
              Alexandra is a strategic operator and former C-suite leader
              who identifies structural shifts early and turns them into
              commercial advantage. She has sat on every side of the trust
              chain: as a supplier to the great houses of hard luxury, as
              the architect of trade-in and refurbishment infrastructure for
              the world&rsquo;s largest consumer platforms, and as the operator
              who installed institutional governance at a multi-billion-dollar
              global distributor. The question of how value holds when an
              object changes hands is the through-line of her career.
            </p>

            <aside className="signature-outcome">
              <span className="eyebrow">Signature engagement</span>
              <p>
                Most recently Chief Transformation Officer at PCS Wireless, a
                multi-billion-dollar global distributor, recruited by the
                founder to lead the transition from founder-led to institutional
                leadership and install the incoming CEO.
              </p>
            </aside>

            <dl className="about-meta">
              <div>
                <dt>Trained in</dt>
                <dd>Architecture · Parsons M.Arch</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>New York</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
