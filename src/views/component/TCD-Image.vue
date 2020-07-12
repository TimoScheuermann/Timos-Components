<template>
  <div>
    <h1>Options</h1>
    <tl-grid>
      <portfolio-code-example>
        <tc-image :src="src"></tc-image>
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCImage from '@/tccomponents/image/TC-Image.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
@Component({
  components: {
    'tc-image': TCImage,
    'tl-grid': TLGrid,
    'portfolio-code-example': PortfolioCodeExample
  }
})
export default class TCDImage extends Vue {
  public src = 'https://gradientjoy.com/400x300?id=44';
}
</script>
