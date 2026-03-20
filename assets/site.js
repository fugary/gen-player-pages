const SUPPORT_EMAIL = 'support@genplayer.app';
const dictionaries = {
  'zh-CN': {
    nav: { product: '产品', features: '功能', scenarios: '场景', privacy: '隐私政策', feedback: '问题反馈', home: '首页' },
    hero: {
      eyebrow: '本地与远程一体化媒体中心',
      title: '为你的文件、媒体库和播放体验提供一个统一入口。',
      description: 'GenPlayer 将本地文件管理、SMB / WebDAV 网络访问、Jellyfin / Emby 媒体库与 VLC 播放核心整合到一套体验中。',
      primaryCta: '查看核心功能',
      secondaryCta: '阅读隐私政策',
      stat1Value: 'iOS 14+',
      stat1Label: '兼容 iPhone / iPad / tvOS',
      stat2Value: 'SMB · WebDAV · Jellyfin · Emby',
      stat2Label: '连接本地文件与远程媒体库',
      stat3Value: 'VLC Core',
      stat3Label: '多格式播放与字幕/音轨支持'
    },
    product: {
      eyebrow: '产品定位',
      title: '不是单纯播放器，而是面向个人媒体的控制中枢。',
      card1Title: '统一入口',
      card1Body: '在同一个应用里管理本地文件、远程协议服务和媒体服务器，减少来回切换应用的成本。',
      card2Title: '媒体导向体验',
      card2Body: '从文件浏览到海报墙、从历史记录到收藏，再到离线播放与流媒体回退，围绕媒体消费过程做整合。'
    },
    features: {
      eyebrow: '核心功能',
      title: '围绕“文件、连接、播放、隐私”构建。',
      fileTitle: '文件管理',
      fileBody: '支持本地文件浏览、文件夹整理、重命名、移动、删除，以及图片/文本预览。',
      remoteTitle: '远程连接',
      remoteBody: '支持 SMB 与 WebDAV，并持续拓展面向家庭服务器和 NAS 的访问能力。',
      libraryTitle: '媒体库集成',
      libraryBody: '深度集成 Jellyfin / Emby，支持库浏览、详情定位、历史与收藏跳转。',
      playbackTitle: '播放体验',
      playbackBody: '基于 VLC 内核，支持常见视频/音频格式、字幕、音轨、倍速、画中画和手势控制。',
      historyTitle: '历史与收藏',
      historyBody: '统一记录本地与远程媒体的历史进度与收藏信息，帮助用户从上次中断位置快速继续。',
      privacyTitle: '隐私与安全',
      privacyBody: '支持应用锁、生物识别与隐私模式，敏感凭据通过安全存储方案处理。'
    },
    support: {
      eyebrow: '支持范围',
      title: '连接你已经在使用的媒体来源。',
      smb: '局域网共享与 NAS 访问',
      webdav: '兼容 Alist 与多种 WebDAV 服务',
      jellyfin: '媒体库浏览、详情与历史关联',
      emby: '海报墙浏览与远程播放协同',
      local: '文件 App / 相册 / On My iPhone',
      vlc: '多格式播放与字幕兼容'
    },
    scenarios: {
      eyebrow: '使用场景',
      title: '适合个人影音整理，也适合家庭服务器播放。',
      case1Title: '本地媒体整理',
      case1Body: '整理 iPhone / iPad 中的视频、音频和图片，并通过统一播放器继续观看。',
      case2Title: '家庭 NAS / 私有云访问',
      case2Body: '连接 SMB 或 WebDAV 服务，在移动端快速查看和播放远程文件。',
      case3Title: '媒体库连续观看',
      case3Body: '从 Jellyfin / Emby 中浏览海报墙、定位剧集详情，并回到你的历史进度。'
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: '继续推进多端同步、下载中心与离线关联播放。',
      body: '当前重点方向包括下载中心深化、历史/收藏/服务器数据一致性，以及未来的同步与扩展能力。',
      primaryCta: '提交问题反馈',
      secondaryCta: '查看隐私承诺'
    },
    privacyPage: {
      eyebrow: 'Privacy Policy',
      title: 'GenPlayer 隐私政策',
      updated: '最后更新：2026-03-20',
      section1Title: '1. 我们处理哪些信息',
      section1Body: 'GenPlayer 的核心能力以本地文件访问、远程媒体连接和播放体验为主。应用可能处理你主动提供的信息，例如服务器地址、用户名、访问令牌、播放历史、收藏状态，以及你主动发起反馈时填写的联系方式。',
      section2Title: '2. 本地文件与远程服务连接',
      section2Body: '本地文件内容主要在你的设备上处理。对于 SMB、WebDAV、Jellyfin、Emby 等远程服务，应用会在你主动配置后使用对应凭据进行连接。敏感凭据应通过安全存储方案保存在设备侧，不用于公开展示或出售。',
      section3Title: '3. 历史记录、收藏与个性化功能',
      section3Body: '为了实现继续播放、历史记录、收藏和离线关联等功能，应用会在本地保存必要的媒体标识、进度与偏好设置。你可以在应用内关闭部分历史能力，或删除相关记录。',
      section4Title: '4. 反馈与联系信息',
      section4Body: '当你通过反馈页面、邮件或其他支持渠道联系我们时，我们可能收到你主动提交的邮箱地址、设备信息和问题描述，这些信息仅用于问题排查、用户支持与审核沟通。',
      section5Title: '5. 你的权利',
      section5Body: '你可以请求更新或删除你主动提交的反馈信息，也可以在应用内清理历史/收藏等本地记录。若你对隐私实践有疑问，请通过支持邮箱联系我们。'
    },
    feedbackPage: {
      eyebrow: 'Support & Feedback',
      title: '问题反馈与支持',
      description: '如果你在使用 GenPlayer 时遇到问题，欢迎通过下方方式联系。',
      contactTitle: '联系渠道',
      contactBody: '推荐使用支持邮箱提交问题，并附上设备型号、系统版本、媒体来源类型（本地/SMB/WebDAV/Jellyfin/Emby）以及复现步骤。',
      reviewTitle: 'iOS 审核与支持建议',
      reviewBody: '对 iOS 上架来说，隐私政策页面通常应准备好；支持/反馈页面虽不一定是单独法规要求，但作为公开的 Support URL 非常有价值，也有利于审核人员快速理解联系渠道。',
      formEyebrow: 'Static Mail Form',
      formTitle: '使用静态表单生成反馈邮件',
      formBody: '此表单不会将数据发送到服务器，而是为你自动生成一封邮件内容。',
      formEmail: '你的邮箱',
      formTopic: '问题类型',
      topicBug: 'Bug 反馈',
      topicFeature: '功能建议',
      topicReview: '审核沟通',
      formDevice: '设备/系统信息',
      formMessage: '详细说明',
      formSubmit: '生成反馈邮件'
    },
    notFoundPage: {
      eyebrow: 'Page Not Found',
      title: '这个页面不存在，或者已经移动。',
      body: '你可以返回首页继续浏览，或前往隐私政策和问题反馈页面。',
      primaryCta: '返回首页',
      secondaryCta: '问题反馈'
    },
    footer: { privacy: '隐私政策', feedback: '问题反馈', home: '首页' }
  },
  en: {
    nav: { product: 'Product', features: 'Features', scenarios: 'Scenarios', privacy: 'Privacy', feedback: 'Support', home: 'Home' },
    hero: {
      eyebrow: 'A unified media center for local and remote libraries',
      title: 'One place for your files, media libraries, and playback experience.',
      description: 'GenPlayer combines local file management, SMB / WebDAV access, Jellyfin / Emby libraries, and a VLC-powered playback core in one experience.',
      primaryCta: 'Explore features',
      secondaryCta: 'Read privacy policy',
      stat1Value: 'iOS 14+',
      stat1Label: 'Built for iPhone, iPad, and tvOS',
      stat2Value: 'SMB · WebDAV · Jellyfin · Emby',
      stat2Label: 'Connect files and remote libraries',
      stat3Value: 'VLC Core',
      stat3Label: 'Broad format support with subtitles and audio tracks'
    },
    product: {
      eyebrow: 'Product',
      title: 'More than a player: a control center for your personal media.',
      card1Title: 'Unified access',
      card1Body: 'Manage local files, remote protocols, and media servers inside one app instead of switching between separate tools.',
      card2Title: 'Media-first workflows',
      card2Body: 'From file browsing to poster walls, from history to favorites, and from offline playback to streaming fallback, the experience is designed around real media usage.'
    },
    features: {
      eyebrow: 'Core features',
      title: 'Built around files, connectivity, playback, and privacy.',
      fileTitle: 'File management',
      fileBody: 'Browse local files, organize folders, rename, move, delete, and preview images or text within the app.',
      remoteTitle: 'Remote access',
      remoteBody: 'Connect to SMB and WebDAV today, with continued expansion for NAS and home server access.',
      libraryTitle: 'Library integration',
      libraryBody: 'Deep Jellyfin / Emby integration with library browsing, detail resolution, and history/favorite navigation.',
      playbackTitle: 'Playback experience',
      playbackBody: 'Powered by VLC for broad media format support, subtitles, audio tracks, playback speed, PiP, and gesture controls.',
      historyTitle: 'History & favorites',
      historyBody: 'Keep local and remote progress together so users can quickly resume what they were watching.',
      privacyTitle: 'Privacy & security',
      privacyBody: 'App lock, biometrics, privacy mode, and secure handling of sensitive credentials are part of the product direction.'
    },
    support: {
      eyebrow: 'What it supports',
      title: 'Works with the media sources you already use.',
      smb: 'LAN shares and NAS access',
      webdav: 'Compatible with Alist and common WebDAV services',
      jellyfin: 'Library browsing, details, and history mapping',
      emby: 'Poster-wall browsing and remote playback flows',
      local: 'Files app, Photos import, and On My iPhone',
      vlc: 'Broad codec and subtitle compatibility'
    },
    scenarios: {
      eyebrow: 'Scenarios',
      title: 'Designed for personal libraries and home servers alike.',
      case1Title: 'Organize local media',
      case1Body: 'Manage videos, audio, and images on iPhone or iPad and keep playback within one consistent workflow.',
      case2Title: 'Access your NAS or private cloud',
      case2Body: 'Connect over SMB or WebDAV to browse and play remote files on mobile devices.',
      case3Title: 'Continue from your media library',
      case3Body: 'Browse Jellyfin or Emby poster walls, resolve series details, and jump back into your watch history.'
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Next up: sync, download center depth, and offline-linked playback.',
      body: 'Current priorities include deeper download workflows, consistency across history/favorites/servers, and future sync capabilities.',
      primaryCta: 'Send feedback',
      secondaryCta: 'See privacy commitments'
    },
    privacyPage: {
      eyebrow: 'Privacy Policy',
      title: 'GenPlayer Privacy Policy',
      updated: 'Last updated: March 20, 2026',
      section1Title: '1. Information we process',
      section1Body: 'GenPlayer focuses on local file access, remote media connectivity, and playback. The app may process information you actively provide, such as server addresses, usernames, access tokens, playback history, favorite states, and contact details you submit through support channels.',
      section2Title: '2. Local files and remote connections',
      section2Body: 'Local file content is primarily processed on your device. For SMB, WebDAV, Jellyfin, Emby, and similar services, the app uses credentials only after you configure them. Sensitive credentials should be handled with device-side secure storage and are not intended for public display or resale.',
      section3Title: '3. History, favorites, and personalization',
      section3Body: 'To support resume playback, history, favorites, and offline-linked experiences, the app stores necessary media identifiers, progress, and preference settings locally. Users can disable some history behaviors or remove related records inside the app.',
      section4Title: '4. Feedback and contact information',
      section4Body: 'If you contact us through the feedback page, email, or other support channels, we may receive the email address, device details, and issue description that you choose to provide. This information is used only for troubleshooting, support, and review communication.',
      section5Title: '5. Your choices',
      section5Body: 'You can request updates or deletion of feedback information you voluntarily submit, and you can clear local records such as history and favorites in the app. If you have privacy questions, please contact the support email.'
    },
    feedbackPage: {
      eyebrow: 'Support & Feedback',
      title: 'Support and feedback',
      description: 'If you run into issues while using GenPlayer, please contact us through the options below.',
      contactTitle: 'Contact options',
      contactBody: 'Email is the recommended support channel. Please include your device model, OS version, media source type (local / SMB / WebDAV / Jellyfin / Emby), and reproduction steps when possible.',
      reviewTitle: 'App Review support guidance',
      reviewBody: 'A privacy policy URL should generally be ready for iOS distribution. A dedicated support/feedback page may not be a standalone legal requirement, but it is highly useful as a public Support URL and helps reviewers understand how users can contact you.',
      formEyebrow: 'Static Mail Form',
      formTitle: 'Generate a support email from a static form',
      formBody: 'This form does not send data to a server. It simply generates a prefilled email for the user.',
      formEmail: 'Your email',
      formTopic: 'Topic',
      topicBug: 'Bug report',
      topicFeature: 'Feature request',
      topicReview: 'Review communication',
      formDevice: 'Device / OS info',
      formMessage: 'Details',
      formSubmit: 'Generate email'
    },
    notFoundPage: {
      eyebrow: 'Page Not Found',
      title: 'This page does not exist, or it has moved.',
      body: 'You can head back to the homepage, or continue to the privacy policy and support pages.',
      primaryCta: 'Back to home',
      secondaryCta: 'Get support'
    },
    footer: { privacy: 'Privacy', feedback: 'Support', home: 'Home' }
  }
};

const flatten = (obj, prefix = '') => Object.entries(obj).reduce((acc, [key, value]) => {
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
};

initialize();
