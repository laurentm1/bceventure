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
            Value is not getting lost.<br />
            <span className="accent">It is getting reassigned.</span><br />
            We help brands set the terms.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
