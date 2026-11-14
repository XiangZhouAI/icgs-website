import type { Locale } from "./config";

const en = {
  meta: {
    siteName: "Ireland Chinese Golf Society",
    siteNameShort: "ICGS",
    description:
      "Discover and join the Ireland Chinese Golf Society — golf, friendship, and community across Ireland.",
  },
  nav: {
    home: "Home",
    about: "About us",
    history: "History",
    gallery: "Gallery",
    sponsors: "Sponsors",
    join: "Join",
    contact: "Contact",
    outings: "Outings",
    competitions: "Competitions",
  },
  common: {
    learnMore: "Learn more",
    applyNow: "Apply to join",
    contactUs: "Contact us",
    comingSoon: "Coming soon",
    placeholder: "Placeholder",
    email: "Email",
    wechat: "WeChat",
    send: "Submit application",
    required: "Required",
  },
  home: {
    brand: "Ireland Chinese Golf Society",
    brandZhHint: "爱尔兰华人高尔夫协会",
    headline: "Play together. Belong together.",
    support:
      "A welcoming golf society for Chinese and Irish golfers across Ireland — outings, friendship, and fairway community.",
    ctaJoin: "Join ICGS",
    ctaAbout: "About the society",
    sectionTitle: "Why ICGS",
    sectionSupport:
      "From first tee to society dinners, we connect golfers who want a home course community in Ireland.",
    pillars: [
      {
        title: "Society outings",
        body: "Regular rounds at courses around Ireland — open to members and invited guests.",
      },
      {
        title: "Inclusive community",
        body: "Chinese and Irish golfers playing side by side, with bilingual welcome.",
      },
      {
        title: "Clear path to join",
        body: "Simple application, handicap guidance, and a committee that helps you settle in.",
      },
    ],
  },
  about: {
    title: "About us",
    lead: "Ireland Chinese Golf Society brings golfers together for competition, camaraderie, and cultural connection.",
    body: [
      "ICGS is a member-led golf society based in Ireland. We organise social rounds, friendly competitions, and gatherings that celebrate both Irish and Chinese golf culture.",
      "Whether you are an established player or still finding your handicap, you will find a place here — with guidance, good company, and a shared love of the game.",
    ],
    valuesTitle: "What we stand for",
    values: [
      {
        title: "Welcome",
        body: "New members are guided through joining, handicaps, and their first outing.",
      },
      {
        title: "Fair play",
        body: "We follow recognised golf etiquette and scoring standards on every round.",
      },
      {
        title: "Bridge cultures",
        body: "Irish and Chinese traditions meet on the course and at society events.",
      },
    ],
  },
  history: {
    title: "History",
    lead: "Our story is still being written — this page holds the structure for milestones as they are confirmed.",
    timeline: [
      {
        year: "Founding",
        title: "Society established",
        body: "Placeholder: founding year, founding members, and the first home course will be added here.",
      },
      {
        year: "Growth",
        title: "Community expands",
        body: "Placeholder: early outings, first competitions, and partnerships that shaped ICGS.",
      },
      {
        year: "Today",
        title: "Looking ahead",
        body: "Placeholder: current membership focus, venues, and plans for the season ahead.",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    lead: "Moments from outings and society life. Photo and video slots below are ready for official media.",
    photosTitle: "Photos",
    videosTitle: "Videos",
    photoCaption: "Outing photo",
    videoPlaceholder: "Video placeholder — embed or upload coming later",
    moreSoon: "More media will be added as events are documented.",
  },
  sponsors: {
    title: "Sponsors",
    lead: "Thank you to the partners who support ICGS events and prizes.",
    note: "Logos imported as interim brand assets from the society score system. Official sponsor copy and links can be updated here.",
    becomeTitle: "Become a sponsor",
    becomeBody:
      "Interested in supporting an outing or season? Reach out via the contact page — partnership details are placeholders for now.",
  },
  join: {
    title: "Join ICGS",
    lead: "Apply online, or reach us by email and WeChat. Membership payment will be confirmed separately.",
    channelsTitle: "How to reach us",
    emailValue: "join@icgs.ie",
    emailNote: "Placeholder address — replace with the official membership inbox.",
    wechatValue: "ICGS_Ireland",
    wechatNote: "Placeholder WeChat ID — replace with the official society account or QR.",
    requirementsTitle: "Join requirements",
    requirementsIntro:
      "Exact criteria will be confirmed by the committee. Structure below is ready for final wording.",
    requirements: [
      "Interest in golf and willingness to follow society outing etiquette.",
      "Ability to play social rounds in Ireland (transport arranged by member).",
      "Completion of the online application form below.",
      "Agreement to society rules once membership is offered (placeholder).",
      "Membership fee / payment process — TBD (not integrated on this site yet).",
    ],
    handicapTitle: "Handicap estimation process",
    handicapIntro:
      "If you do not yet hold an official handicap, ICGS can help estimate one for society play.",
    handicapSteps: [
      {
        title: "Tell us your experience",
        body: "On the form, note rounds played, typical scores, and any prior club or society affiliation.",
      },
      {
        title: "Committee review",
        body: "The handicap officer (or committee) reviews your details — placeholder process pending final policy.",
      },
      {
        title: "Provisional estimate",
        body: "You may receive a provisional society handicap for early outings until an official index is established.",
      },
      {
        title: "Adjust with play",
        body: "After society rounds, estimates may be refined. Official WHS / Golf Ireland paths can be advised later.",
      },
    ],
    formTitle: "Online application",
    formNote:
      "Submissions are collected in-browser for now (demo). Wire to email or a form backend before launch.",
    fields: {
      fullName: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      wechat: "WeChat ID (optional)",
      experience: "Golf experience",
      handicap: "Current handicap (if any)",
      message: "Anything else we should know?",
    },
    experienceOptions: [
      "New to golf",
      "Social player",
      "Regular club / society player",
      "Competitive player",
    ],
    successTitle: "Application noted",
    successBody:
      "Thank you. This demo stores nothing on a server yet — please also email or WeChat us so the committee can follow up.",
  },
  contact: {
    title: "Contact",
    lead: "Questions about membership, outings, or sponsorship — get in touch.",
    emailLabel: "General email",
    emailValue: "hello@icgs.ie",
    emailNote: "Placeholder — replace with the official contact address.",
    wechatLabel: "WeChat",
    wechatValue: "ICGS_Ireland",
    wechatNote: "Placeholder WeChat ID / QR coming later.",
    locationLabel: "Based in",
    locationValue: "Ireland",
    locationNote: "Home course and meetup details to be published with the season calendar.",
    formHint: "Prefer a structured application? Use the Join page form.",
  },
  footer: {
    tagline: "Golf society · Ireland",
    rights: "Ireland Chinese Golf Society",
    outingsStub: "Outings (soon)",
    competitionsStub: "Competitions (soon)",
    bilingual: "Available in English and 中文",
  },
};

const zh = {
  meta: {
    siteName: "爱尔兰华人高尔夫协会",
    siteNameShort: "ICGS",
    description:
      "了解并加入爱尔兰华人高尔夫协会——在爱尔兰享受高尔夫、友谊与社群。",
  },
  nav: {
    home: "首页",
    about: "关于我们",
    history: "历史",
    gallery: "相册",
    sponsors: "赞助商",
    join: "加入我们",
    contact: "联系",
    outings: "活动",
    competitions: "赛事",
  },
  common: {
    learnMore: "了解更多",
    applyNow: "在线申请",
    contactUs: "联系我们",
    comingSoon: "即将推出",
    placeholder: "待更新",
    email: "邮箱",
    wechat: "微信",
    send: "提交申请",
    required: "必填",
  },
  home: {
    brand: "爱尔兰华人高尔夫协会",
    brandZhHint: "Ireland Chinese Golf Society",
    headline: "一起挥杆，同属一社。",
    support:
      "面向爱尔兰华人与本地球友的友好高球社群——球叙、友谊与球道上的归属感。",
    ctaJoin: "加入 ICGS",
    ctaAbout: "关于协会",
    sectionTitle: "为什么选择 ICGS",
    sectionSupport:
      "从第一次开球到协会聚会，我们连接希望在爱尔兰找到高球家园的球友。",
    pillars: [
      {
        title: "协会球叙",
        body: "定期在爱尔兰各地球场挥杆——会员与受邀嘉宾均可参与。",
      },
      {
        title: "包容社群",
        body: "华人与爱尔兰球友并肩同场，双语欢迎新朋友。",
      },
      {
        title: "清晰入会路径",
        body: "简易申请、差点指导，以及帮助你融入的委员会。",
      },
    ],
  },
  about: {
    title: "关于我们",
    lead: "爱尔兰华人高尔夫协会汇聚球友，以友谊、赛事与文化连结为纽带。",
    body: [
      "ICGS 是扎根爱尔兰的会员制高尔夫协会。我们组织社交球叙、友谊赛与聚会，融合爱尔兰与华人高球文化。",
      "无论你是资深球手，还是仍在摸索差点，这里都欢迎你——有指引、有伙伴、有对这项运动的共同热爱。",
    ],
    valuesTitle: "我们的理念",
    values: [
      {
        title: "欢迎",
        body: "帮助新会员完成入会、差点与首次出队。",
      },
      {
        title: "公平竞争",
        body: "每一轮都遵循公认的礼仪与记分标准。",
      },
      {
        title: "文化桥梁",
        body: "爱尔兰与华人传统在球场与协会活动中相遇。",
      },
    ],
  },
  history: {
    title: "历史",
    lead: "协会故事仍在书写——本页已预留里程碑结构，待正式内容确认后填入。",
    timeline: [
      {
        year: "创立",
        title: "协会成立",
        body: "占位：创立年份、创始会员与首个主场球场将在此更新。",
      },
      {
        year: "成长",
        title: "社群壮大",
        body: "占位：早期球叙、首场赛事，以及塑造 ICGS 的合作伙伴。",
      },
      {
        year: "今日",
        title: "展望未来",
        body: "占位：当前会员重点、场馆与新赛季计划。",
      },
    ],
  },
  gallery: {
    title: "相册",
    lead: "球叙与协会生活瞬间。下方照片与视频位已预留，待正式媒体上线。",
    photosTitle: "照片",
    videosTitle: "视频",
    photoCaption: "球叙照片",
    videoPlaceholder: "视频占位——稍后嵌入或上传",
    moreSoon: "更多影像将随活动记录陆续补充。",
  },
  sponsors: {
    title: "赞助商",
    lead: "感谢支持 ICGS 活动与奖项的合作伙伴。",
    note: "标志暂从协会记分系统导入。正式赞助文案与链接可在此更新。",
    becomeTitle: "成为赞助商",
    becomeBody:
      "有意支持某次球叙或整个赛季？请通过联系页沟通——合作细节目前为占位说明。",
  },
  join: {
    title: "加入 ICGS",
    lead: "可在线申请，或通过邮箱与微信联系。会费支付方式将另行确认。",
    channelsTitle: "联系方式",
    emailValue: "join@icgs.ie",
    emailNote: "占位邮箱——请替换为正式会员邮箱。",
    wechatValue: "ICGS_Ireland",
    wechatNote: "占位微信号——请替换为正式公众号或二维码。",
    requirementsTitle: "入会要求",
    requirementsIntro: "具体标准由委员会确认。下方结构便于后续填入正式条文。",
    requirements: [
      "热爱高尔夫，并愿意遵守协会球叙礼仪。",
      "能在爱尔兰参加社交球叙（交通由会员自行安排）。",
      "填写下方在线申请表。",
      "获邀入会后同意协会章程（占位）。",
      "会费 / 支付流程——待定（本站尚未接入支付）。",
    ],
    handicapTitle: "差点估算流程",
    handicapIntro: "若尚无正式差点，ICGS 可协助为协会赛事估算临时差点。",
    handicapSteps: [
      {
        title: "说明球龄与水平",
        body: "在表格中注明打球频率、大致成绩，以及过往球会或协会经历。",
      },
      {
        title: "委员会审核",
        body: "差点负责人（或委员会）审阅资料——正式政策待定。",
      },
      {
        title: "临时估算",
        body: "在正式差点建立前，可能先给予协会临时差点以便参加早期球叙。",
      },
      {
        title: "随赛调整",
        body: "参加协会轮次后可调整估算；之后亦可指导申请正式 WHS / Golf Ireland 差点。",
      },
    ],
    formTitle: "在线申请",
    formNote: "当前为浏览器演示提交（不落库）。上线前请接入邮箱或表单后端。",
    fields: {
      fullName: "姓名",
      email: "邮箱",
      phone: "电话（可选）",
      wechat: "微信号（可选）",
      experience: "高尔夫经历",
      handicap: "当前差点（如有）",
      message: "其他想告诉我们的事？",
    },
    experienceOptions: [
      "高尔夫新手",
      "休闲球友",
      "常打球会 / 协会球友",
      "竞技型球手",
    ],
    successTitle: "已记录申请",
    successBody:
      "感谢提交。演示版尚未写入服务器——请同时发邮件或微信联系，以便委员会跟进。",
  },
  contact: {
    title: "联系",
    lead: "关于入会、球叙或赞助的问题，欢迎联系我们。",
    emailLabel: "通用邮箱",
    emailValue: "hello@icgs.ie",
    emailNote: "占位——请替换为正式联系邮箱。",
    wechatLabel: "微信",
    wechatValue: "ICGS_Ireland",
    wechatNote: "占位微信号 / 二维码稍后提供。",
    locationLabel: "所在地",
    locationValue: "爱尔兰",
    locationNote: "主场球场与聚会详情将随赛季日程公布。",
    formHint: "需要结构化申请？请使用「加入我们」页面的表格。",
  },
  footer: {
    tagline: "高尔夫协会 · 爱尔兰",
    rights: "爱尔兰华人高尔夫协会",
    outingsStub: "活动（即将推出）",
    competitionsStub: "赛事（即将推出）",
    bilingual: "提供 English 与中文",
  },
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh: zh as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
