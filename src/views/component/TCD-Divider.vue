<template>
  <div>
    <h1>Variants</h1>

    <tl-grid minWidth="320">
      <portfolio-code-example tag="tc-divider" title="Simple Line">
        <tc-divider />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="With icon"
        :attr="{ color: 'red', icon: 'heart' }"
      >
        <tc-divider color="red" icon="heart" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="With text"
        :attr="{ name: 'Section' }"
      >
        <tc-divider name="Section" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="With Icon + Text"
        :attr="{ icon: 'hockey-stick', name: 'Icehockey' }"
      >
        <tc-divider icon="hockey-stick" name="Icehockey" />
      </portfolio-code-example>
    </tl-grid>

    <h1>Alignment</h1>

    <tl-grid minWidth="320">
      <portfolio-code-example
        tag="tc-divider"
        title="Left-Alignment"
        :attr="{ name: 'Left Align', position: 'left' }"
      >
        <tc-divider name="Left Align" position="left" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="Center-Alignment"
        :attr="{ name: 'Center Align', position: 'center' }"
      >
        <tc-divider name="Center Align" position="center" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="Right-Alignment"
        :attr="{ name: 'Right Align', position: 'right' }"
      >
        <tc-divider name="Right Align" position="right" />
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCDivider from '@/tccomponents/component/divider/TC-Divider.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tc-divider': TCDivider,
    'tl-grid': TLGrid
  }
})
export default class TCDDivider extends Vue {}
</script>
