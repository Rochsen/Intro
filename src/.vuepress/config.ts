import { defineUserConfig } from "vuepress";

import theme from "./theme.ts";

export default defineUserConfig({
  base: "/Intro/",

  // 多语言设置，会影响的地方有导航栏Brand 和 语言切换
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Intro",
      description: "Full stack biometric analysis engineer",
    },
    "/": {
      lang: "zh-CN",
      title: "Intro",
      description: "全栈式生信分析工程师",
    },
  },

  theme,

  port: 5173,
});
