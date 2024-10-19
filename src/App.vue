<script setup lang="ts">
import BirdHero from '@/assets/bird-hero.png'

import { ref } from 'vue'

import BirdTrait from './components/BirdTrait.vue'
import MainSidebar from './components/MainSidebar.vue'
import MainHeader from './components/MainHeader.vue'

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

const onToggleHeader = () => {
  isHeaderExpanded.value = !isHeaderExpanded.value
}
</script>

<template>
  <div class="main-container">
    <MainHeader :isHeaderExpanded @toggle-header="onToggleHeader" />
    <main class="wrapper">
      <MainSidebar />
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
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
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
  </div>
</template>

<style scoped>
.main-container {
  --header-height: 87.74px;
}
h1 {
  font-size: 48px;
  font-weight: 700;
  text-align: right;
}
.subtitle {
  text-align: right;
  text-wrap: balance;
  font-size: 18px;
}
.hero-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-section {
  position: relative;
  max-height: 311.4px;
  overflow: hidden;
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
.trait-wrapper {
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  gap: 50.5px;
  padding-top: 51px;
  padding-inline: 36px;
  padding-bottom: 71px;
}
.right-section {
  min-height: calc(100dvh - var(--header-height));
  display: flex;
  flex-direction: column;
  width: 100%;
}
.wrapper {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .trait-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-section {
    max-height: 400px;
  }
}

@media only screen and (min-width: 1280px) {
  .wrapper {
    display: flex;
  }
  .heading {
    font-size: 30px;
  }
  .trait-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    gap: 79px;
    padding-inline: 50px;
    padding-top: 58px;
    padding-bottom: 84px;
  }
  .right-section {
    min-height: 100dvh;
  }
  .hero-section {
    max-height: 634px;
    overflow: visible;
  }
}
</style>
