<template>
  <div
    class="tc-select-item"
    @click.capture.stop="clicked"
    v-if="title"
    :class="{ 'tc-select-item__selected': selected }"
  >
    <div class="tc-select-item--title">{{ title }}</div>
    <div class="tc-select-item--icon" v-if="icon">
      <tf-icon :icon="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

interface TCSelected {
  uuid: string;
  title: string;
  state: boolean;
}

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCSelectItem extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop({ default: false }) defaultSelected!: boolean;

  public selected = this.defaultSelected;

  mounted() {
    this.update();
    this.$on('registerItem', this.update);
    this.$on('deselectExcept', (uuid: string) => {
      if (uuid !== this.uuid) this.selected = false;
    });
    setTimeout(() => {
      this.update();
    }, 100);
  }

  public clicked(): void {
    this.selected = !this.selected;
    this.update();
  }

  public update(): void {
    this.$parent.$emit('itemSelected', {
      uuid: this.uuid,
      title: this.title,
      state: this.selected
    } as TCSelected);
  }
}
</script>

<style lang="scss" scoped>
.tc-select-item {
  display: flex;
  transition: 0.1s ease-in-out;
  &:hover {
    background: rgba(#000, 0.25);
  }
  &:not(:first-child) {
    border-top: 1px solid rgba(#000, 0.1);
  }
  &__selected {
    color: rgba(var(--tc-select__background), 1);
  }
  padding: 7.5px 10px;
  justify-content: space-between;
  .tc-select-item--icon {
    margin-left: 10px;
  }
  .tc-select-item--title {
    font-weight: 400;
    white-space: nowrap;
  }
}
</style>
