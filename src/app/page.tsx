import Image from "next/image";

// Single source of truth for the current release. Bump this one value on
// each new version; both download buttons derive their URL from it.
const LATEST_VERSION = "1.2.42";
const DMG_URL = `https://updates.madebyplume.com/murmur/Murmur-${LATEST_VERSION}-macOS26.3.dmg`;

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 blur-[80px] opacity-20 bg-[#C8845A] rounded-full scale-150 pointer-events-none" />
          <Image
            src="/icon.png"
            alt="Murmur"
            width={96}
            height={96}
            className="mx-auto rounded-[22px] shadow-2xl relative z-10"
            priority
          />
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
          Speak.<br className="sm:hidden" /> It types itself.
        </h1>
        <p className="text-lg sm:text-xl text-[#999] max-w-2xl mx-auto mb-10 leading-relaxed">
          Murmur is a native macOS dictation app that lives in your menubar.
          Hold a key, say what you mean, let go. Your words appear wherever
          your cursor is -- cleaned up, punctuated, and private.
          Everything stays on your Mac.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DMG_URL}
            className="inline-flex items-center gap-2 bg-[#C8845A] hover:bg-[#d9956b] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-[#C8845A]/20"
          >
            <AppleIcon />
            Download for Mac
          </a>
        </div>
        <p className="text-sm text-[#555] mt-4">
          Free &middot; macOS 14+ &middot; Apple Silicon
        </p>
      </section>

      {/* ── Before / After ── */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.06]">
          <div className="bg-[#111] p-8 md:p-10 md:border-r border-b md:border-b-0 border-white/[0.06]">
            <p className="text-xs font-medium uppercase tracking-widest text-[#555] mb-5">
              What you say
            </p>
            <p className="text-[#666] text-lg leading-relaxed font-light italic">
              &ldquo;so i was thinking um we should probably move the meeting to
              thursday or maybe friday actually thursday works better period and
              also like remind me to send the proposal before end of day
              exclamation point&rdquo;
            </p>
          </div>
          <div className="bg-[#111] p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#555] mb-5">
              What Murmur types
            </p>
            <p className="text-white text-lg leading-relaxed">
              I was thinking we should move the meeting to Thursday -- actually,
              Thursday works better. Also, remind me to send the proposal before
              end of day!
            </p>
          </div>
        </div>
        <p className="text-center text-sm text-[#444] mt-6">
          Filler words removed &middot; punctuation inserted &middot; self-corrections cleaned
        </p>
      </section>

      {/* ── Pipeline ── */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Under the hood</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1">
          <PipelineStep step="1" label="Record" sub="Microphone" />
          <PipelineStep step="2" label="Transcribe" sub="Whisper (on-device)" />
          <PipelineStep step="3" label="Dictionary" sub="Your corrections" />
          <PipelineStep step="4" label="Punctuate" sub="Spoken commands" />
          <PipelineStep step="5" label="Clean" sub="LLM pass (optional)" />
          <PipelineStep step="6" label="Paste" sub="At your cursor" />
        </div>
        <p className="text-center text-sm text-[#444] mt-6">
          Every step runs locally. No internet required. No data leaves your Mac.
        </p>
      </section>

      {/* ── Two Modes ── */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20">
        <SectionLabel>Two dictation modes</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 group hover:border-[#C8845A]/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <kbd className="px-2.5 py-1 text-xs font-mono bg-[#1a1a1a] border border-white/10 rounded-md text-[#999]">
                Fn
              </kbd>
              <span className="text-sm text-[#555]">hold</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Push to Talk</h3>
            <p className="text-[#888] leading-relaxed">
              Hold your key to record. Release to transcribe and paste. Fast,
              surgical. Ideal for short bursts mid-typing.
            </p>
          </div>
          <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 group hover:border-[#C8845A]/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <kbd className="px-2.5 py-1 text-xs font-mono bg-[#1a1a1a] border border-white/10 rounded-md text-[#999]">
                &#x2325; Space
              </kbd>
              <span className="text-sm text-[#555]">toggle</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Hands-Free</h3>
            <p className="text-[#888] leading-relaxed">
              Press once to start recording, again to stop. Walk around, think
              out loud, dictate long-form without holding anything.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Built for how you actually talk</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Feature
            title="100% local"
            description="Whisper runs on your Mac. Audio never touches a server. No account, no subscription, no telemetry."
          />
          <Feature
            title="Auto-learn dictionary"
            description="Murmur watches your edits. If you correct a word after dictation, it learns the fix for next time."
          />
          <Feature
            title="Verbal corrections"
            description='Say "change tomorrow to Thursday" within 60 seconds and Murmur rewrites the text in place. The correction saves to your dictionary.'
          />
          <Feature
            title="Spoken punctuation"
            description='Say "exclamation point" and get !. Say "new paragraph" and get a line break. Natural punctuation without touching keys.'
          />
          <Feature
            title="Filler removal"
            description='Ums, uhs, and likes are stripped automatically. What lands in your document is what you meant to say.'
          />
          <Feature
            title="iCloud sync"
            description="Your custom dictionary syncs across every Mac via iCloud. Add a word on your laptop, it appears on your desktop."
          />
          <Feature
            title="LLM cleanup"
            description="Optional local LLM pass via Ollama cleans up self-corrections and adds obvious punctuation. 2-second timeout, silent fallback."
          />
          <Feature
            title="Launch at login"
            description="Set it and forget it. Murmur starts with your Mac and waits quietly in the menubar until you need it."
          />
          <Feature
            title="Speech stats"
            description="Track your filler word usage over time. See trends, catch habits, speak more deliberately."
          />
        </div>
      </section>

      {/* ── Spoken Punctuation Table ── */}
      <section className="w-full max-w-3xl mx-auto px-6 py-20">
        <SectionLabel>Speak your punctuation</SectionLabel>
        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
            <PunctuationRow spoken="period" result="." />
            <PunctuationRow spoken="question mark" result="?" />
            <PunctuationRow spoken="exclamation point" result="!" />
            <PunctuationRow spoken="comma" result="," />
            <PunctuationRow spoken="colon" result=":" />
            <PunctuationRow spoken="semicolon" result=";" />
            <PunctuationRow spoken="new line" result="&#x23CE;" />
            <PunctuationRow spoken="new paragraph" result="&#x00B6;" />
            <PunctuationRow spoken="em dash" result="--" />
            <PunctuationRow spoken="ellipsis" result="..." />
            <PunctuationRow spoken="open quote" result="&ldquo;" />
            <PunctuationRow spoken="close quote" result="&rdquo;" />
          </div>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section className="w-full max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#111] border border-white/[0.06] rounded-full px-5 py-2 mb-8">
          <LockIcon />
          <span className="text-sm text-[#888]">Private by architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          No cloud. No account. No tracking.
        </h2>
        <p className="text-lg text-[#888] max-w-xl mx-auto leading-relaxed">
          Murmur uses Apple&apos;s Whisper engine running directly on your Mac&apos;s
          neural engine. Audio is recorded, transcribed, and discarded -- all in
          a fraction of a second. When iCloud sync is enabled, only your
          dictionary word pairs travel through iCloud. Audio never does.
        </p>
      </section>

      {/* ── Requirements ── */}
      <section className="w-full max-w-3xl mx-auto px-6 py-16">
        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">System requirements</h3>
            <ul className="text-[#888] text-sm space-y-1">
              <li>macOS 14 (Sonoma) or later</li>
              <li>Apple Silicon (M1 / M2 / M3 / M4)</li>
              <li>Microphone access + Accessibility permission</li>
            </ul>
          </div>
          <div className="text-left sm:text-right">
            <h3 className="text-lg font-semibold text-white mb-2">Optional</h3>
            <ul className="text-[#888] text-sm space-y-1">
              <li>Ollama for LLM text cleanup</li>
              <li>iCloud for dictionary sync</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Stop typing what you can say.
        </h2>
        <p className="text-lg text-[#888] mb-10">
          Free download. No account required. Works offline.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DMG_URL}
            className="inline-flex items-center gap-2 bg-[#C8845A] hover:bg-[#d9956b] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-[#C8845A]/20"
          >
            <AppleIcon />
            Download for Mac
          </a>
          <a
            href="mailto:denver@madebyplume.com"
            className="inline-block border border-white/[0.15] hover:border-white/[0.3] text-[#ccc] hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Send Feedback
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full max-w-3xl mx-auto px-6 pt-12 pb-16 text-center border-t border-white/[0.06]">
        <p className="text-xs text-[#444] leading-relaxed mb-4">
          Murmur is provided free of charge as-is, without warranty of any kind.
          By downloading and using Murmur, you agree that Denver Miller III
          shall not be liable for any damages arising from its use. This
          software is in active development -- use at your own risk.
        </p>
        <p className="text-xs text-[#333]">
          <a
            href="https://madebyplume.com"
            className="hover:text-[#555] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Plume
          </a>
        </p>
      </footer>
    </main>
  );
}

/* ─── Components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-widest text-[#555] mb-10 text-center">
      {children}
    </p>
  );
}

function PipelineStep({ step, label, sub }: { step: string; label: string; sub: string }) {
  return (
    <div className="bg-[#111] border border-white/[0.04] p-5 text-center first:rounded-tl-xl first:rounded-bl-xl last:rounded-tr-xl last:rounded-br-xl sm:first:rounded-bl-none sm:last:rounded-tr-none [&:nth-child(3)]:sm:rounded-tr-xl [&:nth-child(4)]:sm:rounded-bl-xl md:first:rounded-bl-xl md:last:rounded-tr-xl md:[&:nth-child(3)]:rounded-tr-none md:[&:nth-child(4)]:rounded-bl-none">
      <div className="text-xs font-mono text-[#C8845A] mb-2">{step}</div>
      <div className="text-sm font-semibold text-white mb-1">{label}</div>
      <div className="text-xs text-[#555]">{sub}</div>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#111] border border-white/[0.06] rounded-xl p-6 hover:border-[#C8845A]/15 transition-colors">
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-[#888] leading-relaxed">{description}</p>
    </div>
  );
}

function PunctuationRow({ spoken, result }: { spoken: string; result: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-[#888]">{spoken}</span>
      <span className="text-sm font-mono text-[#C8845A]">{result}</span>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="shrink-0">
      <path d="M11.182 0c.223 1.594-.464 3.2-1.322 4.268-.858 1.068-2.27 1.896-3.636 1.788-.255-1.5.502-3.076 1.322-4.056C8.404.96 9.893.152 11.182 0zM14.574 5.636c-.152.096-2.55 1.488-2.524 4.424.03 3.528 3.094 4.7 3.13 4.712-.024.08-.49 1.684-1.616 3.332-.968 1.424-1.974 2.84-3.558 2.868-1.558.028-2.058-.924-3.84-.924-1.782 0-2.34.896-3.812.952-1.528.056-2.692-1.54-3.672-2.956C.692 14.42-.684 8.88.636 5.276 1.268 3.424 3.116 2.2 4.788 2.172c1.5-.028 2.916 1.012 3.832 1.012.916 0 2.636-1.252 4.44-1.068.756.032 2.878.308 4.24 2.312-.108.068-.726.444-1.208.992-.72.82-1.058 1.82-1.058 1.82z"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C8845A]">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
