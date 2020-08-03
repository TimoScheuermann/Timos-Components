<template>
  <span class="tc-link" :class="'tc-link__' + tccolor_" @click="handleClick">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';

@Component
export default class TCLink extends Mixins(TCComponent, TCURLComponent) {}
</script>

<style lang="scss" scoped>
.tc-link {
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: relative;
  margin: 0 2px;
  text-align: center;

  @each $n, $c in $color_colors {
    &.tc-link__#{$n} {
      color: $c;
    }
  }

  &::after {
    transition: 0.2s ease-in-out;
    background: currentColor;
    position: absolute;
    content: '';
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
