<template>
  <div class="tc-card" :style="styles" :class="classes">
    <div
      v-if="title"
      class="tc-card--title__prestyled"
      :class="{ 'tc-card--title__hasSubtitle': subtitle }"
    >
      {{ title }}
    </div>
    <div v-else class="tc-card--title">
      <slot name="header"></slot>
    </div>
    <div
      v-if="subtitle"
      class="tc-card--subtitle__prestyled"
      :class="{
        'tc-card--subtitle__withoutContent': !(
          usedSlots.includes('default') || usedSlots.includes('media')
        )
      }"
    >
      {{ subtitle }}
    </div>

    <div class="tc-card--spacer"></div>
    <div class="tc-card--media" v-if="usedSlots.includes('media')">
      <slot name="media" />
    </div>
    <div class="tc-card--spacer"></div>
    <div
      class="tc-card--content"
      :class="{
        'tc-card--content__hasMedia': usedSlots.includes('media'),
        'tc-card--content__hasTitle':
          usedSlots.includes('title') || title || subtitle
      }"
      v-if="usedSlots.includes('default')"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCButton from "../button/TC-Button.vue";
import TCComponent from "../TC-Component.mixin";

@Component({
  components: {
    "tc-button": TCButton
  }
})
export default class TCCard extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() frosted!: boolean;
  @Prop({ default: true }) shadow!: boolean;
  @Prop() rounded!: boolean;
  @Prop() hover!: boolean;

  get usedSlots(): string[] {
    return Object.keys(this.$slots);
  }

  get classes() {
    return {
      "tc-card__frosted": this.frosted,
      "tc-card__shadow": this.shadow,
      "tc-card__rounded": this.rounded,
      "tc-card__hover": this.hover,
      "tc-card__dark": this.dark
    };
  }

  get styles() {
    return {
      color: this.color,
      background: this.background
    };
  }
}
</script>
<style lang="scss" scoped>
.tc-card {
  background: $background;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: $color;

  &.tc-card__frosted {
    @include backdrop-blur($background);
  }
  &.tc-card__dark {
    background: lighten($color, 5%);
    color: #fff;
    &.tc-card__frosted {
      @include backdrop-blur(lighten($color, 5%));
    }
  }

  &.tc-card__shadow {
    box-shadow: $shadow;
  }
  &.tc-card__rounded {
    border-radius: $border-radius;
  }
  &.tc-card__hover {
    transition: 0.2s ease-in-out;
    &:hover {
      box-shadow: $shadow-hover;
    }
  }

  .tc-card--title__prestyled {
    padding: 20px 30px;
    font-size: 20px;
    font-weight: bold;
    &.tc-card--title__hasSubtitle {
      padding-bottom: 0px;
    }
  }
  .tc-card--subtitle__prestyled {
    padding: 10px 30px;
    &.tc-card--subtitle__withoutContent {
      padding-bottom: 30px;
    }
  }
  .tc-card--media,
  .tc-card--content {
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .tc-card--spacer {
    flex-grow: 1;
  }

  .tc-card--content {
    padding: 30px;
    &.tc-card--content__hasTitle {
      padding-top: 0px;
    }
    &.tc-card--content__hasMedia {
      padding-top: 10px;
    }
  }
  z-index: 10;
  animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-bck-center {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
