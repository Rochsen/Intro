<script setup lang="ts">
const profileInfo = {
  affiliation: '无业',
  position: '全栈生信分析工程师',
  location: '广东省揭阳市普宁市',
  contacts: [
    { type: '谷歌邮箱', value: 'rochsen1011@gmail.com', link: 'mailto:rochsen1011@gmail.com' },
    { type: 'QQ邮箱', value: 'github.com/rochsen', link: 'https://github.com/rochsen' },
  ]
}
</script>

<template>
  <section id="档案" class="section profile-section">
    <div class="section-container">
      <h2 class="section-title">档案</h2>

      <div class="profile-grid">
        <div class="profile-card">
          <div class="card-icon">🏢</div>
          <h4>隶属</h4>
          <p>{{ profileInfo.affiliation }}</p>
        </div>

        <div class="profile-card">
          <div class="card-icon">💼</div>
          <h4>职位</h4>
          <p>{{ profileInfo.position }}</p>
        </div>

        <div class="profile-card">
          <div class="card-icon">📍</div>
          <h4>位置</h4>
          <p>{{ profileInfo.location }}</p>
        </div>
      </div>

      <div class="contacts-section">
        <h3>联系方式</h3>
        <ul class="contacts-list">
          <li v-for="contact in profileInfo.contacts" :key="contact.type">
            <span class="contact-type">{{ contact.type }}:</span>
            <a :href="contact.link" target="_blank" rel="noopener noreferrer">
              {{ contact.value }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  background: white;
  padding: 5rem 2rem;
}

.section-container {
  max-width: 80vw;
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

.profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.profile-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.profile-card h4 {
  color: #667eea;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.profile-card p {
  color: #555;
  line-height: 1.6;
}

.contacts-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
}

.contacts-section h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.contacts-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.contacts-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.contact-type {
  font-weight: 600;
  color: #667eea;
  min-width: 80px;
}

.contacts-list a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contacts-list a:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
