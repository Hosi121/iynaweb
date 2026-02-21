import Link from "next/link";
import { ExternalLink, MapPin, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";
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
    <main>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-16 px-6 border-b border-gray-100">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              News & Events
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              News & Events
            </h1>
          </FadeIn>
          <FadeIn delayMs={200}>
            <p className="text-lg text-gray-500 mt-4">
              IYNA Japan の最新情報
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <FadeIn>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-10">
            Upcoming & Recent
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev, idx) => (
            <FadeIn key={idx} delayMs={idx * 60}>
              <div className="group rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                  {ev.title}
                </h3>
                <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">
                  {ev.description}
                </p>

                {(ev.location || ev.datetime) && (
                  <div className="space-y-1.5">
                    {ev.location && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{ev.location}</span>
                      </div>
                    )}
                    {ev.datetime && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{ev.datetime}</span>
                      </div>
                    )}
                  </div>
                )}

                {ev.links && ev.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {ev.links.map((lk, i) => (
                      <Link
                        key={i}
                        href={lk.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-500 hover:text-pink-600 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {lk.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
