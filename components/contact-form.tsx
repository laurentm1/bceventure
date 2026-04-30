'use client'

import { useState } from 'react'

const FORMSPREE_ID = 'xnjwavzr'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

const MOMENTS = [
  { value: '', label: 'What brings you here? (optional)' },
  { value: 'Scale', label: 'Scale growth at a new altitude' },
  { value: 'Transition', label: 'Transition leadership, structure, or chapter change' },
  { value: 'Inflection', label: 'Market inflection the rules just changed' },
  { value: 'Brand', label: 'Brand & pricing power sovereignty over value' },
  { value: 'Other', label: "Not sure yet let's talk" },
]

export default function ContactForm() {
  const [name, setName] = useState('')
  const [roleCompany, setRoleCompany] = useState('')
  const [email, setEmail] = useState('')
  const [moment, setMoment] = useState('')
  const [brief, setBrief] = useState('')
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Required'
    if (!email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Check format'
    if (!brief.trim()) e.brief = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const buildEmailBody = () => {
    const lines = [
      `${name.trim()}${roleCompany.trim() ? ' · ' + roleCompany.trim() : ''}`,
      email.trim(),
      '',
    ]
    if (moment) { lines.push(`What brings them here: ${moment}`); lines.push('') }
    lines.push('—', '', brief.trim(), '', '—', 'Sent via bce.ventures')
    return lines.join('\n')
  }

  const fallbackToMailto = () => {
    const subject = `Inquiry ${name.trim()}${roleCompany.trim() ? ' · ' + roleCompany.trim() : ''}`
    window.location.href = `mailto:hello@bceventure.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody())}`
  }

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          roleCompany: roleCompany.trim(),
          email: email.trim(),
          moment: moment || '',
          brief: brief.trim(),
          _subject: `Inquiry ${name.trim()}${roleCompany.trim() ? ' · ' + roleCompany.trim() : ''}`,
        }),
      })
      if (!res.ok) throw new Error('Formspree error')
      setSent(true)
    } catch {
      fallbackToMailto()
      setTimeout(() => setSent(true), 400)
    } finally {
      setSubmitting(false)
    }
  }

  const reset = () => {
    setSent(false)
    setName(''); setRoleCompany(''); setEmail(''); setMoment(''); setBrief(''); setErrors({})
  }

  if (sent) {
    return (
      <div className="form-success">
        <p className="form-success-title">Note received.</p>
        <p className="form-success-body">A reply, personally, within five business days.</p>
        <button type="button" className="form-success-reset" onClick={reset}>
          Send another →
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className={`field${errors.name ? ' error' : ''}`}>
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" type="text" value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="cf-role">
          Role & company <span className="field-optional">(optional)</span>
        </label>
        <input id="cf-role" type="text" value={roleCompany} onChange={e => setRoleCompany(e.target.value)} autoComplete="organization-title" />
      </div>

      <div className={`field${errors.email ? ' error' : ''}`}>
        <label htmlFor="cf-email">Where to reach you</label>
        <input id="cf-email" type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className="field field--select">
        <label htmlFor="cf-moment">What brings you here</label>
        <select id="cf-moment" value={moment} onChange={e => setMoment(e.target.value)}>
          {MOMENTS.map(m => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>

      <div className={`field${errors.brief ? ' error' : ''}`}>
        <label htmlFor="cf-brief">Briefly, the shape of the work</label>
        <textarea id="cf-brief" rows={4} value={brief} onChange={e => setBrief(e.target.value)} />
        {errors.brief && <span className="field-error">{errors.brief}</span>}
      </div>

      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send a note'}
        <span className="arrow">→</span>
      </button>
    </form>
  )
}
