<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: {
    type: Text,
  },
  text: {
    type: Text,
    required: true,
  },
});
</script>

<template>
  <div class="boto-container">
    <div class="login-botaoaction">
      <ion-icon :name="icon" v-if="icon" class="icon"></ion-icon>
      <p class="boto-text">{{ props.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.boto-container {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.boto-container :hover {
  cursor: pointer;
}
.boto-container:hover .login-botaoaction {
  background-color: var(--color-theme-black-3);
}
.boto-container:active .login-botaoaction {
  background-color: var(--color-theme-black-6);
}
.login-botaoaction {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: white;
}
.boto-text {
  width: fit-content;
  color: var(--color-theme-black-70);
  font-size: 16px;
  align-self: center;
  text-align: center;
}
.icon {
  color: white;
  align-self: center;
  text-align: center;
  font-size: 18px;
  margin-right: 15px;
}
</style>
