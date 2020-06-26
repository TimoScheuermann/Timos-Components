<template>
  <router-link tc-flex :to="to" class="tc-navbar-item">
    <div class="tc-navbar-item--icon">
      <i v-if="icon" :class="'ti-' + icon"></i>
    </div>
    <div class="tc-navbar-item--name">{{ name }}</div>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCNavbarItem extends Mixins(TCComponent) {
  @Prop({ default: "_blank" }) to!: string | object;
  @Prop() name!: string;
  @Prop() icon!: string;
}
</script>
<style lang="scss" scoped>
.tc-navbar-item {
  color: inherit;
  display: block;
  margin: 0 10px;
  height: 48px;
  border-bottom: 2px solid transparent;
  opacity: 0.5;
  position: relative;

  &,
  &::after {
    transition: 0.2s ease-in-out;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: -3px;
    height: 1px;
    left: 0;
    right: 0;
    opacity: 0;
  }

  &:hover {
    opacity: 1;
    &::after {
      background: currentColor;
      opacity: 0.2;
    }
  }

  &.router-link-exact-active {
    color: $primary;
    opacity: 1;
    &::after {
      background: $primary;
      opacity: 1;
    }
  }
  .tc-navbar-item--icon,
  .tc-navbar-item--name {
    margin: 0 3px;
  }
}
</style>
