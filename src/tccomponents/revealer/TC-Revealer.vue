<template>
  <div class="tc-revealer">
    <input type="checkbox" :id="id" />
    <label :for="id">
      <tc-headline :title="title" :icon="icon">
        <div class="iconWrapper">
          <div class="icon">
            <i class="ti-cross"></i>
          </div>
        </div>
      </tc-headline>
    </label>
    <div class="content">
      <slot>
        <div data-not-set-inside-revealer>Nothing here to reveal :(</div>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";

import TCHeadline from "../headline/TC-Headline.vue";
import TCComponent from "../TC-Component.mixin";
@Component({
  components: {
    "tc-headline": TCHeadline
  }
})
export default class TCRevealer extends Mixins(TCComponent) {
  @Prop({ default: "Revealer", type: String }) title!: string;
  @Prop() icon!: string;

  get id(): string {
    return "tc-revealer_" + this.uuid_;
  }
}
</script>
<style lang="scss" scoped>
.tc-revealer {
  & > input {
    display: none;
    &:checked ~ {
      label {
        .iconWrapper {
          .icon {
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }
      }
      .content {
        max-height: 600px;
      }
    }
  }
  & > label {
    cursor: pointer;
    display: block;
    .iconWrapper {
      position: relative;
      .icon {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        position: absolute;
        transition: 0.4s ease-in-out;
      }
    }
  }
  & > .content {
    transition: 0.4s ease-in-out;
    max-height: 0px;
    overflow: auto;
    [data-not-set-inside-revealer] {
      text-align: center;
      opacity: 0.6;
      font-weight: bold;
    }
  }
}
</style>
