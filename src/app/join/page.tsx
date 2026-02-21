import Link from "next/link";
import { Icons } from "@/components/icons";
import { Calendar, Share2, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Join | IYNA Japan",
  description: "IYNA Japan への参加・アドバイザー募集ページ",
};

const activityItems = [
  {
    Icon: Calendar,
    text: "サイエンスコミュニケーションイベントの企画・運営",
  },
  {
    Icon: Share2,
    text: "SNSを活用した情報発信",
  },
  {
    Icon: Users,
    text: "学生同士での学び合いと交流",
  },
];

export default function JoinPage() {
  const EMBED_URL = process.env.NEXT_PUBLIC_JOIN_FORM_EMBED_URL;
  const FORM_URL =
    process.env.NEXT_PUBLIC_JOIN_FORM_URL ||
    "https://forms.gle/EjsxHpSGE3DtJGvw8";

  return (
    <main>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-16 px-6 border-b border-gray-100">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              Join
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Join IYNA Japan
            </h1>
          </FadeIn>
          <FadeIn delayMs={200}>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl">
              参加して、一緒に神経科学コミュニティを広げよう
            </p>
          </FadeIn>
          <FadeIn delayMs={300}>
            <div className="mt-8">
              <Link
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 active:bg-gray-700 transition-all duration-300 outline-none"
              >
                参加フォームを開く
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* ── Community Member Recruitment ── */}
        <section>
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              Community
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              コミュニティーメンバー募集
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              IYNA Japan
              のビジョンを共有し、一緒に活動を盛り上げてくれるメンバーを募集しています！
              神経科学やサイエンスコミュニケーションに興味のある方、大歓迎です。
            </p>
          </FadeIn>

          <FadeIn delayMs={100}>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mt-12 mb-6">
              活動内容
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3">
            {activityItems.map(({ Icon, text }, i) => (
              <FadeIn key={i} delayMs={i * 100}>
                <div
                  className={[
                    "relative py-6 md:py-0",
                    i > 0 ? "md:pl-8" : "",
                    i < activityItems.length - 1 ? "md:pr-8" : "",
                  ].join(" ")}
                >
                  {i > 0 && (
                    <div
                      className="hidden md:block absolute left-0 top-0 bottom-0 w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent, rgba(236, 72, 153, 0.12) 30%, rgba(236, 72, 153, 0.12) 70%, transparent)",
                      }}
                    />
                  )}
                  {i > 0 && (
                    <div
                      className="md:hidden h-px mb-6"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(236, 72, 153, 0.12), transparent)",
                      }}
                    />
                  )}
                  <Icon className="w-5 h-5 text-pink-400/60 mb-3" />
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Form */}
          <div className="mt-16 space-y-6">
            <FadeIn>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
                参加方法
              </p>
              <p className="text-gray-600 mb-6">
                興味のある方は、以下のフォームからご登録ください。
              </p>
            </FadeIn>

            {EMBED_URL && (
              <FadeIn delayMs={100}>
                <div className="rounded-xl border border-gray-100 overflow-hidden bg-white">
                  <iframe
                    title="IYNA Japan 参加フォーム"
                    src={EMBED_URL}
                    className="w-full h-[1200px]"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  />
                </div>
              </FadeIn>
            )}

            <FadeIn delayMs={200}>
              <div className="flex items-center gap-4">
                <Link
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 active:bg-gray-700 transition-all duration-300 outline-none"
                >
                  <Share2 className="w-4 h-4" />
                  別タブでフォームを開く
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Advisor Recruitment ── */}
        <section className="relative py-16 px-8 sm:px-12 rounded-xl bg-[#080a1a] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(120, 40, 100, 0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative space-y-4">
            <FadeIn>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 mb-3">
                For Researchers
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Advisor 募集
              </h2>
            </FadeIn>
            <FadeIn delayMs={100}>
              <p className="text-white/50 leading-relaxed max-w-2xl">
                私たちの活動をサポートしていただけるアドバイザーを募集しています。
                記事やコンテンツに関するファクトチェックや研究のアドバイスを通じて、
                中高生の神経科学への理解を深め、活動をさらに盛り上げていただきたいと思っています。
              </p>
            </FadeIn>
            <FadeIn delayMs={200}>
              <p className="text-white/40 text-sm mt-4">
                ご興味がある方は、以下のメールアドレスにご連絡ください。
              </p>
              <a
                href="mailto:iynajapan2024@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a1a] rounded outline-none transition-colors duration-300 mt-3"
              >
                <Icons.mail className="w-4 h-4" />
                iynajapan2024@gmail.com
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}
