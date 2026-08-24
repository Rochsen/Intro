<script setup lang="ts">
const contactEmail = 'rochsen1011@gmail.com'
</script>

<template>
  <section id="联系" class="section contact-section">
    <div class="section-container">
      <h2 class="section-title">联系</h2>

      <div class="contact-content">
        <div class="contact-card">
          <div class="contact-icon">✉️</div>
          <h3>欢迎联系我</h3>
          <p class="contact-text">
            如果你对我感兴趣，请随时与我邮件联系。
          </p>
          <a :href="`mailto:${contactEmail}`" class="contact-email">
            {{ contactEmail }}
          </a>
          <p class="contact-note">
            欢迎任何讨论和潜在的合作!
          </p>
        </div>

        <div class="social-links">
          <a href="https://github.com/rochsen" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://rochsen.github.io/" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            博客
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 2rem;
  color: white;
}

.section-container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
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
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  max-width: 600px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.contact-card h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-text {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-email {
  display: inline-block;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.75rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.contact-email:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.contact-note {
  margin-top: 1.5rem;
  font-size: 1rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
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
  font-weight: 500;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .contact-card {
    padding: 2rem;
  }

  .contact-card h3 {
    font-size: 1.5rem;
  }

  .contact-text {
    font-size: 1rem;
  }

  .contact-email {
    font-size: 1.1rem;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
