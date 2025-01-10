<script setup lang="ts">
import IconCloudy from '@/components/shared/icons/IconCloudy.vue'
import IconHumidity from '@/components/shared/icons/IconHumidity.vue'
import IconWind from '@/components/shared/icons/IconWind.vue'
</script>

<template>
  <div class="flex w-full items-center gap-3 card-container p-2">
    <div class="w-[50px] h-[50px] bg-main-gray rounded-2xl">
      <IconCloudy />
    </div>
    <div class="flex flex-col">
      <span class="text-xl font-bold">Zhytomyr</span>
      <div class="flex">
        <span>-8<span class="text-[10px] relative -top-1.5">°C</span></span>
        <span class="mx-1">|</span>
        <div class="flex items-center"><IconHumidity /> <span>95%</span></div>
        <span class="mx-1">|</span>
        <div class="flex items-center gap-1"><IconWind /> <span>12 km/h</span></div>
      </div>
    </div>
  </div>
</template>
