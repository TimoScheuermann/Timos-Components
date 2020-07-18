<template>
  <div class="tcd-textarea">
    <tl-grid>
      <tc-textarea />
      <tc-textarea :dark="true" />
    </tl-grid>
    <h1>Frosted</h1>
    <tl-grid bg>
      <tc-textarea :frosted="true" />
      <tc-textarea :frosted="true" :dark="true" />
    </tl-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCTextarea from '@/tccomponents/component/textarea/TC-Textarea.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';

@Component({
  components: {
    'tc-textarea': TCTextarea,
    'tl-grid': TLGrid
  }
})
export default class TCDTextarea extends Vue {}
</script>

<style lang="scss" scoped>
[bg] {
  padding: 30px;
  border-radius: $border-radius;
  background: url('https://images.unsplash.com/photo-1525183995014-bd94c0750cd5');
}
</style>
