<template>
  <div class="empty-state-help-desk-empty-state">
    <div class="empty-state-help-desk-conteudo">
      <img
        alt="image"
        src="/helpdesk_cinza.svg"
        class="empty-state-help-desk-image"
      />
      <span class="empty-state-help-desk-text">Sem chamados no momento.</span>
      <span class="empty-state-help-desk-text1">Estamos aqui quando precisar abrir um novo.</span>
    </div>
  </div>
</template>

<style scoped>
.empty-state-help-desk-empty-state {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 50px;
  align-items: flex-start;
  margin-bottom: 50px;
  justify-content: center;
}
.empty-state-help-desk-conteudo {
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
.empty-state-help-desk-image {
  fill: var(--dl-color-gray-500);
  width: 100px;
  opacity: 90%;
  object-fit: cover;
}
.empty-state-help-desk-text {
  color: #737373;
  font-size: 18px;
  margin-top: 5px;
  font-family: "Fivo Sans Modern";
}
.empty-state-help-desk-text1 {
  color: #737373;
  width: 80%;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-family: "Fivo Sans Medium";
}
</style>
