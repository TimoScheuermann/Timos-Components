<template>
  <div
    class="tc-step-item"
    :tcid="uuid"
    :key="key"
    :class="'tc-step-item__' + getState()"
  >
    <div class="tc-step-item--indicator">
      <tf-icon v-if="icon" :icon="icon" />
      <div v-else>2</div>
    </div>
    <div class="tc-step-item--title">{{ title }}</div>
    <div class="tc-step-item--description">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TFIcon from '../../fundamental/icon/TF-Icon.vue';
import TCComponent from '../../TC-Component.mixin';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCStepItem extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() description!: string;
  @Prop() icon!: string;

  public key = 'nm';

  mounted() {
    console.log('MOUNT');
    this.key = 'mo';
  }

  getState(): string {
    const elem: HTMLElement | null = document.querySelector(
      "[tcid='" + this.uuid + "']"
    );

    console.log('state', elem);
    if (elem) {
      console.log('elem exsits');
      const parent: (Node & ParentNode) | null = elem.parentNode;
      if (parent) {
        console.log('parent exists');
        const current = +((parent as HTMLElement).getAttribute('current') || 0);
        const index = Array.prototype.indexOf.call(parent.children, elem);
        console.log({ c: current, i: index });
        if (current === index) {
          return 'active';
        }
        if (current > index) {
          return 'completed';
        }
      }
    }
    return 'waiting';
  }
}
</script>

<style lang="scss" scoped>
.tc-step-item {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 1;

  &__active {
    opacity: 1;
    .tc-step-item--indicator {
      background: $primary;
      border-color: $primary !important;
      color: #fff;
    }
    &::before {
      background: $success !important;
    }
  }
  &__completed {
    opacity: 1;
    color: $success;
    .tc-step-item--indicator {
      border-color: $success;
      background: $background;
    }
  }
  &__waiting {
    .tc-step-item--indicator {
      background: $background;
    }
  }

  .tc-step-item--indicator {
    $scale: 26px;
    height: $scale;
    border-radius: $scale;
    z-index: 1;
    i {
      font-size: 14px;
    }
    width: $scale;
    line-height: $scale;
    font-weight: bold;
    text-align: center;
    border: 2px solid;
  }
  .tc-step-item--title {
    margin-top: 5px;
    font-weight: 550;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: currentColor;
    height: 2px;
    top: 13px;
    width: calc(50% - 10px);
    border-radius: 10px;
    z-index: 0;
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
}
</style>
