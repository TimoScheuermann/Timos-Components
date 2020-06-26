<template>
  <div class="tc-sidebar" :style="styles" :class="{ dark: dark }">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="spacer"></div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCSidebar extends Mixins(TCComponent) {
  get styles() {
    return {
      color: this.color,
      background: this.background
    };
  }
}
</script>
<style lang="scss" scoped>
.tc-sidebar {
  background: $background;
  color: $color;
  box-shadow: $shadow;
  &.dark {
    background: $color;
    color: #fff;
  }
  user-select: none;
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow: hidden;

  max-width: 35px;
  min-width: 45px;
  border: {
    bottom-right-radius: #{2 * $border-radius};
    top-right-radius: #{2 * $border-radius};
  }

  transition: min-width 0.2s ease-out;
  &:hover {
    transition: min-width 0.4s cubic-bezier(0.87, 1.46, 0.52, 0.75);
    box-shadow: $shadow-hover;
    min-width: 200px;
    .content {
      /deep/ .tc-sidebar--group {
        .tc-sidebar--items.expanded {
          padding-left: 14px;
        }
      }
    }
  }
  // min-width: 200px;
  .content {
    padding-left: 10px;
    overflow: {
      x: hidden;
      y: auto;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .spacer {
    flex-grow: 1 !important;
  }
}
</style>
