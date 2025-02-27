import ja from '~docus-i18n/ja-JP'

export default {
  ...ja,
  banner: {
    here: 'v3.nuxtjs.org',
    format: '{nuxt} ベータがリリースされました！ {here} で詳細について見れます。'
  },
  cookies: {
    message: 'ユーザー分析とページ上の改善の目的で Cookie を使っています！',
    link: 'Cookie の詳細',
    button: '分かりました'
  },
  footer: {
    titles: {
      Discover: '発見',
      Help: 'ヘルプ',
      Support: 'サポート'
    },
    'Our team': 'チーム',
    'Design Kit': 'デザインキット',
    'Contact us': 'コンタクト',
    Resources: 'リソース',
    'Chat with us': 'チャット',
    'Contribution guide': '貢献ガイド',
    Sustainability: '持続可能性',
    Training: 'トレーニング',
    newsletter: {
      title: 'ニュースレターを購読する',
      description: '最新ニュース、記事、そしてリソース、毎月メールボックスに届けます。',
      form: {
        email: 'Eメール',
        subscribing: '購読中...',
        subscribe: '購読',
        already_registered: '既に登録されています',
        invalid_address: 'アドレスが不正です',
        subscribed_messages: {
          pre: '申し込みを確認するメールが送信されています。',
          confirmation: '確認済みEメール'
        }
      }
    },
    license: 'Nuxt は MIT ライセンスのオープンソースフレームワークです。'
  },
  sidebar: {
    partners: {
      title: 'パートナー',
      button: 'サポート'
    },
    ads: {
      fallback: {
        title: 'Nuxt はあなたが必要です！',
        description: 'アドブロッカーに nuxtjs.org を許可することで、私たちの活動をサポートし、経済的な助けとなります。'
      }
    }
  },
  home: {
    discover: {
      pages: 'ページ',
      ui: 'UI',
      data: 'データ',
      modules: 'モジュール',
      deployment: 'デプロイ'
    },
    cli: 'CLI',
    scratch: 'スクラッチ'
  },
  modules: {
    search: 'モジュールを検索 (名前、カテゴリ、ユーザー名、など)',
    sort_by: 'ソート方法',
    sort_fields: {
      downloads: 'ダウンロード数',
      stars: 'スター数'
    },
    loading: 'ロード中...',
    error: 'モジュール情報の取得中にエラーが発生しました'
  },
  resources: {
    themes: {
      get_for_it: '{price} で手に入れる',
      video_course: 'コースを開始する'
    }
  },
  sustainability: {
    tiers: {
      mvp_sponsors: 'MVP パートナー',
      partners: 'パートナー',
      sponsors: 'スポンサー',
      donations: '寄付'
    },
    mvp_detail: {
      services: 'サービス',
      location: '場所',
      contact_partner: 'パートナーに連絡する',
      visit_website: 'ウェブサイトに訪問する'
    }
  },
  support: {
    confirm_sending: 'テクニカルサポートにメッセージを送信する',
    error_sending: '送信中にエラーが発生しました。',
    invalid_adress: '不正なアドレスです。'
  },
  showcases: {
    loading: '詠み込み中...',
    chrome_extension: 'Chrome 拡張',
    firefox_extension: 'Firefox 拡張',
    categories: {
      Featured: '特集',
      'E-Commerce': 'E-コマース',
      News: 'ニュース',
      Government: '政治',
      Sport: 'スポーツ',
      Education: '教育',
      Entertainment: '娯楽',
      Travel: '旅行',
      Finance: '金融',
      Tech: '技術',
      Business: 'ビジネス'
    }
  },
  releases: {
    version: 'バージョン',
    released_on: 'リリース日 {datetime}'
  },
  partners: {
    become_partner: 'パートナーになる'
  },
  theme_mode: {
    system: 'システム',
    light: '明るい',
    dark: '暗い'
  },
  common: {
    an_error_occurred: 'エラーが発生しました',
    page_not_found: '探しているページを見つけることできませんでした。',
    please_define_title: 'front matter でタイトルを定義してください',
    please_define_description: 'front matter で説明を定義してください',
    search: '検索 ("/"を押すとここにフォーカスします)',
    settings: '設定',
    version: 'バージョン',
    currently_version: '現在プライベートベータ',
    back: '戻る',
    go_to: '{title}に進む',
    go_home: 'ホームへ',
    read_article: '記事を読む'
  },
  iso: 'en'
}
