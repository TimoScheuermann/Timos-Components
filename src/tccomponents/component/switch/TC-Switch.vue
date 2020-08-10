<template>
  <div class="tc-switch" :style="styles" :class="classes">
    <input @input="updateVal()" type="checkbox" :id="id" v-model="toggled" />
    <label :for="id">
      <div class="container">
        <div class="ball"></div>
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCSwitch extends Mixins(TCComponent) {
  @Prop({ default: false }) value!: boolean;

  get id(): string {
    return 'tc-switch_' + this.uuid_;
  }
  public toggled = this.value;

  @Watch('value')
  public changed(): void {
    this.toggled = this.value;
  }

  updateVal(): void {
    this.$emit('input', !this.toggled);
  }

  get classes(): Record<string, unknown> {
    return { 'tc-switch__dark': this.dark };
  }

  get styles(): string {
    return `--tc-switch__color: ${this.getChosenColor()}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-switch {
  user-select: none;
  $ballSize: 21;

  display: inline-block;
  margin: 3px;
  input {
    display: none;
  }
  input:checked + label {
    .container {
      background: rgba(var(--tc-switch__color), 1);
      .ball {
        transform: translate(calc(50% + #{$ballSize / 2 + 2}px), -50%);
      }
    }
  }
  &.tc-switch__dark label .container {
    background: $container_dark;
  }
  label {
    cursor: pointer;
    .container {
      width: #{$ballSize * 2 + 4}px;
      height: #{$ballSize + 4}px;
      border-radius: #{$ballSize + 4}px;
      background: $container;
      position: relative;
      transition: 0.2s ease-in;

      .ball {
        position: absolute;
        transition: 0.2s cubic-bezier(0.73, 1.64, 0.35, 0.65);
        left: 0;
        top: 50%;
        height: #{$ballSize}px;
        width: #{$ballSize}px;
        border-radius: inherit;
        background: #fff;
        transform: translate(calc(50% - #{$ballSize / 2 - 2}px), -50%);
      }
    }
  }
}
</style>
