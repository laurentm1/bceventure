import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          num="01 About"
          eyebrow="Founder"
          title="Architecture of"
          italic="durable value."
        />

        <Reveal stagger className="about-grid">
          <div
            className="portrait"
            style={{
              backgroundImage: 'url(/founder.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="portrait-label">
              Alexandra Amrami · Founder
              <span className="portrait-credit">Chief Executive panel on transformation, 2025</span>
            </div>
          </div>

          <div className="about-body">
            <p className="lead">
              &ldquo;Trained in architecture, I approach businesses as systems.
              identifying the point of highest leverage and moving it with
              precision so strategy and execution reinforce one another.&rdquo;
            </p>
            <p>
              Alexandra Amrami is a strategic operator and former C-suite leader
              who identifies structural shifts early and turns them into
              commercial advantage. Her career began in luxury, advising Graff,
              Harry Winston, Van Cleef &amp; Arpels, and Tiffany &amp; Co. on natural
              colored diamonds at the highest levels of product, valuation, and trust.
            </p>
            <p>
              That perspective translated into building trade-in and
              value-recovery frameworks with Amazon, Google, and global retailers
              helping establish the standards that now underpin how the market
              compares, prices, and assigns value across the device lifecycle.
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
                <dt>Most recently</dt>
                <dd>Chief Transformation Officer</dd>
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
