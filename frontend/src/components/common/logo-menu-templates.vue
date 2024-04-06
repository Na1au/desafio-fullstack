<template>
  <div class="logo-menu-templates-logo" v-bind:class="String">
    <img
      alt="image"
      src="https://res.cloudinary.com/dd9puomgu/image/upload/v1696423695/ccsvrsjp14lwsz0e8don.png"
      class="logo-menu-templates-image"
    />
  </div>
</template>

<style scoped>
.logo-menu-templates-logo {
  top: 0px;
  left: 0px;
  width: calc(100% - 10px);
  padding: 15px 0px;
  z-index: 900;
  position: absolute;
  background-color: var(--dl-color-gray-black);
}
.logo-menu-templates-image {
  width: 100%;
  height: auto;
  padding: 0px 25px;
}
</style>
