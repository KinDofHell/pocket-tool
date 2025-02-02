<script setup lang="ts">
const props = defineProps({
  author: { type: String, required: true, default: 'Unknown' },
  quote: { type: String, required: true },
})

const { author, quote } = props
</script>

<template>
  <div class="quote-container">
    <blockquote class="quote-content">
      <p>{{ quote }}</p>
      <footer class="quote-author">
        <cite>— {{ author }}</cite>
      </footer>
    </blockquote>
  </div>
</template>

<style scoped>
.quote-content {
  position: relative;
  background: #f8f9fa;
  border-left: 4px solid #6c757d;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1rem;
  line-height: 1.6;
  color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quote-content::before {
  content: '"';
  position: absolute;
  top: 0;
  left: 0.5rem;
  font-size: 2rem;
  color: #6c757d;
  opacity: 0.2;
  font-family: serif;
  line-height: 1;
}

.quote-author {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #6c757d;
  text-align: right;
}

.quote-author cite {
  font-style: normal;
}
</style>
