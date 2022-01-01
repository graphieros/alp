<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store/index";

const props = defineProps<{
  color: string;
  shadow?: boolean;
}>();

const isShadow = computed<string>(() => {
  if (props.shadow) {
    return "0px 10px 10px rgb(50,30,30)";
  } else {
    return "0px 0px 0px transparent";
  }
});

const isChart = computed({
  get() {
    return store.state.isChart;
  },
  set() {
    store.commit("TOGGLE_CHART");
  },
});
</script>

<template>
  <w-checkbox v-model="isChart" color="blue-light2" class="font-shade"
    ><h4 class="title-font">
      {{ isChart ? "playing" : "paused" }}
    </h4></w-checkbox
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
