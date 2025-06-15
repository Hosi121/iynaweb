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
        className="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-900 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            中高生神経科学者、集まれ！
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            IYNA Japan は中高生の国際的な非営利団体です。日本一大きい中高生の神経科学コミュニティーを作ります！
          </p>
          <div className="space-x-4">
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-pink-300 text-pink-700 hover:bg-pink-200/30"
              >
                About
              </Button>
            </Link>
            <Link href="/join">
              <Button
                size="lg"
                className="bg-pink-600 text-white hover:bg-pink-700"
              >
                参加する
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature セクション */}
      <section id="features" className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-pink-800">
          私たちの活動
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border border-pink-100">
            <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-medium mb-2 text-pink-800">
                コミュニティ形成
              </h3>
              <p className="text-gray-700">
                神経科学に興味を持つ中高生が学びあい、交流できる場を提供します。
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border border-pink-100">
            <Calendar className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-medium mb-2 text-pink-800">
                イベント企画
              </h3>
              <p className="text-gray-700">
                講演会やワークショップなど多彩なイベントを企画・開催しています。
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border border-pink-100">
            <BookOpen className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-medium mb-2 text-pink-800">
                学習サポート
              </h3>
              <p className="text-gray-700">
                用語集や記事を通じて、神経科学の基礎知識をわかりやすく提供します。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About セクション */}
      <section id="about" className="bg-pink-50 py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Card className="border border-pink-100">
            <CardContent className="space-y-4">
              <h2 className="text-3xl font-semibold text-pink-800">
                IYNA Japan とは
              </h2>
              <p className="text-gray-800">
                IYNA（International Youth Neuroscience Association）は、次世代の神経科学者にインスピレーションを与えることを目的とした学生主導の非営利団体です。2016年に設立され、現在は4000人以上のメンバーと126国以上の支部があります。
              </p>
              <p className="text-gray-800">
                日本支部として、中高生向けの教育活動とコミュニティ運営を行っています。
              </p>
              <div>
                <Link href="/about">
                  <Button
                    variant="ghost"
                    className="text-pink-700 hover:bg-pink-200/30"
                  >
                    もっと見る →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action セクション */}
      <section
        id="cta"
        className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-900 py-20 px-6 flex items-center justify-center"
      >
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">仲間になろう</h2>
          <p className="text-lg">
            今すぐメンバーに参加して、神経科学の未来を創ろう！
          </p>
          <Link href="/join">
            <Button
              size="lg"
              className="bg-pink-600 text-white hover:bg-pink-700"
            >
              参加する
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}