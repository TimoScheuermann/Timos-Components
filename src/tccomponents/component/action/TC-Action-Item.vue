<template>
  <div class="tc-action-item" @click.capture.stop="clicked">
    <span>{{ title }}</span>
    <i :class="'ti-' + icon" />
  </div>
</template>

<script lang="ts">
import TCComponent from '@/tccomponents/TC-Component.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class TCActionItem extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() icon!: string;

  public clicked(e: MouseEvent): void {
    this.$emit('click', e);
    this.$parent.$emit('close');
  }
}
</script>

<style lang="scss">
.tc-action__dark {
  .tc-action-item {
    &:hover,
    &:active {
      background: rgba($color, 0.4) !important;
    }
    &:not(:last-child) {
      border-color: rgba($color, 0.5) !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.tc-action-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
  z-index: 12;
  cursor: pointer;
  padding: 7.5px 12.5px;
  font-weight: 500;
  transition: background 0.1s ease-in-out;

  &:hover,
  &:active {
    background: rgba($color, 0.2);
  }

  span {
    margin-right: 30px;
    white-space: nowrap;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba($color_dark, 0.5);
  }
}
</style>
