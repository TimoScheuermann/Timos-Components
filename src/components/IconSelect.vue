<template>
  <div
    class="tc-select"
    :class="{
      'tc-select__dark': dark,
      'tc-select__frosted': frosted
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
          <div class="container--items__item" :key="v" @click.stop="toggle(v)">
            <tc-tooltip :tooltip="v">
              <i :class="'ti-' + v" />
            </tc-tooltip>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import { Icon } from '@/models/Icon.model';
import TCTooltip from '@/tccomponents/component/tooltip/TC-Tooltip.vue';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

type TValues = string | number | boolean;

@Component({
  components: {
    'tc-tooltip': TCTooltip,
    'tf-icon': TFIcon
  }
})
export default class IconSelect extends Mixins(TCComponent) {
  public icons: Icon[] = this.$store.getters.icons;
  public query = '';

  @Prop() title!: string;
  @Prop() tooltip!: string;
  @Prop() frosted!: boolean;
  @Prop({ default: 'heart' }) icon!: string;
  @Prop({ default: true }) dark!: boolean;
  @Prop({ default: false }) multiple!: boolean;
  @Prop({ default: "Timo's Icons" }) placeholder!: string;

  @Prop() value!: TValues | TValues[];
  @Prop() values!: TValues[];

  public expanded = false;
  public innerValue: TValues | TValues[] = this.value
    ? this.value
    : this.multiple
    ? []
    : '';

  get innerValues(): string[] {
    return this.icons
      .map((x: Icon) => x.name)
      .sort((a, b) => a.localeCompare(b));
  }

  @Watch('innerValue')
  update(): void {
    this.$emit('input', this.innerValue);
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

  public isSelected(value: TValues): boolean {
    if (this.multiple) {
      return (this.innerValue as TValues[]).includes(value);
    } else {
      return this.innerValue === value;
    }
  }
  get id(): string {
    return 'tc-select_' + this.uuid_;
  }

  get display(): string | number | boolean | TValues[] {
    if (this.multiple) {
      const vals: TValues[] = this.innerValue as TValues[];
      if (vals.length == 1) return vals[0];
      else if (vals.length > 1) return vals.length + 'x Items';
    }
    return this.innerValue;
  }
}
</script>
<style lang="scss" scoped>
.tc-select {
  @include tc-container__light();
  .tc-select--container {
    background: $paragraph;
    color: $color;
    @include custom-scrollbar__light();
    .container--head {
      @include backdrop-blur(darken($paragraph, 15%));
    }
  }
  &.tc-select__frosted {
    &,
    .tc-select--container {
      @include backdrop-blur(darken($paragraph, 15%));
    }
  }
  &.tc-select__dark {
    @include tc-container__dark();
    .tc-select--container {
      background: lighten($color, 10%);
      color: $color_dark;
      @include custom-scrollbar__dark();
      .container--head {
        @include backdrop-blur(lighten($color, 20%));
      }
    }
    &.tc-select__frosted {
      &,
      .tc-select--container {
        @include backdrop-blur(lighten($color, 10%));
      }
    }
  }
  &.tc-select__fit-content {
    width: fit-content;
  }
  margin-top: 30px !important;
  position: relative;
  .tc-select--title {
    @include tc-container--title();
  }
  .tc-select--tooltip {
    @include tc-container--title();
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
  }
  .tc-select--container {
    max-height: 0px;
    transition: max-height 0.3s ease-in-out;
    &.container__expanded {
      max-height: 200px;
    }

    position: absolute;
    top: 35px;
    left: -0.75px;
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
      margin-top: 40px;
      grid-template-columns: repeat(10, 1fr);
      grid-gap: 5px;
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
