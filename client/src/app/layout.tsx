import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Clutch | Privacy-First Prediction Markets",
  description:
    "Clutch is the next-generation prediction market platform where your insights become investments. Trade on real-world events with complete privacy using advanced MPC technology. Predict. Win. Earn.",
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
