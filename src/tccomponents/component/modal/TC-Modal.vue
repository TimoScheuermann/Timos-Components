<template>
  <div>
    <div
      class="tc-modal-background"
      :class="{ show: opened, hide: !opened }"
      @click="close"
    />
    <div
      class="tc-modal"
      :class="{
        'tc-modal__dark': darkmode,
        'tc-modal__frosted': frosted,
        'tc-modal__opened': opened
      }"
      @click.prevent
    >
      <div
        class="tc-modal--head"
        :class="{ 'tc-modal--head__prestyled': !$slots.header }"
      >
        <div class="tc-modal--close" @click="close">
          <tf-icon icon="cross-inverted" />
        </div>
        <slot name="header" />
        <template v-if="!$slots.header && (title || subtitle)">
          <div class="tc-modal--title">{{ title }}</div>
          <div class="tc-modal--subtitle">{{ subtitle }}</div>
        </template>
      </div>

      <div
        class="tc-modal--content"
        :class="{ 'tc-modal--content__no-footer': !$slots.footer }"
      >
        <slot />
      </div>
      <div class="tc-modal--footer" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Mixins } from 'vue-property-decorator';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCModal extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() subtitle!: string;

  @Prop({ default: false }) value!: boolean;
  public opened: boolean = this.value;

  @Watch('value')
  public valueChanged() {
    this.opened = this.value;
    document.body.classList.remove('tc-modal--opened');
    if (this.opened) {
      document.body.classList.add('tc-modal--opened');
    }
  }

  public close() {
    this.opened = false;
    this.$emit('input', this.opened);
    this.$emit('close');
  }
}
</script>
<style lang="scss">
body.tc-modal--opened {
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
@mixin tc-modal($c, $bg) {
  color: $c;
  background: $bg;
  .tc-modal--head,
  .tc-modal--footer {
    @include backdrop-blur($bg);
  }

  &.tc-modal__frosted {
    @include backdrop-blur($bg);
  }
}

$time: 0.3s;
.tc-modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 1001;

  &.hide {
    transform: scale(0);
    opacity: 0;
    transition: opacity $time ease-in-out, 0s transform $time;
  }
  &.show {
    transform: scale(1);
    opacity: 0.2;
    transition: opacity $time ease-in-out, 0s transform 0s;
  }
}
.tc-modal {
  position: fixed;
  z-index: 1002;

  overflow: auto;
  transition: transform $time ease-in-out;
  @media only screen and(min-width: 650px) {
    top: 50%;
    left: 50%;
    border-radius: 20px;

    transform: translate(-50%, -50%) scale(0);
    &.tc-modal__opened {
      transform: translate(-50%, -50%) scale(1);
    }
    max-height: 80vh;
    max-width: calc(
      100vw - env(safe-area-inset-left) - env(safe-area-inset-right) - 40px
    );
    .tc-modal--content.tc-modal--content__no-footer,
    .tc-modal--footer {
      padding-bottom: 20px;
    }
  }
  @media only screen and(max-width: 649px) {
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 20px 20px 0 0;
    max-height: calc(100vh - env(safe-area-inset-top) - 60px);

    transform: translateY(100%);
    &.tc-modal__opened {
      transform: translateY(0%);
    }
    .tc-modal--content.tc-modal--content__no-footer,
    .tc-modal--footer {
      padding-bottom: calc(30px + env(safe-area-inset-bottom));
    }
  }

  @include custom-scrollbar__light();
  @include tc-modal($color, $background);

  &.tc-modal__dark {
    @include custom-scrollbar__dark();
    @include tc-modal($color_dark, $background_dark);
  }

  .tc-modal--close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5em;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.2s ease-in-out;
    &:hover {
      opacity: 0.9;
    }
  }

  .tc-modal--head {
    position: sticky;
    padding: 30px 5vw 20px;
    top: 0;
    z-index: 10;
    &.tc-modal--head__prestyled {
      text-align: center;
      .tc-modal--title {
        font-weight: bold;
        font-size: 1.5em;
      }
      .tc-modal--subtitle {
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
  .tc-modal--content {
    padding: 0 5vw;
    position: relative;
    z-index: 5;
  }
  .tc-modal--footer {
    z-index: 10;
    position: sticky;
    bottom: 0;
    padding: 20px 5vw;
  }
}
</style>
