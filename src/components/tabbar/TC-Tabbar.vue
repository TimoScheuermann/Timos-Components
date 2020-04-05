<template>
  <div
    class="tc-tabbar"
    :style="defaultStyle"
    :class="{ dark: dark, light: !dark }"
  >
    <div class="items">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TCComponent from '../tccomponent.vue';
@Component({
  mixins: [TCComponent],
})
export default class TCTabbar extends Vue {}
</script>
<style lang="scss" scoped>
@import '../../mixins';
@import '../../variables';

.tc-tabbar {
  &.dark {
    @include backdrop-blur($color);
    color: #fff;
  }
  &.light {
    @include backdrop-blur($background);
    color: $color;
  }
  position: fixed;
  box-shadow: $shadow;
  bottom: 0;
  right: 0;
  left: 0px;
  z-index: 999;
  padding: 0 2.5px {
    bottom: env(safe-area-inset-bottom);
  }
  .items {
    color: inherit;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
