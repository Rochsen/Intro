<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <div class="project-role">👤 {{ project.role }}</div>
    <p class="project-desc">{{ project.description }}</p>
    <div class="project-tags">
      <span v-for="tag in project.tech" :key="tag">{{ tag }}</span>
    </div>
    <div class="project-card-footer" aria-hidden="true">
      <svg class="footer-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 18.5 5.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M12.5 5.5h-7v7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      <span class="footer-text">查看详情</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { projectListItemType } from "../type/project.ts";

defineProps<{
  project: projectListItemType;
}>();
</script>

<style scoped lang="scss">
.project-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.8rem 1.8rem 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.25);;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  // 让内部 clamp() 以“卡片自身宽度”为基准，而不是视口宽度
  container-type: inline-size;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.08);
}
.project-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin-bottom: 1rem;
}
.project-role {
  font-size: 0.8rem;
  color: #2563eb;
  font-weight: 500;
}
.project-desc {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem 0.6rem;
  margin: 0.5rem 0 0.6rem 0;
}
.project-tags span {
  background: #f1f5f9;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.7rem;
  border-radius: 20px;
  color: #334155;
  letter-spacing: 0.2px;
}

/* 右下角：东南 → 西北 箭头 + “查看详情” */
.project-card-footer {
  margin-top: auto; /* 始终贴到卡片底部 */
  align-self: flex-end; /* 靠右对齐 */
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  padding-top: 1rem;
  // 字号随卡片宽度自适应：窄卡片小、宽卡片大，并限定上下限
  font-size: clamp(0.78rem, 2.6cqi, 1.05rem);
  line-height: 1.2;
  color: #94a3b8; /* 浅色模式：偏灰 */
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
  user-select: none;
}
.footer-arrow {
  width: 1.15em;
  height: 1.15em;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.project-card:hover .project-card-footer {
  color: #64748b;
}
.project-card:hover .footer-arrow {
  transform: translate(-2px, -2px);
}

/* 兜底：不支持容器查询的浏览器改用视口宽度缩放 */
@supports not (font-size: 1cqi) {
  .project-card-footer {
    font-size: clamp(0.78rem, 1.1vw, 1.05rem);
  }
}

[data-theme="dark"] .project-card {
  background-color: var(--section-card-container-bg);
  border: 1px solid rgba(100, 116, 139, 0.25);
}
[data-theme="dark"] .project-card-footer {
  color: #ffffff; /* 深色模式：白色 */
  opacity: 0.85;
}
[data-theme="dark"] .project-card:hover .project-card-footer {
  color: #ffffff;
  opacity: 1;
}
</style>