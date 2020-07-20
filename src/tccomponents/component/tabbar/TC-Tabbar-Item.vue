<template>
  <div
    class="tc-tabbar--item"
    :class="{ 'tc-tabbar--item__active': isActive }"
    @click="handleClick"
  >
    <i :class="'ti-' + icon" />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCTabbarItem extends Mixins(TCComponent) {
  @Prop({ default: 'house', type: String }) icon!: string;
  @Prop({ default: 'Home', type: String }) title!: string;
  @Prop() routeName!: string;
  @Prop() href!: string;
  @Prop() to!: object;

  get isActive(): boolean {
    return this.$route.name === this.routeName;
  }

  public handleClick() {
    this.$emit('click');
    if (this.routeName) {
      this.$router.push({ name: this.routeName });
    } else if (this.href) {
      window.open(this.href, '_blank');
    } else if (this.to) {
      this.$router.push(this.to);
    }
  }
}
</script>

<style lang="scss" scoped>
.tc-tabbar--item {
  flex: 1 1 0px;
  display: flex;
  user-select: none;
  @media only screen and(max-width: 650px) {
    flex-direction: column;
  }
  @media only screen and(min-width: 651px) {
    margin: 0 15px;
    padding: 8px 0;
    i {
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
  &.tc-tabbar--item__active {
    color: $primary;
  }
}
</style>
