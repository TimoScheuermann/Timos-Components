<template>
  <div class="tc-tabbar" :id="uuid_" :style="styles" :class="classes">
    <div class="tc-tabbar-items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import TCAutoBackground from '@/tccomponents/TC-Auto-Background.mixin';

@Component
export default class TCTabbar extends Mixins(TCAutoBackground) {
  get classes(): Record<string, unknown> {
    return { 'tc-tabbar__dark': this.darkmodeadv };
  }
  get styles(): string {
    return `--tc-tabbar__color:${this.getChosenColor(
      this.darkmodeadv ? 'colorDark' : 'color'
    )};--tc-tabbar__background: ${this.getChosenBackground(
      this.darkmodeadv ? 'paragraphDark' : 'paragraph'
    )}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-tabbar {
  transition: color 0.1s ease-in-out, background 0.3s ease-in-out;

  position: fixed;
  box-shadow: $shadow;
  bottom: 0;
  right: 0;
  left: 0px;
  z-index: 950;
  height: 50px;
  padding: 0 2.5px {
    bottom: env(safe-area-inset-bottom);
  }

  color: rgba(var(--tc-tabbar__color), 1);
  @include tc-backdrop-blur2(var(--tc-tabbar__background));

  .tc-tabbar-items {
    color: inherit;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
