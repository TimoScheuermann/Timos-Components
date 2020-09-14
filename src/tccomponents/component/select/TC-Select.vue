<template>
  <div class="tc-select" :class="classes" :style="styles" :id="uuid">
    <div
      class="tc-select-container"
      @click.capture="open"
      :id="uuid + 'c'"
      ref="select-cont"
      :class="{ 'tc-select-container__has-title': !onlyIcon && title }"
    >
      <div class="tc-select-container--icon" @click.stop>
        <i :class="'ti-' + icon" />
      </div>
      <div class="tc-select-container--title" v-if="!onlyIcon">
        {{ title }}
      </div>
    </div>
    <div
      class="tc-select-item-container"
      :class="{
        'tc-select-item-container__opened': opened
      }"
      :style="itemContainerStyles"
      ref="item-container"
      :id="uuid + 'i'"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

interface TCSelected {
  uuid: string;
  title: string;
  state: boolean;
}

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCSelect extends Mixins(TCComponent) {
  @Prop() frosted!: boolean;
  @Prop({ default: 'list' }) icon!: string;
  @Prop({ default: false }) multiple!: boolean;
  @Prop({ default: 'Select one' }) placeholder!: string;
  @Prop({ default: 'container' }) variant!: string;
  @Prop() disabled!: boolean;
  @Prop({ default: true }) showSelection!: boolean;
  @Prop({ default: false }) onlyIcon!: boolean;

  public selected: TCSelected[] = [];
  public opened = false;
  public itemContainerStyles = '';

  mounted() {
    this.$children.forEach(el => el.$emit('registerItem'));
    this.$on('itemSelect', this.handleSelect);
  }

  beforeMount() {
    document.querySelectorAll('.tl-sidebar--content').forEach(elem => {
      elem.addEventListener('scroll', this.reposition, { passive: false });
    });
    window.addEventListener('scroll', this.reposition, { passive: false });
    window.addEventListener('resize', this.reposition);
    window.addEventListener('click', this.clicked);
  }

  beforeDestroy() {
    this.selected = [];
    document.querySelectorAll('.tl-sidebar--content').forEach(elem => {
      elem.removeEventListener('scroll', this.reposition);
    });
    window.removeEventListener('scroll', this.reposition);
    window.removeEventListener('resize', this.reposition);
    window.removeEventListener('click', this.clicked);
  }

  get title(): string {
    if (this.showSelection) {
      const selection = this.selected
        .filter(x => x.state)
        .map(x => x.title)
        .join(', ');
      if (selection.length > 0) return selection;
    }
    return this.placeholder;
  }

  get selectedVariant(): string {
    switch (this.variant.toLowerCase()) {
      case 'filled':
        return 'filled';
      case 'opaque':
        return 'opaque';
      case 'border':
        return 'border';
      default:
        return 'container';
    }
  }

  get classes(): Record<string, boolean> {
    const classes: Record<string, boolean> = {
      'tc-select__dark': this.darkmode,
      'tc-select__frosted': this.frosted,
      'tc-select__disabled': this.disabled
    };
    classes['tc-select__' + this.selectedVariant] = true;
    return classes;
  }

  get styles(): string {
    return `--tc-select__color: ${this.getChosenColor(
      'colorDark'
    )}; --tc-select__background: ${this.getChosenBackground('primary')};`;
  }

  public clicked(e: MouseEvent): void {
    if (e.target) {
      const parent = (e.target as HTMLElement).parentElement;
      if (parent) {
        const id: string = parent.id;
        if (!id.startsWith(this.uuid || '')) {
          this.opened = false;
        }
      }
    }
  }

  public handleSelect(selected: TCSelected) {
    if (!this.multiple) {
      this.opened = false;
      this.$children.forEach(el => el.$emit('deselectExcept', selected.uuid));
    }
    let matched = false;
    this.selected = this.selected.map(x => {
      if (x.uuid === selected.uuid) {
        matched = true;
        return selected;
      }
      if (!this.multiple) {
        x.state = false;
      }
      return x;
    });
    if (!matched) this.selected.push(selected);
    this.$emit(
      'selectedItems',
      this.selected.filter(x => x.state).map(x => x.title)
    );
  }

  public reposition(): void {
    this.itemContainerStyles = '';
    const container: HTMLElement = this.$refs['select-cont'] as HTMLElement;
    const rect = container.getBoundingClientRect();
    const rectBody = document.body.getBoundingClientRect();
    const aboveTopHalf = rectBody.height / 2 > rect.top - rect.height / 2;
    const aboveRightHalf = rectBody.width / 2 > rect.left - rect.width / 2;

    let x = '0px';
    let y = '0px';
    let moveY = '0%';
    let moveX = '0%';

    if (aboveRightHalf) {
      y = container.offsetLeft + 'px';
    } else {
      y = container.offsetLeft + container.offsetWidth + 'px';
      moveX = '-100%';
    }
    if (aboveTopHalf) {
      x = container.offsetTop + container.offsetHeight + 3 + 'px';
    } else {
      x = container.offsetTop - 3 + 'px';
      moveY = '-100%';
    }

    this.itemContainerStyles = [
      '--tc-select__x: ' + x,
      '--tc-select__y: ' + y,
      '--tc-select__mY: ' + moveY,
      '--tc-select__mX: ' + moveX
    ].join(';');
  }

  public open() {
    this.opened = !this.opened;
    if (this.opened) this.reposition();
  }
}
</script>

