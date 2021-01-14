<template>
  <div class="tc-action" :class="{ 'tc-action__dark': dark }">
    <div class="action-toggle" @click.capture.stop="clicked(open)">
      <i class="ti-dots-vertical" />
    </div>
    <transition name="wrapper">
      <div class="actions-wrapper" :key="uuid" v-if="this.open">
        <slot :dark="true" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import TCComponent from '@/tccomponents/TC-Component.mixin';
import { Component, Mixins } from 'vue-property-decorator';
import TCEventBus from '@/tccomponents/TC-EventBus';

@Component
export default class TCAction extends Mixins(TCComponent) {
  public open = false;

  mounted() {
    this.$on('close', () => (this.open = false));
    TCEventBus.$on('close-actions', () => (this.open = false));
    window.addEventListener('click', this.clickListener);
  }

  beforeDestroy() {
    window.removeEventListener('click', this.clickListener);
  }

  public clickListener(): void {
    this.open = false;
  }

  public clicked(wasOpened: boolean) {
    TCEventBus.$emit('close-actions');
    this.open = !wasOpened;
  }
}
</script>

<style lang="scss" scoped>
.tc-action {
  user-select: none;
  color: $color;

  .action-toggle {
    display: grid;
    place-content: center;
    height: 28px;
    width: 28px;
    border-radius: 28px;
    background: $container;

    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover,
    &:active {
      filter: brightness(110%);
    }
  }
  width: fit-content;
  position: relative;
  z-index: 10;
  .actions-wrapper {
    position: absolute;
    z-index: 11;
    right: 40px;
    bottom: 0px;
    border-radius: $border-radius;
    overflow: hidden;
    @include backdrop-blur($paragraph);
  }

  &.tc-action__dark {
    color: $color_dark;
    .action-toggle {
      background: $container_dark;
    }
    .actions-wrapper {
      @include backdrop-blur($container_dark);
    }
  }
}
.wrapper-enter-active,
.wrapper-leave-active {
  transition: 0.3s ease-in-out;
}
.wrapper-enter,
.wrapper-leave-to {
  opacity: 0;
  transform-origin: bottom right;
  transform: scale(0);
}
</style>
