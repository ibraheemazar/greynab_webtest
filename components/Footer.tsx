import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper px-6 sm:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Image
              src="/assets/brand/greynab-logo-white.png"
              alt="Greynab Creative Studios"
              width={160}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-sm text-paper/60 max-w-sm leading-relaxed">
              One studio. Two capabilities. Creative + production for brands that need both.
              KSA · UAE · Lebanon. Est. 2014.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-green mb-5">
              Studio
            </h4>
            <ul className="space-y-3 text-sm text-paper/75">
              <li><FooterLink href="/work">Work</FooterLink></li>
              <li><FooterLink href="/services">Services</FooterLink></li>
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/insights">Insights</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-green mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-paper/75">
              <li><a href="mailto:hello@greynab.com" className="hover:text-paper transition-colors">hello@greynab.com</a></li>
              <li><a href="mailto:business@greynab.com" className="hover:text-paper transition-colors">business@greynab.com</a></li>
              <li><a href="mailto:careers@greynab.com" className="hover:text-paper transition-colors">careers@greynab.com</a></li>
            </ul>
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-green mt-8 mb-5">
              Cities
            </h4>
            <p className="text-sm text-paper/75 leading-relaxed">
              Riyadh · Beirut<br />Jeddah · Dubai<br />Dammam
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-paper/10 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono tracking-[0.15em] uppercase text-paper/40">
          <span>© {new Date().getFullYear()} Greynab Creative Studios</span>
          <span>Built in-house</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-paper transition-colors duration-micro">
      {children}
    </Link>
  );
}
