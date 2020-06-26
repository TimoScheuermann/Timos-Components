<template>
  <div
    class="tc-steps"
    :style="{ gridTemplateColumns: 'repeat(' + data.length + ', 1fr)' }"
  >
    <div
      class="tc-steps--step"
      v-for="(s, i) in data"
      :key="s.step"
      :class="{
        'tc-steps--step__checked': i < step,
        'tc-steps--step__current': i === step
      }"
    >
      <transition-group name="indi" tag="div" class="tc-step--indicator">
        <i v-if="s.icon" key="ci" :class="'ti-' + s.icon" />
        <i v-else-if="i < step" key="di" class="ti-checkmark" />
        <span v-else key="no">{{ i + 1 }}</span>
      </transition-group>
      <div class="tc-step--title">{{ s.step }}</div>
      <div class="tc-step--description">{{ s.description }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCSteps extends Mixins(TCComponent) {
  @Prop({ default: 0 }) step!: number;

  public steps: string[] = [
    "Validation",
    "Authentication",
    "Confirmation",
    "Welcome Home"
  ];
  public descriptions: string[] = ["", "", "", "You're all set"];
  public icons: (string | undefined)[] = [
    undefined,
    undefined,
    undefined,
    "database"
  ];

  public data: {
    step: string;
    description: string;
    icon: string | undefined;
  }[] = [];

  mounted() {
    this.generateData();
  }

  private generateData(): void {
    this.data = this.steps.map((x, i) => {
      return {
        step: x,
        description: this.descriptions[i],
        icon: this.icons[i]
      };
    });
  }
}
</script>
<style lang="scss" scoped>
.indi-item {
  position: absolute;
}
.indi-enter-active,
.indi-leave-active {
  position: absolute;
  transition: all 1s;
}
.indi-enter,
.indi-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.tc-steps {
  user-select: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 0;

  .tc-steps--step {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    opacity: 0.5;

    transition: opacity 0.3s ease-in-out;

    &.tc-steps--step__checked,
    &.tc-steps--step__current {
      opacity: 1;
    }
    &.tc-steps--step__checked {
      color: $success;
    }
    &.tc-steps--step__current {
      .tc-step--indicator {
        color: $primary;
        background: $primary;
        i,
        span {
          color: #fff;
        }
      }
      &::before {
        color: $success;
      }
      &::after {
        opacity: 0.5;
      }
    }

    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      background: currentColor;
      height: 2px;
      top: 13px;
      width: calc(50% - 10px);
      border-radius: 10px;
    }

    &:nth-child(1) {
      padding-left: 0;
      &::before {
        display: none;
      }
    }
    &:last-child {
      padding-right: 0;
      &::after {
        display: none;
      }
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }

    .tc-step--indicator {
      $scale: 26px;
      width: $scale;
      height: $scale;
      border-radius: $scale;
      border: 2px solid currentColor;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $background;
      z-index: 10;
      font-weight: bold;
      position: relative;
      overflow: hidden;
      transition: 0.2s ease-in-out;
    }
    .tc-step--title,
    .tc-step--description {
      margin-top: 5px;
    }
    .tc-step--title {
      font-weight: bold;
    }
    .tc-step--description {
      color: $color;
      opacity: 0.9;
    }
  }
}
</style>
