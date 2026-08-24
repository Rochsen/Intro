<script setup lang="ts">
import { ref, onMounted } from 'vue'

const titles = [
  '是一名 全栈生信分析工程师',
  '是 The sun is a wondrous body',
  '是 Long May The Sun Shine'
]
const currentTitle = ref('')
const titleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

const typeWriter = () => {
  const current = titles[titleIndex.value]

  if (!isDeleting.value) {
    currentTitle.value = current.substring(0, charIndex.value + 1)
    charIndex.value++

    if (charIndex.value === current.length) {
      setTimeout(() => {
        isDeleting.value = true
      }, 2000)
    }
  } else {
    currentTitle.value = current.substring(0, charIndex.value - 1)
    charIndex.value--

    if (charIndex.value === 0) {
      isDeleting.value = false
      titleIndex.value = (titleIndex.value + 1) % titles.length
    }
  }

  const speed = isDeleting.value ? 50 : 100
  setTimeout(typeWriter, speed)
}

onMounted(() => {
  typeWriter()
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="avatar-container">
        <img src="/avatar.png" alt="罗浩森" class="avatar" />
      </div>
      <div class="hero-text">
        <p class="welcome">👋 你好, 很高兴认识你</p>
        <h1 class="name">罗浩森</h1>
        <p class="title">
          {{ currentTitle }}<span class="cursor">|</span>
        </p>
        <div class="social-links">
          <a href="https://github.com/rochsen" target="_blank" class="social-link">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="mailto:rochsen1011@gmail.com" class="social-link">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <span>↓</span>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
}

.avatar-container {
  margin-bottom: 2rem;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
}

.hero-text {
  color: white;
}

.welcome {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.name {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  min-height: 2rem;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-20px); }
  60% { transform: translateX(-50%) translateY(-10px); }
}

@media (max-width: 768px) {
  .name {
    font-size: 2.5rem;
  }

  .welcome, .title {
    font-size: 1.2rem;
  }

  .avatar {
    width: 150px;
    height: 150px;
  }

  .social-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
