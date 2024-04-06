<template>
  <div class="empty-state-contatos-empty-state">
    <div class="empty-state-contatos-conteudo">
      <img alt="image" src="/users_cinza.svg" class="empty-state-contatos-image" />
      <span class="empty-state-contatos-text">Nenhum contato no momento.</span>
      <!-- <span class="empty-state-contatos-text1"></span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyStateContatos',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/users_cinza.svg',
    },
    text11: {
      type: String,
      default:
        'Aguarde enquanto nossa IA trabalha ou clique aqui para configura um contato manualmente.',
    },
    text1: {
      type: String,
      default: 'Nenhum contato ainda :(',
    },
  },
}
</script>

<style scoped>
.empty-state-contatos-empty-state {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 50px;
  align-items: flex-start;
  margin-bottom: 50px;
  justify-content: center;
}
.empty-state-contatos-conteudo {
  flex: 0 0 auto;
  width: 300px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 300px;
  display: flex;
  align-items: center;
  border-radius: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #ececec;
}
.empty-state-contatos-image {
  fill: var(--dl-color-gray-500);
  width: 100px;
  opacity: 90%;
  object-fit: cover;
}
.empty-state-contatos-text {
  color: #737373;
  font-size: 18px;
  margin-top: 5px;
  font-family: "Fivo Sans Modern";
}
.empty-state-contatos-text1 {
  color: #737373;
  width: 80%;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-family: "Fivo Sans Medium";
}
</style>
