<template>
  <div>
    <h1>Options</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime
      eaque ducimus, possimus illum, temporibus cupiditate nemo architecto esse
      nostrum dolor optio culpa velit, quam assumenda sit veritatis enim
      laboriosam.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="120">
        <div>
          <h2>Variant: border</h2>
          <tc-scroll-up />
        </div>
        <div>
          <h2>Variant: filled</h2>
          <tc-scroll-up variant="filled" />
        </div>
        <div>
          <h2>Sizes</h2>
          <tl-flow>
            <tc-scroll-up size="30" />
            <tc-scroll-up size="60" />
            <tc-scroll-up size="45" />
          </tl-flow>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-scroll-up />
&lt;tc-scroll-up variant="filled" />
&lt;tc-scroll-up size="30" />
&lt;tc-scroll-up size="60" />
&lt;tc-scroll-up size="45" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Color & Background</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione harum
      qui nostrum excepturi error mollitia, maiores laudantium consequatur
      dolores possimus, ipsum in corrupti ex necessitatibus maxime sapiente, eum
      vero. Culpa.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="120">
        <div>
          <h2>error (border)</h2>
          <tc-scroll-up tfbackground="error" />
        </div>
        <div>
          <h2>error (filled)</h2>
          <tc-scroll-up tfbackground="error" variant="filled" />
        </div>
        <div>
          <h2>black & gold</h2>
          <tc-scroll-up background="#000" color="gold" />
        </div>
        <div>
          <h2>pink & pruple</h2>
          <tc-scroll-up background="pink" color="purple" variant="filled" />
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
c
&lt;tc-scroll-up tfbackground="error" />
&lt;tc-scroll-up tfbackground="error" variant="filled" />
&lt;tc-scroll-up background="#000" color="gold" />
&lt;tc-scroll-up background="pink" color="purple" variant="filled" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCScrollUp from '@/tccomponents/component/scrollup/TC-Scroll-Up.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'tc-scroll-up': TCScrollUp,
    'tc-card': TCCard,
    'tl-grid': TLGrid,
    'tl-flow': TLFlow,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDScrollUp extends Vue {}
</script>
<style lang="scss" scoped>
.tc-scroll-up {
  display: inline-flex;
  transform: scale(1);
  position: relative;
  margin: 3px;
  right: unset;
  left: unset;
}
</style>
