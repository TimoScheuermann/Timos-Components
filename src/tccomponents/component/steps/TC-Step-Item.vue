<template>
  <div class="tc-step-item" :class="classes" :style="styles">
    <div class="tc-step-item--indicator">
      <tf-icon v-if="icon" :icon="icon" />
      <div class="number" v-else>{{ position + 1 }}</div>
    </div>
    <div class="tc-step-item--content">
      <div class="tc-step-item--title">{{ title }}</div>
      <transition name="fade">
        <div v-if="active" class="tc-step-item--description">
          {{ description }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TFIcon from '../../fundamental/icon/TF-Icon.vue';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCStepItem extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() description!: string;
  @Prop() icon!: string;

  get current() {
    return this.$parent.$props.current;
  }

  get isRow(): boolean {
    return this.$parent.$props.direction.toLowerCase() !== 'column';
  }

  get isDark(): boolean {
    return this.$parent.$props.dark || this.$store.getters.dark;
  }

  get position() {
    const slot = this.$parent.$slots.default;
    if (!slot) return -1;
    return slot.indexOf(this.$vnode);
  }

  get active(): boolean {
    return this.current === this.position;
  }

  get next(): boolean {
    return this.current === this.position - 1;
  }

  get done(): boolean {
    return this.current > this.position;
  }

  get waiting(): boolean {
    return this.current < this.position - 1;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-step-item__isRow': this.isRow,
      'tc-step-item__isColumn': !this.isRow,
      'tc-step-item__active': this.active,
      'tc-step-item__next': this.next,
      'tc-step-item__done': this.done,
      'tc-step-item__waiting': this.waiting
    };
  }
  get styles(): string {
    return `--tc-step-item__indicator-background: ${this.getChosenBackground(
      this.isDark ? 'backgroundDark' : 'background'
    )};--tc-step-item__inactive-color: ${this.getChosenColor(
      this.isDark ? 'colorDark' : 'color'
    )};`;
  }
}
</script>
<style lang="scss" scoped>
.tc-step-item {
  $indicator: 35px;

  position: relative;
  &::before {
    z-index: 1;
    content: '';
    position: absolute;
    height: 3px;
    transition: all 1s ease-in-out;
    top: 27.5px;
    left: 50%;
    width: 100%;
    max-width: 0%;
    background: $success;
    transform: translateY(-50%);
  }

  &.tc-step-item__done {
    .tc-step-item--indicator {
      border: #{$indicator / 2} solid $success;
      color: #fff;
    }
    .tc-step-item--title {
      color: $success;
    }
    &.tc-step-item__isRow:not(:last-child)::before {
      max-width: 100%;
    }
  }

  &.tc-step-item__active {
    .tc-step-item--indicator {
      border: 2px solid $primary;
    }
    .tc-step-item--title,
    .tc-step-item--indicator {
      color: $primary;
    }
  }

  &.tc-step-item__next,
  &.tc-step-item__waiting {
    .tc-step-item--indicator {
      color: rgba(var(--tc-step-item__inactive-color), 0.5);
      border: 2px solid currentColor;
    }
  }

  .tc-step-item--indicator {
    margin: 10px 0;
    width: $indicator;
    height: $indicator;
    border-radius: $indicator;
    background: rgba(var(--tc-step-item__indicator-background), 1);
    box-sizing: border-box;
    display: grid;
    place-content: center;
    transition: all 0.3s ease-in-out;
    z-index: 2;

    .number {
      font-weight: bold;
    }
  }
  &.tc-step-item__isColumn .tc-step-item--content {
    align-items: flex-start;
  }

  .tc-step-item--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .tc-step-item--title {
      font-weight: 500;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0px;
}
</style>
