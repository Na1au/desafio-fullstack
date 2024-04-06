<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isVisible = computed(() => {
  return store.state.contatoDetail;
});

function excluir() {
  store.commit("SET_DELETE_CONTATO", {
    visible: true,
    contato: isVisible.value.contato
  });
  store.commit("SET_CONTATO_DETAIL", false);
}
function editar() {
  store.commit("SET_SELECTED_CONTATO", isVisible.value.contato);
  store.commit("SET_FORM_CONTATO", {
    visible: true,
    route: "editar",
  });
  store.commit("SET_CONTATO_DETAIL", false);
}

function cancelar() {
  store.commit("SET_CONTATO_DETAIL", false);
}
</script>

<template>
  <div class="modal" v-if="isVisible.visible">
    <div class="edit-contato-pop-upintro">
      <div class="edit-contato-barra">
        <p class="login-logo headline2">
          {{ isVisible.contato.client_name }}
        </p>
        <div class="card-contato-actions">
          <div @click="excluir" class="action-boto">
            <iconify-icon class="iconify-icon" icon="mdi:delete"></iconify-icon>
          </div>
          <div @click="editar" class="action-boto">
            <iconify-icon class="iconify-icon" icon="mdi:edit"></iconify-icon>
          </div>
          <div @click="cancelar" class="action-boto">
            <iconify-icon class="iconify-icon" icon="mdi:close"></iconify-icon>
          </div>
        </div>
      </div>
      <div class="edit-contato-entrada">
        <div class="section">
          <p class="subtitle2 title">Email</p>
          <p class="caption">{{ isVisible.contato.client_email }}</p>
        </div>
        <div class="section">
          <p class="subtitle2 title">Telefone</p>
          <p class="caption">{{ isVisible.contato.client_phone }}</p>
        </div>
        <div class="section">
          <p class="subtitle2 title">Endereço</p>
          <p class="caption">{{ isVisible.contato.client_address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 900;
}
.edit-contato-pop-upintro {
  width: 100%;
  height: fit-content;
  margin: 0px;
  display: flex;
  max-width: 600px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  max-height: 650px;
  align-items: center;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}
.edit-contato-barra {
  width: 100%;
  height: 60px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid var(--color-theme-black-3);
}
.card-contato-actions {
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding-right: 15px;
  justify-content: flex-end;
  width: 20%;
}
.action-boto {
  width: 25px;
  height: 25px;
}
.login-logo {
  width: 100%;
  padding: 15px 0 15px 15px;
  font-size: 24px;
  color: black;
  align-self: flex-start;
}
.edit-contato-edit-contato {
  color: white;
  font-size: 18px;
  text-align: center;
}
.edit-contato-image {
  top: 8px;
  right: 0px;
  width: 25px;
  position: absolute;
  justify-self: flex-end;
  margin-right: 10px;
}
.edit-contato-entrada {
  flex: 0 0 auto;
  width: 100%;
  gap: 20px;
  height: calc(100% - 40px);
  display: flex;
  position: relative;
  align-items: flex-start;
  padding: 20px 20px 20px 30px;
  flex-direction: column;
  justify-content: flex-start;
}
.section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
}
.edit-contato-boto {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  height: auto;
  width: 100%;
  padding-top: 20px;
  border-top: 2px solid var(--color-theme-black-3);
}
.edit-contato-button {
  color: #ffffff;
  height: 50px;
  display: flex;
  transition: 0.3s;
  font-family: Fivo Sans Medium;
  border-color: red;
  border-width: 0px;
  padding-left: 20px;
  border-radius: 7px;
  padding-right: 20px;
  flex-direction: row;
  background-color: red;
}
.salvar-boto {
  width: 90px;
}
@media (max-width: 957px) {
  .edit-contato-pop-upintro {
    margin: 0px;
    display: flex;
  }
}
@media (max-width: 767px) {
  .edit-contato-pop-upintro {
    display: flex;
  }
}
@media (max-width: 479px) {
  .edit-contato-pop-upintro {
    display: flex;
    max-height: 800px;
  }
  .edit-contato-entrada {
    padding: 20px;
  }
}
</style>
