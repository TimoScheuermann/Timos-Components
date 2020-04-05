<template>
  <div class="tc-header" :style="getStyles()" :class="getClasses()">
    <div class="tc-header--head">
      <div
        v-if="backTo || backHref"
        class="tc-header--backButton"
        @click="clicked($event)"
      >
        <i class="ti-arrow-left"></i>
        <span>{{ backName || "back" }}</span>
      </div>
      <div class="tc-header--title__prestyled" v-if="title">{{ title }}</div>
      <div class="tc-header--title" v-else>
        <slot name="title" />
      </div>
    </div>

    <div
      v-if="!itemsOverflow"
      class="tc-header--items"
      :id="'tc-header--item_' + uuid"
    >
      <slot />
    </div>
    <div v-else class="tc-header--items__overflow">
      <tc-checkbox
        v-model="itemCard"
        iconChecked="arrow-down"
        iconUnchecked="arrow-up"
        iconAnimation="flip"
      />
    </div>
    <div
      v-if="itemsOverflow"
      class="tc-overflow-items"
      :style="getOverflowStyle()"
      :class="{ ...getClasses(), 'tc-overflow-items__visible': itemCard }"
    >
      <div class="tc-overflow-items--container">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCComponent from "../tccomponent.vue";
import uuidVue from "../uuid.vue";
import TCCheckbox from "../checkbox/TC-Checkbox.vue";
@Component({
  mixins: [TCComponent, uuidVue],
  components: {
    "tc-checkbox": TCCheckbox
  }
})
export default class TCHeader extends Vue {
  @Prop() title!: string;
  @Prop({ default: "fixed" }) variant!: "fixed" | "floating" | "sticky";
  @Prop({ default: 0 }) top!: number;
  @Prop() backTo!: any;
  @Prop() backHref!: string;
  @Prop() backName!: string;

  private uuid!: number;
  private dark!: boolean;
  private defaultStyle!: any;

  public itemsOverflow = false;
  public itemCard = false;

  mounted() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }

  public clicked(event: any): void {
    this.$emit("click", event);
    if (this.backTo) this.$router.push(this.backTo);
    else if (this.backHref) window.open(this.backHref, "_blank");
  }

  public resize(): void {
    this.itemsOverflow = false;
    setTimeout(() => {
      const element = document.getElementById("tc-header--item_" + this.uuid)!;
      this.itemsOverflow =
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth;
    }, 100);
  }

  getClasses() {
    return {
      "tc-header__dark": this.dark,
      "tc-header__light": !this.dark,
      "tc-header__fixed": !(
        this.variant == "floating" || this.variant == "sticky"
      ),
      "tc-header__sticky": this.variant == "sticky",
      "tc-header__floating": this.variant == "floating"
    };
  }
  getStyles() {
    const style = this.defaultStyle;
    style.top = (this.variant === "floating" ? 40 : 0) + +this.top + "px";
    return style;
  }

  getOverflowStyle() {
    const style = this.defaultStyle;
    style.top =
      "calc(env(safe-area-inset-top) + " + (+(+this.top) + 50) + "px)";
    return style;
  }
}
</script>
<style lang="scss" scoped>
.tc-header {
  user-select: none;
  box-shadow: $shadow;
  right: 0;
  left: 0;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  &.tc-header__dark {
    &.tc-header__sticky,
    &.tc-header__fixed {
      border-bottom: 1px solid rgba(#fff, 0.3);
    }
    @include backdrop-blur($color);
    color: #fff;
  }
  &.tc-header__light {
    &.tc-header__sticky,
    &.tc-header__fixed {
      border-bottom: 1px solid rgba($color, 0.2);
    }
    @include backdrop-blur($background);
    color: $color;
  }
  &.tc-header__sticky {
    position: sticky;
    padding: 0 5vw;
  }
  &.tc-header__fixed {
    position: fixed;
    padding: 0 5vw {
      top: env(safe-area-inset-top);
    }
  }
  &.tc-header__floating {
    position: fixed;
    margin: 0 10vw;
    padding: 0 20px;
    border-radius: $border-radius;
  }

  .tc-header--head {
    display: inherit;

    .tc-header--backButton {
      cursor: pointer;
      margin-right: 20px;
      color: $primary;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        margin-right: 5px;
      }
    }

    .tc-header--title__prestyled {
      font-weight: bold;
      white-space: nowrap;
      font-size: 18px;
    }
  }
  .tc-header--items {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      animation: appear 0.1s linear 0.2s both;
    }
  }
  .tc-header--items__overflow {
    display: flex;
    overflow: visible;
    .tc-checkbox {
      background: none !important;
      border: none;
      * {
        overflow: visible;
      }
      /deep/ .icon {
        transform: scaleX(2);
        color: currentColor;
        opacity: 0.6;
      }
    }
  }

  .tc-overflow-items {
    right: 0;

    user-select: none;
    box-shadow: $shadow;
    border-radius: 0px 0px $border-radius $border-radius;
    overflow: hidden;
    .tc-overflow-items--container {
      max-height: 0vh;
      transition: 0.5s ease-in-out;
      transform: translateY(-30px);
      padding: 0;
      opacity: 0;
    }
    &.tc-overflow-items__visible {
      .tc-overflow-items--container {
        opacity: 1;
        padding: 20px 0;
        max-height: 100vh;
        transform: translateY(0px);
      }
    }

    &.tc-header__sticky {
      position: absolute;
      padding: 0 5vw;
      left: 0;
    }
    &.tc-header__fixed {
      position: fixed;
      left: 0;
      padding: 0 5vw;
    }
    &.tc-header__floating {
      position: fixed;
      margin-top: 10px;
      padding: 0 20px;
      left: 0;
      border-radius: $border-radius;
    }

    &.tc-header__dark {
      background: $color;
      color: #fff;
    }
    &.tc-header__light {
      background: $background;
      color: $color;
    }
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      position: absolute !important;
      border-radius: 4px;
      transition: 0.2s ease;
    }

    &::-webkit-scrollbar:hover {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #666;
      border-radius: 4px;
      transition: 0.2s ease;
      &:hover {
        background: #888;
        transition: 0.2s ease;
        cursor: grabbing;
      }
    }
    .tc-overflow-items--container {
      /deep/ {
        & > * {
          display: block;
          margin: 0 5px;
          font-weight: 500;
          &:not(:last-child) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          padding: 10px {
            right: 0px;
          }
        }
      }
    }
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
