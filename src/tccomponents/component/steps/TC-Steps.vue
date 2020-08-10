<template>
  <div class="tc-steps" :class="classes" :style="styles">
    <div class="tc-steps--progress" />
    <div class="tc-steps--items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
@Component
export default class TCSteps2 extends Mixins(TCComponent) {
  @Prop() current!: number;
  @Prop({ default: 'row' }) direction!: string;

  get totalSteps(): number {
    const slot = this.$slots.default;
    if (!slot) return 0;
    else return slot.length;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-steps__column': this.direction.toLowerCase() === 'column',
      'tc-steps__row': this.direction.toLowerCase() !== 'column'
    };
  }

  get styles(): string {
    return `--tc-steps__progress: ${Math.min(
      Math.round((this.current / (this.totalSteps - 1)) * 10000 + 10) / 100,
      100
    )}%;--tc-steps__total: ${this.totalSteps}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-steps {
  user-select: none;
  margin: 10px 0;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  z-index: 1;

  .tc-steps--progress {
    position: absolute;
    z-index: 1;
    transition: all 1s ease-in-out;
    background: $success;
  }

  &.tc-steps__column .tc-steps--progress {
    left: 17.5px;
    top: 10px;
    height: calc(var(--tc-steps__progress) - 20px);
    transform: translateX(-50%);
    width: 3px;
  }
  .tc-steps--items {
    z-index: 2;
    position: relative;
  }

  &.tc-steps__row .tc-steps--items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    .tc-step-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  &.tc-steps__column .tc-steps--items {
    display: grid;
    grid-template-columns: auto;
    .tc-step-item {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 20px;
    }
  }
}
</style>
