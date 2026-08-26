<script setup lang="ts">
import { computed } from "vue";
import { Myi18n } from "./data.ts";

const props = defineProps({
  lang: {
    type: String,
    default: "zh-CN",
  },
});
const t = computed(() => Myi18n[props.lang] ?? Myi18n["zh-CN"]);

const getTypeColor = (type: string) => {
  return type === "work" ? "#22c55e" : "#3b82f6";
};
</script>

<template>
  <section :id="t.sectionExpId" class="section section-container">
    <div class="section-header">
      <div class="section-title-row">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30">
          <path
            d="M860 302.2h-61.8V231c0-72.8-59.2-132-132-132H358.3c-72.8 0-132 59.2-132 132v71.2H164c-55.2 0-100 44.8-100 100v82.9h896v-82.9c0-55.2-44.8-100-100-100zM290.3 231c0-37.5 30.5-68 68-68h307.9c37.5 0 68 30.5 68 68v71.2H290.3V231zM604.9 549.2V608c0 26.5-21.5 48-48 48h-86.2c-26.5 0-48-21.5-48-48v-58.9H64v260.6c0 55.2 44.8 100 100 100h696c55.2 0 100-44.8 100-100V549.2H604.9z"
            fill="#1296db"
            p-id="4017"></path>
        </svg>
        <h2 class="section-title-text">{{ t.expTitle }}</h2>
      </div>
      <div class="section-divider"></div>
    </div>

    <div class="timeline-container">
      <div
        v-for="(exp, index) in t.experienceList"
        :key="index"
        class="timeline-item">
        <div
          class="timeline-marker"
          :style="{ backgroundColor: getTypeColor(exp.type) }"></div>
        <div class="timeline-period" :style="{ color: getTypeColor(exp.type) }">
          {{ exp.period }}
        </div>
        <div class="timeline-card">
          <div class="timeline-card-content">
            <div
              class="timeline-icon"
              :style="{
                backgroundColor: getTypeColor(exp.type) + '15',
                color: getTypeColor(exp.type),
              }">
              <svg
                v-if="exp.type === 'work'"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor">
                <path
                  d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
              <svg
                v-else
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor">
                <path
                  d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </div>
            <div class="timeline-text">
              <h3 class="timeline-title">
                {{ exp.title }} | {{ exp.subtitle }}
              </h3>
              <p class="timeline-detail" v-if="exp.detail">{{ exp.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.timeline-container {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.timeline-container::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--section-timeline-line-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1rem;
}

.timeline-marker {
  position: absolute;
  left: -2.35rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.timeline-period {
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.timeline-card {
  background: var(--section-card-container-bg);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  padding: 1rem;
  /* height: 8rem; */
}

.timeline-card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.timeline-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.timeline-text {
  flex: 1;
}

.timeline-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--section-text-primary);
  margin-bottom: 0.25rem;
}

.timeline-subtitle {
  font-size: 0.95rem;
  color: var(--section-text-primary);
  margin-bottom: 0.25rem;
}

.timeline-detail {
  font-size: 0.9rem;
  color: #6b7280;
  // font-style: italic;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .timeline-container {
    padding-left: 1.2rem;
  }

  .timeline-item {
    padding-left: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .timeline-marker {
    left: -1.5rem;
    width: 10px;
    height: 10px;
  }

  .section-title-text {
    font-size: 1.5rem;
  }

  .timeline-card-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .timeline-title {
    font-size: 0.94rem;
  }

  .timeline-detail {
    font-size: 0.84rem;
  }
}
</style>
