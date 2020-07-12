<template>
  <img class="tc-image" :src="innerSrc" @click="expand()" @error="error()" />
</template>
<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import TCComponent from '../TC-Component.mixin';

@Component
export default class TCImage extends Mixins(TCComponent) {
  @Prop() src!: string;
  @Prop() fallback!: string;
  private expanded = false;
  private innerSrc = this.src;

  private bgElement: HTMLElement = document.createElement('div');
  private close: HTMLElement = document.createElement('div');
  private img: HTMLImageElement = document.createElement('img');

  @Watch('src')
  srcChanged(): void {
    this.innerSrc = this.src;
    this.img.src = this.src;
  }

  error(): void {
    if (this.fallback && this.fallback.length > 0) {
      if (this.innerSrc !== this.fallback) {
        this.innerSrc = this.fallback;
        this.img.src = this.fallback;
      }
    }
  }

  mounted(): void {
    this.bgElement.setAttribute('class', 'tc-image--expanded');
    this.close.innerHTML = "<i class='ti-cross' />";
    this.bgElement.addEventListener('click', e => {
      e.stopPropagation();
      this.shrink();
    });
    this.close.addEventListener('click', () => {
      this.shrink();
    });
    this.img.addEventListener('click', e => {
      e.stopPropagation();
    });
    this.img.src = this.src;
    this.bgElement.appendChild(this.close);
    this.bgElement.appendChild(this.img);
    document.body.appendChild(this.bgElement);
  }

  beforeDestroy(): void {
    document.body.removeChild(this.bgElement);
  }

  public expand(): void {
    this.bgElement.setAttribute('expanded', '');
  }

  public shrink(): void {
    this.bgElement.removeAttribute('expanded');
  }
}
</script>

<style lang="scss" scoped>
.tc-image {
  cursor: zoom-in;
}
</style>
<style lang="scss">
.tc-image--expanded {
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.85);
  // @include backdrop-blur(rgba(black, 0.75));
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  opacity: 0;

  transition: opacity 0.4s ease-in-out;
  &[expanded] {
    transition: opacity 0.4s ease-in-out;
    transform: scale(1);
    opacity: 1;
    img {
      transform: scale(1);
      border-radius: 0px;
    }
  }

  div {
    $size: 30px;
    position: absolute;
    right: calc(#{$size} + env(safe-area-inset-right));
    top: calc(#{$size} + env(safe-area-inset-top));
    width: $size;
    height: $size;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #fafafa;
    color: #111;
    opacity: 0.6;
    cursor: pointer;
    z-index: 1000;
    transition: 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    transform: scale(0);
    border-radius: 10000000px;
    transition: 0.2s ease-in-out 0.3s;
  }
}
</style>
