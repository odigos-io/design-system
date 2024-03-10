'use client';
import { Inter } from 'next/font/google';
import { ThemeProviderWrapper } from '@/design.system';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProviderWrapper>
        <body style={{ margin: 0 }} className={inter.className}>
          {children}
        </body>
      </ThemeProviderWrapper>
    </html>
  );
}
