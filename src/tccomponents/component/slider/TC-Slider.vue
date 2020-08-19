<template>
  <div class="tc-slider" :style="styles">
    <tf-icon v-if="iconStart" :icon="iconStart" />
    <input
      @input="updateVal()"
      type="range"
      :min="min"
      :max="max"
      v-model="data"
    />
    <tf-icon v-if="iconEnd" :icon="iconEnd" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCSlider extends Mixins(TCComponent) {
  @Prop({ default: 0 }) min!: number;
  @Prop({ default: 100 }) max!: number;
  @Prop({ default: 50 }) value!: number;
  @Prop() iconStart!: string;
  @Prop() iconEnd!: string;

  public data = this.value;

  @Watch('value')
  valueChanged(): void {
    this.data = this.value;
  }

  public updateVal(): void {
    this.$emit('input', this.data);
  }

  get styles(): string {
    return `--tc-slider__color: ${this.getChosenColor()};--tc-slider__background: ${this.getChosenBackground(
      this.darkmode ? 'containerDark' : 'container'
    )}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-slider {
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .tf-icon {
    color: rgba(var(--tc-slider__color), 1);
    font-size: 20px;
    &:nth-child(1) {
      margin-right: 10px;
    }
    &:nth-child(2),
    &:nth-child(3) {
      margin-left: 10px;
    }
    opacity: 0.75;
  }
  input {
    appearance: none;
    width: 100%;
    max-width: 100%;
    height: 5px;
    border-radius: 5px;
    background: rgba(var(--tc-slider__background), 1);
    outline: none;
    transition: opacity 0.2s;
    &::-webkit-slider-thumb {
      $size: 21px;
      border: none;
      -webkit-appearance: none;
      appearance: none;
      width: $size;
      border-radius: $size;
      height: $size;
      background: rgba(var(--tc-slider__color), 1);
      cursor: grab;
    }
  }
}
</style>
