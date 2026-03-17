import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { NavBar } from '../components/nav/NavBar';
import { ViewModeProvider } from '../components/ui/ViewToggle';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Haven — Material Database', template: '%s | Haven' },
  description: 'Engineering material reference database for aluminum and steel alloys. Properties, grades, standards, and comparisons.',
  keywords: ['materials', 'aluminum', 'steel', 'alloy', 'mechanical properties', 'engineering'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-100`}>
        <ViewModeProvider>
          <NavBar />
          <main>{children}</main>
        </ViewModeProvider>
      </body>
    </html>
  );
}
