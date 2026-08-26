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
    },
    "/en/": {
      navbar: enNavbar,
      footer: "Default footer",
      displayFooter: false,
    },
  },

  // 多语言按钮需要 blog 开启
  plugins: {
    blog: true,
  },
});
