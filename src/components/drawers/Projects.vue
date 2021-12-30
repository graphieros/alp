<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store";
import Button from "../atoms/Button.vue";

function close() {
  store.commit("TOGGLE_DRAWER", { name: "Projects", isOpen: false });
}

const textContent = computed(() => {
  return store.state.textContent.drawerProjects;
});

const language = computed(() => {
  return store.state.language.abreviation;
});
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
    <w-icon class="mt10 white font-shade" size="50">mdi mdi-star-cog</w-icon>
    <h1 class="big-title title-font font-shade white mt3">
      {{ textContent.title[language] }}
    </h1>

    <w-flex class="mt5 white">
      <w-card class="projects-card pa5 mb5">
        <w-flex wrap>
          <w-flex class="xs12 mb5">
            <h1 class="title-font bold font-shade">AgilePkr</h1>
          </w-flex>
          <w-flex class="xs12 md8 align-center justify-center">
            <w-flex wrap>
              <w-flex class="xs12">
                <h4 align="left" class="title-font pr5">
                  {{ textContent.projects.agilePkr.intro[language] }}
                </h4>
              </w-flex>
              <w-flex class="xs12 mt5">
                <h4 align="left" class="title-font pr5">
                  {{ textContent.projects.agilePkr.stack[language] }}
                </h4>
              </w-flex>
            </w-flex>
          </w-flex>

          <w-flex wrap class="py5">
            <w-flex class="xs12 mb5">
              <img
                class="fw box-shadow"
                src="../../assets/screenshots/agilepkr_table.png"
              /><br />
            </w-flex>
            <w-flex class="xs12">
              <img
                class="fw box-shadow"
                src="../../assets/screenshots/agilepkr_stats_2.png"
              />
            </w-flex>
          </w-flex>

          <w-flex class="xs12">
            <w-tooltip bg-color="blue-dark2" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/ts.png"
                  alt="TypeScript"
                />
              </template>
              <h4 class="title-font">TypeScript</h4>
            </w-tooltip>

            <w-tooltip bg-color="vue--bg" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/vue2.png"
                  alt="Vue2"
                />
              </template>
              <h4 class="title-font">Vue2 + VueX</h4>
            </w-tooltip>
            <w-tooltip bg-color="blue-light3" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/vuetify.png"
                  alt="Vuetify"
                />
              </template>
              <h4 class="title-font">Vuetify</h4>
            </w-tooltip>
            <w-tooltip bg-color="orange-light1" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/firebase.png"
                  alt="Firebase"
                />
              </template>
              <h4 class="title-font">Firebase</h4>
            </w-tooltip>
          </w-flex>

          <w-flex class="align-end justify-end">
            <a href="https://agilepkr.graphieros.com" target="_blank">
              <Button
                class="title-font mt5"
                xl
                round
                shadow
                outline
                color="white"
                ico="mdi mdi-eye-plus"
                :content="textContent.projects.agilePkr.cta[language]"
                :action="() => null"
              />
            </a>
          </w-flex>
        </w-flex>
      </w-card>
    </w-flex>

    <w-flex class="mt5 white">
      <w-card class="projects-card pa5 mb5">
        <w-flex wrap>
          <w-flex class="xs12 mb5">
            <h1 class="title-font bold font-shade">Graphieros (React)</h1>
          </w-flex>
        </w-flex>

        <w-flex class="xs12 md8 align-center justify-center">
          <w-flex wrap>
            <w-flex class="xs12">
              <h4 align="left" class="title-font pr5">
                {{ textContent.projects.graphierosReact.intro[language] }}
              </h4>
            </w-flex>
            <w-flex class="xs12 mt5">
              <h4 align="left" class="title-font pr5">
                {{ textContent.projects.graphierosReact.stack[language] }}
              </h4>
            </w-flex>
          </w-flex>
        </w-flex>

        <w-flex wrap class="py5">
          <w-flex class="xs12 mb5">
            <img
              class="fw box-shadow"
              src="../../assets/screenshots/graphieros_react_home1.png"
            /><br />
          </w-flex>
          <w-flex class="xs12 mb5">
            <img
              class="fw box-shadow"
              src="../../assets/screenshots/graphieros_react_words.png"
            />
          </w-flex>
          <w-flex class="xs12">
            <img
              class="fw box-shadow"
              src="../../assets/screenshots/graphieros_react_space.png"
            />
          </w-flex>
        </w-flex>

        <w-flex class="xs12">
          <w-tooltip bg-color="yellow" color="black">
            <template #activator="{ on }">
              <img
                v-on="on"
                class="mx2 drop-shadow tech-image"
                src="../../assets/logos/js.png"
                alt="JavaScript"
              />
            </template>
            <h4 class="title-font">JavaScript (ES6+)</h4>
          </w-tooltip>
          <w-tooltip bg-color="blue-light3" color="black">
            <template #activator="{ on }">
              <img
                v-on="on"
                class="mx2 drop-shadow tech-image"
                src="../../assets/logos/react.png"
                alt="ReactJs"
              />
            </template>
            <h4 class="title-font">ReactJs</h4>
          </w-tooltip>
        </w-flex>

        <w-flex class="align-end justify-end">
          <a href="https://graphieros.com" target="_blank">
            <Button
              class="title-font mt5"
              xl
              round
              shadow
              outline
              color="white"
              ico="mdi mdi-eye-plus"
              :content="textContent.projects.graphierosReact.cta[language]"
              :action="() => null"
            />
          </a>
        </w-flex>
      </w-card>
    </w-flex>

    <w-flex class="mt5 white">
      <w-card class="projects-card pa5 mb5">
        <w-flex wrap>
          <w-flex class="xs12 mb5">
            <h1 class="title-font bold font-shade">Graphieros (Vue3)</h1>
          </w-flex>
        </w-flex>

        <w-flex class="xs12 md8 align-center justify-center">
          <w-flex wrap>
            <w-flex class="xs12">
              <h4 align="left" class="title-font pr5">
                {{ textContent.projects.graphierosVue.intro[language] }}
              </h4>
            </w-flex>
            <w-flex class="xs12 mt5">
              <h4 align="left" class="title-font pr5">
                {{ textContent.projects.graphierosVue.stack[language] }}
              </h4>
            </w-flex>
          </w-flex>
        </w-flex>

        <w-flex wrap class="py5">
          <w-flex class="xs12 mb5">
            <img
              class="fw box-shadow"
              src="../../assets/screenshots/graphieros_vue_home1.png"
            /><br />
          </w-flex>
          <w-flex class="xs12 mb5">
            <img
              class="fw box-shadow"
              src="../../assets/screenshots/graphieros_vue_editor.png"
            />
          </w-flex>
          <w-flex class="xs12">
            <img
              class="fw box-shadow"
              src="../../assets/screenshots/graphieros_vue_expl.png"
            />
          </w-flex>
        </w-flex>

        <w-flex class="xs12">
          <w-tooltip bg-color="yellow" color="black">
            <template #activator="{ on }">
              <img
                v-on="on"
                class="mx2 drop-shadow tech-image"
                src="../../assets/logos/js.png"
                alt="JavaScript"
              />
            </template>
            <h4 class="title-font">JavaScript (ES6+)</h4>
          </w-tooltip>

          <w-tooltip bg-color="vue--bg" color="black">
            <template #activator="{ on }">
              <img
                v-on="on"
                class="mx2 drop-shadow tech-image"
                src="../../assets/logos/vue3.png"
                alt="Vue3"
              />
            </template>
            <h4 class="title-font">Vue3</h4>
          </w-tooltip>
        </w-flex>

        <w-flex class="align-end justify-end">
          <a href="https://en.graphieros.com" target="_blank">
            <Button
              class="title-font mt5"
              xl
              round
              shadow
              outline
              color="white"
              ico="mdi mdi-eye-plus"
              :content="textContent.projects.graphierosVue.cta[language]"
              :action="() => null"
            />
          </a>
        </w-flex>
      </w-card>
    </w-flex>

    <w-flex class="mt5 white">
      <w-card class="projects-card pa5 mb5">
        <w-flex wrap>
          <w-flex class="xs12 mb5">
            <h1 class="title-font bold font-shade">Toilet Mogul</h1>
          </w-flex>
        </w-flex>

        <w-flex class="xs12 md8 align-center justify-center">
          <w-flex wrap>
            <w-flex class="xs12">
              <h4 align="left" class="title-font pr5">
                {{ textContent.projects.toiletMogul.intro[language] }}
              </h4>
            </w-flex>
            <w-flex class="xs12 mt5">
              <h4 align="left" class="title-font pr5">
                {{ textContent.projects.toiletMogul.stack[language] }}
              </h4>
            </w-flex>
          </w-flex>
        </w-flex>

        <w-flex wrap class="py5">
          <w-flex class="xs12">
            <img
              class="fw box-shadow"
              src="../../assets/screenshots/toiletMogul_home1.png"
            /><br />
          </w-flex>
        </w-flex>

        <w-flex class="xs12">
          <w-tooltip bg-color="blue-dark2" color="white">
            <template #activator="{ on }">
              <img
                v-on="on"
                class="mx2 drop-shadow tech-image"
                src="../../assets/logos/ts.png"
                alt="TypeScript"
              />
            </template>
            <h4 class="title-font">TypeScript</h4>
          </w-tooltip>

          <w-tooltip bg-color="vue--bg" color="black">
            <template #activator="{ on }">
              <img
                v-on="on"
                class="mx2 drop-shadow tech-image"
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
                class="mx2 drop-shadow tech-image"
                src="../../assets/logos/waveui.png"
                alt="Vue3"
              />
            </template>
            <h4 class="title-font">waveUI</h4>
          </w-tooltip>
        </w-flex>

        <w-flex class="align-end justify-end">
          <a href="https://toilet-mogul.graphieros.com" target="_blank">
            <Button
              class="title-font mt5"
              xl
              round
              shadow
              outline
              color="white"
              ico="mdi mdi-eye-plus"
              :content="textContent.projects.toiletMogul.cta[language]"
              :action="() => null"
            />
          </a>
        </w-flex>
      </w-card>
    </w-flex>

    <w-flex class="mt5 white">
      <w-card class="projects-card pa5 mb5">
        <w-flex wrap>
          <w-flex class="xs12 mb5">
            <h1 class="title-font bold font-shade">
              {{ textContent.projects.thisSite.name[language] }}
            </h1>
          </w-flex>
          <w-flex class="xs12 md8 align-center justify-center">
            <w-flex wrap>
              <w-flex class="xs12">
                <h4 align="left" class="title-font pr5">
                  {{ textContent.projects.thisSite.intro[language] }}
                </h4>
              </w-flex>
              <w-flex class="xs12 mt5">
                <h4 align="left" class="title-font pr5">
                  {{ textContent.projects.thisSite.stack[language] }}
                </h4>
              </w-flex>
            </w-flex>
          </w-flex>

          <w-flex wrap class="py5">
            <w-flex class="xs12 mb5">
              <img
                class="fw box-shadow"
                src="../../assets/screenshots/this_vue_home1.png"
              /><br />
            </w-flex>
          </w-flex>

          <w-flex class="xs12">
            <w-tooltip bg-color="blue-dark2" color="white">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/ts.png"
                  alt="TypeScript"
                />
              </template>
              <h4 class="title-font">TypeScript</h4>
            </w-tooltip>

            <w-tooltip bg-color="vue--bg" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/vue3.png"
                  alt="Vue3"
                />
              </template>
              <h4 class="title-font">Vue3 + VueX</h4>
            </w-tooltip>
            <w-tooltip bg-color="blue-light3" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/waveui.png"
                  alt="WaveUI"
                />
              </template>
              <h4 class="title-font">WaveUI</h4>
            </w-tooltip>
            <w-tooltip bg-color="orange-light1" color="black">
              <template #activator="{ on }">
                <img
                  v-on="on"
                  class="mx2 drop-shadow tech-image"
                  src="../../assets/logos/firebase.png"
                  alt="Firebase"
                />
              </template>
              <h4 class="title-font">Firebase</h4>
            </w-tooltip>
          </w-flex>

          <w-flex class="align-end justify-end">
            <Button
              class="title-font mt5"
              xl
              round
              shadow
              outline
              color="white"
              ico="mdi mdi-close"
              :content="textContent.projects.thisSite.cta[language]"
              :action="close"
            />
          </w-flex>
        </w-flex>
      </w-card>
    </w-flex>
  </w-card>
</template>

<style lang="scss" scoped>
.projects-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.205);
}

.tech-image {
  width: 50px;
}

.agilepkr-logo {
  height: 50px;
}
</style>
