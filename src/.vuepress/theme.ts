import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";

export default hopeTheme({
  hostname: "https://rochsen.github.io/",

  author: {
    name: "Rochsen",
    url: "https://rochsen.github.io/",
  },

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  blog: { },

  locales: {
    "/en/": {
      navbar: enNavbar,
      footer: "Default footer",
      displayFooter: true,
      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /** Chinese locale config */
    "/": {
      navbar: zhNavbar,
      footer: "默认页脚",
      displayFooter: true,
      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
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
