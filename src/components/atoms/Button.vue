<script setup lang="ts">
const props = defineProps<{
  action: () => void;
  bgColor?: string;
  color?: string;
  content: string;
  disabled?: boolean;
  ico?: string;
  lg?: boolean;
  md?: boolean;
  outline?: boolean;
  round?: boolean;
  shadow?: boolean;
  sm?: boolean;
  xl?: boolean;
  xs?: boolean;
}>();
</script>

<template>
  <w-button
    :bg-color="props.bgColor"
    :class="props.shadow ? 'shadow' : ''"
    :color="props.color"
    :disabled="props.disabled"
    :lg="props.lg"
    :md="props.md"
    :outline="props.outline"
    :round="props.round"
    :sm="props.sm"
    :xl="props.xl"
    :xs="props.xs"
    @click="props.action()"
  >
    <w-icon v-if="ico" class="mr2">{{ ico }}</w-icon>
    <h4>{{ content }}</h4>
  </w-button>
</template>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0px 10px 10px rgb(50, 30, 30);
}
</style>
