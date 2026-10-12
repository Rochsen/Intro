import { defineUserConfig } from "vuepress";

import theme from "./theme.ts";

export default defineUserConfig({
  // process.env 为 string，需断言为 VuePress 要求的 base 字面量类型
  base: (process.env.VP_BASE || "/") as "/" | `/${string}/`,

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
