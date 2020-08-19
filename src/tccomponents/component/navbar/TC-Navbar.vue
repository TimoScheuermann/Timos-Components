<template>
  <div class="tc-navbar" :style="styles">
    <div
      v-if="$slots.default"
      class="tc-navbar--expander"
      @click="expanded = !expanded"
      :class="classes"
    >
      <span /><span />
    </div>
    <div class="tc-navbar--logo">
      <slot name="logo" />
    </div>
    <div class="tc-navbar--items" :class="classes">
      <div class="tc-navbar--item__wrapper">
        <slot />
      </div>
    </div>
    <div class="tc-navbar--actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator';
import TCAutoBackground from '@/tccomponents/TC-Auto-Background.mixin';

@Component
export default class TCNavbar extends Mixins(TCAutoBackground) {
  public expanded = false;

  @Watch('$route', { deep: true, immediate: true })
  closeExpander(): void {
    this.expanded = false;
  }

  @Watch('expanded')
  expandedChanged(): void {
    if (this.expanded) {
      document.body.classList.add('tc-navbar__open');
      document.documentElement.classList.add('tc-navbar__open');
    } else {
      document.body.classList.remove('tc-navbar__open');
      document.documentElement.classList.remove('tc-navbar__open');
    }
  }

  get styles(): string {
    return `--tc-navbar__color:${this.getChosenColor(
      this.darkmodeadv ? 'colorDark' : 'color'
    )};--tc-navbar__background: ${this.getChosenBackground(
      this.darkmodeadv ? 'paragraphDark' : 'paragraph'
    )};`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-navbar__dark': this.darkmodeadv,
      'tc-navbar__expanded': this.expanded
    };
  }
}
</script>
<style lang="scss">
.tc-navbar__open {
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
.tc-navbar {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: env(safe-area-inset-top) 5vw 0;
  max-width: 100vw;
  user-select: none;
  box-shadow: $shadow;

  @include tc-backdrop-blur2(var(--tc-navbar__background));
  color: rgba(var(--tc-navbar__color), 1);

  @media #{$isMobile} {
    display: flex;
    justify-content: space-between;
  }

  @media #{$isDesktop} {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
  }
  .tc-navbar--items,
  .tc-navbar--actions,
  .tc-navbar--logo,
  .tc-navbar--expander {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    white-space: nowrap;
  }

  .tc-navbar--item__wrapper {
    display: flex;
    white-space: nowrap;
    overflow: auto hidden;

    @include custom-scrollbar__light();

    @media #{$isMobile} {
      flex-direction: column;
    }
  }
  &.tc-navbar__dark .tc-navbar--item__wrapper {
    @include custom-scrollbar__dark();
  }

  @media #{$isMobile} {
    .tc-navbar--items {
      @include custom-scrollbar__light();
    }
    &.tc-navbar__dark .tc-navbar--item--items {
      @include custom-scrollbar__dark();
    }

    .tc-navbar--items {
      position: fixed;
      display: block;
      top: calc(50px + env(safe-area-inset-top));
      left: 0;
      right: 0;
      padding: 0 5vw;

      background: rgba(var(--tc-navbar__background), 0);
      color: rgba(var(--tc-navbar__color), 1);
      border-radius: 0px 0px 40vw 40vw;
      height: calc(100vh - 50px - env(safe-area-inset-top));
      overflow: hidden;
      max-height: 0px;
      transition: 0.4s ease-in-out;

      .tc-navbar--item__wrapper {
        margin-top: -30px;
        opacity: 0;
        transition: inherit;
      }

      &.tc-navbar__expanded {
        overflow: auto;
        max-height: calc(100vh - 50px - env(safe-area-inset-top));
        border-radius: 0px 0px 0px 0px;
        background: rgba(var(--tc-navbar__background), 1);
        .tc-navbar--item__wrapper {
          transition-delay: 0.3s;
          margin-top: 0px;
          opacity: 1;
        }
      }
    }
  }
  .tc-navbar--expander {
    @media #{$isDesktop} {
      display: none;
    }
    cursor: pointer;
    position: relative;
    height: 50px;
    width: 50px;

    span {
      position: absolute;
      border-radius: 10px;
      height: 2px;
      width: 24px;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 1s ease-in-out;
      background: currentColor;
      transition: top 0.25s ease-in-out 0.25s, transform 0.25s ease-in-out 0s !important;

      &:nth-child(1) {
        top: 20px;
        transform: translate(-50%, -50%) rotate(0deg);
      }
      &:nth-child(2) {
        top: 30px;
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }

    &.tc-navbar__expanded {
      span {
        transition: top 0.25s ease-in-out 0s, transform 0.25s ease-in-out 0.25s !important;

        &:nth-child(1) {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:nth-child(2) {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }
  }
}
</style>
