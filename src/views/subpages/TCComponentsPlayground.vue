<template>
  <div class="tccomponents--playground">
    <tccomponents-subpage-hero subtitle="Playground" />

    <div content>
      <h1>TC</h1>

      <tc-revealer title="Prestyled" icon="house">
        <h2>Jo was geht ab</h2>
      </tc-revealer>
      <tc-revealer icon="house">
        <span slot="head">non pre</span>
        <h2>Jo was geht ab</h2>
      </tc-revealer>

      <!-- <tc-sidebar v-if="false">
        <tc-sidebar-item name="Home" icon="house" />
        <tc-sidebar-group>
          <tc-sidebar-item name="Home" icon="house" />
          <tc-sidebar-item name="Home" icon="house" />
          <tc-sidebar-item name="Home" icon="house" />
        </tc-sidebar-group>

        <tc-sidebar-item name="Home" icon="house" />
      </tc-sidebar> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TCSidebar from '@/tccomponents/component/sidebar/TC-Sidebar.vue';
import TCSidebarGroup from '@/tccomponents/component/sidebar/TC-Sidebar-Group.vue';
import TCSidebarItem from '@/tccomponents/component/sidebar/TC-Sidebar-Item.vue';
import TCRevealer from '@/tccomponents/component/revealer/TC-Revealer.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tc-sidebar': TCSidebar,
    'tc-sidebar-group': TCSidebarGroup,
    'tc-sidebar-item': TCSidebarItem,
    'tc-revealer': TCRevealer
  }
})
export default class TCComponentsPlayground extends Vue {}
</script>
