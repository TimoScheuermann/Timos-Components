<template>
  <div class="tc-hero" :style="style">
    <div class="tc-hero--background">
      <slot name="background" />
    </div>
    <div
      class="tc-hero--hero"
      :class="{ 'tc-hero--hero__fixedHeader': hasFixedHeader }"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
@Component
export default class TCHero extends Vue {
  @Prop({ default: 200 }) height!: string | number;
  @Prop({ default: "px" }) unit!: string;
  @Prop({ default: true }) hasFixedHeader!: boolean;
  @Prop() background!: string;

  get style(): any {
    return {
      background: this.background,
      height:
        "calc(" +
        +this.height +
        this.unit +
        " + " +
        (this.hasFixedHeader ? 50 : 0) +
        "px)"
    };
  }
}
</script>
<style lang="scss" scoped>
.tc-hero {
  user-select: none;
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  .tc-hero--background {
    height: inherit;
    img,
    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .tc-hero--hero {
    &.tc-hero--hero__fixedHeader {
      margin-top: calc((50px + env(safe-area-inset-top)) / 2);
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    max-width: 90vw;
  }
}
</style>
