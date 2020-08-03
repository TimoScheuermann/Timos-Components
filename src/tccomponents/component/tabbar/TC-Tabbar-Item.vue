<template>
  <div class="tc-tabbar-item" :class="classes" @click="handleClick">
    <i :class="'ti-' + icon" />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';

@Component
export default class TCTabbarItem extends Mixins(TCComponent, TCURLComponent) {
  @Prop({ default: 'house', type: String }) icon!: string;
  @Prop({ default: 'Home', type: String }) title!: string;

  get classes() {
    const clazz: Record<string, boolean> = {
      'tc-tabbar-item__active': this.isURLActive
    };
    clazz['tc-tabbar-item__' + this.tccolor_] = true;
    return clazz;
  }
}
</script>

<style lang="scss" scoped>
.tc-tabbar-item {
  flex: 1 1 0px;
  display: flex;
  cursor: pointer;
  user-select: none;
  @media only screen and(max-width: 650px) {
    flex-direction: column;
  }
  @media only screen and(min-width: 651px) {
    margin: 0 15px;
    padding: 8px 0;
    i {
      margin-right: 10px;
    }
  }
  justify-content: center;
  align-items: center;
  color: inherit;
  margin: 0 2.5px;
  i,
  span {
    height: 20px;
    line-height: 20px;
  }
  &.tc-tabbar-item__active {
    @each $n, $c in $color_colors {
      &.tc-tabbar-item__#{$n} {
        color: $c;
      }
    }
  }
}
</style>
