<template>
  <div class="tc-hero" :style="styles">
    <div class="tc-hero--background">
      <slot name="background" />
    </div>
    <div
      class="tc-hero--hero"
      :class="{ 'tc-hero--hero__fixedHeader': hasFixedHeader }"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCHero extends Mixins(TCComponent) {
  @Prop({ default: 200 }) height!: string | number;
  @Prop({ default: 'px' }) unit!: string;
  @Prop({ default: true }) hasFixedHeader!: boolean;
  @Prop() gradient!: string;

  get styles(): string {
    let stylez = `--tc-hero__background: ${this.getChosenBackground(
      this.darkmode ? 'containerDark' : 'container'
    )};--tc-hero__color: ${this.getChosenColor(
      this.darkmode ? 'colorDark' : 'color'
    )};--tc-hero__height: calc(${+this.height}${this.unit} + ${
      this.hasFixedHeader ? 50 : 0
    }px);`;

    if (this.gradient) {
      stylez += `--tc-hero__background-image: ${this.gradient}`;
    }

    return stylez;
  }
}
</script>

<style lang="scss" scoped>
.tc-hero {
  user-select: none;
  position: relative;
  max-width: 100vw;
  overflow: hidden;

  background: rgba(var(--tc-hero__background), 1);
  background-image: var(--tc-hero__background-image);
  color: rgba(var(--tc-hero__color), 1);
  height: var(--tc-hero__height);

  .tc-hero--background {
    height: inherit;
    img,
    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .tc-hero--hero {
    &.tc-hero--hero__fixedHeader {
      margin-top: calc((50px + env(safe-area-inset-top)) / 2);
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    max-width: 90vw;
  }
}
</style>
