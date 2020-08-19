<template>
  <td :colspan="colspan">
    <transition name="expand-row">
      <div class="tc-tr-expanded" v-if="expanded">
        <div class="tc-tr-expanded--content" :style="styles">
          <slot />
        </div>
      </div>
    </transition>
  </td>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
@Component
export default class TCTrExpanded extends Mixins(TCComponent) {
  @Prop({ default: 1 }) colspan!: number;

  public expanded = false;
  mounted() {
    this.expanded = true;
  }

  get styles(): string {
    return `--tc-tr-expanded__background: ${this.getChosenBackground(
      this.darkmode ? 'containerDark' : 'container'
    )}`;
  }
}
</script>

<style lang="scss" scoped>
td {
  border-radius: 0 0 $border-radius $border-radius;
  overflow: hidden;
}
.tc-tr-expanded {
  .tc-tr-expanded--content {
    padding: 15px 20px;
    background: rgba(var(--tc-tr-expanded__background), 0.6);
  }
}

.expand-row-enter-active,
.expand-row-leave-active {
  transition: all 0.4s;
}
.expand-row-enter,
.expand-row-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
