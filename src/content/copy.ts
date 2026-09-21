/** All user-facing strings for the iShamela landing site. */

export const links = {
  webApp: 'https://app.ishamela.online',
  github: 'https://github.com/YasserCherfaoui/iShamela',
  releases: 'https://github.com/YasserCherfaoui/iShamela/releases',
  issues: 'https://github.com/YasserCherfaoui/iShamela/issues',
  contributors: 'https://github.com/YasserCherfaoui/iShamela/graphs/contributors',
  huggingfacePrivacy: 'https://huggingface.co/privacy',
  githubPrivacy:
    'https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement',
  supportEmail: 'yasser.cherfaoui@gmail.com',
} as const

export const siteMeta = {
  publicationDate: '21 September 2026',
  license: 'MIT',
} as const

export const site = {
  name: 'iShamela',
  wordmark: 'iSHAMELA',
  logoAlt: 'iShamela logo',
  skipToContent: 'Skip to content',
  defaultTitle: 'iShamela — The Shamela library, offline and in your pocket',
  titles: {
    privacy: 'Privacy Policy — iShamela',
    terms: 'Terms of Use — iShamela',
    acknowledgements: 'Acknowledgements — iShamela',
    support: 'Support — iShamela',
  },
} as const

export const nav = {
  screens: 'Screens',
  features: 'Features',
  downloads: 'Downloads',
  support: 'Support',
  openApp: 'Open the app',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
} as const

export const footer = {
  tagline: 'An open-source library for the students of knowledge.',
  columns: {
    product: {
      title: 'Product',
      links: [
        { label: 'Open the web app', href: links.webApp, external: true },
        { label: 'Downloads', href: '/#downloads', external: false },
        { label: 'GitHub repository', href: links.github, external: true },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy', external: false },
        { label: 'Terms of Use', href: '/terms', external: false },
        { label: 'Acknowledgements', href: '/acknowledgements', external: false },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { label: 'Support page', href: '/support', external: false },
        { label: 'Report an issue', href: links.issues, external: true },
      ],
    },
  },
  copyright: (year: number) =>
    `© ${year} iShamela contributors · Released under the project license`,
  versionPrefix: 'App version',
} as const

export const hero = {
  arabic: 'المكتبةُ الشاملةُ في جيبِك',
  arabicAriaLabel: 'The Shamela library in your pocket',
  headline: 'The Shamela library, offline and in your pocket.',
  subline:
    'iShamela is a free, open-source app for reading and searching thousands of classical Arabic books in the Islamic Sciences — tafsīr, ḥadīth, fiqh, ʿaqīdah, and more. Download the books you need once, then read and search them instantly, even without a connection.',
  primaryCta: 'Open the web app',
  secondaryCta: 'Download for your device',
  trustLine: 'Free forever · Open source · No account required',
  phoneAlt:
    'iShamela library screen showing installed books and continue reading',
  phoneSrc: '/assets/library.png',
} as const

export const screens = {
  id: 'screens',
  title: 'See it in use',
  items: [
    {
      id: 'catalog',
      src: '/assets/catalog.png',
      alt: 'Catalog screen — browse thousands of classical texts by section',
      caption: 'Catalog',
    },
    {
      id: 'search',
      src: '/assets/search.png',
      alt: 'Search screen — instant results across titles and authors',
      caption: 'Instant search',
    },
    {
      id: 'reader-paper',
      src: '/assets/reader-paper.png',
      alt: 'Reader in paper theme with highlights and footnotes',
      caption: 'Reader — paper',
    },
    {
      id: 'reader-night',
      src: '/assets/reader-night.png',
      alt: 'Reader in night theme with annotation tools',
      caption: 'Reader — night',
    },
    {
      id: 'downloads',
      src: '/assets/downloads.png',
      alt: 'Downloads screen — download once, read fully offline',
      caption: 'Downloads',
    },
  ],
} as const

export const features = {
  title: 'Built for the student of knowledge',
  items: [
    {
      id: 'offline',
      icon: 'BookOpen' as const,
      title: 'Offline-first',
      body: 'Every book you install lives on your device as a fast local database. Airplane mode changes nothing.',
    },
    {
      id: 'search',
      icon: 'Search' as const,
      title: 'Instant full-text search',
      body: 'Search inside a book or across your whole library with millisecond results, powered by SQLite FTS5 tuned for Arabic text.',
    },
    {
      id: 'reader',
      icon: 'AlignRight' as const,
      title: 'A reader made for Arabic',
      body: 'Right-to-left layout, careful Arabic typography, and page numbering that matches the printed editions.',
    },
    {
      id: 'study',
      icon: 'Bookmark' as const,
      title: 'Your study, remembered',
      body: 'Reading history and bookmarks keep your place across every book, so you pick up exactly where you left off.',
    },
    {
      id: 'catalog',
      icon: 'Library' as const,
      title: 'A growing catalog',
      body: 'Books are packaged as compact bundles hosted on Hugging Face. Browse the catalog, tap install, and start reading.',
    },
    {
      id: 'everywhere',
      icon: 'MonitorSmartphone' as const,
      title: 'Everywhere you study',
      body: 'One app for web, Android, iOS, Windows, macOS, and Linux — built with Flutter from a single open codebase.',
    },
  ],
} as const

