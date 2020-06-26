<template>
  <div
    class="tc-modal"
    :class="{ 'tc-modal__opened': opened, 'tc-modal__dark': dark }"
  >
    <div class="tc-modal--background" @click="close()"></div>
    <div class="tc-modal--container">
      <div class="container--close" @click="close()">
        <i class="ti-cross" />
      </div>
      <div class="container--head" :id="id">
        <div v-if="title" class="container--head--title__prestyled">
          {{ title }}
        </div>
        <div v-else class="container--head--title">
          <slot name="header" />
        </div>
        <div v-if="subtitle" class="container--head--subtitle__prestyled">
          {{ subtitle }}
        </div>
      </div>
      <div class="container--content">
        <slot />
      </div>
      <div class="container--buttons">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import "./swipe-events.js";
import TCComponent from "../TC-Component.mixin";

export default class TCModal extends Mixins(TCComponent) {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) subtitle!: string;
  @Prop() value!: boolean;

  public bodyOverflowBefore: string | null = document.body.style.overflow;
  public opened = this.value;

  get id(): string {
    return "tc-modal_" + this.uuid_ + "--head";
  }

  @Watch("value")
  changed(updated: any, old: any) {
    console.log("Modal changed");
    this.opened = updated;
    document.body.style.overflow = this.opened
      ? "hidden"
      : this.bodyOverflowBefore!;
    if (this.opened) {
      document.getElementById(this.id)!.focus();
    }
  }

  mounted() {
    document.getElementById(this.id)!.addEventListener("swiped-down", e => {
      this.close();
    });
  }

  close() {
    this.opened = false;
    this.update();
  }
  update() {
    this.$emit("input", this.opened);
  }
}
</script>
<style lang="scss" scoped>
.tc-modal {
  position: fixed;
  z-index: 1000;
  visibility: hidden;
  &.tc-modal__opened {
    visibility: visible;
  }

  @media #{$isMobile} {
    .tc-modal--container {
      transition: transform 0.3s ease-in-out;
      transform: translateY(100%);
      max-height: calc(
        100vh - 60px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
      );
    }
    &.tc-modal__opened {
      bottom: 0;
      left: 0;
      right: 0;

      .tc-modal--container {
        transform: translateY(0%);
        border-top: {
          left-radius: 10px;
          right-radius: 10px;
        }
        .container--buttons {
          .tc-button {
            display: block;
            margin: 10px 3px;
          }
        }
      }
    }
  }

  @media #{$isDesktop} {
    .tc-modal--container {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.2s ease-in-out;
    }
    &.tc-modal__opened {
      .tc-modal--container {
        transform: translate(-50%, -50%) scale(1);
        max-height: 60vh;
        max-width: 60vw;
        border-radius: $border-radius;
        .container--buttons {
          .tc-button {
            margin-top: 15px;
          }
        }
      }
    }
  }
  &.tc-modal__opened {
    .tc-modal--background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.84);
    }
  }
  &.tc-modal__dark {
    .tc-modal--container {
      background: $color;
      color: #fff;
    }
  }
  .tc-modal--container {
    .container--close {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
      @media #{$isMobile} {
        // display: none;
      }
    }

    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    z-index: 1001;
    background: $background;

    padding: {
      top: 10px;
      right: calc(15px + env(safe-area-inset-right));
      left: calc(15px + env(safe-area-inset-left));
      bottom: calc(15px + env(safe-area-inset-bottom));
    }
    .container--head {
      margin: 0 14px;
      .container--head--title__prestyled,
      .container--head--subtitle__prestyled {
        text-align: center;
        font-weight: bold;
      }
      .container--head--title__prestyled {
        font-size: 1.5em;
      }
      .container--head--subtitle__prestyled {
        opacity: 0.7;
        margin: 5px 0;
      }
    }
    .container--content {
      padding: 20px 0;
      overflow: {
        y: auto;
        x: visible;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      img,
      video {
        max-width: 100%;
      }
    }
    .container--buttons {
      @media #{$isMobile} {
        .tc-button {
          height: 30px;
        }
      }
      text-align: center;
    }
  }
}
</style>
