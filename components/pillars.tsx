import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'

export default function Pillars() {
  return (
    <section className="section" id="practice" style={{ paddingTop: 0 }}>
      <div className="approach-band">
        <div className="container">
          <SectionHeader
            num="02. Practice"
            eyebrow="The through-line"
            title="The brand,"
            italic="not the market, sets the terms."
            oneLine
          />
        </div>
      </div>

      <div className="container">
        <Reveal>
          <p className="practice-intro">
            Value used to be set at first sale. Now it is renegotiated every
            time an object or a business changes hands. The first moment still
            gets the attention. The structure that governs everything after is
            left to the market.
          </p>
        </Reveal>

        <Reveal>
          <p className="practice-handoff">
            The same question runs through both.{' '}
            <span className="serif italic">An object</span> entering its second
            life. <span className="serif italic">A company</span> entering its
            next chapter. What is essential enough to carry forward, and who
            governs it through the change.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
