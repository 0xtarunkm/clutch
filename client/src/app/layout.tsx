import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Clutch | The World's Fastest Cricket Prediction Market",
  description:
  "Clutch is the world's fastest cricket prediction market. Built by and for cricket lovers, Clutch is the most liquid, secure and advanced cricket prediction market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased font-mono`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
