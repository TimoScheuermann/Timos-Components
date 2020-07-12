<template>
  <div class="tc-quote" :class="{ 'tc-quote__dark': dark }">
    <div class="tc-quote--content">
      <div v-if="title" class="tc-quote--title__prestyled">
        <i class="ti-quote-right"></i>
        <span>{{ title }}</span>
      </div>

      <slot class="tc-quote--title" v-else name="header" />
      <div class="tc-quote--text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '../TC-Component.mixin';

@Component
export default class TCQuote extends Mixins(TCComponent) {
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped>
.tc-quote {
  color: $color;
  background: darken($background, 5%);
  &.tc-quote__dark {
    color: $color_dark;
    background: lighten($background_dark, 5%);
  }
  border: {
    radius: 5px;
    left: 7px solid $primary;
  }
  padding: 15px;
  height: fit-content;
  margin: 10px 0;
  & > .tc-quote--content {
    & > .tc-quote--title__prestyled {
      font-weight: bold;
      margin-bottom: 10px;
      text-align: left;
      i {
        margin-right: 10px;
        color: $primary;
      }
    }
    & > .tc-quote--text {
      text-align: left;
      &::before,
      &::after {
        content: '"';
        font-weight: bold;
        color: $primary;
      }
    }
  }
}
</style>
