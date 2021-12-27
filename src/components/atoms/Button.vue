<script setup lang="ts">
const props = defineProps<{
  action: () => void;
  bgColor?: string;
  color?: string;
  content: string;
  lg?: boolean;
  md?: boolean;
  shadow?: boolean;
  sm?: boolean;
  xl?: boolean;
  xs?: boolean;
  round?: boolean;
  outline?: boolean;
  ico?: string;
}>();
</script>

<template>
  <w-button
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
    :outline="outline"
    :round="round"
    :bg-color="bgColor"
    :color="color"
    @click="action()"
    :class="shadow ? 'shadow' : ''"
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
