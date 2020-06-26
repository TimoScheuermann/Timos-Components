<template>
  <div class="tc-slider">
    <i v-if="icon_start" id="l" :class="'ti-' + icon_start" />
    <input
      @input="updateVal()"
      type="range"
      :min="min"
      :max="max"
      v-model="data"
    />
    <i v-if="icon_end" id="r" :class="'ti-' + icon_end" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCSlider extends Mixins(TCComponent) {
  @Prop({ default: 0 }) min!: number;
  @Prop({ default: 100 }) max!: number;
  @Prop({ default: 50 }) value!: number;
  @Prop() icon_start!: string;
  @Prop() icon_end!: string;

  public data = this.value;

  public updateVal() {
    this.$emit("input", this.data);
  }
}
</script>
<style lang="scss" scoped>
.tc-slider {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  i {
    color: $primary;
    font-size: 20px;
    &#l {
      margin-right: 5px;
    }
    &#r {
      margin-left: 5px;
    }
  }
  input {
    appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: $paragraph;
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
      background: $primary;
      cursor: grab;
    }
  }
}
</style>
