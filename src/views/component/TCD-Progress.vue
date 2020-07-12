<template>
  <div>
    <h1>Variants</h1>

    <tl-grid minWidth="350">
      <portfolio-code-example
        title="Progress-Ring"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring' }"
      >
        <tc-progress percent="33" type="ring" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Progress-Bar"
        tag="tc-progress"
        :attr="{ percent: 33 }"
      >
        <tc-progress percent="33" />
      </portfolio-code-example>

      <tc-card title="Animated" :subtitle="percent + '%'" :shadow="false">
        <tc-progress :percent="percent" type="ring" />
        <tc-progress :percent="percent" />
      </tc-card>
    </tl-grid>

    <h1>Different Colors</h1>
    <tl-grid minWidth="300">
      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 75, type: 'ring', color: 'red' }"
      >
        <tc-progress percent="75" type="ring" color="red" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 35, type: 'ring', color: 'orange' }"
      >
        <tc-progress percent="35" type="ring" color="orange" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 33, type: 'bar', color: 'magenta' }"
      >
        <tc-progress percent="33" type="bar" color="magenta" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 54, type: 'bar', color: 'aqua' }"
      >
        <tc-progress percent="54" type="bar" color="aqua" />
      </portfolio-code-example>
    </tl-grid>

    <h1>Changeing ringSize/ringWidth</h1>
    <tl-grid minWidth="350">
      <portfolio-code-example
        title="ringWidth"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring', ringWidth: 20 }"
      >
        <tc-progress percent="33" ringWidth="20" type="ring" />
      </portfolio-code-example>
      <portfolio-code-example
        title="ringSize"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring', ringSize: 100 }"
      >
        <tc-progress percent="33" ringSize="100" type="ring" />
      </portfolio-code-example>
      <portfolio-code-example
        title="ringWidth & ringSize"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring', ringWidth: 20, ringSize: 100 }"
      >
        <tc-progress percent="33" ringWidth="20" ringSize="100" type="ring" />
      </portfolio-code-example>
    </tl-grid>

    <h1>Different barHeight</h1>
    <tl-grid minWidth="350">
      <portfolio-code-example
        title="10"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'bar', barHeight: 10 }"
      >
        <tc-progress percent="33" barHeight="10" type="bar" />
      </portfolio-code-example>
      <portfolio-code-example
        title="15"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'bar', barHeight: 15 }"
      >
        <tc-progress percent="33" barHeight="15" type="bar" />
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCProgress from '@/tccomponents/progress/TC-Progress.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
@Component({
  components: {
    'tc-progress': TCProgress,
    'portfolio-code-example': PortfolioCodeExample,
    'tl-grid': TLGrid,
    'tc-card': TCCard
  }
})
export default class TCDProgress extends Vue {
  percent = 0;
  created(): void {
    this.increment();
  }
  increment(): void {
    this.percent++;
    if (this.percent > 100) this.percent = 0;
    setTimeout(
      () => {
        this.increment();
      },
      this.percent === 0 ? 1000 : 50
    );
  }
}
</script>
<style lang="scss" scoped>
.tc-progress__bar {
  margin-top: 30px !important;
}
</style>