<style lang="scss" scoped>
@mixin custom-select {
  display: inline-flex;
  margin: 3px;
  .tc-select-container {
    padding: 5px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .tc-select-container--icon {
      width: 16px;
      height: 16px;
    }
    &.tc-select-container__has-title {
      border-radius: $border-radius;
      .tc-select-container--icon {
        width: unset;
        height: unset;
        margin-right: 5px;
        padding-right: 5px;
        border-right: 1px solid currentColor;
      }
    }
  }
}

.tc-select {
  user-select: none;
  position: relative;
  &.tc-select__container .tc-select-container {
    @include tc-container__light();
  }
  &.tc-select__frosted.tc-select__container .tc-select-container {
    @include backdrop-blur(darken($paragraph, 10%));
    color: #fff;
  }
  &.tc-select__container.tc-select__dark .tc-select-container {
    @include tc-container__dark();
  }
  &.tc-select__frosted.tc-select__darktc-select__container
    .tc-select-container {
    @include backdrop-blur(lighten($color, 10%));
  }

  &.tc-select__container .tc-select-container {
    .tc-select-container--icon {
      margin-right: 5px;
      padding-right: 5px;
      border-right: 1px solid currentColor;
    }
  }

  .tc-select-container {
    .tc-select-container--title {
      max-width: 200px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  &.tc-select__opaque {
    @include custom-select();
    .tc-select-container {
      margin: 5px;
      border: 1px solid transparent;
      color: rgba(var(--tc-select__background), 1);
      background: rgba(var(--tc-select__background), 0.3);
    }
  }

  &.tc-select__filled {
    @include custom-select();
    .tc-select-container {
      color: rgba(var(--tc-select__color), 1);
      border: 1px solid rgba(var(--tc-select__background), 1);
      background: rgba(var(--tc-select__background), 1);
    }
  }

  &.tc-select__border {
    @include custom-select();
    .tc-select-container {
      border: 1px solid rgba(var(--tc-select__background), 1);
      color: rgba(var(--tc-select__background), 1);
    }
  }

  &:not(.tc-select__disabled) {
    cursor: pointer;
    &:active .tc-select-container {
      filter: brightness(120%);
    }
    &:hover {
      &.tc-select__filled .tc-select-container {
        box-shadow: 2px 4px 8px rgba(var(--tc-select__background), 0.3);
      }
      &.tc-select__border .tc-select-container {
        color: rgba(var(--tc-select__color), 1);
        background: rgba(var(--tc-select__background), 1);
      }
      &.tc-select__opaque .tc-select-container {
        color: rgba(var(--tc-select__color), 1);
        background: rgba(var(--tc-select__background), 0.75);
      }
    }
  }
  & .tc-select-item-container {
    @include backdrop-blur(darken($container, 20%));
    @include custom-scrollbar__light();
    color: $color;
  }
  &.tc-select__dark .tc-select-item-container {
    @include backdrop-blur(lighten($container_dark, 20%));
    @include custom-scrollbar__dark();
    color: $color_dark;
  }

  .tc-select-item-container {
    position: absolute;
    z-index: 100;
    top: var(--tc-select__x);
    left: var(--tc-select__y);
    max-height: 0px;
    border-radius: $border-radius;
    transform: translate(var(--tc-select__mX), var(--tc-select__mY));
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;
    &.tc-select-item-container__opened {
      max-height: 200px;
      overflow: auto;
      transform: translate(var(--tc-select__mX), var(--tc-select__mY));
    }
  }
}
</style>
