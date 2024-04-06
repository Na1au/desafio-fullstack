<script setup>
import { computed, ref, provide } from "vue";
import { useStore } from "vuex";
import Boto from "../common/boto.vue";
import Boto2 from "../common/boto2.vue";
import InputText from "../common/InputText.vue";

const store = useStore();
const isVisible = computed(() => {
  return store.state.formContato;
});

const contato = computed(() => {
  return store.state.selectedContato;
});

const invalid_input = ref(false);
const no_information = ref({
  client_name: "",
  client_email: "",
  client_address: "",
  client_phone: "",
});
function salvar() {
  if (
    contato.value.client_name != "" &&
    contato.value.client_email != "" &&
    contato.value.client_address != "" &&
    contato.value.client_phone != ""
  ) {
    invalid_input.value = false;
    store.dispatch("editContato", contato.value);
  } else {
    invalid_input.value = true;
    no_information.value = contato.value;
  }
  
  if (!invalid_input.value) {
    cancelar();
  }
}

function cancelar() {
  store.commit("SET_FORM_CONTATO", { visible: false, route: "" });
  store.commit("SET_SELECTED_CONTATO", {
    client_name: "",
    client_email: "",
    client_address: "",
    client_phone: "",
  });
}

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    contato.value.client_image = URL.createObjectURL(file);
  }
};
</script>

<template>
  <div class="modal" v-if="isVisible.visible">
    <div class="edit-contato-pop-upintro">
      <div class="edit-contato-barra">
        <p v-if="isVisible.route == 'adicionar'" class="login-logo headline2">
          Adicionar novo contato
        </p>
        <p v-if="isVisible.route == 'editar'" class="login-logo headline2">
          Editar contato
        </p>
      </div>
      <div class="edit-contato-entrada">
        <div class="section">
          <p class="caption">Nome</p>
          <input-text
            :has_information="
              invalid_input && no_information.client_name == '' ? false : true
            "
            v-model:value="contato.client_name"
            label="Nome completo"
          ></input-text>
        </div>
        <div class="section">
          <p class="caption">Email</p>
          <input-text
            :has_information="
              invalid_input && no_information.client_email == '' ? false : true
            "
            v-model:value="contato.client_email"
            label="Email"
          ></input-text>
        </div>
        <div class="section">
          <p class="caption">Telefone</p>
          <input-text
            :has_information="
              invalid_input && no_information.client_phone == '' ? false : true
            "
            v-model:value="contato.client_phone"
            label="Telefone"
          ></input-text>
        </div>
        <div class="section">
          <p class="caption">Endereço</p>
          <input-text
            :has_information="
              invalid_input && no_information.client_address == ''
                ? false
                : true
            "
            v-model:value="contato.client_address"
            label="Endereço"
          ></input-text>
        </div>
        <div class="section">
          <p class="caption">Imagem</p>
          <input
            @change="handleFileChange"
            type="file"
            id="imagem"
            name="imagem"
            accept="image/*"
          />
        </div>
        <div class="edit-contato-boto">
          <boto2 @click="cancelar" text="Cancelar" class="salvar-boto"></boto2>
          <boto @click="salvar" text="Salvar" class="salvar-boto"></boto>
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
  border-bottom: 2px solid var(--color-theme-black-3);
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
  padding: 50px 20px 50px 20px;
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
