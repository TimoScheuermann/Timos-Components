<template>
  <div>
    <tc-headline title="Checkbox" />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      placeat ad ullam ipsum architecto mollitia repellendus, excepturi itaque
      nisi distinctio eligendi praesentium sapiente qui harum consectetur enim
      ipsa quidem impedit.
    </p>

    <tc-headline title="Variants" />

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

    <tc-headline title="Options" />

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
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCCheckbox from '@/tccomponents/checkbox/TC-Checkbox.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tc-checkbox': TCCheckbox,
    'tl-grid': TLGrid
  }
})
export default class TCDCheckbox extends Vue {
  //TC-Components-Detail--Button.vue
}
</script>
