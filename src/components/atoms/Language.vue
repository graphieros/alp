<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store/index";
import { UnknownObj } from "../../types/index";

const props = defineProps<{
  color: string;
  shadow?: boolean;
}>();

const isShadow = computed(() => {
  if (props.shadow) {
    return "0px 10px 10px rgb(50,30,30)";
  } else {
    return "0px 0px 0px transparent";
  }
});

const language = computed(() => {
  return store.state.language;
});

const isFrench = computed({
  get() {
    return store.state.isFrench;
  },
  set() {
    store.commit("TOGGLE_LANGUAGE");
  },
});
</script>

<template>
  <span
    ><h6 :class="!isFrench ? 'selected' : ''">
      {{ language.options.en }}
    </h6></span
  >
  <w-switch :color="color" v-model="isFrench" class="mx2 toggle"></w-switch>
  <span
    ><h6 :class="isFrench ? 'selected' : ''">
      {{ language.options.fr }}
    </h6></span
  >
</template>

<style lang="scss" scoped>
.toggle {
  border-radius: 100%;
  box-shadow: v-bind(isShadow);
}
.selected {
  text-decoration: underline;
}
</style>
