<template>
  <div class="tc-divider" :style="styles" :class="classes">
    <div
      class="tc-divider--bar"
      :class="{
        'tc-divider--bar_small': position != 'right' && position == 'left'
      }"
    />
    <div class="tc-divider--content" v-if="icon || name">
      <tf-icon v-if="icon" :icon="icon" />
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
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCDivider extends Mixins(TCComponent) {
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop() position!: string;

  get alignment(): string {
    return this.position || 'center';
  }

  get styles(): string {
    return `--tc-divider__color: ${this.getChosenColor(
      this.dark ? 'colorDark' : 'color'
    )}`;
  }

  get classes(): Record<string, unknown> {
    return { 'tc-divider__dark': this.dark };
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
  color: rgba(var(--tc-divider__color), 1);

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
