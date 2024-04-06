<script setup>
import InputText from "../components/common/InputText.vue";
import InputTextPassword from "../components/common/InputTextPassword.vue";
import { ref, onMounted } from "vue";
import router from "../router/index";
import { useStore } from 'vuex'

const store = useStore();

const email = ref("");
const password = ref("");
const url = ref('')

onMounted(() => {
  if(localStorage.getItem("token")) {
    router.push('/dashboard')
  }
})

const change = () => {
  // url.value = 'login'
  router.push('/home')
}

/* const login = () => {
  if (email.value != "" && password.value != "") {
    store.dispatch("userModule/login", {
      email: email.value,
      password: password.value,
    });
  } else {
    store.dispatch("setDialog", {
      message: "Erro! Os campos e-mail e senha são obrigatórios",
      icon: "alert-circle-outline",
      type: "danger",
    });
  }
}; */
</script>

<template>
  <div class="flash-growth-login-container">
    <toast-alert></toast-alert>
    <div class="flash-growth-login-content">
      <div class="login-container" v-bind:class="String">
          <p class="login-logo">Login</p>
        <div v-if="url == 'login'" class="login-email">
          <input-text :has_information="true" label="E-mail" v-model:value="email"></input-text>
        </div>
        <div v-if="url == 'login'" class="login-senha">
          <input-text-password
            label="Senha"
            v-model:value="password"
          ></input-text-password>
        </div>
        <div @click="change" class="login-botao">
          <div class="login-botaoaction">
            <p v-if="url == ''" class="login-text5">Fazer login com a Huggy</p>
            <p v-else-if="url == 'login'" class="login-text5">Entrar</p>
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
  flex-direction: row;
}
.flash-growth-login-image {
  margin-top: -50px;
  object-fit: cover;
}
.flash-growth-login-content {
  flex: 0 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 40px;
  align-self: center;
  align-items: center;
  margin-right: 5px;
  justify-content: center;
  background-color: var(--theme-color-main);
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

.login-container {
  gap: 30px;
  width: 100%;
  display: flex;
  padding: 40px;
  position: relative;
  max-width: 350px;
  align-items: flex-start;
  border-radius: 12px;
  flex-direction: column;
}
.login-logo {
  font-size: 24px;
  color: black;
  align-self: center;
  left: 190px;
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
  .login-container {
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
