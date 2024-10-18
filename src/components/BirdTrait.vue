<template>
  <div class="trait-section">
    <h3 class="trait-name">
      <span class="donut"></span>
      {{ props.name }}
    </h3>
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
  position: relative;
  flex-grow: 0;
}
.donut {
  border-radius: 50%;
  background-color: var(--bg-donut);
  width: 25px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: absolute;
  top: 52px;
  right: -10px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    background-color: var(--bg-primary);
    width: 50%;
    height: 50%;
    border-radius: 50%;
  }
}

@media only screen and (min-width: 1280px) {
  .trait-section {
    min-height: 0px;
    max-height: 225px;
  }
  .trait-content {
    max-height: 200px;
  }
  .donut {
    border-radius: 50%;
    background-color: var(--bg-donut);
    width: 25px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    position: absolute;
    top: 52px;
    right: -10px;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
      background-color: var(--bg-primary);
      width: 50%;
      height: 50%;
      border-radius: 50%;
    }
  }
}
</style>
