<script setup lang="ts"></script>

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
  height: 100vh;
  width: 100px;
  opacity: 0.5;
  z-index: -1;
}
@media screen and (max-width: 600px) {
  .tartan-bg {
    width: 50px;
  }
}
</style>
