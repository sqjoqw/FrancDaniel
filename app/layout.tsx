import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import AudioController from '@/components/layout/AudioController';

// Apple-like Sans Serif
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Editorial Serif for Headlines
const newsreader = Newsreader({ 
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Daniel Franc | Visionary Producer',
  description: 'Portfolio of Daniel Franc - Creative Technologist, Media Producer, and Engineer based in Prague.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {/* Audio Controller persists across pages if you add more routes */}
        <AudioController />
        {children}
      </body>
    </html>
  );
}