import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import Home from "./layouts/Home.vue";


export default defineClientConfig({
  setup() {
    // 透明导航栏
    setupTransparentNavbar({ type: "homepage" });
    // 在页脚显示站点运行时间
    setupRunningTimeFooter(
      new Date("2026-01-21"),
      {
        "/en/":
          "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      // 是否保留原有页脚内容
      false,
    );
  },

  //   enhance({ app }) {
  //     // 按需注册 Antdv-next 组件
  //     app.use(Button);
  //     app.use(Card); // CardMeta 随 Card 一起注册
  //     app.use(Col);
  //     app.use(Input); // InputSearch 随 Input 一起注册
  //     app.use(Row);
  //     app.use(Space);
  //     app.use(Table);
  //     app.use(Tag);
  //     app.use(Timeline); // TimelineItem 随 Timeline 一起注册
  //     app.use(Tooltip);
  //   },

  // 布局
    layouts: {
      Home,
    },
});
