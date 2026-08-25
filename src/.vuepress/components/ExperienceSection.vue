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
  <section id="生涯" class="section experience-section">
    <div class="section-container">
      <h2 class="section-title">经历</h2>

      <div class="timeline">
        <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-period">{{ exp.period }}</span>
              <span class="timeline-location">{{ exp.location }}</span>
            </div>
            <h3 class="timeline-title">{{ exp.title }}</h3>
            <p class="timeline-company">{{ exp.company }}</p>
            <p class="timeline-description">{{ exp.description }}</p>
          </div>
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

.section-container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #667eea, #764ba2);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2.35rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
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
