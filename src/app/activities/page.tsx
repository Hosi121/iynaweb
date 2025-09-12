import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import activities from "../data/activities-list.json";

export const metadata = {
  title: "Activities | IYNA Japan",
  description: "IYNA Japan の活動実績（プロジェクト・企画）",
};

type Activity = {
  title: string;
  description: string; // "PM: ...<br>Contributors: ..." 形式
  imageSrc?: string;
};

function parseMeta(desc: string): { pm?: string; contributors?: string } {
  const text = desc.replace(/<br\s*\/?/gi, "\n");
  const pmMatch = text.match(/PM:\s*(.*)/i);
  const contribMatch = text.match(/Contributors:\s*(.*)/i);
  return {
    pm: pmMatch?.[1]?.trim(),
    contributors: contribMatch?.[1]?.trim(),
  };
}

export default function ActivitiesPage() {
  const list = activities as Activity[];

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 px-6 space-y-12">
        {/* dynamic hero */}
        <section className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 py-14 text-center">
          <svg
            className="absolute -z-10 top-6 left-1/2 -translate-x-1/2 w-[120%] h-auto opacity-30 blur-3xl"
            viewBox="0 0 600 600"
            aria-hidden
          >
            <defs>
              <radialGradient id="grad-acts" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FDB4BF" />
                <stop offset="100%" stopColor="#FCE7F3" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#grad-acts)" />
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
            活動実績
          </h1>
          <p className="mt-3 text-lg text-gray-700">IYNA Japan のプロジェクト・企画の記録</p>
          <div className="mt-6 flex justify-center">
            <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white shadow-md">
              <Link href="/join">仲間に加わる</Link>
            </Button>
          </div>
          <div className="pointer-events-none absolute -top-6 right-8 h-24 w-24 rounded-full bg-pink-300/50 blur-2xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-6 left-8 h-24 w-24 rounded-full bg-amber-200/50 blur-2xl animate-pulse" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Projects & Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {list.map((item) => {
              const meta = parseMeta(item.description || "");
              return (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {item.imageSrc && (
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded"
                      />
                    )}

                    {(meta.pm || meta.contributors) ? (
                      <ul className="text-sm text-gray-700 space-y-1">
                        {meta.pm && (
                          <li>
                            <strong>PM：</strong>
                            {meta.pm}
                          </li>
                        )}
                        {meta.contributors && (
                          <li>
                            <strong>Contributors：</strong>
                            {meta.contributors}
                          </li>
                        )}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-700">{item.description}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
