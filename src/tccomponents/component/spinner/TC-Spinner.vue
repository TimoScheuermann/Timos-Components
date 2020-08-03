<template>
  <div
    class="tc-spinner"
    :class="classes"
    :style="'--size: ' + size + 'px;--color:' + color"
  >
    <div
      class="tc-spinner--element"
      v-for="(a, i) in Array(10)"
      :key="'spinner-element_' + i"
    >
      <div class="indicator" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCSpinner extends mixins(TCComponent) {
  @Prop({ default: 'bars' }) variant!: string;
  @Prop({ default: 50 }) size!: number;
  @Prop() color!: string;
  @Prop() dark!: boolean;

  get classes(): Record<string, unknown> {
    const classes: Record<string, unknown> = {};
    classes['tc-spinner__' + this.variant] = true;
    classes['tc-spinner__dark'] = this.dark;
    return classes;
  }
}
</script>

<style lang="scss" scoped>
.tc-spinner {
  position: relative;

  width: var(--size);
  height: var(--size);
  &.tc-spinner__dark {
    color: #fff;
  }
  color: var(--color);

  &.tc-spinner__dots-wave {
    .tc-spinner--element {
      position: absolute;
      top: 50%;
      left: 50%;
      .indicator {
        background: currentColor;
        border-radius: 20px;
        width: calc(8 / 50 * var(--size));
        height: calc(8 / 50 * var(--size));
      }
      display: none;

      &:nth-child(1) {
        left: 8px;
      }
      &:nth-child(2) {
        left: 50%;
      }
      &:nth-child(3) {
        left: calc(100% - 8px);
      }

      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          display: block;
          transform: translate(-50%, -50%);
          .indicator {
            animation: dots-linear
              1s
              ease-in-out
              #{-1 +
              1 /
              $i}s
              infinite
              alternate-reverse
              both;
          }
        }
      }
    }
  }
  &.tc-spinner__dots-breath,
  &.tc-spinner__dots-spin,
  &.tc-spinner__dots,
  &.tc-spinner__bars-breath,
  &.tc-spinner__bars {
    .tc-spinner--element {
      position: absolute;
      top: 50%;
      left: 50%;
      .indicator {
        background: currentColor;
        border-radius: calc(20 / 50 * var(--size));

        width: calc(8 / 50 * var(--size));
        height: calc(8 / 50 * var(--size));
      }
      animation: opacity 1s ease-in-out 0s infinite both;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          transform: translate(-50%, -50%)
            rotate(#{36 * $i}deg)
            translateY(calc(20 / 50 * var(--size)));
          animation-delay: #{-1 + 0.1 * $i}s;
        }
      }
    }
  }
  &.tc-spinner__bars .tc-spinner--element .indicator {
    width: calc(5 / 50 * var(--size));
    height: calc(15 / 50 * var(--size));
  }
  &.tc-spinner__bars-breath .tc-spinner--element {
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: #{-1 + 0.1 * $i}s;
      }
    }
    .indicator {
      width: calc(5 / 50 * var(--size));
      height: calc(15 / 50 * var(--size));
      animation: bar-breath 1s ease-in-out 0s infinite both;
      animation-delay: inherit;
    }
  }
  &.tc-spinner__dots-breath .tc-spinner--element {
    animation-name: unset;
    .indicator {
      animation: breath 1s ease-in-out 0s infinite both;
      animation-delay: inherit;
    }
  }
  &.tc-spinner__dots-spin .tc-spinner--element {
    animation-name: dots-spin;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:nth-child(ODD) {
      display: none;
    }
    .indicator {
      // animation: breath 1s ease-in-out 0s infinite both;
      animation-delay: inherit;
    }
  }
}
@keyframes opacity {
  0%,
  100% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
}
@keyframes breath {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.5);
  }
}
@keyframes bar-breath {
  0%,
  100% {
    height: calc(15 / 50 * var(--size));
  }
  50% {
    height: calc(10 / 50 * var(--size));
  }
}
@keyframes dots-linear {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(10px) scale(0.8);
  }
  100% {
    transform: translateY(-10px) scale(0.8);
  }
}
@keyframes dots-spin {
  0% {
    transform: translate(-50%, -50%) rotate(-180deg)
      translateY(calc(20 / 50 * var(--size)));
  }
  100% {
    transform: translate(-50%, -50%) rotate(180deg)
      translateY(calc(20 / 50 * var(--size)));
  }
}
</style>
