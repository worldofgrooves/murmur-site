import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Murmur",
  description: "Terms of Use for Murmur, the macOS dictation app.",
};

type Section = {
  n: number;
  title: string;
  paragraphs?: string[];
  list?: string[];
};

const SECTIONS: Section[] = [
  {
    n: 1,
    title: "Overview",
    paragraphs: [
      'Murmur is a free macOS dictation app provided by Denver Miller III ("I", "me") as-is during public beta. By downloading and using Murmur, you agree to these terms.',
    ],
  },
  {
    n: 2,
    title: "Free Beta",
    paragraphs: [
      "Murmur is currently free during its public beta period. I reserve the right to change pricing, features, or availability at any time without notice.",
    ],
  },
  {
    n: 3,
    title: "No Warranty",
    paragraphs: [
      "Murmur is provided without warranty of any kind. I make no guarantees about accuracy, reliability, or fitness for any particular purpose. Use it at your own risk.",
    ],
  },
  {
    n: 4,
    title: "Your Data",
    list: [
      "Local Whisper mode: all audio is processed on your device. Nothing leaves your Mac.",
      "Groq and OpenAI modes: audio is sent to third-party APIs (Groq and OpenAI respectively) using your own API key. Your use of those services is subject to their own terms and privacy policies.",
      "Murmur does not collect, store, or transmit your dictation content.",
      "Optional anonymous telemetry (opt-in only) collects aggregate usage statistics with no personally identifiable information.",
    ],
  },
  {
    n: 5,
    title: "Your API Keys",
    paragraphs: [
      "When you use Groq or OpenAI engines, you provide your own API key. You are responsible for your own API usage and any associated costs.",
    ],
  },
  {
    n: 6,
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Denver Miller III shall not be liable for any damages arising from your use of Murmur.",
    ],
  },
  {
    n: 7,
    title: "Changes",
    paragraphs: [
      "I may update these terms at any time. Continued use of Murmur after changes constitutes acceptance.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <section className="w-full max-w-3xl mx-auto px-6 pt-24 pb-16">
        <Link
          href="/"
          className="text-sm text-[#666] hover:text-[#C8845A] transition-colors"
        >
          ← Back to Murmur
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-2">
          Terms of Use
        </h1>
        <p className="text-sm text-[#666] mb-12">Last updated: June 2026</p>

        {SECTIONS.map((section) => (
          <div key={section.n} className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">
              {section.n}. {section.title}
            </h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i} className="text-[#999] leading-relaxed">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="list-disc pl-5 space-y-2 text-[#999] leading-relaxed">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-2">8. Contact</h2>
          <p className="text-[#999] leading-relaxed">
            Questions? Email{" "}
            <a
              href="mailto:denver@madebyplume.com"
              className="text-[#C8845A] hover:text-[#d9956b] transition-colors"
            >
              denver@madebyplume.com
            </a>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full max-w-3xl mx-auto px-6 pt-12 pb-16 text-center border-t border-white/[0.06]">
        <p className="text-xs text-[#333] mb-3">
          © 2026 Denver Miller III. All rights reserved.
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
          <span className="mx-2">·</span>
          <Link href="/" className="hover:text-[#555] transition-colors">
            Home
          </Link>
        </p>
      </footer>
    </main>
  );
}
