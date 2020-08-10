<template>
  <div>
    <tc-card
      v-for="(a, i) in Array(2)"
      :key="i"
      shadow="true"
      hover="true"
      rounded="true"
      title="Colors"
      class="color-palette"
      :subtitle="'on ' + (i % 2 == 1 ? 'Dark' : 'Light') + ' Background'"
      :dark="i % 2 == 1"
    >
      <tl-grid minWidth="150">
        <tc-card
          v-for="c in colors"
          :key="c.name"
          rounded="true"
          hover="true"
          :tfbackground="c.name"
          :dark="!c.light"
        >
          <b>{{ c.name }}</b>
        </tc-card>
      </tl-grid>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-card': TCCard,
    'tl-grid': TLGrid
  }
})
export default class TFDColors extends Vue {
  public colors: { name: string; light?: boolean }[] = [
    { name: 'background', light: true },
    { name: 'backgroundDark' },
    { name: 'paragraph', light: true },
    { name: 'paragraphDark' },
    { name: 'container', light: true },
    { name: 'containerDark' },
    { name: 'color' },
    { name: 'colorDark', light: true },
    { name: 'primary' },
    { name: 'error' },
    { name: 'success' },
    { name: 'alarm' },
    { name: 'lightBlue' },
    { name: 'darkBlue' },
    { name: 'orange' }
  ];
}
</script>
<style lang="scss" scoped>
.tc-card {
  margin-top: 10px;
}
.color-palette {
  margin-top: 50px;
}
</style>
