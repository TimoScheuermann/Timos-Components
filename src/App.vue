<template>
  <div
    class="tccomponents"
    :class="{ dark: $store.getters.dark || $route.name === 'designer' }"
  >
    <tl-sidebar
      sidebarBackgroundImage="https://images.unsplash.com/photo-1525183995014-bd94c0750cd5"
      :collapsed="collapsedSidebar"
      :blurred="true"
    >
      <div slot="sidebar-header" v-if="sidebarVisible" class="sidebar-header">
        <tc-input
          :frosted="true"
          :dark="true"
          v-model="query"
          placeholder="Search"
          icon="lens"
          :class="{ searchInput: true, hiddenSearch: collapsedSidebar }"
        />
      </div>
      <tccomponents-sidebar
        v-if="sidebarVisible"
        slot="sidebar-content"
        :groups="tcComponents"
      />
      <tl-flow
        flow="column"
        v-if="sidebarVisible"
        class="sidebar-footer"
        slot="sidebar-footer"
      >
        <tl-flow>
          <tc-switch
            tfcolor="error"
            v-model="darkModeSwitch"
            @input="darkModeChanged"
          />
          <div class="mode">Darkmode</div>
        </tl-flow>
      </tl-flow>

      <tccomponents-header :sidebarVisible="sidebarVisible" />
      <router-view />
    </tl-sidebar>

    <tccomponents-tabbar v-if="!sidebarVisible" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { EventBus } from '@/eventBus';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';
import tcComponents from '@/components';
import { loadIcons } from '@/loadIcons';

import TCInput from '@/tccomponents/component/input/TC-Input.vue';
import TLSidebar from '@/tccomponents/layout/sidebar/TL-Sidebar.vue';
import TCComponentsSidebar from '@/components/shared/TCComponents-Sidebar.vue';
import TCComponentsTabbar from '@/components/shared/TCComponents-Tabbar.vue';
import TCComponentsHeader from '@/components/shared/TCComponents-Header.vue';
import TCSwitch from '@/tccomponents/component/switch/TC-Switch.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';

@Component({
  components: {
    'tc-input': TCInput,
    'tc-switch': TCSwitch,
    'tl-sidebar': TLSidebar,
    'tl-flow': TLFlow,
    'tccomponents-sidebar': TCComponentsSidebar,
    'tccomponents-tabbar': TCComponentsTabbar,
    'tccomponents-header': TCComponentsHeader
  }
})
export default class App extends Vue {
  public query = '';
  public collapsedSidebar = false;
  public sidebarVisible = true;

  public darkModeSwitch: boolean = this.$store.getters.dark;

  public darkModeChanged() {
    this.$store.commit('setDarkMode', this.darkModeSwitch);
    this.$forceUpdate();
  }

  get tcComponents(): TCComponentGroup[] {
    return tcComponents
      .map(x => {
        return {
          ...x,
          components: x.components.filter(x =>
            x.name.toLowerCase().includes(this.query.toLowerCase())
          )
        };
      })
      .filter(x => x.components.length > 0);
  }

  get version(): string {
    return process.env.VERSION || 'v0.5.0';
  }

  mounted() {
    loadIcons();
    window.addEventListener('resize', this.recheckSidebarVisible);
    this.recheckSidebarVisible();

    EventBus.$on('app-togglesidebar', () => {
      this.collapsedSidebar = !this.collapsedSidebar;
    });
  }

  destroyed() {
    window.removeEventListener('resize', this.recheckSidebarVisible);
  }

  private recheckSidebarVisible(): void {
    this.sidebarVisible = window.matchMedia('(min-width: 851px)').matches;
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
}
.tccomponents {
  background: $background;
  color: $color;
  &.dark {
    background: $background_dark;
    color: $color_dark;
  }
}
[content] {
  padding: 2.5vw 5vw;
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}
[subpage] {
  margin-top: -50px;
}
.sidebar-header,
.sidebar-footer {
  padding-top: 10px;
}
.sidebar-footer {
  padding: 10px 0;
  color: #fff;
  .mode {
    margin: 0 5px;
  }
}
.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  .searchInput {
    width: 173px;
    transform: translateX(0px);

    transition: transform 0.4s ease-out;
    &.hiddenSearch {
      transform: translateX(-170px);
    }
  }
}

.trans-move {
  transition: transform 0.3s;
}
</style>
