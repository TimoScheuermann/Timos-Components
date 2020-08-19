<template>
  <div>
    <h1>Options</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vitae,
      voluptates saepe ullam nostrum eius, expedita dolore, facere ducimus unde
      eligendi sed. Facere minima nihil id possimus harum! Ea, perspiciatis!
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="120">
        <div>
          <h2>Simple Select</h2>
          <tc-select :values="values" />
        </div>
        <div>
          <h2>Multiple Values</h2>
          <tc-select
            :multiple="true"
            :values="values"
            placeholder="Select multiple"
          />
        </div>
        <div>
          <h2>Placeholder</h2>
          <tc-select placeholder="Choose one item" :values="values" />
        </div>
        <div>
          <h2>Title</h2>
          <tc-select title="Choose one item" :values="values" />
        </div>
        <div>
          <h2>Custom icon</h2>
          <tc-select icon="tccomponents-tc" :values="values" />
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-select :values="['Item #1', ...]" />
&lt;tc-select :multiple="true" placeholder="Select multiple" :values="['Item #1', ...]" />
&lt;tc-select placeholder="Choose one item" :values="['Item #1', ...]" />
&lt;tc-select title="Choose one item" :values="['Item #1', ...]" />
&lt;tc-select icon="tccomponents-tc" :values="['Item #1', ...]" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSelect from '@/tccomponents/component/select/TC-Select.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
@Component({
  components: {
    'tc-select': TCSelect,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tl-grid': TLGrid
  }
})
export default class TCDSelect extends Vue {
  public values: string[] = [
    'Item #1',
    'Item #2',
    'Item #3',
    'Item #4',
    'Item #5'
  ];
}
</script>
