'use client'

import { useState, useEffect, useCallback, type ReactNode } from 'react'
import TweaksPanel, { TweakSection, TweakRadio, TweakSelect, TweakToggle } from './tweaks-panel'

interface Tweaks {
  theme: string
  font: string
  showMarquee: boolean
  showSystemMark: boolean
  headlineMode: string
  showManifesto: boolean
}

const DEFAULTS: Tweaks = {
  theme: 'atelier',
  font: 'fraunces',
  showMarquee: true,
  showSystemMark: true,
  headlineMode: 'sovereignty',
  showManifesto: true,
}

export default function TweaksProvider({ children }: { children: ReactNode }) {
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS)
  const [open, setOpen] = useState(false)

  const setTweak = useCallback(<K extends keyof Tweaks>(key: K, value: Tweaks[K]) => {
    setTweaks(prev => ({ ...prev, [key]: value }))
  }, [])

  // Apply tweaks to <html> data attributes — CSS reads these for theme/font/visibility
  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = tweaks.theme
    root.dataset.font = tweaks.font
    root.dataset.headline = tweaks.headlineMode
    root.dataset.showMarquee = String(tweaks.showMarquee)
    root.dataset.showManifesto = String(tweaks.showManifesto)
    root.dataset.showSystemMark = String(tweaks.showSystemMark)
  }, [tweaks])

  // Shift+T to toggle panel
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'T') setOpen(o => !o)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      {children}
      {open && (
        <TweaksPanel onClose={() => setOpen(false)}>
          <TweakSection title="Direction" subtitle="Visual directions">
            <TweakRadio
              label="Theme"
              value={tweaks.theme}
              onChange={v => setTweak('theme', v)}
              options={[
                { value: 'editorial', label: 'Editorial' },
                { value: 'atelier', label: 'Atelier' },
                { value: 'blush', label: 'Blush' },
                { value: 'mono', label: 'Mono' },
                { value: 'maison', label: 'Maison' },
              ]}
            />
          </TweakSection>

          <TweakSection title="Typography" subtitle="Serif × sans pairings">
            <TweakRadio
              label="Font pairing"
              value={tweaks.font}
              onChange={v => setTweak('font', v)}
              options={[
                { value: 'cormorant', label: 'Cormorant × Inter Tight' },
                { value: 'fraunces', label: 'Fraunces × Inter' },
                { value: 'fraunces-tight', label: 'Fraunces × Inter Tight' },
                { value: 'ebgaramond', label: 'EB Garamond × Inter Tight' },
              ]}
            />
          </TweakSection>

          <TweakSection title="Hero headline" subtitle="Opening declaration">
            <TweakSelect
              label="Headline"
              value={tweaks.headlineMode}
              onChange={v => setTweak('headlineMode', v)}
              options={[
                { value: 'sovereignty', label: 'Sovereignty is the objective.' },
                { value: 'standards', label: 'Standards before scale.' },
                { value: 'durable', label: 'Durable value compounds.' },
              ]}
            />
          </TweakSection>

          <TweakSection title="Page elements">
            <TweakToggle
              label="Marquee strip"
              value={tweaks.showMarquee}
              onChange={v => setTweak('showMarquee', v)}
            />
            <TweakToggle
              label="Manifesto block"
              value={tweaks.showManifesto}
              onChange={v => setTweak('showManifesto', v)}
            />
            <TweakToggle
              label="System mark"
              value={tweaks.showSystemMark}
              onChange={v => setTweak('showSystemMark', v)}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  )
}
