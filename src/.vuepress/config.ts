import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Profile/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "HomePage",
      description: "A FrontEnd programmer",
    },
    "/": {
      lang: "zh-CN",
      title: "HomePage",
      description: "一个前端开发者",
    },
  },

  theme,
});
