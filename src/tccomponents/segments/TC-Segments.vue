<template>
  <div class="tc-segments" :class="{ 'tc-segments--dark': dark }">
    <div class="header">
      <div class="items" :style="getItemsStyle()">
        <div
          v-for="(seg, index) in segments"
          :key="seg"
          @click="currentlySelected = index"
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
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCSegments extends Mixins(TCComponent) {
  @Prop() segments!: string[];

  public currentlySelected = 0;

  get currentSegments(): string[] {
    return this.segments.filter((x, i) => i === this.currentlySelected);
  }

  getBackgroundStyle(): any {
    return {
      width: `calc(${100 / this.segments.length}% - 10px)`,
      left: `calc(5px + 100% / ${this.segments.length} * ${this.currentlySelected})`
    };
  }
  getItemsStyle(): any {
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
      background: $color;
      color: #fff;
      .background {
        background: rgba(#fff, 0.2);
      }
    }
  }

  .header {
    background: $paragraph;
    .background {
      background: $background;
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
      height: 25px;
      top: 5px;
      transition: 0.2s ease-in-out;
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
        height: 25px;
        line-height: 25px;
        text-align: center;
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
