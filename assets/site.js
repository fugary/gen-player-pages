const SUPPORT_EMAIL = 'support@genplayer.app';

const dictionaries = {
  'zh-CN': {
    nav: {
      product: '产品',
      features: '功能',
      scenarios: '场景',
      privacy: '隐私政策',
      feedback: '问题反馈',
      home: '首页'
    },
    hero: {
      eyebrow: '本地与远程一体化媒体中心',
      spotlight: '为家庭媒体库和移动设备设计的现代播放器体验',
      title: '把文件、媒体库与播放体验整合成一个更统一的入口。',
      description: 'GenPlayer 将本地文件管理、SMB / WebDAV 网络访问、Jellyfin / Emby 媒体库与 VLC 播放核心整合到一套更完整的体验里。',
      primaryCta: '查看核心功能',
      secondaryCta: '获取支持与反馈',
      proof1: '本地文件 + 远程服务统一管理',
      proof2: '支持离线关联播放与继续观看',
      proof3: '面向 iPhone / iPad / tvOS',
      note1Label: 'Now Playing',
      note1Title: '离线优先，缺失时再回退流媒体',
      note2Label: 'Next Focus',
      note2Title: '多端同步、下载中心深化、离线关联播放',
      stageBadge: 'Unified Dashboard',
      stageTag: 'Local + Remote',
      stageTitle: '从文件整理到海报墙浏览，再到播放器接力，体验保持连贯。',
      stageBody: '针对本地媒体、家庭 NAS 与自建媒体库做统一交互设计，减少在多个 App 之间来回切换。',
      stagePill1: 'SMB / WebDAV',
      stagePill2: 'Jellyfin / Emby',
      stagePill3: 'VLC Playback Core',
      stageMini1Title: 'Continue Watching',
      stageMini1Body: '历史、收藏和库详情之间跳转一致',
      stageMini2Title: 'Download Center',
      stageMini2Body: '离线文件优先命中，缺失时自动回退流媒体',
      stageMini3Title: 'Privacy by Design',
      stageMini3Body: '敏感凭据走安全存储，不把隐私留在表面'
    },
    metrics: {
      card1Value: '01',
      card1Title: '一个入口',
      card1Body: '把本地文件、网络协议和媒体服务器收束到统一导航里。',
      card2Value: '06',
      card2Title: '多源支持',
      card2Body: '覆盖 SMB、WebDAV、Jellyfin、Emby、本地文件与 VLC 播放能力。',
      card3Value: '14+',
      card3Title: '平台兼容',
      card3Body: '面向 iOS 14+，同时照顾 iPhone、iPad 与 tvOS 使用场景。',
      card4Value: '24/7',
      card4Title: '随时继续',
      card4Body: '历史、收藏、详情定位与播放器恢复围绕连续观看体验设计。'
    },
    product: {
      eyebrow: '产品定位',
      title: '不是只会“打开文件”，而是把媒体管理、浏览和播放连接起来。',
      description: '官网这次按现代产品站点的节奏重排了信息层次，让 GenPlayer 的价值主张在首屏就更清楚。',
      card1Kicker: 'Why GenPlayer',
      card1Title: '统一入口，而不是功能堆叠。',
      card1Body: '在同一个应用里处理本地文件、远程协议连接和媒体库浏览，让文件管理、海报墙与播放器之间不再断裂。',
      point1Title: '更少切换',
      point1Body: '从浏览到播放不需要频繁跳到不同工具。',
      point2Title: '更强一致性',
      point2Body: '历史、收藏、详情定位和上下文菜单行为保持统一。',
      point3Title: '更适合媒体使用流',
      point3Body: '围绕“找到内容、继续播放、离线回看”来设计页面关系。'
    },
    flow: {
      eyebrow: 'Experience Flow',
      title: '把典型使用路径做成更顺手的链路。',
      step1Title: '连接你的媒体来源',
      step1Body: '支持本地文件、家庭 NAS、WebDAV 和 Jellyfin / Emby 媒体服务器。',
      step2Title: '从海报墙或文件列表快速进入',
      step2Body: '浏览库、定位详情、查看历史和收藏，保持一致导航语义。',
      step3Title: '优先命中离线文件，再无缝回退流媒体',
      step3Body: '下载中心与播放器链路协同，减少重复查找和重新选择源的负担。'
    },
    features: {
      eyebrow: '核心功能',
      title: '围绕文件、连接、播放、隐私和连续体验做一体化设计。',
      description: '页面层次、模块分组和内容节奏都做了重新组织，让官网更像一个成熟产品而不是单纯的信息列表。',
      fileTitle: '文件管理',
      fileBody: '支持本地文件浏览、整理、重命名、移动、删除，以及图片和文本预览。',
      remoteTitle: '远程连接',
      remoteBody: '支持 SMB 与 WebDAV，并持续拓展面向家庭服务器和 NAS 的访问能力。',
      libraryTitle: '媒体库集成',
      libraryBody: '深度集成 Jellyfin / Emby，支持库浏览、详情定位、历史与收藏跳转。',
      playbackTitle: '播放体验',
      playbackBody: '基于 VLC 内核，支持常见视频/音频格式、字幕、音轨、倍速、画中画和手势控制。',
      historyTitle: '历史与收藏',
      historyBody: '统一记录本地与远程媒体的历史进度与收藏信息，帮助用户从中断位置快速继续。',
      privacyTitle: '隐私与安全',
      privacyBody: '支持应用锁、生物识别与隐私模式，敏感凭据通过安全存储方案处理。'
    },
    download: {
      eyebrow: 'Download Center',
      title: '下载中心正在从 MVP 进化为“离线关联播放”的核心能力。',
      body: '这也是当前阶段最重要的扩展方向之一。官网把这部分单独突出出来，让产品路线和实际能力更清晰。',
      primaryCta: '告诉我们你的使用场景',
      secondaryCta: '查看隐私与数据处理',
      card1Title: '任务状态机完整化',
      card1Body: '覆盖 queued、downloading、paused、completed、failed、canceled 等完整生命周期。',
      card2Title: '离线文件与媒体项绑定',
      card2Body: '通过 server、remoteItemId 或 remotePath 建立映射，让下载结果真正能回到媒体详情和播放器。',
      card3Title: '优先离线、缺失回退流媒体',
      card3Body: '播放时先命中本地下载，再按原链路回退远程播放，保证体验连贯不打断。'
    },
    support: {
      eyebrow: '支持范围',
      title: '连接你已经在使用的媒体来源，而不是要求你重新迁移生态。',
      smb: '局域网共享与 NAS 访问',
      webdav: '兼容 Alist 与多种 WebDAV 服务',
      jellyfin: '媒体库浏览、详情与历史关联',
      emby: '海报墙浏览与远程播放协同',
      local: '文件 App、照片导入与 On My iPhone',
      vlc: '多格式播放、字幕和音轨兼容'
    },
    scenarios: {
      eyebrow: '使用场景',
      title: '既适合个人影音整理，也适合家庭服务器和移动端连续播放。',
      case1Label: 'Local Workflow',
      case1Title: '本地媒体整理',
      case1Body: '整理 iPhone / iPad 中的视频、音频和图片，并通过统一播放器继续观看。',
      case2Label: 'Home Server',
      case2Title: '家庭 NAS / 私有云访问',
      case2Body: '连接 SMB 或 WebDAV 服务，在移动端快速查看和播放远程文件。',
      case3Label: 'Library Flow',
      case3Title: '媒体库连续观看',
      case3Body: '从 Jellyfin / Emby 中浏览海报墙、定位剧集详情，并回到你的历史进度。'
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: '继续推进多端同步、下载中心和更完整的离线关联播放。',
      body: '当前重点方向包括下载中心深化、历史/收藏/服务器数据一致性，以及未来的同步与扩展能力。',
      primaryCta: '提交问题反馈',
      secondaryCta: '查看隐私承诺'
    },
    privacyPage: {
      eyebrow: 'Privacy Policy',
      title: 'GenPlayer 隐私政策',
      updated: '最后更新：2026-03-20',
      stat1Label: 'Data direction',
      stat1Value: '以本地媒体工作流为主',
      stat2Label: 'Sensitive credentials',
      stat2Value: '设备侧安全存储',
      stat3Label: 'Support contact',
      stat3Value: '通过邮箱进行支持沟通',
      summary1Kicker: 'Local First',
      summary1Title: '本地文件处理优先在设备侧完成',
      summary1Body: 'GenPlayer 的核心能力围绕本地访问、远程连接和播放体验展开，不以收集用户内容为产品前提。',
      summary2Kicker: 'Secure Handling',
      summary2Title: '敏感信息通过更安全的方式处理',
      summary2Body: '服务器凭据、访问令牌和类似敏感信息应通过设备侧安全存储方案保管，而不是明文公开暴露。',
      summary3Kicker: 'User Control',
      summary3Title: '历史、收藏和联系信息可由用户主动控制',
      summary3Body: '你可以在应用内删除本地记录，也可以通过支持邮箱联系更新或删除主动提交的反馈信息。',
      section1Title: '1. 我们处理哪些信息',
      section1Body: 'GenPlayer 的核心能力以本地文件访问、远程媒体连接和播放体验为主。应用可能处理你主动提供的信息，例如服务器地址、用户名、访问令牌、播放历史、收藏状态，以及你主动发起反馈时填写的联系方式。',
      section2Title: '2. 本地文件与远程服务连接',
      section2Body: '本地文件内容主要在你的设备上处理。对于 SMB、WebDAV、Jellyfin、Emby 等远程服务，应用会在你主动配置后使用对应凭据进行连接。敏感凭据应通过安全存储方案保存在设备侧，不用于公开展示或出售。',
      section3Title: '3. 历史记录、收藏与个性化功能',
      section3Body: '为了实现继续播放、历史记录、收藏和离线关联等功能，应用会在本地保存必要的媒体标识、进度与偏好设置。你可以在应用内关闭部分历史能力，或删除相关记录。',
      section4Title: '4. 反馈与联系信息',
      section4Body: '当你通过反馈页面、邮件或其他支持渠道联系我们时，我们可能收到你主动提交的邮箱地址、设备信息和问题描述，这些信息仅用于问题排查、用户支持与审核沟通。',
      section5Title: '5. 你的权利',
      section5Body: '你可以请求更新或删除你主动提交的反馈信息，也可以在应用内清理历史/收藏等本地记录。若你对隐私实践有疑问，请通过支持邮箱联系我们。',
      sideEyebrow: 'Need support?',
      sideTitle: '对隐私实践或审核信息有疑问？',
      sideBody: '如果你需要确认支持渠道、隐私页面用途或上架信息，可以直接前往支持与反馈页联系我们。',
      sideCta: '前往支持页面'
    },
    feedbackPage: {
      eyebrow: 'Support & Feedback',
      title: '问题反馈与支持',
      description: '如果你在使用 GenPlayer 时遇到问题，欢迎通过下方方式联系。',
      stat1Label: 'Preferred channel',
      stat1Value: '邮箱支持',
      stat2Label: 'Best with',
      stat2Value: '设备信息 + 复现步骤',
      stat3Label: 'Works for',
      stat3Value: 'Bug、建议、审核沟通',
      contactKicker: 'Contact',
      contactTitle: '联系渠道',
      contactBody: '推荐使用支持邮箱提交问题，并附上设备型号、系统版本、媒体来源类型（本地 / SMB / WebDAV / Jellyfin / Emby）以及复现步骤。',
      reviewKicker: 'For App Review',
      reviewTitle: 'iOS 审核与支持建议',
      reviewBody: '对 iOS 上架来说，隐私政策页面通常应准备好；支持/反馈页面虽不一定是单独法规要求，但作为公开的 Support URL 非常有价值，也有利于审核人员快速理解联系渠道。',
      formEyebrow: 'Static Mail Form',
      formTitle: '使用静态表单生成反馈邮件',
      formBody: '此表单不会将数据发送到服务器，而是为你自动生成一封邮件内容。',
      tip1Title: '描述复现步骤',
      tip1Body: '尽量说明媒体来源、触发路径和期望行为，便于更快定位问题。',
      tip2Title: '附上设备信息',
      tip2Body: '机型、系统版本、网络环境与媒体来源类型都很有帮助。',
      tip3Title: '静态站点也能使用',
      tip3Body: '表单不会保存到服务器，只会帮你生成一封预填好的邮件。',
      formEmail: '你的邮箱',
      formEmailPlaceholder: 'name@example.com',
      formTopic: '问题类型',
      topicBug: 'Bug 反馈',
      topicFeature: '功能建议',
      topicReview: '审核沟通',
      formDevice: '设备/系统信息',
      formDevicePlaceholder: '例如：iPhone 15 Pro / iOS 18 / Jellyfin',
      formMessage: '详细说明',
      formMessagePlaceholder: '请描述问题现象、复现步骤、期望结果，以及是否能够稳定复现。',
      formSubmit: '生成反馈邮件'
    },
    notFoundPage: {
      eyebrow: 'Page Not Found',
      title: '这个页面不存在，或者已经移动。',
      body: '你可以返回首页继续浏览，或前往隐私政策和问题反馈页面。',
      primaryCta: '返回首页',
      secondaryCta: '问题反馈'
    },
    footer: {
      privacy: '隐私政策',
      feedback: '问题反馈',
      home: '首页'
    }
  },
  en: {
    nav: {
      product: 'Product',
      features: 'Features',
      scenarios: 'Scenarios',
      privacy: 'Privacy',
      feedback: 'Support',
      home: 'Home'
    },
    hero: {
      eyebrow: 'A unified media center for local and remote libraries',
      spotlight: 'A more modern playback experience for home media libraries and mobile devices',
      title: 'Bring files, libraries, and playback together in one clearer experience.',
      description: 'GenPlayer combines local file management, SMB / WebDAV access, Jellyfin / Emby libraries, and a VLC-powered playback core into one more complete workflow.',
      primaryCta: 'Explore features',
      secondaryCta: 'Get support',
      proof1: 'Manage local files and remote services together',
      proof2: 'Built around offline-linked playback and resume flows',
      proof3: 'Designed for iPhone, iPad, and tvOS',
      note1Label: 'Now Playing',
      note1Title: 'Offline first, then stream only when needed',
      note2Label: 'Next Focus',
      note2Title: 'Multi-device sync, deeper downloads, offline-linked playback',
      stageBadge: 'Unified Dashboard',
      stageTag: 'Local + Remote',
      stageTitle: 'From file organization to poster-wall browsing to playback handoff, the experience stays connected.',
      stageBody: 'The product is designed around unified interactions for local media, home NAS setups, and self-hosted libraries so users do not keep hopping between apps.',
      stagePill1: 'SMB / WebDAV',
      stagePill2: 'Jellyfin / Emby',
      stagePill3: 'VLC Playback Core',
      stageMini1Title: 'Continue Watching',
      stageMini1Body: 'History, favorites, and library detail flows stay aligned',
      stageMini2Title: 'Download Center',
      stageMini2Body: 'Prefer offline files first, then fall back to streaming',
      stageMini3Title: 'Privacy by Design',
      stageMini3Body: 'Sensitive credentials stay in secure storage, not on the surface'
    },
    metrics: {
      card1Value: '01',
      card1Title: 'One entry point',
      card1Body: 'Bring local files, remote protocols, and media servers into one navigation model.',
      card2Value: '06',
      card2Title: 'Source types',
      card2Body: 'Supports SMB, WebDAV, Jellyfin, Emby, local files, and VLC-powered playback.',
      card3Value: '14+',
      card3Title: 'Platform support',
      card3Body: 'Built for iOS 14+ while covering iPhone, iPad, and tvOS usage patterns.',
      card4Value: '24/7',
      card4Title: 'Always resumable',
      card4Body: 'History, favorites, detail resolution, and playback recovery are built for continuity.'
    },
    product: {
      eyebrow: 'Product',
      title: 'More than opening files: it connects media management, browsing, and playback.',
      description: 'This redesign follows the pacing of modern product sites so GenPlayer explains its value more clearly from the first screen.',
      card1Kicker: 'Why GenPlayer',
      card1Title: 'A unified entry point, not a pile of disconnected features.',
      card1Body: 'Handle local files, remote protocol access, and media library browsing in one app so file management, poster walls, and playback no longer feel separate.',
      point1Title: 'Less switching',
      point1Body: 'Move from browsing to playback without bouncing between separate tools.',
      point2Title: 'Stronger consistency',
      point2Body: 'History, favorites, detail resolution, and context actions follow one mental model.',
      point3Title: 'Built for real media flow',
      point3Body: 'The structure centers on finding content, resuming playback, and coming back offline.'
    },
    flow: {
      eyebrow: 'Experience Flow',
      title: 'The core usage path is designed to feel naturally connected.',
      step1Title: 'Connect your media sources',
      step1Body: 'Use local files, home NAS shares, WebDAV, and Jellyfin / Emby media servers.',
      step2Title: 'Jump in from poster walls or file lists',
      step2Body: 'Browse libraries, resolve details, open history, and revisit favorites with consistent navigation semantics.',
      step3Title: 'Prefer offline files, then fall back to streaming',
      step3Body: 'The download center and playback pipeline work together to reduce repeated searching and source selection.'
    },
    features: {
      eyebrow: 'Core features',
      title: 'A unified design around files, connectivity, playback, privacy, and continuity.',
      description: 'The site structure, grouping, and pacing were rebuilt so the website feels closer to a polished product launch page than a plain checklist.',
      fileTitle: 'File management',
      fileBody: 'Browse local files, organize folders, rename, move, delete, and preview images or text within the app.',
      remoteTitle: 'Remote access',
      remoteBody: 'Connect to SMB and WebDAV today, with continued expansion for NAS and home server access.',
      libraryTitle: 'Library integration',
      libraryBody: 'Deep Jellyfin / Emby integration with library browsing, detail resolution, and history or favorite navigation.',
      playbackTitle: 'Playback experience',
      playbackBody: 'Powered by VLC for broad media format support, subtitles, audio tracks, playback speed, PiP, and gesture controls.',
      historyTitle: 'History and favorites',
      historyBody: 'Keep local and remote progress together so users can quickly resume what they were watching.',
      privacyTitle: 'Privacy and security',
      privacyBody: 'App lock, biometrics, privacy mode, and secure credential handling are part of the product direction.'
    },
    download: {
      eyebrow: 'Download Center',
      title: 'The download center is evolving from an MVP into the core of offline-linked playback.',
      body: 'This is one of the most important product directions right now, so the website now gives it dedicated visual weight and clearer explanation.',
      primaryCta: 'Tell us your use case',
      secondaryCta: 'Review privacy details',
      card1Title: 'A complete task state machine',
      card1Body: 'Cover queued, downloading, paused, completed, failed, and canceled states across the full lifecycle.',
      card2Title: 'Offline files mapped back to media items',
      card2Body: 'Use server, remote item ID, or remote path bindings so downloaded files reconnect cleanly to details and playback.',
      card3Title: 'Offline first, streaming fallback second',
      card3Body: 'Playback should prefer local downloads first and then return to the original remote path when needed.'
    },
    support: {
      eyebrow: 'What it supports',
      title: 'Works with the media sources you already use instead of forcing a new ecosystem.',
      smb: 'LAN shares and NAS access',
      webdav: 'Compatible with Alist and common WebDAV services',
      jellyfin: 'Library browsing, details, and history mapping',
      emby: 'Poster-wall browsing and remote playback flows',
      local: 'Files app, photo import, and On My iPhone',
      vlc: 'Broad codec, subtitle, and audio-track compatibility'
    },
    scenarios: {
      eyebrow: 'Scenarios',
      title: 'Designed for personal media organization, home servers, and mobile continuity.',
      case1Label: 'Local Workflow',
      case1Title: 'Organize local media',
      case1Body: 'Manage videos, audio, and images on iPhone or iPad and keep playback within one consistent workflow.',
      case2Label: 'Home Server',
      case2Title: 'Access your NAS or private cloud',
      case2Body: 'Connect over SMB or WebDAV to browse and play remote files on mobile devices.',
      case3Label: 'Library Flow',
      case3Title: 'Continue from your media library',
      case3Body: 'Browse Jellyfin or Emby poster walls, resolve series details, and jump back into your watch history.'
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Next up: multi-device sync, a deeper download center, and richer offline-linked playback.',
      body: 'Current priorities include deeper download workflows, consistency across history, favorites, and servers, plus future sync and extensibility.',
      primaryCta: 'Send feedback',
      secondaryCta: 'See privacy commitments'
    },
    privacyPage: {
      eyebrow: 'Privacy Policy',
      title: 'GenPlayer Privacy Policy',
      updated: 'Last updated: March 20, 2026',
      stat1Label: 'Data direction',
      stat1Value: 'Local-first media workflows',
      stat2Label: 'Sensitive credentials',
      stat2Value: 'Device-side secure storage',
      stat3Label: 'Support contact',
      stat3Value: 'Email-based troubleshooting',
      summary1Kicker: 'Local First',
      summary1Title: 'Local file handling is primarily performed on-device',
      summary1Body: 'GenPlayer centers on local access, remote connectivity, and playback rather than collecting user content as a product requirement.',
      summary2Kicker: 'Secure Handling',
      summary2Title: 'Sensitive information is handled through safer device-side storage',
      summary2Body: 'Server credentials, access tokens, and similar secrets should be stored through secure device-side mechanisms rather than exposed in plain form.',
      summary3Kicker: 'User Control',
      summary3Title: 'History, favorites, and support details remain under user control',
      summary3Body: 'You can remove local records in the app and contact support to update or delete feedback details you voluntarily submitted.',
      section1Title: '1. Information we process',
      section1Body: 'GenPlayer focuses on local file access, remote media connectivity, and playback. The app may process information you actively provide, such as server addresses, usernames, access tokens, playback history, favorite states, and contact details you submit through support channels.',
      section2Title: '2. Local files and remote connections',
      section2Body: 'Local file content is primarily processed on your device. For SMB, WebDAV, Jellyfin, Emby, and similar services, the app uses credentials only after you configure them. Sensitive credentials should be handled with device-side secure storage and are not intended for public display or resale.',
      section3Title: '3. History, favorites, and personalization',
      section3Body: 'To support resume playback, history, favorites, and offline-linked experiences, the app stores necessary media identifiers, progress, and preference settings locally. Users can disable some history behaviors or remove related records inside the app.',
      section4Title: '4. Feedback and contact information',
      section4Body: 'If you contact us through the feedback page, email, or other support channels, we may receive the email address, device details, and issue description that you choose to provide. This information is used only for troubleshooting, support, and review communication.',
      section5Title: '5. Your choices',
      section5Body: 'You can request updates or deletion of feedback information you voluntarily submit, and you can clear local records such as history and favorites in the app. If you have privacy questions, please contact the support email.',
      sideEyebrow: 'Need support?',
      sideTitle: 'Questions about privacy or review details?',
      sideBody: 'If you need to confirm support channels, the purpose of this privacy page, or review-facing information, the support page is the quickest next step.',
      sideCta: 'Open support page'
    },
    feedbackPage: {
      eyebrow: 'Support & Feedback',
      title: 'Support and feedback',
      description: 'If you run into issues while using GenPlayer, please reach out through the options below.',
      stat1Label: 'Preferred channel',
      stat1Value: 'Email support',
      stat2Label: 'Best with',
      stat2Value: 'Device info + repro steps',
      stat3Label: 'Works for',
      stat3Value: 'Bug reports, requests, review communication',
      contactKicker: 'Contact',
      contactTitle: 'Contact options',
      contactBody: 'Email is the recommended support channel. Please include your device model, OS version, media source type (local / SMB / WebDAV / Jellyfin / Emby), and reproduction steps when possible.',
      reviewKicker: 'For App Review',
      reviewTitle: 'App Review support guidance',
      reviewBody: 'A privacy policy URL should generally be ready for iOS distribution. A dedicated support page may not be a standalone legal requirement, but it is highly useful as a public Support URL and helps reviewers understand how users can contact you.',
      formEyebrow: 'Static Mail Form',
      formTitle: 'Generate a support email from a static form',
      formBody: 'This form does not send data to a server. It simply generates a prefilled email for the user.',
      tip1Title: 'Describe reproduction steps',
      tip1Body: 'Include the media source, navigation path, and expected behavior whenever possible so issues can be reproduced faster.',
      tip2Title: 'Add device details',
      tip2Body: 'Model, OS version, network context, and source type are all useful clues.',
      tip3Title: 'Still works as a static site',
      tip3Body: 'Nothing is stored on a server. The page only helps generate a prefilled email.',
      formEmail: 'Your email',
      formEmailPlaceholder: 'name@example.com',
      formTopic: 'Topic',
      topicBug: 'Bug report',
      topicFeature: 'Feature request',
      topicReview: 'Review communication',
      formDevice: 'Device / OS info',
      formDevicePlaceholder: 'Example: iPhone 15 Pro / iOS 18 / Jellyfin',
      formMessage: 'Details',
      formMessagePlaceholder: 'Describe the issue, reproduction steps, expected result, and whether it happens consistently.',
      formSubmit: 'Generate email'
    },
    notFoundPage: {
      eyebrow: 'Page Not Found',
      title: 'This page does not exist, or it has moved.',
      body: 'You can head back to the homepage, or continue to the privacy policy and support pages.',
      primaryCta: 'Back to home',
      secondaryCta: 'Get support'
    },
    footer: {
      privacy: 'Privacy',
      feedback: 'Support',
      home: 'Home'
    }
  }
};

