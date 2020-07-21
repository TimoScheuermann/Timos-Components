<template>
  <tc-tabbar
    :key="$route.name"
    :dark="$store.getters.dark || $route.name === 'designer'"
  >
    <tc-tabbar-item color="error" title="Home" icon="house" routeName="home" />
    <tc-tabbar-item
      color="error"
      title="Designer"
      icon="tools"
      routeName="designer"
    />
    <tc-tabbar-item
      color="error"
      title="How to"
      icon="question-circle"
      routeName="howto"
    />
    <tc-tabbar-item color="error" title="Demos" icon="code" routeName="demos" />
    <tc-tabbar-item
      v-if="showPlayground"
      color="error"
      title="Playground"
      icon="dots"
      routeName="playground"
    />
  </tc-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCTabbar from '@/tccomponents/component/tabbar/TC-Tabbar.vue';
import TCTabbarItem from '@/tccomponents/component/tabbar/TC-Tabbar-Item.vue';

@Component({
  components: {
    'tc-tabbar': TCTabbar,
    'tc-tabbar-item': TCTabbarItem
  }
})
export default class TCComponentsTabbar extends Vue {
  get showPlayground(): boolean {
    return window.location.href.includes(':8080');
  }
}
</script>

<style lang="scss" scoped></style>
