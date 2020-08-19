<template>
  <div class="tcd-steps">
    <h1>Variants</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
      labore minima expedita saepe est, illum repellat debitis quam tenetur.
      Debitis molestiae et quis ullam perferendis cum recusandae doloremque
      natus.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tc-headline>
        <h2 slot="title">Row</h2>
        <tc-button
          variant="opaque"
          name="prev Step"
          icon="minus"
          @click="prev"
        />
        <tc-button
          variant="opaque"
          name="next Step"
          icon="plus"
          @click="next"
        />
      </tc-headline>
      <tc-steps :current="current">
        <tc-step-item title="Validation" />
        <tc-step-item title="Authentication" />
        <tc-step-item title="Confirmation" />
      </tc-steps>

      <tc-code-example>
        <pre>
&lt;tc-steps :current="current">
  &lt;tc-step-item title="Validation" />
  &lt;tc-step-item title="Authentication" />
  &lt;tc-step-item title="Confirmation" />
&lt;/tc-steps></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false">
      <tc-headline>
        <h2 slot="title">Column</h2>
        <tc-button
          variant="opaque"
          name="prev Step"
          icon="minus"
          @click="prev"
        />
        <tc-button
          variant="opaque"
          name="next Step"
          icon="plus"
          @click="next"
        />
      </tc-headline>
      <tc-steps direction="column" :current="current">
        <tc-step-item title="Validation" />
        <tc-step-item title="Authentication" />
        <tc-step-item title="Confirmation" />
      </tc-steps>

      <tc-code-example>
        <pre>
&lt;tc-steps direction="column" :current="current">
  &lt;tc-step-item title="Validation" />
  &lt;tc-step-item title="Authentication" />
  &lt;tc-step-item title="Confirmation" />
&lt;/tc-steps></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Options</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis ea
      accusamus temporibus est architecto obcaecati nemo optio numquam nulla
      vitae perferendis, rerum eaque, sunt et aperiam a amet. Omnis?
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tc-headline>
        <h2 slot="title">Descriptions</h2>
        <tc-button
          variant="opaque"
          name="prev Step"
          icon="minus"
          @click="prev"
        />
        <tc-button
          variant="opaque"
          name="next Step"
          icon="plus"
          @click="next"
        />
      </tc-headline>
      <tc-steps :current="current">
        <tc-step-item title="Validation" description="Description #1" />
        <tc-step-item title="Authentication" description="Description #2" />
        <tc-step-item title="Confirmation" description="Description #3" />
      </tc-steps>
      <tc-code-example>
        <pre>
&lt;tc-steps :current="current">
  &lt;tc-step-item title="Validation" description="Description #1" />
  &lt;tc-step-item title="Authentication" description="Description #2" />
  &lt;tc-step-item title="Confirmation" description="Description #3" />
&lt;/tc-steps></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false">
      <tc-headline>
        <h2 slot="title">Custom Icons</h2>
        <tc-button
          variant="opaque"
          name="prev Step"
          icon="minus"
          @click="prev"
        />
        <tc-button
          variant="opaque"
          name="next Step"
          icon="plus"
          @click="next"
        />
      </tc-headline>
      <tc-steps :current="current">
        <tc-step-item title="Validation" />
        <tc-step-item title="Authentication" icon="user" />
        <tc-step-item title="Confirmation" icon="checkmark" />
      </tc-steps>
      <tc-code-example>
        <pre>
&lt;tc-steps :current="current">
  &lt;tc-step-item title="Validation" />
  &lt;tc-step-item title="Authentication" icon="user" />
  &lt;tc-step-item title="Confirmation" icon="checkmark" />
&lt;/tc-steps></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>
      TC Step Item
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga et
      voluptatibus impedit facilis odio excepturi ipsam eius incidunt magni
      laboriosam, aspernatur quod deserunt ipsum perspiciatis suscipit commodi,
      corrupti explicabo necessitatibus.
    </p>

    <tccomponents-details-api
      :component="component.children[0]"
      suffix="for TC Step Item"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCStepItem from '@/tccomponents/component/steps/TC-Step-Item.vue';
import TCSteps from '@/tccomponents/component/steps/TC-Steps.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
import { TCComponentApi } from '@/models/TCComponentApi.model';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tl-grid': TLGrid,
    'tc-steps': TCSteps,
    'tc-step-item': TCStepItem,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard,
    'tc-button': TCButton,
    'tc-headline': TCHeadline,
    'tccomponents-details-api': TCComponentsDetailsApi
  }
})
export default class TCDSteps extends Vue {
  @Prop() component!: TCComponentApi;
  public current = 1;

  public next() {
    this.current = Math.min(++this.current, 3);
  }
  public prev() {
    this.current = Math.max(--this.current, 0);
  }
}
</script>
<style lang="scss" scoped>
.tc-headline {
  margin-top: -10px;
  h2 {
    margin: 0;
  }
}
.tc-card {
  margin-top: 20px;
}
</style>
