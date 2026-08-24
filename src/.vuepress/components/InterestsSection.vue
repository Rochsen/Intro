<script setup lang="ts">
interface Interest {
  icon: string
  title: string
  description: string
}

const interests: Interest[] = [
  {
    icon: '🧬',
    title: '生物信息学',
    description: '基因组数据分析、蛋白质结构预测、生物数据挖掘'
  },
  {
    icon: '💻',
    title: '全栈开发',
    description: 'Vue.js、React、Node.js、Python、数据库设计'
  },
  {
    icon: '📊',
    title: '数据科学',
    description: '机器学习、统计分析、数据可视化'
  },
  {
    icon: '🔬',
    title: '科学研究',
    description: '学术论文写作、实验设计、数据分析'
  }
]

const learningGoals: string[] = [
  '深度学习在生物信息学中的应用',
  '云计算和大数据处理技术',
  '人工智能辅助药物设计',
  '单细胞测序数据分析'
]
</script>

<template>
  <section id="兴趣" class="section interests-section">
    <div class="section-container">
      <h2 class="section-title">兴趣</h2>

      <!-- 研究兴趣 -->
      <div class="subsection">
        <h3 class="subsection-title">研究兴趣</h3>
        <div class="interests-grid">
          <div v-for="(interest, index) in interests" :key="index" class="interest-card">
            <div class="interest-icon">{{ interest.icon }}</div>
            <h4>{{ interest.title }}</h4>
            <p>{{ interest.description }}</p>
          </div>
        </div>
      </div>

      <!-- 学习目标 -->
      <div class="subsection">
        <h3 class="subsection-title">学习目标</h3>
        <div class="learning-goals">
          <ul>
            <li v-for="(goal, index) in learningGoals" :key="index">
              <span class="goal-icon">📚</span>
              {{ goal }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.interests-section {
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

.subsection {
  margin-bottom: 3rem;
}

.subsection-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e0e0e0;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.interest-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.interest-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.interest-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.interest-card h4 {
  color: #667eea;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.interest-card p {
  color: #555;
  line-height: 1.6;
}

.learning-goals {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.learning-goals ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.learning-goals li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease, background 0.3s ease;
}

.learning-goals li:hover {
  transform: translateX(5px);
  background: #f0f0f0;
}

.goal-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .interests-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .subsection-title {
    font-size: 1.5rem;
  }
}
</style>
