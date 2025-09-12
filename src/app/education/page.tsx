import Parser from "rss-parser";
import { load } from "cheerio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | IYNA Japan",
  description:
    "神経科学に関する解説記事や学習リソースを紹介します。",
};

export const revalidate = 3600; // 1時間ごとに再検証

const parser = new Parser();

type Article = {
  title: string;
  link: string;
  contentSnippet?: string;
  enclosure?: { url?: string };
};

export default async function EducationPage() {
  // 1) RSS を取得
  const RSS_URL = "https://note.com/iyna_japan/rss";
  let feed;
  try {
    feed = await parser.parseURL(RSS_URL);
  } catch (e) {
    console.error("RSS parse error:", e);
    feed = { items: [] as Article[] };
  }
  const rawArticles = feed.items?.slice(0, 6) as Article[];

  // 2) 各記事ページから og:image を取得
  const articles = await Promise.all(
    rawArticles.map(async (item) => {
      // まず RSS の enclosure に画像があればそちらを優先
      let imageUrl = item.enclosure?.url ?? "";

      if (!imageUrl) {
        try {
          const html = await fetch(item.link).then((res) => res.text());
          const $ = load(html);
          imageUrl = $('meta[property="og:image"]').attr("content") || "";
        } catch (err) {
          console.warn(`Failed to fetch image for ${item.link}`, err);
        }
      }

      return {
        title: item.title,
        link: item.link!,
        snippet: item.contentSnippet,
        imageUrl,
      };
    })
  );

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 px-6 space-y-12">
        {/* Dynamic Hero */}
        <section className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 py-14 text-center">
          <svg
            className="absolute -z-10 top-6 left-1/2 -translate-x-1/2 w-[120%] h-auto opacity-30 blur-3xl"
            viewBox="0 0 600 600"
            aria-hidden
          >
            <defs>
              <radialGradient id="grad-edu" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FDB4BF" />
                <stop offset="100%" stopColor="#FCE7F3" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#grad-edu)" />
          </svg>
          <svg
            className="absolute -z-10 bottom-0 left-0 w-full h-20 opacity-30"
            preserveAspectRatio="none"
            viewBox="0 0 800 200"
            aria-hidden
          >
            <path d="M0 100 C150 200 350 0 800 100 L800 200 L0 200 Z" fill="#ffffff" />
          </svg>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
            Education
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            神経科学を学ぶためのリソースと記事を紹介します
          </p>
        </section>
        {/* 学習リソース専用（イベント企画は活動実績ページへ移設） */}

        {/* ――― Articles (Note RSS + Header Image) ――― */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, idx) => {
              const { title, link, snippet, imageUrl } = a;
              return (
                <FadeIn key={link} delayMs={idx * 80}>
                  <Card
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-pink-200/50 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-400/15 via-rose-300/15 to-amber-200/15 opacity-0 group-hover:opacity-100 transition blur-2xl" />
                    <CardHeader>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {imageUrl && (
                        <div className="relative mb-2">
                          <img
                            src={imageUrl}
                            alt={`Header for ${title}`}
                            className="w-full h-40 object-cover rounded-xl ring-1 ring-gray-200/50"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-white/20 to-transparent" />
                        </div>
                      )}
                      {snippet && <p className="line-clamp-3 mb-3 text-gray-700">{snippet}</p>}
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-pink-200/60 px-3 py-1 text-sm text-gray-800 hover:shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4 text-pink-600" /> 記事を読む
                      </Link>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* ――― 関連リンク セクション ――― */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">関連リンク</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn>
              <Card className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-pink-200/50 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5">
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-400/15 via-rose-300/15 to-amber-200/15 opacity-0 group-hover:opacity-100 transition blur-2xl" />
                <CardHeader>
                  <CardTitle>関連リンク</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 mb-3 text-gray-700">
                    脳科学に関する情報を提供するウェブサイトです。
                  </p>
                  <Link
                    href="https://www.braincentury.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-pink-200/60 px-3 py-1 text-sm text-gray-800 hover:shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-pink-600" /> 脳の世紀を見る
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
