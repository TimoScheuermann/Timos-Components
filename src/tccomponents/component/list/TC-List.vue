<template>
  <div
    class="tc-list"
    :class="{ 'tc-list__dark': dark, 'tc-list__frosted': frosted }"
    :style="{ color: tccolor_ }"
  >
    <div class="tc-list--title" v-if="title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCList extends Mixins(TCComponent) {
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped>
.tc-list {
  padding: 5px;
  border-radius: $border-radius;
  background: $paragraph;
  color: $color;
  &.tc-list__frosted {
    @include backdrop-blur($paragraph);
  }
  &.tc-list__dark {
    color: $color_dark;
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
</style>
