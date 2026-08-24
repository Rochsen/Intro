import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Profile/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Luo Haosen",
      description: "A FrontEnd programmer",
    },
    "/": {
      lang: "zh-CN",
      title: "Luo Haosen",
      description: "一个前端开发者",
    },
  },

  theme,

  port: 5173
});
