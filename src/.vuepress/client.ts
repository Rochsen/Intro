import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

export default defineClientConfig({
  setup() {
    // 透明导航栏（透明状态下文字为白色）
    setupTransparentNavbar({
      type: "homepage",
      light: "white",
      dark: "white",
    });

    // 锚点跳转偏移，避免被导航栏遮挡
    if (typeof document !== 'undefined') {
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
    }
  },
});
