<template>
  <i
    v-if="icon && !isURL"
    class="tf-icon tf-icon__icon"
    :class="'ti-' + icon"
  />
  <span v-else-if="icon && isURL" :id="uuid_" class="tf-icon tf-icon__image">
    <img :src="icon" :style="style" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import { isURL } from '@/helper';
import TCComponent from '../../TC-Component.mixin';
import { Solver, Color } from './colorSolver';

@Component
export default class TFIcon extends Mixins(TCComponent) {
  @Prop() icon!: string;

  public style = '';

  get isURL(): boolean {
    return isURL(this.icon);
  }

  get element(): HTMLElement | null {
    return document.getElementById(this.uuid_);
  }

  @Watch('icon')
  @Watch('element')
  elementChanged(): void {
    const elem: HTMLElement | null = this.element;
    if (elem) {
      const color = window.getComputedStyle(elem).getPropertyValue('color');
      const rgb = color
        .replace('rgb(', '')
        .replace(')', '')
        .split(',');

      const solver = new Solver(new Color(+rgb[0], +rgb[1], +rgb[2]));
      try {
        const result = solver.solve();
        this.style = result.filter;
      } catch (error) {
        console.log('Error while generateing filter');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  width: 1em;
  height: 1em;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
