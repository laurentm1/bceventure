import Reveal from '@/components/reveal'

const EXPERIENCE = [
  {
    name: 'Amazon',
    body: 'Architected the Amazon mobile device trade-in partnership and helped build the early Amazon Renewed program, including the Renewed Premium tier: the framework that now sets how the consumer electronics secondary market prices, grades, and trusts.',
  },
  {
    name: 'Google',
    body: 'Stood up the global Pixel trade-in business in partnership with Google across EMEA and APAC, leading the cross-functional build: operations, technology, legal, commercial, and HR. Built the secondary infrastructure that helped power Pixel\'s primary growth.',
  },
  {
    name: 'Best Buy · Target · Walmart',
    body: 'Retail recovery and secondary market infrastructure aligning major retailers with global distribution networks.',
  },
  {
    name: 'PCS Wireless',
    body: 'Recruited by the founder of a multi-billion-dollar global distributor to lead the transition from founder-led to institutional leadership and install the incoming CEO.',
  },
  {
    name: 'TessaB',
    body: 'Chief Executive Officer of a blockchain-enabled consumer marketplace. Stabilized operations, achieved profitability, and led a structured wind-down preserving IP and capital.',
  },
  {
    name: 'Novel Collection · Geneva',
    body: 'Operated at the supplier-to-maison interface in rare natural color diamonds, the most trust-intensive corner of hard luxury. Held trusted-supplier relationships with Graff, Harry Winston, Van Cleef & Arpels, and Tiffany & Co., meeting the standard required to enter the room. Expanded the Geneva presence and grew revenue 20%.',
  },
  {
    name: 'Capital & Contract Architecture',
    body: '$100M+ in inventory and purchasing capital deployed across global secondary markets over a decade. Contract structures and working-capital terms designed to convert volume into margin and return.',
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

            {/* Right: Selected Experience tiles */}
            <div className="about-exp-col">
              <p className="about-exp-intro">
                Before founding BCE Ventures, Alexandra built and scaled some of the
                largest secondary market infrastructures in global consumer electronics,
                and operated at the supplier-to-maison interface in hard luxury.
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
