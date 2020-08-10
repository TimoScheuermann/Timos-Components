<template>
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed
      dolor blanditiis ratione possimus esse minus exercitationem harum! Ea,
      nobis suscipit. Commodi doloremque eaque tempore quisquam sunt vero
      exercitationem amet.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="100">
        <div>
          <h2>Example #1</h2>
          <tc-image :src="src1" />
        </div>
        <div>
          <h2>Example #2</h2>
          <tc-image :src="src2" />
        </div>
        <div>
          <h2>Example #3</h2>
          <tc-image :src="src3" />
        </div>
        <div>
          <h2>Example #4</h2>
          <tc-image :src="src4" />
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-image src="{{ src1 }}" />
&lt;tc-image src="{{ src2 }}" />
&lt;tc-image src="{{ src3 }}" />
&lt;tc-image src="{{ src4 }}" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCImage from '@/tccomponents/component/image/TC-Image.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
@Component({
  components: {
    'tc-image': TCImage,
    'tl-grid': TLGrid,
    'portfolio-code-example': PortfolioCodeExample,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDImage extends Vue {
  public src1 = 'https://accounts.timos.design/pwa/maskIcon.svg';
  public src2 = 'https://newsroom.timos.design/pwa/maskIcon.svg';
  public src3 = 'pwa/splash/apple-icon-180.jpg';
  public src4 = 'https://portfolio.timos.design/pwa/splash/apple-icon-180.jpg';
}
</script>
