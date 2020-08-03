<template>
  <div
    class="tc-sidebar--item"
    :class="{ 'tc-sidebar--item__active': isURLActive }"
    @click="handleClick"
  >
    <tf-icon :icon="icon" />
    <div class="name">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';

@Component({
  components: { 'tf-icon': TFIcon }
})
export default class TCSidebarItem extends Mixins(TCComponent, TCURLComponent) {
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop() active!: boolean;
}
</script>

<style lang="scss" scoped>
.tc-sidebar--item {
  user-select: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  color: inherit;
  opacity: 0.6;
  transition: 0.2s ease-in-out;
  padding: 5px {
    right: 0;
  }
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: $primary;
    outline: none;
  }

  &.tc-sidebar--item__active {
    opacity: 1;
    color: $primary;
    border-right: 4px solid $primary;
  }
  .tf-icon__icon {
    margin-right: 10px;
  }
  .tf-icon__image {
    margin-right: 16px;
  }
  .name {
    flex-grow: 1;
    white-space: nowrap;
  }
}
</style>
