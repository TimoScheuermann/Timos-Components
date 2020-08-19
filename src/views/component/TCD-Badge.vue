<template>
  <div>
    <h1>Options</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam
      nisi adipisci soluta obcaecati ratione, consequuntur deserunt nemo
      accusantium repellendus, eaque vel, nihil tempora voluptates laboriosam!
      Numquam illo beatae assumenda!
    </p>
    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="140">
        <div>
          <h2>Simple Badge</h2>
          <tl-flow>
            <tc-badge :value="10">
              <tc-button :disabled="true" name="Simple Badge" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>Text Badge</h2>
          <tl-flow>
            <tc-badge value="new">
              <tc-button :disabled="true" name="Cool Feature" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>Overflow Badge</h2>
          <tl-flow>
            <tc-badge :value="100" :max="99">
              <tc-button :disabled="true" name="Mails" icon="mail" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>Empty Badge</h2>
          <tl-flow>
            <tc-badge :showEmpty="true">
              <tc-button :disabled="true" icon="chat-bubble" />
            </tc-badge>
          </tl-flow>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-badge :value="10">
  &lt;tc-button :disabled="true" name="Simple Badge" />
&lt;/tc-badge>
&lt;tc-badge value="new">
  &lt;tc-button :disabled="true" name="Cool Feature" />
&lt;/tc-badge>
&lt;tc-badge :value="100" :max="99">
  &lt;tc-button :disabled="true" icon="mail" />
&lt;/tc-badge>
&lt;tc-badge :showEmpty="true">
  &lt;tc-button :disabled="true" icon="chat-bubble" />
&lt;/tc-badge></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Positioning</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores error
      dolorem dolore voluptate magni facere aut sequi, aliquid in repellat,
      debitis, impedit sint voluptatum necessitatibus iste. Aut, sequi optio.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="140">
        <div>
          <h2>Corner</h2>
          <tl-flow>
            <tc-badge value="corner">
              <tc-button :disabled="true" name="Corner Badge" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>Behind</h2>
          <tl-flow>
            <tc-badge value="behind" position="behind">
              <tc-button :disabled="true" name="Behind Badge" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>Inside</h2>
          <tl-flow>
            <tc-badge value="inside" position="inside">
              <tc-button :disabled="true" name="Inside Badge" />
            </tc-badge>
          </tl-flow>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-badge value="corner">
  &lt;tc-button :disabled="true" name="Corner Badge" />
&lt;/tc-badge>
&lt;tc-badge value="behind" position="behind">
  &lt;tc-button :disabled="true" name="Behind Badge" />
&lt;/tc-badge>
&lt;tc-badge value="inside" position="inside">
  &lt;tc-button :disabled="true" name="Inside Badge" />
&lt;/tc-badge></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
      necessitatibus debitis ipsam, quo reprehenderit ratione dicta dolore eaque
      iusto? Excepturi dolor error nemo voluptas unde eum officiis corporis.
      Reiciendis, adipisci.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="140">
        <div>
          <h2>primary</h2>
          <tl-flow>
            <tc-badge :showEmpty="true" tfcolor="primary">
              <tc-button :disabled="true" name="Custom Color" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>teal</h2>
          <tl-flow>
            <tc-badge :showEmpty="true" color="teal">
              <tc-button :disabled="true" name="Custom Color" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>success</h2>
          <tl-flow>
            <tc-badge :showEmpty="true" tfcolor="success">
              <tc-button :disabled="true" name="Custom Color" />
            </tc-badge>
          </tl-flow>
        </div>
        <div>
          <h2>alarm</h2>
          <tl-flow>
            <tc-badge :showEmpty="true" tfcolor="alarm">
              <tc-button :disabled="true" name="Custom Color" />
            </tc-badge>
          </tl-flow>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-badge :showEmpty="true" tfcolor="primary">
  &lt;tc-button :disabled="true" name="Custom Color" />
&lt;/tc-badge>
&lt;tc-badge :showEmpty="true" color="teal">
  &lt;tc-button :disabled="true" name="Custom Color" />
&lt;/tc-badge>
&lt;tc-badge :showEmpty="true" tfcolor="success">
  &lt;tc-button :disabled="true" name="Custom Color" />
&lt;/tc-badge>
&lt;tc-badge :showEmpty="true" tfcolor="alarm">
  &lt;tc-button :disabled="true" name="Custom Color" />
&lt;/tc-badge></pre
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
import TCBadge from '@/tccomponents/component/badge/TC-Badge.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tc-badge': TCBadge,
    'tl-flow': TLFlow,
    'tc-card': TCCard,
    'tf-icon': TFIcon,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDBadge extends Vue {
  public colors: string[] = ['primary', 'error', 'success', 'alarm'];
}
</script>
