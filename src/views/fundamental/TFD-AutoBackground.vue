<template>
  <div>
    <tc-headline title="Auto Background" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tl-grid': TLGrid
  }
})
export default class TFDList extends Vue {}
</script>
