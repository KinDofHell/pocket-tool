<script setup lang="ts">
import HeaderLayout from '@/components/shared/layout/HeaderLayout.vue'
import LoaderLayout from '@/components/shared/layout/LoaderLayout.vue'
import { useLoader } from '@/composables/useLoader.ts'
import { onBeforeMount, onMounted } from 'vue'

const { showLoader, hideLoader } = useLoader()

onBeforeMount(() => {
  showLoader(200)
})

onMounted(() => {
  hideLoader()
})
</script>

<template>
  <LoaderLayout />
  <HeaderLayout />
  <main>
    <RouterView />
  </main>
</template>
