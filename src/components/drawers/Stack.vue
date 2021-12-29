<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store";
import { TechStack } from "../../types";
import Button from "../atoms/Button.vue";

function close() {
  store.commit("TOGGLE_DRAWER", { name: "Stack", isOpen: false });
}

const textContent = computed(() => {
  return store.state.textContent.drawerStack;
});

const language = computed(() => {
  return store.state.language.abreviation;
});

const techStacks = {
  fundamentals: [
    { logo: "../../assets/logos/js.png", name: "JavaScript" },
    { logo: "../../assets/logos/html.png", name: "HTML" },
    { logo: "../../assets/logos/css.png", name: "CSS" },
    { logo: "../../assets/logos/sass.png", name: "Sass" },
  ],
};
</script>

<template>
  <w-card class="rust-background drawer-background">
    <w-button
      absolute
      top
      right
      xl
      color="white"
      outline
      icon="mdi mdi-close"
      @click="close()"
      >CLOSE</w-button
    >

    <w-flex>
      <h4 @click="close()" class="title-font white font-shade">
        Alec Lloyd Probert
      </h4>
    </w-flex>
    <w-icon class="mt10 white font-shade" size="50">mdi mdi-heart-cog</w-icon>
    <h1 class="big-title title-font font-shade white mt3">
      {{ textContent.title[language] }}
    </h1>

    <w-flex wrap class="tech-stack-wrapper">
      <w-flex class="xs12 md6">
        <v-card class="tech-stack-card-transparent">
          <w-flex class="justify-center align-center" style="height: 100%">
            <p align="left" class="white">
              {{ textContent.intro[language] }}
            </p>
          </w-flex>
        </v-card>
      </w-flex>
      <w-flex class="xs12 md6">
        <w-card class="tech-stack-card">
          <h1 class="white title-font font-shade">
            {{ textContent.fundamentals[language] }}
          </h1>
          <div class="grid my5 align-center justify-center">
            <w-tooltip bg-color="yellow" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/js.png"
                  alt="JavaScript"
                />
              </template>
              <h4 class="title-font">JavaScript (ES6+)</h4>
            </w-tooltip>

            <w-tooltip bg-color="blue-dark2" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/ts.png"
                  alt="TypeScript"
                />
              </template>
              <h4 class="title-font">TypeScript</h4>
            </w-tooltip>

            <w-tooltip bg-color="deep-orange-dark2" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/html.png"
                  alt="HTML"
                />
              </template>
              <h4 class="title-font">HTML 5</h4>
            </w-tooltip>

            <w-tooltip bg-color="blue-dark2" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/css.png"
                  alt="CSS"
                />
              </template>
              <h4 class="title-font">CSS 3</h4>
            </w-tooltip>

            <w-tooltip bg-color="pink-light2" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/sass.png"
                  alt="Sass"
                />
              </template>
              <h4 class="title-font">Sass, scss</h4>
            </w-tooltip>
          </div>
        </w-card>
      </w-flex>

      <w-flex class="xs12 md6">
        <w-card class="tech-stack-card">
          <h1 class="white title-font font-shade">
            {{ textContent.frameworks[language] }}
          </h1>
          <div class="grid my5 align-center justify-center">
            <w-tooltip bg-color="vue--bg" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/vue2.png"
                  alt="Vue2"
                />
              </template>
              <h4 class="title-font">Vue2 + VueX</h4>
            </w-tooltip>

            <w-tooltip bg-color="vue--bg" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/vue3.png"
                  alt="Vue3"
                />
              </template>
              <h4 class="title-font">Vue3 + VueX + composition API</h4>
            </w-tooltip>

            <w-tooltip bg-color="blue-light3" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/vuetify.png"
                  alt="Vuetify"
                />
              </template>
              <h4 class="title-font">Vuetify</h4>
            </w-tooltip>

            <w-tooltip bg-color="deep-orange-dark2" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/svelte.png"
                  alt="Svelte 3"
                />
              </template>
              <h4 class="title-font">Svelte 3 + Sveltekit</h4>
            </w-tooltip>
          </div>
        </w-card>
      </w-flex>
      <w-flex class="xs12 md6">
        <w-card class="tech-stack-card">
          <h1 class="white title-font font-shade">
            {{ textContent.other[language] }}
          </h1>
          <div class="grid my5 align-center justify-center">
            <w-tooltip bg-color="orange-light1" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/firebase.png"
                  alt="Firebase"
                />
              </template>
              <h4 class="title-font">Firebase</h4>
            </w-tooltip>

            <w-tooltip>
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/python.png"
                  alt="Python"
                />
              </template>
              <h4 class="title-font">Python</h4>
            </w-tooltip>

            <w-tooltip bg-color="green-dark3" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/excel.png"
                  alt="Excel + VBA"
                />
              </template>
              <h4 class="title-font">Excel + VBA</h4>
            </w-tooltip>

            <w-tooltip>
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/gimp.png"
                  alt="GIMP"
                />
              </template>
              <h4 class="title-font">GIMP</h4>
            </w-tooltip>

            <w-tooltip bg-color="blue-dark2" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow"
                  src="../../assets/logos/vscode.png"
                  alt="Visual Studio Code"
                />
              </template>
              <h4 class="title-font">Visual Studio Code</h4>
            </w-tooltip>
          </div>
        </w-card>
      </w-flex>
    </w-flex>
  </w-card>
</template>

<style lang="scss" scoped>
.tech-stack-card,
.tech-stack-card-transparent {
  width: 100% !important;
  margin: 20px;
}

.tech-stack-card {
  background: rgba(255, 255, 255, 0.123);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

@media screen and (max-width: 600px) {
  .tech-stack-card {
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
