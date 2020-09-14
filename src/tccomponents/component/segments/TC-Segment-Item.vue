<template>
  <div class="tc-segment-item" v-if="tcSegmentItemShow">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
@Component
export default class TCSegmentItem extends Mixins(TCComponent) {
  @Prop() title!: string;

  public tcSegmentItemShow = false;

  beforeDestroy() {
    this.$parent.$emit('recheck', 100);
  }

  mounted() {
    this.$parent.$emit('recheck', 0);
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
