<script setup>
import InputText from "../components/common/InputText.vue";
import boto from "@/components/common/boto.vue";
import CardContato from "../components/common/card-contato.vue";
import EditContato from "../components/forms/edit-contato.vue";
import contatoDetail from "@/components/forms/contato-detail.vue";
import contatoDelelete from "@/components/forms/contato-delete.vue";
import spinnerLoading from "@/components/common/spinner-loading.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

const loading = ref(true);
const search = ref("");

const store = useStore();

const contatos = computed(() => {
  return store.state.clients;
});

const currentUser = computed(() => {
  return store.state.userModule.currentUser;
});

onMounted(async () => {
  await store.dispatch("getClients", currentUser.value.id);

  loading.value = false;
});

function setForm(route) {
  store.commit("SET_FORM_CONTATO", { visible: true, route: route });
}
</script>

<template>
  <div class="flash-growth-login-container">
    <edit-contato></edit-contato>
    <contato-detail></contato-detail>
    <contato-delelete></contato-delelete>

    <div class="flash-growth-login-content">
      <p class="login-logo headline1">Contatos</p>
      <div class="main-container" v-bind:class="String">
        <div class="header">
          <input-text
            :has_information="true"
            v-model:value="search"
            label="Buscar contato"
            icon="search-outline"
            class="main-container-content"
          ></input-text>
          <boto
            @click="setForm('adicionar')"
            icon="add-outline"
            text="Adicionar contato"
            class="main-container-content"
          ></boto>
        </div>
        <div class="main-content">
          <spinner-loading v-if="loading"></spinner-loading>
          <div v-else-if="contatos.length == 0" class="empty-content">
            <img
              src="https://s3-alpha-sig.figma.com/img/f0a8/b513/a67b5d82f446c92f622666d8fbc16eec?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvmFa1PYgNBD8Moxe58JhhdpUuKgQFVAn04wgS8JzBzpRRstIo-uuinwpDSCSXXKIRWSuwd-1MbHenYgIWcA~49q0Z7EtSqkFryb6NbcgJd-v618-5urCBGV4F~Ur9Q~Sdb11tGcTB3iyQjFKhipqdr5E6MUrKhwARpFXmSdBGl~Cs46D86MrP8GS1EkftD~LL1dLwi6F4IkicSh0UqbOTflCT20KjqYqTGEyOZlmjKxt1s8DzQm~ErRTieYuiqg4h1lb3I9R52LcBCFSyps1zTW-1ZARlf5lx4d4jnJPbob6mfReyoQ~Ha3lXdJML4S3sT90i7OaqFXTCXIn-HnEw__"
              alt=""
            />
            <p class="headline1">Ainda não há contatos</p>
            <boto
              @click="setForm('adicionar')"
              icon="add-outline"
              text="Adicionar contato"
              class="main-content-boto"
            ></boto>
          </div>
          <div v-else class="contatos-table">
            <card-contato
              v-for="item in contatos"
              :contato="item"
              :key="item.id"
            ></card-contato>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flash-growth-login-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.flash-growth-login-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--color-theme-black-0);
}

.main-container-content {
  width: 25%;
}

.main-container {
  border: 2px solid var(--color-theme-black-3);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  gap: 30px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  background-color: white;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-theme-black-3);
  align-items: flex-start;
}
.main-content {
  padding: 0px 20px;
  height: auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
}
.empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 60vh;
}
.main-content-boto {
  width: 100%;
}
.contatos-table {
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
}

.login-logo {
  font-size: 24px;
  color: black;
  align-self: flex-start;
}

@media (max-width: 479px) {
  .main-container {
    padding: 20px;
  }
}
@media (max-width: 957px) {
  .flash-growth-login-content {
    width: 100%;
    margin-right: 0px;
  }
  .main-container-content {
    width: 40%;
  }
}
@media (max-width: 479px) {
  .flash-growth-login-content {
    width: 100%;
    padding: 40px;
  }
  .header {
    gap: 15px;
    flex-direction: column;
  }
  .main-container-content {
    width: 100%;
  }
}
</style>
