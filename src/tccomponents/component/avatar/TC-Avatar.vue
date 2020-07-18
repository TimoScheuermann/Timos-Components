<template>
  <div
    class="tc-avatar"
    :style="{ background: background }"
    :class="'tc-avatar__' + innerBorder + ' tc-avatar__' + innerSize"
  >
    <img :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCAvatar extends Mixins(TCComponent) {
  @Prop() src!: number | string;
  @Prop({ default: 'small' }) size!: string;
  @Prop({ default: 'circle' }) border!: string;

  public sizes: string[] = ['large', 'medium', 'small', 'tiny'];
  public borders: string[] = ['rounded', 'circle', 'square'];
  public innerSize: string = this.size;
  public innerBorder: string = this.border;

  @Watch('size')
  public sizeChanged(): void {
    if (this.sizes.includes(this.size.toLowerCase())) {
      this.innerSize = this.size;
    }
  }

  @Watch('border')
  public borderChanged(): void {
    if (this.borders.includes(this.border.toLowerCase())) {
      this.innerBorder = this.border;
    }
  }
}
</script>

<style lang="scss" scoped>
.tc-avatar {
  $sizes: (
    large: 200px,
    medium: 150px,
    small: 100px,
    tiny: 50px
  );
  @each $n, $s in $sizes {
    &.tc-avatar__#{$n} {
      height: $s;
      width: $s;
    }
  }

  $borders: (
    rounded: $border-radius,
    circle: 200px,
    square: 0px
  );
  @each $n, $r in $borders {
    &.tc-avatar__#{$n} {
      border-radius: $r;
    }
  }
  transition: all 0.2s ease-in-out;
  img {
    transition: inherit;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
}
</style>
