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
  <w-flex class="xs12 justify-center">
    <Button
      round
      outline
      xl
      shadow
      color="white"
      :content="textContent.buttons.projects[language.abreviation]"
      :action="test"
      class="my4"
      ico="mdi mdi-star-cog"
    />
  </w-flex>
  <w-flex class="xs12 justify-center">
    <Button
      round
      outline
      xl
      shadow
      color="white"
      :content="textContent.buttons.experience[language.abreviation]"
      :action="test"
      class="my4"
      ico="mdi mdi-head-cog"
    />
  </w-flex>
  <w-flex class="xs12 justify-center">
    <Button
      round
      outline
      xl
      shadow
      color="white"
      :content="textContent.buttons.stack[language.abreviation]"
      :action="test"
      class="my4"
      ico="mdi mdi-heart-cog"
    />
  </w-flex>
</template>

<style lang="scss" scoped></style>
