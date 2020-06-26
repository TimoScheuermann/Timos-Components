<template>
  <div class="tc-button" :class="getClasses()" @click="clicked($event)">
    <div v-if="icon && icon.length > 0" class="tc-button--icon">
      <i :class="'ti-' + icon" />
    </div>
    <div class="tc-button--name" v-if="name">
      {{ name }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCButton extends Mixins(TCComponent) {
  @Prop() to!: object;
  @Prop() href!: string;
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop({ default: "left" }) iconPosition!: string;
  @Prop() disabled!: boolean;
  @Prop() variant!: string;

  public variants: string[] = ["opaque", "border", "filled"];

  public getClasses(): any {
    const classes: any = {
      "tc-button__withoutName": this.icon && !name,
      "tc-button__disabled": this.disabled
    };

    classes["tc-button__" + this.tccolor_] = true;

    if (!this.variant || !this.variants.includes(this.variant.toLowerCase())) {
      classes["tc-button__border"] = true;
    } else {
      classes["tc-button__" + this.variant.toLowerCase()] = true;
    }
    if (this.iconPosition === "right") {
      classes["tc-button__icon-right"] = true;
    }

    return classes;
  }

  public clicked(event: Event): void {
    if (!this.disabled) {
      this.$emit("click", event);
      if (this.to) {
        this.$router.push(this.to);
      } else if (this.href) {
        window.open(this.href, "_blank");
      }
    }
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
  cursor: pointer;
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
    // color: $primary;
    border: 1px solid $primary;
    position: relative;
    &::before {
      transition: inherit;
      content: "";
      border-radius: 2px;
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      // background: $primary;
      opacity: 0.25;
    }

    @each $n, $c in $color_colors {
      &.tc-button__#{$n} {
        color: $c;
        border-color: $c;
        &::before {
          background: $c;
        }
      }
    }
  }
  &.tc-button__filled {
    color: #fff;
    border: 1px solid $primary;
    // background: $primary;

    @each $n, $c in $color_colors {
      &.tc-button__#{$n} {
        border-color: $c;
        background: $c;
      }
    }
  }
  &.tc-button__border {
    // color: $primary;
    border: 1px solid $primary;
    @each $n, $c in $color_colors {
      &.tc-button__#{$n} {
        border-color: $c;
        color: $c;
      }
    }
  }
  &.tc-button__disabled {
    color: $color;
    border-color: $color;
    opacity: 0.6;
    cursor: default;
    &.tc-button__opaque {
      &::before {
        background: $color;
      }
    }
    &.tc-button__filled {
      color: #fff;
      border-color: $color;
      background: $color;
    }
  }

  &:not(.tc-button__disabled) {
    &:active {
      filter: brightness(120%);
    }
    &:hover {
      &.tc-button__filled {
        // box-shadow: 2px 4px 8px rgba($primary, 0.3);
        @each $n, $c in $color_colors {
          &.tc-button__#{$n} {
            box-shadow: 2px 4px 8px rgba($c, 0.3);
          }
        }
      }
      &.tc-button__border {
        // background: $primary;
        color: #fff;
        @each $n, $c in $color_colors {
          &.tc-button__#{$n} {
            background: $c;
          }
        }
      }
      &.tc-button__opaque {
        color: #fff;
        &::before {
          opacity: 1;
        }
      }
    }
  }
}
</style>