const flatten = (obj, prefix = '') =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(acc, flatten(value, path));
    } else {
      acc[path] = value;
    }
    return acc;
  }, {});

const getPreferredLanguage = () => {
  const saved = localStorage.getItem('genplayer-language');
  if (saved && dictionaries[saved]) return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
};

const getPreferredTheme = () => {
  const saved = localStorage.getItem('genplayer-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyLanguage = (language) => {
  const dict = flatten(dictionaries[language] || dictionaries.en);
  document.documentElement.lang = language === 'zh-CN' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.getAttribute('data-i18n-placeholder');
    if (dict[key]) node.setAttribute('placeholder', dict[key]);
  });

  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.textContent = language === 'zh-CN' ? 'EN' : '中';
  localStorage.setItem('genplayer-language', language);
};

const applyTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀︎' : '◐';
  localStorage.setItem('genplayer-theme', theme);
};

const initializeFeedbackForm = () => {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const language = localStorage.getItem('genplayer-language') || getPreferredLanguage();
    const isZh = language === 'zh-CN';
    const subjectMap = {
      bug: isZh ? 'GenPlayer Bug 反馈' : 'GenPlayer Bug Report',
      feature: isZh ? 'GenPlayer 功能建议' : 'GenPlayer Feature Request',
      review: isZh ? 'GenPlayer 审核沟通' : 'GenPlayer Review Communication'
    };
    const topic = formData.get('topic') || 'bug';
    const body = [
      isZh ? '反馈来源：官网静态反馈页' : 'Source: website static feedback page',
      `${isZh ? '邮箱' : 'Email'}: ${formData.get('email') || ''}`,
      `${isZh ? '设备信息' : 'Device / OS'}: ${formData.get('device') || ''}`,
      `${isZh ? '详细说明' : 'Details'}:\n${formData.get('message') || ''}`
    ].join('\n\n');
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subjectMap[topic])}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
};

const initializeSupportEmail = () => {
  const emailLink = document.getElementById('emailLink');
  if (!emailLink) return;
  emailLink.href = `mailto:${SUPPORT_EMAIL}`;
  emailLink.textContent = SUPPORT_EMAIL;
};

const initializeRevealObserver = () => {
  const nodes = document.querySelectorAll('.reveal-on-scroll');
  if (!nodes.length) return;

  if (!('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
  );

  nodes.forEach((node) => observer.observe(node));
};

const initialize = () => {
  const language = getPreferredLanguage();
  const theme = getPreferredTheme();

  applyLanguage(language);
  applyTheme(theme);

  document.getElementById('year')?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));

  document.getElementById('langToggle')?.addEventListener('click', () => {
    const current = localStorage.getItem('genplayer-language') || language;
    applyLanguage(current === 'zh-CN' ? 'en' : 'zh-CN');
  });

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme') || theme;
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  initializeFeedbackForm();
  initializeSupportEmail();
  initializeRevealObserver();
};

initialize();
