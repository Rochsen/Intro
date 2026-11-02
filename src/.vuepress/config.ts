import { defineUserConfig, type SiteData } from "vuepress";

import theme from "./theme.ts";

// VuePress 的 base 只能是 "/"，或以 / 开头并以 / 结尾
const isSiteBase = (value: string): value is SiteData["base"] =>
  value.startsWith("/") && value.endsWith("/");

// 公网 https://intro.rochsen.cn 使用根路径
// GitHub Pages https://rochsen.github.io/Intro/ 在构建时设置 VUEPRESS_BASE=/Intro/
const resolveBase = (value: string | undefined): SiteData["base"] => {
  const base = value || "/";
  if (isSiteBase(base)) return base;
  throw new Error(`VUEPRESS_BASE 必须以 / 开头并以 / 结尾，当前为: ${base}`);
};

const base = resolveBase(process.env.VUEPRESS_BASE);

export default defineUserConfig({
  base,

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
