<template>
  <div
    class="tc-navbar"
    :id="uuid_"
    :class="{
      'tc-navbar__dark': dark_,
      'tc-navbar__light': !dark_
    }"
  >
    <div
      tc-flex
      class="tc-navbar--expander"
      @click="toggleExpander()"
      :class="{ 'tc-navbar--expander__expanded': expanded }"
    >
      <span></span>
      <span></span>
    </div>
    <div tc-flex class="tc-navbar--logo">
      <slot name="logo" />
    </div>
    <div tc-flex>
      <div
        tc-flex
        class="tc-navbar--items"
        :class="{ 'tc-navbar--items__expanded': expanded }"
      >
        <slot />
      </div>
      <div tc-flex class="tc-navbar--actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Mixins } from "vue-property-decorator";
import TCAutoBackground from "../TC-Auto-Background.mixin";

@Component
export default class TCNavbar extends Mixins(TCAutoBackground) {
  public expanded = false;
  public bodyOverflowBefore: string | null = document.body.style.overflow;

  public toggleExpander(): void {
    this.expanded = !this.expanded;
  }

  @Watch("expanded")
  expandedChanged(to: any, from: any) {
    document.body.style.overflow = to ? "hidden" : this.bodyOverflowBefore!;
  }

  @Watch("$route", { deep: true, immediate: true })
  closeExpander(to: string, from: string) {
    this.expanded = false;
  }
}
</script>
<style lang="scss" scoped>
.tc-navbar {
  &,
  [tc-flex] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  user-select: none;
  box-shadow: $shadow;
  right: 0;
  left: 0;
  top: 0;
  padding: 0 5vw;
  padding-top: env(safe-area-inset-top);
  min-height: 50px;
  position: fixed;
  z-index: 10999;

  transition: color 0.1s ease-in-out, background 0.3s ease-in-out;

  &.tc-navbar__dark {
    border-bottom: 1px solid rgba(#fff, 0.3);
    @include backdrop-blur($color);
    color: #fff;

    .tc-navbar--items {
      @media #{$isMobile} {
        background: rgba($color, 0.3);

        &.tc-navbar--items__expanded {
          background: rgba($color, 1);
        }
      }
    }
  }
  &.tc-navbar__light {
    border-bottom: 1px solid rgba($color, 0.2);
    @include backdrop-blur($background);
    color: $color;

    .tc-navbar--items {
      @media #{$isMobile} {
        background: rgba($background, 0.3);

        &.tc-navbar--items__expanded {
          background: rgba($background, 1);
        }
      }
    }
  }
  .tc-navbar--expander,
  .tc-navbar--logo,
  .tc-navbar--items,
  .tc-navbar--actions {
    margin: 0 3px;
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

    &.tc-navbar--expander__expanded {
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

  .tc-navbar--logo {
    @media #{$isMobile} {
      position: absolute;
      left: 50%;
      top: calc(50% + env(safe-area-inset-top) / 2);
      transform: translate(-50%, -50%);
    }
  }

  .tc-navbar--items {
    @media #{$isMobile} {
      z-index: 9999999;
      position: fixed;
      display: block;
      top: calc(50px + env(safe-area-inset-top));
      right: -10px;
      left: -10px;
      height: calc(100vh - 50px);
      max-height: 0px;
      overflow: auto;
      padding: 0px calc(10px + env(safe-area-inset-right)) 0px
        calc(10px + env(safe-area-inset-left)) !important;

      transition: max-height 0.5s ease-in-out, background 0.4s ease-in-out;
      &::-webkit-scrollbar {
        display: none;
      }
      & > * {
        margin-top: -100px;
        transition: margin-top 0.5s ease-in-out 0.1s;
      }
      &.tc-navbar--items__expanded {
        padding: 0px calc(10px + env(safe-area-inset-right))
          calc(50px + env(safe-area-inset-bottom))
          calc(10px + env(safe-area-inset-left)) !important;
        max-height: calc(100vh - 50px);

        & > * {
          margin-top: 0px;
        }
      }
    }
  }

  .tc-navbar--actions {
  }
}
</style>
