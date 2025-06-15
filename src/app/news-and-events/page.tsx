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
            {/* イベント１ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  「脳と人工知能の融合がもたらす未来」池谷裕二×藤井直敬×高校生 対談イベント
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  池谷裕二先生と藤井直敬先生をお招きし、IYNA Japan の高校生 2 名と
                  「脳と人工知能の融合がもたらす未来」をテーマに対談するイベントを開催いたします。
                </p>
                <ul className="list-none space-y-1">
                  <li>
                    <strong>場所：</strong>渋谷スクランブルスクエア15階 渋谷QWS
                  </li>
                  <li>
                    <strong>日時：</strong>4/20 10:30～14:00
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-block text-blue-600 hover:underline"
                >
                  申し込み、詳細はコチラ
                </Link>
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
                <Link
                  href="#"
                  className="inline-block text-blue-600 hover:underline"
                >
                  詳細・申し込みはコチラ
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}