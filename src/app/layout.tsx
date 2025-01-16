import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

import { Header } from '@/components';
import './globals.css';

const roboto = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'Кошачий пинтерест',
  description: 'Котики на каждый день',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} flex flex-col antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
