import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import BriefBuilderProvider from '@/components/BriefBuilderProvider';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Greynab Creative Studios — We create what echoes beyond the screen',
  description:
    'One studio. Two capabilities. Creative + production for brands that need both. KSA · UAE · Lebanon. Est. 2014.',
  metadataBase: new URL('https://greynab.com'),
  openGraph: {
    title: 'Greynab Creative Studios',
    description: 'We create what echoes beyond the screen.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Greynab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greynab Creative Studios',
    description: 'We create what echoes beyond the screen.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>
          <BriefBuilderProvider>
            <Cursor />
            <Nav />
            <main>{children}</main>
            <Footer />
          </BriefBuilderProvider>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
