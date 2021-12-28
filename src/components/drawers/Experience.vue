<script setup lang="ts">
import { store } from "../../store";

function close() {
  store.commit("TOGGLE_DRAWER", { name: "Experience", isOpen: false });
}
</script>

<template>
  TEST
  <w-button @click="close()">CLOSE</w-button>
</template>

<style lang="scss" scoped></style>
