<script setup lang="ts">
import { computed } from "vue";
import { molecular } from "../../graphieros/graphieros0.2";

const props = defineProps<{
  sequence: string;
  colors: string;
  size: string;
  strokeWidth: string;
  background?: string;
  border?: string;
  borderRadius?: string;
}>();

const molecule = computed(() => {
  return molecular({
    sequence: props.sequence,
    colors: props.colors,
    size: props.size,
    strokeWidth: Number(props.strokeWidth),
    background: "",
    border: "",
    borderRadius: "",
  });
});
</script>

<template>
  <div v-html="molecule"></div>
</template>

<style lang="scss" scoped></style>
