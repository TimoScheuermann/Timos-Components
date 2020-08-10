<template>
  <!-- eslint-disable -->
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, qui.
      Explicabo neque porro quaerat laboriosam maxime odit fugiat magni cum,
      tempora eaque molestias optio deleniti sapiente voluptas tenetur, illo
      magnam.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Simple Hero</h2>
      <tc-hero :dark="$store.getters.dark" :hasFixedHeader="false">
        <h1>Hero Title</h1>
      </tc-hero>
      <tc-code-example>
        <pre>
&lt;tc-hero :hasFixedHeader="false">
  &lt;h1>Hero Title&lt;/h1>
&lt;/tc-hero></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Hero & Background-Image</h2>
      <tc-hero color="#fff" :dark="$store.getters.dark" :hasFixedHeader="false">
        <img
          src="https://portfolio.timos.design/assets/home-hero.jpg"
          slot="background"
        />
        <h1>Hero Title</h1>
      </tc-hero>
      <tc-code-example>
        <pre>
&lt;tc-hero color="#fff" :hasFixedHeader="false">
  &lt;img
    src="https://portfolio.timos.design/assets/home-hero.jpg"
    slot="background"
  />
  &lt;h1>Hero Title&lt;/h1>
&lt;/tc-hero></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Hero & Gradients</h2>
      <tc-hero
        :dark="$store.getters.dark"
        color="#fff"
        gradient="linear-gradient(90deg, rgb(243, 114, 209) 0%,rgb(44, 19, 241) 100%)"
        :hasFixedHeader="false"
      >
        <h1>Hero Title</h1>
      </tc-hero>
      <tc-code-example>
        <pre>
&lt;tc-hero
  color="#fff"
  gradient="linear-gradient(90deg, rgb(243, 114, 209) 0%,rgb(44, 19, 241) 100%)"
  :hasFixedHeader="false"
>
  &lt;h1>Hero Title&lt;/h1>
&lt;/tc-hero></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCHero from '@/tccomponents/component/hero/TC-Hero.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-hero': TCHero,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample
  }
})
export default class TCComponentsHero extends Vue {}
</script>
<style lang="scss" scoped>
.tc-card:not(:first-child) {
  margin-top: 20px;
}
</style>
