// src/app/brainbee/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";

export const metadata = {
  title: "BrainBee | IYNA Japan",
  description: "脳科学オリンピック挑戦者向けの用語集と読書会情報",
};

export default function BrainBeePage() {

  return (
    <>
      <Header />

      <main className="container mx-auto py-10 px-6 space-y-12">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">脳科学オリンピック 挑戦者へ</h1>
          <p className="text-gray-600">
            BrainBee（脳科学オリンピック）に挑む中高生のための参考資料とコミュニティイベント情報をお届けします。
          </p>
          <img
            src="/challenge.png"
            alt="Challenge"
            className="mt-6 mx-auto max-w-3xl h-auto rounded-lg shadow-lg"
          />
        </section>

        {/* Brain Facts 輪読会 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Brain Facts 輪読会</h2>
          <Card>
            <CardContent className="space-y-4">
              <p>
                最新の脳科学論文やレビューをみんなで読み解くオンライン読書会です。専門家によるイントロダクションの後、
                参加者同士でディスカッションを行い、理解を深めます。
              </p>
              <p>参加希望の方はメールでご連絡ください。</p>
              <div className="flex items-center space-x-4">
                <Link
                  href="mailto:iynajapan2024@gmail.com"
                  aria-label="Email IYNA Japan"
                >
                  <Icons.mail className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://twitter.com/iynajapan"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.twitter className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://instagram.com/iynajapan"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.instagram className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://note.com/iyna_japan"
                  aria-label="Note"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.note className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}
