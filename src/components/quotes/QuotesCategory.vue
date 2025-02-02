<script setup lang="ts">
import { Button } from '@/components/ui/button'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronsUpDown } from 'lucide-vue-next'
import { type PropType, ref } from 'vue'
import QuoteItem from '@/components/quotes/QuoteItem.vue'
import type { QuoteType } from '@/types/quotes.ts'

const isOpen = ref(false)

const props = defineProps({
  title: { type: String, required: true },
  titleQuote: { type: String, required: true },
  titleAuthor: { type: String },
  quotes: {
    type: Object as PropType<QuoteType[]>,
    required: true,
  },
})

const { title } = props
</script>

<template>
  <Collapsible v-model:open="isOpen" class="w-full space-y-2 card-container p-2">
    <div class="flex items-center justify-between">
      <h4 class="font-bold uppercase">{{ title }}</h4>
      <CollapsibleTrigger as-child>
        <Button variant="ghost" size="sm" class="w-9 p-0">
          <ChevronsUpDown class="h-4 w-4" />
          <span class="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <QuoteItem :quote="titleQuote" :author="titleAuthor" />
    <CollapsibleContent class="space-y-2">
      <QuoteItem
        v-for="quote in quotes"
        :quote="quote.text"
        :author="quote.author"
        :key="quote.id"
      />
    </CollapsibleContent>
  </Collapsible>
</template>

<style scoped></style>
