<script setup>
import { defineProps, defineEmits } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(["functionContato"]);
const props = defineProps({
  contato: {
    type: Object,
    required: true,
  }
});

function deleteContato() {
  store.commit("SET_DELETE_CONTATO", {
    visible: true,
    contato: props.contato
  });
  store.commit("SET_CONTATO_DETAIL", false);
}

function editContato() {
  store.commit("SET_SELECTED_CONTATO", props.contato)
  store.commit('SET_FORM_CONTATO',{
      visible: true,
      route: 'editar'
    })
}

function setDetailsContato() {
  store.commit('SET_CONTATO_DETAIL',{
      visible: true,
      contato: props.contato
    })
}

function checkImage(image) {
  let ok = (image == null || image.toLowerCase().includes('blob')) ? false : true;
  return ok;
}

function getInitials(displayName) {
  const names = displayName.split(" ");
  if (names.length >= 2) {
    return names[0][0].toUpperCase() + names[1][0].toUpperCase();
  } else if (names.length === 1) {
    return names[0][0].toUpperCase();
  } else {
    return "";
  }
}
</script>

<template>
  <div class="card-contato-card-contato">
    <div @click="setDetailsContato"  class="contato-information">
      <div class="user-information">
        <img v-if="checkImage(contato.client_image)" :src="contato.client_image" class="profile-foto" alt="">
        <div v-else class="profile-name">
          <p class="subtitle1">{{ getInitials(contato.client_name) }}</p>
        </div>
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
    </div>
    <div class="card-contato-actions">
      <div @click="editContato" class="action-boto"><iconify-icon class="iconify-icon" icon="mdi:edit"></iconify-icon></div>
      <div @click="deleteContato"  class="action-boto"><iconify-icon class="iconify-icon" icon="mdi:delete"></iconify-icon></div>
    </div>
  </div>
</template>

<style scoped>
.card-contato-card-contato {
  gap: 30px;
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 15px;
  flex-direction: row;
  padding: 10px 0;
  background-color: var(--dl-color-gray-white);
}
.contato-information {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}
.profile-name {
  width: 45px;
  height: 45px;
  background-color: var(--color-theme-background-user);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}
.profile-name p {
  color: var(--color-theme-main-darker);
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
  justify-content: flex-end;
  width: 5%;
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
.card-contato-text3 {
  padding-left: 10px;
  padding-right: 10px;
}
@media(max-width: 695px) {
  .contato-information {
    width: 70%;
  }
  .card-contato-actions {
    width: 10%;
  }
}
@media (max-width: 479px) {
  .card-contato-card-contato {
    gap: 10px;
    padding: 15px;
    align-items: flex-start;
    flex-direction: column;
  }
  .contato-information {
    width: 100%;
    flex-wrap: wrap;
  }
  .card-contato-actions {
    align-self: flex-end;
  }
}

@media (max-width: 320px) {
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