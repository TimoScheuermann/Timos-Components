<template>
  <div>
    <h1>Options & Colors</h1>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="140">
        <div>
          <h2>Simple Switch</h2>
          <tc-switch />
        </div>
        <div>
          <h2>Color: error</h2>
          <tc-switch tfcolor="error" />
        </div>
        <div>
          <h2>Color: lime</h2>
          <tc-switch color="lime" />
        </div>
        <div>
          <h2>Color: alarm</h2>
          <tc-switch tfcolor="alarm" />
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-switch />
&lt;tc-switch tfcolor="error" />
&lt;tc-switch color="lime" />
&lt;tc-switch tfcolor="alarm" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSwitch from '@/tccomponents/component/switch/TC-Switch.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
@Component({
  components: {
    'tc-switch': TCSwitch,
    'tc-card': TCCard,
    'tl-grid': TLGrid,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDSwitch extends Vue {}
</script>
