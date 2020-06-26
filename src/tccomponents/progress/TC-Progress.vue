<template>
  <div
    class="tc-progress tc-progress__bar"
    v-if="type != 'ring'"
    :style="{ height: barHeight + 'px' }"
  >
    <div class="tc-progress--background" :style="{ background: color }"></div>
    <div
      class="tc-progress--bar"
      :style="{ width: percent + '%', background: color }"
    ></div>
  </div>
  <div v-else class="tc-progress tc-progress__ring">
    <svg
      :width="ringSize"
      :height="ringSize"
      :viewBox="'0 0 ' + ringSize + ' ' + ringSize + ''"
    >
      <circle
        class="tc-progress--background"
        :style="{ 'stroke-width': ringWidth + 'px' }"
        :cx="ringSize / 2"
        :cy="ringSize / 2"
        :r="radius"
      />
      <circle
        :style="{
          'stroke-width': ringWidth + 'px',
          'stroke-dasharray': dasharray,
          'stroke-dashoffset': dashoffset,
          stroke: color
        }"
        :cx="ringSize / 2"
        :cy="ringSize / 2"
        :r="radius"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCProgress extends Mixins(TCComponent) {
  @Prop({ default: 0 }) percent!: number;
  @Prop({ default: 4 }) barHeight!: number;
  @Prop({ default: "bar" }) type!: string;
  @Prop({ default: 70 }) ringSize!: number;
  @Prop({ default: 8 }) ringWidth!: number;

  getCircumference(): number {
    return this.radius * 2 * Math.PI;
  }

  get radius(): number {
    return (this.ringSize - this.ringWidth) / 2;
  }

  get dashoffset(): number {
    return (
      this.getCircumference() - (this.percent / 100) * this.getCircumference()
    );
  }

  get dasharray(): string {
    return `${this.getCircumference()} ${this.getCircumference()}`;
  }
}
</script>
<style lang="scss" scoped>
.tc-progress {
  &.tc-progress__ring {
    svg {
      transform: rotate(-90deg);
      circle {
        fill: none;
        stroke: $primary;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: 0.2s ease-in-out;
        &.tc-progress--background {
          stroke: $paragraph;
        }
      }
    }
  }

  &.tc-progress__bar {
    border-radius: 10px;
    margin: 5px 0;
    position: relative;
    .tc-progress--background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      filter: brightness(50%);
      z-index: -1;
    }
    .tc-progress--bar,
    .tc-progress--background {
      transition: 0.2s ease-in-out;
      background: $primary;
      border-radius: inherit;
      height: inherit;
    }
  }
}
</style>
