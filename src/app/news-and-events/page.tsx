import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import posts from "@/data/post.json";

export const metadata = {
  title: "News & Events | IYNA Japan",
  description: "IYNA Japan の最新ニュースとイベント情報をお届けします",
};

type LinkItem = { label: string; href: string };
type EventItem = {
  title: string;
  description: string;
  links?: LinkItem[];
  location?: string;
  datetime?: string;
};

export default function NewsAndEventsPage() {
  const events = (posts as { events: EventItem[] }).events;

  return (
    <>
      <main className="container mx-auto py-10 px-6 space-y-16">
        {/* Dynamic Hero */}
        <section className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 py-14 text-center">
          <svg
            className="absolute -z-10 top-6 left-1/2 -translate-x-1/2 w-[120%] h-auto opacity-30 blur-3xl"
            viewBox="0 0 600 600"
            aria-hidden
          >
            <defs>
              <radialGradient id="grad-news" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FDB4BF" />
                <stop offset="100%" stopColor="#FCE7F3" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#grad-news)" />
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
            News & Events
          </h1>
          <p className="mt-3 text-lg text-gray-700">IYNA Japan の最新情報</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">イベント情報</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((ev, idx) => (
              <FadeIn key={idx} delayMs={idx * 80}>
                <Card
                  className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-pink-200/50 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-400/15 via-rose-300/15 to-amber-200/15 opacity-0 group-hover:opacity-100 transition blur-2xl" />
                  <CardHeader>
                    <CardTitle className="text-lg">{ev.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="whitespace-pre-line">{ev.description}</p>

                  {(ev.location || ev.datetime) && (
                    <ul className="list-none space-y-1">
                      {ev.location && (
                        <li>
                          <strong>場所：</strong>
                          {ev.location}
                        </li>
                      )}
                      {ev.datetime && (
                        <li>
                          <strong>日時：</strong>
                          {ev.datetime}
                        </li>
                      )}
                    </ul>
                  )}

                    {ev.links && ev.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {ev.links.map((lk, i) => (
                          <Link
                            key={i}
                            href={lk.href}
                            className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-pink-200/60 px-3 py-1 text-sm text-gray-800 hover:shadow-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 text-pink-600" />
                            {lk.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
