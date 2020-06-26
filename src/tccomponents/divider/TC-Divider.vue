<template>
  <div
    class="tc-divider"
    :style="{ color: color }"
    :class="{ 'tc-divider__dark': dark }"
  >
    <div
      class="tc-divider--bar"
      :class="{
        'tc-divider--bar_small': position != 'right' && position == 'left'
      }"
    />
    <div class="tc-divider--content" v-if="icon || name">
      <i v-if="icon" :class="'ti-' + icon"></i>
      <span v-if="name">{{ name }}</span>
    </div>
    <div
      class="tc-divider--bar"
      :class="{
        'tc-divider--bar_small': position != 'left' && position == 'right'
      }"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCDivider extends Mixins(TCComponent) {
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop() position!: string;

  get alignment() {
    return this.position || "center";
  }
}
</script>
<style lang="scss" scoped>
.tc-divider {
  display: flex;
  margin: 5px 10px;
  min-height: 10px;
  align-items: center;
  &.tc-divider__dark {
    color: #fff;
  }
  .tc-divider--bar {
    background: currentColor;
    border-radius: 5px;
    height: 1px;
    opacity: 0.3;
    &:not(.tc-divider--bar_small) {
      flex-grow: 1;
    }
    &.tc-divider--bar_small {
      min-width: 5px;
    }
  }
  .tc-divider--content {
    padding: 0 5px;
    display: flex;
    align-items: center;
    i,
    span {
      user-select: none;
      opacity: 0.8;
      padding: 0 3px;
      font-weight: 500;
    }
  }
}
</style>
