<template>
  <div class="tc-td" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCTd extends Mixins(TCComponent) {
  get styles(): string {
    if (this.color || this.tfcolor) {
      return `--tc-td__color: ${this.getChosenColor()}`;
    }
    return '';
  }
}
</script>

<style lang="scss" scoped>
.tc-td {
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  padding: 5px 10px;
  color: rgba(var(--tc-td__color), 1) !important;
  transition: 0.1s ease-in-out;
}
</style>
