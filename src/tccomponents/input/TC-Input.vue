<template>
  <div
    class="tc-input"
    :class="{
      'tc-input__dark': dark,
      'tc-input__frosted': frosted,
      'tc-input__fit-content': isFitContent
    }"
  >
    <div class="tc-input--title" v-if="title">{{ title }}</div>
    <div class="tc-input--tooltip" v-if="tooltip">
      <tc-tooltip :tooltip="tooltip">
        <i class="ti-question-circle"></i>
      </tc-tooltip>
    </div>
    <div v-if="buttons_" m class="tc-input--indicator indicator__button">
      <i class="ti-minus" />
    </div>
    <div v-if="icon" class="tc-input--indicator indicator__icon">
      <tf-icon :icon="icon" />
    </div>
    <label v-if="type && type.toLowerCase() === 'file'" :for="id">
      {{ filePlaceholder_ }}
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
    <div
      v-if="type === 'text' && innerValue.length > 0"
      p
      class="tc-input--indicator indicator__clear"
      @click="clear()"
    >
      <i class="ti-cross" />
    </div>
    <div v-if="buttons_" p class="tc-input--indicator indicator__button">
      <i class="ti-plus" />
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Mixins, Component, Watch } from 'vue-property-decorator';
import TCComponent from '../TC-Component.mixin';
import TCTooltip from '../tooltip/TC-Tooltip.vue';
import TFIcon from '../_fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tc-tooltip': TCTooltip,
    'tf-icon': TFIcon
  },
  mixins: [TCComponent]
})
export default class TCInput extends Mixins(TCComponent) {
  @Prop() icon!: string;
  @Prop({ default: 'full' }) width!: string;
  @Prop({ default: 'Choose a file' }) filePlaceholder!: string;
  @Prop() tooltip!: string;
  @Prop() title!: string;
  @Prop() buttons!: boolean;
  @Prop() placeholder!: string;
  @Prop({ default: 'text' }) type!: string;
  @Prop() value!: string | number;
  @Prop() accept!: string;
  @Prop() autocomplete!: 'on' | 'off';
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
  @Prop() frosted!: boolean;

  get id(): string {
    return 'tc-input_' + this.uuid;
  }
  private fileList = '';
  private innerValue: string | number =
    this.value || (this.type === 'number' ? 0 : '');

  @Watch('value')
  valueChanged(): void {
    this.innerValue = this.value || (this.type === 'number' ? 0 : '');
  }

  inputMode(): string {
    return this.type == 'number' ? 'numeric' : '';
  }

  inputPattern(): string {
    if (this.pattern) return this.pattern;
    return this.type == 'number' ? '[0-9]*' : '';
  }

  get filePlaceholder_(): string {
    return this.fileList.length > 0 ? this.fileList : this.filePlaceholder;
  }

  get isFitContent(): boolean {
    return this.width == 'fit-content';
  }

  get buttons_(): boolean {
    return this.buttons && this.type === 'number';
  }

  get styles(): Record<string, unknown> {
    return {
      background: this.type === 'color' ? this.innerValue : undefined
    };
  }

  public clear() {
    this.innerValue = '';
    this.update();
  }
  public changeVal(amount: number): void {
    this.innerValue = +this.innerValue + +amount * +this.step;
    this.update();
  }

  public update(): void {
    this.$emit('input', this.innerValue);
  }

  public change(changeEvent: Event): void {
    this.$emit('change', changeEvent);
    const target: HTMLInputElement = changeEvent.target as HTMLInputElement;
    const fileList: FileList = target.files as FileList;
    if (fileList) {
      this.fileList = Array.from(fileList)
        .map(x => x.name)
        .join(', ');
    }
    const reader = new FileReader();
    reader.onload = loaded => {
      const loadTarget = loaded.target as FileReader;
      this.$emit('fileLoaded', loadTarget.result);
    };
    if (fileList && fileList.length > 0) reader.readAsText(fileList[0]);
  }
}
</script>

<style lang="scss" scoped>
.tc-input {
  @include tc-container__light();
  &.tc-input__frosted {
    @include backdrop-blur(darken($paragraph, 10%));
    color: #fff;
  }
  &.tc-input__dark {
    @include tc-container__dark();
    &.tc-input__frosted {
      @include backdrop-blur(lighten($color, 10%));
    }
  }
  &.tc-input__fit-content {
    width: fit-content;
  }
  position: relative;
  .tc-input--title {
    @include tc-container--title();
  }
  .tc-input--tooltip {
    @include tc-container--title();
    overflow: hidden;
    right: 5px;
  }
  .tc-input--indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    &[m] {
      margin-right: 5px;
    }
    &[p] {
      margin-left: 5px;
    }
    &.indicator__button {
      background: $primary;
      width: 20px;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        filter: brightness(115%);
      }
      &:active {
        filter: brightness(115%) drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.1));
      }
    }
    &.indicator__clear {
      background: #333;
      border-radius: 50px;
      opacity: 0.3;
      &:hover {
        opacity: 0.5;
      }
      i {
        color: #fff;
        transform: scale(0.5);
      }
    }
    &.indicator__icon {
      @include tc-container--indicator__icon();
    }
  }
  label,
  input {
    flex-grow: 1;
    white-space: nowrap;
  }
  label {
    cursor: pointer;
  }
  input {
    background: transparent;
    border: none;
    outline: none;
    font: inherit;
    font-size: inherit;
    color: inherit;
    padding: 0;
    display: block;
    margin: 0;
    width: auto;
    min-width: 10px;

    &::placeholder {
      color: inherit;
      opacity: 0.8;
    }
    -webkit-appearance: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      text-align: center;
      -moz-appearance: textfield;
    }
    &[type='file'] {
      position: fixed;
      top: -200px;
    }
  }
}
</style>
