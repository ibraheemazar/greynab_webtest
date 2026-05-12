import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Placeholder data — Phase B will fetch from Sanity
const WORKS: Record<string, {
  title: string; client: string; capability: string; industry: string;
  hero: string; description: string; metrics: { label: string; value: string }[];
}> = {
  'red-sea': {
    title: 'Red Sea Global', client: 'Red Sea Global', capability: 'Production', industry: 'Hospitality',
    hero: '/assets/work/red-sea.jpg',
    description: 'Aerial film for the destination launch. 4M+ views in week one.',
    metrics: [
      { label: 'Views in week 1', value: '4M+' },
      { label: 'Channels', value: '12' },
      { label: 'Reach', value: '8.5M' },
    ],
  },
  'bujairi': {
    title: 'Bujairi Terrace', client: 'Bujairi Terrace', capability: 'Creative', industry: 'F&B',
    hero: '/assets/work/bujairi.jpg',
    description: 'Full Ramadan campaign — film, social, OOH.',
    metrics: [
      { label: 'Impressions', value: '12M' },
      { label: 'Engagement rate', value: '8.4%' },
      { label: 'Footfall lift', value: '+34%' },
    ],
  },
  'saib': {
    title: 'SAIB Commercial', client: 'SAIB', capability: 'Both', industry: 'Finance',
    hero: '/assets/work/saib.jpg',
    description: 'Commercial film + full rollout.',
    metrics: [{ label: 'Views', value: '6.2M' }, { label: 'CTR', value: '3.1%' }, { label: 'App downloads', value: '+47%' }],
  },
  'al-muhaidib': {
    title: 'Al Muhaidib Group', client: 'Al Muhaidib', capability: 'Production', industry: 'Corporate',
    hero: '/assets/work/al-muhaidib.jpg',
    description: '75-year family business documentary.',
    metrics: [{ label: 'Duration', value: '24 min' }, { label: 'Cities', value: '6' }, { label: 'Awards', value: '2' }],
  },
  'jazean': {
    title: 'Jazean × AlUla', client: 'Jazean', capability: 'Creative', industry: 'Tourism',
    hero: '/assets/work/jazean.jpg',
    description: 'Tourism narrative film telling the AlUla story.',
    metrics: [{ label: 'Views', value: '3.8M' }, { label: 'Markets', value: '8' }, { label: 'Bookings lift', value: '+22%' }],
  },
  'al-khafji': {
    title: 'Al Khafji', client: 'Al Khafji', capability: 'Production', industry: 'Corporate',
    hero: '/assets/work/al-khafji.jpg',
    description: 'Corporate film capturing operations and people.',
    metrics: [{ label: 'Locations', value: '4' }, { label: 'Crew', value: '18' }, { label: 'Days', value: '12' }],
  },
  'long-chim': {
    title: 'Long Chim · Diriyah', client: 'Long Chim', capability: 'Production', industry: 'F&B',
    hero: '/assets/work/long-chim.jpg',
    description: 'Restaurant launch film for Diriyah.',
    metrics: [{ label: 'Format', value: '60s · 30s · 15s' }, { label: 'Reach', value: '2.4M' }, { label: 'Booking conversion', value: '+18%' }],
  },
  'assouline': {
    title: 'Assouline · Diriyah', client: 'Assouline', capability: 'Both', industry: 'Luxury Retail',
    hero: '/assets/work/assouline.jpg',
    description: 'Luxury retail experience and brand world build.',
    metrics: [{ label: 'PR mentions', value: '47' }, { label: 'Press tier 1', value: '8' }, { label: 'Footfall', value: '+62%' }],
  },
};

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = WORKS[params.slug];
  if (!work) notFound();

  return (
    <article className="bg-paper text-ink">
      {/* Hero */}
      <div className="relative h-screen min-h-[600px] overflow-hidden bg-ink">
        <Image
          src={work.hero}
          alt={work.title}
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/80" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 text-paper">
          <div className="max-w-[1400px] mx-auto">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/70 mb-6">
              {work.capability} · {work.industry}
            </div>
            <h1 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light max-w-5xl">
              {work.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Metrics — brief §3 move 2 section 2 */}
      <section className="py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {work.metrics.map((m) => (
            <div key={m.label} className="bg-paper p-12 text-center">
              <div className="font-display text-7xl md:text-8xl font-light tracking-tight">
                {m.value}
              </div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-graphite mt-6">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">
            — Overview
          </h2>
          <p className="font-display text-2xl md:text-4xl leading-[1.25] tracking-tight font-light">
            {work.description}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-32 px-6 sm:px-10 text-center">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 mb-8">
          — Want results like these
        </p>
        <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-[1] font-light mb-12">
          For{' '}
          <em className="text-green italic">{work.industry.toLowerCase()}</em>
          ?
        </h2>
        <Link
          href="/work"
          className="border border-paper/30 px-8 py-4 rounded-full text-xs tracking-[0.18em] uppercase hover:bg-green hover:border-green hover:text-ink transition-all duration-component ease-brand"
        >
          See all work →
        </Link>
      </section>
    </article>
  );
}

export function generateStaticParams() {
  return Object.keys(WORKS).map((slug) => ({ slug }));
}
