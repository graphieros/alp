<script setup lang="ts">
import { computed } from "vue";
import router from "../../router";
import { store } from "../../store/index";
import { Language, TranslationContent } from "../../types";
import Button from "../atoms/Button.vue";

const textContent = computed<TranslationContent>(() => {
  return store.state.textContent;
});

const language = computed<Language>(() => {
  return store.state.language;
});

function showDrawer(drawer: string): void {
  const payload = { name: drawer, isOpen: true };
  store.commit("TOGGLE_DRAWER", payload);
}

function goToBlog(): void {
  router.push("/blog");
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
      :content="textContent.buttons.blog[language.abreviation]"
      :action="goToBlog"
      class="my4"
      ico="mdi mdi-post"
    />
  </w-flex>
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
