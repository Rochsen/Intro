<script setup lang="ts">
import { computed } from "vue";
import { Myi18n } from "./data/index.ts";

// 组件参数
const props = defineProps({
  lang: {
    type: String,
    default: "zh-CN",
  },
});

// 渲染工具
const t = computed(() => Myi18n[props.lang] ?? Myi18n["zh-CN"]);
</script>

<template>
<section :id="t.sectionProfileId" class="section section-container">
  <div class="section-header">
    <div class="section-title-row">
      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <path
          d="M504.951 511.98c93.49 0 169.28-74.002 169.28-165.26 0-91.276-75.79-165.248-169.28-165.248-93.486 0-169.287 73.972-169.279 165.248-0.001 91.258 75.793 165.26 169.28 165.26z m77.6 55.098H441.466c-120.767 0-218.678 95.564-218.678 213.45V794.3c0 48.183 97.911 48.229 218.678 48.229H582.55c120.754 0 218.66-1.78 218.66-48.229v-13.77c0-117.887-97.898-213.45-218.66-213.45z"
          p-id="1748" fill="#1296db"></path>
      </svg>
      <h2 class="section-title-text">{{ t.profileTitle }}</h2>
    </div>
    <div class="section-divider"></div>
  </div>

  <div class="section-card">
    <div class="profile-grid">
      <div class="grid-left">
        <div class="info-section">
          <div class="info-tag">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                d="M512 597.994q108.011 0 209.003-52.011t158.995-140.997q-71.002-66.995-177.003-100.992T512 311.994t-190.992 92.999T144.002 405.985q53.995 88.986 155.995 140.997T512 597.994zM768 767.994q0 66.005-42.997 123.995T608.01 992H415.99q0-62.005-42.003-120.001T256 767.994q0 0 0 0 0.998-157.005 147.993-276.997T512 335.994t108.009 154.997T668.003 767.994q0 0 0 0z"
                fill="#0366ee" />
            </svg>
            <span>{{ t.education }}</span>
          </div>
          <div class="info-value">{{ t.educationValue }}</div>
        </div>
        <div class="info-section">
          <div class="info-tag">
            <svg class="tag-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                d="M888.8 255.2H135.2c-44.8 0-80.8 36-80.8 80.8v416c0 44.8 36 80.8 80.8 80.8h753.6c44.8 0 80.8-36 80.8-80.8v-416c0-44.8-36-80.8-80.8-80.8zM512 680.8c-104 0-188.8-84.8-188.8-188.8S408 303.2 512 303.2 700.8 388 700.8 492 616 680.8 512 680.8z"
                fill="#0366ee" />
            </svg>
            <span>{{ t.position }}</span>
          </div>
          <div class="info-value">{{ t.positionValue }}</div>
        </div>
      </div>

      <div class="grid-middle">
        <div class="personality-section">
          <div class="info-tag">
            <svg t="1787809141536" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4372" width="14" height="14">
              <path
                d="M790.4 560.64a108.8 108.8 0 0 1 74.688 29.248c19.84 18.688 30.912 44.16 30.912 70.592v33.28C896 824.96 765.056 960 544 960S192 824.96 192 693.76v-33.28c0-26.496 11.136-51.84 30.912-70.592A108.8 108.8 0 0 1 297.6 560.64h492.8z m0 66.56h-492.8a36.288 36.288 0 0 0-24.896 9.728 32.384 32.384 0 0 0-10.304 23.552v33.28c0 95.68 100.8 199.68 281.6 199.68s281.6-104 281.6-199.68v-33.28a32.384 32.384 0 0 0-10.304-23.552 36.224 36.224 0 0 0-24.896-9.728zM544 128c51.328 0 100.608 19.264 136.896 53.632 36.288 34.304 56.704 80.832 56.704 129.408 0 48.576-20.416 95.104-56.704 129.408A199.424 199.424 0 0 1 544 494.08a199.424 199.424 0 0 1-136.896-53.632 178.112 178.112 0 0 1-56.704-129.408c0-48.576 20.416-95.104 56.704-129.408A199.424 199.424 0 0 1 544 128z m0 66.56c-32.64 0-64 12.288-87.104 34.112a113.344 113.344 0 0 0-36.096 82.368c0 30.912 12.992 60.544 36.096 82.368 23.04 21.824 54.4 34.112 87.104 34.112 32.64 0 64-12.288 87.104-34.112s36.096-51.456 36.096-82.368c0-30.912-12.992-60.544-36.096-82.368A126.912 126.912 0 0 0 544 194.56z"
                fill="#1296db" p-id="4373"></path>
            </svg>
            <span>{{ t.personality?.label }}</span>
          </div>
          <div class="personality-content">
            <img :src="t.personality?.img" class="personality-image" />
            <div class="personality-text">
              <div class="personality-code">{{ t.personality?.value }}</div>
              <div class="personality-name">{{ t.personality?.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-right">
        <div class="contacts-section">
          <div class="contacts-header">
            <svg class="tag-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                d="M213.333333 588.16c15.914667-5.824 31.04-11.456 46.293334-16.746667 1.493333-0.533333 3.968 0.554667 5.589333 1.557334 17.024 10.538667 33.92 21.269333 50.986667 31.786666 1.6 1.002667 4.288 1.578667 5.973333 0.96 34.666667-12.416 69.248-25.045333 103.829333-37.632 0.576-0.213333 1.109333-0.576 2.112-1.130666l-133.12-205.141334c1.578667-0.682667 2.816-1.28 4.074667-1.749333 16.384-5.994667 32.832-11.861333 49.130667-18.048 3.498667-1.322667 5.76-0.704 8.576 1.536 70.272 55.850667 140.650667 111.573333 210.88 167.466667 3.626667 2.88 6.4 3.242667 10.688 1.664 55.893333-20.501333 111.850667-40.853333 167.808-61.141334 26.048-9.450667 51.797333 5.888 55.914666 33.130667 2.816 18.624-8.682667 37.077333-27.605333 44.010667-44.053333 16.085333-88.106667 32.106667-132.181333 48.149333L334.613333 688.853333c-22.144 8.085333-39.04 2.048-53.162666-16.938666-12.906667-17.344-27.2-33.664-40.874667-50.410667L213.333333 588.16z"
                fill="#1296db" p-id="7636"></path>
            </svg>
            <span>{{ t.contacts }}</span>
          </div>
          <div v-for="contact in t.contactList" :key="contact.label" class="contact-item">
            <div class="contact-icon-wrapper">
              <svg v-if="contact.iconType === 'google'" class="contact-icon" viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M512 0C228.430769 0 0 228.430769 0 512s228.430769 512 512 512 512-228.430769 512-512S795.569231 0 512 0z m196.923077 701.046154c-47.261538 51.2-114.215385 78.769231-185.107692 74.830769h-7.876923c-145.723077 0-263.876923-122.092308-259.938462-267.815385 0-145.723077 122.092308-263.876923 267.815385-259.938461 66.953846 0 133.907692 23.630769 181.16923 74.830769l-51.2 51.2c-35.446154-35.446154-82.707692-51.2-129.96923-51.2-106.338462 0-192.984615 86.646154-192.984616 192.984616s86.646154 192.984615 192.984616 192.984615c51.2 3.938462 98.461538-15.753846 133.907692-51.2 23.630769-23.630769 35.446154-59.076923 39.384615-90.584615h-173.292307v-70.892308h244.184615c3.938462 15.753846 3.938462 31.507692 3.938462 43.323077 0 55.138462-23.630769 118.153846-63.015385 161.476923z"
                  fill="#8a8a8a" p-id="5127"></path>
              </svg>
              <svg v-else-if="contact.iconType === 'qq'" class="contact-icon" viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M512.345366 6.139837c279.580556 0 506.184551 226.64902 506.184551 506.185574 0 279.580556-226.603994 506.184551-506.184551 506.184551-279.534508 0-506.184551-226.603994-506.184551-506.184551C6.160815 232.788857 232.809835 6.139837 512.345366 6.139837L512.345366 6.139837zM515.268952 541.913287c-32.689517 0-28.170596-28.702716-65.288982-28.702716-16.786315 0-45.533033 30.651091-57.757448 40.926108-18.337647 15.371082-35.612079 29.633924-53.329603 45.445028l-93.148493 78.754668c-23.342638 22.147416 1.727341 37.116339 30.695093 37.116339L746.12683 715.452715c13.198603 0 41.370223-6.553253 41.370223-17.540492 0-21.437242-12.757558-24.049742-35.346019-44.203758L605.627912 527.960507c-23.51967-22.412452-37.47245-24.228821-62.897515-3.233648-4.428869 3.631714-8.060583 6.112208-12.667507 9.655917C525.944082 537.483394 521.469164 541.913287 515.268952 541.913287L515.268952 541.913287zM182.535825 414.524968l0 206.938096c0 17.364483 5.493108 31.626301 23.121604 24.892947 7.043417-2.65855 77.868485-63.33856 86.283132-71.445192l70.693062-59.839877c12.977569-10.453073 38.003546-28.879748 38.003546-41.636283 0-14.926968-10.719132-19.400862-24.095791-30.030967l-122.161271-95.939049c-13.81975-10.985192-14.616906-17.983583-34.016745-4.960988C202.867896 354.286002 182.535825 385.77825 182.535825 414.524968L182.535825 414.524968zM625.116779 468.650703c0 16.123212 9.742898 18.957771 20.286022 29.05678l18.159592 15.281031c2.835581 2.260483 3.809769 3.765767 6.64535 6.158257l62.807465 53.417607c4.782933 4.428869 8.060583 6.687306 12.71151 11.072173l31.051203 26.310226c11.692297 10.453073 55.720046 57.361429 62.629409 23.653723 4.428869-21.527292 2.214435-174.782745 2.214435-207.91433 0-40.838104-24.8909-80.880075-48.457642-88.49859-13.508665-4.384867-10.984169 0-24.758893 10.453073l-100.768031 79.107709C653.375379 438.309674 625.116779 455.629131 625.116779 468.650703L625.116779 468.650703zM313.069787 326.912561c0 5.315052 16.96437 17.894555 21.570271 21.438265l48.28061 37.737486c8.28264 6.201236 16.122189 12.623505 24.095791 18.868743l72.331375 56.607252c16.609283 12.490475 14.83794 15.058974 35.922141 15.058974 14.174837 0 38.35761-22.500457 52.354392-33.662681l120.477932-94.433766c6.511297-5.050016 21.437242-14.793938 21.437242-21.615297 0-3.720741-2.65855-6.333242-6.377244-6.333242L319.403029 320.578296C315.683311 320.578296 313.069787 323.19182 313.069787 326.912561z"
                  p-id="6316" fill="#8a8a8a"></path>
              </svg>
            </div>
            <div class="contact-details">
              <div class="contact-label">{{ contact.label }}</div>
              <a class="contact-value" :href="contact.link" target="_blank">{{
                contact.value
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
// ProfileSection 组件无通用样式，所有通用样式均在 index.scss 中定义
// ============================================================

/* 档案信息左右分块 */
.profile-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5rem;
}

/* 左侧信息区 */
.grid-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--section-primary-light);
  color: var(--section-primary);
  padding: var(--section-tag-padding);
  border-radius: var(--section-tag-radius);
  font-size: var(--section-tag-font-size);
  font-weight: 600;
  letter-spacing: 0.5px;
  width: fit-content;
}

.tag-icon {
  flex-shrink: 0;
}

.info-value {
  font-size: 1.2rem;
  color: var(--section-text-primary);
  line-height: 1.3;
  font-weight: 700;
}

/* 中间人格类型区 */
.grid-middle {
  display: flex;
  flex-direction: column;
}

.personality-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.personality-content {
  display: flex;
  align-items: center;
}

.personality-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.personality-code {
  font-size: 2.5rem;
  color: #d4a017;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 1px;
}

.personality-name {
  font-size: 1.2rem;
  color: #d4a017;
  font-weight: 600;
  opacity: 0.85;
}

.personality-image {
  height: 150px;
  width: 150px;
  object-fit: contain;
}

/* 右侧联系方式区 */
.grid-right {
  display: flex;
  flex-direction: column;
}

.contacts-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contacts-header {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--section-primary-light);
  color: var(--section-primary);
  padding: var(--section-tag-padding);
  border-radius: var(--section-tag-radius);
  font-size: var(--section-tag-font-size);
  font-weight: 600;
  letter-spacing: 0.5px;
  width: fit-content;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
}

.contact-icon-wrapper {
  width: var(--section-icon-size);
  height: var(--section-icon-size);
  background: var(--section-bg-hover);
  border-radius: var(--section-icon-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon {
  color: var(--section-text-secondary);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  font-size: 1rem;
  color: var(--section-text-secondary);
  font-weight: 700;
  letter-spacing: 0.3px;
}

.contact-value {
  font-size: 1rem;
  color: var(--section-text-primary);
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-value:hover {
  color: var(--section-primary);
}

.contact-value:after {
  content: "";
}

@media (max-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title-text {
    font-size: 1.5rem;
  }

  .info-value {
    font-size: 1.1rem;
  }

  .section-card {
    padding: 1.25rem !important;
  }

  .contact-item {
    gap: 0.75rem;
  }

  .personality-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .personality-text {
    align-items: center;
  }

  .personality-code {
    font-size: 2rem;
  }

  .personality-name {
    font-size: 1rem;
  }

  .personality-image {
    height: 120px;
    width: 120px;
  }
}
</style>
