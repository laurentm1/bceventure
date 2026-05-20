'use client'

import { useEffect, useState } from 'react'
import PublicFramework from './_components/PublicFramework'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdwpddp'

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com',
  'yahoo.com', 'yahoo.co.uk', 'yahoo.fr', 'ymail.com',
  'hotmail.com', 'hotmail.co.uk', 'hotmail.fr',
  'outlook.com', 'live.com', 'msn.com',
  'icloud.com', 'me.com', 'mac.com',
  'aol.com',
  'protonmail.com', 'proton.me',
  'gmx.com', 'gmx.net',
  'mail.com',
  'yandex.com', 'yandex.ru',
  'zoho.com',
  'hey.com',
  'fastmail.com',
  'qq.com', '163.com', '126.com',
])

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMAIL_ALLOWLIST = new Set(['amrami.alix@gmail.com'])

type GateErrors = { name?: string; email?: string; org?: string }

export default function FrameworkPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [errors, setErrors] = useState<GateErrors>({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'blush')
    document.documentElement.setAttribute('data-font', 'fraunces-tight')
    return () => {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.removeAttribute('data-font')
    }
  }, [])

  const validate = () => {
    const e: GateErrors = {}
    if (!name.trim()) e.name = 'Required'
    const trimmedEmail = email.trim().toLowerCase()
    if (!trimmedEmail) {
      e.email = 'Required'
    } else if (!EMAIL_RE.test(trimmedEmail)) {
      e.email = 'Check format'
    } else if (!EMAIL_ALLOWLIST.has(trimmedEmail)) {
      const domain = trimmedEmail.split('@')[1]
      if (domain && FREE_EMAIL_DOMAINS.has(domain)) {
        e.email = 'Please use a work email'
      }
    }
    if (!org.trim()) e.org = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onUnlock = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organisation: org.trim(),
          _subject: `Framework access · ${name.trim()} · ${org.trim()}`,
          _replyto: email.trim(),
          source: 'The Sovereignty Framework — bce.ventures/framework',
        }),
      })
    } catch {
      // best-effort
    } finally {
      setSubmitting(false)
      setUnlocked(true)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
  }

  if (unlocked) {
    // Gated research zone will be built in Commit 2.
    return (
      <main className="fw-page">
        <div className="fw-shell">
          <p className="eyebrow">The Research</p>
          <h1 className="fw-hero">Coming next: <em>the research zone.</em></h1>
          <p className="fw-hero-sub">
            The tabbed research zone (Market context · Market study · Cannibalization · Three vectors · The diagnostic) is being ported in a follow-up commit on this PR.
          </p>
        </div>
      </main>
    )
  }

  const gateForm = (
    <div className="fw-gate-form">
      <div className="fw-gate-field">
        <input
          className={`fw-gate-input${errors.name ? ' is-error' : ''}`}
          type="text"
          placeholder="Your name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
        />
        {errors.name && <span className="fw-gate-error" role="alert">{errors.name}</span>}
      </div>
      <div className="fw-gate-field">
        <input
          className={`fw-gate-input${errors.email ? ' is-error' : ''}`}
          type="email"
          placeholder="Work email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className="fw-gate-error" role="alert">{errors.email}</span>}
      </div>
      <div className="fw-gate-field">
        <input
          className={`fw-gate-input${errors.org ? ' is-error' : ''}`}
          type="text"
          placeholder="House or organisation"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          aria-invalid={!!errors.org}
        />
        {errors.org && <span className="fw-gate-error" role="alert">{errors.org}</span>}
      </div>
      <button
        className="fw-gate-btn"
        onClick={onUnlock}
        type="button"
        disabled={submitting}
      >
        {submitting ? 'Sending…' : 'Access the research'}
      </button>
      <p className="fw-gate-note">
        This is the beginning of a conversation, not a mailing list. Please use a work email — the research is for Maison leadership and strategy teams.
      </p>
    </div>
  )

  return <PublicFramework gateForm={gateForm} />
}
