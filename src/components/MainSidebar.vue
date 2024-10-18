<template>
  <aside class="side-bar">
    <HeaderContent :isOpen="props.isHeaderExpanded" />
  </aside>
</template>

<script setup lang="ts">
import HeaderContent from './HeaderContent.vue'

const props = defineProps({
  isHeaderExpanded: Boolean,
})
</script>

<style scoped>
.side-bar {
  display: none;
}

@media only screen and (min-width: 1280px) {
  .side-bar {
    display: flex;
    text-align: center;
    min-width: 345px;
  }
}
</style>
