import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

import members from "../data/members-list.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | IYNA Japan",
  description:
    "IYNA Japanのビジョン、活動内容、そして私たちを支える運営メンバーを紹介します。日本の中高生と共に神経科学の未来を創造します。",
};

interface Member {
  name: string;
  role: string;
  imageSrc?: string;
  description?: string;
}

export default function AboutPage() {
  const alumniMembers = members.filter((member: Member) => member.role === "alumni");
  const activeMembers = members.filter((member: Member) => member.role !== "alumni");

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
            IYNAについての詳細は<Link href="https://www.youthneuro.org/" target="_blank" rel="noopener noreferrer">こちら</Link>
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
              <ul className="space-y-2">
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
            {activeMembers.map((member: Member) => (
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
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="desc">
                      <AccordionTrigger>詳細を見る</AccordionTrigger>
                      <AccordionContent>
                        {member.description}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {alumniMembers.map((member: Member) => (
              <Card key={member.name} className="cursor-pointer">
                <CardContent>
                  <h3 className="text-lg font-medium">{member.name}</h3>
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
