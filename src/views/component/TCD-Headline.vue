<template>
  <div>
    <h1>Options</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
      dignissimos ullam ea dicta consectetur et sapiente porro. Quas perferendis
      praesentium, assumenda ab, maxime sed aut amet ea omnis modi beatae!
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="140">
        <div>
          <h2>Simple Headline</h2>
          <tc-headline title="Welcome" />
        </div>
        <div>
          <h2>Headline & Icon</h2>
          <tc-headline title="Thank You!" icon="heart" />
        </div>
        <div>
          <h2>Headline & default slot</h2>
          <tc-headline title="Whats up">
            <tc-link>Updates</tc-link>
          </tc-headline>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-headline title="Welcome" />
&lt;tc-headline title="Thank You!" icon="heart" />
&lt;tc-headline title="Whats up">
  &lt;tc-link>Updates&lt;/tc-link>
&lt;/tc-headline></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TCLink from '@/tccomponents/component/link/TC-Link.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tc-link': TCLink,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard,
    'tl-grid': TLGrid
  }
})
export default class TCDHeadline extends Vue {}
</script>
