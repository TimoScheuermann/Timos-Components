<template>
  <div
    class="tc-list"
    :class="{ 'tc-list__dark': dark, 'tc-list__light': !dark }"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCList extends Vue {
  @Prop({ default: false }) dark!: boolean;
}
</script>
<style lang="scss" scoped>
.tc-list {
  padding: 5px;
  border-radius: $border-radius;
  &.tc-list__dark {
    background: $color;
    color: $background;
  }
  &.tc-list__light {
    background: $background;
    color: $color;
  }
}
</style>
