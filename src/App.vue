<script setup lang="ts">
import { store } from "./store/index";
import { nextTick, ref } from "vue";

let debounceTimer = ref();

function onResize(): void {
  clearTimeout(debounceTimer.value);
  debounceTimer.value = setTimeout(() => {
    const windowWidth = window.innerWidth;
    store.commit("UPDATE_FIELD", {
      field: "isMobile",
      val: windowWidth <= 600,
    });
    store.commit("UPDATE_FIELD", {
      field: "isTablet",
      val: windowWidth <= 1200 && windowWidth > 600,
    });
  }, 250);
}

window.addEventListener("resize", onResize);
nextTick(() => {
  onResize();
});
</script>

<template>
  <w-app id="app">
    <w-flex grow>
      <main class="grow">
        <div class="lloyd-tartan tartan-bg"></div>
        <router-view />
      </main>
    </w-flex>
  </w-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.tartan-bg {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 100px;
  opacity: 0.5;
  z-index: -1;
}
@media screen and (max-width: 600px) {
  .tartan-bg {
    width: 20px;
  }
}
</style>
