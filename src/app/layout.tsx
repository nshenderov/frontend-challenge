import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

import './globals.css';

const roboto = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'Cat Pinterest',
  description: 'Everyday dose of cat images',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} flex flex-col antialiased`}>{children}</body>
    </html>
  );
}
