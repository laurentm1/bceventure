import Reveal from '@/components/reveal'

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-inner">
        <Reveal>
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
            00. Premise
          </p>
        </Reveal>
        <Reveal>
          <div className="manifesto-stack">
            <p className="manifesto-text">
              Trust used to be set at first sale. Now it is renegotiated every
              time an object, a business, or a leadership team changes hands.
              Most brands are still optimizing for the first moment, leaving the
              market to define everything that comes after.
            </p>
            <p className="manifesto-text">
              Trust is not getting lost.{' '}
              <span className="accent">It is getting reassigned.</span>
            </p>
            <p className="manifesto-text">We help brands set the terms.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
