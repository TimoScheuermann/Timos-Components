<template>
  <div class="tc-badge" :style="styles">
    <div v-if="value || showEmpty" class="tc-badge--badge" :class="badgeClass">
      {{ text }}
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCBadge extends Mixins(TCComponent) {
  @Prop() value!: number | string;
  @Prop() max!: number;
  @Prop({ default: false }) showEmpty!: boolean;
  @Prop({ default: 'corner' }) position!: string;

  get text(): string | number {
    if (typeof +this.value === 'number') {
      if (this.max) {
        if (+this.value > this.max) return this.max + '+';
      }
    }
    return this.value;
  }

  get badgeClass(): Record<string, unknown> {
    return {
      'tc-badge__behind': this.position === 'behind',
      'tc-badge__inside': this.position === 'inside',
      'tc-badge__corner': !['behind', 'inside'].includes(this.position)
    };
  }

  get styles(): string {
    return `--tc-badge__color: ${this.getChosenColor('error')}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-badge {
  position: relative;
  user-select: none;
  display: block;

  .tc-badge--badge {
    position: absolute;
    z-index: 10;
    font-size: 12px;
    color: #fff;
    $scale: 20px;
    height: $scale;
    padding: 0px #{$scale / 3};
    min-width: #{$scale / 3};
    border-radius: $scale;
    line-height: $scale;
    text-align: center;
    &.tc-badge__corner {
      top: #{$scale / 2};
      right: #{$scale / 3 * 2};
      transform: translate(100%, -75%);
    }
    &.tc-badge__behind {
      right: -5px;
      top: 50%;
      transform: translate(100%, -50%);
    }
    &.tc-badge__inside {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
    background: rgba(var(--tc-badge__color), 1);
  }
}
</style>
