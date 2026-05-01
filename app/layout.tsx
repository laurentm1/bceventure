import type { Metadata } from 'next'
import './globals.css'
import TweaksProvider from '@/components/tweaks/tweaks-provider'

export const metadata: Metadata = {
  title: 'BCE.VENTURES — Operator-led venture building & strategic advisory',
  description:
    'BCE Ventures advises founders, CEOs, leadership teams, and maisons on how value is structured and protected. Trust, design, durable systems. Sovereignty is the objective.',
  authors: [{ name: 'Alexandra Amrami' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://bce.ventures/',
  },
  openGraph: {
    type: 'website',
    siteName: 'BCE Ventures',
    title: 'BCE.VENTURES — Operator-led venture building & strategic advisory',
    description:
      'Trust, design, durable systems. An operator-led venture practice for founders, CEOs, and maisons. Sovereignty over value.',
    url: 'https://bce.ventures/',
    images: [
      {
        url: 'https://bce.ventures/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BCE.VENTURES — Sovereignty over value',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BCE.VENTURES — Operator-led venture practice',
    description: 'Trust, design, durable systems. Sovereignty over value.',
    images: ['https://bce.ventures/og-image.png'],
  },
  other: {
    'theme-color': '#F2EFE9',
  },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://bce.ventures/#organization',
      name: 'BCE Ventures',
      alternateName: 'BCE.VENTURES',
      url: 'https://bce.ventures/',
      logo: 'https://bce.ventures/og-image.png',
      description:
        'Operator-led venture building and strategic advisory. Trust, design, durable systems. Sovereignty over value.',
      founder: { '@id': 'https://bce.ventures/#founder' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New York',
        addressCountry: 'US',
      },
      sameAs: ['https://www.linkedin.com/in/alamrami/'],
    },
    {
      '@type': 'Person',
      '@id': 'https://bce.ventures/#founder',
      name: 'Alexandra Amrami',
      jobTitle: 'Founder',
      worksFor: { '@id': 'https://bce.ventures/#organization' },
      url: 'https://www.linkedin.com/in/alamrami/',
      sameAs: ['https://www.linkedin.com/in/alamrami/'],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="atelier"
      data-font="fraunces"
      data-headline="sovereignty"
      data-show-marquee="true"
      data-show-manifesto="true"
      data-show-system-mark="true"
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-256.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Serif+Display:ital@0;1&family=Libre+Caslon+Text:ital,wght@0,400;1,400&family=Marcellus&family=Italiana&family=Forum&family=Cinzel:wght@400;500&family=Tenor+Sans&family=Inter+Tight:wght@300;400;500;600&family=Inter:wght@300;400;500&family=DM+Sans:wght@300;400;500&family=Manrope:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <TweaksProvider>{children}</TweaksProvider>
      </body>
    </html>
  )
}
