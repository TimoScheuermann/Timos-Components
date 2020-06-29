<template>
  <div class="tccomponents--howto">
    <tc-hero :hasFixedHeader="true">
      <img slot="background" src="assets/hero.png" id="bg" />
      <img src="assets/banner.png" />
      <h1>Getting Started</h1>
    </tc-hero>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TCHero } from '../../tccomponents_vue';

@Component({
  components: {
    'tc-hero': TCHero
  }
})
export default class TCComponentsHowTo extends Vue {}
</script>

<style lang="scss" scoped>
.tccomponents--howto {
  padding: env(safe-area-inset-top) 5vw;
  padding-bottom: calc(70px + env(safe-area-inset-bottom));
}
.tc-hero {
  @media only screen and(min-width: 700px) {
    margin-top: -50px;
  }
  h1 {
    margin: 0;
    text-align: center;
  }
  #bg {
    filter: blur(7px);
  }
}
</style>
