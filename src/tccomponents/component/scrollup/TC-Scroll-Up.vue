<template>
  <div
    class="tc-scroll-up"
    :class="classes"
    @click="scrollUp()"
    :style="styles"
  >
    <tf-icon :icon="icon" />
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
export default class TCScrollUp extends Mixins(TCComponent) {
  @Prop({ default: 'chevron-up' }) icon!: string;
  @Prop({ default: 45 }) size!: number;
  @Prop({ default: 'border' }) variant!: string;

  public visible = false;

  beforeMount(): void {
    document.onscroll = () => {
      this.visible =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    };
  }

  scrollUp(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  get styles(): string {
    return `--tc-scroll-up__color: ${this.getChosenColor(
      'colorDark'
    )};--tc-scroll-up__background: ${this.getChosenBackground(
      'primary'
    )};--tc-scroll-up__size: ${this.size}px;`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-scroll-up__visible': this.visible,
      'tc-scroll-up__filled': this.variant !== 'border',
      'tc-scroll-up__border': this.variant === 'border'
    };
  }
}
</script>

<style lang="scss" scoped>
$size: var(--tc-scroll-up__size);
.tc-scroll-up {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--tc-scroll-up__size) / 2.5);
  transition: all 0.2s ease-in-out;
  transform: translateX(30px) scale(0);
  &.tc-scroll-up__visible {
    transform: translateX(0px) scale(1);
  }

  opacity: 0.5;
  &:hover {
    opacity: 1;
  }

  position: fixed;
  bottom: calc(10px + env(safe-area-inset-bottom));
  right: calc(10px + env(safe-area-inset-right));
  width: $size;
  height: $size;
  border-radius: $size;
  cursor: pointer;

  &.tc-scroll-up__filled {
    background: rgba(var(--tc-scroll-up__background), 1);
    color: rgba(var(--tc-scroll-up__color), 1);
  }

  &.tc-scroll-up__border {
    border: 2.5px solid rgba(var(--tc-scroll-up__background), 1);
    box-sizing: border-box;
    color: rgba(var(--tc-scroll-up__background), 1);
    &:hover {
      border-width: calc(var(--tc-scroll-up__size) / 2);
      color: rgba(var(--tc-scroll-up__color), 1);
    }
  }
}
</style>
