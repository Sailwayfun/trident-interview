<template>
  <div class="trait-wrapper">
    <BirdTrait
      v-for="trait in traits"
      :key="trait.name"
      :name="trait.name"
      :content="trait.content"
    />
  </div>
</template>

<script setup lang="ts">
import BirdTrait from './BirdTrait.vue'

type BirdTraitType = {
  name: string
  content: string
}

import { ref } from 'vue'

const traits = ref<Array<BirdTraitType>>([])

const getBirdTraits = async () => {
  const response = await fetch('traits.json')
  const traitsData: { traits: Array<BirdTraitType> } = await response.json()
  traits.value = traitsData.traits
}

getBirdTraits()
</script>

<style scoped>
.trait-wrapper {
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  gap: 50.5px;
  padding-top: 51px;
  padding-inline: 36px;
  padding-bottom: 71px;
}

@media only screen and (min-width: 768px) {
  .trait-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1280px) {
  .trait-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    gap: 79px;
    padding-inline: 50px;
    padding-top: 58px;
    padding-bottom: 84px;
  }
}
</style>
