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
      class="my4 home-link"
      ico="mdi mdi-post"
      id="link-4"
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
      class="my4 home-link"
      ico="mdi mdi-star-cog"
      id="link-3"
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
      class="my4 home-link"
      ico="mdi mdi-head-cog"
      id="link-2"
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
      class="my4 home-link"
      ico="mdi mdi-heart-cog"
      id="link-1"
    />
  </w-flex>
</template>

<style lang="scss" scoped>
.home-link {
  opacity: 0;
  animation: fade 0.3s ease-in forwards;
}

#link-1 {
  animation-delay: 0s;
}

#link-2 {
  animation-delay: 0.3s;
}

#link-3 {
  animation-delay: 0.6s;
}
#link-4 {
  animation-delay: 0.9s;
}

@keyframes fade {
  0% {
    transform: scale(0.6, 1);
    opacity: 0;
  }
  90% {
    transform: scale(1.2, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
</style>
