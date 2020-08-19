<template>
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis est
      veniam vero quas ad, velit ratione, molestiae voluptas quibusdam
      consequatur aliquid! Accusantium, eius quas consectetur laboriosam hic
      soluta earum nihil!
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="100">
        <div>
          <h2>Example #1</h2>
          <tc-link>Example Link</tc-link>
        </div>
        <div>
          <h2>Example #2</h2>
          <tc-link><i class="ti-users" /> join now</tc-link>
        </div>
        <div>
          <h2>Example #3</h2>
          <tc-link tfcolor="error"><i class="ti-heart" /> follow me</tc-link>
        </div>
        <div>
          <h2>Example #4</h2>
          <tc-link color="gold">Oh wow, I'm gold</tc-link>
        </div>
        <div>
          <h2>Example #5</h2>
          <tl-flow>
            <tc-badge value="hot" position="inside">
              <tc-link>Oh yes :)</tc-link>
            </tc-badge>
          </tl-flow>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-link>Example Link&lt;/tc-link>
&lt;tc-link>&lt;i class="ti-users" /> join now&lt;/tc-link>
&lt;tc-link tfcolor="error">&lt;i class="ti-heart" /> follow me&lt;/tc-link>
&lt;tc-link color="gold">Oh wow, I'm gold&lt;/tc-link>
&lt;tc-badge value="hot" position="inside">
  &lt;tc-link>Oh yes :)&lt;/tc-link>
&lt;/tc-badge></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCLink from '@/tccomponents/component/link/TC-Link.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCBadge from '@/tccomponents/component/badge/TC-Badge.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'tc-link': TCLink,
    'tl-grid': TLGrid,
    'portfolio-code-example': PortfolioCodeExample,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tc-badge': TCBadge,
    'tl-flow': TLFlow
  }
})
export default class TCDLink extends Vue {}
</script>
