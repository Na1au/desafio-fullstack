<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  status: {
    type: String,
    required: true
  }
});

function getStatusColor(status) {
  var final = "";
  switch (status) {
    case "inativo":
      final = "warning";
      break;
    case "Shipped":
      final = "danger";
      break;
    case "fechado":
      final = "success";
      break;
    case "ativo":
      final = "info";
      break;
    case "Aberto":
      final = "aberto";
      break;
    default: 
      final = status;
      break;
  }
  return final;
}
</script>

<template>
  <div  id="status-class" :class="`status-${getStatusColor(props.status)}`">
    <span class="textbutton">{{ props.status }}</span>
  </div>
</template>

<style scoped>
  .textbutton {
    padding: 5px;
  }
  @media(max-width: 479px) {
    #status-class {
      height: fit-content;
      padding: 5px;
    }
    .textbutton {
      font-size: 12px;
    }
  }
</style>