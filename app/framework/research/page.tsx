'use client'

import { useEffect } from 'react'
import GatedResearch from '../_components/GatedResearch'

export default function FrameworkResearchPage() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'blush')
    document.documentElement.setAttribute('data-font', 'fraunces-tight')
    return () => {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.removeAttribute('data-font')
    }
  }, [])

  return (
    <main className="fw-page fwg-page">
      <div className="fw-shell">
        <div className="fw-topbar">
          <a href="/framework" className="fw-back">← Public framework</a>
          <span className="fw-confidential">© Confidential · For internal review only · Not for redistribution</span>
        </div>

        <div className="fw-masthead">
          <span>BCE Ventures · No. 01</span>
          <span className="fw-masthead-mid">The Research</span>
          <span className="fw-masthead-right">Confidential · 2026</span>
        </div>

        <header className="fwg-hero">
          <p className="eyebrow">The Research</p>
          <h1 className="fwg-hero-title">
            Market data, governance precedents,<br />
            <span className="serif italic">and diagnostic architecture.</span>
          </h1>
          <p className="fwg-hero-sub">
            Value is not getting lost. <span className="serif italic">It is getting reassigned.</span> The five-dimension framework above maps where. This is the evidence.
          </p>
        </header>

        <GatedResearch />

        <footer className="fw-protect">
          <p className="fw-protect-mark">BCE.Ventures™ · The Sovereignty Framework™ · Research</p>
          <p className="fw-protect-rights">
            BS&quot;D · © 2026 BCE.Ventures. All rights reserved. Confidential research material — not for redistribution.
          </p>
        </footer>
      </div>
    </main>
  )
}
