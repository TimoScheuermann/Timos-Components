<template>
  <router-link
    :to="to"
    tag="div"
    class="tc-preview"
    :class="{
      'tc-preview__dark': dark,
      'tc-preview__light': !dark
    }"
    :style="{ background: background }"
  >
    <div class="tc-preview--content">
      <slot />
    </div>
    <div
      v-if="title"
      class="tc-preview--title__prestyled"
      :style="{ background: titleBackground, color: color }"
    >
      {{ title }}
    </div>
    <div v-else class="tc-preview--title">
      <slot name="title" />
    </div>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCComponent from "../tccomponent.vue";
@Component({
  mixins: [TCComponent]
})
export default class TCPreview extends Vue {
  @Prop({ default: "_blank" }) to!: any;
  @Prop({ default: "DHBW Richie" }) title!: string;
  @Prop() titleBackground!: string;
}
</script>
<style lang="scss" scoped>
.tc-preview {
  position: relative;
  cursor: pointer;

  &:hover {
    .tc-preview--content {
      /deep/ img,
      /deep/ video,
      /deep/ iframe {
        transition: 3s ease-in-out;
        transform: scale(1.1);
      }
    }
  }

  .tc-preview--content {
    overflow: hidden;
    /deep/ img,
    /deep/ video,
    /deep/ iframe {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .tc-preview--title,
  .tc-preview--title__prestyled {
    position: absolute;
  }
  .tc-preview--title__prestyled {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    font-weight: bold;
    box-shadow: $shadow;
    border-radius: 200px;
  }
  &.tc-preview__dark {
    .tc-preview--title__prestyled {
      background: $color;
      color: $paragraph;
    }
  }
  &.tc-preview__light {
    .tc-preview--title__prestyled {
      background: $paragraph;
      color: $color;
    }
  }
}
</style>
