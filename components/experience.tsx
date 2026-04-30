import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

const ENTRIES = [
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
      'Advised on natural coloured diamond valuation, grading, and provenance.',
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
]

export default function SelectedExperience() {
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
          {ENTRIES.map((e, i) => (
            <article className="experience-entry" key={i}>
              <span className="experience-name eyebrow">{e.name}</span>
              <div className="experience-body">
                {e.body.map((line, j) => <p key={j}>{line}</p>)}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
