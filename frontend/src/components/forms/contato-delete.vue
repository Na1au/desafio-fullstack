<script setup>
import { computed, ref, provide } from "vue";
import { useStore } from "vuex";
import Boto2 from "../common/boto2.vue";
import Boto3 from "../common/boto3.vue";

const store = useStore();
const isVisible = computed(() => {
  return store.state.deleteContato;
});
const currentUser = computed(() => {
  return store.state.userModule.currentUser;
})

function cancelar() {
  store.commit("SET_DELETE_CONTATO", { visible: false, contato: {} });
}

async function confirmar() {
  store.dispatch('deleteContato', isVisible.value.contato.id)

  await store.dispatch('getClients', currentUser.value.id)
  cancelar();
}
</script>

<template>
  <div class="modal" v-if="isVisible.visible">
    <div class="edit-contato-pop-upintro">
      <div class="edit-contato-barra">
        <p class="login-logo headline2">
          Excluir este contato?
        </p>
      </div>
      <div class="edit-contato-entrada">
        <div class="edit-contato-boto">
          <boto2 @click="cancelar" text="Cancelar" class="salvar-boto"></boto2>
          <boto3 @click="confirmar" text="Excluir" class="salvar-boto"></boto3>
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
}
.login-logo {
  width: 100%;
  padding: 25px;
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
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5px;
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
