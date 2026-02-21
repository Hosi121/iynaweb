import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import members from "../data/members-list.json";
import { Metadata } from "next";
import { Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "About | IYNA Japan",
  description:
    "IYNA Japanのビジョン、活動内容、そして私たちを支える運営メンバーを紹介します。",
};

interface Member {
  name: string;
  role: string;
  tag?: string[];
  sns?: {
    x?: string;
    note?: string;
    [key: string]: string | undefined;
  };
  imageSrc?: string;
  description?: string;
}

const NoteIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-label="note"
    className={className}
  >
    <path
      d="M4 3h13l3 3v15H4Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M17 3v3h3"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);

function normalizeNoteUrl(raw?: string): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://"))
    return trimmed;
  const id = trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
  return `https://note.com/${id}`;
}

const visionItems = [
  {
    title: "Core Value",
    desc: "神経科学の理解への扉を開く",
  },
  {
    title: "Purpose",
    desc: "日本の中高生が知識にアクセスしやすくする",
  },
  {
    title: "Mission",
    desc: "IYNA Japan をシンクタンクとして育てる",
  },
];

export default function AboutPage() {
  const advisorMembers = (members as Member[]).filter(
    (m) => m.role === "advisor",
  );
  const academicAdvisorMembers = (members as Member[]).filter(
    (m) => m.role === "academic advisor",
  );
  const alumniMembers = (members as Member[]).filter(
    (m) => m.role === "alumni",
  );
  const activeMembers = (members as Member[]).filter(
    (m) =>
      m.role !== "advisor" &&
      m.role !== "alumni" &&
      m.role !== "academic advisor",
  );

  const SnsIcons = ({ sns }: { sns?: Member["sns"] }) => {
    if (!sns) return null;
    const noteUrl = normalizeNoteUrl(sns.note);
    return (
      <div className="flex gap-3 mt-2">
        {sns.x && (
          <Link
            href={sns.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </Link>
        )}
        {noteUrl && (
          <Link
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
          >
            <NoteIcon className="h-4 w-4" />
          </Link>
        )}
      </div>
    );
  };

  const TagList = ({ tag }: { tag?: string[] }) => {
    if (!tag || tag.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tag.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono tracking-wider uppercase bg-gray-100 text-gray-500 rounded px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    );
  };

  const MemberGrid = ({ list, label }: { list: Member[]; label: string }) => (
    <section className="space-y-6">
      <FadeIn>
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400">
          {label}
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((member, i) => (
          <FadeIn key={member.name} delayMs={i * 60}>
            <div className="group rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:border-gray-200 hover:shadow-sm">
              {member.imageSrc && (
                <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-xs font-mono text-gray-400 mt-0.5 mb-2">
                  {member.role}
                </p>
              )}
              <TagList tag={member.tag} />
              <SnsIcons sns={member.sns} />
              {(member.role === "academic advisor" ||
                member.role === "advisor") &&
                member.description && (
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full mt-3"
                  >
                    <AccordionItem value="description" className="border-gray-100">
                      <AccordionTrigger className="text-sm text-gray-500 hover:text-gray-700">
                        詳細
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="whitespace-pre-line text-sm text-gray-600">
                          {member.description}
                        </p>
                        <div className="flex flex-col gap-1 mt-2">
                          {member.sns?.researchmap && (
                            <Link
                              href={member.sns.researchmap}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-pink-500 hover:text-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
                            >
                              Researchmap →
                            </Link>
                          )}
                          {member.sns?.website && (
                            <Link
                              href={member.sns.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-pink-500 hover:text-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
                            >
                              Website →
                            </Link>
                          )}
                          {member.sns?.note && (
                            <Link
                              href={normalizeNoteUrl(member.sns.note) || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-pink-500 hover:text-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
                            >
                              Note →
                            </Link>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );

  return (
    <main>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-16 px-6 border-b border-gray-100">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              About
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              About IYNA Japan
            </h1>
          </FadeIn>
          <FadeIn delayMs={200}>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl">
              中高生による・中高生のための神経科学コミュニティ
            </p>
          </FadeIn>
          <FadeIn delayMs={300}>
            <div className="flex gap-4 mt-8">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 active:bg-pink-700 transition-all duration-300 outline-none"
              >
                仲間になる
              </Link>
              <Link
                href="/activities"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-gray-300 text-gray-700 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:bg-gray-700 transition-all duration-300 outline-none"
              >
                活動実績を見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 space-y-24">
        {/* ── Overview ── */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn className="space-y-5">
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400">
              Overview
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              IYNA Japan とは
            </h2>
            <p className="text-gray-600 leading-relaxed">
              IYNA（International Youth Neuroscience
              Association）は、次世代の神経科学者にインスピレーションを与えることを目的とした、国際的な学生主導の非営利団体です。
            </p>
            <p className="text-gray-600 leading-relaxed">
              2016年に国際脳科学オリンピックの経験者が立ち上げ、現在は4000人以上のメンバーと126国以上の支部があります。IYNA
              Japanは中高生による中高生向けの団体です。
            </p>
            <Link
              href="https://www.youthneuro.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-mono text-pink-500 hover:text-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
            >
              IYNA 本部サイト&nbsp;&nbsp;→
            </Link>
          </FadeIn>
          <FadeIn className="flex justify-center" delayMs={200}>
            <Image
              src="/brain_hirameki.png"
              alt="IYNA Illustration"
              width={400}
              height={400}
              priority
              className="drop-shadow-lg"
            />
          </FadeIn>
        </section>

        {/* ── Vision — numbered neural pathway ── */}
        <section>
          <FadeIn>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 mb-4">
              Vision
            </p>
            <p className="text-gray-500 mb-10">
              日本支部として、大切にしている理念。
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3">
            {visionItems.map((item, i) => (
              <FadeIn key={item.title} delayMs={i * 120}>
                <div
                  className={[
                    "relative py-6 md:py-0",
                    i > 0 ? "md:pl-10" : "",
                    i < visionItems.length - 1 ? "md:pr-10" : "",
                  ].join(" ")}
                >
                  {i > 0 && (
                    <div
                      className="hidden md:block absolute left-0 top-0 bottom-0 w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent, rgba(236, 72, 153, 0.12) 30%, rgba(236, 72, 153, 0.12) 70%, transparent)",
                      }}
                    />
                  )}
                  {i > 0 && (
                    <div
                      className="md:hidden h-px mb-6"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(236, 72, 153, 0.12), transparent)",
                      }}
                    />
                  )}
                  <span className="text-sm font-mono text-pink-400/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Members ── */}
        <MemberGrid list={activeMembers} label="運営メンバー" />

        {advisorMembers.length > 0 && (
          <MemberGrid list={advisorMembers} label="Advisors" />
        )}

        {academicAdvisorMembers.length > 0 && (
          <MemberGrid list={academicAdvisorMembers} label="Academic Advisors" />
        )}

        {alumniMembers.length > 0 && (
          <MemberGrid list={alumniMembers} label="Alumni" />
        )}
      </div>
    </main>
  );
}
