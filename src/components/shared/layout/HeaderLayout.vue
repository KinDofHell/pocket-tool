<script setup lang="ts">
import IconLogo from '@/components/shared/icons/IconLogo.vue'
import MenuLayout from '@/components/shared/layout/MenuLayout.vue'
import SearchLayout from '@/components/shared/layout/SearchLayout.vue'
</script>

<template>
  <header class="flex gap-2 items-center justify-end mb-6 card-container p-1 w-wull">
    <IconLogo />
    <SearchLayout />
    <MenuLayout />
  </header>
</template>
