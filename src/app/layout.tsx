'use client';
import { Inter } from 'next/font/google';
import theme from '@/styles/palette';
import { ThemeProvider } from 'styled-components';
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
        <body className={inter.className}>{children}</body>
      </ThemeProviderWrapper>
    </html>
  );
}
