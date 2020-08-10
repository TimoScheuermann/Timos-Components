<template>
  <div
    class="tc-button"
    :class="classes"
    :style="styles"
    @click="handleClickLocal"
  >
    <div v-if="icon && icon.length > 0" class="tc-button--icon">
      <tf-icon :icon="icon" />
    </div>
    <div class="tc-button--name" v-if="name">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCButton extends Mixins(TCComponent, TCURLComponent) {
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop({ default: 'left' }) iconPosition!: string;
  @Prop() disabled!: boolean;
  @Prop() variant!: string;

  public variants: string[] = ['opaque', 'border', 'filled'];

  public handleClickLocal(e: MouseEvent): void {
    if (!this.disabled) {
      this.handleClick(e);
    } else {
      e.preventDefault();
    }
  }

  get classes(): Record<string, unknown> {
    const classes: Record<string, unknown> = {
      'tc-button__withoutName': this.icon && !name,
      'tc-button__disabled': this.disabled
    };

    if (!this.variant || !this.variants.includes(this.variant.toLowerCase())) {
      classes['tc-button__border'] = true;
    } else {
      classes['tc-button__' + this.variant.toLowerCase()] = true;
    }
    if (this.iconPosition === 'right') {
      classes['tc-button__icon-right'] = true;
    }

    return classes;
  }

  get styles(): string {
    return `--tc-button__color: ${this.getChosenColor(
      'colorDark'
    )}; --tc-button__background: ${this.getChosenBackground('primary')};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-button {
  display: inline-flex;

  &.tc-button__icon-right {
    flex-direction: row-reverse;
  }

  justify-content: center;
  align-items: center;
  margin: 3px;
  height: 20px;
  line-height: 20px;
  padding: 5px 9px;
  border-radius: $border-radius;
  user-select: none;
  white-space: nowrap;
  transition: 0.2s ease-in-out;

  &.tc-button__withoutName {
    padding: 5px 4px;
  }

  .tc-button--name,
  .tc-button--icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 0 1px;
    z-index: 1;
    position: relative;
  }

  .tc-button--icon {
    width: 20px;
    position: relative;
    i {
      transform: scale(1.3);
      font-size: 12px;
    }
  }

  &.tc-button__opaque {
    position: relative;
    margin: 5px;
    border: 1px solid transparent;
    color: rgba(var(--tc-button__background), 1);
    background: rgba(var(--tc-button__background), 0.3);
  }

  &.tc-button__filled {
    color: rgba(var(--tc-button__color), 1);
    border: 1px solid rgba(var(--tc-button__background), 1);
    background: rgba(var(--tc-button__background), 1);
  }

  &.tc-button__border {
    border: 1px solid rgba(var(--tc-button__background), 1);
    color: rgba(var(--tc-button__background), 1);
  }

  &.tc-button__disabled {
    filter: saturate(25%);
    cursor: not-allowed;
  }

  &:not(.tc-button__disabled) {
    cursor: pointer;
    &:active {
      filter: brightness(120%);
    }
    &:hover {
      &.tc-button__filled {
        box-shadow: 2px 4px 8px rgba(var(--tc-button__background), 0.3);
      }
      &.tc-button__border {
        color: rgba(var(--tc-button__color), 1);
        background: rgba(var(--tc-button__background), 1);
      }
      &.tc-button__opaque {
        color: rgba(var(--tc-button__color), 1);
        background: rgba(var(--tc-button__background), 0.75);
      }
    }
  }
}
</style>
