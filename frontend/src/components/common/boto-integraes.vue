<template>
  <div class="boto-integraes-container" v-bind:class="String">
    <button type="button" class="boto-integraes-button button">
      <span class="boto-integraes-text">
        <span>Nova integração</span>
        <br />
      </span>
    </button>
  </div>
</template>

<style scoped>
.boto-integraes-container {
  display: flex;
  position: relative;
}
.boto-integraes-container :hover {
  cursor: pointer;
}
.boto-integraes-button {
  color: #ffffff;
  display: flex;
  font-family: Fivo Sans Medium;
  border-width: 0px;
  padding-left: 20px;
  border-radius: 7px;
  padding-right: 20px;
  flex-direction: row;
  background-color: var(--color-theme-primary);
}
.boto-integraes-text {
  padding: 5px;
  font-size: 18px;
  margin-top: 1px;
  margin-left: 5px;
}
</style>
