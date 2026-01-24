import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((item, idx) => {
              const meta = parseMeta(item.description || "");
              return (
                <FadeIn key={item.title} delayMs={idx * 80}>
                  <Card
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-pink-200/50 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {/* gradient glow */}
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-400/15 via-rose-300/15 to-amber-200/15 opacity-0 group-hover:opacity-100 transition blur-2xl" />
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative space-y-4">
                    {item.imageSrc ? (
                      <div className="relative h-40 w-full">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                          className="object-cover rounded-xl ring-1 ring-gray-200/50"
                          priority={false}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-white/20 to-transparent" />
                      </div>
                    ) : null}

                      {(meta.pm || meta.contributors) ? (
                        <div className="space-y-2">
                          {meta.pm && (
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-pink-200/60 px-3 py-1 text-sm text-gray-800">
                              <User className="w-4 h-4 text-pink-600" />
                              <span className="font-medium">PM</span>
                              <span className="text-gray-700">{meta.pm}</span>
                            </div>
                          )}
                          {meta.contributors && (
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-pink-200/60 px-3 py-1 text-sm text-gray-800">
                              <Users className="w-4 h-4 text-pink-600" />
                              <span className="font-medium">Contributors</span>
                              <span className="text-gray-700">{meta.contributors}</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-700">{item.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
