export const metadata = { title: 'Careers — Greynab Creative Studios' };

export default function Careers() {
  return (
    <div className="bg-paper text-ink min-h-screen pt-40 pb-32 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">— Careers</div>
        <h1 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light mb-12 max-w-5xl">
          Build the work that <em className="text-green italic">echoes</em>.
        </h1>
        <p className="text-xl text-graphite max-w-2xl leading-relaxed mb-12">
          We're always interested in conversations with creatives, producers, designers, strategists, and engineers across MENA.
        </p>
        <a
          href="mailto:careers@greynab.com"
          className="bg-green text-ink px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase inline-flex items-center gap-3 hover:bg-green-glow hover:-translate-y-0.5 transition-all duration-component ease-brand"
        >
          Submit your portfolio →
        </a>
      </div>
    </div>
  );
}
