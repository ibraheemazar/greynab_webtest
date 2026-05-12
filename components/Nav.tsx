'use client';

import Link from 'next/link';
import { useBriefBuilder } from './BriefBuilderProvider';

export default function Nav() {
  const { open } = useBriefBuilder();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 sm:px-10 py-6 flex items-center justify-between mix-blend-difference">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-paper text-xs font-medium tracking-[0.22em]"
      >
        <span className="w-2 h-2 bg-green rounded-full animate-pulse-dot" />
        GREYNAB
      </Link>

      <div className="hidden md:flex gap-9 text-paper text-xs tracking-wide">
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/insights">Insights</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>

      <button
        onClick={() => open()}
        className="bg-green text-ink px-5 py-2.5 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-2 hover:bg-green-glow transition-all duration-component ease-brand mix-blend-normal"
      >
        Start a brief <span>→</span>
      </button>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative py-1.5 opacity-80 hover:opacity-100 transition-opacity duration-micro
                 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-green
                 hover:after:w-full after:transition-all after:duration-component after:ease-brand"
    >
      {children}
    </Link>
  );
}
