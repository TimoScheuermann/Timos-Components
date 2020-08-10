<template>
  <div>
    <h1>Positioning</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime
      eaque ducimus, possimus illum, temporibus cupiditate nemo architecto esse
      nostrum dolor optio culpa velit, quam assumenda sit veritatis enim
      laboriosam.
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="100">
        <div>
          <h2>Top</h2>
          <tc-tooltip tooltip="Tooltip on top">
            <b>Hover me</b>
          </tc-tooltip>
        </div>
        <div>
          <h2>Bottom</h2>
          <tc-tooltip position="bottom" tooltip="Tooltip on bottom">
            <b>Hover me</b>
          </tc-tooltip>
        </div>
        <div>
          <h2>Right</h2>
          <tc-tooltip position="right" tooltip="Tooltip on right">
            <b>Hover me</b>
          </tc-tooltip>
        </div>
        <div>
          <h2>Left</h2>
          <tc-tooltip position="left" tooltip="Tooltip on left">
            <b>Hover me</b>
          </tc-tooltip>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-tooltip tooltip="Tooltip on top">
  &lt;b>Hover me&lt;/b>
&lt;/tc-tooltip>
&lt;tc-tooltip position="bottom" tooltip="Tooltip on bottom">
  &lt;b>Hover me&lt;/b>
&lt;/tc-tooltip>
&lt;tc-tooltip position="right" tooltip="Tooltip on right">
  &lt;b>Hover me&lt;/b>
&lt;/tc-tooltip>
&lt;tc-tooltip position="left" tooltip="Tooltip on left">
  &lt;b>Hover me&lt;/b>
&lt;/tc-tooltip></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sequi,
      velit autem repellendus facilis doloremque illum omnis sunt vel voluptatum
      impedit rem iure quaerat ipsam optio quae odit minus harum?
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="100">
        <div>
          <h2>lightBlue</h2>
          <tc-tooltip tfbackground="lightBlue" tooltip="lightBlue">
            <b>Hover me</b>
          </tc-tooltip>
        </div>
        <div>
          <h2>gold</h2>
          <tc-tooltip background="gold" tooltip="gold">
            <b>Hover me</b>
          </tc-tooltip>
        </div>
        <div>
          <h2>orange</h2>
          <tc-tooltip tfbackground="orange" tooltip="orange">
            <b>Hover me</b>
          </tc-tooltip>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-tooltip tfbackground="lightBlue" tooltip="lightBlue">
  &lt;b>Hover me&lt;/b>
&lt;/tc-tooltip>
&lt;tc-tooltip background="gold" tooltip="gold">
  &lt;b>Hover me&lt;/b>
&lt;/tc-tooltip>
&lt;tc-tooltip tfbackground="orange" tooltip="orange">
  &lt;b>Hover me&lt;/b>
&lt;/tc-tooltip></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSpinner from '@/tccomponents/component/spinner/TC-Spinner.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCTooltip from '@/tccomponents/component/tooltip/TC-Tooltip.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';

@Component({
  components: {
    'tc-spinner': TCSpinner,
    'tc-card': TCCard,
    'tc-tooltip': TCTooltip,
    'tl-grid': TLGrid,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDTooltip extends Vue {}
</script>
