import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-background pt-8 pb-6 w-full">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block mb-6"
              title="Clutch | Privacy-First Prediction Markets"
            >
              <Image src={'/logo.png'} height={54} width={54} alt={'Clutch logo'} />
            </Link>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">
              About
            </h4>
            <FooterLink href="/about">About Clutch</FooterLink>
            <FooterLink href="/how-it-works">How It Works</FooterLink>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">Markets</h4>
            <FooterLink href="/markets">All Markets</FooterLink>
            <FooterLink href="/markets/active">Active Events</FooterLink>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">Support</h4>
            <FooterLink href="/help">Help Center</FooterLink>
            <FooterLink href="/faqs">FAQ</FooterLink>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">Legal</h4>
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">Learn</h4>
            <FooterLink href="/docs">Documentation</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">
              Community
            </h4>
            <FooterLink href="https://discord.gg/clutch">
              Discord
            </FooterLink>
            <FooterLink href="https://twitter.com/clutch_markets">Twitter</FooterLink>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/10">
          <div className="flex gap-4">
            <Link
              href="https://twitter.com/clutch_markets"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="https://discord.gg/clutch"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 12h6M9 16h6M9 8h6M3 4v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1z"></path>
              </svg>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Clutch Markets, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
    >
      {children}
    </Link>
  );
}
