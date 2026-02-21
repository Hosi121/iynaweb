import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import posts from "@/data/post.json";

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

const highlights = [
  {
    title: "脳科学オリンピック",
    desc: "国際脳科学オリンピック（IBB）に向けた日本代表選考の脳模試や学習サポートを提供しています。",
    href: "/competition",
  },
  {
    title: "研究者との対話",
    desc: "第一線の神経科学者を招いた講演会やラボ見学を通じ、最先端の研究に触れる機会を創出しています。",
    href: "/activities",
  },
  {
    title: "記事・教育コンテンツ",
    desc: "noteを中心に、神経科学の基礎から最新トピックまで、中高生にもわかりやすい記事を発信しています。",
    href: "/education",
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
                    className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium border border-gray-300 text-gray-700 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:bg-gray-700 transition-all duration-300 outline-none"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/join"
                    className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 active:bg-pink-700 transition-all duration-300 outline-none"
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
              className="inline-flex text-sm font-mono text-pink-300/60 hover:text-pink-300 focus-visible:text-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a1a] rounded transition-colors duration-300"
            >
              もっと見る&nbsp;&nbsp;→
            </Link>
          </FadeIn>

          <FadeIn
            className="order-1 md:order-2 flex justify-center"
            delayMs={200}
          >
            <Image
              src="/favicon.png"
              alt="IYNA Japan logo"
              width={400}
              height={400}
              className="drop-shadow-[0_0_60px_rgba(236,72,153,0.12)]"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Highlights — what sets us apart ── */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              Highlights
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              IYNA Japan の取り組み
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delayMs={i * 80}>
                <Link
                  href={h.href}
                  className="group block rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 outline-none"
                >
                  <span className="text-sm font-mono text-pink-400/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-pink-600 transition-colors duration-300">
                    {h.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {h.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-500 mt-4 group-hover:gap-2.5 transition-all duration-300">
                    詳しく見る
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Events preview ── */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="container mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
                  News & Events
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  最新情報
                </h2>
              </div>
              <Link
                href="/news-and-events"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-mono text-pink-500 hover:text-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
              >
                すべて見る
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {(posts as { events: { title: string; description: string; location?: string; links?: { label: string; href: string }[] }[] }).events.slice(0, 4).map((ev, i) => (
              <FadeIn key={i} delayMs={i * 60}>
                <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-sm space-y-3">
                  <h3 className="text-base font-bold text-gray-900">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {ev.description}
                  </p>
                  {ev.location && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{ev.location}</span>
                    </div>
                  )}
                  {ev.links && ev.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {ev.links.map((lk, j) => (
                        <Link
                          key={j}
                          href={lk.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-500 hover:text-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {lk.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delayMs={300}>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/news-and-events"
                className="inline-flex items-center gap-1.5 text-sm font-mono text-pink-500 hover:text-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
              >
                すべてのニュースを見る
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
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
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-pink-500 text-white rounded-full hover:bg-white hover:text-pink-600 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060818] active:bg-pink-600 transition-all duration-300 outline-none"
            >
              参加する
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
