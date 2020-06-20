<template>
  <div class="tc-badge">
    <div v-if="value || showEmpty" class="tc-badge--badge" :class="badgeClass">
      {{ text }}
    </div>
    <slot />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCBadge extends Vue {
  @Prop() value!: number | string;
  @Prop() max!: number;
  @Prop() tccolor!: string;
  @Prop({ default: false }) showEmpty!: boolean;
  @Prop({ default: "corner" }) position!: string;

  public tccolors: string[] = ["primary", "error", "alarm", "success"];

  get text(): string | number {
    if (typeof +this.value === "number") {
      if (this.max) {
        if (+this.value > this.max) return this.max + "+";
      }
    }
    return this.value;
  }

  get badgeClass(): any {
    const classes: any = {};
    if (!this.tccolor || !this.tccolors.includes(this.tccolor.toLowerCase())) {
      classes["tc-badge__error"] = true;
    } else {
      classes[`tc-badge__${this.tccolor.toLowerCase()}`] = true;
    }
    if (this.position === "behind") {
      classes["tc-badge__behind"] = true;
    } else {
      classes["tc-badge__corner"] = true;
    }
    return classes;
  }
}
</script>
<style lang="scss" scoped>
.tc-badge {
  position: relative;
  display: inline-block;

  .tc-badge--badge {
    position: absolute;
    z-index: 10;
    font-size: 12px;
    color: #fff;
    $scale: 20px;
    height: $scale;
    padding: 0px #{$scale / 3};
    min-width: #{$scale / 3};
    border-radius: $scale;
    line-height: $scale;
    text-align: center;
    &.tc-badge__corner {
      top: #{$scale / 2};
      right: #{$scale / 3 * 2};
      transform: translate(100%, -75%);
    }
    &.tc-badge__behind {
      right: -5px;
      top: 50%;
      transform: translate(100%, -50%);
    }

    &.tc-badge__primary {
      background: $primary;
    }
    &.tc-badge__error {
      background: $error;
    }
    &.tc-badge__alarm {
      background: $alarm;
    }
    &.tc-badge__success {
      background: $success;
    }
  }
}
</style>
