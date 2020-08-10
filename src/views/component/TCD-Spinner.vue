<template>
  <div>
    <h1>Variants</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
      necessitatibus placeat minima et hic nisi officiis laudantium delectus, ab
      aut itaque, numquam ducimus, voluptatum optio maiores ad aspernatur. At,
      officia.
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="140">
        <div v-for="v in variants" :key="v">
          <h2>{{ v }}</h2>
          <tl-flow>
            <tc-spinner :dark="$store.getters.dark" :variant="v" />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example>
        <pre v-for="v in variants" :key="v + 'x'">
&lt;tc-spinner variant="{{ v }}" />
</pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
      necessitatibus placeat minima et hic nisi officiis laudantium delectus, ab
      aut itaque, numquam ducimus, voluptatum optio maiores ad aspernatur. At,
      officia.
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="140">
        <div>
          <h2>error</h2>
          <tl-flow>
            <tc-spinner tfcolor="error" variant="dots-spin" />
          </tl-flow>
        </div>
        <div>
          <h2>magenta</h2>
          <tl-flow>
            <tc-spinner color="magenta" variant="bars" />
          </tl-flow>
        </div>
        <div>
          <h2>lightBlue</h2>
          <tl-flow>
            <tc-spinner tfcolor="lightBlue" variant="dots-wave" />
          </tl-flow>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-spinner tfcolor="error" variant="dots-spin" />
&lt;tc-spinner color="magenta" variant="bars" />
&lt;tc-spinner tfcolor="lightBlue" variant="dots-wave" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSpinner from '@/tccomponents/component/spinner/TC-Spinner.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
@Component({
  components: {
    'tc-spinner': TCSpinner,
    'tl-grid': TLGrid,
    'tl-flow': TLFlow,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDSpinner extends Vue {
  public variants: string[] = [
    'bars',
    'bars-breath',
    'dots',
    'dots-breath',
    'dots-spin',
    'dots-wave'
  ];
}
</script>
