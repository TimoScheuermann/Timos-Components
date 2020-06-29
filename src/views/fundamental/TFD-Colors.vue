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
      :subtitle="(i % 2 == 1 ? 'Dark' : 'Light') + ' Background'"
      :dark="i % 2 == 1"
    >
      <tl-grid minWidth="150">
        <tc-card
          v-for="(c, index) in colors"
          :key="c.name"
          rounded="true"
          hover="true"
          :background="c.code"
          :color="index > 2 || index === 0 ? '#fff' : '#000'"
        >
          <b>{{ c.name }}</b>
        </tc-card>
      </tl-grid>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-card': TCCard,
    'tl-grid': TLGrid
  }
})
export default class TFDColors extends Vue {
  public colors: { name: string; code: string }[] = [
    { name: 'color', code: '#111' },
    { name: 'background', code: '#fff' },
    { name: 'paragraph', code: '#f0f0f0' },
    { name: 'primary', code: '#08f' },
    { name: 'error', code: '#ff4757' },
    { name: 'success', code: '#2ed573' },
    { name: 'alarm', code: '#f1c40f' }
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
