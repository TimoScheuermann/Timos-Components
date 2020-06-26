<template>
  <!-- // :style="defaultStyle" -->
  <div class="tc-tabbar" :id="uuid_" :class="{ dark: dark_, light: !dark_ }">
    <div class="items">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import TCAutoBackground from "../TC-Auto-Background.mixin";

@Component
export default class TCTabbar extends Mixins(TCAutoBackground) {}
</script>
<style lang="scss" scoped>
.tc-tabbar {
  transition: color 0.1s ease-in-out, background 0.3s ease-in-out;
  // border-top: 1px solid currentColor;

  position: fixed;
  box-shadow: $shadow;
  bottom: 0;
  right: 0;
  left: 0px;
  z-index: 999;
  height: 50px;
  padding: 0 2.5px {
    bottom: env(safe-area-inset-bottom);
  }
  &.dark {
    @include backdrop-blur($color);
    color: #fff;
  }
  &.light {
    @include backdrop-blur($background);
    color: $color;
  }
  .items {
    color: inherit;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
