<template>
  <div class="tl-sidebar">
    <div
      class="tl-sidebar--sidebar"
      :class="{ 'layout-sidebar__collapsed': collapsed }"
    >
      <img class="layout-sidebar--background" :src="sidebarBackgroundImage" />
      <div
        class="layout-sidebar"
        :class="{ 'layout-sidebar__blurred': blurred }"
      >
        <div
          v-if="$slots['sidebar-header']"
          class="layout-sidebar--header"
          :id="id + 'h'"
        >
          <slot name="sidebar-header" />
        </div>
        <div
          v-if="$slots['sidebar-content']"
          class="layout-sidebar--content"
          :style="{ 'max-height': maxHeight, 'min-height': maxHeight }"
        >
          <slot name="sidebar-content" />
        </div>
        <div
          v-if="$slots['sidebar-footer']"
          class="layout-sidebar--footer"
          :id="id + 'f'"
        >
          <slot name="sidebar-footer" />
        </div>
      </div>
    </div>
    <div class="tl-sidebar--content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch, Prop } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TLSidebar extends Mixins(TCComponent) {
  @Prop() sidebarBackgroundImage!: string;
  @Prop() collapsed!: boolean;
  @Prop() blurred!: boolean;

  get id(): string {
    return 'tl-sidebar_' + this.uuid_;
  }

  public maxHeight = '100vh';

  mounted() {
    this.updateMaxHeight();
    document.addEventListener('resize', this.updateMaxHeight);
  }

  beforeDestroy() {
    document.removeEventListener('resize', this.updateMaxHeight);
  }

  @Watch('$slots', { deep: true, immediate: true })
  private updateMaxHeight(): void {
    let headerHeight = 0;
    let footerHeight = 0;
    const header: HTMLElement | null = document.getElementById(this.id + 'h');
    const footer: HTMLElement | null = document.getElementById(this.id + 'f');
    if (header) {
      headerHeight = header.scrollHeight;
    }
    if (footer) {
      footerHeight = footer.scrollHeight;
    }
    this.maxHeight = `calc(100vh - 20px - ${headerHeight}px - ${footerHeight}px)`;
  }
}
</script>

<style lang="scss" scoped>
.tl-sidebar {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;

  .tl-sidebar--sidebar {
    max-width: 225px;

    transition: all 0.4s ease-out;
    max-width: 225px;
    &.layout-sidebar__collapsed {
      max-width: 45px;
      .layout-sidebar--content {
        padding: 10px 5px;
        .tc-sidebar--item,
        /deep/ .tc-sidebar--item {
          max-width: 30px;
          overflow: hidden;
        }
      }
    }
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    max-height: 100vh;
    position: relative;
    overflow: hidden;

    .layout-sidebar--background {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: 1;
      filter: brightness(70%);
    }
    .layout-sidebar {
      &.layout-sidebar__blurred {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        backdrop-filter: saturate(180%) blur(20px);
      }

      .layout-sidebar--content,
      .layout-sidebar--footer,
      .layout-sidebar--header {
        position: relative;
        z-index: 10;
      }

      .layout-sidebar--content {
        @include custom-scrollbar__light();
        overflow: auto;
        transition: all 0.4s ease-out;
        padding: 10px 20px;
        color: #fff;

        /deep/ .tc-sidebar--group__title {
          color: darken(#fff, 10%);
          margin-top: 10px;
          font-weight: 550;
        }

        .tc-sidebar--item,
        /deep/ .tc-sidebar--item {
          opacity: 1;
          border-radius: $border-radius;
          margin-top: 5px;
          max-width: 200px;
          i,
          img {
            margin-left: 5px;
          }
          transition: all 0.2s ease-in-out;
          div {
            transition: all 0.4s ease-in-out;
            max-width: 400px;
          }

          &:hover,
          &:focus,
          &.tc-sidebar--item__active {
            color: #fff;
            border: none;
            background: rgba(#fff, 0.2);
          }
        }
      }
      .layout-sidebar--footer {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
  .tl-sidebar--content {
    min-height: 100vh;
    overflow: auto;
  }
}
</style>
