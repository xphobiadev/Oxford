import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Universal Oxford Spires - Excellence in Language Education',
  description: 'Universal Oxford Spires offers world-class language education across 6 convenient campuses. Learn English, Spanish, French, German, Chinese, Japanese, and more with expert instructors.',
  keywords: 'language school, language learning, language academy, English classes, Spanish classes, French classes, German classes, Chinese classes, Japanese classes',
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var initialTheme = theme || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', initialTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
