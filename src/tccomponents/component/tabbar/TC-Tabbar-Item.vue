<template>
  <div class="tc-tabbar--item" v-if="!routeName">
    <i :class="'ti-' + icon"></i>
    <span>{{ title }}</span>
  </div>
  <router-link v-else :to="{ name: routeName }" class="tc-tabbar--item">
    <i :class="'ti-' + icon"></i>
    <span>{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCTabbarItem extends Mixins(TCComponent) {
  @Prop({ default: 'house', type: String }) icon!: string;
  @Prop({ default: 'Home', type: String }) title!: string;
  @Prop() routeName!: string;
}
</script>

<style lang="scss" scoped>
.tc-tabbar--item {
  text-decoration: none;
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
    // background: green;
  }
  span {
    // background: orange;
  }
  &.router-link-exact-active {
    color: $primary;
  }
}
</style>
