IYNA Japan サイトを Next.js＋ShadCN/UI でリファクタリング・移植するにあたり、まずは現行の各ページに掲載されている「正の情報」をベースとして、ページごとに表示すべき要素と必要なデータ項目を論説形式で整理します。

ホーム（/）では、最上部にロゴとグローバルナビゲーションバーが固定されており、そこには Home、About、Education、BrainBee、Competition、News & Events、Join の各リンクが並んでいます（ナビゲーションは共通コンポーネントとして抽出）
iyna-japan.com
。次に「中高生神経科学者、集まれ！」というヒーロー見出しと背景画像が置かれ、その下に IYNA Japan の簡潔な団体紹介文と「日本一大きい中高生の神経科学コミュニティーを作ります！」というキャッチコピーが続きます。ページ下部には住所（Tokyo, Japan）、問い合わせ用メールアドレス（iynajapan2024@gmail.com）、および Twitter／Instagram／note へのソーシャルリンクと著作権表記が一括して配置されています
iyna-japan.com
。

About（/about）ページには、団体概要を説明するリード段落として「IYNA は中高生の国際的な非営利団体である」「2016 年に設立され、現在 4,000 人以上・126 国以上に支部がある」といったテキストがあり、続いて「Vision」として Core Value、Purpose、Mission の三項目が画像付きで示されています。さらに「運営メンバー紹介」セクションでは、現体制メンバーそれぞれの画像 URL、氏名、役職・担当領域、そして（あれば）プロフィールへの外部リンクをカード形式で並べ、最後に Alumni メンバー一覧が続きます
iyna-japan.com
。

Education（/education）ページは導入文で「運営メンバーが行っている活動を記録」「研究者インタビューやイベント開催」などの趣旨説明を置き、その下に「イベント企画」「Articles」「Short Posts」の三つの小セクションが並列に配置されています。イベント企画では実施中・予定の各イベント名と説明文、関連する画像の URL を、Articles では記事タイトルと note への外部リンクを、Short Posts では Instagram への投稿リンクや「脳科学オリンピック用語集の解説」といったリスト形式の項目をそれぞれ掲載します
iyna-japan.com
。

BrainBee（/brainbee）ページには「脳科学オリンピック 挑戦者へ」というイントロの下、Acetylcholine、Action Potential といった専門用語とその英語定義を段落ごとに示すグロッサリーセクションがあります。さらに「Brain Facts 輪読会」では開催趣旨と価値を説明し、「参加はメールへ」という一文と Twitter／Instagram／note のソーシャルリンクアイコンを並べています
iyna-japan.com
。

Competition（/nri-comp）ページは「Neuroinnovation Research Ideathon（NRI）」の説明を冒頭に置き、「2025 年度テーマ」「応募方法（Coming Soon）」を続けて表示します。その後、Mission ステートメントと About セクションでコンテストの目的・背景・評価基準などを複数段落で詳述し、最後に問い合わせ用メールアドレス（iynajapan.nri@gmail.com）を記載しています
iyna-japan.com
。

News & Events（/news-and-events）ページは導入文で「活動の最新ニュースを届けます☆」と掲げたあと、「紹介記事」セクションと「イベント情報」セクションを時系列で並列します。各イベントエントリーにはタイトル、開催場所、日時、詳細／申込用フォームへのリンク、関連画像 URL が含まれており、これをカードまたはリストでレンダリングします
iyna-japan.com
。

Join（/join）ページでは「コミュニティーメンバー募集」「活動内容」「参加方法」といったテキストで一般メンバーの募集要項を示し、その下に Advisor 募集要項として「ファクトチェックや研究アドバイスを通じて–」という説明と同じ問い合わせ先メールアドレスを配置します。ページ最下部は全ページ共通のフッターです
iyna-japan.com
。

これらを踏まえ、各ページは Next.js の pages/ または App Router の app/ 配下に対応するファイルを用意し、ShadCN/UI の汎用コンポーネント（NavBar, Footer, Card, SectionHeading, List, Image, Button, SocialLinks 等）を使って構築します。データは Markdown／JSON もしくは headless CMS で管理し、SSG および必要に応じた ISR を設定して高速かつ更新性の高いサイトを実現してください。
