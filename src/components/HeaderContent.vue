<template>
  <div class="header-content" :class="{ 'align-start': isOpen }">
    <button type="button" class="hamburger-menu" @click="toggleHeaderNav">
      <img :src="isOpen ? hamburgerClose : hamburgerMenu" />
    </button>
    <nav class="main-nav-heading">
      <h2 class="heading">白頭翁不吃小米</h2>
      <div class="links" :class="{ open: props.isOpen }">
        <a href="#" class="active">白頭翁的特性</a>
        <a href="#">白頭翁的故事</a>
        <a href="#">白頭翁的美照</a>
        <a href="#">白頭翁的危機</a>
      </div>
    </nav>
    <div>
      <div class="logo" :class="{ open: isOpen }"></div>
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
  align-items: center;
  width: 100%;

  &.align-start {
    align-items: start;
  }
}
.heading {
  font-size: 20px;
  font-weight: 700;
}
.links {
  display: none;
  gap: 21.74px;
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
a.active {
  color: var(--link-active);
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

  &.open {
    transform: translateY(-10px);
  }
}
@media only screen and (min-width: 1280px) {
  .header-content {
    align-items: flex-start;
  }
  .main-nav-heading {
    width: 100%;
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
