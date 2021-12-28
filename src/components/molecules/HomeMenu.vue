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

function showDrawer(drawer: string) {
  const payload = { name: drawer, isOpen: true };
  store.commit("TOGGLE_DRAWER", payload);
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
      :action="() => showDrawer('Projects')"
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
      :action="() => showDrawer('Experience')"
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
      :action="() => showDrawer('Stack')"
      class="my4"
      ico="mdi mdi-heart-cog"
    />
  </w-flex>
</template>

<style lang="scss" scoped></style>
