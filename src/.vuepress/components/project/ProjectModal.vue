<template>
  <Teleport to="body">
    <div v-if="visible && project" class="modal-overlay" @click.self="close">
      <div class="modal">
        <button class="modal-close" @click="close">&times;</button>

        <h2>{{ project.title }}</h2>
        <div class="modal-role">👤 {{ project.role }}</div>

        <!-- 技术标签（对应 tech） -->
        <div class="modal-tags">
          <span v-for="tag in project.tech" :key="tag">{{ tag }}</span>
        </div>

        <!-- 简短描述（如果有） -->
        <p v-if="project.description" class="modal-description">
          {{ project.description }}
        </p>

        <!-- 核心成就列表 -->
        <div v-if="project.achievements && project.achievements.length" class="achievements-block">
          <h4>✨ {{ labels.achievements }}</h4>
          <ul>
            <li v-for="ach in project.achievements" :key="ach">
              {{ ach }}
            </li>
          </ul>
        </div>

        <!-- 背景与成果 -->
        <div class="story-block">
          <h4>📌 {{ labels.background }}</h4>
          <p>{{ project.background }}</p>

          <h4>📈 {{ labels.result }}</h4>
          <p>{{ project.result }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { projectListItemType } from "../type/project.ts";

const props = withDefaults(
  defineProps<{
    project?: projectListItemType | null;
    visible: boolean;
    lang?: string;
  }>(),
  { lang: "zh-CN" }
);

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};

const labels = computed(() =>
  props.lang === "en-US"
    ? { achievements: "Key Achievements", background: "Background & Challenge", result: "Outcome" }
    : { achievements: "核心成就", background: "背景与挑战", result: "最终成果" }
);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  z-index: 1000;
}
.modal {
  background: #fff;
  max-width: 780px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 20px;
  padding: 2.5rem 2.8rem;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  animation: modalFade 0.25s ease;
}
@keyframes modalFade {
  from { opacity: 0; transform: scale(0.96) translateY(15px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-close {
  position: sticky;
  top: 0;
  float: right;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #94a3b8;
  line-height: 1;
}
.modal-close:hover {
  color: #0f172a;
}
.modal h2 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0.1rem 0 0.2rem;
}
.modal-role {
  color: #2563eb;
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.6rem;
  margin: 0.5rem 0 1rem 0;
}
.modal-tags span {
  background: #f1f5f9;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
  color: #334155;
}
.modal-description {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
}
.achievements-block {
  margin: 1rem 0;
}
.achievements-block h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.3rem;
}
.achievements-block ul {
  padding-left: 1.5rem;
  color: #475569;
  font-size: 0.95rem;
}
.achievements-block li {
  margin-bottom: 0.25rem;
}
.story-block h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 1.2rem 0 0.2rem 0;
  color: #0f172a;
}
.story-block p {
  color: #475569;
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
}
@media (max-width: 768px) {
  .modal { padding: 1.8rem 1.2rem; }
}
</style>
