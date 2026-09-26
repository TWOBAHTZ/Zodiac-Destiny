import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Zodiac Cards — Celestial Pack Opening', description: 'Open a celestial zodiac card pack and discover all twelve signs plus a secret cat.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="th"><body>{children}</body></html>; }
