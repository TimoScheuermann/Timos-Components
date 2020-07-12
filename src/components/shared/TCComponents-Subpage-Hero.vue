<template>
  <tc-hero>
    <img
      slot="background"
      src="assets/hero.png"
      :class="{ dark: dark || $store.getters.dark }"
      id="bg"
    />
    <div class="hero-content" :class="{ dark: dark || $store.getters.dark }">
      <img :src="banner" />
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
  @Prop({ default: 'assets/banner.svg' }) banner!: string;
  @Prop() dark!: boolean;
}
</script>

<style lang="scss" scoped>
img#bg {
  filter: blur(7px);
  &.dark {
    filter: blur(7px) brightness(30%);
  }
}

.tc-hero {
  @media #{$isDesktop} {
    margin-top: calc(-50px - env(safe-area-inset-top));
  }
}

.hero-content {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  &.dark {
    color: $color_dark;
  }

  img {
    max-width: 230px;
  }
  h1 {
    color: inherit;
    margin-top: 10px;
    text-align: center;
  }
}
</style>
