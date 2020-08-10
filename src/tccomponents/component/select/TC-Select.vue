<template>
  <div
    class="tc-select"
    :class="{
      'tc-select__dark': dark,
      'tc-select__frosted': frosted,
      'tc-select__fit-content': isFitContent,
      'tc-select__hasHead': title || placeholder
    }"
    :id="id"
    @click="expanded = !expanded"
  >
    <div :id="id + 't'" class="tc-select--title" v-if="title">{{ title }}</div>
    <div :id="id + 'tt'" class="tc-select--tooltip" v-if="tooltip">
      <tc-tooltip :tooltip="tooltip">
        <i class="ti-question-circle"></i>
      </tc-tooltip>
    </div>
    <div
      :id="id + 'i'"
      v-if="icon"
      class="tc-select--indicator indicator__icon"
    >
      <tf-icon :id="id + 'ii'" :icon="icon" />
    </div>
    <div :id="id + 's'" class="tc-select--selected" v-if="display">
      {{ display }}
    </div>
    <div :id="id + 'p'" class="tc-select--placeholder" v-else>
      {{ placeholder }}
    </div>

    <div
      @click.stop
      class="tc-select--container"
      :class="{ container__expanded: expanded }"
    >
      <div class="container--head" v-if="title || placeholder">
        {{ title || placeholder }}<span>--</span>
      </div>
      <div class="container--items">
        <template v-for="v in innerValues">
          <div
            class="container--items__icon"
            :key="v + 'i'"
            @click.stop="toggle(v)"
          >
            <i class="ti-dot" v-if="!isSelected(v)" />
            <i class="ti-checkmark" v-else />
          </div>
          <div class="container--items__item" :key="v" @click.stop="toggle(v)">
            {{ v }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCTooltip from '@/tccomponents/component/tooltip/TC-Tooltip.vue';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

type TValues = string | number | boolean;

@Component({
  components: {
    'tc-tooltip': TCTooltip,
    'tf-icon': TFIcon
  }
})
export default class TCSelect extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() tooltip!: string;
  @Prop() frosted!: boolean;
  @Prop() width!: string;
  @Prop({ default: 'list' }) icon!: string;
  @Prop({ default: false }) multiple!: boolean;
  @Prop({ default: 'Select one' }) placeholder!: string;
  @Prop() value!: TValues | TValues[];
  @Prop() values!: TValues[];

  public expanded = false;
  public innerValue: TValues | TValues[] = this.value
    ? this.value
    : this.multiple
    ? []
    : '';
  public innerValues: TValues[] = this.values ? this.values : [];

  @Watch('values')
  valuesChanged(): void {
    this.innerValues = this.values ? this.values : [];
  }

  @Watch('value')
  valueChanged(): void {
    this.innerValue = this.value;
  }

  @Watch('innerValue')
  update(): void {
    this.$emit('input', this.innerValue);
  }

  get isFitContent(): boolean {
    return this.width == 'fit-content';
  }

  mounted(): void {
    window.addEventListener('click', this.clicked);
  }
  beforeDestroy(): void {
    window.removeEventListener('click', this.clicked);
  }

  public clicked(e: MouseEvent): void {
    if (e.target) {
      const id: string = (e.target as HTMLElement).id;
      if (!id.startsWith(this.id)) {
        this.expanded = false;
      }
    }
  }

  public toggle(value: TValues): void {
    if (!this.multiple) {
      if (this.isSelected(value)) {
        this.innerValue = '';
      } else {
        this.innerValue = value;
        this.expanded = false;
      }
    } else {
      if (this.isSelected(value)) {
        const index = (this.innerValue as TValues[]).indexOf(value);
        if (index > -1) {
          (this.innerValue as TValues[]).splice(index, 1);
        }
      } else {
        (this.innerValue as TValues[]).push(value);
      }
    }
  }

  public isSelected(value: TValues) {
    if (this.multiple) {
      return (this.innerValue as TValues[]).includes(value);
    } else {
      return this.innerValue === value;
    }
  }

  get id() {
    return 'tc-select_' + this.uuid_;
  }

  get display() {
    if (this.multiple) {
      const vals: TValues[] = this.innerValue as TValues[];
      if (vals.length == 1) return vals[0];
      else if (vals.length > 1) return vals.length + 'x Items';
      return this.placeholder;
    }
    return this.innerValue;
  }
}
</script>

<style lang="scss" scoped>
@mixin tc-select--container($c, $bg) {
  background: $bg;
  color: $c;
  .container--head {
    @include backdrop-blur(darken($bg, 10%));
  }
}

.tc-select {
  @include tc-container__light();
  .tc-select--container {
    @include custom-scrollbar__light();
    @include tc-select--container($color, $paragraph);
  }

  &.tc-select__frosted {
    &,
    .tc-select--container {
      @include backdrop-blur(darken($paragraph, 10%));
    }
  }
  &.tc-select__dark {
    @include tc-container__dark();
    .tc-select--container {
      @include custom-scrollbar__dark();
      @include tc-select--container($color_dark, $paragraph_dark);
    }
    &.tc-select__frosted {
      &,
      .tc-select--container {
        @include backdrop-blur(lighten($paragraph_dark, 10%));
      }
    }
  }
  &.tc-select__fit-content {
    width: fit-content;
  }
  &.tc-select__hasHead {
    margin-top: 30px;
  }
  position: relative;
  user-select: none;
  .tc-select--title {
    @include tc-container--title();
  }
  .tc-select--tooltip {
    @include tc-container--title();
    overflow: hidden;
    right: 5px;
  }
  .tc-select--indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    &.indicator__icon {
      @include tc-container--indicator__icon();
    }
  }
  .tc-select--placeholder {
    opacity: 0.8;
    white-space: nowrap;
  }
  .tc-select--container {
    max-height: 0px;
    transition: max-height 0.3s ease-in-out;
    &.container__expanded {
      max-height: 200px;
    }

    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    overflow: {
      y: auto;
      x: hidden;
    }
    border-radius: $border-radius;

    box-shadow: $shadow;
    height: auto;
    max-width: 100vw;
    width: fit-content;
    z-index: 100;
    .container--head {
      width: 100%;
      text-align: center;
      padding: 5px;
      font-weight: 500;
      position: sticky;
      top: 0;
      z-index: 10;
      span {
        user-select: none;
        opacity: 0;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 1px;
        background: currentColor;
        opacity: 0.6;
      }
    }
    .container--items {
      margin: 5px 10px;
      display: grid;
      grid-template-columns: 20px 1fr;
      position: relative;
      i {
        line-height: 26px;
        &.ti-checkmark {
          font-size: 14px;
        }
      }
      .container--items__item {
        white-space: nowrap;
        line-height: 26px;
        transition: all 0.2s ease-in-out;
        border-radius: $border-radius;
        padding: 0 5px;
        opacity: 0.7;
        &:hover {
          transform: scale(1.085);
          opacity: 1;
        }
      }
    }
  }
}
</style>
