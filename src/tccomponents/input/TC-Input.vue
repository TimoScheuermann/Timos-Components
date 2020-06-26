<template>
  <div class="tc-input" :class="{ 'tc-input__dark': dark }">
    <div class="tc-input--head" v-if="title || tooltip">
      <div class="tc-input--title">
        {{ title }}
      </div>
      <div class="tc-input--tooltip" v-if="tooltip">
        <tc-tooltip :tooltip="tooltip">
          <i class="ti-question-circle" />
        </tc-tooltip>
      </div>
    </div>
    <div
      class="tc-input--container"
      :class="{
        'tc-input__buttons': buttonsVisible(),
        'tc-input__icon': icon,
        'tc-input__disabled': disabled
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
        <label v-if="type && type.toLowerCase() === 'file'" :for="id">
          {{ filePlaceholder }}
        </label>
        <input
          v-model="innerValue"
          :type="type ? type.toLowerCase() : 'text'"
          :id="id"
          :inputmode="inputMode()"
          :style="styles"
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
          :multiple="multiple"
          :readonly="readonly"
          :required="required"
          :step="step"
          :ref="id"
          @input="update()"
          @change="change"
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
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
import TCTooltip from "../tooltip/TC-Tooltip.vue";

@Component({
  components: {
    "tc-tooltip": TCTooltip
  }
})
export default class TCInput extends Mixins(TCComponent) {
  @Prop() icon!: string;
  @Prop({ default: "Choose File" }) filePlaceholder!: string;
  @Prop() tooltip!: string;
  @Prop() title!: string;
  @Prop() buttons!: boolean;
  @Prop() placeholder!: string;
  @Prop() type!: string;
  @Prop() value!: any;
  @Prop() accept!: string;
  @Prop() autocomplete!: "on" | "off";
  @Prop() autofocus!: boolean;
  @Prop() disabled!: boolean;
  @Prop() form!: string;
  @Prop() max!: number | string;
  @Prop() maxlength!: number;
  @Prop() min!: number | string;
  @Prop() minlength!: number;
  @Prop() multiple!: boolean;
  @Prop() pattern!: string;
  @Prop() readonly!: boolean;
  @Prop() required!: boolean;
  @Prop({ default: 1 }) step!: number;

  get id(): string {
    return "tc-input_" + this.uuid_;
  }

  innerValue: any = this.value || (this.type === "number" ? 0 : "");

  inputMode(): string {
    return this.type == "number" ? "numeric" : "";
  }
  inputPattern(): string {
    if (this.pattern) return this.pattern;
    return this.type == "number" ? "[0-9]*" : "";
  }
  buttonsVisible(): boolean {
    return this.buttons && this.type === "number";
  }

  get styles() {
    return {
      background: this.type === "color" ? this.innerValue : undefined
    };
  }

  changeVal(amount: number): void {
    this.innerValue = +this.innerValue + +amount * +this.step;
    this.update();
  }

  update() {
    this.$emit("input", this.innerValue);
  }
  change(changeEvent: Event) {
    this.$emit("change", changeEvent);
    const target: HTMLInputElement = changeEvent.target as HTMLInputElement;
    const fileList: FileList = target.files as FileList;
    const reader = new FileReader();
    reader.onload = loaded => {
      const loadTarget = loaded.target as FileReader;
      this.$emit("fileLoaded", loadTarget.result);
    };
    if (fileList && fileList.length > 0) reader.readAsText(fileList[0]);
  }
}
</script>
<style lang="scss" scoped>
$size: 30px;
.tc-input {
  display: inline-block;
  max-width: 100%;
  margin: 3px;

  .tc-input--head {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 3px;

    .tc-input--title {
      @include tc-container--title();
    }
    .tc-input--tooltip {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &.tc-input__dark {
    color: #fff;
    .tc-input--container,
    .tc-input--input input,
    .tc-input--input label {
      background: lighten($color, 20%);
      color: #fff;
    }
    .tc-input--icon i {
      border-color: rgba(#fff, 0.5);
    }
    .tc-input--container {
      border-color: rgba(#fff, 0.01);
      &:not(.tc-input__disabled):hover {
        border-color: rgba(#fff, 0.4);
      }
    }
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
    min-width: 100px;
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
        input[type="number"] {
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
    label {
      cursor: pointer;
    }
    input,
    label {
      &[type="file"] {
        position: fixed;
        top: -200px;
        left: 0;
        z-index: -1;
        opacity: 0;
      }
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
