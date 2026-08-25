import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
// import Home from "./layouts/Home.vue";

export default defineClientConfig({
  setup() {
    // 透明导航栏
    setupTransparentNavbar({ type: "homepage" });
    // 在页脚显示站点运行时间
    setupRunningTimeFooter(
      new Date("2026-08-24"),
      {
        "/en/":
          "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      // 是否保留原有页脚内容, 原本的页脚内容为空，所以true是不会显示的
      true,
    );

    // 锚点跳转偏移，避免被导航栏遮挡
    const NAV_HEIGHT = 50;
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href*="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#') && !href.includes('#')) return;
      const hash = href.split('#')[1];
      if (!hash) return;
      const id = decodeURIComponent(hash);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: 'smooth' });
        history.pushState(null, '', `#${hash}`);
      }
    };
    document.addEventListener('click', handleClick);
  },

  // 布局
  // layouts: {
  //   Home,
  // },
});
