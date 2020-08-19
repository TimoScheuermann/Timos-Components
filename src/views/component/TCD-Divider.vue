<template>
  <div>
    <h1>Options</h1>
    <p>
      TC-Divider has different-predesigned options, like name, icon and
      position. You can but you dont have to use them, they simply speed up your
      develeopment workflow. Below are some examples.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="150">
        <div>
          <h2>Simple Line</h2>
          <tc-divider />
        </div>
        <div>
          <h2>With icon & color</h2>
          <tc-divider icon="heart" tfcolor="error" />
        </div>
        <div>
          <h2>With text</h2>
          <tc-divider name="Sample text" />
        </div>
        <div>
          <h2>With icon & text</h2>
          <tc-divider name="Icehockey" icon="hockey-stick" />
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-divider />
&lt;tc-divider icon="heart" tfcolor="error" />
&lt;tc-divider name="Sample text" />
&lt;tc-divider name="Icehockey" icon="hockey-stick" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Positioning</h1>
    <p>
      You can further define the position of your text/icon by setting the
      position attribute to whereever you want your content to be aligned.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="150">
        <div>
          <h2>Left-Alignment</h2>
          <tc-divider position="left" name="left" />
        </div>
        <div>
          <h2>Center-Alignment</h2>
          <tc-divider position="center" name="center" />
        </div>
        <div>
          <h2>Right-Alignment</h2>
          <tc-divider position="right" name="right" />
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-divider position="left" name="left" />
&lt;tc-divider position="center" name="center" />
&lt;tc-divider position="right" name="right" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCDivider from '@/tccomponents/component/divider/TC-Divider.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-divider': TCDivider,
    'tl-grid': TLGrid,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDDivider extends Vue {}
</script>
