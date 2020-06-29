<template>
  <tc-tabbar :autoBackground="true">
    <tc-tabbar-item routeName="home" />
    <tc-tabbar-item title="Designer" icon="tools" routeName="designer" />
    <tc-tabbar-item title="How to" icon="question-circle" routeName="howto" />
    <tc-tabbar-item title="Demo" icon="code" routeName="demo" />
  </tc-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCTabbar from '@/tccomponents/tabbar/TC-Tabbar.vue';
import TCTabbarItem from '@/tccomponents/tabbar/TC-Tabbar-Item.vue';

@Component({
  components: {
    'tc-tabbar': TCTabbar,
    'tc-tabbar-item': TCTabbarItem
  }
})
export default class TCComponentsTabbar extends Vue {}
</script>

<style lang="scss" scoped></style>
