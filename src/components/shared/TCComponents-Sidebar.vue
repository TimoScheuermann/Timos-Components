<template>
  <transition-group tag="div" name="trans">
    <tc-sidebar-group key="fundamentals" name="TC Components">
      <tc-sidebar-item
        name="Home"
        icon="house"
        key="home"
        :to="{ name: 'home' }"
      />
      <tc-sidebar-item
        key="gettingstarted"
        name="Getting started"
        icon="question-circle"
        :to="{ name: 'howto' }"
      />
      <tc-badge value="new" color="error" position="inside">
        <tc-sidebar-item
          key="designer"
          name="Designer"
          icon="tools"
          :to="{ name: 'designer' }"
        />
      </tc-badge>
      <tc-sidebar-item
        key="demo"
        name="Demos"
        icon="code"
        :to="{ name: 'demos' }"
      />
    </tc-sidebar-group>

    <tc-sidebar-group
      v-for="group in groups"
      :key="'sidebar-group' + group.group"
      :name="group.group"
    >
      <tc-sidebar-item
        v-for="comp in group.components"
        :key="'sidebar-item' + comp.name"
        :name="comp.name"
        :icon="comp.icon"
        :to="{
          name: group.prefix + '-' + comp.name.toLowerCase().replace(' ', '-')
        }"
      />
    </tc-sidebar-group>
  </transition-group>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';

import TCSidebarGroup from '@/tccomponents/component/sidebar/TC-Sidebar-Group.vue';
import TCSidebarItem from '@/tccomponents/component/sidebar/TC-Sidebar-Item.vue';
import TCBadge from '@/tccomponents/component/badge/TC-Badge.vue';

@Component({
  components: {
    'tc-sidebar-group': TCSidebarGroup,
    'tc-sidebar-item': TCSidebarItem,
    'tc-badge': TCBadge
  }
})
export default class TCComponentsSidebar extends Vue {
  @Prop() groups!: TCComponentGroup[];
}
</script>

<style lang="scss" scoped></style>
