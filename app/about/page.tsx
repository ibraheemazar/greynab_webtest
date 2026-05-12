export const metadata = { title: 'About — Greynab Creative Studios' };

export default function About() {
  return (
    <div className="bg-paper text-ink min-h-screen pt-40 pb-32 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">— About</div>
        <h1 className="font-display text-[clamp(48px,8vw,144px)] leading-[0.95] tracking-[-0.035em] font-light mb-20 max-w-5xl">
          One studio. <em className="text-green italic">Two capabilities</em>.<br />
          Built over a decade.
        </h1>
        <div className="max-w-3xl space-y-6 text-lg md:text-xl text-graphite leading-relaxed">
          <p>
            Greynab is a MENA-rooted, globally-coded creative studio. Founded in 2014,
            we work across brand creative, campaign development, performance media, social,
            events, and full film and photo production.
          </p>
          <p>
            Sometimes we run end-to-end. Sometimes we're the production team for another agency's
            creative. Sometimes another agency produces what we create. The model is flexible
            because the work demands it.
          </p>
          <p>
            65 clients. 47 productions. Five cities. One studio.
          </p>
        </div>
      </div>
    </div>
  );
}
