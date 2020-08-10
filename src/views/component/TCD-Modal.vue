<template>
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum
      itaque ipsam, fugit eius reprehenderit! Ullam perferendis sapiente
      delectus nesciunt dolor distinctio accusamus odio officia obcaecati
      itaque, nemo praesentium? Aspernatur.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid>
        <div>
          <h2>Sample Modal</h2>
          <tc-button
            @click="
              closeAll();
              modalSample = true;
            "
            name="Open sample"
          />
        </div>
        <div>
          <h2>With Footer</h2>
          <tc-button
            @click="
              closeAll();
              modalFooter = true;
            "
            name="Open footer"
          />
        </div>
        <div>
          <h2>More advanced</h2>
          <tc-button
            @click="
              closeAll();
              modalAdvanced = true;
            "
            name="Open advanced"
          />
        </div>
      </tl-grid>
      <br />

      <tc-segments
        :dark="$store.getters.dark"
        :segments="['Sample Modal', 'With Footer', 'More advanced']"
      >
        <tc-segment-item title="Sample Modal">
          <tc-code-example>
            <pre>
&lt;!-- modalSample is a boolean -->
&lt;tc-modal v-model="modalSample" title="Sample Modal" subtitle="Very Simple">
  &lt;p>&lt;b>Open Dev-Tools for a mobile demo&lt;/b>&lt;/p>
  &lt;p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
    expedita? Voluptates in reprehenderit modi distinctio! Quae eaque nihil
    vel ratione eius, at odit temporibus veritatis ad hic delectus. Sunt,
    vel?
  &lt;/p>
&lt;/tc-modal></pre
            >
          </tc-code-example>
        </tc-segment-item>
        <tc-segment-item title="With Footer">
          <tc-code-example>
            <pre>
&lt;!-- modalFooter is a boolean -->
&lt;tc-modal
  v-model="modalFooter"
  title="With Footer"
  subtitle="Buttons added to footer"
>
  &lt;p>&lt;b>Open Dev-Tools for a mobile demo&lt;/b>&lt;/p>
  &lt;p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
    expedita? Voluptates in reprehenderit modi distinctio! Quae eaque nihil
    vel ratione eius, at odit temporibus veritatis ad hic delectus. Sunt,
    vel?
  &lt;/p>
  &lt;template slot="footer">
    &lt;tc-button name="I do nothing" variant="filled" />
    &lt;tc-button
      name="I can close the modal"
      variant="filled"
      @click="modalFooter = false"
    />
  &lt;/template>
&lt;/tc-modal></pre
            >
          </tc-code-example>
        </tc-segment-item>
        <tc-segment-item title="More advanced">
          <tc-code-example>
            <pre>
&lt;!-- modalAdvanced is a boolean -->
&lt;tc-modal
  v-model="modalAdvanced"
  title="More advanced"
  subtitle="You can place anything you want inside the modal"
>
  &lt;p>&lt;b>Open Dev-Tools for a mobile demo&lt;/b>&lt;/p>
  &lt;p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
    expedita? Voluptates in reprehenderit modi distinctio! Quae eaque nihil
    vel ratione eius, at odit temporibus veritatis ad hic delectus. Sunt,
    vel?
  &lt;/p>
  &lt;tl-grid minWidth="200">
    &lt;tc-card :rounded="true" title="Card #1" />
    &lt;tc-card :rounded="true" title="Card #2" />
  &lt;/tl-grid>
  &lt;br />
  &lt;tc-card :rounded="true" title="Card #3" subtitle="Hi, here's a turtle">
    &lt;img
      src="https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1080&q=10"
      slot="media"
    />
    &lt;br />
    Card examples can be found
    &lt;tc-link routeName="TC-card">here&lt;/tc-link>.
  &lt;/tc-card>
  &lt;br />
  &lt;br />
  &lt;template slot="footer">
    &lt;tl-grid>
      &lt;tc-button
        name="I can close the modal"
        variant="filled"
        @click="modalFooter = false"
      />
    &lt;/tl-grid>
  &lt;/template>
&lt;/tc-modal></pre
            >
          </tc-code-example>
        </tc-segment-item>
      </tc-segments>
    </tc-card>

    <tc-modal
      :dark="$store.getters.dark"
      v-model="modalSample"
      title="Sample Modal"
      subtitle="Very Simple"
    >
      <p><b>Open Dev-Tools for a mobile demo</b></p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        expedita? Voluptates in reprehenderit modi distinctio! Quae eaque nihil
        vel ratione eius, at odit temporibus veritatis ad hic delectus. Sunt,
        vel?
      </p>
    </tc-modal>

    <tc-modal
      :dark="$store.getters.dark"
      v-model="modalFooter"
      title="With Footer"
      subtitle="Buttons added to footer"
    >
      <p><b>Open Dev-Tools for a mobile demo</b></p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        expedita? Voluptates in reprehenderit modi distinctio! Quae eaque nihil
        vel ratione eius, at odit temporibus veritatis ad hic delectus. Sunt,
        vel?
      </p>
      <template slot="footer">
        <tc-button name="I do nothing" variant="filled" />
        <tc-button
          name="I can close the modal"
          variant="filled"
          @click="modalFooter = false"
        />
      </template>
    </tc-modal>

    <tc-modal
      :dark="$store.getters.dark"
      v-model="modalAdvanced"
      title="More advanced"
      subtitle="You can place anything you want inside the modal"
    >
      <p><b>Open Dev-Tools for a mobile demo</b></p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        expedita? Voluptates in reprehenderit modi distinctio! Quae eaque nihil
        vel ratione eius, at odit temporibus veritatis ad hic delectus. Sunt,
        vel?
      </p>
      <tl-grid minWidth="200">
        <tc-card :dark="$store.getters.dark" :rounded="true" title="Card #1" />
        <tc-card :dark="$store.getters.dark" :rounded="true" title="Card #2" />
      </tl-grid>
      <br />
      <tc-card
        :dark="$store.getters.dark"
        :rounded="true"
        title="Card #3"
        subtitle="Hi, here's a turtle"
      >
        <img
          src="https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1080&q=10"
          slot="media"
        />
        <br />
        Card examples can be found
        <tc-link routeName="TC-card">here</tc-link>.
      </tc-card>
      <br />
      <br />
      <template slot="footer">
        <tl-grid>
          <tc-button
            name="I can close the modal"
            variant="filled"
            @click="modalAdvanced = false"
          />
        </tl-grid>
      </template>
    </tc-modal>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCModal from '@/tccomponents/component/modal/TC-Modal.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCSegments from '@/tccomponents/component/segments/TC-Segments.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCLink from '@/tccomponents/component/link/TC-Link.vue';
import TCSegmentItem from '@/tccomponents/component/segments/TC-Segment-Item.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-modal': TCModal,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tc-segments': TCSegments,
    'tc-segment-item': TCSegmentItem,
    'tc-link': TCLink
  }
})
export default class TCDModal extends Vue {
  public modalSample = false;
  public modalFooter = false;
  public modalAdvanced = false;

  public closeAll() {
    this.modalSample = false;
    this.modalFooter = false;
    this.modalAdvanced = false;
  }
}
</script>
