import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ennoiabranding.com'),
  title: {
    default: 'Ennoia — Strategy-led branding for founders',
    template: '%s · Ennoia',
  },
  description:
    'For founders who need a position, not just a logo, Ennoia is the strategy-led branding studio that finds the move competitors miss and builds the brand around it — because we read the whole board before we move.',
  openGraph: {
    type: 'website',
    url: 'https://ennoiabranding.com',
    siteName: 'Ennoia',
    // Default OG 1200×630 pending supply (§14)
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/RethinkSans-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
