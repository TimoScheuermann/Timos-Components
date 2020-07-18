<template>
  <div>
    <tl-flow>
      <tc-badge :value="10" tccolor="error">
        <tc-button name="Badge on Button" />
      </tc-badge>
    </tl-flow>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCBadge from '@/tccomponents/component/badge/TC-Badge.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tc-badge': TCBadge,
    'tl-flow': TLFlow
  }
})
export default class TCDBadge extends Vue {
  public colors: string[] = ['primary', 'error', 'success', 'alarm'];
}
</script>
