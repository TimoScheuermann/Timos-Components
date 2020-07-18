<template>
  <div class="tl-modal">
    <div
      class="tl-modal--modal"
      :class="{
        'tl-modal--modal__shrink': submodal,
        'tl-modal--modal__visible': value
      }"
    >
      <slot name="modal" />
    </div>
    <div class="tl-modal--submodal">
      <slot name="submodal" />
    </div>
    <div
      class="tl-modal--content"
      :class="{ 'tl-modal--content__shrink': value }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TLModal extends Vue {
  @Prop({ default: false }) value!: boolean;
  @Prop({ default: false }) submodal!: boolean;

  @Watch('value')
  valueChanged(): void {
    document.body.classList.remove('tl-modal--opened');
    if (this.value) {
      document.body.classList.add('tl-modal--opened');
    }
  }
}
</script>
<style lang="scss">
body {
  transition: 0.2s ease-in-out;
}
body.tl-modal--opened {
  background: #000 !important;
}
</style>
<style lang="scss" scoped>
.tl-modal--content {
  transition: transform 0.2s;
  &.tl-modal--content__shrink {
    transform: translateY(30px) scale(0.9);
    border-radius: #{3 * $border-radius};
    overflow: hidden;
  }
}
.tl-modal--modal {
  &.tl-modal--modal__visible,
  &.tl-modal--modal__shrink {
    transition: transform 0.2s;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1002;
  }
  &.tl-modal--modal__shrink {
    transform: translateY(-60px) scale(0.9);
  }
}
</style>
