<template>
  <div
    class="tc-navbar-item"
    :style="styles"
    :class="classes"
    @click="handleClick"
  >
    <tl-flow horizontal="space-between">
      <div class="tc-navbar-item--icon">
        <tf-icon v-if="icon" :icon="icon" />
      </div>
      <div class="tc-navbar-item--name">{{ name }}</div>
    </tl-flow>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tl-flow': TLFlow,
    'tf-icon': TFIcon
  }
})
export default class TCNavbarItem extends Mixins(TCComponent, TCURLComponent) {
  @Prop() name!: string;
  @Prop() icon!: string;

  get classes(): Record<string, boolean> {
    return {
      'tc-navbar-item__active': this.isURLActive
    };
  }
  get styles(): string {
    return `--tc-navbar-item__color: ${this.getChosenColor()}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-navbar-item {
  color: inherit;
  cursor: pointer;
  position: relative;
  opacity: 0.5;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 0%;
    bottom: -1px;
    border-radius: 2px;
    height: 2px;
    background: currentColor;
    transition: width 0.2s ease-in-out;
  }
  &:hover {
    opacity: 1;
  }
  &.tc-navbar-item__active {
    opacity: 1;
    color: rgba(var(--tc-navbar-item__color), 1);
    &::before {
      width: 100%;
    }
  }

  .tl-flow {
    height: 50px;
    margin: 0 10px;
    flex-wrap: nowrap;

    .tc-navbar-item--icon,
    .tc-navbar-item--name {
      margin: 0 3px;
      white-space: nowrap;
    }
  }
}
</style>
