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
        
        <div className="container fade-in">
            <div className="hero-placeholder">
                [ NRI Title Image Placeholder ]
            </div>

            <div className="section-banner banner-red">
                <span className="jp-title">大会概要</span>
                <span className="en-title">About NRI</span>
            </div>

            <div className="content-block">
                <p>NRI (Neuroinnovation Research Ideathon) は、<span className="redfont">中高生が神経科学を活用した斬新なアイデアを発表するコンテスト</span>です 。</p>
                <p>評価点は知識ではなく、<span className="highlight">創造性・実用性・現実性</span>。</p>
                <p>神経科学の知識を土台としながら、自由な発想を武器に、<span className="bluefont">製品・サービス・教育・医療・テクノロジー・エンターテインメント</span>など多様な分野での<span className="bluefont">日常生活の課題解決</span>や<span className="bluefont">新しいライフスタイルの提案</span>へと応用するアイデアを募集します! </p>
                <p>NRIは、<span className="redfont">「知識を超えた発想力」</span>を引き出し、若い世代の創造力を育むことを目指しています。</p>
                <p>また、<span className="bluefont">「考える・創る・伝える」</span>というプロセスを通じて、論理的思考力、プレゼンテーション能力、そしてチームワークを養う場でもあります。参加者同士が刺激し合い、競い合うことで、より高いレベルのアイデアが生まれることを期待しています。</p>
                <div style={{textAlign: 'center'}}>
                    <p style={{display: 'inline-block', backgroundColor: '#ff5d5d', color: 'white', fontWeight: 'bold', fontSize: '1.7rem', padding: '2px 10px', margin: '0 3px', borderRadius: '4px'}}>
                        未来を切り開く斬新なアイデアを、自由に考えて発信しましょう！
                    </p>
                </div>
                <p>皆さんのご参加を、心よりお待ちしています！</p>
            </div>

            <div className="section-banner banner-red">
                <span className="jp-title">私たちのミッション</span>
                <span className="en-title">Our Mission</span>
            </div>

            <div className="content-block">
                <p className="redbigfont">「神経科学をより身近に」</p>
                <p>私たちは、神経科学の研究が進むことで、神経変性疾患のメカニズムの解明などにより人々の命や生活の質を向上し、社会全体に大きな利益をもたらすと考えています。</p>
                <p>そのため、中高生に神経科学への関心を喚起し、次世代の神経科学者を育成する必要があります。</p>
                <p>また、日本では神経科学に関する正しい知識の普及が不足しており、デマの流布や差別・偏見が引き起こされています。</p>
                <p>NRIを通じて中高生に神経科学に触れ、正しい知識を学ぶ場を提供します。</p>
            </div>

            <div className="section-banner banner-red">
                <span className="jp-title">テーマ</span>
                <span className="en-title">Theme</span>
            </div>

            <div className="content-block center">
                <p style={{fontSize: '1.9rem', fontWeight: 'bold', color: '#ff5d5d'}}>「神経科学を活用して、より豊かで快適な生活を作る」</p>
            </div>

            <div className="section-banner banner-red">
                <span className="jp-title">応募</span>
                <span className="en-title">Entry</span>
            </div>

            <div className="content-block center">
                <p className="redsection">【募集期間】</p>
                <p style={{fontSize: '1.5rem'}}>2025年12月12日(金) ~ 2026年2月15日(日)</p>
                
                <div className="btn-container">
                    <a href="http://example.com" className="round-button">募集要項はこちら<span className="icon"> &gt; </span></a>
                </div>

                <div style={{textAlign: 'center'}}><p className="redsection">【応募条件】</p></div>

                <div style={{textAlign: 'left', background: '#fff5f5', padding: '20px', borderRadius: '8px'}}>
                    <ul>
                        <li>個人または2~5名のチームであること</li>
                        <li>チーム全員が中学1年生~高校3年生のいずれかであること (2025年度時点)</li>
                        <li>専門知識は不要。自由な発想で応募が可能です</li>
                    </ul>
                </div>
                
                <div style={{textAlign: 'center'}}><p className="redsection">【登録フォーム】</p></div>

                <div className="btn-container">
                    <a href="http://example.com" className="round-button">登録フォームはこちら<span className="icon"> &gt; </span></a>
                </div>
            </div>

            <div className="section-banner banner-red">
                <span className="jp-title">オフライン発表</span>
                <span className="en-title">Offline Presentation</span>
            </div>

            <div className="content-block center">
                <p className="redsection">【会場・日時】</p>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>順天堂大学 本郷・お茶の水キャンパス<br/>2026年3月27日(金)</p>
                
                <p className="redsection" style={{marginTop: '50px'}}>【審査員】</p>
                <div style={{background: '#fff2f2', padding: '12px 0 15px'}}>
                    <div className="grid">
                        <div className="card">
                            <div className="circle-img">Photo</div>
                            <div className="role">デジタルハリウッド大学卓越教授<br/>ハコスコ取締役CTO</div>
                            <div className="name">藤井 直敬 先生</div>
                        </div>
                        <div className="card">
                            <div className="circle-img">Photo</div>
                            <div className="role">順天堂大学医学部 神経学講座 主任教授</div>
                            <div className="name">波田野 琢 先生</div>
                        </div>
                        <div className="card">
                            <div className="circle-img">Photo</div>
                            <div className="role">玉川大学脳科学研究所 教授</div>
                            <div className="name">奥村 哲 先生</div>
                        </div>
                        <div className="card">
                            <div className="circle-img">Photo</div>
                            <div className="role">順天堂大学医学部 准教授</div>
                            <div className="name">長田 貴宏 先生</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: 'rgba(11, 83, 148, 0.9)'}}>
                <div className="section-banner banner-blue">
                    <span className="jp-title">基調講演</span>
                    <span className="en-title">Keynote Speech</span>
                </div>

                <div className="content-block">
                    <div className="keynote-wrapper">
                        <div className="bracket-side">
                            <div className="large-bracket-box">
                                <span className="text-white"> <span className="text-yellow">パーキンソン病</span>の原因究明に挑む</span> 
                            </div>
                        </div>

                        <div className="speaker-profile-group">
                            <div className="circle-img-keynote">
                                Photo
                            </div>
                            <div className="speaker-text-details">
                                <h2 className="name-large text-white">服部 信孝 先生</h2>
                                <ul className="credentials-list">
                                    <li>・順天堂大学 学長補佐 </li>
                                    <li>・順天堂大学大学院医学研究科 </li>
                                    <li>・ニューロングリアクロストークセンター センター長</li>
                                    <li>・順天堂大学医学部神経学講座 特任教授　他</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-banner banner-red">
                <span className="jp-title">お問い合わせ</span>
                <span className="en-title">Contact</span>
            </div>
            <div className="content-block">
                <p>スポンサーのご連絡やお問い合わせは、以下のメールアドレスまでお願いいたします。</p>
                <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#0998C8', textAlign: 'center'}}>iynajapan2024@gmail.com</p>
            </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
