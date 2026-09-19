<template>
<section :id="t.sectionProfileId" class="section section-container">
  <div class="section-header">
    <div class="section-title-row">
      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <path
          d="M504.951 511.98c93.49 0 169.28-74.002 169.28-165.26 0-91.276-75.79-165.248-169.28-165.248-93.486 0-169.287 73.972-169.279 165.248-0.001 91.258 75.793 165.26 169.28 165.26z m77.6 55.098H441.466c-120.767 0-218.678 95.564-218.678 213.45V794.3c0 48.183 97.911 48.229 218.678 48.229H582.55c120.754 0 218.66-1.78 218.66-48.229v-13.77c0-117.887-97.898-213.45-218.66-213.45z"
          p-id="1748" fill="#1296db"></path>
      </svg>
      <h2 class="section-title-text">{{ t.profileTitle }}</h2>
    </div>
    <div class="section-divider"></div>
  </div>

  <div class="section-card">
    <div class="profile-grid">
      <!-- 教育背景 -->
      <div class="info-section">
        <div class="info-tag">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              d="M512 597.994q108.011 0 209.003-52.011t158.995-140.997q-71.002-66.995-177.003-100.992T512 311.994t-190.992 92.999T144.002 405.985q53.995 88.986 155.995 140.997T512 597.994zM768 767.994q0 66.005-42.997 123.995T608.01 992H415.99q0-62.005-42.003-120.001T256 767.994q0 0 0 0 0.998-157.005 147.993-276.997T512 335.994t108.009 154.997T668.003 767.994q0 0 0 0z"
              fill="#0366ee" />
          </svg>
          <span>{{ t.education }}</span>
        </div>
        <div class="info-value">{{ t.educationValue }}</div>
      </div>
      <!-- 本科专业 -->
      <div class="info-section">
        <div class="info-tag">
          <svg class="tag-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path d="M96 240L480 144v656L96 720V240zM544 144l384 96v480L544 800V144z" fill="#0366ee" />
          </svg>
          <span>{{ t.major }}</span>
        </div>
        <div class="info-value">{{ t.majorValue }}</div>
      </div>
      <!-- 出生日期 -->
      <div class="info-section">
        <div class="info-tag">
          <svg class="tag-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path d="M512 192C440 262 446 320 512 320C578 320 584 262 512 192Z" fill="#0366ee" />
            <path d="M484 332A28 28 0 0 1 512 304A28 28 0 0 1 540 332V424H484Z" fill="#0366ee" />
            <path
              d="M216 424H808Q864 424 864 480V672Q864 728 808 728H216Q160 728 160 672V480Q160 424 216 424Z"
              fill="#0366ee" />
            <path d="M144 728H880Q912 728 912 760V792Q912 824 880 824H144Q112 824 112 792V760Q112 728 144 728Z"
              fill="#0366ee" />
          </svg>
          <span>{{ t.birthday }}</span>
        </div>
        <div class="info-value">{{ t.birthdayValue }}</div>
      </div>
      <!-- 联系方式 -->
      <div class="info-section">
        <div class="info-tag">
          <svg class="tag-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path d="M96 160L928 512 96 864l64-288 512-64-512-64z" fill="#0366ee" />
          </svg>
          <span>{{ t.contacts }}</span>
        </div>
        <div class="info-value">{{ qqContact }}</div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Myi18n } from "./data/index.ts";

// 组件参数
const props = defineProps({
  lang: {
    type: String,
    default: "zh-CN",
  },
});

// 渲染工具
const t = computed(() => Myi18n[props.lang] ?? Myi18n["zh-CN"]);

// 联系方式，取qq
const qqContact = computed(() => {
  return t.value.contactList?.find(contact => contact.iconType === 'qq')?.value;
});

</script>

<style lang="scss" scoped>
// ProfileSection 组件无通用样式，所有通用样式均在 index.scss 中定义
// ============================================================

/* 档案信息左右分块 */
.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* 间距 */
  gap: 1.5rem;
  /* 横向等比分割 */
  justify-content: space-evenly;
  /* 纵向等比分割 */
  align-content: space-evenly;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--section-primary-light);
  color: var(--section-primary);
  padding: var(--section-tag-padding);
  border-radius: var(--section-tag-radius);
  font-size: var(--section-tag-font-size);
  font-weight: 600;
  letter-spacing: 0.5px;
  width: fit-content;
}

.tag-icon {
  flex-shrink: 0;
}

.info-value {
  font-size: 1.2rem;
  color: var(--section-text-primary);
  line-height: 1.3;
  font-weight: 700;
}

@media (max-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title-text {
    font-size: 1.5rem;
  }

  .info-value {
    font-size: 1.1rem;
  }

  .section-card {
    padding: 1.25rem !important;
  }

}
</style>
