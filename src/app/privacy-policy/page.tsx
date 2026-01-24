import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IYNA Japan",
  description: "IYNA Japanによる個人情報の取り扱い方針を記したプライバシーポリシーです。",
};

const usePurposes = [
  "イベント、プログラム、研究活動の運営および管理",
  "参加者・会員・協力者への連絡、通知、確認",
  "教育・研究活動の質的向上および統計的分析",
  "当団体の運営上、必要かつ適正と認められる場合",
  "その他、上記に付随する正当な目的",
];

const securityMeasures = [
  "代表・担当者など必要最小限の者に限定したアクセス権限の制限",
  "パスワード管理および安全なクラウド環境での運用",
  "不要データの定期的削除",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="container mx-auto px-6 py-10 space-y-10">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            IYNA Japan（International Youth Neuroscience Association Japan）は、神経科学を中心とする
            教育・研究活動を推進する非営利学生組織として、個人情報の保護を重要な社会的責任と認識しています。
            本指針は、当団体が公式ウェブサイトやSNSを含むすべての活動を通じて取得する個人情報に適用されます。
          </p>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">個人情報保護指針</h1>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">個人情報の定義</h2>
            <p className="text-gray-700 leading-relaxed">
              氏名、所属、学年、年齢、住所、電話番号、メールアドレス、SNSアカウント、提出書類、画像・映像など、
              特定の個人を識別できるすべての情報を指します。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">取得方法</h2>
            <p className="text-gray-700 leading-relaxed">
              イベント応募フォーム、アンケート、電子メール、Discordなどのコミュニケーションツールを通じて、
              適正かつ公正な手段で個人情報を取得しています。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">利用目的</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {usePurposes.map((purpose) => (
                <li key={purpose}>{purpose}</li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              なお、SNS・ウェブサイト等への画像・動画の掲載を行う場合は、事前に本人の同意を得たうえで実施します。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">第三者提供</h2>
            <p className="text-gray-700 leading-relaxed">
              法令等に基づく場合、あるいは運営上不可欠である場合を除き、あらかじめ本人の同意を得ることなく
              第三者へ提供することはありません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              業務委託先（フォーム運営やクラウド管理など）への個人情報の預託は第三者提供には該当せず、
              適切な監督の下で行います。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">安全管理措置</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {securityMeasures.map((measure) => (
                <li key={measure}>{measure}</li>
              ))}
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">データの保管および削除方針</h2>
            <p className="text-gray-700 leading-relaxed">
              取得した個人情報は目的達成後または活動終了後に適切な方法で削除・破棄します。
              ただし、継続的な連絡、再募集、記録保持が合理的に必要な場合は、本人の同意を得たうえで一定期間保管します。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">外部サービスおよびリンク先</h2>
            <p className="text-gray-700 leading-relaxed">
              当団体のウェブサイトやSNSには、Google、YouTube、Xなどの外部サービスへのリンクを含む場合があります。
              これらの外部サイトでの個人情報の取り扱いについて、当団体は責任を負いません。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">開示・訂正・削除</h2>
            <p className="text-gray-700 leading-relaxed">
              本人から個人情報の開示、訂正、利用停止または削除の申し出があった場合、本人確認のうえ合理的な範囲で速やかに対応します。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">未成年者の個人情報</h2>
            <p className="text-gray-700 leading-relaxed">
              原則として18歳未満の未成年者が個人情報を提供する場合には、保護者の同意を得ます。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">映像・肖像権</h2>
            <p className="text-gray-700 leading-relaxed">
              イベント・講演会・コンペティション等で映像や写真を撮影・公開する場合、出演者には肖像権・著作権に関する使用同意書の提出を求めることがあります。
              その同意の範囲内でのみ映像・写真・発言内容を公開または利用します。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">苦情および相談対応</h2>
            <p className="text-gray-700 leading-relaxed">
              個人情報の取り扱いに関する苦情や相談には事実関係を確認のうえ、誠実かつ迅速に対応します。
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-semibold text-pink-700">本指針の改定</h2>
            <p className="text-gray-700 leading-relaxed">
              法令の改正や運営方針の変更に応じて本指針を改定することがあります。改定後は速やかに公式ウェブサイトで公開します。
            </p>
          </article>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">お問い合わせ</h2>
          <p className="text-gray-700 leading-relaxed">
            個人情報に関するお問い合わせは以下までご連絡ください。
          </p>
          <p className="text-base text-gray-800">
            IYNA Japan
            <br />
            <Link href="mailto:iynajapan2024@gmail.com" className="text-pink-600 underline">
              iynajapan2024@gmail.com
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
