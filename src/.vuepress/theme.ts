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
  hostname: "https://rochsen.github.io/intro",

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
    },
    "/en/": {
      navbar: enNavbar,
      footer: "Default footer",
      displayFooter: false,
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

  // 插件配置
  plugins: {
    // 多语言按钮需要 blog 开启
    blog: true,

    components: {
      components: ["Badge"],
    },

    icon: {
      prefix: "//at.alicdn.com/t/c/font_5224531_dnv00kxx81w.css",
    },
  },
});
