<script setup lang="ts">
import { ref, computed } from "vue";
import functions from "../../functions/index";
import { store } from "../../store";
import { ChartDataSet, Line, Plot, UnknownObj } from "../../types";

const props = defineProps<{
  fixed: boolean;
}>();

const isChart = computed(() => {
  return store.state.isChart;
});

const time = ref();
const height = 300;
const speed = 120;

const dataSets = ref<ChartDataSet>({
  level0: [],
  level1: [],
  level2: [],
});

const slicer = 500;

const plotsLevel1 = computed(() => {
  return dataSets.value.level1.map((valueY: number, i: number) => {
    return {
      x: i,
      y: valueY,
    } as Plot;
  }) as Plot[];
});

const plotsLevel2 = computed(() => {
  return dataSets.value.level2.map((valueY: number, i: number) => {
    return {
      x: i,
      y: valueY,
    } as Plot;
  }) as Plot[];
});

const linesLevel1 = computed(() => {
  return plotsLevel1.value.map((plot: Plot, i: number) => {
    return {
      x1: plot.x,
      y1: plot.y,
      x2: plotsLevel1.value[i + 1]?.x ? plotsLevel1.value[i + 1].x : plot.x,
      y2: plotsLevel1.value[i + 1]?.y ? plotsLevel1.value[i + 1].y : plot.y,
    } as Line;
  }) as Line[];
});

const linesLevel2 = computed(() => {
  return plotsLevel2.value.map((plot: Plot, i: number) => {
    return {
      x1: plot.x,
      y1: plot.y,
      x2: plotsLevel2.value[i + 1]?.x ? plotsLevel2.value[i + 1].x : plot.x,
      y2: plotsLevel2.value[i + 1]?.y ? plotsLevel2.value[i + 1].y : plot.y,
    } as Line;
  }) as Line[];
});

function crypt(num: number): string {
  return (num >>> 0).toString(2);
}

function loop(): void {
  if (isChart.value) {
    const randLevel0 = Math.random() * height;
    dataSets.value.level0.push(randLevel0);

    const averageLevel0 = functions.average(
      functions.sum(dataSets.value.level0.slice(-20)),
      20
    );
    dataSets.value.level1.push(averageLevel0);

    const averageLevel1 = functions.average(
      functions.sum(dataSets.value.level1.slice(-20)),
      20
    );
    dataSets.value.level2.push(averageLevel1);

    if (dataSets.value.level0.length > 10) {
      dataSets.value.level0 = [...dataSets.value.level0.slice(-slicer)];
    }

    if (dataSets.value.level1.length > 10) {
      dataSets.value.level1 = [...dataSets.value.level1.slice(-slicer)];
    }

    if (dataSets.value.level2.length > 10) {
      dataSets.value.level2 = [...dataSets.value.level2.slice(-slicer)];
    }
  }

  clearTimeout(time.value);
  time.value = setTimeout(loop, speed);
}

loop();

const isFixed = computed(() => {
  if (props.fixed) {
    return "fixed";
  }
  return "";
});
</script>

<template>
  <svg viewBox="0 0 500 250">
    <g v-for="(line1, i) in linesLevel1" :key="`line1_${i}`">
      <line
        class="average1"
        :x1="line1.x1"
        :y1="line1.y1"
        :x2="line1.x2"
        :y2="line1.y2"
      />
    </g>
    <g v-for="(line2, i) in linesLevel2" :key="`line2_${i}`">
      <line
        class="average2"
        :x1="line2.x1"
        :y1="line2.y1"
        :x2="line2.x2"
        :y2="line2.y2"
      />
    </g>
    <circle
      r="2"
      class="circle-average"
      :cx="linesLevel2[Math.floor(linesLevel2.length / 2)]?.x2 || 0"
      :cy="linesLevel2[Math.floor(linesLevel2.length / 2)]?.y2 || 0"
    />
    <text
      :x="linesLevel2[Math.floor(linesLevel2.length / 2)]?.x2 - 23 || 0"
      :y="linesLevel2[Math.floor(linesLevel2.length / 2)]?.y2 + 20 || 0"
      font-size="0.7em"
    >
      {{
        crypt(
          Math.floor(linesLevel2[Math.floor(linesLevel2.length / 2)]?.y2 || 0)
        )
      }}
    </text>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  height: 100%;
  left: 0;
  position: v-bind(isFixed);
  top: 0;
  width: 100%;
  z-index: -1;
}
line {
  stroke-width: 1;
  stroke: rgba(243, 170, 33, 0.048);
}
.average1 {
  stroke-width: 1px;
  stroke: rgba(83, 119, 197, 0.301);
}
.average2 {
  stroke-width: 2px;
  stroke: rgba(201, 168, 156, 0.349);
}
text {
  fill: rgb(190, 148, 138);
  font-family: "Courier New", Courier, monospace;
}
.circle-average {
  fill: rgb(190, 148, 138);
}
</style>
