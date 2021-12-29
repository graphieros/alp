<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store";
import Button from "../atoms/Button.vue";

function close() {
  store.commit("TOGGLE_DRAWER", { name: "Projects", isOpen: false });
}

const textContent = computed(() => {
  return store.state.textContent.drawerProjects;
});

const language = computed(() => {
  return store.state.language.abreviation;
});
</script>

<template>
  <w-card class="rust-background drawer-background">
    <w-button
      absolute
      top
      right
      xl
      color="white"
      outline
      icon="mdi mdi-close"
      @click="close()"
      >CLOSE</w-button
    >

    <w-flex>
      <h4 @click="close()" class="title-font white font-shade">
        Alec Lloyd Probert
      </h4>
    </w-flex>
    <w-icon class="mt10 white font-shade" size="50">mdi mdi-star-cog</w-icon>
    <h1 class="big-title title-font font-shade white mt3">
      {{ textContent.title[language] }}
    </h1>
  </w-card>
</template>

<style lang="scss" scoped></style>
