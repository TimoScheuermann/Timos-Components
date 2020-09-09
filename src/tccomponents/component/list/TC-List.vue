<template>
  <div
    class="tc-list"
    :class="{ 'tc-list__dark': darkmode, 'tc-list__frosted': frosted }"
    :style="styles"
  >
    <div class="tc-list--title" v-if="title">
      {{ title }}
    </div>
    <transition-group v-if="transition" name="list-items">
      <slot />
    </transition-group>
    <slot v-else />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCList extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() transition!: boolean;

  get styles(): string {
    return `--tc-list__color: ${this.getChosenColor(
      this.darkmode ? 'colorDark' : 'color'
    )}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-list {
  padding: 5px;
  border-radius: $border-radius;
  background: $paragraph;
  color: rgba(var(--tc-list__color), 1);

  &.tc-list__frosted {
    @include backdrop-blur($paragraph);
  }
  &.tc-list__dark {
    background: $paragraph_dark;
    &.tc-list__frosted {
      @include backdrop-blur($paragraph_dark);
    }
  }
  .tc-list--title {
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
    padding: 10px {
      bottom: 0;
    }
  }
}

.list-item-move {
  transition: transform 0.5s;
}
.list-item-item {
  transition: all 0.5s;
}
.list-item-enter,
.list-item-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-item-leave-active {
  position: absolute;
}
</style>
