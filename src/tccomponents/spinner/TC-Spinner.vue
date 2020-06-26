<template>
  <div
    class="tc-spinner"
    :class="{ 'tc-spinner__dark': dark }"
    :style="styleAttr"
  >
    <div v-for="(i, index) in Array(10)" :key="'s_' + index" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCSpinner extends Mixins(TCComponent) {
  @Prop({ default: 30 }) size!: number;

  get styleAttr() {
    return {
      width: this.size + "px",
      height: this.size / 2 + "px",
      "padding-top": this.size / 2 + "px"
    };
  }
}
</script>
<style lang="scss" scoped>
.tc-spinner {
  position: relative;
  display: inline-block;
  &.tc-spinner__dark {
    color: #fff;
  }
  div {
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      background: currentColor;
    }

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        transform: rotate(#{36 * $i}deg);
        animation: tc-spinner--anim 1s ease-in-out #{$i / 10}s infinite;
      }
    }
  }
  @keyframes tc-spinner--anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}
</style>
