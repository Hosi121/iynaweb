import Link from "next/link";
import { Icons } from "@/components/icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Share2, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Join | IYNA Japan",
  description: "IYNA Japan への参加・アドバイザー募集ページ",
};

export default function JoinPage() {
  const EMBED_URL = process.env.NEXT_PUBLIC_JOIN_FORM_EMBED_URL;
  const FORM_URL =
    process.env.NEXT_PUBLIC_JOIN_FORM_URL ||
    "https://forms.gle/EjsxHpSGE3DtJGvw8";
  return (
    <>
      <main className="container mx-auto py-10 px-6 space-y-12">
        {/* Hero */}
        <section
          className="relative isolate text-center overflow-hidden rounded-2xl bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 py-16"
        >
          {/* dynamic radial glow */}
          <svg
            className="absolute -z-10 top-10 left-1/2 -translate-x-1/2 w-[120%] h-auto opacity-30 blur-3xl"
            viewBox="0 0 600 600"
            aria-hidden
          >
            <defs>
              <radialGradient id="grad-join" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FDB4BF" />
                <stop offset="100%" stopColor="#FCE7F3" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#grad-join)" />
          </svg>
          {/* soft wave overlay */}
          <svg
            className="absolute -z-10 bottom-0 left-0 w-full h-24 opacity-30"
            preserveAspectRatio="none"
            viewBox="0 0 800 200"
            aria-hidden
          >
            <path
              d="M0 100 C150 200 350 0 800 100 L800 200 L0 200 Z"
              fill="#ffffff"
            />
          </svg>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
            Join IYNA Japan
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            参加して、一緒に神経科学コミュニティを広げよう
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white shadow-md">
              <Link href={FORM_URL} target="_blank" rel="noopener noreferrer">
                参加フォームを開く
              </Link>
            </Button>
          </div>
          {/* floating decorations */}
          <div className="pointer-events-none absolute -top-6 right-8 h-24 w-24 rounded-full bg-pink-300/50 blur-2xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-6 left-8 h-24 w-24 rounded-full bg-amber-200/50 blur-2xl animate-pulse" />
        </section>

        {/* コミュニティーメンバー募集 */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl">コミュニティーメンバー募集</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              IYNA Japan のビジョンを共有し、一緒に活動を盛り上げてくれるメンバーを募集しています！
              神経科学やサイエンスコミュニケーションに興味のある方、大歓迎です。
            </p>

            <h3 className="text-lg font-medium">活動内容</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[{
                Icon: Calendar,
                text: "サイエンスコミュニケーションイベントの企画・運営",
              },{
                Icon: Share2,
                text: "SNSを活用した情報発信",
              },{
                Icon: Users,
                text: "学生同士での学び合いと交流",
              }].map(({ Icon, text }, i) => (
                <FadeIn key={i} delayMs={i * 80}>
                  <div
                    className="group relative rounded-xl bg-white/70 backdrop-blur-sm ring-1 ring-gray-200/60 p-6 overflow-hidden transition shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-fuchsia-400/0 via-pink-200/0 to-rose-200/0 opacity-0 group-hover:opacity-100 transition blur-xl" />
                    <div className="relative flex flex-col items-center text-center space-y-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-600 ring-1 ring-pink-200 shadow-sm group-hover:scale-105 transition">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <p className="text-gray-700 leading-relaxed">{text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <h3 className="text-lg font-medium">参加方法</h3>
            <p>興味のある方は、以下のフォームからご登録ください。</p>

            {/* 埋め込み（提供側で無効な場合は表示されないことがあります） */}
            {EMBED_URL && (
              <div className="relative w-full overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm ring-1 ring-pink-200/60 shadow-sm">
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-400/20 via-rose-300/20 to-amber-200/20 blur-2xl" />
                <iframe
                  title="IYNA Japan 参加フォーム"
                  src={EMBED_URL}
                  className="relative w-full h-[1200px]"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                />
              </div>
            )}

            {/* 常に外部フォームも案内（埋め込みが無効でも入力可能に） */}
            <div className="flex items-center gap-3">
              <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white shadow-md">
                <Link href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  <Share2 className="w-5 h-5 mr-2" />
                  別タブでフォームを開く
                </Link>
              </Button>
              {!EMBED_URL && (
                <p className="text-sm text-gray-600">
                  埋め込みは現在無効です。上のボタンから入力してください。
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Advisor 募集 */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl">Advisor 募集</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              私たちの活動をサポートしていただけるアドバイザーを募集しています！
              記事やコンテンツに関するファクトチェックや研究のアドバイスを通じて、
              中高生の神経科学への理解を深め、活動をさらに盛り上げていただきたいと思っています。
            </p>
            <p>ご興味がある方は、以下のメールアドレスにご連絡ください。</p>
            <Link
              href="mailto:iynajapan2024@gmail.com"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <Icons.mail className="w-5 h-5 mr-2" />
              iynajapan2024@gmail.com
            </Link>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
