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
          <p className="manifesto-text">
            Trust is not getting lost.{' '}
            <span className="accent">It is getting reassigned.</span>
          </p>
        </Reveal>
        <Reveal>
          <p className="manifesto-text" style={{ marginTop: '1.2em' }}>
            We help brands set the terms.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
