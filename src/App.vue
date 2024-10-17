<script setup lang="ts">
import BirdHero from '@/assets/bird-hero.png'

import { ref } from 'vue'

import BirdTrait from './components/BirdTrait.vue'
import HeaderContent from './components/HeaderContent.vue'

type BirdTraitType = {
  name: string
  content: string
}

const traits = ref<Array<BirdTraitType>>([])
const isHeaderExpanded = ref(false)

const getBirdTraits = async () => {
  const response = await fetch('traits.json')
  const traitsData: { traits: Array<BirdTraitType> } = await response.json()
  traits.value = traitsData.traits
}

getBirdTraits()
</script>

<template>
  <header :class="{ expand: isHeaderExpanded }">
    <div class="wrapper">
      <HeaderContent
        :isOpen="isHeaderExpanded"
        @toggle:header="isHeaderExpanded = !isHeaderExpanded"
      />
    </div>
  </header>

  <main class="wrapper">
    <aside class="side-bar">
      <HeaderContent
        :isOpen="isHeaderExpanded"
        @toggle:header="isHeaderExpanded = !isHeaderExpanded"
      />
    </aside>
    <div class="right-section">
      <div class="hero-section">
        <img :src="BirdHero" class="hero-image" />
        <div class="hero-section-content">
          <h1>
            白頭翁
            <br />
            (Chinese bulbul)
          </h1>
          <p class="subtitle">
            又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
            年。
          </p>
        </div>
      </div>
      <div class="trait-wrapper">
        <BirdTrait
          v-for="trait in traits"
          :key="trait.name"
          :name="trait.name"
          :content="trait.content"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-size: 48px;
  font-weight: 700;
  text-align: right;
}
.subtitle {
  text-align: right;
  text-wrap: balance;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87.74px;
  padding-inline: 40px;

  &.expand {
    height: 300px;
  }
}
.hero-image {
  display: block;
  width: 100%;
  height: 311.4px;
  object-fit: cover;
}
.hero-section {
  position: relative;
  width: 100%;
  color: #fff;
  flex: 1;
}
.hero-section-content {
  position: absolute;
  bottom: 24px;
  right: 27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.side-bar {
  display: none;
}
.trait-wrapper {
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  gap: 50.5px;
}
.right-section {
  min-height: calc(100dvh - 87.74px);
  display: flex;
  flex-direction: column;
  width: 100%;
}
.wrapper {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  header {
    display: none;
  }
  .wrapper {
    display: flex;
  }
  .side-bar {
    display: flex;
    text-align: center;
    width: 345px;
  }
  .heading {
    font-size: 30px;
  }
  .trait-wrapper {
    flex: 1;
    flex-direction: row;
    gap: 79px;
  }
  .right-section {
    min-height: 100dvh;
  }
  .hero-image {
    height: 64vh;
    max-height: 634px;
  }
}
</style>
