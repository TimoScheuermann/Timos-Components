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
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCQuote extends Mixins(TCComponent) {
  @Prop() title!: string;
}
</script>
<style lang="scss" scoped>
.tc-quote {
  background: $paragraph;
  &.tc-quote__dark {
    background: lighten($color, 20%);
    color: #fff;
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
