<script setup lang="ts">
import { computed } from 'vue';
import { Myi18n } from './data.ts';

const props = defineProps({
  lang: {
    type: String,
    default: 'zh-CN',
  },
})
const t = computed(() => Myi18n[props.lang] ?? Myi18n['zh-CN'])

</script>

<template>
  <section :id="t.sectionCareerId" class="section section-contianer">
    <div class="section-header">
      <div class="section-title-row">
        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
          <path
            d="M860 302.2h-61.8V231c0-72.8-59.2-132-132-132H358.3c-72.8 0-132 59.2-132 132v71.2H164c-55.2 0-100 44.8-100 100v82.9h896v-82.9c0-55.2-44.8-100-100-100zM290.3 231c0-37.5 30.5-68 68-68h307.9c37.5 0 68 30.5 68 68v71.2H290.3V231zM604.9 549.2V608c0 26.5-21.5 48-48 48h-86.2c-26.5 0-48-21.5-48-48v-58.9H64v260.6c0 55.2 44.8 100 100 100h696c55.2 0 100-44.8 100-100V549.2H604.9z"
            fill="#1296db" p-id="4017"></path>
        </svg>
        <h2 class="section-title-text">{{ t.careerTitle }}</h2>
      </div>
      <div class="section-divider"></div>
    </div>

    <div class="timeline-container">
      <div v-for="(exp, index) in t.careerSummary" :key="index" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-period">{{ exp.period }}</span>
          </div>
          <h3 class="timeline-title">{{ exp.title }}</h3>
          <p class="timeline-description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background: #f8f9fa;
  padding: 5rem 2rem;
}

.timeline-container {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgb(239, 238, 238);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2.35rem;
  /* top: 0.1rem; */
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  /* border: 3px solid white; */
  /* box-shadow: 0 0 0 3px #667eea; */
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-period {
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
}

.timeline-location {
  color: #888;
  font-size: 0.9rem;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
}

.timeline-company {
  color: #667eea;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -1.85rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