export const howItWorks = {
  title: 'From catalog to first search in three steps',
  steps: [
    {
      number: '1',
      title: 'Open the app',
      body: 'Use it right in your browser at app.ishamela.online, or install it on your device.',
    },
    {
      number: '2',
      title: 'Install the books you need',
      body: 'Pick titles from the catalog. Each one downloads once as an optimized, searchable bundle.',
    },
    {
      number: '3',
      title: 'Read and search offline',
      body: 'From then on, everything is local: open, read, search, bookmark — no connection needed.',
    },
  ],
} as const

export const openSource = {
  title: 'Open by design',
  body: 'iShamela ships code, not content. The app is fully open source on GitHub, and the books themselves remain with their public sources on Hugging Face — the app simply downloads them to your device. Anyone can read the code, report an issue, package a new book bundle, or contribute a feature. The “i” in iShamela stands for intelligent: our ambition is to keep making it easier to learn, with the community and, over time, with thoughtful AI assistance.',
  starCta: 'Star on GitHub',
  docsCta: 'Read the docs',
} as const

export const downloads = {
  id: 'downloads',
  title: 'Get iShamela',
  note: 'All builds are published on the GitHub Releases page. The web app always runs the latest version.',
  platforms: [
    {
      id: 'web',
      name: 'Web',
      action: 'Open in browser',
      href: links.webApp,
      icon: 'Globe' as const,
    },
    {
      id: 'android',
      name: 'Android',
      action: 'Download',
      href: links.releases,
      icon: 'Smartphone' as const,
    },
    {
      id: 'ios',
      name: 'iOS',
      action: 'Download',
      href: links.releases,
      icon: 'TabletSmartphone' as const,
    },
    {
      id: 'windows',
      name: 'Windows',
      action: 'Download',
      href: links.releases,
      icon: 'Monitor' as const,
    },
    {
      id: 'macos',
      name: 'macOS',
      action: 'Download',
      href: links.releases,
      icon: 'Laptop' as const,
    },
    {
      id: 'linux',
      name: 'Linux',
      action: 'Download',
      href: links.releases,
      icon: 'Terminal' as const,
    },
  ],
} as const

export const ctaBand = {
  arabic: 'طلب العلم فريضة',
  arabicAriaLabel: 'Seeking knowledge is an obligation',
  line: 'Your library is one click away.',
  button: 'Open the web app',
} as const

export const support = {
  title: 'Support',
  intro:
    'iShamela is a community project. The fastest way to get help — and to help us — is through the channels below.',
  entries: [
    {
      id: 'bug',
      title: 'Report a bug or request a feature',
      body: 'Open an issue on GitHub with what you expected and what happened. Screenshots and book names help a lot.',
      linkLabel: 'Open an issue',
      href: links.issues,
    },
    {
      id: 'discussion',
      title: 'Questions & discussion',
      body: 'For usage questions or ideas, start a discussion on the GitHub repository.',
      linkLabel: 'Go to the repository',
      href: links.github,
    },
    {
      id: 'email',
      title: 'Email',
      body: "For anything you'd rather not post publicly:",
      email: links.supportEmail,
    },
  ],
  closing:
    'iShamela is maintained by volunteers. We read everything, but responses can take a few days — jazākum Allāhu khayran for your patience.',
} as const

export const privacy = {
  title: 'Privacy Policy',
  lastUpdated: siteMeta.publicationDate,
  lastUpdatedLabel: 'Last updated:',
  sections: [
    {
      body: 'iShamela is designed so that we know as little about you as possible.',
    },
    {
      heading: 'What we collect: nothing.',
      body: 'iShamela has no accounts, no sign-up, no analytics, no advertising, and no tracking of any kind. We do not collect, store, or share personal information. The landing page you are reading sets no cookies.',
    },
    {
      heading: 'Where your data lives.',
      body: "Your reading history, bookmarks, notes, and installed books are stored locally on your device (or in your browser's local storage when using the web app). They never leave your device, and we cannot see them. Uninstalling the app or clearing your browser data deletes them.",
    },
    {
      heading: 'Network requests the app makes.',
      bodyParts: [
        {
          type: 'text' as const,
          text: 'The app connects to the internet only to (a) download the book catalog and book bundles, which are hosted on Hugging Face, and (b) check GitHub for app updates and release information. These requests go directly from your device to those services, which may log standard technical data (such as your IP address) under their own privacy policies: the ',
        },
        {
          type: 'link' as const,
          text: 'Hugging Face Privacy Policy',
          href: links.huggingfacePrivacy,
        },
        { type: 'text' as const, text: ' and the ' },
        {
          type: 'link' as const,
          text: 'GitHub Privacy Statement',
          href: links.githubPrivacy,
        },
        {
          type: 'text' as const,
          text: '. We receive nothing from these requests.',
        },
      ],
    },
    {
      heading: 'Children.',
      body: "Because we collect no data, there is no additional processing of children's data. The app is suitable for all ages.",
    },
    {
      heading: 'Changes.',
      body: 'If a future feature ever requires collecting any data, we will update this policy first and state clearly what is collected and why. Material changes will be noted in the app\'s release notes.',
    },
    {
      heading: 'Contact.',
      bodyParts: [
        {
          type: 'text' as const,
          text: 'Questions about privacy: open an issue on our GitHub repository or write to ',
        },
        {
          type: 'link' as const,
          text: links.supportEmail,
          href: `mailto:${links.supportEmail}`,
        },
        { type: 'text' as const, text: '.' },
      ],
    },
  ],
} as const

