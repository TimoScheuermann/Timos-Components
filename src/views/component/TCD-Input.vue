<template>
  <div>
    <h1>Options</h1>
    <p>
      TC-Input has different options, like title, placeholder, type, icon,
      disabled and more. You can but you dont have to use them, they simply
      speed up your develeopment workflow. Below are some examples.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="200">
        <tl-flow flow="column" horizontal="space-between">
          <h2>Simple Text Input</h2>
          <tc-input :dark="$store.getters.dark" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Text Input & Icon</h2>
          <tc-input :dark="$store.getters.dark" icon="user" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Simple Number Input</h2>
          <tc-input :dark="$store.getters.dark" type="number" value="0" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Number Input & Icon</h2>
          <tc-input
            :dark="$store.getters.dark"
            type="number"
            icon="percentage"
            value="0"
          />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Number Input & Button</h2>
          <tc-input
            :dark="$store.getters.dark"
            type="number"
            :buttons="true"
            value="0"
          />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Number Input & Buttons & Icon</h2>
          <tc-input
            :dark="$store.getters.dark"
            type="number"
            :buttons="true"
            icon="file-empty"
          />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Disabled Input</h2>
          <tc-input :dark="$store.getters.dark" :disabled="true" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Input with placeholder</h2>
          <tc-input :dark="$store.getters.dark" placeholder="placeholder" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Input with Title</h2>
          <tc-input :dark="$store.getters.dark" title="Title" />
        </tl-flow>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-input />
&lt;tc-input icon="user" />
&lt;tc-input type="number" />
&lt;tc-input type="number" icon="percentage" />
&lt;tc-input type="number" :buttons="true" />
&lt;tc-input type="number" :buttons="true" icon="file-empty" />
&lt;tc-input :disabled="true" />
&lt;tc-input placeholder="placeholder" />
&lt;tc-input title="Title" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Types</h1>
    <p>You can assign the following input types to TC Input</p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-flow>
        <tc-button
          v-for="t in inputTypes"
          :key="t"
          :name="t"
          :variant="t === currentType ? 'filled' : 'border'"
          :tfbackground="$store.getters.dark ? 'colorDark' : 'color'"
          :color="$store.getters.dark ? '#000' : '#fff'"
          @click="currentType = t"
        />
      </tl-flow>
      <br />
      <br />
      <tl-flow>
        <tc-input
          :dark="$store.getters.dark"
          :title="'Type: ' + currentType"
          :type="currentType"
        />
      </tl-flow>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCInput from '@/tccomponents/component/input/TC-Input.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCLink from '@/tccomponents/component/link/TC-Link.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tc-input': TCInput,
    'tl-grid': TLGrid,
    'tc-link': TCLink,
    'tc-button': TCButton,
    'tl-flow': TLFlow
  }
})
export default class TCDInput extends Vue {
  currentType = 'text';
  inputTypes: string[] = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ];
}
</script>
