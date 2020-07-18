<template>
  <div>
    <h1>FLow Layout</h1>
    <h2>horizontal="center" vertical="center"</h2>
    <tl-flow horizontal="center" vertical="center">
      <div class="demobox a" />
      <div class="demobox b" />
      <div class="demobox c" />
    </tl-flow>
    <h2>horizontal="space-between" vertical="end"</h2>
    <tl-flow horizontal="space-between" vertical="end">
      <div class="demobox a" />
      <div class="demobox b" />
      <div class="demobox c" />
    </tl-flow>
    <h2>horizontal="space-around" vertical="start"</h2>
    <tl-flow horizontal="space-around" vertical="start">
      <div class="demobox a" />
      <div class="demobox b" />
      <div class="demobox c" />
    </tl-flow>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'tl-flow': TLFlow
  }
})
export default class TLDFlow extends Vue {}
</script>
<style lang="scss" scoped>
.demobox {
  background: $primary;
  &.a {
    width: 50px;
    height: 100px;
  }
  &.b {
    width: 100px;
    height: 50px;
  }
  &.c {
    width: 100px;
    height: 100px;
  }
  border-radius: $border-radius;
  margin: 10px;
}
</style>
