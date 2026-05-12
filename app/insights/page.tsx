export const metadata = { title: 'Insights — Greynab Creative Studios' };

export default function Insights() {
  return (
    <div className="bg-paper text-ink min-h-screen pt-40 pb-32 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">— Insights</div>
        <h1 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light mb-20 max-w-5xl">
          Notes from the <em className="text-green italic">studio</em>.
        </h1>
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite">
          Coming soon — articles, case studies, and behind-the-scenes from our team.
        </p>
      </div>
    </div>
  );
}
