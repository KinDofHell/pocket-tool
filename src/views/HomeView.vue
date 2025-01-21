<script setup lang="ts">
import WeatherWidget from '@/components/shared/widgets/WeatherWidget.vue'
import MenuWidget from '@/components/shared/widgets/MenuWidget.vue'
</script>

<template>
  <div class="flex flex-col gap-4 tablet:flex-row tablet:justify-between">
    <WeatherWidget />
    <MenuWidget />
  </div>
</template>
