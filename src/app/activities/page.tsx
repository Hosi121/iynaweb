import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import activities from "../data/events-list.json";

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
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">活動実績</h1>
          <p className="text-gray-600">IYNA Japan のプロジェクト・企画の記録</p>
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

