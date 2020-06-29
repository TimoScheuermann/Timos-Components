<template>
  <div>
    <tc-headline title="Steps" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>

    <tc-steps></tc-steps>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCSteps from '@/tccomponents/steps/TC-Steps.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tl-grid': TLGrid,
    'tc-steps': TCSteps
  }
})
export default class TCDSteps extends Vue {}
</script>
