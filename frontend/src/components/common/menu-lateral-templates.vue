<script setup>
import LogoMenuTemplates from "./logo-menu-templates";
import AppSettings from "@/components/dashboard/configurações/settings";
import AppPlano from "@/components/dashboard/plano";
import AppProfile from "@/components/dashboard/menu/profile";
</script>

<template>
  <div class="menu-lateral-templates-container" v-bind:class="String">
    <logo-menu-templates
      rootClassName="logo-menu-templates-root-class-name"
    ></logo-menu-templates>
    <div class="menu-lateral-templates-barra">
      <div class="menu-lateral-templates-sections">
        <div class="menu-lateral-templates-title-section">
          <div class="menu-lateral-templates-container1 hover-menu-button">
            <button type="button" class="menu-lateral-templates-botao-menu">
              <span class="menu-lateral-templates-text">Páginas</span>
            </button>
          </div>
        </div>
        <div class="menu-lateral-templates-content-section">
          <div
            id="teste123"
            class="menu-lateral-templates-login hover-menu-button"
          >
            <button type="button" class="menu-lateral-templates-botao-menu1">
              <span class="menu-lateral-templates-text1">Login</span>
            </button>
          </div>
          <div
            id="teste123"
            class="menu-lateral-templates-login-box hover-menu-button"
          >
            <button type="button" class="menu-lateral-templates-botao-menu2">
              <span class="menu-lateral-templates-text2">Login box</span>
            </button>
          </div>
          <div
            id="teste123"
            class="menu-lateral-templates-cadastro hover-menu-button"
          >
            <button type="button" class="menu-lateral-templates-botao-menu3">
              <span class="menu-lateral-templates-text3">Cadastro</span>
            </button>
          </div>
          <div
            id="teste123"
            class="menu-lateral-templates-cadastro-box hover-menu-button"
          >
            <button type="button" class="menu-lateral-templates-botao-menu4">
              <span class="menu-lateral-templates-text4">Cadastro box</span>
            </button>
          </div>
          <div
            id="teste123"
            class="menu-lateral-templates-recuperar-senha hover-menu-button"
          >
            <button type="button" class="menu-lateral-templates-botao-menu5">
              <span class="menu-lateral-templates-text5">
                Recuperar senha
              </span>
            </button>
          </div>
          <div
            id="teste123"
            class="menu-lateral-templates-recuperar-senha1 hover-menu-button"
          >
            <button type="button" class="menu-lateral-templates-botao-menu6">
              <span class="menu-lateral-templates-text6">
                Recuperar senha box
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="menu-lateral-templates-contentbotton">
        <div class="menu-lateral-templates-acount">
          <app-settings></app-settings>
          <app-plano></app-plano>
        </div>
        <app-profile rootClassName="profile-root-class-name1"></app-profile>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-lateral-templates-container {
  width: 300px;
  height: 100%;
  display: flex;
  position: absolute;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-gray-black);
}
.menu-lateral-templates-barra {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 70px 25px 35px;
  overflow: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.menu-lateral-templates-sections {
  width: 100%;
  margin-top: 30px;
}
.menu-lateral-templates-title-section {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-container1 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.menu-lateral-templates-botao-menu {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text {
  color: #fccf00;
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  justify-content: center;
}
.menu-lateral-templates-content-section {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-login {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu1 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text1 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-login-box {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu2 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text2 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-cadastro {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu3 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text3 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-cadastro-box {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu4 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text4 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-recuperar-senha {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu5 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text5 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-recuperar-senha1 {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu6 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text6 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-contentbotton {
  gap: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  max-height: 400px;
  flex-direction: column;
  justify-content: space-between;
}
.menu-lateral-templates-acount {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-root-class-name {
  left: 0px;
}
@media (max-width: 767px) {
  .menu-lateral-templates-container {
    width: 80px;
    display: none;
  }
  .menu-lateral-templates-barra {
    padding: 70px 5px 35px;
  }
  .menu-lateral-templates-text {
    display: none;
  }
  .menu-lateral-templates-text1 {
    display: none;
  }
  .menu-lateral-templates-text2 {
    display: none;
  }
  .menu-lateral-templates-text3 {
    display: none;
  }
  .menu-lateral-templates-text4 {
    display: none;
  }
  .menu-lateral-templates-text5 {
    display: none;
  }
  .menu-lateral-templates-text6 {
    display: none;
  }
}
</style>
