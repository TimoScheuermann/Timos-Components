<template>
  <div>
    <h1>Options</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus provident
      totam delectus dignissimos. Amet sed perferendis sit nulla, illo sequi? Et
      ullam facilis accusamus blanditiis, quis quisquam harum consequatur sint!
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="140">
        <tl-flow horizontal="space-between" flow="column">
          <h2>Basic Slider</h2>
          <tc-slider />
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Slider & Icons</h2>
          <tc-slider iconStart="tiles-four" iconEnd="tiles-sixteen" />
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Slider & 1 Icon</h2>
          <tc-slider iconStart="flashlight" />
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Slider & 1 Icon</h2>
          <tc-slider tfcolor="error" iconEnd="cross-inverted" />
        </tl-flow>
      </tl-grid>

      <tc-code-example>
        <pre>
&lt;tc-slider />
&lt;tc-slider iconStart="tiles-four" iconEnd="tiles-sixteen" />
&lt;tc-slider iconStart="flashlight" />
&lt;tc-slider iconEnd="cross-inverted" tfcolor="error" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors & Backgrounds</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem a laborum
      facilis ipsum iusto culpa fugiat explicabo hic, fuga autem dolores
      consequatur voluptates perferendis quos. Aperiam qui quas perspiciatis
      fugit.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="140">
        <tl-flow horizontal="space-between" flow="column">
          <h2>Example #1</h2>
          <tc-slider tfcolor="error" />
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Example #2</h2>
          <tc-slider color="purple" background="pink" />
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Example #3</h2>
          <tc-slider tfbackground="lightBlue" tfcolor="darkBlue" />
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Example #4</h2>
          <tc-slider tfcolor="success" background="green" />
        </tl-flow>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-slider tfcolor="error" />
&lt;tc-slider color="purple" background="pink" />
&lt;tc-slider tfbackground="lightBlue" tfcolor="darkBlue" />
&lt;tc-slider tfcolor="success" background="green" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSlider from '@/tccomponents/component/slider/TC-Slider.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'tc-slider': TCSlider,
    'tc-card': TCCard,
    'tl-grid': TLGrid,
    'tl-flow': TLFlow,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDSlider extends Vue {}
</script>
