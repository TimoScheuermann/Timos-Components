<template>
  <div class="tc-headline" :class="{ 'tc-headline__dark': dark }">
    <div class="tc-headline--title__prestyled" v-if="title">
      <i v-if="icon" :class="'ti-' + icon"></i>{{ title }}
    </div>
    <div class="tc-headline--title" v-else>
      <slot name="title" />
    </div>
    <div class="tc-headline--items">
      <slot />
    </div>
    <div class="tc-headline--bar"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCHeadline extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() icon!: string;
}
</script>

<style lang="scss" scoped>
.tc-headline {
  display: flex;
  padding: 0 20px;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  color: $color;
  &__dark {
    color: #fff;
  }
  .tc-headline--bar {
    position: absolute;
    bottom: -5px;
    right: 0;
    left: 0;
    height: 1px;
    background: currentColor;
    opacity: 0.3;
  }
  .tc-headline--title__prestyled {
    font-weight: bold;
    margin-left: 3px;
    font-size: 18px;
    white-space: nowrap;
    opacity: 0.8;
    i {
      color: $primary;
      margin-right: 10px;
    }
  }
  &:hover {
    .tc-headline--title__prestyled {
      opacity: 1;
    }
  }
  .tc-headline--items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: inherit;
  }
}
</style>
