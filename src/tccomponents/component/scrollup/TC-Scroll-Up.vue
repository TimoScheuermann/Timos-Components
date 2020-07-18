<template>
  <div
    class="tc-scroll-up"
    :class="{ 'tc-scroll-up__visible': visible }"
    @click="scrollUp()"
    :style="{ background: background, color: color }"
  >
    <i :class="'ti-' + icon"></i>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCScrollUp extends Mixins(TCComponent) {
  @Prop({ default: 'chevron-up' }) icon!: string;

  public visible = false;

  created(): void {
    document.onscroll = () => {
      this.visible =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    };
  }

  scrollUp(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }
}
</script>

<style lang="scss" scoped>
$size: 50px;
.tc-scroll-up {
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: #08f;
  color: #fff;
  font-size: 20px;
}
</style>
