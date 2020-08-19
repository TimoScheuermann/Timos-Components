<template>
  <div>
    <h1>Variants</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime
      eaque ducimus, possimus illum, temporibus cupiditate nemo architecto esse
      nostrum dolor optio culpa velit, quam assumenda sit veritatis enim
      laboriosam.
    </p>
    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="200">
        <div>
          <h2>Simple Quote</h2>
          <tc-quote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum
            adipisci nostrum ab perspiciatis numquam necessitatibus blanditiis
            in, error consequuntur, eaque non dignissimos aliquam architecto
            sint. Ad, voluptatibus debitis! Rerum.
          </tc-quote>
        </div>
        <div>
          <h2>Quote & Title</h2>
          <tc-quote title="Quote title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            in ex? Ducimus nemo aliquam tempore, hic excepturi ullam unde
            tempora laborum cumque labore minima magni eaque alias quia, at
            temporibus.
          </tc-quote>
        </div>
        <div>
          <h2>Custom Head</h2>
          <tc-quote>
            <tc-headline slot="header" title="Custom Title" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea
            enim quisquam consectetur dignissimos autem architecto fugit
            voluptatibus. Quasi perferendis voluptates nisi dolor pariatur culpa
            quam quidem minima molestias asperiores!
          </tc-quote>
        </div>
      </tl-grid>

      <tc-code-example>
        <pre>
&lt;tc-quote>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum
  adipisci nostrum ab perspiciatis numquam necessitatibus blanditiis
  in, error consequuntur, eaque non dignissimos aliquam architecto
  sint. Ad, voluptatibus debitis! Rerum.
&lt;/tc-quote>
&lt;tc-quote title="Quote title">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
  in ex? Ducimus nemo aliquam tempore, hic excepturi ullam unde
  tempora laborum cumque labore minima magni eaque alias quia, at
  temporibus.
&lt;/tc-quote>
&lt;tc-quote>
  &lt;tc-headline slot="header" title="Custom Title" />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea
  enim quisquam consectetur dignissimos autem architecto fugit
  voluptatibus. Quasi perferendis voluptates nisi dolor pariatur culpa
  quam quidem minima molestias asperiores!
&lt;/tc-quote></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aut sit
      iste expedita eaque perspiciatis, laboriosam facilis officiis a dolores
      nulla sunt mollitia fugiat in at facere. Architecto, sit magni?
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="200">
        <div>
          <h2>Color: error</h2>
          <tc-quote tfcolor="error" title="Important Quote">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </tc-quote>
        </div>
        <div>
          <h2>Color: gold</h2>
          <tc-quote color="gold" title="Special Quote">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </tc-quote>
        </div>

        <div>
          <h2>Color: success</h2>
          <tc-quote tfcolor="success" title="Healthy Quote">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </tc-quote>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-quote tfcolor="error" title="Important Quote">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
&lt;/tc-quote>
&lt;tc-quote color="gold" title="Special Quote">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
&lt;/tc-quote>
&lt;tc-quote tfcolor="success" title="Healthy Quote">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
&lt;/tc-quote>
        </pre>
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCQuote from '@/tccomponents/component/quote/TC-Quote.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
@Component({
  components: {
    'tc-quote': TCQuote,
    'tl-grid': TLGrid,
    'tc-card': TCCard,
    'tc-headline': TCHeadline,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDQuote extends Vue {}
</script>
<style lang="scss" scoped>
.tc-quote /deep/ .tc-headline {
  margin-top: 0;
}
</style>
