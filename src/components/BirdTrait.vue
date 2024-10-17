<template>
  <div class="trait-section">
    <h3 class="trait-name">{{ props.name }}</h3>
    <p class="trait-content">
      {{ props.content }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  content: String,
})
</script>

<style scoped>
.trait-section {
  display: flex;
  gap: 37.84px;
}
.trait-name {
  font-size: 36px;
  font-weight: 700;
  writing-mode: vertical-lr;
}

@media only screen and (min-width: 768px) {
}
</style>
