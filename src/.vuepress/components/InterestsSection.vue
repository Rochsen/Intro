<template>
<section :id="t.sectionInterestsId" class="section section-container">
  <div class="section-header">
    <div class="section-title-row">
      <svg t="1787726752395" class="icon" viewBox="0 0 1164 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="9673" width="30" height="30">
        <path
          d="M74.058193 532.333037C27.785244 476.104249 0 404.088391 0 325.582933 0 145.768439 145.768533 0 325.582933 0 429.311526 0 521.710696 48.507828 581.333333 124.076658 640.95597 48.507828 733.355141 0 837.083733 0 1016.898133 0 1162.666667 145.768439 1162.666667 325.582933 1162.666667 405.381215 1133.958874 478.474382 1086.307556 535.09805 1079.721007 544.854993 1071.482548 557.003899 1061.280237 571.992178 939.323496 751.159111 665.963378 1023.812124 579.622637 1023.812124 491.19123 1023.812124 223.651319 753.861191 100.7424 571.992178 89.526044 555.395058 80.781511 542.392439 74.058193 532.333037Z"
          fill="#1296db" p-id="9674"></path>
      </svg>
      <h2 class="section-title-text">{{ t.interestsTitle }}</h2>
    </div>
    <div class="section-divider"></div>
  </div>

  <!-- 兴趣卡片 -->
  <div class="section-card">
    <ul>
      <li v-for="text in t.interestList">{{ text }}</li>
    </ul>
  </div>
</section>
</template>

<script setup lang="ts">
import { Myi18n } from "./data/index.ts";
import { computed } from "vue";

const props = defineProps({
  lang: {
    type: String,
    default: "zh-CN",
  },
});
const t = computed(() => Myi18n[props.lang] ?? Myi18n["zh-CN"]);
</script>

<style scoped lang="scss">
.section-card {
  padding: 0 20px;
  background: none !important;
  border: none !important;
  box-shadow: none !important;

  ul {
    margin: 1rem auto;

    li {
      margin: 1rem auto;
    }
  }
}
</style>
