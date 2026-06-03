import Image from "next/image";

const DMG_URL =
  "https://updates.madebyplume.com/murmur/Murmur-1.2.2-macOS26.3.dmg";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Section 1: Hero */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="mb-8">
          <Image
            src="/icon.png"
            alt="Murmur app icon"
            width={80}
            height={80}
            className="mx-auto rounded-2xl"
            priority
          />
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Speak. It types itself.
        </h1>
        <p className="text-lg sm:text-xl text-[#999] max-w-2xl mx-auto mb-10 leading-relaxed">
          Murmur is a macOS dictation app that gets out of your way. Press a
          key, speak, release&nbsp;&mdash; your words land exactly where
          you&rsquo;re typing.
        </p>
        <a
          href={DMG_URL}
          className="inline-block bg-[#C8845A] hover:bg-[#d9956b] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Download for Mac &mdash; Free Public Beta
        </a>
        <p className="text-sm text-[#666] mt-4">
          macOS 13 or later &middot; Apple Silicon &amp; Intel
        </p>
      </section>

      {/* Section 2: Before/After Demo */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* What you say */}
          <div className="bg-[#111] p-8 md:p-10 md:border-r border-b md:border-b-0 border-white/[0.06]">
            <p className="text-xs font-medium uppercase tracking-widest text-[#666] mb-5">
              What you say
            </p>
            <p className="text-[#777] text-lg leading-relaxed font-light">
              &ldquo;so i was thinking we should probably move the meeting to
              thursday or maybe friday actually thursday works better and also
              remind me to send the proposal before end of day&rdquo;
            </p>
          </div>

          {/* What Murmur delivers */}
          <div className="bg-[#111] p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#666] mb-5">
              What Murmur delivers
            </p>
            <p className="text-white text-lg leading-relaxed">
              &ldquo;I was thinking we should move the meeting to Thursday&nbsp;&mdash;
              actually, Thursday works better. Also, remind me to send the
              proposal before end of day.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How it works */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-[#666] mb-12 text-center">
          How it works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          <Step number={1} title="Hold" description="Press your dictation key" />
          <Step number={2} title="Speak" description="Say whatever's on your mind" />
          <Step
            number={3}
            title="Release"
            description="Text lands exactly where you're typing"
          />
        </div>
      </section>

      {/* Section 4: Two modes */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-[#666] mb-12 text-center">
          Two modes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Local</h3>
            <p className="text-[#999] leading-relaxed">
              Fast, private, offline. Nothing leaves your Mac.
            </p>
          </div>
          <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-3">OpenAI</h3>
            <p className="text-[#999] leading-relaxed">
              More sensitive in noisy environments. Ideal for caf&eacute;s and
              anywhere loud.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Status + Footer CTA */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-lg text-[#999] mb-2">
          Free public beta &middot; Mac only &middot; iOS in progress
        </p>
        <p className="text-sm text-[#666] mb-10">Built by Denver Miller</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DMG_URL}
            className="inline-block bg-[#C8845A] hover:bg-[#d9956b] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Download for Mac
          </a>
          <a
            href="mailto:denver@madebyplume.com"
            className="inline-block border border-white/[0.15] hover:border-white/[0.3] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Send Feedback
          </a>
        </div>
      </section>

      {/* Section 6: Terms of Use */}
      <footer className="w-full max-w-3xl mx-auto px-6 pt-12 pb-16 text-center">
        <p className="text-xs text-[#444] leading-relaxed">
          Murmur is provided free of charge as-is, without warranty of any kind.
          By downloading and using Murmur, you agree that Denver Miller III
          shall not be liable for any damages arising from its use. This
          software is in active development&nbsp;&mdash; use at your own risk.
        </p>
      </footer>
    </main>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="text-sm font-mono text-[#C8845A] mb-3">{number}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-[#999]">{description}</p>
    </div>
  );
}
