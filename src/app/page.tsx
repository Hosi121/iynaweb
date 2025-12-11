import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, BookOpen } from "lucide-react";

export const metadata = {
  title: "IYNA Japan",
  description: "中高生神経科学者のためのコミュニティ、IYNA Japan 公式サイト",
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero セクション */}
      <section
        id="hero"
        className="relative isolate flex items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-amber-100"
      >
        {/* 背景の装飾 SVG */}
        <svg
          className="absolute -z-10 top-32 left-0 w-[120%] h-auto opacity-30 blur-3xl"
          viewBox="0 0 600 600"
          aria-hidden
          focusable="false"
        >
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FDB4BF" />
              <stop offset="100%" stopColor="#FCE7F3" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#grad)" />
        </svg>

        <div className="container mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.15] text-gray-900 drop-shadow-md">
            中高生神経科学者、<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">集まれ！</span>
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed md:leading-loose max-w-3xl mx-auto text-gray-800/90">
            IYNA Japan は中高生の国際的な非営利団体です。日本最大級の中高生神経科学コミュニティーを共に築きましょう。
          </p>
          <div className="flex flex-col sm:inline-flex sm:flex-row justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-pink-400 text-pink-700 hover:bg-pink-100/60 backdrop-blur-md"
            >
              <Link href="/about">About</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg"
            >
              <Link href="/join">参加する</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature セクション */}
      <section id="features" className="bg-white py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16 text-pink-800 tracking-tight">
            私たちの活動
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                Icon: Users,
                title: "コミュニティ形成",
                text: "神経科学に興味を持つ中高生が学びあい、交流できる場を提供します。",
              },
              {
                Icon: Calendar,
                title: "イベント企画",
                text: "講演会やワークショップなど多彩なイベントを企画・開催しています。",
              },
              {
                Icon: BookOpen,
                title: "学習サポート",
                text: "用語集や記事を通じて、神経科学の基礎知識をわかりやすく提供します。",
              },
            ].map(({ Icon, title, text }) => (
              <Card
                key={title}
                className="group relative overflow-hidden rounded-2xl border-0 bg-pink-50/60 backdrop-blur-sm ring-1 ring-inset ring-pink-200/40 transition shadow-sm hover:shadow-lg"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-fuchsia-400/30 to-pink-200/30 opacity-0 group-hover:opacity-100 transition" />
                <CardContent className="relative flex flex-col items-center text-center p-8 space-y-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200">
                    <Icon className="w-8 h-8 text-pink-600" />
                  </span>
                  <h3 className="text-xl font-medium text-pink-800">{title}</h3>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About セクション */}
      <section id="about" className="relative isolate py-24 px-6 bg-pink-50">
        <div className="absolute inset-0 -z-10 bg-[url('/brain-bg.svg')] bg-contain bg-center opacity-10" />
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 max-w-5xl">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-semibold text-pink-800">IYNA Japan とは</h2>
            <p className="text-gray-800 leading-relaxed">
              IYNA（International Youth Neuroscience Association）は、次世代の神経科学者にインスピレーションを与えることを目的とした学生主導の非営利団体です。2016年に設立され、現在は 4,000 名以上のメンバーと 126 国以上の支部があります。
            </p>
            <p className="text-gray-800 leading-relaxed">
              日本支部として、中高生向けの教育活動とコミュニティ運営を行っています。
            </p>
            <Button asChild variant="ghost" className="text-pink-700 hover:bg-pink-100/40">
              <Link href="/about">もっと見る →</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            {/* 任意のイラスト / 画像を配置 */}
            <Image
              src="/brain_hirameki.png"
              alt="Neuroscience illustration"
              width={400}
              height={400}
              className="drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Call to Action セクション */}
      <section
        id="cta"
        className="relative isolate flex items-center justify-center py-24 px-6 bg-gradient-to-r from-pink-200 via-rose-100 to-amber-100 text-pink-900">
        <svg
          className="absolute -z-10 w-full h-full inset-0 opacity-20 mix-blend-overlay"
          preserveAspectRatio="none"
          viewBox="0 0 800 400"
          aria-hidden
        >
          <defs>
            <linearGradient id="waves" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 C150 200 350 0 800 100 L800 400 L0 400 Z"
            fill="url(#waves)"
          />
        </svg>
        <div className="text-center space-y-6 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight drop-shadow-lg">
            仲間になろう
          </h2>
          <p className="text-lg md:text-xl drop-shadow-sm">
            今すぐメンバーに参加して、神経科学の未来を創ろう！
          </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-50 shadow-md"
            >
              <Link href="/join">参加する</Link>
            </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
