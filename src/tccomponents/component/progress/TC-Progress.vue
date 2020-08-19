<template>
  <div class="tc-progress" :style="styles" :class="classes">
    <template v-if="type === 'bar'">
      <div class="tc-progress--background" />
      <div class="tc-progress--bar" />
    </template>
    <template v-else>
      <svg>
        <circle :cx="ringSize / 2" :cy="ringSize / 2" :r="radius" />
        <circle
          :style="{
            'stroke-dasharray': dasharray,
            'stroke-dashoffset': dashoffset
          }"
          :cx="ringSize / 2"
          :cy="ringSize / 2"
          :r="radius"
        />
      </svg>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCProgress extends Mixins(TCComponent) {
  @Prop({ default: 0 }) percent!: number;
  @Prop({ default: 4 }) barHeight!: number;
  @Prop({ default: 'bar' }) type!: string;
  @Prop({ default: 70 }) ringSize!: number;
  @Prop({ default: 8 }) ringWidth!: number;

  get circumference(): number {
    return this.radius * 2 * Math.PI;
  }

  get radius(): number {
    return (this.ringSize - this.ringWidth) / 2;
  }

  get dashoffset(): number {
    return this.circumference - (this.percent / 100) * this.circumference;
  }

  get dasharray(): string {
    return `${this.circumference} ${this.circumference}`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-progress__ring': this.type !== 'bar',
      'tc-progress__bar': this.type === 'bar'
    };
  }

  get styles(): string {
    const defaultStyle = `--tc-progress__color: ${this.getChosenColor()}; --tc-progress__background: ${this.getChosenBackground(
      this.darkmode ? 'containerDark' : 'container'
    )};`;
    if (this.type === 'bar') {
      return (
        defaultStyle +
        `--tc-progress__bar-height: ${this.barHeight}px; --tc-progress__percent: ${this.percent}%;`
      );
    }
    return (
      defaultStyle +
      `--tc-progress__ring-width: ${this.ringWidth}px; --tc-progress__ring-size: ${this.ringSize}px;`
    );
  }
}
</script>

<style lang="scss" scoped>
.tc-progress {
  &.tc-progress__ring {
    svg {
      transform: rotate(-90deg);
      width: var(--tc-progress__ring-size);
      height: var(--tc-progress__ring-size);

      circle {
        fill: none;

        stroke: rgba(var(--tc-progress__background), 1) {
          linecap: round;
          linejoin: round;
          width: var(--tc-progress__ring-width);
        }

        transition: 0.2s ease-in-out;
        &:nth-child(2) {
          stroke: rgba(var(--tc-progress__color), 1);
        }
      }
    }
  }

  &.tc-progress__bar {
    border-radius: var(--tc-progress__bar-height);
    margin: 5px 0;
    position: relative;
    height: var(--tc-progress__bar-height);

    .tc-progress--background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(var(--tc-progress__background), 1);
      z-index: -1;
      border-radius: inherit;
    }

    .tc-progress--bar {
      transition: 0.2s ease-in-out;
      background: rgba(var(--tc-progress__color), 1);
      width: var(--tc-progress__percent);
      border-radius: inherit;
      height: inherit;
    }
  }
}
</style>
