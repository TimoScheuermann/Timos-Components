<template>
  <tl-modal :value="opened" :submodal="opened2">
    <template slot="modal">
      <tc-modal
        v-model="opened"
        title="Install as PWA"
        subtitle="Make Timo's Components available offline"
      >
        <img
          style="width: 80%; margin-left: 10%"
          src="assets/banner.svg"
          alt=""
        /><tc-button
          name="Read more"
          variant="filled"
          @click="opened2 = true"
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <h1>Modals sind doch was schönes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
      </tc-modal>
    </template>

    <template slot="submodal">
      <tc-modal
        modal2
        v-model="opened2"
        title="Install as PWA"
        subtitle="Make Timo's Components available offline"
      >
        <img
          style="width: 80%; margin-left: 10%"
          src="assets/banner.svg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <h1>Modals sind doch was schönes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta perferendis? Sed possimus quae aperiam ea deleniti. Quasi dolor
          porro voluptatum doloremque veniam saepe molestias. Ad aliquam quo
          assumenda facilis.
        </p>
      </tc-modal>
    </template>
    <div class="tccomponents">
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
        <div v-if="sidebarVisible" class="sidebar-footer" slot="sidebar-footer">
          <img src="assets/text.svg" />
          {{ version }}
        </div>

        <tccomponents-header :sidebarVisible="sidebarVisible" />
        <router-view />
        <tc-button
          v-if="isLocal"
          name="open modal"
          variant="filled"
          @click="opened = true"
          modal
        />
      </tl-sidebar>

      <tccomponents-tabbar v-if="!sidebarVisible" />
    </div>
  </tl-modal>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import { EventBus } from '@/eventBus';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';
import tcComponents from '@/components';
import { loadIcons } from '@/loadIcons';

import TCInput from '@/tccomponents/input/TC-Input.vue';
import TLSidebar from '@/tccomponents/_layout/sidebar/TL-Sidebar.vue';
import TCComponentsSidebar from '@/components/shared/TCComponents-Sidebar.vue';
import TCComponentsTabbar from '@/components/shared/TCComponents-Tabbar.vue';
import TCComponentsHeader from '@/components/shared/TCComponents-Header.vue';
import TLModal from './tccomponents/_layout/modal/TL-Modal.vue';
import TCModal from './tccomponents/modal/TC-Modal.vue';
import TCButton from './tccomponents/button/TC-Button.vue';

@Component({
  components: {
    'tc-input': TCInput,
    'tl-sidebar': TLSidebar,
    'tccomponents-sidebar': TCComponentsSidebar,
    'tccomponents-tabbar': TCComponentsTabbar,
    'tccomponents-header': TCComponentsHeader,
    'tl-modal': TLModal,
    'tc-modal': TCModal,
    'tc-button': TCButton
  }
})
export default class App extends Vue {
  public query = '';
  public collapsedSidebar = false;
  public sidebarVisible = true;
  public opened = false;
  public opened2 = false;

  get isLocal(): boolean {
    return window.location.href.includes(':8080');
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
    return process.env.VERSION || 'v0.2.0';
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

  @Watch('$route', { deep: true, immediate: true })
  routeChanged(): void {
    const elems = document.querySelectorAll('.tl-sidebar--content');
    if (elems.length > 0) {
      (elems[0] as HTMLElement).style.background =
        this.$route.name === 'designer' ? '#000' : '#fff';
    }
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

[modal] {
  position: fixed;
  @media #{$isDesktop} {
    left: 220px;
    bottom: 20px;
  }
  @media #{$isMobile} {
    left: 20px;
    bottom: 100px;
  }
}
[modal2] {
  z-index: 200000;
}
body {
  margin: 0;
}
.tccomponents {
  background: $background;
  color: $color;
}
[content] {
  padding: 70px 5vw;
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}
[subpage] {
  margin-top: -50px;
}
.sidebar-header,
.sidebar-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.sidebar-footer {
  padding: 10px 0;
  color: #fff;
  img {
    max-height: 20px;
    margin-right: 10px;
  }
}
.sidebar-header {
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
