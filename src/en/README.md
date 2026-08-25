---
portfolio: true
home: true
name: Luo Haosen
avatar: /assets/avatar.png
titles: [
    "Yes Indeed",
    "The sun is a wondrous body, Like a magnificent father",
    "Only a storm can fell a Great Wood", 
    "Long May The Sun Shine",
    "Fear not, the dark, my friend. And let the feast begin",
    "ashen one, hearest thou my voice still?",
    ]
welcome: "👋 HI THERE, I AM"
bgImage: /assets/wallpaper-6.jpg
avatarStyle: { width: "300px", height: "300px", align-items: "center" }
content: "portfolio"
icon: house
title: 主页
heroFullScreen: true
footer: ""
copyright: "Copyright © 2026 | Luo Haosen. All rights reserved."
---

<script setup>
import ProfileSection from '../.vuepress/components/ProfileSection.vue'
import ExperienceSection from '../.vuepress/components/ExperienceSection.vue'
import AchievementsSection from '../.vuepress/components/AchievementsSection.vue'
import InterestsSection from '../.vuepress/components/InterestsSection.vue'
import ContactSection from '../.vuepress/components/ContactSection.vue'

import { ref } from 'vue'
import { usePageLang } from 'vuepress/client'

// 获取当前语言
const lang = usePageLang()

</script>

<ClientOnly>
  <ProfileSection :lang="lang" />
  <ExperienceSection :lang="lang" />
  <!-- <AchievementsSection :lang="lang" />
  <InterestsSection :lang="lang" /> -->
</ClientOnly>

