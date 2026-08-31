<template>
<section :id="t.sectionProjectId" class="section section-container">
  <div class="section-header">
    <div class="section-title-row">
      <svg t="1787727360769" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="12804" width="30" height="30">
        <path
          d="M67.030138 926.781818l890.334721 0L957.364859 707.735963 67.030138 707.735963 67.030138 926.781818zM511.17368 758.959601 906.14122 758.959601l0 116.598578L511.17368 875.55818 511.17368 758.959601zM67.030138 97.788164l0 219.045855 890.334721 0L957.364859 97.788164 67.030138 97.788164zM906.14122 265.61038 512.196986 265.61038 512.196986 149.010779 906.14122 149.010779 906.14122 265.61038zM67.030138 621.807918l890.334721 0L957.364859 402.762063 67.030138 402.762063 67.030138 621.807918zM511.17368 453.985702 906.14122 453.985702l0 116.598578L511.17368 570.58428 511.17368 453.985702z"
          p-id="12805" fill="#1296db"></path>
      </svg>
      <h2 class="section-title-text">{{ t.projectTitle }}</h2>
    </div>
    <div class="section-divider"></div>
  </div>

  <!-- 项目多卡片容器 -->
  <div class="section-card">
    <ProjectCard
      v-for="project in t.projectList"
      :key="project.id"
      :project="project"
      @click="activeProject = project"
    />
  </div>

  <!-- 项目详情模态框 -->
  <ProjectModal
    :project="activeProject"
    :visible="activeProject !== null"
    :lang="lang"
    @close="activeProject = null"
  />
</section>
</template>

<script setup lang="ts">
import { Myi18n } from "./data/index.ts";
import { computed, ref } from "vue";
import ProjectCard from "./project/ProjectCard.vue";
import ProjectModal from "./project/ProjectModal.vue";
import type { projectListItemType } from "./type/project.ts";

const props = defineProps({
  lang: {
    type: String,
    default: "zh-CN",
  },
});
const t = computed(() => Myi18n[props.lang] ?? Myi18n["zh-CN"]);

/** 当前在模态框中查看的项目 */
const activeProject = ref<projectListItemType | null>(null);
</script>

<style scoped lang="scss">
.section-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  align-items: stretch;
  padding: 0 !important;
  margin: 15px auto 0;
  border: none !important;
  box-shadow: none !important;
}

@media (max-width: 1024px) {
  .section-card {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section-card {
    grid-template-columns: 1fr;
  }
}
</style>
