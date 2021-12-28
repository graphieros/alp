<script setup lang="ts">
import { store } from "../../store";

function close() {
  store.commit("TOGGLE_DRAWER", { name: "Experience", isOpen: false });
}
</script>

<template>
  <w-card class="rust-background drawer-background">
    <div class="lloyd-tartan side-decoration-bar"></div>
    TEST
    <w-button @click="close()">CLOSE</w-button>
  </w-card>
</template>

<style lang="scss" scoped></style>
