<template>
  <div>
    <h1>Variants</h1>

    <tl-grid minWidth="320">
      <portfolio-code-example tag="tc-checkbox" title="Simple Checkbox">
        <tc-checkbox />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="With Title"
        :attr="{ title: 'Hello World' }"
      >
        <tc-checkbox title="Hello World" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="Custom Symbol"
        :attr="{
          title: 'Custom Icon',
          iconChecked: 'checkmark',
          iconUnchecked: 'cross',
          iconAnimation: 'spin'
        }"
      >
        <tc-checkbox
          title="Custom Icon"
          iconChecked="checkmark"
          iconUnchecked="cross"
          iconAnimation="spin"
        />
      </portfolio-code-example>
    </tl-grid>

    <h1>Options</h1>

    <tl-grid>
      <portfolio-code-example
        tag="tc-checkbox"
        title="Position: left"
        :attr="{ title: 'Position: Left' }"
      >
        <tc-checkbox title="Position: Left" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="Position: right"
        :attr="{ title: 'Position: Right', position: 'right' }"
      >
        <tc-checkbox title="Position: Right" position="right" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="Custom color"
        :attr="{ title: 'Color: Red', color: 'red' }"
      >
        <tc-checkbox title="Color: Red" color="red" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="Custom color + icon"
        :attr="{
          title: 'Color: Orange',
          color: 'orange',
          iconChecked: 'sun',
          iconUnchecked: 'moon'
        }"
      >
        <tc-checkbox
          title="Color: Orange"
          color="orange"
          iconChecked="sun"
          iconUnchecked="moon"
        />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="Animation: step"
        :attr="{
          title: 'Animation: step',
          iconChecked: 'minus',
          iconUnchecked: 'plus',
          iconAnimation: 'step'
        }"
      >
        <tc-checkbox
          title="Animation: step"
          iconChecked="minus"
          iconUnchecked="plus"
          iconAnimation="step"
        />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="Animation: spin"
        :attr="{
          title: 'Animation: spin',
          iconChecked: 'arrow-down',
          iconUnchecked: 'arrow-up',
          iconAnimation: 'spin'
        }"
      >
        <tc-checkbox
          title="Animation: spin"
          iconChecked="arrow-down"
          iconUnchecked="arrow-up"
          iconAnimation="spin"
        />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-checkbox"
        title="Animation: flip"
        :attr="{
          title: 'Animation: flip',
          iconChecked: 'key',
          iconUnchecked: 'lock-closed',
          iconAnimation: 'flip'
        }"
      >
        <tc-checkbox
          title="Animation: flip"
          iconChecked="key"
          iconUnchecked="lock-closed"
          iconAnimation="flip"
        />
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCCheckbox from '@/tccomponents/component/checkbox/TC-Checkbox.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tc-checkbox': TCCheckbox,
    'tl-grid': TLGrid
  }
})
export default class TCDCheckbox extends Vue {
  //TC-Components-Detail--Button.vue
}
</script>
