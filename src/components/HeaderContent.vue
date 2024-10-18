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
      <div class="logo" :class="{ open: isOpen }">
        <div class="bird">
          <div class="eye"></div>
          <div class="beak"></div>
        </div>
      </div>
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

.bird {
  position: relative;
  left: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  background-color: #f5f5f5;
  border-radius: 150% 100% 100% 0;
  border-top: 4px solid #333;
  border-left: none;
  border-bottom: 3px solid #333;
}

.eye {
  position: absolute;
  top: 7px;
  left: 12px;
  width: 6px;
  height: 6px;
  background-color: #333;
  border-radius: 50%;
}

.beak {
  position: absolute;
  top: 3px;
  left: 25px;
  width: 8px;
  height: 4px;
  background-color: #333;
  border-radius: 0 450% 0% 0;
  transform: rotate(-20deg);
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
  .bird {
    position: relative;
    left: 1.5rem;
    top: 1.5rem;
    width: 50px;
    height: 45px;
    background-color: #f5f5f5;
    border-radius: 150% 100% 100% 0;
    border-top: 8px solid #333;
    border-left: none;
    border-bottom: 6px solid #333;
  }

  .eye {
    position: absolute;
    top: 12px;
    left: 30px;
    width: 8px;
    height: 8px;
    background-color: #333;
    border-radius: 50%;
  }

  .beak {
    position: absolute;
    top: 8px;
    left: 50px;
    width: 8px;
    height: 6px;
    background-color: #333;
    border-radius: 0 150% 0% 0;
    transform: rotate(-10deg);
  }
}
</style>
