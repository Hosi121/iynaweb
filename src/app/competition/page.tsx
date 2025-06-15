import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CompetitionPage() {
  return (
    <Layout title="Competition | NRI Ideathon">
      <Header />

      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">Neuroinnovation Research Ideathon</h1>
          <p className="text-lg">
            NRI (Neuroinnovation Research Ideathon) は、神経科学を活用し、中高生の創造的なアイデアを発表するコンテストです。
            評価は知識量ではなく、創造性・実用性・現実性が鍵となります。初開催の今回は、参加者と共に企画を盛り上げ、今後も継続開催し、若者のアイデア発信を支援します！
          </p>
        </section>

        {/* Theme Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2025年度 テーマ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>神経科学を活用して生活をより豊かで快適に</p>
          </CardContent>
        </Card>

        {/* Application Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">応募</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Coming Soon...</p>
          </CardContent>
        </Card>

        {/* Mission Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xl italic">「神経科学をより身近に」</p>
            <p>
              私たちは、神経科学の研究が進むことで、神経変性疾患のメカニズムの解明などにより人々の命や生活の質を向上し、社会全体に大きな利益をもたらすと考えています。
            </p>
            <p>
              そのため、中高生に神経科学への関心を喚起し、次世代の神経科学者を育成する必要があります。
            </p>
            <p>
              また、日本では神経科学に関する正しい知識の普及が不足しており、デマの流布や差別・偏見が引き起こされています。
            </p>
            <p>
              NRI を通じて中高生に神経科学に触れ、正しい知識を学ぶ場を提供します。
            </p>
          </CardContent>
        </Card>

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About NRI</h2>
          <p>
            NRI（Neuroinnovation Research Ideathon）は、神経科学を活用して、中学生から高校生が考えた斬新なアイデアを発表するコンテストです。
            この大会では、知識量ではなく、創造性、実用性、そして現実性が評価される大会です。この大会の最大の特徴は、神経科学の知識を基にしながらも、それを日常生活の課題解決や新しいライフスタイルの提案に応用する点です。
          </p>
          <p>
            参加者は自由な発想で、製品、サービス、教育、医療、テクノロジー、エンターテインメントなど、さまざまな分野で社会をより良くするアイデアを生み出すことが求められます。
            NRIは、「知識を超えた発想力」を引き出し、若い世代の創造力を育むことを目指しています。
          </p>
          <p>
            さらに、NRIは単なるアイデアコンテストにとどまらず、「考える・創る・伝える」というプロセスを通じて、論理的思考力、プレゼンテーション能力、そしてチームワークを養う場でもあります。
            参加者同士が刺激し合い、競い合うことで、より高いレベルのアイデアが生まれることを期待しています。
          </p>
          <p>
            未来を切り開くアイデアをぜひ私たちと共に考え、発信してください。皆さんのご参加を心よりお待ちしています！
          </p>
        </section>

        {/* Contact Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">お問い合わせ</h2>
          <p>ご支援のご連絡やお問い合わせは、以下のメールアドレスまでお願いいたします。</p>
          <Link href="mailto:iynajapan.nri@gmail.com" className="text-blue-600 hover:underline">
            iynajapan.nri@gmail.com
          </Link>
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
