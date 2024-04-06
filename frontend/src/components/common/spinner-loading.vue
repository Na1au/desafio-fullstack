<template>
  <div class="loading-spinner-container">
    <div class="loading-spinner"></div>
  </div>
</template>

<style scoped>
.loading-spinner-container {
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top: 4px solid var(--color-theme-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>