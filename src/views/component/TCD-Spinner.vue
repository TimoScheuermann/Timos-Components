<template>
  <div>
    <h1>Spinner</h1>
    <tl-grid minWidth="50">
      <tl-flow flow="column" v-for="v in variants" :key="v">
        <h2>{{ v }}</h2>
        <tc-spinner :variant="v" />
      </tl-flow>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSpinner from '@/tccomponents/component/spinner/TC-Spinner.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'tc-spinner': TCSpinner,
    'tl-grid': TLGrid,
    'tl-flow': TLFlow
  }
})
export default class TCDSpinner extends Vue {
  public variants: string[] = ['bars', 'dots', 'dots-breath', 'dots-wave'];
}
</script>
