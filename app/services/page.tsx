import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Greynab Creative Studios',
  description: '14 ways we work. Pick the closest fit.',
};

const services = [
  { slug: 'brand-identity', name: 'Brand Identity', img: '/assets/icons/brand-identity.jpg', cap: 'Creative' },
  { slug: 'content-copy', name: 'Content & Copywriting', img: '/assets/icons/copywriting.jpg', cap: 'Creative' },
  { slug: 'social', name: 'Social Media Strategy', img: '/assets/icons/social.jpg', cap: 'Creative' },
  { slug: 'performance', name: 'Performance Marketing', img: '/assets/icons/performance.jpg', cap: 'Creative' },
  { slug: 'media-planning', name: 'Media Planning', img: '/assets/icons/media-planning.jpg', cap: 'Creative' },
  { slug: 'film-production', name: 'Film Production', img: '/assets/icons/film.jpg', cap: 'Production' },
  { slug: 'creative-development', name: 'Creative Development', img: '/assets/icons/development.jpg', cap: 'Both' },
  { slug: 'event-coverage', name: 'Event Coverage', img: '/assets/icons/event.jpg', cap: 'Production' },
];

export default function ServicesPage() {
  return (
    <div className="bg-paper text-ink min-h-screen pt-32 pb-32 px-6 sm:px-10">
      <div className="max-w-[1700px] mx-auto">
        <div className="mb-24">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">
            — Services
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light max-w-5xl">
            Sixteen ways we work.<br />
            Pick the <em className="text-green italic">closest fit</em>.
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block group"
              data-cursor-hover
            >
              <div className="aspect-[3/2] overflow-hidden bg-mist rounded-lg mb-5 relative">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-brand group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-paper/90 backdrop-blur text-[10px] font-mono tracking-[0.15em] uppercase">
                  {s.cap}
                </div>
              </div>
              <h2 className="font-display text-2xl leading-tight tracking-tight font-normal group-hover:text-green transition-colors duration-component">
                {s.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
