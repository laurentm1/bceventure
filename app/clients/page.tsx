'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientsPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter your credentials.')
      return
    }
    setError(null)
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setError('Invalid credentials. Please contact your account lead.')
    }, 700)
  }

  return (
    <main className="clients-page">
      <div className="clients-shell">
        <Link href="/" className="clients-back">← BCE.VENTURES</Link>

        <div className="clients-card">
          <h1 className="clients-title">Client <span className="serif italic">Login</span></h1>

          <form className="clients-form" onSubmit={onSubmit} noValidate>
            <label className="clients-field">
              <span>Email</span>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@firm.com"
                required
              />
            </label>

            <label className="clients-field">
              <span>Password</span>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </label>

            {error && <div className="clients-error" role="alert">{error}</div>}

            <button type="submit" className="clients-submit" disabled={submitting}>
              {submitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <div className="clients-footnote">
            Trouble signing in? <a href="/#contact">Contact us</a>.
          </div>
        </div>
      </div>
    </main>
  )
}
