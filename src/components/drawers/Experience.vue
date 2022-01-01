<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store";
import { UnknownObj } from "../../types";
import Button from "../atoms/Button.vue";

function close() {
  store.commit("TOGGLE_DRAWER", { name: "Experience", isOpen: false });
}

const textContent = computed<UnknownObj>(() => {
  return store.state.textContent.drawerExperience;
});

const language = computed<string>(() => {
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
      bg-color="error"
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
    <w-icon class="mt10 white font-shade" size="50">mdi mdi-head-cog</w-icon>
    <h1 class="big-title title-font font-shade white mt3">
      {{ textContent.title[language] }}
    </h1>

    <w-flex wrap class="drawer-content mt5">
      <w-flex class="xs12 md6 align-center justify-center">
        <img
          class="portrait"
          src="../../assets/alp.png"
          alt="Alec Lloyd Probert, portrait."
        />
      </w-flex>
      <w-flex class="xs12 md6 align-center justify-center">
        <p class="white font-shade">
          {{ textContent.intro[language] }}
        </p>
      </w-flex>
      <w-flex class="xs12 md6"></w-flex>
      <w-flex class="timeline-wrapper xs12 md6 align-center justify-center">
        <w-timeline
          class="font-shade"
          color="white"
          :items="textContent.timeline[language]"
        >
        </w-timeline>
      </w-flex>
      <w-flex class="xs12 align-center justify-center">
        <hr class="my10" />
      </w-flex>
      <w-flex class="font-shade white justify-center align-center xs12">
        {{ textContent.painting[language] }}
      </w-flex>
      <w-flex class="justify-center align-center xs12">
        <img
          class="painting my5"
          src="../../assets/voir.png"
          alt="Tableau, Alec Lloyd Probert, 2020, représentant un oeil."
        />
      </w-flex>
      <w-flex class="justify-end align-end my5 mb12">
        <a href="https://graphieros.com" target="_blank">
          <Button
            class="title-font mb12"
            xl
            round
            shadow
            outline
            color="white"
            ico="mdi mdi-eye-plus"
            :content="textContent.button[language]"
            :action="() => null"
          />
        </a>
      </w-flex>
    </w-flex>
  </w-card>
</template>

<style lang="scss" scoped>
img.portrait {
  max-width: 300px;
}

img.painting {
  border-radius: 2px;
  box-shadow: 0 10px 20px -5px black;
  width: 100%;
}

p {
  padding-top: 20px;
}

hr {
  color: white;
  width: 50%;
}

@media screen and (max-width: 600px) {
  img.portrait {
    max-width: 150px;
  }
  .timeline-wrapper {
    margin-top: 20px;
  }
}
</style>
