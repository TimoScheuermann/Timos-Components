<template>
  <div>
    <h1>Options</h1>
    <p>
      TC-Checkbox has different options, like title, position, iconChecked,
      iconUnchecked, iconAnimation and more. You can but you dont have to use
      them, they simply speed up your develeopment workflow. Below are some
      examples.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="100">
        <div>
          <h2>Checkmark</h2>
          <tl-flow>
            <tc-checkbox :dark="$store.getters.dark" />
          </tl-flow>
        </div>
        <div>
          <h2>Line</h2>
          <tl-flow>
            <tc-checkbox variant="line" :dark="$store.getters.dark" />
          </tl-flow>
        </div>
        <div>
          <h2>With Title</h2>
          <tl-flow>
            <tc-checkbox :dark="$store.getters.dark" title="Activated" />
          </tl-flow>
        </div>
        <div>
          <h2>Custom icon</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="Custom Icon"
              iconChecked="checkmark"
              iconUnchecked="cross"
              iconAnimation="spin"
            />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-checkbox />
&lt;tc-checkbox variant="line" />
&lt;tc-checkbox title="Activated" />
&lt;tc-checkbox
  title="Custom Icon"
  iconChecked="checkmark"
  iconUnchecked="cross"
  iconAnimation="spin"
/></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Positioning</h1>
    <p>
      You can customize the appearance of your card by enableing different
      properties. You can combine as many of them as you like. Below are the
      basic options you can choose from.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="150">
        <div>
          <h2>Left</h2>
          <tl-flow>
            <tc-checkbox :dark="$store.getters.dark" title="Left" />
          </tl-flow>
        </div>
        <div>
          <h2>Right</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="Right"
              position="right"
            />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-checkbox title="Left" />
&lt;tc-checkbox title="Right" position="right" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Custom Icons + Animations</h1>
    <p>
      You can define custom icons to be displayed for any state of your
      checkbox. In addition you can even specify animations on how the icon
      should be changed.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="150">
        <div>
          <h2>Animation: spin</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="Spin"
              iconChecked="arrow-down"
              iconUnchecked="arrow-up"
              iconAnimation="spin"
            />
          </tl-flow>
        </div>
        <div>
          <h2>Animation: step</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="Step"
              iconChecked="minus"
              iconUnchecked="plus"
              iconAnimation="step"
            />
          </tl-flow>
        </div>
        <div>
          <h2>Animation: flip</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="Flip"
              iconChecked="key"
              iconUnchecked="lock-closed"
              iconAnimation="flip"
            />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-checkbox
  title="Spin"
  iconChecked="arrow-down"
  iconUnchecked="arrow-up"
  iconAnimation="spin"
/>
&lt;tc-checkbox
  title="Step"
  iconChecked="minus"
  iconUnchecked="plus"
  iconAnimation="step"
/>
&lt;tc-checkbox
  title="Flip"
  iconChecked="key"
  iconUnchecked="lock-closed"
  iconAnimation="flip"
/></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors & Backgrounds</h1>
    <p>
      You can further customize your checkboxes by setting different colors. You
      can either use tfcolor for pre-defined colors or set your own using the
      color attribute.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="150">
        <div>
          <h2>Error</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="error"
              variant="line"
              tfbackground="error"
            />
          </tl-flow>
        </div>
        <div>
          <h2>Alarm</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="alarm"
              position="right"
              tfcolor="alarm"
              iconChecked="minus"
              iconUnchecked="plus"
              iconAnimation="step"
            />
          </tl-flow>
        </div>
        <div>
          <h2>Custom</h2>
          <tl-flow>
            <tc-checkbox
              :dark="$store.getters.dark"
              title="custom"
              position="right"
              background="#10ac84"
            />
          </tl-flow>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-checkbox variant="line" title="error" tfbackground="error" />
&lt;tc-checkbox
  title="alarm"
  position="right"
  tfcolor="alarm"
  iconChecked="minus"
  iconUnchecked="plus"
  iconAnimation="step"
/>
&lt;tc-checkbox title="custom" position="right" background="#10ac84" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCCheckbox from '@/tccomponents/component/checkbox/TC-Checkbox.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tl-flow': TLFlow,
    'tc-checkbox': TCCheckbox,
    'tl-grid': TLGrid
  }
})
export default class TCDCheckbox extends Vue {
  //TC-Components-Detail--Button.vue
}
</script>
