<template>
  <div class="tc-tooltip">
    <div class="tooltip" :class="'tooltip--' + getPosition()">
      <div class="tooltip--content">{{ tooltip }}</div>
      <div class="arrow"></div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCTooltip extends Mixins(TCComponent) {
  @Prop({ default: "top" }) position!: string;
  @Prop({ default: "Tooltip" }) tooltip!: string;

  getPosition(): string {
    return ["top", "bottom", "left", "right"].includes(this.position)
      ? this.position
      : "top";
  }
}
</script>
<style lang="scss" scoped>
.tc-tooltip {
  cursor: help;
  position: relative;
  display: inline-block;

  @keyframes anim {
    from {
      opacity: 0;
      letter-spacing: -10px;
    }
    to {
    }
  }

  &:hover {
    .tooltip {
      visibility: visible;
      animation: anim 0.3s ease-in-out 0.3s both;
    }
  }

  .tooltip {
    visibility: hidden;
    z-index: 10;
    position: absolute;
    // white-space: nowrap;

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
      // width: fit-content;
      width: max-content;
      max-width: 300px;

      padding: 1px 12px {
        bottom: 3px;
      }
      text-align: center;
      min-height: 20px;
      font-size: 18px;
      line-height: 20px;
      border-radius: $border-radius;
      color: #fff;
    }
  }
  .content {
  }
}
</style>
