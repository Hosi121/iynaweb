import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

import members from "../data/members-list.json";
import { Metadata } from "next";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import * as React from "react";

export const metadata: Metadata = {
  title: "About | IYNA Japan",
  description:
    "IYNA Japanのビジョン、活動内容、そして私たちを支える運営メンバーを紹介します。日本の中高生と共に神経科学の未来を創造します。",
};

interface Member {
  name: string;
  role: string;
  tag?: string[]; // ex. ["運営", "デザイン"]
  sns?: {
    x?: string; // https://x.com/...
    instagram?: string; // https://instagram.com/...
    linkedin?: string; // https://linkedin.com/in/...
    note?: string; // https://note.com/... or @id (see below)
    [key: string]: string | undefined; // future‑proof
  };
  imageSrc?: string;
  description?: string;
}

/* -------------------------------------------------------------
 * NoteIcon: lightweight inline SVG approximating note.com logo.
 * Uses currentColor so you can recolor via Tailwind (e.g., text-emerald-500).
 * Replace with an imported asset (/public/icons/note.svg) if you prefer the official brand mark.
 * ----------------------------------------------------------- */
const NoteIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-label="note"
    className={className}
  >
    {/* outer page with folded corner */}
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

/* normalizeNoteUrl: accept either full URL or plain @id / id and normalize to https://note.com/<id> */
function normalizeNoteUrl(raw?: string): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  // accept leading @
  const id = trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
  return `https://note.com/${id}`;
}

export default function AboutPage() {
  const alumniMembers = (members as Member[]).filter((member) => member.role === "alumni");
  const activeMembers = (members as Member[]).filter((member) => member.role !== "alumni");

  const SnsIcons = ({ sns }: { sns?: Member["sns"] }) => {
    if (!sns) return null;
    const noteUrl = normalizeNoteUrl(sns.note);
    return (
      <div className="flex gap-3 mt-2">
        {sns.x && (
          <Link href={sns.x} target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
          </Link>
        )}
        {sns.instagram && (
          <Link href={sns.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
          </Link>
        )}
        {sns.linkedin && (
          <Link href={sns.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
        )}
        {noteUrl && (
          <Link href={noteUrl} target="_blank" rel="noopener noreferrer">
            <NoteIcon className="h-5 w-5" />
          </Link>
        )}
      </div>
    );
  };

  const TagList = ({ tag }: { tag?: string[] }) => {
    if (!tag || tag.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-1 mb-2">
        {tag.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <Header />
      <main className="container mx-auto px-6 py-12 space-y-12">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">About IYNA Japan</h1>
          <p>
            IYNA（International Youth Neuroscience Association）は、次世代の神経科学者にインスピレーションを与えることを
            目的とした、国際的な学生主導の非営利団体です。
          </p>
          <p>
            IYNA は2016年に国際脳科学オリンピックの経験者が立ち上げ、現在は4000人以上のメンバーと126国以上の支部があります。
          </p>
          <p>
            IYNAについての詳細は
            <Link
              href="https://www.youthneuro.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </Link>
          </p>
          <p>
            IYNA Japanは中高生による中高生向けの団体です。神経科学への興味を共有するコミュニティーであると共に、
            神経科学の教育活動にも励んでおります。
          </p>
        </section>

        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                私たちIYNA Japanは、IYNA本部とは異なり、日本支部として活動する際に大切にしている理念があります。
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Core Value (価値観):</strong> 神経科学の理解への扉を開く
                </li>
                <li>
                  <strong>Purpose (存在意義):</strong> 日本の中高生が神経科学の知識にアクセスしやすくする
                </li>
                <li>
                  <strong>Mission (使命):</strong> IYNA Japanを神経科学に関するシンクタンクとして育て上げる
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">運営メンバー紹介</h2>
          <p>IYNA Japan コミュニティーの運営として活動しているメンバーを紹介します！</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {activeMembers.map((member) => (
              <Card key={member.name} className="cursor-pointer">
                <CardContent>
                  {member.imageSrc && (
                    <div className="relative h-72 w-full mb-4">
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{member.role}</p>
                  <TagList tag={member.tag} />
                  <SnsIcons sns={member.sns} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {alumniMembers.map((member) => (
              <Card key={member.name} className="cursor-pointer">
                <CardContent>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <TagList tag={member.tag} />
                  <SnsIcons sns={member.sns} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
