<script setup lang="ts">
import { ref, computed } from "vue";
import { store } from "../store/index";
import Language from "../components/atoms/Language.vue";
import ToggleChart from "../components/atoms/ToggleChart.vue";
import HomeMenu from "../components/molecules/HomeMenu.vue";
import Chart from "../components/atoms/Chart.vue";
import Experience from "../components/drawers/Experience.vue";

const language = computed(() => {
  return store.state.language;
});

const textContent = computed(() => {
  return store.state.textContent;
});

const showExperience = computed({
  get() {
    return store.state.showExperience;
  },
  set() {
    store.commit("TOGGLE_DRAWER", {
      name: "Experience",
      isOpen: false,
    });
  },
});
</script>

<template>
  <w-flex wrap class="white home-wrapper align-center">
    <Chart fixed />
    <w-flex class="xs12 md4" wrap>
      <w-flex
        class="xs12 my2 justify-center name-wrapper title-font font-shade"
      >
        <h1>Alec Lloyd Probert</h1>
      </w-flex>
      <w-flex class="xs12 justify-center name-wrapper title-font font-shade">
        <h3>{{ textContent.nameSubtitle[language.abreviation] }}</h3>
      </w-flex>
      <w-flex class="xs12 justify-center align-center my4">
        <Language color="brown-light3" shadow />
      </w-flex>
      <w-flex class="xs12 justify-center align-center my4">
        <ToggleChart color="brown-light3" shadow />
      </w-flex>
    </w-flex>

    <w-flex wrap class="xs12 md4 justify-center title-font">
      <HomeMenu />
    </w-flex>
  </w-flex>

  <!-- EXPERIENCE -->
  <w-drawer left v-model="showExperience" width="61.8%">
    <Experience />
  </w-drawer>
</template>

<style lang="scss" scoped>
.home-wrapper {
  height: 100vh;
}
</style>
