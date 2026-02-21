import Parser from "rss-parser";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | IYNA Japan",
  description: "神経科学に関する解説記事や学習リソースを紹介します。",
};

const REVALIDATE_SECONDS = 3600;
export const revalidate = 3600;
const RSS_URL = "https://note.com/iyna_japan/rss";
const FETCH_TIMEOUT_MS = 5000;
const OG_IMAGE_PATTERN =
  /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i;
const OG_IMAGE_PATTERN_FALLBACK =
  /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["'][^>]*>/i;

const parser = new Parser();

type Article = {
  title: string;
  link: string;
  contentSnippet?: string;
  enclosure?: { url?: string };
};

export default async function EducationPage() {
  let feed;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const response = await fetch(RSS_URL, {
        signal: controller.signal,
        next: { revalidate: REVALIDATE_SECONDS },
      });
      if (!response.ok)
        throw new Error(`RSS request failed: ${response.status}`);
      const xml = await response.text();
      feed = await parser.parseString(xml);
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (e) {
    console.error("RSS parse error:", e);
    feed = { items: [] as Article[] };
  }
  const rawArticles = feed.items?.slice(0, 6) as Article[];

  const articles = await Promise.all(
    rawArticles.map(async (item) => {
      let imageUrl = item.enclosure?.url ?? "";
      if (!imageUrl) {
        try {
          if (item.link) {
            const controller = new AbortController();
            const timeoutId = setTimeout(
              () => controller.abort(),
              FETCH_TIMEOUT_MS,
            );
            try {
              const response = await fetch(item.link, {
                signal: controller.signal,
                next: { revalidate: REVALIDATE_SECONDS },
              });
              if (!response.ok)
                throw new Error(
                  `Article request failed: ${response.status}`,
                );
              const html = await response.text();
              imageUrl =
                OG_IMAGE_PATTERN.exec(html)?.[1] ??
                OG_IMAGE_PATTERN_FALLBACK.exec(html)?.[1] ??
                "";
            } finally {
              clearTimeout(timeoutId);
            }
          }
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
    }),
  );

  return (
    <main>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-16 px-6 border-b border-gray-100">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              Education
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Education
            </h1>
          </FadeIn>
          <FadeIn delayMs={200}>
            <p className="text-lg text-gray-500 mt-4">
              神経科学を学ぶためのリソースと記事を紹介します
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* ── Articles ── */}
        <section>
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-10">
              Articles
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, idx) => (
              <FadeIn key={a.link} delayMs={idx * 60}>
                <Link
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200 hover:shadow-sm"
                >
                  {a.imageUrl && (
                    <div className="relative aspect-[16/9] bg-gray-50">
                      <Image
                        src={a.imageUrl}
                        alt={`Header for ${a.title}`}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                      {a.title}
                    </h3>
                    {a.snippet && (
                      <p className="text-sm text-gray-500 line-clamp-3">
                        {a.snippet}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-500 mt-2">
                      <ExternalLink className="w-3.5 h-3.5" />
                      記事を読む
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Related Links ── */}
        <section>
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-10">
              Related Links
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <Link
              href="https://www.braincentury.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-sm"
            >
              <div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                  脳の世紀
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  脳科学に関する情報を提供するウェブサイトです。
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-500 shrink-0 ml-4 transition-colors" />
            </Link>
          </FadeIn>
        </section>
      </div>
    </main>
  );
}
