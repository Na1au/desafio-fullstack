<script setup>
import botaoMenuTemplates from "./botao-menu-templates.vue";
</script>

<template>
  <div class="contedo-menu-templates-contedo" v-bind:class="String">
    <botao-menu-templates
      rootClassName="botao-menu-templates-root-class-name"
    ></botao-menu-templates>
  </div>
</template>

<style scoped>
.contedo-menu-templates-contedo {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
</style>
