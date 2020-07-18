<template>
  <div>
    <tc-steps></tc-steps>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCSteps from '@/tccomponents/component/steps/TC-Steps.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tl-grid': TLGrid,
    'tc-steps': TCSteps
  }
})
export default class TCDSteps extends Vue {}
</script>
