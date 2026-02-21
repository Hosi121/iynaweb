import { User, Users } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import activities from "../data/activities-list.json";

export const metadata = {
  title: "Activities | IYNA Japan",
  description: "IYNA Japan の活動実績（プロジェクト・企画）",
};

type Activity = {
  title: string;
  description: string;
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
    <main>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-16 px-6 border-b border-gray-100">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              Activities
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              活動実績
            </h1>
          </FadeIn>
          <FadeIn delayMs={200}>
            <p className="text-lg text-gray-500 mt-4">
              IYNA Japan のプロジェクト・企画の記録
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <FadeIn>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-10">
            Projects & Initiatives
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, idx) => {
            const meta = parseMeta(item.description || "");
            return (
              <FadeIn key={item.title} delayMs={idx * 60}>
                <div className="group rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200 hover:shadow-sm">
                  {item.imageSrc && (
                    <div className="relative h-40 w-full bg-gray-50">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {meta.pm || meta.contributors ? (
                      <div className="space-y-1.5">
                        {meta.pm && (
                          <div className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                            <User className="w-3.5 h-3.5 text-pink-400/60" />
                            <span className="font-mono">PM:</span>
                            <span>{meta.pm}</span>
                          </div>
                        )}
                        {meta.contributors && (
                          <div className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                            <Users className="w-3.5 h-3.5 text-pink-400/60" />
                            <span className="font-mono">Contributors:</span>
                            <span>{meta.contributors}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </main>
  );
}
