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
import Contact from "../components/modals/Contact.vue";

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

let isContactOpen = ref(false);

let animatedName = "Alec Lloyd Probert";

function animateName() {
  const arr = animatedName.split("");
  return arr;
}

function setNameAnimation(position: number): string {
  return `animation-delay: ${position * 75}ms`;
}
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
          <h1 v-for="(letter, i) in animateName()">
            <span
              class="name-letters"
              :style="
                i === 3 || i === 9
                  ? `margin-right:8px; ${setNameAnimation(i)}`
                  : setNameAnimation(i)
              "
              :key="`letter_${i}`"
              >{{ letter }}</span
            >
          </h1>
          <!-- <h4 class="mt10">Probert</h4> -->
        </w-flex>
      </w-flex>
      <w-flex class="xs12 justify-center name-wrapper title-font font-shade">
        <h3 class="blue-light3 job-title">
          {{ textContent.nameSubtitle[language.abreviation] }}
        </h3>
      </w-flex>
      <w-flex class="xs12 justify-center align-center my4 toggle-lang">
        <Language color="brown-light3" shadow />
      </w-flex>
      <w-flex class="xs12 justify-center align-center my4">
        <ToggleChart color="brown-light3" shadow />
      </w-flex>
    </w-flex>

    <w-flex wrap class="xs12 md4 justify-center title-font">
      <w-button
        outline
        color="white"
        class="contact-button mb4"
        @click="isContactOpen = !isContactOpen"
        ><div class="contact-button-bg lloyd-tartan"></div>
        <div class="contact-button-content">
          <w-icon xl class="mt-5">mdi mdi-email-edit-outline</w-icon>
          <h4 class="mt">CONTACT</h4>
        </div>
      </w-button>
      <HomeMenu />
    </w-flex>
  </w-flex>

  <!-- MODALS -->
  <w-dialog width="800" v-model="isContactOpen">
    <Contact @close="isContactOpen = !isContactOpen" />
  </w-dialog>

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
</template>

<style lang="scss" scoped>
.home-wrapper {
  height: 100vh;
}
.contact-button {
  border-radius: 50%;
  box-shadow: 0px 10px 10px rgb(50, 30, 30);
  display: block;
  height: 100px !important;
  position: relative;
  width: 100px;
  animation: fade 0.3s ease-in forwards;
  animation-delay: 2.7s;
  opacity: 0;

  @keyframes fade {
    0% {
      opacity: 0;
      transform: scale(0, 0) rotate(1800deg);
    }
    90% {
      opacity: 1;
      transform: scale(1.2, 1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1) rotate(0deg);
    }
  }
  .contact-button-bg {
    border-radius: 50%;
    height: 100%;
    left: 0;
    opacity: 0.3;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
}

.job-title,
.toggle-lang {
  opacity: 0;
  animation: fade-title 0.3s ease-in forwards;
}

.job-title {
  animation-delay: 1s;
}

.toggle-lang {
  animation-delay: 1.2s;
}

@keyframes fade-title {
  0% {
    opacity: 0;
    transform: scale(2, 0) translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
}

.name-letters {
  animation: appear 0.15s ease-in forwards;
  opacity: 0;
  display: block;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>
