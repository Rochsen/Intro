import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";


// 社交媒体信息
export const mediasConfig = {
  BiliBili: "https://space.bilibili.com/361524948",
  GitHub: "https://github.com/Rochsen",
  Steam: "https://steamcommunity.com/profiles/76561199143139420/",
  Gmail: "mailto:rochsen1011@gmail.com",
  Zhihu: "https://www.zhihu.com/people/Rochsen",
};

export default hopeTheme({
  hostname: "https://rochsen.github.io/",

  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Outlook", "Language"],
  },

  favicon: "/favicon.ico",

  docsDir: "src",

  blog: {},

  locales: {
    "/": {
      navbar: zhNavbar,
      footer: "默认页脚",
      displayFooter: false,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
      blog: {
        medias: mediasConfig,
      },
    },
    "/en/": {
      navbar: enNavbar,
      footer: "Default footer",
      displayFooter: false,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
      blog: {
        medias: mediasConfig,
      },
    },
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em") {
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
          }
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "//at.alicdn.com/t/c/font_5224531_dnv00kxx81w.css",
    },
  },

  // logo: "/logo.svg",

  // repo: "Rochsen/Intro",
});
