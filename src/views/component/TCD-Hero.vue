<template>
  <!-- eslint-disable -->
  <div>
    <tc-headline title="Options" />

    <portfolio-code-example
      title="Simple Hero Section without Image"
      tag="tc-hero"
      :attr="{ hasFixedHeader: false, height: 100, background: '#6e6e6e' }"
      inner="<b>Hero Title</b>"
    >
      <tc-hero background="#6e6e6e" :hasFixedHeader="false" height="100">
        <b>Hero Title</b>
      </tc-hero>
    </portfolio-code-example>

    <portfolio-code-example
      title="Simple Hero Section with Background Slot"
      tag="tc-hero"
      :attr="{ hasFixedHeader: false }"
      :inner="
        `<img src='${src}' slot='background' />**Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio mollitia eaque velit accusantium iusto veritatis tenetur possimus, aut placeat vitae aspernatur reprehenderit quas, cupiditate minima facilis. Expedita repudiandae vitae voluptatum.`
      "
    >
      <tc-hero :hasFixedHeader="false">
        <img :src="src" slot="background" />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        mollitia eaque velit accusantium iusto veritatis tenetur possimus, aut
        placeat vitae aspernatur reprehenderit quas, cupiditate minima facilis.
        Expedita repudiandae vitae voluptatum.
      </tc-hero>
    </portfolio-code-example>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCHero from '@/tccomponents/hero/TC-Hero.vue';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tc-hero': TCHero
  }
})
export default class TCComponentsHero extends Vue {
  public src = 'https://gradientjoy.com/400x300?id=44';
}
</script>
<style lang="scss" scoped>
/deep/ .tc-hero {
  color: #fff;
}
</style>
