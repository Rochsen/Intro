<script setup lang="ts">
interface Achievement {
  title: string
  description: string
  link?: string
}

interface Publication {
  title: string
  authors: string
  journal: string
  year: string
  link: string
  highlight?: string
}

const achievements: Achievement[] = [
  {
    title: '专业服务',
    description: '担任多个学术期刊的审稿人，为学术社区做出贡献。'
  },
  {
    title: '开源贡献',
    description: '积极参与开源项目，贡献代码和文档。'
  }
]

const publications: Publication[] = [
  {
    title: '全栈生信分析工具集',
    authors: '罗浩森 等',
    journal: '生物信息学杂志',
    year: '2024',
    link: '#',
    highlight: '高被引论文'
  },
  {
    title: '基于Vue3的科研管理系统',
    authors: '罗浩森, 张三',
    journal: '计算机应用研究',
    year: '2023',
    link: '#'
  },
  {
    title: '基因组数据分析新方法',
    authors: '李四, 罗浩森',
    journal: '科学通报',
    year: '2022',
    link: '#'
  }
]
</script>

<template>
  <section id="成就" class="section achievements-section">
    <div class="section-container">
      <h2 class="section-title">成就</h2>

      <!-- 专业服务 -->
      <div class="subsection">
        <h3 class="subsection-title">专业服务</h3>
        <div class="achievements-grid">
          <div v-for="(achievement, index) in achievements" :key="index" class="achievement-card">
            <h4>{{ achievement.title }}</h4>
            <p>{{ achievement.description }}</p>
          </div>
        </div>
      </div>

      <!-- 发表论文 -->
      <div class="subsection">
        <h3 class="subsection-title">发表论文</h3>
        <div class="publications-list">
          <div v-for="(pub, index) in publications" :key="index" class="publication-item">
            <div class="publication-content">
              <a :href="pub.link" class="publication-title" target="_blank" rel="noopener noreferrer">
                {{ pub.title }}
              </a>
              <p class="publication-authors">{{ pub.authors }}</p>
              <p class="publication-journal">
                <strong>{{ pub.journal }}</strong>, {{ pub.year }}
              </p>
              <span v-if="pub.highlight" class="publication-highlight">
                {{ pub.highlight }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements-section {
  background: white;
  padding: 5rem 2rem;
}

.section-container {
  max-width: 100vw;
  /* width: 100%; */
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
  border-bottom: 2px solid #f0f0f0;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.achievement-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.achievement-card h4 {
  color: #667eea;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.achievement-card p {
  color: #555;
  line-height: 1.6;
}

.publications-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.publication-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.publication-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.publication-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.publication-title:hover {
  color: #667eea;
}

.publication-authors {
  color: #555;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.publication-journal {
  color: #666;
  font-size: 0.9rem;
}

.publication-journal strong {
  color: #667eea;
}

.publication-highlight {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .achievements-grid {
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
