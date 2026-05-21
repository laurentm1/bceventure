'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'
import GatedResearch from '../_components/GatedResearch'

const blockCopy = (e: React.ClipboardEvent) => {
  const t = e.target as HTMLElement | null
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
  e.preventDefault()
}

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
    <main
      className="fw-page fwg-page"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={blockCopy}
      onCut={blockCopy}
    >
      <div className="fw-shell">
        <div className="fw-topbar">
          <a href="/framework" className="fw-back">← Framework</a>
          <span className="fw-confidential">© Confidential · For internal review only · Not for redistribution</span>
        </div>

        <div className="fw-masthead">
          <span>BCE Ventures · No. 01</span>
          <span className="fw-masthead-mid">The Research · Behind the Framework</span>
          <span className="fw-masthead-right">Confidential · 2026</span>
        </div>

        <header className="fwg-hero">
          <p className="eyebrow">The Research</p>
          <h1 className="fwg-hero-title">
            Market data, governance precedents,<br />
            <span className="serif italic">and diagnostic architecture.</span>
          </h1>
          <p className="fwg-hero-sub">
            Value is not getting lost. <span className="serif italic">It is getting reassigned.</span> The five-dimension framework above maps where. This research is the evidence behind it.
          </p>
        </header>

        <GatedResearch />

        <aside className="fwg-contact">
          <div className="fwg-contact-row">
            <div>
              <p className="fwg-contact-eye">Continue the conversation</p>
              <p className="fwg-contact-line">
                The Diagnostic is the first engagement BCE Ventures undertakes with any Maison.
              </p>
            </div>
            <Link href="/#diagnostic" className="fwg-contact-cta">
              <span>Request a consult</span>
              <span className="fwg-contact-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>

        <footer className="fw-protect">
          <p className="fw-protect-mark">BCE.Ventures™ · The Sovereignty Framework™ · Research</p>
          <p className="fw-protect-rights">
            BS&quot;D · © 2026 BCE.Ventures. All rights reserved. Confidential research material — not for redistribution.
          </p>
        </footer>
      </div>
      <Footer />
    </main>
  )
}
