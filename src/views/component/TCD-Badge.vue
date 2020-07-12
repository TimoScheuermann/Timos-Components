<template>
  <div>
    <tc-badge :value="10" tccolor="error">
      <tc-button name="Badge on Button"></tc-button>
    </tc-badge>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCButton from '@/tccomponents/button/TC-Button.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCBadge from '@/tccomponents/badge/TC-Badge.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tc-badge': TCBadge
  }
})
export default class TCDBadge extends Vue {
  public colors: string[] = ['primary', 'error', 'success', 'alarm'];
}
</script>
