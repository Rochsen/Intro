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

// 全站页脚备案号。标签之间的空白会变成文本节点，这里去掉，避免把图标和链接撑开
export const copyrightHtml = `
<span style="display:inline-flex;align-items:flex-end;vertical-align:bottom;">
  <span style="display:inline-block;width:16px;flex-shrink:0;margin-right:0.25rem;line-height:0;">
    <img
      src="/registration.png"
      alt=""
      style="display:block;width:100%;height:auto;border:0;"
    />
  </span>
  <a
    href="https://beian.mps.gov.cn/#/query/webSearch?code=44200102446526"
    rel="noreferrer"
    target="_blank"
  >粤公网安备 44200102446526号</a>
  <a
    href="https://beian.miit.gov.cn/"
    rel="noopener"
    target="_blank"
    style="margin-left:20px;"
  >粤ICP备2026169315号</a>
</span>
`
  .replace(/>\s+</g, "><")
  .trim();

export default hopeTheme({
  hostname: "https://intro.rochsen.cn",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Outlook", "Language"],
  },

  favicon: "/q-avatar.webp",

  docsDir: "src",

  blog: {},

  repo: "https://github.com/Rochsen/",
  repoDisplay: true,

  // 是否展示页脚
  displayFooter: true,
  copyright: copyrightHtml,

  locales: {
    "/": {
      navbar: zhNavbar,
    },
    "/en/": {
      navbar: enNavbar,
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
      // components: ["Badge"],
    },

    icon: {
      prefix: "//at.alicdn.com/t/c/font_5224531_dnv00kxx81w.css",
    },
  },
});
