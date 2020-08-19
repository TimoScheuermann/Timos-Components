<template>
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia odio maxime
      quo rerum, necessitatibus distinctio! Explicabo hic aut, iste aliquid quo
      adipisci repellendus nihil, libero placeat laborum aspernatur, id
      praesentium.
    </p>

    <tc-card :rounded="true" :shadow="false" snbi>
      <h2>Sample Segments</h2>
      <tc-segments>
        <tc-segment-item>
          <h2>item content 1</h2>
        </tc-segment-item>
        <tc-segment-item>
          <h2>item content 2</h2>
        </tc-segment-item>
        <tc-segment-item>
          <h2>item content 3</h2>
        </tc-segment-item>
      </tc-segments>
      <tc-code-example>
        <pre>
&lt;tc-segments>
  &lt;tc-segment-item>
    &lt;h2>item content 1&lt;/h2>
  &lt;/tc-segment-item>
  &lt;tc-segment-item>
    &lt;h2>item content 2&lt;/h2>
  &lt;/tc-segment-item>
  &lt;tc-segment-item>
    &lt;h2>item content 3&lt;/h2>
  &lt;/tc-segment-item>
&lt;/tc-segments></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Color, Background & Highlight</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia odio maxime
      quo rerum, necessitatibus distinctio! Explicabo hic aut, iste aliquid quo
      adipisci repellendus nihil, libero placeat laborum aspernatur, id
      praesentium.
    </p>

    <tc-card :rounded="true" :shadow="false" snbi>
      <h2>Colorful Segment</h2>
      <tc-segments tfbackground="error" highlight="gold" color="#fff">
        <tc-segment-item>
          <tc-card
            tfbackground="alarm"
            rounded="true"
            title="Place anything you want"
            subtitle="inside tc-segment-item"
          />
        </tc-segment-item>
        <tc-segment-item>
          <tl-flow>
            <tc-badge value="it doesnt matter">
              <tc-button
                name="just anything you can imagine"
                :disabled="true"
              />
            </tc-badge>
          </tl-flow>
        </tc-segment-item>
      </tc-segments>

      <tc-code-example>
        <pre>
&lt;tc-segments tfbackground="error" highlight="gold" color="#fff">
  &lt;tc-segment-item>
    &lt;tc-card
      rounded="true"
      tfbackground="alarm"
      title="Place anything you want"
      subtitle="inside tc-segment-item"
    />
  &lt;/tc-segment-item>
  &lt;tc-segment-item>
    &lt;tl-flow>
      &lt;tc-badge value="it doesnt matter">
        &lt;tc-button
          name="just anything you can imagine"
          :disabled="true"
        />
      &lt;/tc-badge>
    &lt;/tl-flow>
  &lt;/tc-segment-item>
&lt;/tc-segments></pre
        >
      </tc-code-example>
    </tc-card>
    <h1>TC Segment Item</h1>
    <tccomponents-details-api
      :component="component.children[0]"
      suffix="for TC Segment Item"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import TCSegments from '@/tccomponents/component/segments/TC-Segments.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCSegmentItem from '@/tccomponents/component/segments/TC-Segment-Item.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCBadge from '@/tccomponents/component/badge/TC-Badge.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
import { TCComponentApi } from '@/models/TCComponentApi.model';

@Component({
  components: {
    'tc-segments': TCSegments,
    'tc-segment-item': TCSegmentItem,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard,
    'tc-badge': TCBadge,
    'tc-button': TCButton,
    'tl-flow': TLFlow,
    'tccomponents-details-api': TCComponentsDetailsApi
  }
})
export default class TCDSegment extends Vue {
  @Prop() component!: TCComponentApi;
}
</script>
