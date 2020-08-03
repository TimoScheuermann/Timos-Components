<template>
  <div class="tc-sidebar--group">
    <div class="tc-sidebar--group__title">
      <i v-if="icon" :class="'ti-' + icon" />
      <div>{{ name }}</div>
    </div>
    <div class="tc-sidebar--group__items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCSidebarGroup extends Mixins(TCComponent) {
  @Prop() name!: string;
  @Prop() icon!: string;
}
</script>

<style lang="scss" scoped>
.tc-sidebar--group {
  padding: 5px 0;

  .tc-sidebar--group__title {
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i {
      margin-right: 10px;
    }
  }

  .tc-sidebar--items {
    overflow: {
      x: hidden;
      y: auto;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    transition: 0.3s ease-in-out;

    &.expanded {
      margin-top: 5px;
    }
  }
}
</style>
