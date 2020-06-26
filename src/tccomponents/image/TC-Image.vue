<template>
  <img class="tc-image" :src="src" @click="expand()" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCImage extends Mixins(TCComponent) {
  @Prop() src!: string;
  expanded = false;

  bgElement: HTMLElement = document.createElement("div");
  close: HTMLElement = document.createElement("div");
  img: HTMLImageElement = document.createElement("img");

  @Watch("src")
  srcChanged(): void {
    this.img.src = this.src;
  }

  mounted() {
    this.bgElement.setAttribute("class", "tc-image--expanded");
    this.close.innerHTML = "<i class='ti-cross' />";
    this.bgElement.addEventListener("click", e => {
      e.stopPropagation();
      this.shrink();
    });
    this.close.addEventListener("click", () => {
      this.shrink();
    });
    this.img.addEventListener("click", e => {
      e.stopPropagation();
    });
    this.img.src = this.src;
    this.bgElement.appendChild(this.close);
    this.bgElement.appendChild(this.img);
    document.body.appendChild(this.bgElement);
  }
  beforeDestroy() {
    document.body.removeChild(this.bgElement);
  }

  public expand(e: MouseEvent) {
    this.bgElement.setAttribute("expanded", "");
  }
  public shrink() {
    this.bgElement.removeAttribute("expanded");
  }
}
</script>
<style lang="scss" scoped>
.tc-image {
  cursor: zoom-in;
}
</style>
<style lang="scss" scoped>
.tc-image--expanded {
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.75);

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
    right: $size;
    top: $size;
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
    box-shadow: $shadow;
  }
}
</style>
