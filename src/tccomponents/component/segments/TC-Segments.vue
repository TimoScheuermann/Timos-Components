<template>
  <div class="tc-segments" :class="{ 'tc-segments--dark': dark }">
    <div class="header">
      <div class="items" :style="getItemsStyle()">
        <div
          v-for="(seg, index) in segments"
          :key="seg"
          @click="changeSelection(index)"
          class="item"
        >
          {{ seg }}
        </div>
      </div>
      <div class="background" :style="getBackgroundStyle()"></div>
    </div>
    <transition-group name="icon-trans" tag="div" class="content">
      <div v-for="seg in currentSegments" :key="seg" class="slot">
        <slot :name="seg">
          <b>Fail</b>
        </slot>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCSegments extends Mixins(TCComponent) {
  @Prop() segments!: string[];
  @Prop() value!: number;

  public currentlySelected = this.value || 0;

  @Watch('value')
  valueChanged(): void {
    if (this.value) this.currentlySelected = this.value;
  }

  public changeSelection(to: number): void {
    this.currentlySelected = to;
    this.$emit('input', to);
  }

  get currentSegments(): string[] {
    return this.segments.filter((x, i) => i === this.currentlySelected);
  }

  public getBackgroundStyle(): Record<string, unknown> {
    return {
      width: `calc(${100 / this.segments.length}% - 10px)`,
      left: `calc(5px + 100% / ${this.segments.length} * ${this.currentlySelected})`
    };
  }

  public getItemsStyle(): Record<string, unknown> {
    return {
      gridTemplateColumns: `repeat(${this.segments.length}, 1fr)`
    };
  }
}
</script>

<style lang="scss" scoped>
.icon-trans-move {
  transition: all 0.4s ease-in-out;
}
.icon-trans-enter-active,
.icon-trans-leave-active {
  transition: all 0.4s;
}
.icon-trans-leave-active {
  position: absolute;
}
.icon-trans-enter {
  opacity: 0;
}
.icon-trans-leave-to {
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.tc-segments {
  padding: 20px 0 {
    top: 0.1px;
  }
  max-width: 100%;

  &.tc-segments--dark {
    .header {
      background: lighten($background_dark, 10%);
      color: $color_dark;
      .background {
        background: $paragraph_dark;
      }
    }
  }

  .header {
    background: darken($background, 5%);
    color: $color;
    .background {
      background: $paragraph;
    }
    padding: 5px;
    border-radius: $border-radius;
    position: relative;
    position: relative;
    margin: 3px {
      bottom: 10px;
    }
    .background {
      position: absolute;
      border-radius: 3px;
      width: 100%;
      height: calc(100% - 10px);
      top: 5px;
      transition: left 0.2s ease-in-out;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    }
    .items {
      z-index: 1;
      position: relative;
      display: grid;
      grid-gap: 10px;
      .item {
        cursor: pointer;
        font-weight: 500;
        min-height: 25px;
        line-height: 25px;
        text-align: center;
        // overflow: ;
      }
    }
  }
  .content {
    position: relative;
    .slot {
      margin: 0 5px;
    }
  }
}
</style>