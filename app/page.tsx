'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useBriefBuilder } from '@/components/BriefBuilderProvider';

// Lazy-load the WebGL G so first paint is fast (brief §6 perf budget)
const GCharacter = dynamic(() => import('@/components/GCharacter'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  const { open } = useBriefBuilder();

  return (
    <>
      {/* ━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen bg-ink text-paper px-6 sm:px-10 pt-32 pb-24 overflow-hidden">
        {/* The G as 3D scene, right side */}
        <div className="absolute right-0 top-1/4 w-full md:w-[55%] h-[70%] z-0 opacity-90">
          <GCharacter className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-3.5 mb-10 font-mono text-[11px] tracking-[0.25em] uppercase text-paper/55"
          >
            <span className="w-12 h-px bg-green" />
            Creative Studios · Est. 2014
          </motion.div>

          {/* The headline */}
          <h1 className="font-display text-[clamp(56px,11vw,170px)] leading-[0.92] tracking-[-0.035em] font-light max-w-[1400px]">
            <Reveal delay={0.5}>We create</Reveal>{' '}
            <Reveal delay={0.65}>what</Reveal>{' '}
            <Reveal delay={0.8}>
              <em className="text-green font-light not-italic">echoes</em>
            </Reveal>
            <br />
            <Reveal delay={0.95}>
              <span className="text-paper/35 italic font-light">beyond the screen.</span>
            </Reveal>
          </h1>

          {/* Bottom row: sub + actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <p className="text-base md:text-lg leading-relaxed max-w-md text-paper/70">
              One studio. Two capabilities. Creative + production for brands that need both
              — campaigns that ship and films that land.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => open()}
                className="bg-green text-ink px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase inline-flex items-center gap-3 hover:bg-green-glow hover:-translate-y-0.5 transition-all duration-component ease-brand"
              >
                Start a brief <span>→</span>
              </button>
              <Link
                href="#showreel"
                className="border border-paper/25 text-paper px-7 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:border-paper hover:bg-paper/5 transition-all duration-component ease-brand"
              >
                Watch reel
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip — cities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-10 left-6 right-6 sm:left-10 sm:right-10 flex justify-between items-end font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 z-10"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-green" />
            Scroll to explore
          </div>
          <div className="hidden sm:block">
            Riyadh · Beirut · Jeddah · Dubai · Dammam
          </div>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━ MANIFESTO ━━━━━━━━━━━━━━━ */}
      <section className="bg-paper px-6 sm:px-10 py-32 sm:py-48">
        <div className="max-w-[1400px] mx-auto">
          <SectionTag num="01" label="The proposition" />
          <h2 className="font-display text-[clamp(36px,5.5vw,84px)] leading-[1.02] tracking-[-0.025em] font-light max-w-[1300px]">
            Most agencies <span className="line-through decoration-green decoration-4">choose</span>{' '}
            a lane.<br />
            We run <em className="text-green font-light">both</em> — creative and production,<br />
            end-to-end or shoulder-to-shoulder.
          </h2>

          {/* Stats — brief §5.1 stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-5 mt-32 border-t border-ink/10">
            <Stat num="10" suffix="+" label="Years" />
            <Stat num="15M" suffix="+" label="Views earned" />
            <Stat num="16" label="Services" />
            <Stat num="47" label="Productions" />
            <Stat num="65" label="Client brands" />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ FEATURED WORK ━━━━━━━━━━━━━━━ */}
      <section className="bg-ink text-paper px-6 sm:px-10 py-32 sm:py-48">
        <div className="max-w-[1400px] mx-auto">
          <SectionTag num="02" label="Selected work" onDark />
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-24">
            <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-[1.02] tracking-[-0.025em] font-light max-w-2xl">
              Work that <em className="text-green font-light">moved numbers</em>.<br />
              Not metrics that <em className="text-paper/40 font-light not-italic">looked good</em>.
            </h2>
            <Link
              href="/work"
              className="font-mono text-[11px] tracking-[0.25em] uppercase text-green inline-flex items-center gap-2.5 pb-1.5 border-b border-green self-start"
            >
              View all 47 →
            </Link>
          </div>

          {/* Work tiles — 2-column Lusion-style with offset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
            <WorkCard
              src="/assets/work/red-sea.jpg"
              tags={['PRODUCTION', 'AERIAL', '4K']}
              title="Red Sea Global"
              href="/work/red-sea"
            />
            <WorkCard
              src="/assets/work/bujairi.jpg"
              tags={['CREATIVE', 'RAMADAN', 'CAMPAIGN']}
              title="Bujairi Terrace"
              href="/work/bujairi"
              offset
            />
            <WorkCard
              src="/assets/work/saib.jpg"
              tags={['BOTH', 'COMMERCIAL']}
              title="SAIB Commercial"
              href="/work/saib"
            />
            <WorkCard
              src="/assets/work/al-muhaidib.jpg"
              tags={['PRODUCTION', 'DOCUMENTARY']}
              title="Al Muhaidib Group"
              href="/work/al-muhaidib"
              offset
            />
            <WorkCard
              src="/assets/work/jazean.jpg"
              tags={['CREATIVE', 'TOURISM', 'FILM']}
              title="Jazean × AlUla"
              href="/work/jazean"
            />
            <WorkCard
              src="/assets/work/al-khafji.jpg"
              tags={['PRODUCTION', 'CORPORATE']}
              title="Al Khafji"
              href="/work/al-khafji"
              offset
            />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ APPROACH (huge type) ━━━━━━━━━━━━━━━ */}
      <section className="bg-paper px-6 sm:px-10 py-40 sm:py-56">
        <div className="max-w-[1700px] mx-auto">
          <SectionTag num="03" label="Our approach" />
          <h2 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light">
            We don't chase trends. We build{' '}
            <em className="text-green italic">work that lasts</em>.
          </h2>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ SERVICES LIST (typographic) ━━━━━━━━━━━━━━━ */}
      <section className="bg-ink text-paper px-6 sm:px-10 py-32 sm:py-48">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 pb-20 border-b border-paper/15">
            <SectionTag num="04" label="Services" onDark noMargin />
            <p className="font-display text-[clamp(28px,3vw,48px)] leading-[1.1] font-light max-w-2xl">
              Sixteen capabilities, <em className="text-green font-light italic">two practices</em>,
              one studio.
            </p>
          </div>
          <ServiceRow num="01" name="Brand Identity" cats="CREATIVE · STRATEGY" />
          <ServiceRow num="02" name="Content & Copywriting" cats="CREATIVE" />
          <ServiceRow num="03" name="Social Media Strategy" cats="CREATIVE · PERFORMANCE" />
          <ServiceRow num="04" name="Performance Marketing" cats="CREATIVE · MEDIA" italic />
          <ServiceRow num="05" name="Media Planning" cats="CREATIVE · MEDIA" />
          <ServiceRow num="06" name="Film Production" cats="PRODUCTION · DIRECTION" italic />
          <ServiceRow num="07" name="Documentary" cats="PRODUCTION" />
          <ServiceRow num="08" name="Commercial / TVC" cats="PRODUCTION" italic />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ TRUSTED BY ━━━━━━━━━━━━━━━ */}
      <section className="bg-paper px-6 sm:px-10 py-32 sm:py-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite">
              <span className="text-green text-sm">65</span>&nbsp;&nbsp;Brands have trusted us
            </span>
            <span className="flex-1 h-px bg-ink/10" />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 border-l border-t border-ink/10">
            {[
              ['red-sea-global.webp', 'Red Sea Global'],
              ['pif.jpg', 'PIF'],
              ['al-rajhi.png', 'Al Rajhi'],
              ['diriyah.png', 'Diriyah'],
              ['mea.jpg', 'MEA'],
              ['bvlgari.jpg', 'Bvlgari'],
              ['dior.png', 'Dior'],
              ['samsung.png', 'Samsung'],
              ['four-seasons.png', 'Four Seasons'],
              ['byd.png', 'BYD'],
              ['sfc.png', 'SFC'],
              ['antara.png', 'Antara'],
            ].map(([src, alt]) => (
              <div
                key={src}
                className="aspect-[2/1] border-r border-b border-ink/10 flex items-center justify-center p-6 hover:bg-green/5 transition-colors duration-component"
              >
                <Image
                  src={`/assets/logos/${src}`}
                  alt={alt}
                  width={100}
                  height={40}
                  className="max-h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-component grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ FINAL CTA ━━━━━━━━━━━━━━━ */}
      <section className="relative bg-ink text-paper px-6 sm:px-10 py-40 sm:py-56 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display italic font-light leading-none text-[30vw] text-green/5 whitespace-nowrap select-none">
            echoes
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.95] tracking-[-0.03em] font-light mb-12">
            Tell us where<br />
            <em className="text-green italic font-light">you're stuck</em>.<br />
            We'll tell you how we'd help.
          </h2>
          <p className="text-base sm:text-lg text-paper/65 max-w-xl mx-auto leading-relaxed mb-14">
            60 seconds. No "let's hop on a call" trap. We respond within 4 hours during business —
            or 24 hours outside.
          </p>
          <button
            onClick={() => open()}
            className="bg-green text-ink px-10 py-5 rounded-full text-sm font-medium tracking-wider uppercase inline-flex items-center gap-3 hover:bg-green-glow hover:-translate-y-1 transition-all duration-component ease-brand"
          >
            Start a brief <span>→</span>
          </button>
        </div>
      </section>
    </>
  );
}

// ━━━━━━━━━━━━━━━ Sub-components ━━━━━━━━━━━━━━━

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.08em' }}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease: [0.2, 0.7, 0.2, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function SectionTag({
  num,
  label,
  onDark = false,
  noMargin = false,
}: {
  num: string;
  label: string;
  onDark?: boolean;
  noMargin?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3.5 font-mono text-[11px] tracking-[0.25em] uppercase ${
        onDark ? 'text-paper/50' : 'text-ink/50'
      } ${noMargin ? '' : 'mb-12'}`}
    >
      <span className="w-12 h-px bg-green" />
      <span className="text-green">{num}</span>
      &nbsp;/&nbsp; {label}
    </div>
  );
}

function Stat({ num, suffix, label }: { num: string; suffix?: string; label: string }) {
  return (
    <div className="p-8 md:p-12 border-r border-b border-ink/10 last:border-r-0 md:last:border-r-0">
      <div className="font-display text-5xl md:text-7xl leading-none tracking-[-0.03em] font-light">
        {num}
        {suffix && <span className="text-green">{suffix}</span>}
      </div>
      <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/50 mt-4">
        {label}
      </div>
    </div>
  );
}

function WorkCard({
  src,
  tags,
  title,
  href,
  offset = false,
}: {
  src: string;
  tags: string[];
  title: string;
  href: string;
  offset?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block group ${offset ? 'md:mt-32' : ''}`}
      data-cursor-hover
    >
      <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
        <Image
          src={src}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-1000 ease-brand group-hover:scale-105"
        />
      </div>
      <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-paper/60 mb-3">
        {tags.map((t, i) => (
          <span key={t}>
            {t}
            {i < tags.length - 1 && <span className="text-paper/30"> · </span>}
          </span>
        ))}
      </div>
      <h3 className="font-display text-[clamp(28px,3.2vw,52px)] leading-[1.05] tracking-[-0.02em] font-normal">
        {title}
      </h3>
    </Link>
  );
}

function ServiceRow({
  num,
  name,
  cats,
  italic = false,
}: {
  num: string;
  name: string;
  cats: string;
  italic?: boolean;
}) {
  return (
    <Link
      href="/services"
      className="grid grid-cols-[40px_1fr_auto_auto] sm:grid-cols-[60px_1fr_auto_auto] gap-6 sm:gap-10 items-center py-8 border-b border-paper/15 transition-all duration-component ease-brand hover:pl-6 group"
    >
      <span className="font-mono text-xs tracking-[0.15em] opacity-50">{num}</span>
      <span className={`font-display text-[clamp(28px,3.5vw,56px)] leading-tight tracking-[-0.02em] font-light group-hover:text-green transition-colors duration-component ${italic ? 'italic' : ''}`}>
        {name}
      </span>
      <span className="hidden sm:inline font-mono text-[11px] tracking-[0.15em] uppercase opacity-50">
        {cats}
      </span>
      <span className="w-12 h-12 border border-paper/30 rounded-full flex items-center justify-center group-hover:bg-green group-hover:border-green group-hover:text-ink group-hover:-rotate-45 transition-all duration-component ease-brand">
        →
      </span>
    </Link>
  );
}
