<script setup>
import { defineProps, defineEmits } from "vue";
import statusBadge from "@/components/common/status-badge.vue";
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(["functionContato"]);
const props = defineProps({
  contato: {
    type: Object,
    required: true,
  }
});
const emitContato = () => {
  emit("functionContato");
};

function editContato() {
  store.commit("SET_SELECTED_CONTATO", props.contato)
  store.commit('SET_FORM_CONTATO',{
      visible: true,
      route: 'editar'
    })
}
</script>

<template>
  <div @click="emitContato" class="card-contato-card-contato">
    <div class="user-information">
      <img :src="contato.client_image" class="profile-foto" alt="">
      <div class="card-contato-information">
        <p class="subtitle2">{{ contato.client_name }}</p>
      </div>
    </div>
    <div class="card-contato-information">
      <p class="subtitle2">{{ contato.client_email }}</p>
    </div>
    <div class="card-contato-information">
      <p class="subtitle2">{{
        contato.client_phone
      }}</p>
    </div>
    <div class="card-contato-actions">
      <div @click="editContato" class="action-boto"><iconify-icon class="iconify-icon" icon="mdi:edit"></iconify-icon></div>
      <div @click="deleteContato"  class="action-boto"><iconify-icon class="iconify-icon" icon="mdi:delete"></iconify-icon></div>
    </div>
  </div>
</template>

<style scoped>
.card-contato-card-contato {
  gap: 10px;
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 15px;
  flex-direction: row;
  padding: 10px 0;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.user-information {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}
.profile-foto {
  width: 45px;
  height: 45px;
  background-color: var(--theme-color-main);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}
.card-contato-information {
  gap: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0px;
  flex-direction: column;
  justify-content: center;
}
.card-contato-labelchamado {
  color: #737373;
  font-size: 12px;
  font-family: "Fivo Sans regular";
}
.card-contato-information {
  gap: 5px;
  display: flex;
  align-items: flex-start;
  padding-left: 0px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
}
.card-contato-actions {
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
}
.action-boto {
  width: 25px;
  height: 25px;
}
.card-contato-label {
  color: #737373;
  font-size: 12px;
  text-align: left;
  font-family: "Fivo Sans regular";
}
.card-contato-labelmotivo {
  color: #737373;
  font-size: 12px;
  text-align: left;
  font-family: "Fivo Sans regular";
}
.card-contato-text2 {
  padding-left: 0px;
}
.card-contato-status {
  width: 15%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
}
.card-contato-label1 {
  color: #737373;
  font-size: 12px;
  text-align: left;
  font-family: "Fivo Sans regular";
}
.card-contato-statusset {
  flex: 0 0 auto;
  width: fit-content;
  height: 25px;
  display: flex;
  min-width: 100px;
  align-items: center;
  border-radius: 25px;
  background-color: 0DC5FF;
}
.card-contato-text3 {
  padding-left: 10px;
  padding-right: 10px;
}
@media (max-width: 1440px) {
  .card-contato-text1 {
    padding-left: 0px;
  }
  .card-contato-status {
    align-items: flex-start;
  }
}
@media (max-width: 767px) {
  .card-contato-status {
    width: auto;
  }
}
@media (max-width: 479px) {
  .card-contato-card-contato {
    gap: 10px;
    padding: 15px;
    align-items: flex-start;
    flex-direction: column;
  }
  .card-contato-statusset {
    height: auto;
  }
}
@media (max-width: 320px) {
  .card-contato-card-contato {
    gap: 10px;
    align-items: flex-start;
    flex-direction: column;
  }
  .card-contato-information {
    width: 100%;
    padding: unset;
  }
  .card-contato-text {
    font-size: 17px;
  }
  .card-contato-status {
    width: 100%;
  }
}
</style>