<template>
  <div
    class="tc-tooltip"
    onTouchstart="() => { touched = true; }"
    onTouchend="() => { touched = false; }"
    :class="{ toched: touched }"
  >
    <div class="tooltip" :class="'tooltip--' + getPosition()">
      <div class="tooltip--content">Oh hey, whats up</div>
      <div class="arrow"></div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class TCTooltip extends Vue {
  @Prop() position!: string;

  touched = false;

  getPosition(): string {
    return ['top', 'bottom', 'left', 'right'].includes(this.position)
      ? this.position
      : 'top';
  }
}
</script>
<style lang="scss" scoped>
@import '../../variables';
.tc-tooltip {
  position: relative;

  @keyframes anim {
    from {
      opacity: 0;
      letter-spacing: -10px;
    }
    to {
    }
  }

  &:hover,
  &.touched {
    .tooltip {
      visibility: visible;
      animation: anim 0.3s ease-in-out 0.3s both;
    }
  }

  .tooltip {
    visibility: hidden;
    z-index: 10;
    position: absolute;

    &.tooltip--top {
      left: 50%;
      transform: translate(-50%, calc(-100% - 10px));
      .arrow {
        left: 50%;
        bottom: -8px;
        transform: translateX(-50%);
      }
    }
    &.tooltip--bottom {
      left: 50%;
      bottom: 0;
      transform: translate(-50%, calc(100% + 10px));
      .arrow {
        left: 50%;
        top: -8px;
        transform: translateX(-50%) rotate(180deg);
      }
    }
    &.tooltip--right {
      right: 0;
      top: 50%;
      transform: translate(calc(100% + 8px), -50%);
      .arrow {
        top: 50%;
        left: -11px;
        transform: translateY(-50%) rotate(90deg);
      }
    }
    &.tooltip--left {
      left: 0;
      top: 50%;
      transform: translate(calc(-100% - 8px), -50%);
      .arrow {
        top: 50%;
        right: -11px;
        transform: translateY(-50%) rotate(-90deg);
      }
    }

    .arrow {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid $primary;
      position: absolute;
    }
    .tooltip--content {
      background: $primary;
      width: fit-content;
      padding: 0 12px;
      height: 24px;
      line-height: 24px;
      border-radius: $border-radius;
      color: #fff;
    }
  }
  .content {
  }
}
</style>
