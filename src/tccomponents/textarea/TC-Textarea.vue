<template>
  <div class="tc-textarea" :class="{ 'tc-textarea__dark': dark }">
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
import TCComponent from "../TC-Component.mixin";
import { Mixins, Component, Prop, Watch } from "vue-property-decorator";
import TCTooltip from "../tooltip/TC-Tooltip.vue";

@Component({
  components: {
    "tc-tooltip": TCTooltip
  }
})
export default class TCTextarea extends Mixins(TCComponent) {
  @Prop({ default: "" }) value!: string;
  @Prop({ default: "Title" }) title!: string;
  @Prop() tooltip!: string;

  @Prop() autofocus!: boolean;
  @Prop() cols!: number;
  @Prop() dirname!: string;
  @Prop() disabled!: boolean;
  @Prop() form!: string;
  @Prop() maxlength!: string;
  @Prop() name!: string;
  @Prop({ default: "Enter text" }) placeholder!: string;
  @Prop() readonly!: boolean;
  @Prop() required!: boolean;
  @Prop({ default: 10 }) rows!: string;
  @Prop() wrap!: string;

  private innerValue: string = this.value;

  @Watch("value")
  valueChanged() {
    this.innerValue = this.value;
  }

  innerValueChanged() {
    this.$emit("input", this.innerValue);
  }
}
</script>
<style lang="scss" scoped>
.tc-textarea {
  color: $color;

  &.tc-textarea__dark {
    color: #fff;
    textarea {
      @include tc-container__dark();
    }
  }

  .tc-textarea--head {
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 3px {
      bottom: 0;
    }

    .tc-textarea--title {
      @include tc-container--title();
    }
    .tc-textarea--tooltip {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .tc-textarea--footer {
    //
  }

  textarea {
    color: inherit;

    @include tc-container__light();
    outline: none;
    font: inherit;
    background: inherit;
    width: calc(100% - 20px);
    min-height: 100px;
    transition: 0.2s ease-in-out;
    height: fit-content;
    resize: none;
  }
}
</style>
