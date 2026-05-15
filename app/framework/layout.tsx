import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Sovereignty Framework™ — BCE Ventures',
  description:
    'A strategic model for governing value beyond the first sale. Five dimensions through which a Maison takes a more active role in how value is authenticated, interpreted, protected, and compounded across the full product lifecycle.',
  alternates: { canonical: 'https://bce.ventures/framework' },
  openGraph: {
    type: 'article',
    siteName: 'BCE Ventures',
    title: 'The Sovereignty Framework™ — BCE Ventures',
    description:
      'A strategic model for governing value beyond the first sale. For Maisons that built desirability and intend to govern what happens next.',
    url: 'https://bce.ventures/framework',
  },
}

export default function FrameworkLayout({ children }: { children: React.ReactNode }) {
  return children
}
