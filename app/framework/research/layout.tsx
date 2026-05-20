import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Research · The Sovereignty Framework™ — BCE Ventures',
  description:
    'The research behind The Sovereignty Framework: market data, governance precedents, and diagnostic architecture.',
  robots: 'noindex, nofollow',
}

export default function FrameworkResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
