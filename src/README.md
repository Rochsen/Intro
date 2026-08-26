---
portfolio: true
home: true
name: 我是 罗浩森
avatar: /favicon.ico
titles:
  [
    "是一名 全栈生信分析工程师",
    "Yes Indeed",
    "The sun is a wondrous body, Like a magnificent father",
    "Long May The Sun Shine",
  ]
welcome: "👋 你好, 很高兴认识你"
bgImage: /assets/wallpaper-3.jpg
avatarStyle: { width: "300px", height: "300px", align-items: "center" }
content: "portfolio"
icon: house
title: 主页
heroFullScreen: true
footer: ""
copyright: "Copyright © 2026 | Luo Haosen. All rights reserved."
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
