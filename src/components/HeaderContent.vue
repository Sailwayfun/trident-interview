<template>
  <div class="header-content">
    <button type="button" class="hamburger-menu" @click="toggleHeaderNav">
      <img :src="isOpen ? hamburgerClose : hamburgerMenu" />
    </button>
    <nav class="main-nav-heading">
      <h2 class="heading">白頭翁不吃小米</h2>
      <div class="links" :class="{ open: props.isOpen }">
        <a href="#">白頭翁的特性</a>
        <a href="#">白頭翁的故事</a>
        <a href="#">白頭翁的美照</a>
        <a href="#">白頭翁的危機</a>
      </div>
    </nav>
    <div>
      <div class="logo"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import hamburgerClose from '@/assets/hamburgur-close.png'
import hamburgerMenu from '@/assets/hamburgur-menu.png'

const props = defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['toggle:header'])

const toggleHeaderNav = () => emit('toggle:header')
</script>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.heading {
  font-size: 20px;
  font-weight: 700;
}
.links {
  display: none;
}
.main-nav-heading {
  gap: 35px;
}
.main-nav-heading,
.links.open {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hamburger-menu {
  width: 1.5rem;
  height: fit-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.logo {
  width: 48px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
}
@media only screen and (min-width: 768px) {
  .main-nav-heading {
    gap: 75px;
  }
  .heading {
    font-size: 30px;
    padding-top: 5rem;
  }
  .hamburger-menu {
    display: none;
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 96px;
    position: absolute;
    transform: translateX(-50%);
    z-index: 5;
    top: 3rem;
  }
}
</style>
