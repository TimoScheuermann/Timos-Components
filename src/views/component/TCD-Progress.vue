<template>
  <div>
    <h1>Variants</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit accusantium,
      facere velit fuga soluta amet consectetur ut vel quos molestias ipsam
      tempore aperiam atque repellendus. Itaque quod ipsum repudiandae eligendi.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="200">
        <div>
          <h2>Progress-Bar</h2>
          <tc-progress :dark="$store.getters.dark" :percent="33" />
        </div>
        <div>
          <h2>Progress-Ring</h2>
          <tc-progress :dark="$store.getters.dark" type="ring" :percent="33" />
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-progress :percent="33" />
&lt;tc-progress type="ring" :percent="33" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit accusantium,
      facere velit fuga soluta amet consectetur ut vel quos molestias ipsam
      tempore aperiam atque repellendus. Itaque quod ipsum repudiandae eligendi.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="200">
        <div>
          <h2>error</h2>
          <tc-progress
            :dark="$store.getters.dark"
            type="ring"
            tfcolor="error"
            :percent="75"
          />
        </div>
        <div>
          <h2>orange</h2>
          <tc-progress
            :dark="$store.getters.dark"
            type="ring"
            color="orange"
            :percent="35"
          />
        </div>
        <div>
          <h2>success</h2>
          <tc-progress
            :dark="$store.getters.dark"
            tfcolor="success"
            :percent="33"
          />
        </div>
        <div>
          <h2>aqua</h2>
          <tc-progress :dark="$store.getters.dark" color="aqua" :percent="54" />
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-progress type="ring" tfcolor="error" :percent="75" />
&lt;tc-progress type="ring" color="orange" :percent="35" />
&lt;tc-progress tfcolor="success" :percent="33" />
&lt;tc-progress color="aqua" :percent="54" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Ring Options</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit accusantium,
      facere velit fuga soluta amet consectetur ut vel quos molestias ipsam
      tempore aperiam atque repellendus. Itaque quod ipsum repudiandae eligendi.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="200">
        <div>
          <h2>ringWidth</h2>
          <tc-progress
            :dark="$store.getters.dark"
            type="ring"
            ringWidth="20"
            :percent="33"
          />
        </div>
        <div>
          <h2>ringSize</h2>
          <tc-progress
            :dark="$store.getters.dark"
            type="ring"
            ringSize="100"
            :percent="33"
          />
        </div>
        <div>
          <h2>ringWidth & ringSize</h2>
          <tc-progress
            :dark="$store.getters.dark"
            type="ring"
            ringWidth="20"
            ringSize="100"
            :percent="33"
          />
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-progress type="ring" ringWidth="20" :percent="33" />
&lt;tc-progress type="ring" ringSize="100" :percent="33" />
&lt;tc-progress
  type="ring"
  ringWidth="20"
  ringSize="100"
  :percent="33"
/></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Bar Options</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit accusantium,
      facere velit fuga soluta amet consectetur ut vel quos molestias ipsam
      tempore aperiam atque repellendus. Itaque quod ipsum repudiandae eligendi.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="200">
        <div>
          <h2>barHeight (10px)</h2>
          <tc-progress
            :dark="$store.getters.dark"
            barHeight="10"
            :percent="33"
          />
        </div>
        <div>
          <h2>barHeight (15px)</h2>
          <tc-progress
            :dark="$store.getters.dark"
            barHeight="15"
            :percent="33"
          />
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-progress barHeight="10" :percent="33" />
&lt;tc-progress barHeight="15" :percent="33" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCProgress from '@/tccomponents/component/progress/TC-Progress.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
@Component({
  components: {
    'tc-progress': TCProgress,
    'tl-grid': TLGrid,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample
  }
})
export default class TCDProgress extends Vue {}
</script>
