<template>
  <div
    id="teste123"
    class="botao-menu-templates-container hover-menu-button"
    v-bind:class="String"
  >
    <button type="button" class="botao-menu-templates-botao-menu">
      <span class="botao-menu-templates-text">Dashboard</span>
    </button>
  </div>
</template>

<style scoped>
.botao-menu-templates-container {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.botao-menu-templates-botao-menu {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.botao-menu-templates-text {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  justify-content: center;
}

@media (max-width: 767px) {
  .botao-menu-templates-text {
    display: none;
  }
}
</style>
