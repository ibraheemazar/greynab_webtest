'use client';

import { useBriefBuilder } from '@/components/BriefBuilderProvider';

export default function Contact() {
  const { open } = useBriefBuilder();

  return (
    <div className="bg-paper text-ink min-h-screen pt-40 pb-32 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">— Contact</div>
        <h1 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light mb-20 max-w-5xl">
          Three ways to <em className="text-green italic">start</em>.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brief Builder */}
          <div className="space-y-6 pt-8 border-t-2 border-ink">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-green">01 · Brief us</div>
            <h2 className="font-display text-4xl font-light leading-tight">60-second brief</h2>
            <p className="text-graphite leading-relaxed">
              Five quick questions. We respond within 4 hours during business — or 24 hours outside.
            </p>
            <button
              onClick={() => open()}
              className="text-sm font-medium tracking-wider uppercase border-b-2 border-green pb-1 hover:text-green transition-colors"
            >
              Start a brief →
            </button>
          </div>

          {/* Direct email */}
          <div className="space-y-6 pt-8 border-t-2 border-ink">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-green">02 · Email</div>
            <h2 className="font-display text-4xl font-light leading-tight">Direct lines</h2>
            <ul className="space-y-3 text-graphite">
              <li><a href="mailto:business@greynab.com" className="hover:text-ink transition-colors"><strong className="text-ink">business@</strong>greynab.com<br /><span className="text-sm">New business · RFPs</span></a></li>
              <li><a href="mailto:hello@greynab.com" className="hover:text-ink transition-colors"><strong className="text-ink">hello@</strong>greynab.com<br /><span className="text-sm">General enquiries</span></a></li>
              <li><a href="mailto:careers@greynab.com" className="hover:text-ink transition-colors"><strong className="text-ink">careers@</strong>greynab.com<br /><span className="text-sm">Open roles · portfolios</span></a></li>
            </ul>
          </div>

          {/* Book a call */}
          <div className="space-y-6 pt-8 border-t-2 border-ink">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-green">03 · Book</div>
            <h2 className="font-display text-4xl font-light leading-tight">A 20-minute call</h2>
            <p className="text-graphite leading-relaxed">
              For executives who'd rather talk it through. Pick a slot.
            </p>
            <span className="text-sm font-medium tracking-wider uppercase border-b-2 border-ink/30 pb-1 opacity-60">
              Calendar coming soon
            </span>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-32 pt-12 border-t border-ink/10">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">— Offices</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 font-mono text-sm">
            <div><strong className="text-green block mb-2">RIYADH</strong>Saudi Arabia</div>
            <div><strong className="text-green block mb-2">BEIRUT</strong>Lebanon</div>
            <div><strong className="text-green block mb-2">JEDDAH</strong>Saudi Arabia</div>
            <div><strong className="text-green block mb-2">DUBAI</strong>UAE</div>
            <div><strong className="text-green block mb-2">DAMMAM</strong>Saudi Arabia</div>
          </div>
        </div>
      </div>
    </div>
  );
}
