import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const ENGAGEMENTS = [
  {
    eyebrow: 'Engagement 01 · Secondary-market & brand sovereignty',
    lead: 'Value now forms where the Maison',
    leadItalic: 'has no seat.',
    strong:
      'Authentication, condition, and provenance are increasingly decided beyond the house, in markets that did not exist at first sale.',
    sub: 'In the absence of brand-defined standards, the market appoints its own authority and prices accordingly. Whoever defines those standards increasingly defines the market itself.',
    authorship: (
      <>
        The standard is held across the house.{' '}
        <span className="serif italic">The métier</span> authors what the object
        is, in the making.{' '}
        <span className="serif italic">Brand and strategy</span> carry it into
        the market. <span className="serif italic">Finance</span> governs the
        position, because long-term value has no owner on the P&amp;L, and what
        no one books, the market prices by default.
      </>
    ),
    proof: [
      {
        h: 'The standard, authored.',
        d: 'Established the grading and ecosystem standards now referenced across the device lifecycle, extensible to new and emerging categories.',
      },
      {
        h: 'At platform scale.',
        d: 'Built and scaled global trade-in and circularity programs from scratch across Amazon, Google EMEA and APAC, Target, Walmart, and Best Buy.',
      },
      {
        h: 'At the maison interface.',
        d: 'Operated supplier to house in rare natural color diamonds with Graff, Harry Winston, Van Cleef and Arpels, and Tiffany and Co.',
      },
      {
        h: 'On the ledger.',
        d: 'Directed more than $100M in inventory deployment across global markets, shaping the purchasing and pricing decisions where lifecycle value is governed.',
      },
    ],
    ribbonEyebrow: 'Engagement 01',
    ribbonLine: 'Retention has an owner.',
    ribbonItalic: 'It should be you.',
    ctaLabel: 'Discuss value retention',
  },
  {
    eyebrow: 'Engagement 02 · Leadership & transformation',
    lead: 'The hardest part of change is naming what to carry forward,',
    leadItalic: 'and what to release.',
    strong:
      'Every inflection, whether growth, succession, a new mandate, or a sale, asks a company to concentrate on what makes it great in order to define what to carry forward, and what to leave behind.',
    sub: 'Its people are the greatest part of that. A transition returns the most when they are aligned to where the company is going. Structure is what holds that alignment in place, the governance, the cadence, the people in the seats, so the company carries its best forward rather than losing it in the move.',
    authorship: (
      <>
        The work sits where the decision meets the organization.{' '}
        <span className="serif italic">The founder or board</span> sets the
        direction. <span className="serif italic">Leadership</span> is aligned
        to the goals and values the company is moving toward, not only its
        targets. <span className="serif italic">Governance and cadence</span>{' '}
        turn the decision into something the company can run, and{' '}
        <span className="serif italic">the right operator</span> holds the seat
        until the structure stands on its own.
      </>
    ),
    proof: [
      {
        h: 'Founder to institution.',
        d: 'Chief Transformation Officer at PCS Wireless, recruited by the founder to carry the company from founder-led to institutional and install the incoming CEO.',
      },
      {
        h: 'Across inflections.',
        d: 'Multiple successful transitions, founder-led to institutional, scale-up, and structured wind-down. Operator-led, board-trusted.',
      },
      {
        h: 'At the top of the house.',
        d: 'Counsel at the founder, CEO, and executive level, where the decision is made and the structure is set.',
      },
      {
        h: 'Built as a system.',
        d: 'Governance, operating cadence, and executive structure installed to outlast the engagement, not the engagement itself.',
      },
    ],
    ribbonEyebrow: 'Engagement 02',
    ribbonLine: 'Change is certain.',
    ribbonItalic: 'What survives is your decision.',
    ctaLabel: 'Discuss a transition',
  },
]

export default function Engagements() {
  return (
    <section className="section capabilities" id="engagements" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHeader
          num="03. Engagements"
          eyebrow="Two engagements, one instinct"
          title="Two answers to the same"
          italic="question."
        />

        <Reveal>
          <p className="capabilities-synthesis">
            What carries forward through change, and who governs it. One
            engagement holds the standard as an object enters its second life.
            The other carries a company&rsquo;s best into its next chapter.
          </p>
        </Reveal>
      </div>

      {ENGAGEMENTS.map((eng, i) => (
        <div key={i} id={`engagement-0${i + 1}`} className="engagement-anchor">
          <div className="container">
            <Reveal stagger className={`eng-block ${i > 0 ? 'eng-block--divide' : ''}`.trim()}>
              <span className="eyebrow eng-eyebrow">{eng.eyebrow}</span>
              <h3 className="lead-stmt">
                {eng.lead} <span className="serif italic">{eng.leadItalic}</span>
              </h3>
              <div className="eng-frame">
                <p className="frame-strong">{eng.strong}</p>
                <p className="frame-sub">{eng.sub}</p>
              </div>
              <p className="eng-authorship">{eng.authorship}</p>
              <div className="proof-wrap">
                <span className="eyebrow proof-label">The work, proven</span>
                <div className="proof">
                  {eng.proof.map((p, j) => (
                    <div className="proof-item" key={j}>
                      <span className="proof-h">{p.h}</span>
                      <span className="proof-d">{p.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="ribbon">
            <div className="in">
              <div className="left">
                <div className="ribbon-eyebrow">{eng.ribbonEyebrow}</div>
                <div className="ribbon-line">
                  {eng.ribbonLine}{' '}
                  <span className="italic">{eng.ribbonItalic}</span>
                </div>
              </div>
              <a className="btn" href="#contact">
                {eng.ctaLabel} <span className="arw">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
