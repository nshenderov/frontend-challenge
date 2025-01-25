import type { Metadata } from 'next';

import { Header } from '@/components';
import { roboto } from '@/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Котики',
  description: 'Котики на каждый день',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto} flex flex-col [&_main]:grow`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
