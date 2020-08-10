<template>
  <div>
    <h1>Sizes</h1>
    <tc-card :shadow="false" :rounded="true" :dark="this.$store.getters.dark">
      <tl-grid minWidth="200">
        <div v-for="size in sizes" :key="size">
          <h2>{{ size }}</h2>
          <tl-flow>
            <tc-avatar :size="size" :src="src" />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-avatar size="large" src="{{ src }}" />
&lt;tc-avatar size="medium" src="{{ src }}" />
&lt;tc-avatar size="small" src="{{ src }}" />
&lt;tc-avatar size="tiny" src="{{ src }}" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Borders</h1>
    <tc-card :shadow="false" :rounded="true" :dark="this.$store.getters.dark">
      <tl-grid minWidth="200">
        <div v-for="border in borders" :key="border">
          <h2>{{ border }}</h2>
          <tl-flow>
            <tc-avatar :border="border" :src="src" />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-avatar border="circle" src="{{ src }}" />
&lt;tc-avatar border="rounded" src="{{ src }}" />
&lt;tc-avatar border="square" src="{{ src }}" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCAvatar from '@/tccomponents/component/avatar/TC-Avatar.vue';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCRevealer from '@/tccomponents/component/revealer/TC-Revealer.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tl-grid': TLGrid,
    'tc-avatar': TCAvatar,
    'tc-headline': TCHeadline,
    'tl-flow': TLFlow,
    'tc-revealer': TCRevealer,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard
  }
})
export default class TCDBadge extends Vue {
  public src = 'https://timos.design/assets/me.jpg';
  public sizes: string[] = ['large', 'medium', 'small', 'tiny'];
  public borders: string[] = ['circle', 'rounded', 'square'];
}
</script>
