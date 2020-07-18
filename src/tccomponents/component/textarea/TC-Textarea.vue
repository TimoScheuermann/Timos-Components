<template>
  <div
    class="tc-textarea"
    :class="{
      'tc-textarea__frosted': frosted,
      'tc-textarea__dark': dark,
      'tc-textarea__hasHead': title || tooltip
    }"
    :style="{ color: tccolor_ }"
  >
    <div class="tc-textarea--head" v-if="title || tooltip">
      <div class="tc-textarea--title">
        {{ title }}
      </div>
      <div class="tc-textarea--tooltip" v-if="tooltip">
        <tc-tooltip :tooltip="tooltip">
          <i class="ti-question-circle" />
        </tc-tooltip>
      </div>
    </div>
    <textarea
      v-model="innerValue"
      @input="innerValueChanged"
      :autofocus="autofocus"
      :cols="cols"
      :dirname="dirname"
      :disabled="disabled"
      :form="form"
      :maxlength="maxlength"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :rows="rows"
      :wrap="wrap"
      :id="uuid_"
    />
    <div class="tc-textarea--footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import TCComponent from '@/tccomponents/TC-Component.mixin';
import { Mixins, Component, Prop, Watch } from 'vue-property-decorator';
import TCTooltip from '@/tccomponents/component/tooltip/TC-Tooltip.vue';

@Component({
  components: {
    'tc-tooltip': TCTooltip
  }
})
export default class TCTextarea extends Mixins(TCComponent) {
  @Prop({ default: '' }) value!: string;
  @Prop() title!: string;
  @Prop() tooltip!: string;

  @Prop() autofocus!: boolean;
  @Prop() cols!: number;
  @Prop() dirname!: string;
  @Prop() disabled!: boolean;
  @Prop() form!: string;
  @Prop() maxlength!: string;
  @Prop() name!: string;
  @Prop({ default: 'Enter text' }) placeholder!: string;
  @Prop() readonly!: boolean;
  @Prop() required!: boolean;
  @Prop({ default: 10 }) rows!: string;
  @Prop() wrap!: string;

  private innerValue: string = this.value;

  @Watch('value')
  valueChanged(): void {
    this.innerValue = this.value;
  }

  innerValueChanged(): void {
    this.$emit('input', this.innerValue);
  }
}
</script>

<style lang="scss" scoped>
.tc-textarea {
  color: $color;
  textarea {
    @include tc-container__light();
    @include custom-scrollbar__light();
  }
  &.tc-textarea__frosted textarea {
    @include backdrop-blur($paragraph);
  }

  &.tc-textarea__dark {
    color: $color_dark;
    textarea {
      @include tc-container__dark();
      @include custom-scrollbar__dark();
    }
    &.tc-textarea__frosted textarea {
      @include backdrop-blur($paragraph_dark);
    }
  }

  &.tc-textarea__hasHead {
    margin-top: 30px;
  }

  .tc-textarea--head {
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 3px {
      bottom: 0;
    }

    position: relative;

    .tc-textarea--title {
      @include tc-container--title();
    }
    .tc-textarea--tooltip {
      @include tc-container--title();
      position: absolute;
      overflow: hidden;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  textarea {
    color: inherit;
    outline: none;
    font: inherit;
    width: calc(100% - 20px);
    min-height: 100px;
    transition: 0.2s ease-in-out;
    height: auto;
    resize: none;
    &::placeholder {
      color: inherit;
      opacity: 0.6;
    }
  }
}
</style>
