import events from "../data/events-list.json";
import posts from "../data/posts-list.json";
import Parser from "rss-parser";
import { load } from "cheerio";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <main className="container mx-auto py-8">
        {/* ――― イベント企画 セクション ――― */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">イベント企画</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((e) => (
              <Card key={e.title}>
                <CardHeader>
                  <CardTitle>{e.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={e.imageSrc}
                    alt={e.title}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <CardDescription>{e.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ――― Articles (Note RSS + Header Image) ――― */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(({ title, link, snippet, imageUrl }) => (
              <Card key={link}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={`Header for ${title}`}
                      className="w-full h-40 object-cover rounded mb-2"
                    />
                  )}
                  {snippet && <p className="line-clamp-3 mb-2">{snippet}</p>}
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    記事を読む →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ――― Short Posts ――― */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Short Posts</h2>
          <ul className="space-y-2">
            {posts.map((p, idx) => (
              <li key={idx}>
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
