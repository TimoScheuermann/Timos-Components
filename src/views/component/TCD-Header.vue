<template>
  <div>
    <h1>Options</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure,
      reprehenderit ducimus veritatis tempore, delectus, voluptatum hic cumque
      consectetur voluptas ad explicabo accusantium natus? Magni adipisci quam
      porro consequatur repellat?
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Simple Header</h2>
      <tc-header :dark="$store.getters.dark" title="Simple Header" />
      <tc-code-example>
        <pre>&lt;tc-header title="Simple Header" /></pre>
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Header & Button</h2>
      <tc-header :dark="$store.getters.dark" title="Child View">
        <tc-header-button slot="button" name="Parent View" />
      </tc-header>
      <tc-code-example>
        <pre>
&lt;tc-header title="Child View">
  &lt;tc-header-button slot="button" name="Parent View" />
&lt;/tc-header></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Header & Default Slot</h2>
      <tc-header :dark="$store.getters.dark" title="Title">
        <tc-header-button slot="button" />
        <tc-button icon="login" name="login" />
      </tc-header>
      <tc-code-example>
        <pre>
&lt;tc-header title="Title">
  &lt;tc-header-button slot="button"  />
  &lt;tc-button icon="login" name="login" />
&lt;/tc-header></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Variants</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
      debitis unde quis voluptate obcaecati blanditiis provident nisi minus
      harum ducimus quae nulla eveniet a ea, et corporis itaque adipisci
      assumenda.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Sticky / Fixed</h2>
      <tc-header
        :dark="$store.getters.dark"
        title="Sticky Header; top=0"
        variant="sticky"
        top="0"
      />
      <tc-code-example>
        <pre>
&lt;tc-header title="Sticky Header; top=0" variant="sticky" top="0" /></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Floating</h2>
      <tc-header
        :dark="$store.getters.dark"
        title="Floating Header; top=0"
        variant="floating"
        top="0"
      />
      <tc-code-example>
        <pre>
&lt;tc-header title="Floating Header; top=0" variant="floating" top="0" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>TC Header Button</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum
      commodi, sit est quibusdam, quia earum sed nesciunt in iste aut enim,
      dignissimos quo vero a fuga. Vero, quisquam eveniet.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Variants</h2>
      <tl-grid>
        <div>
          <h3>Simple Header Button</h3>
          <tc-header-button />
        </div>
        <div>
          <h3>Custom Name</h3>
          <tc-header-button name="About" />
        </div>
        <div>
          <h3>Name & Icon</h3>
          <tc-header-button name="TC Header" icon="bar" routeName="TC-header" />
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-header-button />
&lt;tc-header-button name="About" />
&lt;tc-header-button name="TC Header" icon="bar" routeName="TC-header" /></pre
        >
      </tc-code-example>
      <tccomponents-details-api
        suffix="for TC Header Button"
        :dark="$store.getters.dark"
        :component="component.children[0]"
      />
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import TCHeader from '@/tccomponents/component/header/TC-Header.vue';

import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCHeaderButton from '@/tccomponents/component/header/TC-Header-Button.vue';
import { TCComponent } from '@/models/TCComponent.model';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tc-header': TCHeader,
    'tc-header-button': TCHeaderButton,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tccomponents-details-api': TCComponentsDetailsApi
  }
})
export default class TCDHeader extends Vue {
  @Prop() component!: TCComponent;
}
</script>
<style lang="scss" scoped>
.tc-header {
  position: static !important;
}
.tc-card:not(:first-child) {
  margin-top: 20px;
}
</style>
