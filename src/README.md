---
portfolio: true
home: true
name: 罗浩森
avatar: /real-avatar.webp
titles:
  ["是一个生物信息分析工程师", "也是一个前端开发工程师", "欢迎来看我的个人简介"]
welcome: "👋 你好, 我是"
bgImage: /assets/wallpaper-3.webp
avatarStyle:
  {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    border: "5px solid rgba(100, 180, 255, 0.7)",
    boxShadow: "0 0 40px rgba(100, 180, 255, 0.5), 0 0 80px rgba(100, 180, 255, 0.3)",
  }
content: "portfolio"
icon: house
title: 主页
heroFullScreen: true
footer: ""
copyright: '<span style="display:inline-flex;align-items:flex-end;vertical-align:bottom;"><span style="display:inline-block;width:16px;flex-shrink:0;margin-right:0.25rem;line-height:0;"><img src="/registration.png" alt="" style="display:block;width:100%;height:auto;border:0;" /></span><a href="https://beian.mps.gov.cn/#/query/webSearch?code=44200102446526" rel="noreferrer" target="_blank" style="color:#749AE3;">粤公网安备 44200102446526号</a><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="margin-left:20px;color:#749AE3;">粤ICP备2026169315号</a></span>'
---

<script setup>
import ProfileSection from './.vuepress/components/ProfileSection.vue'
import ExperienceSection from './.vuepress/components/ExperienceSection.vue'
import TechStackSection from './.vuepress/components/TechStackSection.vue'
import ProjectSection from './.vuepress/components/ProjectSection.vue'
import InterestsSection from './.vuepress/components/InterestsSection.vue'
import WelcomeSection from './.vuepress/components/WelcomeSection.vue'

import { ref } from 'vue'
import { usePageLang } from 'vuepress/client'

// 获取当前语言
const lang = usePageLang()

</script>

<ClientOnly>
  <div class="main-container">
    <ProfileSection :lang="lang" />
    <ExperienceSection :lang="lang" />
    <TechStackSection :lang="lang" />
    <ProjectSection :lang="lang" />
    <InterestsSection :lang="lang" />
    <WelcomeSection :lang="lang" />
  </div>
</ClientOnly>
