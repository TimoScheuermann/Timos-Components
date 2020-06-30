<template>
  <tc-hero>
    <img slot="background" src="assets/hero.png" id="bg" />
    <div class="hero-content">
      <img src="assets/banner.svg" />
      <h1>{{ subtitle }}</h1>
    </div>
  </tc-hero>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TCHero from '@/tccomponents/hero/TC-Hero.vue';

@Component({
  components: {
    'tc-hero': TCHero
  }
})
export default class TCComponentsSubpageHero extends Vue {
  @Prop() subtitle!: string;
}
</script>

<style lang="scss" scoped>
img#bg {
  filter: blur(7px);
}

.tc-hero {
  margin-top: calc(-50px - env(safe-area-inset-top));
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media #{$isMobile} {
    transform: translateY(25%);
  }
  img {
    max-width: 230px;
  }
  h1 {
    margin: 0;
    text-align: center;
  }
}
</style>
