import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <Header />

      <main className="container mx-auto py-10 px-6 space-y-12">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">Join</h1>
          <p className="text-gray-600">IYNA Japan に参加して一緒に活動しよう</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-600 ring-1 ring-pink-200">
                  <Calendar className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-2 text-gray-700">
                  サイエンスコミュニケーションイベントの企画・運営
                </p>
              </div>
              <div>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-600 ring-1 ring-pink-200">
                  <Share2 className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-2 text-gray-700">
                  SNSを活用した情報発信
                </p>
              </div>
              <div>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-600 ring-1 ring-pink-200">
                  <Users className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-2 text-gray-700">
                  学生同士での学び合いと交流
                </p>
              </div>
            </div>

            <h3 className="text-lg font-medium">参加方法</h3>
            <p>興味のある方は、以下のフォームからご登録ください。</p>

            {/* 埋め込み（提供側で無効な場合は表示されないことがあります） */}
            {EMBED_URL && (
              <div className="relative w-full overflow-hidden rounded-lg border bg-white">
                <iframe
                  title="IYNA Japan 参加フォーム"
                  src={EMBED_URL}
                  className="w-full h-[1200px]"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                />
              </div>
            )}

            {/* 常に外部フォームも案内（埋め込みが無効でも入力可能に） */}
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
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

      <Footer />
    </>
  );
}
