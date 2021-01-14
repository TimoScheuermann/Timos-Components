<template>
  <div>
    <h1>Example</h1>
    <tc-card :shadow="false" :rounded="true">
      <tl-flow>
        <div space>
          Click to open the menu
        </div>
        <tc-action :dark="$store.getters.dark">
          <tc-action-item icon="heart" title="Like" />
          <tc-action-item icon="bookmark" title="Bookmark" />
          <tc-action-item icon="share" title="Share" />
        </tc-action>
      </tl-flow>
      <tl-grid minWidth="200">
        <div>
          <h2>{{ size }}</h2>
          <tl-flow>
            <tc-avatar :size="size" :src="src" />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-action>
    &lt;tc-action-item icon="heart" title="Like" @click="like()" />
    &lt;tc-action-item icon="bookmark" title="Bookmark" @click="bookmark()" />
    &lt;tc-action-item icon="share" title="Share" @click="share()" />
&lt;/tc-action></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCRevealer from '@/tccomponents/component/revealer/TC-Revealer.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCAction from '@/tccomponents/component/action/TC-Action.vue';
import TCActionItem from '@/tccomponents/component/action/TC-Action-Item.vue';

@Component({
  components: {
    'tl-grid': TLGrid,
    'tc-headline': TCHeadline,
    'tl-flow': TLFlow,
    'tc-revealer': TCRevealer,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard,
    'tc-action': TCAction,
    'tc-action-item': TCActionItem
  }
})
export default class TCDAction extends Vue {}
</script>
<style lang="scss" scoped>
div[space] {
  margin-right: 5px;
}
</style>
