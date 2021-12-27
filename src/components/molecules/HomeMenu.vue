<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store/index";
import Button from "../atoms/Button.vue";

const textContent = computed(() => {
  return store.state.textContent;
});

const language = computed(() => {
  return store.state.language;
});

function test() {
  console.log("TEST");
}
</script>

<template>
  <Button
    round
    outline
    xl
    shadow
    color="white"
    :content="textContent.stack[language.abreviation]"
    :action="test"
  />
</template>

<style lang="scss" scoped></style>