export const terms = {
  title: 'Terms of Use',
  lastUpdated: siteMeta.publicationDate,
  lastUpdatedLabel: 'Last updated:',
  intro:
    'By using iShamela — the web app, the desktop and mobile apps, or this website — you agree to these terms.',
  sections: [
    {
      heading: '1. What iShamela is.',
      bodyParts: [
        {
          type: 'text' as const,
          text: 'iShamela is free, open-source software for reading and searching publicly available Arabic-language books in the Islamic Sciences. The application code is provided under the license published in the project repository (',
        },
        {
          type: 'text' as const,
          text: siteMeta.license,
        },
        { type: 'text' as const, text: ').' },
      ],
    },
    {
      heading: '2. The books are not ours.',
      body: 'iShamela distributes software, not content. The books available in the catalog are drawn from publicly available collections (including the Shamela library and related archives) hosted on third-party platforms such as Hugging Face. The rights to each work belong to their respective authors, editors, and publishers. If you are a rights holder and believe a work is included in a source dataset improperly, please contact the dataset maintainers, and open an issue with us so we can remove it from our catalog.',
    },
    {
      heading: '3. Acceptable use.',
      body: 'Use iShamela for reading, study, and research. Do not use it to misrepresent the texts, to violate applicable law, or to attack the services the app relies on (for example, by abusive automated downloading).',
    },
    {
      heading: '4. No warranty.',
      body: 'iShamela is provided "as is", without warranty of any kind. Texts may contain digitization errors; always verify against printed editions before relying on a passage for scholarship, rulings, or citation. To the maximum extent permitted by law, the contributors are not liable for any damages arising from the use of the software or the texts it displays.',
    },
    {
      heading: '5. Availability.',
      body: 'The app, the catalog, and this website may change or become unavailable at any time. Because the app is offline-first, books you have installed remain on your device regardless.',
    },
    {
      heading: '6. Changes to these terms.',
      body: 'We may update these terms; the "Last updated" date will change accordingly. Continued use after an update means you accept the revised terms.',
    },
    {
      heading: 'Contact.',
      bodyParts: [
        {
          type: 'text' as const,
          text: 'Open an issue on our GitHub repository or write to ',
        },
        {
          type: 'link' as const,
          text: links.supportEmail,
          href: `mailto:${links.supportEmail}`,
        },
        { type: 'text' as const, text: '.' },
      ],
    },
  ],
} as const

export const acknowledgements = {
  title: 'Acknowledgements',
  intro:
    'iShamela stands on the shoulders of people and projects who did the hard work of preserving and digitizing this heritage. Jazāhum Allāhu khayran.',
  sections: [
    {
      heading: 'Al-Maktaba al-Shamela (المكتبة الشاملة).',
      body: 'The Shamela project digitized and structured thousands of classical works and made them freely available. iShamela exists because of this effort.',
    },
    {
      heading: 'Dataset maintainers on Hugging Face.',
      body: 'The book data used by iShamela comes from publicly available datasets, including:',
      datasets: [
        'ieasybooks-org/shamela-waqfeya-library',
        'ieasybooks-org/waqfeya-library',
        'ieasybooks-org/prophet-mosque-library',
        'AuthenticIlm/Shamela4_Full_DB',
      ],
      thanks:
        "Thank you to the iEasyBooks team, AuthenticIlm, the Waqfeya project, and the Prophet's Mosque library digitization efforts for keeping this knowledge open.",
    },
    {
      heading: 'Open-source foundations.',
      body: 'iShamela is built with Flutter, SQLite and its FTS5 full-text engine, and many other open-source libraries listed in the repository.',
    },
    {
      heading: 'Contributors.',
      bodyParts: [
        {
          type: 'text' as const,
          text: 'Everyone who has filed an issue, tested a build, or contributed code — you are part of this. The full list lives on the ',
        },
        {
          type: 'link' as const,
          text: 'GitHub contributors page',
          href: links.contributors,
        },
        { type: 'text' as const, text: '.' },
      ],
    },
  ],
} as const
