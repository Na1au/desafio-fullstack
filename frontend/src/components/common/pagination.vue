<script setup>
import { defineProps, defineEmits, watch, ref, inject } from "vue";

const primaryColor = inject('primaryColor').replace('#', '')

const emit = defineEmits(["update:currentPage"]);

const currentPage = ref(props.currentPage);
const totalPages = ref(Math.ceil(props.total / props.totalPerPage))

const nextPage = () => {
  if (currentPage.value < Math.ceil(props.total / props.totalPerPage)) {
    currentPage.value++;
    emit("update:currentPage", currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("update:currentPage", currentPage.value);
  }
};

watch(currentPage, () => {
  emit("update:currentPage", currentPage.value);
});

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  totalPerPage: {
    type: Number,
    default: 10
  }
});
</script>

<template>
  <div v-if="totalPages != 1 && totalPages != 0" class="nav-pages2-actions" v-bind:class="rootClassName">
    <div :status="currentPage == 1 ? 'inactive' : 'active'" class="nav-pages2-boto">
      <div class="nav-pages2-container">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          type="button"
          class="nav-pages2-button button"
        >
          <img
            alt="image"
            :src="`https://api.iconify.design/ion/arrow-back.svg?color=%23${primaryColor}`"
            class="nav-pages2-image"
          />
        </button>
      </div>
    </div>
    <div class="nav-pages2-container1">
      <span class="nav-pages2-text">Página</span>
      <div class="nav-pages2-drop">
        <div class="nav-pages2-drop-menu">
          <span class="nav-pages2-text1">{{ currentPage }}</span>
        </div>
      </div>
      <span class="nav-pages2-text2">de {{ totalPages }}</span>
    </div>
    <div class="nav-pages2-container12">
      <span class="nav-pages2-text1">{{ currentPage }}</span>
      <span class="nav-pages2-text1">- {{ totalPages }}</span>
    </div>
    <div :status="currentPage == totalPages ? 'inactive' : 'active'" class="nav-pages2-container2">
      <button
        type="button"
        class="nav-pages2-button1"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        <span class="nav-pages2-text3">Próxima página</span>
      </button>
    </div>
    <div :status="currentPage == totalPages ? 'inactive' : 'active'" class="nav-pages2-boto2">
      <div class="nav-pages2-container">
        <button
          type="button"
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="nav-pages2-button button"
        >
          <img
            alt="image"
            :src="`https://api.iconify.design/ion/arrow-forward-outline.svg?color=%23${primaryColor}`"
            class="nav-pages2-image"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-pages2-actions {
  gap: 10px;
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  max-width: 525px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.nav-pages2-actions div[status="inactive"] {
  visibility: hidden;
}
.nav-pages2-boto {
  flex: 0 0 auto;
  display: flex;
  column-gap: 10px;
  align-items: flex-start;
  justify-content: flex-end;
}
.nav-pages2-boto2 {
  visibility: hidden;
  display: none;
}
.nav-pages2-container {
  display: flex;
  position: relative;
}
.nav-pages2-button {
  color: #ffffff;
  width: 40px;
  height: 40px;
  display: flex;
  font-family: Fivo Sans Medium;
  border-color: var(--color-theme-primary);
  border-width: 1px;
  padding-left: 20px;
  border-radius: 7px;
  padding-right: 20px;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.nav-pages2-image {
  width: 25px;
  height: 25px;
  object-fit: cover;
}
.nav-pages2-container1 {
  gap: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.nav-pages2-container12 {
  visibility: hidden;
  display: none;
}
.nav-pages2-text {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
}
.nav-pages2-drop {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.nav-pages2-drop-menu {
  width: 40px;
  height: 40px;
  display: flex;
  max-width: 525pxpx;
  align-self: flex-start;
  align-items: center;
  border-color: var(--color-theme-primary);
  border-width: 1px;
  border-radius: 7px;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.nav-pages2-text1 {
  color: #737373;
  font-family: "Fivo Sans Medium";
}
.nav-pages2-text2 {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: 5px;
}
.nav-pages2-container2 {
  display: flex;
  position: relative;
}
.nav-pages2-button1 {
  color: #ffffff;
  height: 39px;
  display: flex;
  font-family: Fivo Sans Medium;
  padding-left: 20px;
  border-radius: 7px;
  padding-right: 20px;
  flex-direction: row;
  justify-content: center;
  background-color: var(--color-theme-primary);
}
.nav-pages2-button1:hover {
  color: var(--color-theme-primary);
  width: fit-content;
  border-color: var(--color-theme-primary);
  border-width: 1px;
  background-color: white;
}
.nav-pages2-text3 {
  font-size: 16px;
  align-self: center;
  margin-top: 1px;
  transition: 0.3s;
  align-items: center;
  margin-left: 5px;
}

@media (max-width: 1220px) {
  .nav-pages2-text {
    font-size: 14px;
  }
  .nav-pages2-text2 {
    font-size: 14px;
  }
}
@media (max-width: 650px) {
  .nav-pages2-actions {
    width: 100%;
  }
  .nav-pages2-container2 {
    visibility: hidden;
    display: none;
  }
  .nav-pages2-boto2 {
    visibility: visible;
    flex: 0 0 auto;
    display: flex;
    column-gap: 10px;
    align-items: flex-start;
    justify-content: flex-end;
  }
}
@media (max-width: 479px) {
  .nav-pages2-actions {
    align-items: center;
    justify-content: center;
  }
  .nav-pages2-container12 {
    gap: 5px;
    visibility: visible;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  .nav-pages2-container1 {
    visibility: hidden;
    display: none;
  }
}
</style>