<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IconCloudy from '@/components/shared/icons/IconCloudy.vue'
import IconHumidity from '@/components/shared/icons/IconHumidity.vue'
import IconWind from '@/components/shared/icons/IconWind.vue'

const showCard = ref(false)

onMounted(() => {
  setTimeout(() => {
    showCard.value = true
  }, 0)
})
</script>

<template>
  <Transition name="fade-slide">
    <RouterLink
      v-if="showCard"
      :to="{ name: 'weather' }"
      class="flex w-full items-center gap-3 card-container p-2 tablet:w-auto hover-effect"
    >
      <div class="w-[50px] h-[50px] bg-main-gray rounded-2xl icon-container">
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
    </RouterLink>
  </Transition>
</template>

<style scoped>
.hover-effect {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.icon-container {
  transition: transform 0.3s ease;
}

.hover-effect:hover .icon-container {
  transform: translateY(3px);
}
</style>
