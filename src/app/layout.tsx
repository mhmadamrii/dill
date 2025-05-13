import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '~/components/theme-provider';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kangdilla.vercel.app/renting'),
  alternates: {
    canonical: '/',
  },
  title: 'Pondok Kang Dilla | Kost ekslusif ternyaman di Bandung',
  description:
    'Pondok Kang Dilla - Kost ekslusif dengan fasilitas lengkap di Bandung, nyaman dan aman',
  openGraph: {
    title: 'Kost Ekslusif, nyaman dan aman di Bandung',
    description:
      'Pondok Kang Dilla - Kost ekslusif dengan fasilitas lengkap di Bandung, nyaman dan aman',
    url: 'https://kangdilla.vercel.app',
    siteName: 'Pondok Kang Dilla',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://kangdilla.vercel.app/opengraph-image.png',
        width: 1200,
        height: 360,
        alt: 'Pondok Kang Dilla Kost Ekslusif',
      },
      {
        url: 'https://kangdilla.vercel.app/opengraph-image.png',
        width: 400,
        height: 400,
        alt: 'Pondok Kang Dilla Kost Ekslusif',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Pondok Kang Dilla',
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
