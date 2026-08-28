<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <div class="project-role">{{ project.role }}</div>
    <p class="project-desc">{{ project.description }}</p>
    <div class="project-tags">
      <span v-for="tag in project.tech" :key="tag">{{ tag }}</span>
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
  border: 1px solid #f1f5f9;
  border-left: 6px solid #2563eb; /* fallback, will be overridden */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.25s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.08);
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
.project-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin-bottom: 0.1rem;
}
.project-role {
  font-size: 0.8rem;
  color: #2563eb;
  font-weight: 500;
  margin-bottom: 0.6rem;
}
.project-desc {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}
</style>
