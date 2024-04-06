<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const dialog = computed(() => {
  return store.state.dialog;
});
</script>

<template>
  <div v-if="dialog.isVisible" class="alert-container">
    <div class="alert" :class="`alert-${dialog.type}`">
      <ion-icon :name="dialog.icon" v-if="dialog.icon" id="icon"></ion-icon>
      <span>{{ dialog.message }}</span>
    </div>
  </div>
</template>

<style scoped>
.alert-container {
  transition: all ease 0.3s;
  z-index: 50;
  position: fixed;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
}
.alert {
  display: flex;
  padding: 15px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 350px;
  align-items: center;
  justify-content: center;
}
.alert-info {
  background-color: rgb(204, 229, 255);
  border-color: transparent;
  color: #004085;
  box-shadow: 0 0 10px rgba(117, 184, 255, 0.7);
}

.alert-success {
  background-color: #90ffaa;
  border-color: rgb(144, 255, 170);
  color: #155724;
  box-shadow: 0 0 10px rgba(0, 255, 60, 0.5);
}

.alert-warning {
  background-color: #ffb685;
  border-color: transparent;
  color: #b15000;
  box-shadow: 0 0 10px rgba(255, 102, 0, 0.7);
}

.alert-danger {
  background-color: #ff9696;
  border-color: transparent;
  color: rgb(180, 12, 29);
  box-shadow: 0 0 10px rgba(255, 0, 25, 0.7);
}
#icon {
  font-size: 40px;
  margin-right: 10px;
}
</style>
