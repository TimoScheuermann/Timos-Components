<template>
  <div class="tc-revealer" :style="styles">
    <div class="tc-revealer--head" @click="expanded = !expanded">
      <div class="tc-revealer--head__content">
        <tf-icon :icon="icon" v-if="icon" />
        <div class="head--title__prestyled" v-if="title">
          {{ title }}
        </div>
        <slot v-else name="head" />
      </div>
      <div class="tc-revealer--indicator" :class="classes">
        <i class="ti-chevron-up" />
      </div>
    </div>

    <transition name="fade">
      <div class="tc-revealer--content" v-if="expanded">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCRevealer extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() highlight!: string;

  public expanded = false;

  get styles(): string {
    return `--tc-revealer__color:${this.getChosenColor(
      this.darkmode ? 'colorDark' : 'color'
    )};--tc-revealer__background: ${this.getChosenBackground(
      this.darkmode ? 'containerDark' : 'paragraph'
    )};--tc-revealer__highlight: ${this.convertToRGB(
      this.getHEX(this.highlight) || this.highlight
    )};`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-revealer__expanded': this.expanded
    };
  }
}
</script>

<style lang="scss" scoped>
.tc-revealer {
  margin: 30px 0;
  .tc-revealer--head {
    background: rgba(var(--tc-revealer__background), 1);
    color: rgba(var(--tc-revealer__color), 1);
    border-radius: $border-radius;
    position: relative;
    z-index: 1;
    box-shadow: $shadow-light;
    cursor: pointer;
    padding: 10px 20px;
    &:active {
      filter: brightness(110%);
    }

    .tc-revealer--head__content {
      .head--title__prestyled {
        display: inline-block;
        font-weight: bold;
        user-select: none;
      }
      .tf-icon {
        margin-right: 10px;
      }
    }

    .tc-revealer--indicator {
      position: absolute;
      box-shadow: $shadow;
      $scale: 30px;

      width: $scale;
      height: $scale;
      border-radius: $scale;
      top: 50%;
      right: 0;
      transform: translate(50%, -50%);
      background: rgba(var(--tc-revealer__highlight), 1);
      color: #fff;
      display: grid;
      place-content: center;
      i {
        transition: 0.4s ease-in-out;
      }
      &.tc-revealer__expanded i {
        transform: rotate(180deg);
      }
    }
  }
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0px;
}
</style>
