import Link from 'next/link';
import { notFound } from 'next/navigation';

const SERVICES: Record<string, { name: string; cap: string; blurb: string }> = {
  'brand-identity': { name: 'Brand Identity', cap: 'Creative · Strategy', blurb: 'Brand systems that scale across every surface — film, packaging, digital, retail. Built to last 10+ years, not 10+ months.' },
  'content-copy': { name: 'Content & Copywriting', cap: 'Creative', blurb: 'Editorial-grade brand voice across long-form, social, scripts, and retail. Strategy-led, never decorative.' },
  'social': { name: 'Social Media Strategy', cap: 'Creative · Performance', blurb: 'Content frameworks designed for organic reach and measurable conversion. Platform-native, never templated.' },
  'performance': { name: 'Performance Marketing', cap: 'Creative · Media', blurb: 'Paid media that compounds — creative iteration, audience research, measurement, ongoing optimization.' },
  'media-planning': { name: 'Media Planning', cap: 'Creative · Media', blurb: 'Channel architecture for brands that need integrated reach — broadcast, digital, OOH, social, retail.' },
  'film-production': { name: 'Film Production', cap: 'Production · Direction', blurb: 'End-to-end film production. Concept to delivery. Crew, kit, post, sound — in-house.' },
  'creative-development': { name: 'Creative Development', cap: 'Both', blurb: 'From kernel idea to shooting script. The most demanding part of any campaign, and where great work is decided.' },
  'event-coverage': { name: 'Event Coverage', cap: 'Production', blurb: 'Live event capture and same-day edits. Multi-cam, broadcast-quality, with sponsor-ready cuts.' },
};

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = SERVICES[params.slug];
  if (!s) notFound();

  return (
    <div className="bg-paper text-ink min-h-screen pt-40 pb-32 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-green mb-10">
          {s.cap}
        </div>
        <h1 className="font-display text-[clamp(56px,10vw,160px)] leading-[0.92] tracking-[-0.035em] font-light mb-16">
          {s.name}
        </h1>
        <p className="font-display text-2xl md:text-3xl leading-[1.3] tracking-tight font-light text-graphite max-w-3xl mb-20">
          {s.blurb}
        </p>
        <Link
          href="/contact"
          className="bg-green text-ink px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase inline-flex items-center gap-3 hover:bg-green-glow hover:-translate-y-0.5 transition-all duration-component ease-brand"
        >
          Start a brief →
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}
