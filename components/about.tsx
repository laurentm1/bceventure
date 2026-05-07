import Reveal from '@/components/reveal'

const EXPERIENCE = [
  {
    name: 'Amazon',
    body: 'Designed consumer trade-in programs for phones and wearables. Built the refurbishment and resale infrastructure that became Amazon Renewed — and its premium tier.',
  },
  {
    name: 'Google Store',
    body: 'Built and scaled global trade-in systems supporting Pixel device programs across APAC and EMEA markets in partnership with Google.',
  },
  {
    name: 'Best Buy · Target · Walmart',
    body: 'Retail recovery and secondary market infrastructure aligning major retailers with global distribution networks.',
  },
  {
    name: 'PCS Wireless',
    body: 'Chief Transformation Officer. Led the transition from founder-led to institutional leadership at a multi-billion-dollar global distributor. Supported installation of the incoming CEO.',
  },
  {
    name: 'Graff · Harry Winston · Tiffany & Co.',
    body: 'Operated at the supplier-to-maison interface in natural colored diamonds — the most trust-intensive corner of hard luxury. Earned and held trusted-supplier relationships with the great houses, and learned how they evaluate provenance, grading, and value by having to meet their standard to enter the room.',
  },
  {
    name: 'Global Secondary Markets',
    body: '$100M+ in purchasing capital deployed across global markets. Contract design, working capital optimization, grading standards.',
  },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="about-layout">
            {/* Left: Bio */}
            <div className="about-bio-col">
              <span className="sec-num">01 — About</span>

              <h2 className="display-m about-name">Alexandra Amrami</h2>
              <p className="eyebrow about-role">Founder · BCE.VENTURES</p>

              <p className="about-lead">
                &ldquo;Trained in architecture, I approach businesses as systems,
                identifying the point of highest leverage and moving it with
                precision so strategy and execution reinforce one another.&rdquo;
              </p>

              <p className="about-prose">
                Alexandra is a strategic operator and former C-suite leader
                who identifies structural shifts early and turns them into
                commercial advantage. She has sat on every side of the trust
                chain — as a supplier to the great houses of hard luxury, as
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
                  <dt>Most recently</dt>
                  <dd>Chief Transformation Officer</dd>
                </div>
                <div>
                  <dt>Based</dt>
                  <dd>New York</dd>
                </div>
                <div>
                  <dt>Cadence</dt>
                  <dd>Selective engagements each year</dd>
                </div>
              </dl>
            </div>

            {/* Right: Selected Experience tiles */}
            <div className="about-exp-col">
              <p className="about-exp-intro">
                Before founding BCE Ventures, Alexandra built and scaled some of the
                largest secondary market infrastructures in global consumer electronics —
                and operated at the supplier-to-maison interface in hard luxury.
              </p>
              <p className="about-exp-intro">
                Architected trade-in and refurbishment programs in partnership with
                Amazon, Google, Best Buy, Target, and Walmart. Sat at the interface
                between OEM, retailer, reseller, and consumer — designing the trust
                mechanics, grading standards, and pricing logic that made the programs work.
              </p>
              <div className="exp-tiles">
                {EXPERIENCE.map((e, i) => (
                  <div className="exp-tile" key={i}>
                    <p className="exp-tile-name">{e.name}</p>
                    <p className="exp-tile-body">{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
