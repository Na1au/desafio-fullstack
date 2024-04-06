<script setup>
import InputText from "../components/common/InputText.vue";
import boto from "@/components/common/boto.vue";
import CardContato from '../components/common/card-contato.vue';
import EditContato from "../components/forms/edit-contato.vue";
import router from "../router/index";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import axios from 'axios';

const contatos = ref([])
const search = ref("");

const store = useStore()

onMounted(async() => {
  contatos.value = await axios.get('https://64e6a18609e64530d1801b44.mockapi.io/clients').then((res) => {
    return res.data;
  })

  console.log('CLIENTS ==>>', contatos.value )
})

function setForm(route) {
  store.commit("SET_FORM_CONTATO", { visible: true, route: route})
}
</script>

<template>
  <div class="flash-growth-login-container">
    <edit-contato></edit-contato>
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
          <!-- <div class="empty-content">
            <img
            src="https://s3-alpha-sig.figma.com/img/f0a8/b513/a67b5d82f446c92f622666d8fbc16eec?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvmFa1PYgNBD8Moxe58JhhdpUuKgQFVAn04wgS8JzBzpRRstIo-uuinwpDSCSXXKIRWSuwd-1MbHenYgIWcA~49q0Z7EtSqkFryb6NbcgJd-v618-5urCBGV4F~Ur9Q~Sdb11tGcTB3iyQjFKhipqdr5E6MUrKhwARpFXmSdBGl~Cs46D86MrP8GS1EkftD~LL1dLwi6F4IkicSh0UqbOTflCT20KjqYqTGEyOZlmjKxt1s8DzQm~ErRTieYuiqg4h1lb3I9R52LcBCFSyps1zTW-1ZARlf5lx4d4jnJPbob6mfReyoQ~Ha3lXdJML4S3sT90i7OaqFXTCXIn-HnEw__"
            alt=""
          />
          <p class="headline1">Ainda não há contatos</p>
          <boto
            icon="add-outline"
            text="Adicionar contato"
            class="main-content-boto"
          ></boto>
          </div> -->
            <div class="contatos-table">
              <card-contato v-for="item in contatos" :contato="item" :key="item.id"></card-contato>
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
.flash-growth-login-image {
  margin-top: -50px;
  object-fit: cover;
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
@media (max-width: 957px) {
  .flash-growth-login-content {
    width: 100%;
    margin-right: 0px;
  }
}
@media (max-width: 479px) {
  .flash-growth-login-content {
    width: 100%;
    padding: 40px;
  }
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
.empty-content{
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
.main-container-content {
  width: 25%;
}

.login-logo {
  font-size: 24px;
  color: black;
  align-self: flex-start;
}
.login-image {
  clip-path: polygon(0% 0, 41% 0%, 0% 10000%, 0% 0%);
  width: 100%;
  object-fit: cover;
}
.login-sectionname {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: flex-start;
  flex-direction: column;
}
.login-text {
  color: var(--color-main-low);
  font-size: 30px;
}
.login-email {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
  flex-direction: column;
}
.login-text1 {
  color: var(--color-main-low);
  font-size: 16px;
}
.login-textinput {
  width: 100%;
  border-color: #737373;
}
.login-senha {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login-text2 {
  color: var(--color-main-low);
}
.login-textinput1 {
  width: 100%;
  border-color: #737373;
}
.login-logininfo {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.login-senhainfo {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
}
.login-manterconectado {
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
  justify-content: space-between;
}
.login-checkbox {
  width: 18px;
  height: 18px;
}
.login-text3 {
  color: var(--color-main-low);
  font-size: 16px;
  margin-left: 10px;
}
.login-alterarsenha {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}

.login-alterarsenha :hover {
  cursor: pointer;
}
.login-cadastrar {
  text-align: center;
}
.login-cadastrar :hover {
  cursor: pointer;
}
.login-text4 {
  color: #737373;
  font-size: 16px;
  margin-right: 10px;
}
.login-botao {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.login-botao :hover {
  cursor: pointer;
}
.login-botao:hover .login-botaoaction {
  background-color: var(--color-theme-main-normal);
}
.login-botao:active .login-botaoaction {
  background-color: var(--color-theme-main-dark);
}
.login-botaoaction {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: var(--color-theme-main);
}
.login-text5 {
  color: white;
  font-size: 18px;
  align-self: center;
  text-align: center;
}

@media (max-width: 479px) {
  .main-container {
    padding: 20px;
  }
  .login-sectionname {
    margin-top: 20px;
  }
  .login-text {
    font-size: 20px;
  }
  .login-text3 {
    font-size: 12px;
  }
  .login-text4 {
    font-size: 12px;
  }
}
</style>
