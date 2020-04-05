<template>
  <div class="tc-image">
    <div class="tc-image--small" @click="expanded = true">
      <img :src="src" />
    </div>
    <div
      class="tc-image--expanded"
      @click="expanded = false"
      :class="{ visible: expanded }"
    >
      <div class="tc-image--background">
        <div class="background--close" @click="expanded = false">
          <i class="ti-cross" />
        </div>
      </div>
      <img :src="src" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import projects from "@/projects";
import uuidVue from "../uuid.vue";

@Component
export default class TCImage extends Vue {
  @Prop() src!: string;
  expanded = false;
}
</script>
<style lang="scss" scoped>
.tc-image {
  display: inline-block;
  user-select: none;

  img,
  video {
    cursor: pointer;
  }

  .tc-image--small {
    display: inline-block;
    img,
    video {
      max-width: calc(
        100% - env(safe-area-inset-left) - env(safe-area-inset-right)
      );
      max-height: calc(
        100% - env(safe-area-inset-top) - env(safe-area-inset-bottom)
      );
    }
  }
  .tc-image--expanded {
    z-index: 10000;
    position: fixed;
    left: 50%;
    top: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
    opacity: 0;
    img,
    video {
      transition: 0.3s ease-in-out;
      position: relative;
      // max-width: 80vw;
      // max-height: 80vh;
      width: 100vw;
      height: 100vh;
      object-fit: contain;
    }

    &.visible {
      .tc-image--background {
        position: fixed;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        width: 100vw;
        height: 100vh;
        background: #000;
        .background--close {
          height: 30px;
          width: 30px;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          right: calc(10px + env(safe-area-inset-right));
          top: calc(10px + env(safe-area-inset-top));
          background: inherit;
          color: #fff;
          cursor: pointer;
          i {
            opacity: 0.7;
            transition: 0.2s ease-in-out;
          }
          &:hover {
            i {
              opacity: 1;
            }
          }
        }
      }
      img,
      video {
        max-width: 100vw;
        max-height: 100vh;
      }

      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
