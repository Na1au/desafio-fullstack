<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="contedo-dashboard-container11">
    <div class="contedo-dashboard-news" v-for="item in props.data" :key="item">
      <div class="contedo-dashboard-timeline">
        <div class="contedo-dashboard-point">
          <img
            alt="image_alt3"
            src="https://api.iconify.design/tabler/point-filled.svg?color=white"
            class="contedo-dashboard-image5"
          />
        </div>
        <div class="contedo-timeline-line"></div>
      </div>
      <div class="contedo-dashboard-container12">
        <span class="textboxlead">{{ item.title }}</span>
        <span class="Textbox">{{ item.sub }}</span>
        <span v-if="item.data" class="contedo-dashboard-text23 Textboxinfo">
          {{ item.data }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contedo-dashboard-container11 {
  width: 100%;
  display: flex;
  overflow-x: auto;
  padding-top: 20px;
  padding-left: 20px;
  align-items: flex-start;
  flex-direction: column;
}

.contedo-dashboard-news {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-timeline {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard-point {
  flex: 0 0 auto;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 100%;
  justify-content: center;
  background-color: var(--color-theme-primary);
}
.contedo-dashboard-image5 {
  width: 200px;
  object-fit: cover;
}
.contedo-timeline-line {
  flex: 0 0 auto;
  width: 5px;
  height: 100%;
  display: flex;
  margin-top: -1px;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--color-theme-primary);
}
.contedo-dashboard-container12 {
  gap: 10px;
  flex: 0 0 auto;
  width: calc(98% - 30px);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
}
.textboxlead {
  font-weight: bold;
}
.contedo-dashboard-text23 {
  margin-bottom: 20px;
}
@media(max-width: 757px) {
  .contedo-dashboard-container11 {
    padding: 15px 0;
  }
}
@media (max-width: 479px) {
  .Textbox {
    padding: 0;
  }
}
</style>