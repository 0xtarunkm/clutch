'use client';

import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

interface NavbarProps {
  activePage?: 'home' | 'trade' | 'rewards' | 'learn' | 'news' | 'about';
}

export function Navbar({ activePage = 'home' }: NavbarProps) {
  const session = useSession();
  return (
    <header className="h-[4.5rem] w-full flex items-center border-b border-border/10 bg-background">
      <nav
        className="container flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex items-center gap-8">
          <Link href="/" passHref className="flex items-center">
            <Image src={'/logo.png'} height={54} width={54} alt={'logo'} />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            {/* Placeholder nav links if design calls for them; active link gets underline */}
            <div className="flex gap-6 text-sm">
              {['trade','rewards','learn','news'].map(p => (
                <Link key={p} href={p === 'trade' ? '/trade/BTC-USD' : `/${p}`}
                  className={`hover:text-white transition-colors ${activePage===p ? 'font-semibold underline underline-offset-4' : 'text-muted-foreground'}`}>{p.charAt(0).toUpperCase()+p.slice(1)}</Link>
              ))}
            </div>
            {session.data?.user?.email ? (
              <div className="flex items-center space-x-6">
                <div className="flex gap-6 text-sm">
                  <div>
                    <div className="text-muted-foreground">Balance(USDC)</div>
                    <div className="font-medium">$10_000</div>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-xl border-white text-white bg-transparent hover:bg-white/10"
                    onClick={async () => signOut()}
                  >
                    Log out
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Link href="/signin" passHref>
                  <Button
                    variant="outline"
                    className="rounded-xl border-white text-white bg-transparent hover:bg-white/10"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
