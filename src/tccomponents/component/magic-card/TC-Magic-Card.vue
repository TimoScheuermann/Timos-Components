<template>
  <div class="tc-magic-card" :style="styles" :ref="uuid_">
    <div
      class="tc-magic-card--thumbnail"
      @click="expand"
      :class="{
        'tc-magic-card__expanded': this.expanded
      }"
    >
      <img :src="src" :alt="title + ' preview'" />
      <div class="description">
        <div class="subtitle">{{ subtitle }}</div>
        <div class="title">{{ title }}</div>
      </div>
    </div>
    <div
      class="tc-magic-card--background"
      v-if="expanded"
      @click.stop="expanded = false"
    />

    <div
      class="tc-magic-card--card"
      @click.stop=""
      :class="classes"
      :ref="'c_' + uuid_"
    >
      <div class="tc-magic-card--thumbnail">
        <img :src="src" :alt="title + ' preview'" />
        <div class="description">
          <div class="subtitle">{{ subtitle }}</div>
          <div class="title">{{ title }}</div>
        </div>
        <i class="ti-cross-inverted" @click="expanded = false" />
      </div>

      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCMagicCard extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() src!: string;
  @Prop({ default: 200 }) maxHeight!: number;

  public expanded = false;

  public expand() {
    const expanded: Element = this.$refs['c_' + this.uuid_] as Element;

    if (this.expanded) {
      this.expanded = false;
      return;
    }

    expanded.removeAttribute('style');
    const elem: Element = this.$refs[this.uuid_] as Element;
    const constraints = elem.getBoundingClientRect().toJSON();
    const mapped = [
      '--top:' + constraints.top + 'px',
      '--left:' + constraints.left + 'px',
      '--width:' + constraints.width + 'px',
      '--height:' + constraints.height + 'px'
    ];
    const sidebar: null | Element = document.querySelectorAll(
      '.tl-sidebar--sidebar'
    )[0];
    if (sidebar) {
      mapped.push(
        '--sidebarWidth:' + sidebar.getBoundingClientRect().width + 'px'
      );
    } else {
      mapped.push('--sidebarWidth:0px');
    }

    expanded.setAttribute('style', mapped.join(';'));

    setTimeout(() => {
      this.expanded = true;
    }, 100);
  }

  get styles(): string {
    return `--tc-magic-card__max-height: ${
      this.maxHeight
    }px;--tc-magic-card__color: ${this.getChosenColor(
      this.darkmode ? 'colorDark' : 'color'
    )};--tc-magic-card__background: ${this.getChosenBackground(
      this.darkmode ? 'backgroundDark' : 'background'
    )}`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-magic-card__expanded': this.expanded
    };
  }
}
</script>

<style lang="scss" scoped>
.tc-magic-card {
  position: relative;

  .tc-magic-card--thumbnail {
    user-select: none;
    cursor: pointer;
    border-radius: $border-radius;
    overflow: hidden;
    max-height: var(--tc-magic-card__max-height);
    position: relative;
    transition: opacity 0s ease-in-out 0.5s;

    &.tc-magic-card__expanded {
      transition: opacity 0.1s ease-in-out 0s;
      opacity: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: inherit;
      min-height: var(--tc-magic-card__max-height);
      object-position: center;
    }
    color: rgba(var(--tc-magic-card__color), 1);
    .description {
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;
      font-weight: 500;
      .subtitle {
        opacity: 0.8;
      }
      .title {
        font-size: 1.3em;
      }
    }
    i {
      position: absolute;
      right: 10px;
      font-size: 30px;
      top: 10px;
      opacity: 0.7;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }

  .tc-magic-card--background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(#000, 0.5);
  }

  .tc-magic-card--card {
    position: fixed;
    z-index: 1001;
    background: rgba(var(--tc-magic-card__background), 1);
    color: rgba(var(--tc-magic-card__color), 1);

    @include custom-scrollbar__light();

    top: var(--top);
    left: var(--left);
    width: 100vw;
    max-height: var(--height);
    max-width: var(--width);
    transform: scale(0);
    border-radius: $border-radius;
    overflow: auto;

    transition: all 0.3s ease-in-out 0.2s, transform 0s linear 0.5s,
      margin-top 0s linear 0.5s, margin-left 0s linear 0.5s,
      max-height 0.2s ease-in-out;

    &.tc-magic-card__expanded {
      transition: all 0.3s ease-in-out 0s, transform 0s linear 0s,
        max-height 0.2s ease-in-out 0.3s, margin-top 0s linear 0s,
        margin-left 0s linear 0s;
      @media #{$isDesktop} {
        top: 80px;
        left: 0;
        left: calc(var(--sidebarWidth) + 10vw);
        max-height: 80vh;
        max-width: calc(80vw - var(--sidebarWidth));

        transform: scale(1);
      }
      @media #{$isMobile} {
        // border-radius: $border-radius $border-radius 0px 0px;
        top: calc(70px + env(safe-area-inset-top));
        transform: scale(1);
        left: env(safe-area-inset-left);
        max-height: calc(
          100% - 70px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
        );
        max-width: calc(
          100% - env(safe-area-inset-left) - env(safe-area-inset-right)
        );
      }
      box-shadow: $shadow;
    }
  }
}
</style>
