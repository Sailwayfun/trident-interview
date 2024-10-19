<template>
  <header :class="{ expand: isHeaderExpanded }">
    <HeaderContent
      :isOpen="isHeaderExpanded"
      @toggle:header="emit('toggle-header')"
    />
  </header>
</template>

<script setup lang="ts">
import HeaderContent from './HeaderContent.vue'

defineProps({
  isHeaderExpanded: Boolean,
})

const emit = defineEmits(['toggle-header'])
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  height: var(--header-height);
  align-items: center;
  padding-inline: 40px;
  box-shadow: 0px 4px 4px 0px #00000040;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background-color: #fff;

  &.expand {
    --header-height: 300px;
    padding-top: 30px;
    align-items: flex-start;
    height: var(--header-height);
    transition: height 0.3s ease-in-out;
  }
}

@media only screen and (min-width: 1280px) {
  header {
    display: none;
  }
}
</style>
