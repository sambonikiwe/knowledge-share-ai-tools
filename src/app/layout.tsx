import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Rent a car',
  description: 'Short term car rental',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12'>{children}</main>
      </body>
    </html>
  );
}
