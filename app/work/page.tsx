import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Greynab Creative Studios',
  description: '47 projects. Pick a brand, an industry, or a capability.',
};

const works = [
  { slug: 'red-sea', title: 'Red Sea Global', tags: ['PRODUCTION', 'AERIAL'], img: '/assets/work/red-sea.jpg' },
  { slug: 'bujairi', title: 'Bujairi Terrace', tags: ['CREATIVE', 'RAMADAN'], img: '/assets/work/bujairi.jpg' },
  { slug: 'saib', title: 'SAIB Commercial', tags: ['BOTH', 'COMMERCIAL'], img: '/assets/work/saib.jpg' },
  { slug: 'al-muhaidib', title: 'Al Muhaidib Group', tags: ['PRODUCTION', 'DOCUMENTARY'], img: '/assets/work/al-muhaidib.jpg' },
  { slug: 'jazean', title: 'Jazean × AlUla', tags: ['CREATIVE', 'FILM'], img: '/assets/work/jazean.jpg' },
  { slug: 'al-khafji', title: 'Al Khafji', tags: ['PRODUCTION'], img: '/assets/work/al-khafji.jpg' },
  { slug: 'long-chim', title: 'Long Chim · Diriyah', tags: ['PRODUCTION', 'F&B'], img: '/assets/work/long-chim.jpg' },
  { slug: 'assouline', title: 'Assouline · Diriyah', tags: ['BOTH', 'LUXURY'], img: '/assets/work/assouline.jpg' },
];

export default function WorkPage() {
  return (
    <div className="bg-paper text-ink min-h-screen pt-32 pb-32 px-6 sm:px-10">
      <div className="max-w-[1700px] mx-auto">
        {/* Hero */}
        <div className="mb-24">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">
            — Work
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light max-w-5xl">
            47 projects.<br />
            Pick a brand, an industry, or a <em className="text-green italic">capability</em>.
          </h1>
        </div>

        {/* Filter bar — placeholder for now */}
        <div className="flex flex-wrap gap-3 pb-12 mb-16 border-b border-ink/10">
          {['All', 'Creative', 'Production', 'Both'].map((f) => (
            <button
              key={f}
              className="px-5 py-2.5 rounded-full text-xs font-mono tracking-[0.15em] uppercase border border-ink/20 hover:border-green hover:bg-green/5 transition-all duration-component"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {works.map((w, i) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className={`block group ${i % 2 === 1 ? 'md:mt-32' : ''}`}
              data-cursor-hover
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={w.img}
                  alt={w.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-brand group-hover:scale-105"
                />
              </div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-graphite mb-3">
                {w.tags.join(' · ')}
              </div>
              <h2 className="font-display text-[clamp(28px,3.2vw,52px)] leading-[1.05] tracking-[-0.02em] font-normal">
                {w.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
