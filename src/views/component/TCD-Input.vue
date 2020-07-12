<template>
  <div>
    <h1>Options</h1>

    <tl-grid minWidth="300">
      <portfolio-code-example title="Simple Text Input" tag="tc-input">
        <tc-input />
      </portfolio-code-example>
      <portfolio-code-example
        title="Text Input + Icon"
        tag="tc-input"
        :attr="{ icon: 'user' }"
      >
        <tc-input icon="user" />
      </portfolio-code-example>
      <portfolio-code-example
        title="Simple Number Input"
        tag="tc-input"
        :attr="{ type: 'number' }"
      >
        <tc-input type="number" />
      </portfolio-code-example>
      <portfolio-code-example
        title="Number Input + Icon"
        tag="tc-input"
        :attr="{ type: 'number', icon: 'percentage' }"
      >
        <tc-input type="number" icon="percentage" />
      </portfolio-code-example>
      <portfolio-code-example
        title="Number Input + Buttons"
        tag="tc-input"
        :attr="{ buttons: 'true', type: 'number' }"
      >
        <tc-input :buttons="true" type="number" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Number Input + Buttons + Icon"
        tag="tc-input"
        :attr="{ buttons: 'true', type: 'number', icon: 'alarm' }"
      >
        <tc-input type="number" :buttons="true" icon="alarm" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Disabled Input"
        tag="tc-input"
        :attr="{ icon: 'alarm', disabled: true }"
      >
        <tc-input :disabled="true" icon="alarm" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Input with placeholder"
        tag="tc-input"
        :attr="{ placeholder: 'Username' }"
      >
        <tc-input placeholder="Username" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Input with Title"
        tag="tc-input"
        :attr="{ title: 'Username', icon: 'user' }"
      >
        <tc-input title="Username" icon="user" />
      </portfolio-code-example>
    </tl-grid>

    <h1>Types</h1>

    <p>You can assign the following input types to TC-Input</p>

    <div class="inputTypes">
      <div
        v-for="t in inputTypes"
        :key="t"
        class="inputTypes--type"
        :class="{ 'inputTypes--type__selected': t === currentType }"
        @click="currentType = t"
      >
        {{ t }}
      </div>
    </div>
    <p><b>Example</b></p>
    <tc-input
      width="fit-content"
      :title="'Type: ' + currentType"
      :type="currentType"
    />
    <div class="fyi" v-if="currentType === 'color'">
      <p>
        <b><i class="ti ti-i-circle" /> FYI</b>
      </p>
      <p>
        For a better user-experience I highly recommend using
        <tc-link>tc-color-selector</tc-link>.
      </p>
    </div>
    <p><br /></p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCInput from '@/tccomponents/input/TC-Input.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCLink from '@/tccomponents/link/TC-Link.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tc-input': TCInput,
    'tl-grid': TLGrid,
    'tc-link': TCLink
  }
})
export default class TCDInput extends Vue {
  // TODO:
  // Add placeholder example
  // Add Title example

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
<style lang="scss" scoped>
.tc-input {
  margin-top: 30px;
}

.fyi i {
  margin-right: 5px;
  color: #08f;
}
.inputTypes {
  display: flex;
  flex-wrap: wrap;
  .inputTypes--type {
    white-space: nowrap;
    margin: 3px;
    border-radius: 5px;
    background: #f0f0f0f0;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid #f0f0f0;
    transition: 0.2s ease-in-out;

    &:hover,
    &.inputTypes--type__selected {
      border-color: rgba(#111, 0.4);
    }
    &.inputTypes--type__selected {
      background: rgba(#111, 0.7);
      color: #fff;
    }
  }
}
</style>
