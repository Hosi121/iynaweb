import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
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
      <Header />

      <main className="container mx-auto py-10 px-6 space-y-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">News & Events</h1>
          <p className="text-lg text-gray-600">
            IYNA Japan の活動の最新のニュースを届けます
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">イベント情報</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((ev, idx) => (
              <Card className="overflow-hidden" key={idx}>
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
                    <div className="flex flex-wrap gap-4">
                      {ev.links.map((lk, i) => (
                        <Link
                          key={i}
                          href={lk.href}
                          className="inline-block text-blue-600 hover:underline"
                        >
                          {lk.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
