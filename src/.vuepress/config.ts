import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/profile/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Rochsen",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "罗浩森",
      description: "五五五五五五",
    },
  },

  theme,

});
