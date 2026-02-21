import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "IYNA Japan",
  description: "中高生神経科学者のためのコミュニティ、IYNA Japan 公式サイト",
};

const stats = [
  { value: "4,000+", label: "Members" },
  { value: "126+", label: "Countries" },
  { value: "2016", label: "Established" },
];

const activities = [
  {
    title: "コミュニティ形成",
    text: "神経科学に興味を持つ中高生が学びあい、交流できる場を提供します。",
  },
  {
    title: "イベント企画",
    text: "講演会やワークショップなど多彩なイベントを企画・開催しています。",
  },
  {
    title: "学習サポート",
    text: "用語集や記事を通じて、神経科学の基礎知識をわかりやすく提供します。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text content */}
            <div>
              <FadeIn>
                <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-6">
                  International Youth Neuroscience Association
                </p>
              </FadeIn>

              <FadeIn delayMs={100}>
                <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-gray-900 leading-[0.85]">
                  IYNA
                  <br />
                  <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                    Japan
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delayMs={200}>
                <p className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed mt-8">
                  神経科学に興味がある中高生が集まる、
                  <br className="hidden sm:block" />
                  国際的な非営利団体の日本支部です。
                </p>
              </FadeIn>

              {/* Stats */}
              <FadeIn delayMs={300}>
                <div className="flex flex-wrap items-center gap-6 sm:gap-0 mt-12">
                  {stats.map((s, i) => (
                    <div
                      key={s.label}
                      className={
                        i > 0
                          ? "pl-6 sm:pl-10 border-l border-gray-200"
                          : "pr-6 sm:pr-10"
                      }
                    >
                      <p className="text-2xl sm:text-3xl font-mono font-bold text-gray-900 tabular-nums">
                        {s.value}
                      </p>
                      <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400 mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delayMs={400}>
                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/join"
                    className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
                  >
                    参加する&nbsp;&nbsp;→
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right — brain visual */}
            <FadeIn
              className="hidden lg:flex justify-center items-center relative"
              delayMs={300}
            >
              {/* Ambient glow behind image */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)",
                }}
              />
              <Image
                src="/brain_hirameki.png"
                alt="Neuroscience illustration"
                width={420}
                height={420}
                priority
                className="relative drop-shadow-xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Activities — 3-column neural pathway ── */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-12">
              What We Do
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3">
            {activities.map((item, i) => (
              <FadeIn key={item.title} delayMs={i * 120}>
                <div
                  className={[
                    "group relative py-8 md:py-0",
                    i > 0 ? "md:pl-10" : "",
                    i < activities.length - 1 ? "md:pr-10" : "",
                  ].join(" ")}
                >
                  {/* Vertical axon divider (desktop) */}
                  {i > 0 && (
                    <div
                      className="hidden md:block absolute left-0 top-0 bottom-0 w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent, rgba(236, 72, 153, 0.12) 30%, rgba(236, 72, 153, 0.12) 70%, transparent)",
                      }}
                    />
                  )}
                  {/* Horizontal axon divider (mobile) */}
                  {i > 0 && (
                    <div
                      className="md:hidden h-px mb-8"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(236, 72, 153, 0.12), transparent)",
                      }}
                    />
                  )}

                  <span className="text-sm font-mono text-pink-400/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 mt-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-3 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── About — dark neural space ── */}
      <section className="relative py-32 px-6 bg-[#080a1a] overflow-hidden">
        {/* Ambient neural glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(120, 40, 100, 0.1) 0%, transparent 60%)",
          }}
        />

        <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl relative">
          <FadeIn className="order-2 md:order-1 space-y-6">
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-pink-400/40">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              IYNA Japan とは
            </h2>
            <p className="text-white/50 leading-relaxed">
              IYNA（International Youth Neuroscience
              Association）は、次世代の神経科学者にインスピレーションを与えることを目的とした学生主導の非営利団体です。2016年に設立され、現在は
              4,000 名以上のメンバーと 126
              国以上の支部があります。
            </p>
            <p className="text-white/50 leading-relaxed">
              日本支部として、中高生向けの教育活動とコミュニティ運営を行っています。
            </p>
            <Link
              href="/about"
              className="inline-flex text-sm font-mono text-pink-300/60 hover:text-pink-300 transition-colors duration-300"
            >
              もっと見る&nbsp;&nbsp;→
            </Link>
          </FadeIn>

          <FadeIn
            className="order-1 md:order-2 flex justify-center"
            delayMs={200}
          >
            <Image
              src="/brain_hirameki.png"
              alt="Neuroscience illustration"
              width={400}
              height={400}
              className="drop-shadow-[0_0_60px_rgba(236,72,153,0.12)]"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA — synapse pulse ── */}
      <section className="py-28 px-6 bg-[#060818]">
        <FadeIn className="text-center max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            仲間になろう
          </h2>
          <p className="text-white/40 text-lg">
            今すぐメンバーに参加して、神経科学の未来を創ろう。
          </p>
          <div className="pt-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-pink-500 text-white rounded-full hover:bg-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300"
            >
              参加する
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
