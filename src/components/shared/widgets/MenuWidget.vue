<script setup lang="ts">
import IconNote from '@/components/shared/icons/IconNote.vue'
import { onMounted, ref } from 'vue'
import IconNews from '@/components/shared/icons/IconNews.vue'
import IconQuote from '@/components/shared/icons/IconQuote.vue'
import IconPicture from '@/components/shared/icons/IconPicture.vue'

const showCard = ref(false)

onMounted(() => {
  setTimeout(() => {
    showCard.value = true
  }, 0)
})
</script>

<template>
  <Transition name="fade-slide">
    <div v-if="showCard" class="card-container menu-card p-2 flex flex-col gap-3 tablet:flex-row">
      <RouterLink to="" class="menu-item"><IconNews /><span>News</span></RouterLink>
      <RouterLink to="" class="menu-item"><IconNote /><span>Notes</span></RouterLink>
      <RouterLink to="" class="menu-item"><IconQuote /><span>Quotes</span></RouterLink>
      <RouterLink to="" class="menu-item"><IconPicture /><span>Pictures</span></RouterLink>
    </div>
  </Transition>
</template>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 5px;

  transition: all 0.6s ease;
}

.menu-item:not(:last-child) {
  border-bottom: 1px solid #d2cfcf;
}

@media screen and (max-width: 767px) {
  .menu-item:hover {
    height: 50px;
  }
}

@media screen and (min-width: 768px) {
  .menu-item {
    border-bottom: none !important;
    padding: 0 5px;
  }

  .menu-item:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  .menu-card {
    padding: 0 !important;
  }

  .menu-item:hover {
    background-color: #eeeeee;
  }
}
</style>
