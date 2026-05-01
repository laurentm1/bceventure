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
    body: 'Natural coloured diamond valuation, grading, and provenance. The foundational trust layer of hard luxury.',
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
                Alexandra Amrami is a strategic operator and former C-suite leader
                who identifies structural shifts early and turns them into
                commercial advantage. Her career began in hard luxury — advising
                at the highest levels of natural coloured diamond valuation,
                provenance, and trust.
              </p>

              <p className="about-prose">
                That perspective translated into building the trade-in and
                value-recovery infrastructure that now underpins how the secondary
                market compares, prices, and assigns value across the device lifecycle.
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
                and spent years advising at the highest levels of hard luxury.
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
