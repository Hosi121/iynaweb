import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competition | IYNA Japan",
  description:
    "Neuroinnovation Research Ideathon (NRI) は、中高生が神経科学を活用した斬新なアイデアを発表するコンテストです。",
};

export default function CompetitionPage() {
  return (
      <main className="container mx-auto px-6 py-12 space-y-16">

        <div className="container">
            <div className="hero-placeholder">
                <Image
                  src="/competition/images/title.png"
                  alt="NRI タイトルビジュアル"
                  width={657}
                  height={215}
                  priority
                />
            </div>

            <div className="closed-announcement">
                <Image
                  src="/competition/images/competition-closed-2025.png"
                  alt="2025年度の開催は終了いたしました。たくさんのご応募ありがとうございました。2026年度もどうぞよろしくお願いいたします。"
                  width={960}
                  height={540}
                  priority
                />
            </div>
        </div>
      </main>
  );
}
