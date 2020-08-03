<template>
  <div>
    <tc-steps :current="2">
      <tc-step-item title="Validation" />
      <tc-step-item title="Authentication" />
      <tc-step-item title="Confirmation" />
      <tc-step-item
        icon="database"
        title="Welcome Home"
        description="You're all set"
      />
    </tc-steps>
    <tc-steps-old></tc-steps-old>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCSteps2 from '../../tccomponents/component/steps/TC-Steps-2.vue';
import TCStepItem from '../../tccomponents/component/steps/TC-Step-Item.vue';
import TCSteps from '../../tccomponents/component/steps/TC-Steps.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tl-grid': TLGrid,
    'tc-steps': TCSteps2,
    'tc-step-item': TCStepItem,
    'tc-steps-old': TCSteps
  }
})
export default class TCDSteps extends Vue {}
</script>
