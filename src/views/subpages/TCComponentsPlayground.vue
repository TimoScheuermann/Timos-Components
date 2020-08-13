<template>
  <div class="tccomponents--playground">
    <tccomponents-subpage-hero subtitle="Playground" />

    <div content>
      <h1>TC</h1>

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

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tc-sidebar': TCSidebar,
    'tc-sidebar-group': TCSidebarGroup,
    'tc-sidebar-item': TCSidebarItem
  }
})
export default class TCComponentsPlayground extends Vue {}
</script>
<style lang="scss" scoped></style>
