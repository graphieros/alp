<script setup lang="ts">
import { computed } from "vue";
import { store } from "../store/index";
import { UnknownObj } from "../types";
import Language from "../components/atoms/Language.vue";

const language = computed(() => {
  return store.state.language;
});

const textContent: UnknownObj = {
  nameSubtitle: {
    fr: "Développeur Front-end",
    en: "Front-end developer",
  },
};
</script>

<template>
  <w-flex wrap class="white home-wrapper align-center">
    <w-flex class="xs12 md4" wrap>
      <w-flex class="xs12 justify-center name-wrapper title-font font-shade">
        <h1>Alec Lloyd Probert</h1>
      </w-flex>
      <w-flex class="xs12 justify-center name-wrapper title-font font-shade">
        <h3>{{ textContent.nameSubtitle[language.abreviation] }}</h3>
      </w-flex>
      <w-flex class="xs12 justify-center align-center my4">
        <Language color="brown-light3" shadow />
      </w-flex>
    </w-flex>

    <w-flex class="xs12 md4 justify-center"> </w-flex>
  </w-flex>
</template>

<style lang="scss" scoped>
.home-wrapper {
  height: 100vh;
}
</style>
