<template>
  <div>
    <h1>Variants</h1>
    <p>
      Buttons can have different variants, depending on their use-cases. Every
      variant has its own disabled state.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="200">
        <div v-for="variant in variants" :key="variant">
          <h2>{{ variant }}</h2>
          <tl-flow>
            <tc-button :variant="variant" name="Button" />
            <tc-button :variant="variant" name="Button" icon="heart" />
            <tc-button :variant="variant" icon="newspaper" />
            <tc-button :variant="variant" name="Disabled" :disabled="true" />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-button variant="variant" name="Button" />
&lt;tc-button variant="variant" name="Button" icon="heart" />
&lt;tc-button variant="variant" icon="newspaper" />
&lt;tc-button variant="variant" name="Disabled" :disabled="true" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Assign colors</h1>
    <p>
      You can change the appearance of a button even more by setting different
      colors. Here are some examples. You can use
      <tc-link :to="{ name: 'TF-colors' }">pre-defined colors</tc-link> or asign
      custom hex/rgb/hsl values.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="200">
        <div v-for="color in colors" :key="color">
          <h2>{{ color }}</h2>
          <tl-flow>
            <tc-button :tfbackground="color" name="Button" />
            <tc-button
              :tfbackground="color"
              variant="filled"
              name="Button"
              icon="tccomponents-tc"
            />
            <tc-button :tfbackground="color" variant="opaque" icon="github" />
            <tc-button :tfbackground="color" name="Disabled" :disabled="true" />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-button tfbackground="color" name="Button" />
&lt;tc-button tfbackground="color" variant="filled" name="Button" icon="tccomponents-tc" />
&lt;tc-button tfbackground="color" variant="opaque" icon="github" />
&lt;tc-button tfbackground="color" name="Disabled" :disabled="true" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCLink from '@/tccomponents/component/link/TC-Link.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tl-flow': TLFlow,
    'tc-link': TCLink
  }
})
export default class TCDButton extends Vue {
  public variants: string[] = ['Border (default)', 'Filled', 'Opaque'];
  public colors: string[] = ['primary', 'error', 'success', 'alarm'];
}
</script>
