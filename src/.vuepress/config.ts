import { defineUserConfig } from "vuepress";

import theme from "./theme.ts";

export default defineUserConfig({
  base: "/Intro/",

  // 多语言设置，会影响的地方有导航栏Brand 和 语言切换
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Intro",
    },
    "/": {
      lang: "zh-CN",
      title: "Intro",
    },
  },

  theme,

  port: 5173,
});
