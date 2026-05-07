// === BCE Ventures About / Founder + Practice ===

function SelectedExperience() {
  const entries = [
    {
      name: 'Amazon',
      body: [
        'Designed consumer trade-in programs for phones and wearables in partnership with Amazon.',
        'Built the refurbishment and resale infrastructure that became Amazon Renewed.',
        'Subsequently developed the Tier 1 premium layer, laying the groundwork for Amazon Renewed Premium and its global deployment.',
      ],
    },
    {
      name: 'Google Store',
      body: [
        'Built and scaled global trade-in systems supporting Pixel device programs across APAC and EMEA markets in partnership with Google.',
      ],
    },
    {
      name: 'Target · Best Buy · Walmart',
      body: [
        'Developed retail recovery and secondary market infrastructure aligning major retailers with global distribution networks.',
      ],
    },
    {
      name: 'Graff · Harry Winston · de Grisogono · Tiffany & Co.',
      body: [
        'Operated at the supplier-to-maison interface in natural colored diamonds — the most trust-intensive corner of hard luxury.',
        'The foundational trust layer of hard luxury.',
      ],
    },
    {
      name: 'PCS Wireless',
      body: [
        'As Chief Transformation Officer, led the transition from founder-led to institutional leadership at a multi-billion-dollar global distributor.',
        'Supported the installation of the incoming CEO.',
      ],
    },
    {
      name: 'Global Secondary Market Purchasing',
      body: [
        'Led $100M+ in purchasing capital deployed across global markets.',
        'Responsible for contract design and working capital optimization.',
        'Contributed to and influenced grading standards and pricing frameworks shaping how products hold and transfer value at scale.',
      ],
    },
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader
          num="01.5 — Selected Experience"
          eyebrow="Before BCE Ventures"
          title="Built at scale."
          italic="Applied with precision."
        />
        <Reveal>
          <p className="experience-intro">
            Before founding BCE Ventures, Alexandra built and scaled some of the largest secondary market infrastructures in global consumer electronics.
          </p>
        </Reveal>
        <Reveal stagger className="experience-stack">
          {entries.map((e, i) => (
            <article className="experience-entry" key={i}>
              <span className="experience-name eyebrow">{e.name}</span>
              <div className="experience-body">
                {e.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function About() {
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
          <div className="portrait" style={{ backgroundImage: 'url(assets/founder.jpg?v=6)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <div className="portrait-label">
              Alexandra Amrami · Founder
              <span className="portrait-credit">Chief Executive panel on transformation, 2025</span>
            </div>
          </div>

          <div className="about-body">
            <p className="lead">
              "Trained in architecture, I approach businesses as systems.
              identifying the point of highest leverage and moving it with
              precision so strategy and execution reinforce one another."
            </p>
            <p>
              Alexandra Amrami is a strategic operator and former C-suite leader
              who identifies structural shifts early and turns them into
              commercial advantage. She has sat on every side of the trust
              chain — as a supplier to the great houses of hard luxury, as
              the architect of trade-in and refurbishment infrastructure for
              the world's largest consumer platforms, and as the operator
              who installed institutional governance at a multi-billion-dollar
              global distributor. The question of how value holds when an
              object changes hands is the through-line of her career.
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
  );
}

function Pillars() {
  const items = [
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
  ];

  return (
    <section className="section" id="approach" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHeader
          num="02 — Approach"
          eyebrow="Three vectors"
          title="The brand,"
          italic="not the market,"
          titleSuffix=" sets the terms."
        />

        <Reveal stagger className="pillars">
          {items.map(p => (
            <article className="pillar" key={p.num}>
              <span className="pillar-num">— {p.num}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Engagements() {
  const capabilities = [
    {
      num: 'Capability 01',
      title: 'Secondary-Market & Brand Sovereignty',
      lede: 'For maisons and emerging-category platforms turning the secondary market into a strategic lever, not an afterthought.',
      body: 'Authenticity, grading, valuation, and trade-in architecture engineered so the brand sets the terms as products circulate across heritage maisons, device ecosystems, and emerging categories where secondary-market design is a brand-protection imperative from day one.',
      ideal: 'Luxury maisons & hard-luxury · Wearables, VR, and emerging device categories · Connected-luxury & smart-home · Fortune 100 retailers · Tech platforms with circular ambitions',
      outcomes: [],
    },
    {
      num: 'Capability 02',
      title: 'Leadership & Transformation',
      lede: 'For founders, CEOs, and boards at moments of inflection when the next move has to be both operationally sound and strategically right.',
      body: 'Executive structure, governance, and operating cadence paired with one-on-one coaching for founders and senior leaders. Strategy and execution calibrated to reinforce one another.',
      ideal: 'Founder-led businesses at scale · Boards in transition · Senior operators stepping up · Leadership teams post-investment',
      outcomes: [],
    },
  ];

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
          {capabilities.map((cap, i) => (
            <article className="capability" key={i}>
              <header className="capability-head">
                <span className="eyebrow capability-num">{cap.num}</span>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-lede">{cap.lede}</p>
              </header>
              <div className="capability-body">
                <p>{cap.body}</p>
                <div className={`capability-meta${cap.outcomes && cap.outcomes.length > 0 ? '' : ' capability-meta--solo'}`}>
                  <div>
                    <span className="eyebrow">Suited for</span>
                    <p className="capability-ideal">{cap.ideal}</p>
                  </div>
                  {cap.outcomes && cap.outcomes.length > 0 && (
                    <div>
                      <span className="eyebrow">Track record</span>
                      <ul className="capability-outcomes">
                        {cap.outcomes.map((o, j) => (
                          <li key={j}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { SelectedExperience, About, Pillars, Engagements });
