<template>
  <div class="tc-header-button" @click="handleClick" :style="styles">
    <tl-flow>
      <tf-icon v-if="icon" :icon="icon" />
      <div class="tc-header-button__name">{{ name }}</div>
    </tl-flow>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';

@Component({
  components: {
    'tf-icon': TFIcon,
    'tl-flow': TLFlow
  }
})
export default class TCHeaderButton extends Mixins(
  TCComponent,
  TCURLComponent
) {
  @Prop({ default: 'chevron-left' }) icon!: string;
  @Prop({ default: 'back' }) name!: string;

  get styles(): string {
    return `--tc-header-button__color: ${this.getChosenColor()}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-header-button {
  cursor: pointer;
  color: rgba(var(--tc-header-button__color), 1);
  .tf-icon {
    margin-right: 5px;
  }
  margin-right: 10px;
}
</style>
