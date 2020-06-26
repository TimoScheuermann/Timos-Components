<template>
  <div class="tc-select" :class="{ 'tc-select__dark': dark }">
    <div class="tc-select--head" v-if="title || tooltip">
      <div class="tc-select--title">
        {{ title }}
      </div>
      <div class="tc-select--tooltip" v-if="tooltip">
        <tc-tooltip :tooltip="tooltip">
          <i class="ti-question-circle" />
        </tc-tooltip>
      </div>
    </div>

    <label :for="id" @click.stop="expanded = !expanded">
      <i v-if="icon" :class="'ti-' + icon" />
      <span v-if="display">{{ display }}</span>
      <span v-else class="tc-select__placeholder">{{ placeholder }}</span>
    </label>
    <select :id="id" :multiple="multiple" v-model="innerValue">
      <optgroup :label="title">
        <option v-for="v in innerValues" :key="v" :value="v">
          {{ v }}
        </option>
      </optgroup>
    </select>
    <div
      :id="id + '_box'"
      class="tc-select--custom"
      :class="{ 'tc-select--custom__expanded': expanded }"
    >
      <div class="tc-select--title" :id="id + '_title'" v-if="title">
        {{ title }}
      </div>
      <div
        v-for="(v, index) in innerValues"
        :key="v"
        :id="id + '_' + index"
        class="tc-select--option"
        :class="{ 'tc-select--option__selected': isSelected(v) }"
        @click="toggle(v)"
      >
        <div class="svg" :id="id + '_' + index">
          <svg
            :id="id + '_' + index"
            width="20"
            height="20"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" />
            <path
              d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
              transform="translate(-1525 -915.917)"
              fill="none"
              stroke="#08f"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="10"
            />
          </svg>
        </div>
        <div :id="id + '_' + index" class="text">{{ v }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
import TCTooltip from "../tooltip/TC-Tooltip.vue";
type TValues = string | number | boolean;

@Component({
  components: {
    "tc-tooltip": TCTooltip
  }
})
export default class TCSelect extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() tooltip!: string;
  @Prop({ default: "list" }) icon!: string;
  @Prop({ default: false }) multiple!: boolean;
  @Prop({ default: "Select one" }) placeholder!: string;
  @Prop() value!: TValues | TValues[];
  @Prop() values!: TValues[];

  public expanded = false;
  public innerValue: TValues | TValues[] = this.value
    ? this.value
    : this.multiple
    ? []
    : "";
  public innerValues: TValues[] = this.values ? this.values : [];

  @Watch("values")
  valuesChanged(): void {
    this.innerValues = this.values ? this.values : [];
  }

  @Watch("value")
  valueChanged(): void {
    this.innerValue = this.value;
  }

  @Watch("innerValue")
  update(): void {
    this.$emit("input", this.innerValue);
  }

  mounted() {
    window.addEventListener("click", this.clicked);
  }
  beforeDestroy() {
    window.removeEventListener("click", this.clicked);
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
        this.innerValue = "";
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
    return "tc-select_" + this.uuid_;
  }
  get display() {
    if (this.multiple) {
      const vals: TValues[] = this.innerValue as TValues[];
      if (vals.length == 1) return vals[0];
      else if (vals.length > 1) return vals.length + "x Items";
    }
    return this.innerValue;
  }
}
</script>
<style lang="scss" scoped>
// @supports (-webkit-touch-callout: none) { content: "ios"; }
// @media (hover: hover) { content: "desktop"; }
// @media (hover: none) { content: "mobile";  }

.tc-select {
  display: inline-block;
  color: $color;
  max-width: 100%;
  select {
    position: fixed;
    top: -200px;
  }

  .tc-select--head {
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 3px {
      bottom: 0;
    }

    .tc-select--title {
      @include tc-container--title();
    }
    .tc-select--tooltip {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .tc-select--custom {
    @media (hover: none) {
      //display: none;
    }
    position: absolute;
    z-index: 100;
    @include backdrop-blur($paragraph);
    border-radius: $border-radius;
    padding: 5px;
    min-width: 125px;
    max-height: 0px;
    overflow: hidden;
    transform: scale(0);
    transition: 0.2s ease-in-out, max-height 0.5s ease-in-out;
    &.tc-select--custom__expanded {
      transform: scale(1);
      max-height: 300px;
      overflow: {
        y: auto;
        x: hidden;
      }
    }
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      position: absolute !important;
      border-radius: 4px;
      transition: 0.2s ease;
    }

    &::-webkit-scrollbar:hover {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #888;
      cursor: grabbing;
    }

    .tc-select--title {
      position: sticky;
      user-select: none;
      top: -5px;
      text-align: center;
      background: lighten($paragraph, 4%);
      margin: -5px {
        bottom: 2px;
      }
      padding: 5px;
      border-top: {
        left-radius: inherit;
        right-radius: inherit;
      }
      border-bottom: 1px solid currentColor;
    }
    .tc-select--option {
      transition: 0.2s ease-in-out;
      &:hover {
        transform: translateX(10px) scale(1.05);
      }
      &.tc-select--option__selected {
        color: #08f;
        i {
          transform: scale(0.8);
        }
        circle {
          stroke-width: 0;
          r: 0;
          opacity: 0;
        }
        path {
          stroke: {
            dashoffset: 0px;
          }
          opacity: 1;
          transition: all 0.5s ease-in-out;
        }
      }
      user-select: none;
      cursor: pointer;
      display: grid;
      padding-top: 2px;
      grid-template-columns: 20px auto;
      line-height: 25px;
      i {
        padding-top: 3px;
      }

      svg {
        margin-top: 2px;
        margin-bottom: -2px;
        circle {
          stroke-width: 1;
          fill: #000;
          stroke: #000;
          r: 16;
          transition: all 0.5s ease-in-out;
        }
        path {
          stroke: {
            dasharray: 168px;
            dashoffset: 168px;
          }
          opacity: 0;
          transition: all 0.5s ease-in-out, opacity 0.5s ease-in-out 0.2s;
        }
      }

      width: 100%;
      &:not(:last-child) {
        .text {
          border-bottom: 1px solid rgba($color, 0.2);
        }
      }
    }
  }

  label {
    @include tc-container__light();
    text-align: center;
    display: inline-flex;
    align-items: center;
    min-width: 80px;
    max-width: 100%;
    i {
      padding-right: 7.5px;
      margin-right: 7.5px;
      border-right: 1px solid rgba($color, 0.5);
    }
    .tc-select__placeholder {
      opacity: 0.6;
    }
  }

  &__dark {
    color: #fff;

    label {
      @include tc-container__dark();
      i {
        border-color: rgba(#fff, 0.5) !important;
      }
    }
    .tc-select--custom {
      @include backdrop-blur(lighten($color, 20%));
      .tc-select--title {
        background: lighten($color, 4%);
        border-bottom-color: lighten($color, 50%);
      }
      .tc-select--option {
        svg {
          circle {
            fill: rgba(#fff, 0.75);
            stroke: rgba(#fff, 0.75);
          }
        }
        .text {
          color: rgba(#fff, 0.75);
        }
        &:not(:last-child) {
          .text {
            border-bottom-color: rgba(#fff, 0.2);
          }
        }
      }
    }
  }
}
</style>
