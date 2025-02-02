<script setup lang="ts">
import QuotesCategory from '@/components/quotes/QuotesCategory.vue'

const dummyQuotes = [
  {
    id: 1,
    title: 'Existence',
    quotes: [
      {
        id: 1,
        text: 'Do if you can!',
        author: 'John Doe',
      },
      {
        id: 2,
        text: 'Think what have you done!',
        author: 'John Doe',
      },
      {
        id: 3,
        text: 'Think before you exist!',
        author: 'Unknown',
      },
    ],
  },
  {
    id: 2,
    title: 'Love',
    quotes: [
      {
        id: 1,
        text: 'Love and be loved!',
        author: 'Marry Smith',
      },
      {
        id: 2,
        text: 'Betrayal is not love...',
        author: 'Fallen Knight',
      },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col w-full items-center gap-4">
    <h1 class="text-2xl border-b border-black">Quotes</h1>
    <QuotesCategory
      v-for="category in dummyQuotes"
      :title="category.title"
      :title-author="category.quotes[0].author"
      :title-quote="category.quotes[0].text"
      :quotes="category.quotes.slice(1)"
      :key="category.id"
    />
  </div>
</template>

<style scoped></style>
