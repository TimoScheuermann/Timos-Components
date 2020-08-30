<template>
  <div
    class="tc-tabbar-item"
    :style="styles"
    :class="classes"
    @click="handleClick"
  >
    <tf-icon v-if="icon" :icon="icon" :class="{ hasText: title }" />
    <span v-if="title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCTabbarItem extends Mixins(TCComponent, TCURLComponent) {
  @Prop() icon!: string;
  @Prop() title!: string;

  get classes(): Record<string, unknown> {
    return { 'tc-tabbar-item__active': this.isURLActive };
  }
  get styles(): string {
    return `--tc-tabbar-item__color: ${this.getChosenColor()}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-tabbar-item {
  flex: 1 1 0px;
  display: flex;
  cursor: pointer;
  user-select: none;
  @media only screen and(max-width: 650px) {
    flex-direction: column;
  }
  @media only screen and(min-width: 651px) {
    margin: 0 15px;
    padding: 8px 0;
    .hasText {
      margin-right: 10px;
    }
  }
  justify-content: center;
  align-items: center;
  color: inherit;
  margin: 0 2.5px;
  i,
  span {
    height: 20px;
    line-height: 20px;
  }
  &.tc-tabbar-item__active {
    color: rgba(var(--tc-tabbar-item__color), 1);
  }
}
</style>
