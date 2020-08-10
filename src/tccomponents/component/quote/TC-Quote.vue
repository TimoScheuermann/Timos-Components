<template>
  <div class="tc-quote" :style="styles" :class="{ 'tc-quote__dark': dark }">
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
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCQuote extends Mixins(TCComponent) {
  @Prop() title!: string;

  get styles() {
    return `--tc-quote__highlight: ${this.getChosenColor()}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-quote {
  color: $color;
  background: $container;
  &.tc-quote__dark {
    color: $color_dark;
    background: $container_dark;
  }
  border: {
    radius: 5px;
    left: 7px solid rgba(var(--tc-quote__highlight), 1);
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
        color: rgba(var(--tc-quote__highlight), 1);
      }
    }
    & > .tc-quote--text {
      text-align: left;
      &::before,
      &::after {
        content: '"';
        font-weight: bold;
        color: rgba(var(--tc-quote__highlight), 1);
      }
    }
  }
}
</style>
