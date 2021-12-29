<script setup lang="ts">
import { ref, computed } from "vue";
import { store } from "../store/index";
import Language from "../components/atoms/Language.vue";
import ToggleChart from "../components/atoms/ToggleChart.vue";
import HomeMenu from "../components/molecules/HomeMenu.vue";
import Chart from "../components/atoms/Chart.vue";
import Experience from "../components/drawers/Experience.vue";
import Stack from "../components/drawers/Stack.vue";
import Projects from "../components/drawers/Projects.vue";

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

const showStack = computed({
  get() {
    return store.state.showStack;
  },
  set() {
    store.commit("TOGGLE_DRAWER", {
      name: "Stack",
      isOpen: false,
    });
  },
});

const showProjects = computed({
  get() {
    return store.state.showProjects;
  },
  set() {
    store.commit("TOGGLE_DRAWER", {
      name: "Projects",
      isOpen: false,
    });
  },
});

const isMobile = computed(() => {
  return store.state.isMobile;
});

const isTablet = computed(() => {
  return store.state.isTablet;
});

const form = ref({
  name: "",
  email: "",
});

const onSubmit = async () => {
  store.dispatch("CREATE_USER", { ...form.value }).then(() => {
    form.value.name = "";
    form.value.email = "";
  });
};
</script>

<template>
  <w-flex wrap class="white home-wrapper align-center">
    <Chart fixed />
    <w-flex class="xs12 md4" wrap>
      <w-flex
        class="xs12 my2 justify-center name-wrapper title-font font-shade"
      >
        <w-flex class="align-center justify-center">
          <!-- <h4 class="mt-10">Alec</h4> -->
          <h1>Alec Lloyd Probert</h1>
          <!-- <h4 class="mt10">Probert</h4> -->
        </w-flex>
      </w-flex>
      <w-flex class="xs12 justify-center name-wrapper title-font font-shade">
        <h3 class="blue-light3">
          {{ textContent.nameSubtitle[language.abreviation] }}
        </h3>
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

  <!-- DRAWERS -->
  <w-drawer
    left
    v-model="showExperience"
    :width="isMobile || isTablet ? '100%' : '61.8%'"
  >
    <Experience />
  </w-drawer>

  <w-drawer
    left
    v-model="showStack"
    :width="isMobile || isTablet ? '100%' : '61.8%'"
  >
    <Stack />
  </w-drawer>

  <w-drawer
    left
    v-model="showProjects"
    :width="isMobile || isTablet ? '100%' : '61.8%'"
  >
    <Projects />
  </w-drawer>

  <form @submit.prevent="onSubmit">
    <input v-model="form.name" />
    <input v-model="form.email" type="email" />
    <button type="submit">SUBMIT</button>
  </form>
</template>

<style lang="scss" scoped>
.home-wrapper {
  height: 100vh;
}
</style>
