import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./competition.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competition | IYNA Japan",
  description:
    "Neuroinnovation Research Ideathon (NRI) は、中高生が神経科学を活用した斬新なアイデアを発表するコンテストです。",
};

export default function CompetitionPage() {
  return (
    <Layout>
      <Header />

      <main className="container mx-auto px-6 py-12 space-y-16">
        
        <div className={`${styles.heroPlaceholder} flex items-center justify-center font-bold text-xl`}>
          [ NRI Title Image Placeholder ]
        </div>

        {/* About */}
        <div className={`${styles.sectionBanner} ${styles.bannerRed}`}>
          <span className={styles.jpTitle}>大会概要</span>
          <span className={styles.enTitle}>About NRI</span>
        </div>

        <section className="max-w-3xl mx-auto space-y-4 text-lg">
          <p>
            NRI は <span className="text-red-500 font-bold">中高生が神経科学を活用した斬新なアイデアを発表するコンテスト</span> です。
          </p>
          <p>
            評価点は <span className={styles.highlight}>創造性・実用性・現実性</span>
          </p>
          <p className="font-bold text-blue-800">
            製品・サービス・教育・医療・テクノロジーなど多様な分野での課題解決を目指します。
          </p>
        </section>

        {/* Mission */}
        <div className={`${styles.sectionBanner} ${styles.bannerRed}`}>
          <span className={styles.jpTitle}>私たちのミッション</span>
          <span className={styles.enTitle}>Our Mission</span>
        </div>

        <section className="max-w-3xl mx-auto space-y-4">
          <p className="text-2xl font-bold text-red-500 text-center">
            「神経科学をより身近に」
          </p>
          <p>
            神経科学への関心を喚起し、次世代の研究者を育成することを目的としています。
          </p>
        </section>

        {/* Entry */}
        <div className={`${styles.sectionBanner} ${styles.bannerRed}`}>
          <span className={styles.jpTitle}>応募</span>
          <span className={styles.enTitle}>Entry</span>
        </div>

        <section className="text-center space-y-6">
          <p className="text-xl font-bold text-red-500">募集期間</p>
          <p className="text-lg">2025年12月12日(金) ~ 2026年2月15日(日)</p>

          <div className="flex justify-center">
            <Link href="http://example.com" className={styles.roundButton}>
              募集要項はこちら
              <span className={styles.icon}>›</span>
            </Link>
          </div>
        </section>

        {/* Judges */}
        <div className={`${styles.sectionBanner} ${styles.bannerRed}`}>
          <span className={styles.jpTitle}>審査員</span>
          <span className={styles.enTitle}>Judges</span>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-center">
          {[
            "藤井 直敬 先生",
            "波田野 琢 先生",
            "奥村 哲 先生",
            "長田 貴宏 先生",
          ].map((name) => (
            <div key={name}>
              <div className={styles.circleImg}>Photo</div>
              <p className="font-bold mt-3">{name}</p>
            </div>
          ))}
        </section>

        {/* Keynote */}
        <section className="bg-blue-900 text-white py-16 space-y-10">
          <div className={`${styles.sectionBanner} ${styles.bannerBlue}`}>
            <span className={styles.jpTitle}>基調講演</span>
            <span className={styles.enTitle}>Keynote Speech</span>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className={styles.bracketBox}>
              <span className="text-yellow-200">パーキンソン病</span>の原因究明に挑む
            </div>

            <div className={styles.circleImgKeynote}>Photo</div>

            <h2 className="text-3xl font-bold">服部 信孝 先生</h2>
          </div>
        </section>

        {/* Contact */}
        <div className={`${styles.sectionBanner} ${styles.bannerRed}`}>
          <span className={styles.jpTitle}>お問い合わせ</span>
          <span className={styles.enTitle}>Contact</span>
        </div>

        <p className="text-center text-lg font-bold text-blue-600">
          iynajapan2024@gmail.com
        </p>
      </main>

      <Footer />
    </Layout>
  );
}
