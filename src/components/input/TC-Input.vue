<template>
  <div class="tc-input">
    <div v-if="title" class="tc-input--title">
      {{ title }}
    </div>
    <div
      class="tc-input--container"
      :class="{
        'tc-input__buttons': buttonsVisible(),
        'tc-input__icon': icon,
        'tc-input__disabled': disabled,
      }"
    >
      <div
        class="tc-input--button"
        @click="changeVal(-1)"
        v-if="buttonsVisible()"
      >
        <i class="ti ti-minus" />
      </div>
      <div class="tc-input--icon" v-if="icon">
        <i class="ti" :class="'ti-' + icon" />
      </div>
      <div class="tc-input--input">
        <input
          v-model="innerValue"
          :type="type || 'text'"
          :id="'tc-input_' + uuid"
          :inputmode="inputMode()"
          :style="style"
          :placeholder="placeholder"
          :pattern="inputPattern()"
          :accept="accept"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :disabled="disabled"
          :form="form"
          :max="max"
          :maxlength="maxlength"
          :min="min"
          :minlength="minlength"
          :readonly="readonly"
          :required="required"
          :step="step"
          @input="update()"
        />
      </div>
      <div
        class="tc-input--button"
        @click="changeVal(1)"
        v-if="buttonsVisible()"
      >
        <i class="ti ti-plus" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class TCInputNew extends Vue {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() buttons!: boolean;
  @Prop() placeholder!: string;
  @Prop() type!: string;
  @Prop() value!: any;
  @Prop() accept!: string;
  @Prop() autocomplete!: 'on' | 'off';
  @Prop() autofocus!: boolean;
  @Prop() disabled!: boolean;
  @Prop() form!: string;
  @Prop() max!: number | string;
  @Prop() maxlength!: number;
  @Prop() min!: number | string;
  @Prop() minlength!: number;
  @Prop() pattern!: string;
  @Prop() readonly!: boolean;
  @Prop() required!: boolean;
  @Prop({ default: 1 }) step!: number;

  innerValue: any = this.value || this.type === 'number' ? 0 : '';

  inputMode(): string {
    return this.type == 'number' ? 'numeric' : '';
  }
  inputPattern(): string {
    if (this.pattern) return this.pattern;
    return this.type == 'number' ? '[0-9]*' : '';
  }
  buttonsVisible(): boolean {
    return this.buttons && this.type === 'number';
  }

  get style(): any {
    return {
      background: this.type === 'color' ? this.innerValue : undefined,
    };
  }

  changeVal(amount: number): void {
    this.innerValue = +this.innerValue + +amount * +this.step;
    this.update();
  }

  update() {
    this.$emit('input', this.innerValue);
  }
}
</script>
<style lang="scss" scoped>
@import '../../variables';
@import '../tc-container';
$size: 30px;
.tc-input {
  display: inline-block;
  max-width: 100%;
  margin: 3px;

  .tc-input--title {
    text-align: left;
    font-weight: bold;
    opacity: 0.8;
    margin-bottom: 3px;
  }

  .tc-input--container {
    display: inline-grid;
    grid-template-rows: $size;
    background: $paragraph;
    transition: 0.2s ease-in-out;

    border: 1px solid rgba($color, 0.01) {
      radius: $border-radius;
    }
    &:not(.tc-input__disabled):hover {
      border-color: rgba($color, 0.4);
    }

    justify-content: center; // iOS Purpose
    align-items: center; // iOS Purpose
    width: 250px;
    max-width: 100%;
    grid-template-columns: 1fr;
    overflow: hidden;
    &.tc-input__disabled {
      opacity: 0.7;
    }
    &.tc-input__buttons {
      grid-template-columns: $size 1fr $size;
    }
    &.tc-input__icon {
      grid-template-columns: 33px 1fr 0px;
    }
    &.tc-input__icon.tc-input__buttons {
      grid-template-columns: $size 33px 1fr $size;
    }
    &.tc-input__buttons {
      .tc-input--input {
        input {
          text-align: center;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Firefox */
        input[type='number'] {
          -moz-appearance: textfield;
        }
      }
    }
  }

  .tc-input--icon,
  .tc-input--button {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    i {
      text-align: center;
      line-height: #{$size * 3 / 4};
      width: #{$size * 3 / 4};
      height: #{$size * 3 / 4};
    }
  }

  .tc-input--icon {
    opacity: 0.7;
    i {
      border-right: 1px solid rgba($color, 0.5);
      padding-right: 5px;
    }
  }

  .tc-input--button {
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:active {
      filter: brightness(115%) drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.1));
    }
    i {
      color: #fff;
      background: $primary;
      border-radius: 3px;
    }
  }
  .tc-input--input {
    min-width: 100px;
    margin: 0 5px;
    input {
      font: inherit;
      font-family: inherit;
      width: 100%;
      height: 100%;
      display: inline-block;
      outline: none;
      border: none;
      background: $paragraph;
      -webkit-appearance: none;
    }
  }
}
</style>
