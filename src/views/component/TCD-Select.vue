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
          <tc-select>
            <tc-select-item v-for="v in values" :key="v" :title="v" />
          </tc-select>
        </div>
        <div>
          <h2>Multiple Values</h2>
          <tc-select
            :multiple="true"
            :values="values"
            placeholder="Select multiple"
          >
            <tc-select-item v-for="v in values" :key="v" :title="v" />
          </tc-select>
        </div>
        <div>
          <h2>Placeholder</h2>
          <tc-select placeholder="Choose one item" :values="values">
            <tc-select-item v-for="v in values" :key="v" :title="v" />
          </tc-select>
        </div>
        <div>
          <h2>Title</h2>
          <tc-select title="Choose one item" :values="values">
            <tc-select-item v-for="v in values" :key="v" :title="v" />
          </tc-select>
        </div>
        <div>
          <h2>Custom icon</h2>
          <tc-select icon="tccomponents-tc" :values="values">
            <tc-select-item v-for="v in values" :key="v" :title="v" />
          </tc-select>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-select>
  &lt;tc-select-item title="Item #1" />
  &lt;tc-select-item title="Item #2" />
  &lt;tc-select-item title="Item #3" />
  &lt;tc-select-item title="Item #4" />
  &lt;tc-select-item title="Item #5" />
&lt;/tc-select>
&lt;tc-select :multiple="true" placeholder="Select multiple">
  ...
&lt;/tc-select>
&lt;tc-select placeholder="Choose one item">
  ...
&lt;/tc-select>
&lt;tc-select title="Choose one item">
  ...
&lt;/tc-select>
&lt;tc-select icon="tccomponents-tc">
  ...
&lt;/tc-select></pre
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
import TCSelectItem from '@/tccomponents/component/select/TC-Select-Item.vue';
@Component({
  components: {
    'tc-select': TCSelect,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tl-grid': TLGrid,
    'tc-select-item': TCSelectItem
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
