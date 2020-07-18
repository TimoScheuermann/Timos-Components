<template>
  <div class="tc-header" :id="id" :style="styles" :class="classes">
    <div class="tc-header--head">
      <div
        v-if="backTo || backHref"
        class="tc-header--backButton"
        @click="clicked($event)"
      >
        <i class="ti-chevron-left"></i>
        <span>{{ backName || 'back' }}</span>
      </div>
      <div class="tc-header--pre" v-if="$slots.pre">
        <slot name="pre" />
      </div>
      <div class="tc-header--title__prestyled" v-if="title">{{ title }}</div>
      <div class="tc-header--title" v-else>
        <slot name="title" />
      </div>
    </div>

    <div class="tc-header--sep"></div>

    <div
      v-if="!itemsOverflow"
      class="tc-header--items"
      :id="'tc-header--item-' + uuid_"
    >
      <slot />
    </div>
    <div v-else class="tc-header--items__overflow">
      <svg
        @click="itemCard = !itemCard"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          :d="itemCard ? 'M3 16l13 5 13-5-13 5z' : 'M3 16l13-5 13 5-13-5z'"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        />
      </svg>
    </div>
    <div
      v-if="itemsOverflow"
      class="tc-overflow-items"
      :style="overflowStyles"
      :class="{ ...classes, 'tc-overflow-items__visible': itemCard }"
    >
      <div class="tc-overflow-items--container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import TCAutoBackground from '@/tccomponents/TC-Auto-Background.mixin';

@Component
export default class TCHeader extends Mixins(TCAutoBackground) {
  @Prop() title!: string;
  @Prop({ default: 'fixed' }) variant!: 'fixed' | 'floating' | 'sticky';
  @Prop({ default: 0 }) top!: number;
  @Prop() backTo!: Record<string, unknown>;
  @Prop() backHref!: string;
  @Prop() backName!: string;

  public itemsOverflow = false;
  public itemCard = false;

  created(): void {
    window.addEventListener('resize', this.resize);
    this.resize();
    this.$nextTick(() => {
      this.resize();
    });
  }

  destroyed(): void {
    window.removeEventListener('resize', this.resize);
  }

  get id(): string {
    return 'tc-header_' + this.uuid_;
  }

  public clicked(event: MouseEvent): void {
    this.$emit('click', event);
    if (this.backTo) this.$router.push(this.backTo);
    else if (this.backHref) window.open(this.backHref, '_blank');
  }

  @Watch('$slots.default', { deep: true, immediate: true })
  @Watch('$route', { deep: true, immediate: true })
  public resize(): void {
    this.itemsOverflow = false;
    setTimeout(() => {
      const element = document.getElementById('tc-header--item-' + this.uuid_);
      if (!element) return;

      this.itemsOverflow =
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth;
    }, 200);
  }

  get classes() {
    return {
      'tc-header__light': !this.dark_,
      'tc-header__dark': this.dark_,
      'tc-header__fixed': !(
        this.variant == 'floating' || this.variant == 'sticky'
      ),
      'tc-header__sticky': this.variant == 'sticky',
      'tc-header__floating': this.variant == 'floating'
    };
  }

  get styles(): Record<string, string> {
    return {
      color: this.color,
      background: this.background,
      top: (this.variant === 'floating' ? 40 : 0) + +this.top + 'px'
    };
  }

  get overflowStyles(): Record<string, string> {
    return {
      color: this.color,
      background: this.background,
      top: 'calc(env(safe-area-inset-top) + ' + (+(+this.top) + 50) + 'px)',
      maxHeight:
        'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - ' +
        (+(+this.top) + 50) +
        'px)'
    };
  }
}
</script>

<style lang="scss" scoped>
.tc-header {
  user-select: none;
  box-shadow: $shadow;

  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  transition: color 0.1s ease-in-out, background 0.3s ease-in-out;

  &.tc-header__dark {
    &.tc-header__sticky,
    &.tc-header__fixed {
      border-bottom: 1px solid rgba($color_dark, 0.3);
    }
    @include backdrop-blur($background_dark);
    color: $color_dark;
    .tc-header--items__overflow .tc-checkbox /deep/ .icon {
      color: $color_dark;
    }
  }
  &.tc-header__light {
    &.tc-header__sticky,
    &.tc-header__fixed {
      border-bottom: 1px solid rgba($color, 0.2);
    }
    @include backdrop-blur($background);
    color: $color;
  }
  &.tc-header__sticky {
    position: sticky;
    padding: 0 5vw;
    overflow: hidden;
  }
  &.tc-header__fixed {
    position: fixed;
    right: 0;
    left: 0;
    padding: 0 5vw {
      top: env(safe-area-inset-top);
    }
  }
  &.tc-header__floating {
    position: fixed;
    right: 0;
    left: 0;
    margin: 0 10vw;
    padding: 0 20px;
    border-radius: $border-radius;
  }

  .tc-header--sep {
    flex-grow: 1;
  }

  .tc-header--head {
    display: inherit;
    justify-content: center;
    align-items: center;
    max-width: 100%;

    .tc-header--backButton {
      cursor: pointer;
      margin-right: 20px;
      color: $primary;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      i {
        margin-right: 5px;
      }
    }
    .tc-header--pre {
      margin-right: 10px;
      margin-left: calc(-5vw + 10px);
    }

    .tc-header--title__prestyled {
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 18px;
    }
  }
  .tc-header--items {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      animation: appear 0.1s linear 0.2s both;
    }
  }
  .tc-header--items__overflow {
    display: flex;
    overflow: auto;

    svg {
      path {
        opacity: 0.8;
        transition: all 0.5s cubic-bezier(0.55, 1.93, 0.53, 0.59);
      }
    }
  }

  .tc-overflow-items {
    right: 0;

    user-select: none;
    box-shadow: $shadow;
    border-radius: 0px 0px $border-radius $border-radius;
    overflow: auto;
    .tc-overflow-items--container {
      max-height: 0vh;
      transition: 0.5s ease-in-out;
      transform: translateY(-50px);
      padding: 0px;
      overflow: hidden;
      [tc-header-line] {
        transition: 0.4s ease-in-out;
        padding: 0;
        margin: 0;
      }
      text-align: center;
      opacity: 0;
    }
    &.tc-overflow-items__visible {
      .tc-overflow-items--container {
        opacity: 1;
        padding-bottom: 20px;
        padding-top: 10px;
        max-height: calc(100vh - 80px);
        transform: translateY(0px);
        overflow: auto;
        [tc-header-line]:not(:first-child) {
          margin-top: 10px;
          padding-top: 10px;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            opacity: 0.4;
            border-radius: 5px;
            background: currentColor;
          }
        }
      }
    }

    &.tc-header__sticky {
      position: absolute;
      padding: 0 5vw;
      left: 0;
    }
    &.tc-header__fixed {
      position: fixed;
      left: 0;
      padding: 0 5vw;
    }
    &.tc-header__floating {
      position: fixed;
      margin-top: 10px;
      padding: 0 20px;
      left: 0;
      border-radius: $border-radius;
    }

    &.tc-header__dark {
      background: $background_dark;
      color: $color_dark;
    }
    &.tc-header__light {
      background: $background;
      color: $color;
    }

    @include custom-scrollbar__dark();
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>