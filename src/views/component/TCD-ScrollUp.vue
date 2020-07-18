<template>
  <div>
    <h1>Scroll Up</h1>
    <tc-scroll-up />
    <tc-scroll-up icon="double-chevron-up" />
    <tc-scroll-up icon="house" />
    <tc-scroll-up background="#fff" color="red" icon="heart" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCScrollUp from '@/tccomponents/component/scrollup/TC-Scroll-Up.vue';
@Component({
  components: {
    'tc-scroll-up': TCScrollUp
  }
})
export default class TCDScrollUp extends Vue {}
</script>
<style lang="scss" scoped>
.tc-scroll-up {
  display: inline-flex;
  transform: scale(1);
  position: relative;
  margin: 3px;
}
</style>
