<template>
  <div>
    <h1>Grid Layout</h1>
    <h2>Difference between auto-fill & auto-fit</h2>
    <tl-grid minWidth="150">
      <tc-card
        v-for="(a, i) in Array(3)"
        :key="'el' + i"
        :title="'Element ' + (i + 1)"
        subtitle="auto-fit"
      />
    </tl-grid>
    <br />
    <tl-grid minWidth="150" arrangement="auto-fill">
      <tc-card
        v-for="(a, i) in Array(3)"
        :key="'ell' + i"
        :title="'Element ' + (i + 1)"
        subtitle="auto-fill"
      />
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';

@Component({
  components: {
    'tl-grid': TLGrid,
    'tc-card': TCCard
  }
})
export default class TLDGrid extends Vue {}
</script>
