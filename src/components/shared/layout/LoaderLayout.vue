<script lang="ts" setup>
import { useLoader } from '@/composables/useLoader.ts'

const { isLoading } = useLoader()
</script>

<template>
  <div v-if="isLoading" class="global-loader-overlay">
    <div class="loader"></div>
  </div>
</template>

<style>
.global-loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
