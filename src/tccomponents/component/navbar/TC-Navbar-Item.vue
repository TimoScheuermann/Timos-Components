<template>
  <div class="tc-navbar-item" :class="classes" @click="handleClick">
    <tl-flow>
      <div class="tc-navbar-item--icon">
        <i v-if="icon" :class="'ti-' + icon"></i>
      </div>
      <div class="tc-navbar-item--name">{{ name }}</div>
    </tl-flow>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';

@Component({
  components: {
    'tl-flow': TLFlow
  }
})
export default class TCNavbarItem extends Mixins(TCComponent, TCURLComponent) {
  @Prop() name!: string;
  @Prop() icon!: string;

  get classes() {
    const clazz: Record<string, boolean> = {
      'tc-navbar-item__active': this.isURLActive
    };
    clazz['tc-navbar-item__' + this.tccolor_] = true;
    return clazz;
  }
}
</script>

<style lang="scss" scoped>
.tc-navbar-item {
  color: inherit;
  cursor: pointer;
  position: relative;
  opacity: 0.5;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 0%;
    bottom: -1px;
    border-radius: 2px;
    height: 2px;
    background: currentColor;
    transition: width 0.2s ease-in-out;
  }
  &:hover {
    opacity: 1;
  }
  &.tc-navbar-item__active {
    opacity: 1;
    @each $n, $c in $color_colors {
      &.tc-navbar-item__#{$n} {
        color: $c;
        &::before {
          width: 100%;
        }
      }
    }
  }

  .tl-flow {
    height: 50px;
    margin: 0 10px;

    .tc-navbar-item--icon,
    .tc-navbar-item--name {
      margin: 0 3px;
    }
  }
}
</style>
