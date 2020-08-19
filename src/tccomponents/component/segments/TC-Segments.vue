<template>
  <div class="tc-segments" :style="styles" :class="classes">
    <div class="tc-segments--head">
      <div class="tc-segments--head__background" />
      <div
        class="tc-segments--head__item"
        @click="show(i)"
        v-for="(n, i) in segments"
        :key="i"
      >
        {{ n }}
      </div>
    </div>
    <div class="tc-segments--segments">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCSegments extends Mixins(TCComponent) {
  @Prop() value!: number;
  @Prop() highlight!: string;

  public segments: string[] = [];
  public active = this.value || 0;

  @Watch('value')
  valueChanged(): void {
    this.show(this.value);
  }

  mounted() {
    this.init();
    this.$on('recheck', this.init);
    this.show();
  }

  public init(timeout = 0) {
    setTimeout(() => {
      this.segments = this.$children.map(
        (x, i) => x.$props.title || `Segment #${i}`
      );
      if (this.active >= this.segments.length)
        this.show(this.segments.length - 1);
    }, timeout);
  }

  public show(s = this.active) {
    this.active = s;
    this.$children.forEach((x, i) => (x.$data.tcSegmentItemShow = s === i));
    this.$emit('input', this.active);
  }

  get highlighter(): string {
    let c;
    if (this.highlight) c = this.convertToRGB(this.highlight);
    if (c) return c;

    return this.convertToRGB(
      this.getHEX(this.darkmode ? 'color' : 'colorDark')
    );
  }

  get styles(): string {
    return `--tc-segments__amount: ${
      this.segments.length
    };--tc-segments__highlight: ${
      this.highlighter
    };--tc-segments__color: ${this.getChosenColor(
      this.darkmode ? 'colorDark' : 'color'
    )};--tc-segments__background: ${this.getChosenBackground(
      this.darkmode ? 'containerDark' : 'container'
    )};--tc-segments__current: ${this.active}`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-segments__dark': this.dark
    };
  }
}
</script>

<style lang="scss" scoped>
.tc-segments {
  max-width: 100%;
  overflow: hidden;
  .tc-segments--head {
    background: rgba(var(--tc-segments__background), 1);
    padding: 5px;
    border-radius: $border-radius;
    margin-bottom: 10px;
    .tc-segments--head__background {
      position: absolute;
      top: 5px;
      border-radius: inherit;
      height: calc(100% - 10px);
      transition: left 0.4s cubic-bezier(0.87, 1.46, 0.52, 0.75);
      left: calc(
        5px + 100% / var(--tc-segments__amount) * var(--tc-segments__current)
      );
      width: calc((100% / var(--tc-segments__amount)) - 10px);
      background: rgba(var(--tc-segments__highlight), 1);
      z-index: 1;
    }

    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(var(--tc-segments__amount), 1fr);
    .tc-segments--head__item {
      z-index: 2;
      font-weight: 500;
      cursor: pointer;
      padding: 5px;
      text-align: center;
      color: rgba(var(--tc-segments__color), 1);
      border-radius: inherit;
      cursor: pointer;
    }
  }
}
</style>
