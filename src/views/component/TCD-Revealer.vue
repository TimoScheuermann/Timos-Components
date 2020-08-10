<template>
  <div class="tcd-revealer">
    <h1>Options</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
      officiis alias magni, temporibus a tempora ullam architecto. Ut, natus?
      Quod veniam cumque ratione impedit beatae aspernatur excepturi cupiditate
      voluptate incidunt.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="170">
        <tl-flow horizontal="space-between" flow="column">
          <h2>Simple Revealer</h2>
          <tc-revealer :dark="$store.getters.dark"><h2>Hello</h2></tc-revealer>
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Revealer with title</h2>
          <tc-revealer :dark="$store.getters.dark" title="Click to expand"
            ><h2>Hello</h2></tc-revealer
          >
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Icon & Title</h2>
          <tc-revealer
            :dark="$store.getters.dark"
            title="Click to expand"
            icon="heart"
          >
            <h2>Hello</h2>
          </tc-revealer>
        </tl-flow>
        <tl-flow horizontal="space-between" flow="column">
          <h2>Custom title</h2>
          <tc-revealer :dark="$store.getters.dark">
            <h2 slot="head">Huge title</h2>
            <h2>Hello</h2>
          </tc-revealer>
        </tl-flow>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-revealer>&lt;h2>Hello&lt;/h2>&lt;/tc-revealer>
&lt;tc-revealer title="Click to expand">&lt;h2>Hello&lt;/h2>&lt;/tc-revealer>
&lt;tc-revealer title="Click to expand" icon="heart">
&lt;tc-revealer>
  &lt;h2 slot="head">Huge title&lt;/h2>
  &lt;h2>Hello&lt;/h2>
&lt;/tc-revealer></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Color, Background, Highlight</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      cumque explicabo velit consectetur voluptates ut cupiditate esse?
      Accusamus quae nam, at, non reprehenderit aut sunt asperiores dolores
      fugit nemo nostrum!
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Custom Highlight Colors</h2>
      <tl-grid minWidth="150">
        <tc-revealer :dark="$store.getters.dark" highlight="error" />
        <tc-revealer :dark="$store.getters.dark" highlight="success" />
        <tc-revealer :dark="$store.getters.dark" highlight="gold" />
        <tc-revealer :dark="$store.getters.dark" highlight="pink" />
      </tl-grid>

      <tc-code-example>
        <pre>
&lt;tc-revealer highlight="error" />
&lt;tc-revealer highlight="success" />
&lt;tc-revealer highlight="gold" />
&lt;tc-revealer highlight="pink" /></pre
        >
      </tc-code-example>
      <br />
      <h2>Background & Colors</h2>
      <tl-grid minWidth="150">
        <tc-revealer
          :dark="$store.getters.dark"
          tfbackground="error"
          color="gold"
          title="Title"
        />
        <tc-revealer
          :dark="$store.getters.dark"
          tfbackground="success"
          color="#fff"
          title="Title"
        />
        <tc-revealer
          :dark="$store.getters.dark"
          background="gold"
          title="Title"
        />
        <tc-revealer
          :dark="$store.getters.dark"
          background="pink"
          color="#fff"
          title="Title"
        />
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-revealer tfbackground="error" color="gold" title="Title" />
&lt;tc-revealer tfbackground="success" color="#fff" title="Title" />
&lt;tc-revealer background="gold" title="Title" />
&lt;tc-revealer background="pink" color="#fff" title="Title" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCRevealer from '@/tccomponents/component/revealer/TC-Revealer.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'tc-revealer': TCRevealer,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard,
    'tl-grid': TLGrid,
    'tl-flow': TLFlow
  }
})
export default class TCDRevealer extends Vue {}
</script>
<style lang="scss" scoped>
.tc-revealer {
  width: 100%;
}
</style>
