<template>
  <span
    class="tc-link"
    :class="'tc-link__' + tccolor_"
    @click="clicked($event)"
  >
    <slot />
  </span>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCLink extends Mixins(TCComponent) {
  @Prop() to!: any;
  @Prop() href!: string;

  public clicked(event: any): void {
    if (this.to) {
      this.$router.push(this.to);
    } else if (this.href) {
      window.open(this.href, "_blank");
    }
    this.$emit("click", event);
  }
}
</script>
<style lang="scss" scoped>
.tc-link {
  color: $primary;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: relative;
  margin: 0 2px;
  text-align: center;

  @each $n, $c in $color_colors {
    &.tc-link__#{$n}::after {
      background: $c;
    }
  }

  &::after {
    transition: 0.2s ease-in-out;
    position: absolute;
    content: "";
    bottom: 0;
    width: 0%;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
}
</style>
