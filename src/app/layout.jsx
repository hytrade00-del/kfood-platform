import '../index.css';

export const metadata = {
  title: 'K-Food Global | Authentic Korean Recipes for Home Cooks Worldwide',
  description: 'Discover authentic Korean recipes with smart ingredient substitutes. Cook Kimchi Jjigae, Bulgogi, Bibimbap and more — with local supermarket alternatives that taste just as good.',
  keywords: 'Korean recipes, K-food, Korean cooking, ingredient substitutes, Kimchi Jjigae, Bulgogi, Bibimbap, Korean food for beginners',
  authors: [{ name: 'K-Food Global' }],
  openGraph: {
    title: 'K-Food Global | Authentic Korean Recipes for Home Cooks Worldwide',
    description: 'Discover authentic Korean recipes with smart ingredient substitutes. Cook Kimchi Jjigae, Bulgogi, Bibimbap and more — with local supermarket alternatives.',
    url: 'https://www.kfood-platform.com/',
    siteName: 'K-Food Global',
    images: [
      {
        url: 'https://www.kfood-platform.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K-Food Global | Authentic Korean Recipes',
    description: 'Cook authentic Korean food with local supermarket alternatives. Smart ingredient substitutes included.',
    images: ['https://www.kfood-platform.com/og-image.jpg'],
  },
  verification: {
    google: 'SbFq08KZKuboVDqydn8PC-2j3BUh_hkj_l-iZTTXVnY',
  },
};

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Suspense } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vite.svg" />
        <link rel="canonical" href="https://www.kfood-platform.com/" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5993325624418539"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <div id="root">
          <Suspense fallback={<div className="header-skeleton" style={{ height: '150px' }} />}>
            <Header />
          </Suspense>
          <main className="container">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
