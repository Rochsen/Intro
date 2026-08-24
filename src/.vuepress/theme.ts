import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";

export default hopeTheme({
  hostname: "https://rochsen.github.io/",

  author: {
    name: "Luo Haosen",
    url: "https://rochsen.github.io/",
  },

  // logo: "/logo.svg",

  // repo: "Rochsen/Intro",

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
    },
    "/en/": {
      navbar: enNavbar,
      footer: "Default footer",
      displayFooter: false,
      metaLocales: {
        editLink: "Edit this page on GitHub",
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
});
