<script setup lang='ts'>
import { computed } from 'vue'
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
    <section :id="t.sectionTechStackId" class="section section-contianer">
        <div class="section-header">
            <div class="section-title-row">
                <svg t="1787714827044" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4579" width="30" height="30">
                    <path
                        d="M853.333333 938.666667a85.333333 85.333333 0 1 1 0.034134-170.7008A85.333333 85.333333 0 0 1 853.333333 938.666667M256 853.333333a85.333333 85.333333 0 1 1-170.7008-0.034133A85.333333 85.333333 0 0 1 256 853.333333m170.666667-682.666666a85.333333 85.333333 0 1 1 170.7008 0.034133A85.333333 85.333333 0 0 1 426.666667 170.666667m469.333333 518.0416V469.333333h-341.333333V335.2576C628.087467 316.2112 682.666667 249.924267 682.666667 170.666667c0-94.1056-76.5952-170.666667-170.666667-170.666667-94.139733 0-170.666667 76.561067-170.666667 170.666667 0 79.2576 54.5792 145.544533 128 164.590933v134.075733h-341.333333v219.374934C54.5792 707.822933 0 774.0416 0 853.333333c0 94.139733 76.561067 170.666667 170.666667 170.666667 94.071467 0 170.666667-76.526933 170.666666-170.666667 0-79.291733-54.5792-145.544533-128-164.625066V554.666667h597.333334v134.0416c-73.4208 19.114667-128 85.333333-128 164.625066 0 94.139733 76.526933 170.666667 170.666666 170.666667 94.071467 0 170.666667-76.526933 170.666667-170.666667 0-79.291733-54.5792-145.544533-128-164.625066"
                        fill="#1296db" p-id="4580"></path>
                </svg>
                <h2 class="section-title-text">技术栈</h2>
            </div>
            <div class="section-divider"></div>
        </div>

        <div class="section-card">
            <div class="tech-grid">
                <div v-for="(stack, idx) in t.techsList" :key="idx" class="tech-card">
                    <div class="tech-card-glow" :style="{ background: stack.glowColor }"></div>
                    <div class="tech-card-inner">
                        <div class="tech-card-header">
                            <div class="tech-card-icon" :style="{ background: stack.gradient }">
                                {{ stack.icon }}
                            </div>
                            <div class="tech-card-title">{{ stack.title }}</div>
                        </div>
                        <div class="tech-card-list">
                            <div v-for="(item, i) in stack.items" :key="i" class="tech-card-item">
                                <span class="tech-item-name">{{ item.name }}</span>
                                <span class="tech-item-desc">{{ item.desc }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.tech-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.tech-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background: var(--section-card-container-bg);
    border: 1px solid rgba(100, 116, 139, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);

        .tech-card-glow {
            opacity: 0.6;
        }
    }
}

.tech-card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    opacity: 0.15;
    filter: blur(60px);
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.tech-card-inner {
    position: relative;
    z-index: 1;
    padding: 24px;
}

.tech-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
}

.tech-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
}

.tech-card-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--section-text-primary);
}

.tech-card-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.tech-card-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background: var(--vp-c-bg);
    border-radius: 8px;
    border: 1px solid rgba(100, 116, 139, 0.15);
    transition: background 0.2s ease;

    // &:hover {
    //     background: rgba(51, 65, 85, 0.5);
    // }
}

.tech-item-name {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--section-text-primary);
}

.tech-item-desc {
    font-size: 0.78rem;
    color: var(--section-text-secondary);
}

@media (max-width: 960px) {
    .tech-grid {
        grid-template-columns: 1fr;
    }
}
</style>
