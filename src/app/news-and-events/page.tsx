import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export const metadata = {
  title: "News & Events | IYNA Japan",
  description: "IYNA Japan の最新ニュースとイベント情報をお届けします",
};

export default function NewsAndEventsPage() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-10 px-6 space-y-16">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">News & Events</h1>
          <p className="text-lg text-gray-600">
            IYNA Japan の活動の最新のニュースを届けます
          </p>
        </section>

        {/* イベント情報 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">イベント情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">
                  第1回脳模試開催！
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  脳科学オリンピックに興味をお持ちの方や、脳科学の知識を体系的につけたい方はぜひ腕試しに解いてみてください。
                  7/21（月）20:00~21:00より開始．
                  参加するためにはIYNAのDiscordに参加していただく必要があります．Joinよりfoamをご記入ください．
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://x.com/IYNAJapan/status/1946824955653730733"
                    className="inline-block text-blue-600 hover:underline"
                  >
                    告知ポストを見る
                  </Link>
                </div>
              </CardContent>
              </Card>
            {/* イベント１ */}
                        <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">
                  神経科学学会 脳科学の達人 コラボ企画
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  2025 年開催の日本神経科学大会 市民公開講座「脳科学の達人」にて、IYNA Japan を運営メンバー4人が登壇します。脳科学の達人 x 高校生のディスカッションを行います！                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://neuroscience2025.jnss.org/open_lecture.html"
                    className="inline-block text-blue-600 hover:underline"
                  >
                    公開講座の詳細はこちら
                  </Link>
                  <Link
                    href="https://x.com/iynajapan/status/1940037675752595733"
                    className="inline-block text-blue-600 hover:underline"
                  >
                    告知ポストを見る
                  </Link>
                </div>
              </CardContent>
              </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  「脳と人工知能の融合がもたらす未来」池谷裕二×藤井直敬×高校生 対談イベント
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  池谷裕二先生と藤井直敬先生をお招きし、IYNA Japan
                  の高校生 2 名と「脳と人工知能の融合がもたらす未来」をテーマに対談するイベントを開催いたします。
                </p>
                <ul className="list-none space-y-1">
                  <li>
                    <strong>場所：</strong>渋谷スクランブルスクエア15階 渋谷QWS
                  </li>
                  <li>
                    <strong>日時：</strong>4/20 10:30～14:00
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* イベント２ */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">
                  東大メタバース工学部 コラボ企画
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  東大メタバース工学部ジュニア教育プログラムの
                  「高校生コラボ講座・生命知能と人工知能―脳をリバースエンジニアリングする―」に
                  IYNA Japan の運営メンバー 3 名が座談会・質問コーナーに招待され、参加いたします！
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
