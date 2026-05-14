import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'
import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ background: 'var(--bone-2)' }}>
      <div className="container">
        <SectionHeader
          num="05 Contact"
          eyebrow="By introduction or direct note"
          title="Selectively"
          italic="engaged."
        />

        <Reveal stagger className="contact-grid contact-grid--lean">
          <div className="contact-left">
            <p className="body-l" style={{ color: 'var(--ink-2)', maxWidth: 460 }}>
              BCE Ventures partners with a small number of leadership teams each year, at moments of scale,
              transition, and market inflection. Most engagements begin through introduction or a direct note.
            </p>
            <p className="body-l" style={{ color: 'var(--ink-2)', maxWidth: 460, marginTop: 12 }}>
              Tell us briefly the shape of the work. We respond personally within five business days.
            </p>
          </div>

          <div className="contact-right">
            <ContactForm />

            <div className="contact-after">
              <span>Or write directly —</span>
              <a href="mailto:hello@bceventure.com?subject=Inquiry%20%E2%80%94%20BCE%20Ventures">hello@bceventure.com</a>
              <span className="dot-sep">·</span>
              <a href="https://www.linkedin.com/in/alamrami/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <dl className="contact-meta contact-meta--right">
              <div className="contact-meta-row">
                <dt>Office</dt>
                <dd>New York · By appointment</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
