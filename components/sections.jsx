// === BCE Ventures Insights + Contact + Footer ===

function Insights() {
  const items = [
    {
      date: '04.26.26',
      title: 'Assets that survive first use become investable',
      kicker: 'Reuse turned rockets into infrastructure. Longevity turned the Birkin into an asset. The mechanism is the same. From Summit at Sea, 2026.',
      tag: 'Frameworks',
      href: 'https://www.linkedin.com/posts/alamrami_the-unexpected-connection-between-rockets-activity-7454643633351450625-SdEI',
    },
    {
      date: '04.20.26',
      title: 'Sovereignty over value formation',
      kicker: 'Primary luxury is flat. Secondary is growing 3× faster. The maisons that define the standard will own the next decade.',
      tag: 'Markets',
      href: 'https://www.linkedin.com/posts/alamrami_primary-luxury-markets-are-slowing-2025-activity-7443052315906895873-2mcM',
    },
    {
      date: '04.06.26',
      title: 'Provenance is the asset',
      kicker: 'The debate was never about chemistry. It was about whether value holds once the object changes hands.',
      tag: 'Diamonds',
      href: 'https://www.linkedin.com/posts/alamrami_after-my-last-post-on-luxury-markets-slowing-activity-7452022945260105729-GKFS',
    },
    {
      date: '03.18.26',
      title: 'The greatest liability is the greatest asset',
      kicker: 'When Hubert Joly took over Best Buy, he flipped the premise. The store wasn\'t the problem the footprint was the underused asset. A lesson in leadership that travels.',
      tag: 'Leadership',
      href: 'https://www.linkedin.com/posts/alamrami_the-lesson-saks-fifth-avenue-missed-from-activity-7427040296040939520-ng1d',
    },
  ];

  return (
    <section className="section" id="insights">
      <div className="container">
        <SectionHeader
          num="04 Insights"
          eyebrow="Musings"
          title="Field notes from"
          italic="the practice."
        />

        <Reveal stagger className="insights-list">
          {items.map((it, i) => (
            <a className="insight" key={i} href={it.href} target="_blank" rel="noopener noreferrer">
              <span className="insight-date">{it.date}</span>
              <div className="insight-body">
                <h3 className="insight-title">{it.title}</h3>
                <p className="insight-kicker">{it.kicker}</p>
              </div>
              <span className="insight-tag">— {it.tag}</span>
              <span className="insight-arrow">→</span>
            </a>
          ))}
        </Reveal>

        <div className="insights-foot">
          <a href="https://www.linkedin.com/in/alamrami/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: 'var(--ink)' }}>
            More writing on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
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
              BCE Ventures partners with a small number of leadership teams each year, at moments of scale, transition, and market inflection.
              at moments of scale, transition, and market inflection. Most engagements
              begin through introduction or a direct note.
            </p>
            <p className="body-l" style={{ color: 'var(--ink-2)', maxWidth: 460, marginTop: 12 }}>
              Tell us briefly the shape of the work. We respond personally within
              five business days.
            </p>
          </div>

          <div className="contact-right">
            <ContactForm />

            <div className="contact-after">
              <span>Or write directly: </span>
              <a href="mailto:hello@bceventure.com?subject=Inquiry%20%E2%80%94%20BCE%20Ventures">hello@bceventure.com</a>
              <span className="dot-sep">·</span>
              <a href="https://www.linkedin.com/in/alamrami/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <dl className="contact-meta contact-meta--right">
              <div className="contact-meta-row">
                <dt>Office</dt>
                <dd>New York · By appointment</dd>
              </div>
              <div className="contact-meta-row">
                <dt>Cadence</dt>
                <dd>A few engagements each year</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// === Contact form ===
//
// Submits to Formspree (https://formspree.io). Replace FORMSPREE_ID below
// with the ID from your Formspree form once registered (looks like "xkgwjvqe").
// While the placeholder is in place, the form falls back to mailto so it
// keeps working but submissions won't be captured until you swap the ID.
const FORMSPREE_ID = 'xnjwavzr';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

function ContactForm() {
  const [name, setName] = React.useState('');
  const [roleCompany, setRoleCompany] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [moment, setMoment] = React.useState('');
  const [brief, setBrief] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const moments = [
    { value: '', label: 'What brings you here? (optional)' },
    { value: 'Scale', label: 'Scale growth at a new altitude' },
    { value: 'Transition', label: 'Transition leadership, structure, or chapter change' },
    { value: 'Inflection', label: 'Market inflection the rules just changed' },
    { value: 'Brand', label: 'Brand & pricing power sovereignty over value' },
    { value: 'Other', label: "Not sure yet let's talk" },
  ];

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Required';
    if (!email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Check format';
    if (!brief.trim()) e.brief = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildEmailBody = () => {
    const lines = [
      `${name.trim()}${roleCompany.trim() ? ' · ' + roleCompany.trim() : ''}`,
      `${email.trim()}`,
      '',
    ];
    if (moment) {
      lines.push(`What brings them here: ${moment}`);
      lines.push('');
    }
    lines.push('—');
    lines.push('');
    lines.push(brief.trim());
    lines.push('');
    lines.push('—');
    lines.push('Sent via bceventure.com');
    return lines.join('\n');
  };

  const fallbackToMailto = () => {
    const subject = `Inquiry ${name.trim()}${roleCompany.trim() ? ' · ' + roleCompany.trim() : ''}`;
    const href = `mailto:hello@bceventure.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody())}`;
    window.location.href = href;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    // If Formspree isn't configured yet, go straight to mailto fallback.
    if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      fallbackToMailto();
      setTimeout(() => setSent(true), 400);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          roleCompany: roleCompany.trim(),
          email: email.trim(),
          moment: moment || '',
          brief: brief.trim(),
          _subject: `Inquiry ${name.trim()}${roleCompany.trim() ? ' · ' + roleCompany.trim() : ''}`,
        }),
      });
      if (!res.ok) throw new Error('Formspree error');
      setSent(true);
    } catch (err) {
      // Network failure or Formspree error fall back to mailto so the
      // submission isn't lost.
      fallbackToMailto();
      setTimeout(() => setSent(true), 400);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="form-success">
        <p className="form-success-title">Note received.</p>
        <p className="form-success-body">
          A reply, personally, within five business days.
        </p>
        <button
          type="button"
          className="form-success-reset"
          onClick={() => { setSent(false); setName(''); setRoleCompany(''); setEmail(''); setMoment(''); setBrief(''); setErrors({}); }}
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className={`field${errors.name ? ' error' : ''}`}>
        <label htmlFor="cf-name">Your name</label>
        <input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="cf-role">Role & company <span className="field-optional">(optional)</span></label>
        <input
          id="cf-role"
          type="text"
          value={roleCompany}
          onChange={(e) => setRoleCompany(e.target.value)}
          autoComplete="organization-title"
        />
      </div>

      <div className={`field${errors.email ? ' error' : ''}`}>
        <label htmlFor="cf-email">Where to reach you</label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className="field field--select">
        <label htmlFor="cf-moment">What brings you here</label>
        <select
          id="cf-moment"
          value={moment}
          onChange={(e) => setMoment(e.target.value)}
        >
          {moments.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>

      <div className={`field${errors.brief ? ' error' : ''}`}>
        <label htmlFor="cf-brief">Briefly, the shape of the work</label>
        <textarea
          id="cf-brief"
          rows={4}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
        />
        {errors.brief && <span className="field-error">{errors.brief}</span>}
      </div>

      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send a note'}
        <span className="arrow">→</span>
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="mark">BCE<span className="dot">.</span>VENTURES</span>
          <p>
            Operator-led venture building and strategic advisory.
            Trust, design, durable systems. Sovereignty is the objective.
          </p>
        </div>
        <div className="footer-col">
          <h4>Practice</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#practice">Approach</a></li>
            <li><a href="#engagements">Engagements</a></li>
            <li><a href="#insights">Insights</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="#contact">Request a consult</a></li>
            <li><a href="mailto:hello@bceventure.com">hello@bceventure.com</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Office</h4>
          <ul>
            <li><span style={{ color: 'var(--muted)', fontSize: 14 }}>New York</span></li>
            <li><span style={{ color: 'var(--muted)', fontSize: 14 }}>By appointment</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-mark-large">
        BCE<span className="dot">.</span>VENTURES
      </div>

      <div className="footer-bottom">
        <span>© 2026 BCE Ventures · All rights reserved</span>
        <span>A practice, not a platform</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Insights, Contact, ContactForm, Footer });
