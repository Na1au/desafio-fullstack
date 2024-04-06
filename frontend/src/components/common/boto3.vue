<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: Text,
    required: true,
  },
});
</script>

<template>
  <div class="boto-container">
    <div class="login-botaoaction">
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
  background-color: #e6000038;
}
.boto-container:active .login-botaoaction {
  background-color: #e6000079;
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
  color: #e60000;
  font-size: 16px;
  align-self: center;
  text-align: center;
}
</style>
